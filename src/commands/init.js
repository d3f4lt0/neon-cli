import fs from 'node:fs';
import path from 'node:path';
import { color } from '../lib/colors.js';
import { log, title } from '../lib/output.js';

export function initProject(folder = 'neon-starter') {
  const targetDir = path.resolve(process.cwd(), folder);
  const projectName = path.basename(targetDir);

  if (fs.existsSync(targetDir)) {
    log(`${color.yellow}Folder already exists:${color.reset} ${targetDir}`);
    process.exit(1);
  }

  fs.mkdirSync(targetDir, { recursive: true });

  const readme = `# ${projectName}\n\nCreated with neon-cli.\n\n## scripts\n\n- start building\n`;
  const gitignore = `node_modules\n.env\n.dist\n`;
  const packageJson = {
    name: projectName,
    version: '0.1.0',
    private: true,
    scripts: {
      dev: 'echo "start building"'
    }
  };

  fs.writeFileSync(path.join(targetDir, 'README.md'), readme);
  fs.writeFileSync(path.join(targetDir, '.gitignore'), gitignore);
  fs.writeFileSync(path.join(targetDir, 'package.json'), JSON.stringify(packageJson, null, 2) + '\n');

  title('project created');
  log(`${color.green}Created:${color.reset} ${targetDir}`);
  log(`${color.gray}Next:${color.reset} cd ${projectName} && npm install`);
  log('');
}
