# boilerplate

Things to know about how this project is run:
- Building and packaging is done via webpack.
- Testing is done via node

To install, just run `yarn`

Building assets will output to build/client with other intermediate results found in build.


## Helpful Commands ##

Purpose | Command | Notes
--- | --- | ---
Run an individual test file | `yarn test -- ./src/components/base-component/test.js`
Run (and watch) an individual test file | `yarn test:watch -- ./src/components/base-component/test.js`
Run build and get stats on the bundle | `yarn build -- --profile --json > stats.json` | This file will contain a few lines at the start and end that aren't proper json. Trim them out before giving the output to any other tool.
