<p align="center">
  <img src="./logo.png" width="150px" /> 
</p>

<h1 align="center">neoblog on nOs</h1>

<p align="center">
  This creates a project <strong>boilerplate</strong> for <strong>React</strong> with a custom stack
</p>

## Purpose
The goal is to provide an implementation of NeoBlog on nOs.

## Setup
```bash
$ git clone https://github.com/nOs/example-neoblog.git
$ cd example-neoblog
$ yarn
$ yarn start
```

## Testing
Use `yarn test:local` or `npm run test:local` to run all tests locally. The `test` command is reserved for CI builds.

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
