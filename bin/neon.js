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
  gray: '\x1b[90m',
  blue: '\x1b[34m'
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

function section(label) {
  log(`${color.yellow}${label}${color.reset}`);
}

function showHelp() {
  title('neon-cli');
  log('A colorful developer CLI with lightweight AI workflow helpers.');
  log('');
  section('Usage');
  log('  neon hello [name]                Print a friendly neon greeting');
  log('  neon init [folder]               Create a tiny starter project');
  log('  neon brainstorm [topic]          Generate project ideas');
  log('  neon commit [type] [summary]     Suggest clean commit messages');
  log('  neon prompt [task]               Generate an AI-friendly prompt');
  log('  neon help                        Show this help message');
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

function brainstorm(topic = 'developer tools') {
  const ideas = [
    {
      name: 'signalboard',
      pitch: `A calm dashboard for tracking ${topic} with visible progress and low clutter.`
    },
    {
      name: 'promptforge',
      pitch: `A tiny utility that turns rough ${topic} ideas into clean AI prompts and action steps.`
    },
    {
      name: 'quietloop',
      pitch: `A minimalist workflow tool for planning, shipping, and reviewing ${topic} work.`
    }
  ];

  title('brainstorm');
  log(`${color.gray}topic:${color.reset} ${topic}`);
  log('');
  ideas.forEach((idea, index) => {
    log(`${color.green}${index + 1}. ${idea.name}${color.reset}`);
    log(`   ${idea.pitch}`);
  });
  log('');
}

function commit(type = 'feat', ...summaryParts) {
  const cleanedType = type.trim() || 'feat';
  const cleanedSummary = summaryParts.join(' ').trim() || 'project flow';
  const variants = [
    `${cleanedType}: ${cleanedSummary}`,
    `${cleanedType}: refine ${cleanedSummary}`,
    `${cleanedType}: polish ${cleanedSummary}`
  ];

  title('commit suggestions');
  variants.forEach((item, index) => {
    log(`${color.blue}${index + 1}.${color.reset} ${item}`);
  });
  log('');
}

function promptTask(task = 'build a clean developer tool') {
  const prompt = [
    'You are helping me build a polished software project.',
    `Task: ${task}.`,
    'Constraints:',
    '- Keep the UX clean and minimal.',
    '- Prefer practical features over fluff.',
    '- Explain the implementation plan before coding.',
    '- After implementation, explain the major decisions and tradeoffs.',
    '- Keep naming, file structure, and documentation clean.'
  ].join('\n');

  title('ai prompt');
  log(prompt);
  log('');
}

switch (command) {
  case 'hello':
    hello(args[1]);
    break;
  case 'init':
    initProject(args[1]);
    break;
  case 'brainstorm':
    brainstorm(args.slice(1).join(' ') || undefined);
    break;
  case 'commit':
    commit(args[1], ...args.slice(2));
    break;
  case 'prompt':
    promptTask(args.slice(1).join(' ') || undefined);
    break;
  case 'help':
  default:
    showHelp();
}
