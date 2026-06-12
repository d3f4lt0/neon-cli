# neon-cli

A colorful developer CLI with lightweight AI workflow helpers, real terminal utilities, and Latin Darija support.

## why

`neon-cli` is made for developers who like clean terminal tools and fast idea-to-action workflows.
It mixes small CLI utilities with practical AI-friendly helpers, plus Darija-friendly output for builders who work in Latin Darija.

## features

- clean `src/`-based project structure
- automated tests for core commands
- GitHub Actions CI
- colorful terminal output
- `init` command to scaffold a tiny starter project
- `brainstorm` command for quick project ideas
- `commit` command for clean commit message suggestions
- `prompt` command for AI-ready build prompts
- `readme` command to generate a starter README
- `slug` command to create clean slugs from rough text
- `darija` command with Latin Darija dev helper output
- `studio` interactive mode for guided usage
- optional `--save` output export

## install

### local

```bash
git clone https://github.com/d3f4lt0/neon-cli.git
cd neon-cli
npm install
npm link
```

### npm (planned)

```bash
npm install -g neon-cli
```

> Publishing setup is prepared, but actual npm publishing still needs npm auth.

## usage

```bash
neon hello d3f4lt
neon brainstorm ai tools
neon commit feat onboarding flow
neon prompt build a calm productivity app --save prompt.txt
neon readme doomscroll-zero "A minimal anti-distraction launcher" --save README.generated.md
neon slug "Calm Productivity App"
neon darija "bghit prompt n9i bash nbuildi had feature"
neon studio
```

## real command demos

### brainstorm

```bash
$ neon brainstorm ai tools
```

### readme

```bash
$ neon readme doomscroll-zero "A minimal anti-distraction launcher"
```

### darija

```bash
$ neon darija "bghit prompt n9i bash nbuildi had feature"
```

More examples live in [`docs/demos.md`](./docs/demos.md).

## project structure

```txt
bin/
  neon.js
src/
  cli.js
  commands/
  lib/
tests/
  commands.test.js
docs/
  demos.md
  screenshots/
.github/
  workflows/ci.yml
```

## screenshots / gifs

Add terminal screenshots or demo GIFs under [`docs/screenshots`](./docs/screenshots/README.md).

Suggested files:

- `brainstorm-demo.png`
- `studio-demo.gif`
- `darija-demo.png`
- `readme-demo.png`

## tests

```bash
npm test
```

## ci

GitHub Actions runs the test suite on push and pull requests.

## roadmap

- [x] move to a `src/` structure
- [x] add automated tests
- [x] add GitHub Actions CI
- [x] add AI-flavored helper commands
- [x] add practical utility commands
- [x] add Latin Darija support
- [x] add interactive studio mode
- [x] support saving output to files
- [ ] publish package to npm
- [ ] add richer project templates
- [ ] add prompt presets for different workflows
- [ ] add polished terminal GIF demos

## status

Actively evolving, built in public.
