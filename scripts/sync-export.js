const fs = require('fs');
const path = require('path');

const projectRoot = path.resolve(__dirname, '..');
const exportDir = path.join(projectRoot, 'out');
const targetDir = path.resolve(projectRoot, '..', 'portfolio-export');

function ensureDirectory(dir) {
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }
}

function cleanTarget(dir) {
  const preserve = new Set(['.git', '.gitignore', 'CNAME']);
  if (!fs.existsSync(dir)) return;
  for (const entry of fs.readdirSync(dir)) {
    if (preserve.has(entry)) {
      continue;
    }
    fs.rmSync(path.join(dir, entry), { recursive: true, force: true });
  }
}

function ensureFile(filePath, contents = '') {
  fs.writeFileSync(filePath, contents, 'utf8');
}

function copyRecursive(src, dest) {
  const entries = fs.readdirSync(src, { withFileTypes: true });
  ensureDirectory(dest);
  for (const entry of entries) {
    const srcPath = path.join(src, entry.name);
    const destPath = path.join(dest, entry.name);
    if (entry.isDirectory()) {
      copyRecursive(srcPath, destPath);
    } else if (entry.isSymbolicLink()) {
      const target = fs.readlinkSync(srcPath);
      fs.symlinkSync(target, destPath);
    } else {
      fs.copyFileSync(srcPath, destPath);
    }
  }
}

function main() {
  if (!fs.existsSync(exportDir)) {
    throw new Error('Missing exported output directory. Ensure next build ran with output: "export".');
  }

  const indexTxtPath = path.join(exportDir, 'index.txt');
  if (fs.existsSync(indexTxtPath)) {
    fs.rmSync(indexTxtPath);
    console.log('> Removed optional export artifact: index.txt');
  }

  const cnamePath = path.join(exportDir, 'CNAME');
  ensureFile(cnamePath, 'appinex.me\n');

  const noJekyllPathExport = path.join(exportDir, '.nojekyll');
  if (!fs.existsSync(noJekyllPathExport)) {
    ensureFile(noJekyllPathExport);
  }

  console.log('> Preparing target directory:', targetDir);
  ensureDirectory(targetDir);
  cleanTarget(targetDir);

  console.log('> Copying exported files to target directory...');
  copyRecursive(exportDir, targetDir);

  ensureFile(path.join(targetDir, '.nojekyll'));
  ensureFile(path.join(targetDir, 'CNAME'), 'appinex.me\n');

  console.log('> Static bundle synced to portfolio-export.');
}

main();
