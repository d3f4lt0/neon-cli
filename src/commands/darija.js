import { log, saveOutput, title } from '../lib/output.js';
import { darijaDevSnippets, toDarijaLatin } from '../lib/darija.js';

export function darijaCommand(input = '', options = {}) {
  const output = input ? toDarijaLatin(input) : darijaDevSnippets();
  title('darija mode');
  log(output);
  log('');
  saveOutput(options.savePath, output);
  return output;
}
