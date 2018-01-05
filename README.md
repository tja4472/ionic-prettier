# Project Setup
## package.json
```
"scripts": {
    ...
    "prettier:base": "prettier \"./{e2e,src}/**/*.{scss,ts}\"",
    "prettier:list": "npm run prettier:base -- --list-different",
    "prettier:write": "npm run prettier:base -- --write"
},
"devDependencies": {
    ...
    "prettier": "1.9.2",

},  
```
## .prettierrc
```
{
    "singleQuote": true,
    "trailingComma": "es5",
    "requirePragma": true,
    "arrowParens": "always"
}
```
## home.ts
https://prettier.io/docs/en/options.html#require-pragma
```typescript
/**
 * @prettier
 */
```
## VS Code extension: Prettier formatter for Visual Studio Code
https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode

# Usage
## PowerShell
```
npm run prettier:write
npm run prettier:list | out-host
```
## VS Code
```
Format Document: alt+shift+F
```
# References
https://github.com/prettier/prettier

https://github.com/prettier/prettier-vscode

https://github.com/maxime1992/angular-ngrx-starter/blob/master/package.json
```
"prettier:base": "yarn-or-npm run prettier -- --single-quote --trailing-comma es5",
"prettier:base-files": "yarn-or-npm run prettier:base -- \"./{e2e,src}/**/*.{scss,ts}\"",
"prettier:fix": "yarn-or-npm run prettier:base-files -- --write",
"prettier:check": "yarn-or-npm run prettier:base-files -- -l",
```

