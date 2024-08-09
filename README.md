## Run

Make sure you have installed the node version and yarn version specified in
[package.json](https://github.com/cBioPortal/cbioportal-frontend/blob/master/package.json).

> **Tip:**  For node, we recommend that you use [nvm:  Node Version Manager](https://github.com/nvm-sh/nvm) to switch between versions easily.

> **Tip:** For yarn, you can use [yarn set version](https://yarnpkg.com/cli/set/version) or `npm install yarn@(version)`.

Remove old compiled `node_modules` if it exists

```
rm -rf node_modules
```

To install all the dependencies
```
yarn install --frozen-lockfile
```

To lint the files
```
yarn lint
```

To run storybook 
```
cd src/storybook
nvm install 18.18.2 (If it does not exists, install any node version above 18)
nvm use 18.18.2 
yarn run storybook
```


To build the package
```
yarn build
```


