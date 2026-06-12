import { buildReadmeTemplate } from '../lib/templates.js';
import { log, saveOutput, title } from '../lib/output.js';

export function readmeCommand(projectName = 'my-project', description = 'A clean project built with neon-cli.', options = {}) {
  const output = buildReadmeTemplate(projectName, description);
  title('readme starter');
  log(output);
  log('');
  saveOutput(options.savePath, output);
  return output;
}
