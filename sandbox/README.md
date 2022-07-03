# Development sandbox

This directory is made to facilitate package creation and testing.

Every file in this directory except the `README.md` file will be ignored by git.

## Setup a development environment

The easiest way to get your development environment started is by using the `@ineka/create-game` package.

In the sandbox directory create a new game:
```bash
> cd sandbox
> npx @ineka/create-game <name>
```

If you have **npm 6+** (recommended) you can also use:
```bash
npm init @ineka/game <name>
# Or
npm create @ineka/game <name>
```

Once the new game project is setup you can start developing.

## Warnings when using the sandbox

The sandbox directories are included to the monorepo workspaces. As such they are added to the `package-lock.json` file. 

**Watch out not to commit/push your package-lock containing sandbox related entries! They are meant to stay local.**