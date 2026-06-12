import { parseSaveArg, section } from './lib/output.js';
import { helloCommand } from './commands/hello.js';
import { initProject } from './commands/init.js';
import { brainstormCommand } from './commands/brainstorm.js';
import { commitCommand } from './commands/commit.js';
import { promptCommand } from './commands/prompt.js';
import { readmeCommand } from './commands/readme.js';
import { slugCommand } from './commands/slug.js';
import { darijaCommand } from './commands/darija.js';
import { studioCommand } from './commands/studio.js';
import { title, log } from './lib/output.js';

export function showHelp() {
  title('neon-cli');
  log('A colorful developer CLI with lightweight AI workflow helpers.');
  log('');
  section('Usage');
  log('  neon hello [name]');
  log('  neon init [folder]');
  log('  neon brainstorm [topic] [--save file]');
  log('  neon commit [type] [summary] [--save file]');
  log('  neon prompt [task] [--save file]');
  log('  neon readme [project-name] [description] [--save file]');
  log('  neon slug [text] [--save file]');
  log('  neon darija [text] [--save file]');
  log('  neon studio');
  log('  neon help');
  log('');
}

export async function runCli(argv) {
  const command = argv[0] || 'help';
  const { values, savePath } = parseSaveArg(argv.slice(1));

  switch (command) {
    case 'hello':
      helloCommand(values[0]);
      break;
    case 'init':
      initProject(values[0]);
      break;
    case 'brainstorm':
      brainstormCommand(values.join(' ') || undefined, { savePath });
      break;
    case 'commit':
      commitCommand(values[0], values.slice(1), { savePath });
      break;
    case 'prompt':
      promptCommand(values.join(' ') || undefined, { savePath });
      break;
    case 'readme':
      readmeCommand(values[0], values.slice(1).join(' ') || undefined, { savePath });
      break;
    case 'slug':
      slugCommand(values.join(' ') || undefined, { savePath });
      break;
    case 'darija':
      darijaCommand(values.join(' ') || undefined, { savePath });
      break;
    case 'studio':
      await studioCommand();
      break;
    case 'help':
    default:
      showHelp();
  }
}
