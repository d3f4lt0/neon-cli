import { color } from '../lib/colors.js';
import { log, saveOutput, title } from '../lib/output.js';

export function commitCommand(type = 'feat', summaryParts = [], options = {}) {
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
  return output;
}
