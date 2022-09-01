# defaang - configuration improvement plan

I'll list out what I did in this commit:

## tsconfig.json

Add 5 type checking.

### include

As mentioned in [tsconfig#include]:

> If a glob pattern doesn’t include a file extension, then only files with supported extensions are included (e.g. .ts, .tsx, and .d.ts by default, with .js and .jsx if allowJs is set to true).

We could remove file extension in option `include`. And add `"*"` to include root path config files.

### noImplicitReturns

Enable error reporting for codepaths that do not explicitly return in a function.

See more: [tsconfig#noImplicitReturns]

### noImplicitThis

Enable error reporting when this is given the type any.

See more: [tsconfig#noImplicitThis]

### noImplicitAny

Enable error reporting for expressions and declarations with an implied any type..

See more: [tsconfig#noImplicitAny]

### noUnusedLocals

Enable error reporting when a local variables aren't read.

See more: [tsconfig#noUnusedLocals]

### noUnusedParameters

Raise an error when a function parameter isn't read

See more: [tsconfig#noUnusedParameters]

[tsconfig#include]: https://www.typescriptlang.org/tsconfig#include
[tsconfig#noimplicitreturns]: https://www.typescriptlang.org/tsconfig#noImplicitReturns
[tsconfig#noimplicitthis]: https://www.typescriptlang.org/tsconfig#noImplicitThis
[tsconfig#noimplicitany]: https://www.typescriptlang.org/tsconfig#noImplicitAny
[tsconfig#nounusedlocals]: https://www.typescriptlang.org/tsconfig#noUnusedLocals
[tsconfig#nounusedparameters]: https://www.typescriptlang.org/tsconfig#noUnusedParameters

## package.json

Add `type-check` script to check typescript type using `tsc --noEmit`

## .eslintrc.json

Add plugin `@typescript-eslint/eslint-plugin` and its parser `@typescript-eslint/parser` for typescript lint.

### @typescript-eslint/eslint-plugin

An ESLint plugin which provides lint rules for TypeScript codebases.

npm module: [@typescript-eslint/eslint-plugin](https://www.npmjs.com/package/@typescript-eslint/eslint-plugin)

### @typescript-eslint/parser

An ESLint parser which leverages TypeScript ESTree to allow for ESLint to lint TypeScript source code.

Set `parserOptions.project` to `./tsconfig.json`. Provide `tsconfig`'s rules for the parser.

npm module: [@typescript-eslint/parser](https://www.npmjs.com/package/@typescript-eslint/parser)

## .eslintignore

According to [eslint ignoring code]:

> In addition to any patterns in the .eslintignore file, ESLint always follows a couple of implicit ignore rules even if the --no-ignore flag is passed. The implicit rules are as follows:
>
> 1. node_modules/ is ignored.
> 2. dot-files (except for .eslintrc.\*), as well as dot-folders and their contents, are ignored.

We could remove both `node_modules` and `dot-files` in the `.eslintignore`, and some unnecessary files like: `/.pnp`, and debug files to keep it clean.

These are what I think should be removed:

- node_modules
- /pnp
- .pnp.js
-

[eslint ignoring code]: https://eslint.org/docs/latest/user-guide/configuring/ignoring-code
