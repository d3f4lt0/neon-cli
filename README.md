# neon-cli

A tiny colorful terminal starter for developer workflows.

## features

- colorful terminal output
- friendly `hello` command
- `init` command to scaffold a tiny starter folder
- simple, hackable structure

## why

I like terminal tools that feel fast, clean, and fun to use.
`neon-cli` is a small playground for that idea.

## install

```bash
git clone https://github.com/d3f4lt0/neon-cli.git
cd neon-cli
npm install
npm link
```

## usage

```bash
neon hello
neon hello d3f4lt
neon init my-app
```

## example

```bash
$ neon hello d3f4lt

────────────────────────────────────────
hello
────────────────────────────────────────
Hey, d3f4lt.
Build something sharp today.
```

## roadmap

- [x] create first commands
- [x] scaffold starter folder
- [ ] add interactive prompts
- [ ] ship better templates
- [ ] improve terminal styling

## stack

- Node.js
- JavaScript (ESM)

## status

Early version, built in public.
