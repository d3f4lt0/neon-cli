import { log, saveOutput, title } from '../lib/output.js';

export function promptCommand(task = 'build a clean developer tool', options = {}) {
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
  return prompt;
}
