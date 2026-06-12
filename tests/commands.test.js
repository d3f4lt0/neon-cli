import test from 'node:test';
import assert from 'node:assert/strict';
import { brainstormCommand } from '../src/commands/brainstorm.js';
import { commitCommand } from '../src/commands/commit.js';
import { promptCommand } from '../src/commands/prompt.js';
import { readmeCommand } from '../src/commands/readme.js';
import { slugCommand } from '../src/commands/slug.js';
import { darijaCommand } from '../src/commands/darija.js';

test('brainstorm returns topic-aware output', () => {
  const output = brainstormCommand('ai tools');
  assert.match(output, /ai tools/);
  assert.match(output, /signalboard/);
});

test('commit returns formatted suggestions', () => {
  const output = commitCommand('feat', ['onboarding', 'flow']);
  assert.match(output, /feat: onboarding flow/);
});

test('prompt returns build instructions', () => {
  const output = promptCommand('build a test tool');
  assert.match(output, /Task: build a test tool\./);
});

test('readme returns project template', () => {
  const output = readmeCommand('demo-tool', 'A nice demo tool.');
  assert.match(output, /# demo-tool/);
  assert.match(output, /A nice demo tool\./);
});

test('slug creates a clean slug', () => {
  const output = slugCommand('Hello Neon CLI');
  assert.equal(output, 'hello-neon-cli');
});

test('darija mode returns latin darija helper', () => {
  const output = darijaCommand('bghit prompt n9i');
  assert.match(output, /Darija Latin helper/);
  assert.match(output, /bghit prompt n9i/);
});
