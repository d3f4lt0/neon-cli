import fs from 'node:fs';
import path from 'node:path';
import { color, line } from './colors.js';

export function log(message = '') {
  console.log(message);
}

export function title(text) {
  log(line);
  log(`${color.cyan}${text}${color.reset}`);
  log(line);
}

export function section(label) {
  log(`${color.yellow}${label}${color.reset}`);
}

export function saveOutput(filePath, content) {
  if (!filePath) return null;

  const resolvedPath = path.resolve(process.cwd(), filePath);
  fs.writeFileSync(resolvedPath, content + '\n');
  log(`${color.gray}saved:${color.reset} ${resolvedPath}`);
  log('');
  return resolvedPath;
}

export function parseSaveArg(commandArgs) {
  const saveIndex = commandArgs.indexOf('--save');
  if (saveIndex === -1) {
    return { values: commandArgs, savePath: null };
  }

  const savePath = commandArgs[saveIndex + 1] || null;
  const values = commandArgs.filter((_, index) => index !== saveIndex && index !== saveIndex + 1);
  return { values, savePath };
}
