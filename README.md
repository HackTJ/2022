# HackTJ 8.0

[![lint](https://github.com/HackTJ/2022/workflows/lint/badge.svg?event=push)](https://github.com/HackTJ/2022/actions?query=workflow%3Alint)

The website for HackTJ 8.0.

## Setup

- `yarn install`

## Development

We use React.

### Creating a New Event Website

```sh
git clone git@github.com:HackTJ/2022.git 2022 && cd 2022/
yarn install
git reset "$(git commit-tree HEAD^"{tree}" -m "Push HackTJ 8.0 website" -m "$(yarn run git-history-coauthors)")"  # squash all commits into 1
git remote set-url origin git@github.com:HackTJ/2022.git
git push
```

## Deployment

- `yarn upgrade-interactive`
- `yarn dedupe`
- `yarn run lint`
- `yarn run test`
- `yarn run switch event`: switch to the event repository (configures the project so that builds are for `/2022`)
- `yarn run switch homepage`: switch to the homepage repository (configures the project so that builds are for `/`)
- `yarn run start`: starts a development server on [port 3000](localhost:3000) and watches files for changes, compiling them on the fly
- `yarn run build`: compiles all files to the `build/` directory but doesn't watch for changes or start a server
- `yarn serve build/`: starts a static server using the files in `build/`
- `yarn run deploy event`: pushes to the `gh-pages` branch of this repository and deploys the site to <https://hacktj.org/2022>
- `yarn run deploy homepage`: pushes to the [hacktj.github.io repo](https://github.com/HackTJ/hacktj.github.io) and deploys the site to <https://hacktj.org>
- `yarn run deploy all`: shortcut for both `yarn run deploy event` and `yarn run deploy homepage`

In the case that one of the endpoints (/2022 or /) doesn't work but the other does, immediately set up a hardcoded redirect in the nonfunctional repository to redirect to the correct site.

To test a production build locally:

1.  `yarn run switch homepage`
2.  `yarn run build`
3.  `yarn serve build`

To deploy a change:

1.  `yarn run start`
2.  make your changes; when you're done, close the development server
3.  `yarn run lint`
4.  `git add . && git commit`
5.  `yarn run deploy event`; make sure the deployed site looks good
6.  `yarn run deploy homepage`; make sure the deployed site looks good
7.  `git push`

## Notes for next year

- create a new repository under the HackTJ organization for each event
- the `deploy event` script doesn't commit the source code to the repository's main branch, it only commits the built website
  - you should commit the source code to the `main` branch each time you deploy
    - before you commit to `main`, always make sure you run `yarn run switch event`
      - if you need to, create a [pre-commit hook](https://git-scm.com/docs/githooks#_pre_commit) to automatically do this
- don't run `git pull` after `yarn run switch homepage`
  - only pull when you're set up for the event repository
