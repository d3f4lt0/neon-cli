import readline from 'node:readline';
import { color } from '../lib/colors.js';
import { log, title } from '../lib/output.js';
import { brainstormCommand } from './brainstorm.js';
import { commitCommand } from './commit.js';
import { promptCommand } from './prompt.js';
import { initProject } from './init.js';
import { readmeCommand } from './readme.js';
import { slugCommand } from './slug.js';
import { darijaCommand } from './darija.js';

function ask(rl, question) {
  return new Promise((resolve) => rl.question(question, (answer) => resolve(answer.trim())));
}

export async function studioCommand() {
  title('neon studio');
  log(`${color.gray}Choose a mode and generate something useful.${color.reset}`);
  log('');
  log('1. brainstorm project ideas');
  log('2. suggest commit messages');
  log('3. craft an ai build prompt');
  log('4. scaffold a starter project');
  log('5. generate a README starter');
  log('6. create a clean slug');
  log('7. darija latin helper');
  log('');

  const rl = readline.createInterface({ input: process.stdin, output: process.stdout });

  try {
    const choice = await ask(rl, 'Pick an option (1-7): ');

    if (choice === '1') {
      const topic = await ask(rl, 'Topic: ');
      brainstormCommand(topic || 'developer tools');
    } else if (choice === '2') {
      const type = await ask(rl, 'Commit type (feat/fix/chore/docs): ');
      const summary = await ask(rl, 'Summary: ');
      commitCommand(type || 'feat', summary ? summary.split(' ') : [], {});
    } else if (choice === '3') {
      const task = await ask(rl, 'Prompt task: ');
      promptCommand(task || 'build a clean developer tool');
    } else if (choice === '4') {
      const folder = await ask(rl, 'Folder name: ');
      initProject(folder || 'neon-starter');
    } else if (choice === '5') {
      const name = await ask(rl, 'Project name: ');
      const description = await ask(rl, 'Description: ');
      readmeCommand(name || 'my-project', description || 'A clean project built with neon-cli.');
    } else if (choice === '6') {
      const text = await ask(rl, 'Text to slugify: ');
      slugCommand(text || 'untitled project');
    } else if (choice === '7') {
      const text = await ask(rl, 'Darija input (optional): ');
      darijaCommand(text);
    } else {
      log(`${color.yellow}Unknown option.${color.reset}`);
      log('');
    }
  } finally {
    rl.close();
  }
}
