React boilerplate created by João Victor Manke

* Build process done with webpack
  * babel-loader for .js files
  * css-loader and postcss-loader for .css files
  * html-webpack-plugin for .html files

* ESLint and stylelint for javascript and css linting
  * Prettier and EditorConfig to enforce some rules on editor

* Express for server creation
  * webpack-dev-middleware and webpack-hot-middleware for dev server

* PostCSS for additional CSS features

* Docker config for facilitated deployment

* CircleCI config for integrated development test running

* Husky for git hooks for quality assurance during development
  * pre-commit linting
  * pre-push testing

* Jest and Enzyme for unit testing

* Plus various useful modules and scripts for react development
  * immutable
  * normalize.css
  * prop-types
  * react
  * react-dom
  * react-lazyload
  * react-redux
  * react-router-dom
  * redux
  * redux-define
  * redux-promise-middleware
  * redux-thunk
  * reselect
  * wretch

* And a prebuilt component (LazyImage) for image lazy loading

# Commands

* **start** -> run production server (make sure you run build and build:server beforehand)
* **test** -> run tests files
* **tdd** -> run jest watcher for continuous rerun of tests related to changed files
* **dev** -> run development with hot reload (no need to build:server beforehand)
* **build** -> bundle the app into dist/ folder
* **build:server** -> build src/server.js into dist-server/ folder
* **lint** -> run javascript and css linting
* **lint:eslint** -> run javascript linting
* **lint:stylelint** -> run css linting
* **component** -> (usage "npm run component *ComponentName*") create component boilerplate files into src/components/ folder
* **view** -> (usage "npm run view *ViewName*") create view boilerplate files to src/views/ folder
* **reducer** -> (usage "npm run reducer *ReducerName*") create reducer boilerplate files to src/modules/ folder
