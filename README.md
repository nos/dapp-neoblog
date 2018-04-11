<p align="center">
  <img src="./logo.png" width="150px" /> 
</p>

<h1 align="center">react-stack-boilerplate</h1>

<p align="center">
  This creates a project <strong>boilerplate</strong> for <strong>React</strong> with a custom stack
</p>

<p align="center">
  <a href="https://github.com/jeroenptrs/react-stack-boilerplate/releases">
    <img src="https://img.shields.io/github/tag/jeroenptrs/react-stack-boilerplate.svg?style=flat">
  </a>
  <a href='https://travis-ci.org/jeroenptrs/react-stack-boilerplate?branch=master'>
    <img src='https://travis-ci.org/jeroenptrs/react-stack-boilerplate.svg?branch=master' alt='Build Status' />
  </a>
  <a href='https://coveralls.io/github/jeroenptrs/react-stack-boilerplate?branch=master'>
    <img src='https://coveralls.io/repos/github/jeroenptrs/react-stack-boilerplate/badge.svg?branch=master' alt='Coverage Status' />
  </a>
  <a href='https://gemnasium.com/github.com/jeroenptrs/react-stack-boilerplate'>
    <img src="https://gemnasium.com/badges/github.com/jeroenptrs/react-stack-boilerplate.svg" alt="Dependency Status" />
  </a>
  <a href="https://deepscan.io/dashboard#view=project&pid=2165&bid=11342">
    <img src="https://deepscan.io/api/projects/2165/branches/11342/badge/grade.svg" alt="DeepScan grade">
  </a>
  <img src='https://bettercodehub.com/edge/badge/jeroenptrs/react-stack-boilerplate?branch=master'>
  <a href='https://github.com/prettier/prettier'>
    <img src='https://img.shields.io/badge/code_style-prettier-ff69b4.svg?style=flat'>
  </a>
</p>

<p align="center">
  <img src="./exampleScreenshot.png" /> 
</p>

## Purpose
The goal of this project is to provide a quickstart in React with various, albeit opinionated, dependencies already installed and configured. Additionally, it's a way to provide good practices for repo management.

In this repo you can find:
* React, our framework of choice
* JSS, CSS in JSS
* Jest, a testing framework
* Babel, transpiling React and ES6 made ezpz
* Parcel, a kickass bundler
* Prettier and ESLint, kickass linting support

Also some plugins:
* vendor prefixing, camelCase and global styling JSS plugins
* env and React Babel presets
* babel-polyfill
* React and Prettier ESLint plugins

And finally some testing and security:
* Travis CI, automated builds/testing
* Coveralls, code coverage
* Deepscan and Better Code Hub, code analysis
* Gemnasium and Renovate, dependency monitoring

## Setup
```bash
$ git clone https://github.com/jeroenptrs/react-starter-boilerplate.git my-app
$ cd my-app
$ yarn
$ yarn start
```

Change `README.md` and `package.json` to fit your project needs. Delete `LICENSE` if not applicable.

## Testing
Use `yarn test:local` or `npm run test:local` to run all tests locally. The `test` command is reserved for CI builds.

## Document structure
```
react-stack-boilerplate
├── src
│   ├── __helpers__
│   ├── __mocks__
│   ├── assets
│   ├── components
│   │   └── __tests__
│   │       └── __snapshots__
│   └── views
│       └── __tests__
│           └── __snapshots__
├── .babelrc
├── .eslintrc
├── .gitignore
├── CHANGELOG.md
├── jest.config.js
├── jest.setup.js
├── package.json
├── README.md
└── yarn.lock
```

## Project guidelines
### Branches
* `master` and `development` are protected and require a PR with approved reviews for changes
* Use Conventional Commits' types for branches and camelCase the topic: `feat/ui`, `fix/login`, `chore/refactorHomePage`
* use Squash Merge - when possible - and reference the pull request in the conventional commit message: `feat(ui): added responsive styling (#1)`

### Committing and versioning
This project adheres to [Semantic Versioning](https://semver.org/) and [Conventional Commits](https://conventionalcommits.org/). Don't forget to scope your commits!

We use the following types everywhere: `feat`, `fix`, `chore` and `docs`. Refactor and test commits are considered chores. We only use `BREAKING CHANGE` when pushing, surprise surprise, breaking changes from `development` to `master`.

Merging a `BREAKING CHANGE` commit to master corresponds with a Major version, `feat` with minor and `fix` with patch. Bundle your `chore` and `docs` commits with any of the previously mentioned types.

**Don't forget to update the version in package.json as well before you merge a version update in development!** Because after every push to master, a corresponding tag should be created detailing all changes added to this new version in the summary and `CHANGELOG.md`.

Husky has been added to provide automated `precommit` functionality that's hooked into Prettier and Jest. You still need to `git add` these changes and amend them to the previous commit, **so don't forget to amend the changes before you push!**

### Changelogs
Speaking of changelogs! When pushing changes to `development` that warrant a version update, group changes per version and then per type. Order your change types like this (*but only use what's applicable*):
* Documentation
* Chores
* Bug Fixes
* Features
* BREAKING CHANGES

You can find inspiration in this entry [here](https://github.com/conventional-changelog/conventional-changelog/blob/master/packages/conventional-changelog/CHANGELOG.md#100-2016-02-05).

## Known issues
Build assets to dedicated subdirectory https://github.com/parcel-bundler/parcel/issues/233
