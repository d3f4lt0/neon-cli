#!/usr/bin/env node

import fs from 'node:fs';
import path from 'node:path';
import readline from 'node:readline';

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
  log('  neon hello [name]                         Print a friendly neon greeting');
  log('  neon init [folder]                        Create a tiny starter project');
  log('  neon brainstorm [topic] [--save file]     Generate project ideas');
  log('  neon commit [type] [summary] [--save file] Suggest clean commit messages');
  log('  neon prompt [task] [--save file]          Generate an AI-friendly prompt');
  log('  neon studio                               Launch interactive mode');
  log('  neon help                                 Show this help message');
  log('');
}

function hello(name = 'builder') {
  title('hello');
  log(`${color.green}Hey, ${name}.${color.reset}`);
  log(`${color.gray}Build something sharp today.${color.reset}`);
  log('');
}

function parseSaveArg(commandArgs) {
  const saveIndex = commandArgs.indexOf('--save');
  if (saveIndex === -1) {
    return { values: commandArgs, savePath: null };
  }

  const savePath = commandArgs[saveIndex + 1] || null;
  const values = commandArgs.filter((_, index) => index !== saveIndex && index !== saveIndex + 1);
  return { values, savePath };
}

function saveOutput(filePath, content) {
  if (!filePath) return;

  const resolvedPath = path.resolve(process.cwd(), filePath);
  fs.writeFileSync(resolvedPath, content + '\n');
  log(`${color.gray}saved:${color.reset} ${resolvedPath}`);
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

function brainstorm(topic = 'developer tools', options = {}) {
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

  const output = [
    'brainstorm',
    `topic: ${topic}`,
    '',
    ...ideas.flatMap((idea, index) => [`${index + 1}. ${idea.name}`, `   ${idea.pitch}`])
  ].join('\n');

  title('brainstorm');
  log(`${color.gray}topic:${color.reset} ${topic}`);
  log('');
  ideas.forEach((idea, index) => {
    log(`${color.green}${index + 1}. ${idea.name}${color.reset}`);
    log(`   ${idea.pitch}`);
  });
  log('');

  saveOutput(options.savePath, output);
}

function commit(type = 'feat', summaryParts = [], options = {}) {
  const cleanedType = type.trim() || 'feat';
  const cleanedSummary = summaryParts.join(' ').trim() || 'project flow';
  const variants = [
    `${cleanedType}: ${cleanedSummary}`,
    `${cleanedType}: refine ${cleanedSummary}`,
    `${cleanedType}: polish ${cleanedSummary}`
  ];

  const output = ['commit suggestions', ...variants.map((item, index) => `${index + 1}. ${item}`)].join('\n');

  title('commit suggestions');
  variants.forEach((item, index) => {
    log(`${color.blue}${index + 1}.${color.reset} ${item}`);
  });
  log('');

  saveOutput(options.savePath, output);
}

function promptTask(task = 'build a clean developer tool', options = {}) {
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

  saveOutput(options.savePath, prompt);
}

function ask(rl, question) {
  return new Promise((resolve) => rl.question(question, (answer) => resolve(answer.trim())));
}

async function studio() {
  title('neon studio');
  log(`${color.gray}Choose a mode and generate something useful.${color.reset}`);
  log('');
  log('1. brainstorm project ideas');
  log('2. suggest commit messages');
  log('3. craft an ai build prompt');
  log('4. scaffold a starter project');
  log('');

  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });

  try {
    const choice = await ask(rl, 'Pick an option (1-4): ');

    if (choice === '1') {
      const topic = await ask(rl, 'Topic: ');
      brainstorm(topic || 'developer tools');
    } else if (choice === '2') {
      const type = await ask(rl, 'Commit type (feat/fix/chore/docs): ');
      const summary = await ask(rl, 'Summary: ');
      commit(type || 'feat', summary ? summary.split(' ') : [], {});
    } else if (choice === '3') {
      const task = await ask(rl, 'Prompt task: ');
      promptTask(task || 'build a clean developer tool');
    } else if (choice === '4') {
      const folder = await ask(rl, 'Folder name: ');
      initProject(folder || 'neon-starter');
    } else {
      log(`${color.yellow}Unknown option.${color.reset}`);
      log('');
    }
  } finally {
    rl.close();
  }
}

async function main() {
  const { values, savePath } = parseSaveArg(args.slice(1));

  switch (command) {
    case 'hello':
      hello(values[0]);
      break;
    case 'init':
      initProject(values[0]);
      break;
    case 'brainstorm':
      brainstorm(values.join(' ') || undefined, { savePath });
      break;
    case 'commit':
      commit(values[0], values.slice(1), { savePath });
      break;
    case 'prompt':
      promptTask(values.join(' ') || undefined, { savePath });
      break;
    case 'studio':
      await studio();
      break;
    case 'help':
    default:
      showHelp();
  }
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
