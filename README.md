<div align="center">
    <h1>Reacter</h1>
    <p>The special template for React</p>
</div>

## Feature
* [Tailwind x React](https://tailwindcss.com/docs/guides/create-react-app)
* [React Router](https://reactrouter.com/docs/en/v6/getting-started/installation)

## Prettier

[Link](https://prettier.io/docs/en/configuration.html)

-   ##### Install

```bash
npm install --save-dev --save-exact prettier
```

-   ##### Create file

```bash
# .prettierrc.json
echo {}> .prettierrc.json
# .prettierignore
build
coverage
REDME.md
```

-   ##### Formating

```bash
npx prettier --write .
# check special file
prettier --write app/<your_directory>
```

-   ##### Check everyone run

```bash
npx prettier --check .
```

-   ##### Watch for change

```bash
#package.json
{
  "scripts": {
    "prettier-watch": "onchange \"**/*\" -- prettier --write --ignore-unknown {{changed}}"
  }
}
```

## ESlint

-   ##### ESlint + prettier. ([Link](https://github.com/prettier/eslint-config-prettier#installation))

```bash
npm install --save-dev eslint-config-prettier
```

-   ##### Create file

```bash
npm init @eslint/config
```

##### Run

```bash
npx eslint <yourfile.js>
```

- ##### Auto fix on save
```bash
# settings.json
"editor.codeActionsOnSave": {
    "source.fixAll.eslint": true
  },
  "eslint.validate": ["javascript"]
```

-   ##### ESlint + React. ([Link](https://github.com/jsx-eslint/eslint-plugin-react))

## Editorconfig

```bash
# .editorconfig
[*]
charset = utf-8
insert_final_newline = true
end_of_line = lf
indent_style = space
indent_size = 4
max_line_length = 80
```

## Husky + Lint-staged

```bash
npm install --save-dev husky lint-staged
npx husky install
npm set-script prepare "husky install"
npx husky add .husky/pre-commit "npx lint-staged"
# package.json
"lint-staged": {
        "**/*": "prettier --write --ignore-unknown"
    },
"husky": {
    "hooks": {
        "applypatch-msg": "echo \"[Husky] applypatch-msg\"",
        "pre-applypatch": "echo \"[Husky] pre-applypatch\"",
        "post-applypatch": "echo \"[Husky] post-applypatch\"",
        "pre-commit": "prettier --write . && git add -A ."
    }
}
```


## Store with Zustand
[Link](https://github.com/pmndrs/zustand)

