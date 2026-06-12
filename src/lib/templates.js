export function buildReadmeTemplate(projectName = 'my-project', description = 'A clean project built with neon-cli.') {
  return `# ${projectName}

${description}

## features

- clear purpose
- clean structure
- easy setup

## install

\`\`\`bash
npm install
\`\`\`

## usage

Describe the main commands or flows here.

## roadmap

- [ ] ship the first polished version
`;
}

export function slugify(text = '') {
  return text
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '') || 'untitled';
}
