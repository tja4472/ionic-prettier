## Format document
```
SHIFT + ALT + F
```
## Run from command line
```
npm run prettier
```
## References
https://github.com/prettier/prettier

https://github.com/prettier/prettier-vscode

https://github.com/maxime1992/angular-ngrx-starter/blob/master/package.json
```
"prettier:base": "yarn-or-npm run prettier -- --single-quote --trailing-comma es5",
"prettier:base-files": "yarn-or-npm run prettier:base -- \"./{e2e,src}/**/*.{scss,ts}\"",
"prettier:fix": "yarn-or-npm run prettier:base-files -- --write",
"prettier:check": "yarn-or-npm run prettier:base-files -- -l",
```

