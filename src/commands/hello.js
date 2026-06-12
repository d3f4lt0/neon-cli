import { color } from '../lib/colors.js';
import { log, title } from '../lib/output.js';

export function helloCommand(name = 'builder') {
  title('hello');
  log(`${color.green}Hey, ${name}.${color.reset}`);
  log(`${color.gray}Build something sharp today.${color.reset}`);
  log('');
}
