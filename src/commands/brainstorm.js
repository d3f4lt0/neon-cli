import { color } from '../lib/colors.js';
import { log, saveOutput, title } from '../lib/output.js';

export function brainstormCommand(topic = 'developer tools', options = {}) {
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
  return output;
}
