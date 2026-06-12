import { slugify } from '../lib/templates.js';
import { log, saveOutput, title } from '../lib/output.js';

export function slugCommand(text = 'untitled project', options = {}) {
  const output = slugify(text);
  title('slug');
  log(output);
  log('');
  saveOutput(options.savePath, output);
  return output;
}
