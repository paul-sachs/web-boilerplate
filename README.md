# boilerplate

Things to know about how this project is run:
- Building and packaging is done via webpack.
- Testing is done via node

To install, just run `yarn`

Building assets will output to build/client with other intermediate results found in build.


## Coding suggestions ##

### Don't bother with action types ###
We suggest you use a library [redux-act](https://github.com/pauldijou/redux-act) to create actions. These helpers are really quite simple, it basically creates actions that also have an associated string type. This allows you to import the action itself instead of creating a different constant vaguely associated to the action.
This also simplifies creating reducers by using redux-act `createReducer` which just takes an object where the keys the action types that that reducer responds to:

```js
//src/store/actions/index.js

export const action = createAction('Some generic action');

//src/store/reducers/index.js

export default combineReducers({
	basic: createReducer({
		[action]: (basic, payload) => payload + 1
	}, 0)
});
```
What this means is that when `action` is dispatched, the store key `basic` will be set to whatever is sent to the action (payload) + 1. This is a very simple example but it introduces the basic concept of how to write simplified reducers. Keep in mind that these actions and reducers are all valid redux actions and reducers and can be used intermixed with other types of reducers/actions. It's just a different way of writing them. 

### New files as directories ### 
When creating a new component, or reducer, or really anything, consider creating a directory by the same name instead. The main part of your code can be the `index.js` file inside but you can still import it by just referencing the directory name. 

```js
//src/comonents/index.js
import Component1 from 'components/component1';
...

//src/components/component1/index.js
export default () => <div>Hey</div>
```

This allows you to create test, styles, or doc files in the same directory, keeping everything that's related close together.
Also note that I was able to import component/component1 without the relative path. This is because we've added the directory `src` as a resolve path. This can be used to make it much easier to move files around, irrespective of their directory structure.

### Try to use functional components ###
Functional react components are generally easier to test and they are also more performant. The only thing they cannot handle as well as classes is React Refs. We should generally be avoiding refs unless no other option exists.
To make functional components a doable thing, we'll turn to [recompose](https://github.com/acdlite/recompose) which will handle wrapping your functional component with things like computed props, state, and lifecycle methods.

### Server side state vs UI state ###
The redux store should be made up two distinct sections: one for server side data, and another for client side data. Server side data is anything fetched from an external source, client side data is things like selected items, text in a textbox, etc. Think about it like this, if the user refreshes the page, the server side data should be maintained, whereas the UI data could be wiped clean without much damage.
We store those under the `ui` key in the store.

### Async processes ### 
The preferred way of handling complex asyncronous actions is by using a library [redux-saga](https://github.com/redux-saga/redux-saga). We're not going to explain everything about sagas here but the general idea is that a saga listens for a redux action and can perform pretty much anything as a response, ranging from API calls to dispatching actions. The real special sauce of redux-saga is that it makes it look syncronous (using generators) and that it can be tested in absolute isolation.

### Reducers should be kept simple ###
Reducers should be responsible for very atomic actions, usually just setting some value (or clear). Any complex processing should be handled by the action creator itself, or, preferably, by a saga responsible for processing the action. Use selectors to compute on the given store.

### Selectors, selectors, selectors ###
Sometimes you want to have a particular view of the redux store, say, ordering or filtering data. Selectors are your friends here. They can perform processing of the entire state and are memoized for the best possible performance.

### Always immutable! ###
All of these practices work best when you don't mutate objects. To help with that, we've included a libary called [ramda](http://ramdajs.com/)) which is designed with immutability in mind. The basics of immutability say that you should always create a new object if you want to modify a property of it or any child.

```js
//mutated = bad
var object = { a: 3, b: 4, d: { inner: 1 } };
object.c = 5;
object.d.inner++;

// immutable
var newObject = { ...object, c: 5, d: { ...object.d, inner: object.d.inner + 1 } };
```

This is most certainly a more verbose method but there are helpers in ramda that help make it much simpler.

```js
import { merge } from 'ramda'

const object = { a: 3, b: 4, d: { inner: 1 } };

const new object = merge({ c: 5, d: { inner: object.d.inner + 1}}, object)
```

This is a relatively simple example and could be done with lodash, so why not use that library? ell, lodash also supports mutating functions, and we would much prefer not to use those, but also, ramda supports what is known as `currying`. This allows you to create new functions of other functions chained together and made reusable with no tweeking.

```js
import { pipe, sortBy, prop, filter, propSatisfies } from 'ramda';

const list = [{ name: 'Bob', age: 24 }, { name: 'Bill', age: 50 }, { name: 'Abby', age: 25 }]

const isEven = i => i % 2 == 0;

const sortAndFilter = pipe(
  sortBy(prop('name')),
  filter(propSatisfies(isEven, 'age'))
)

sortAndFilter(list)
```

As you can see, ramda helps create functions that can be used as a sort of custom DSL. Play with it yourself [here](http://ramdajs.com/repl/?v=0.22.1)

## Helpful Commands ##

Purpose | Command | Notes
--- | --- | ---
Run an individual test file | `yarn test -- ./src/components/base-component/test.js`
Run (and watch) an individual test file | `yarn test:watch -- ./src/components/base-component/test.js`
Run build and get stats on the bundle | `yarn build -- --profile --json > stats.json` | This file will contain a few lines at the start and end that aren't proper json. Trim them out before giving the output to any other tool.
