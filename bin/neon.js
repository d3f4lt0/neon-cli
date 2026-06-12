#!/usr/bin/env node

import fs from 'node:fs';
import path from 'node:path';

const args = process.argv.slice(2);
const command = args[0] || 'help';

const color = {
  reset: '\x1b[0m',
  cyan: '\x1b[36m',
  green: '\x1b[32m',
  yellow: '\x1b[33m',
  magenta: '\x1b[35m',
  gray: '\x1b[90m'
};

const line = `${color.magenta}────────────────────────────────────────${color.reset}`;

function log(message = '') {
  console.log(message);
}

function title(text) {
  log(line);
  log(`${color.cyan}${text}${color.reset}`);
  log(line);
}

function showHelp() {
  title('neon-cli');
  log('A tiny colorful terminal starter for developer workflows.');
  log('');
  log(`${color.yellow}Usage${color.reset}`);
  log('  neon hello [name]     Print a friendly neon greeting');
  log('  neon init [folder]    Create a tiny starter project');
  log('  neon help             Show this help message');
  log('');
}

function hello(name = 'builder') {
  title('hello');
  log(`${color.green}Hey, ${name}.${color.reset}`);
  log(`${color.gray}Build something sharp today.${color.reset}`);
  log('');
}

function initProject(folder = 'neon-starter') {
  const targetDir = path.resolve(process.cwd(), folder);
  const projectName = path.basename(targetDir);

  if (fs.existsSync(targetDir)) {
    log(`${color.yellow}Folder already exists:${color.reset} ${targetDir}`);
    process.exit(1);
  }

  fs.mkdirSync(targetDir, { recursive: true });

  const readme = `# ${projectName}\n\nCreated with neon-cli.\n\n## scripts\n\n- start building\n`;
  const gitignore = `node_modules\n.env\n.dist\n`;
  const packageJson = {
    name: projectName,
    version: '0.1.0',
    private: true,
    scripts: {
      dev: 'echo "start building"'
    }
  };

  fs.writeFileSync(path.join(targetDir, 'README.md'), readme);
  fs.writeFileSync(path.join(targetDir, '.gitignore'), gitignore);
  fs.writeFileSync(path.join(targetDir, 'package.json'), JSON.stringify(packageJson, null, 2) + '\n');

  title('project created');
  log(`${color.green}Created:${color.reset} ${targetDir}`);
  log(`${color.gray}Next:${color.reset} cd ${projectName} && npm install`);
  log('');
}

switch (command) {
  case 'hello':
    hello(args[1]);
    break;
  case 'init':
    initProject(args[1]);
    break;
  case 'help':
  default:
    showHelp();
}
