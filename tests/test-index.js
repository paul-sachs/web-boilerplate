var testsContext = require.context(".", true, /spec$/);
testsContext.keys().forEach(testsContext);

var componentsContext = require.context('../src/components', true, /\.js$/);

componentsContext.keys().forEach(componentsContext);
