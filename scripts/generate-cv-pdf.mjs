import { access, mkdir } from 'node:fs/promises';
import { constants } from 'node:fs';
import { spawn } from 'node:child_process';
import { fileURLToPath, pathToFileURL } from 'node:url';
import path from 'node:path';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const input = path.join(root, 'public', 'cv.html');
const output = path.join(root, 'public', 'cv.pdf');

const candidates = [
  process.env.CHROME_PATH,
  '/usr/bin/google-chrome',
  '/usr/bin/google-chrome-stable',
  '/usr/bin/chromium',
  '/usr/bin/chromium-browser',
].filter(Boolean);

const findChrome = async () => {
  for (const candidate of candidates) {
    try {
      await access(candidate, constants.X_OK);
      return candidate;
    } catch {
      // Try the next known browser path.
    }
  }

  throw new Error(
    'No se encontro Chrome/Chromium. Define CHROME_PATH o instala google-chrome/chromium para generar el PDF.',
  );
};

const chrome = await findChrome();
await mkdir(path.dirname(output), { recursive: true });

const args = [
  '--headless=new',
  '--disable-gpu',
  '--no-sandbox',
  '--disable-dev-shm-usage',
  '--no-pdf-header-footer',
  '--print-to-pdf-no-header',
  `--print-to-pdf=${output}`,
  pathToFileURL(input).href,
];

await new Promise((resolve, reject) => {
  const child = spawn(chrome, args, { stdio: 'inherit' });
  child.on('error', reject);
  child.on('exit', (code) => {
    if (code === 0) {
      resolve();
      return;
    }
    reject(new Error(`Chrome salio con codigo ${code}`));
  });
});

console.log(`CV PDF generado en ${path.relative(root, output)}`);
