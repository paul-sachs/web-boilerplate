import React from 'react';
// import { Provider } from 'react-redux';
// TODO expose these test helper in react-components
// import { mockStore } from '../mocks/store.mock.js';
// import { createReducer } from '../mocks/reducer.mock.js';
// import { createHandlers, initialState } from '../../src/fragments/notificationList/notificationListReducerHandlers.js';
// import createComponent from '../../src/fragments/notificationList/createNotificationList.js';
// import { createActionTypes } from '../../src/fragments/notificationList/notificationListActionTypes.js';
// import { createActionCreators } from '../../src/fragments/notificationList/notificationListActionCreator.js';
import { shallow, mount, render } from 'enzyme';
// import { getMostRecentAction } from '../test.help.js';
// import { NotificationList as RawNotificationList} from '../../src/fragments/notificationList/notificationListComponent.js';


describe('Sample Test', () => {
  // let store, NotificationList, comp, actionTypes, reducer, actions, clock, innerComp;

  beforeEach(() => {
    // jasmine.clock().install();
    //
    // store = mockStore({...initialState});
    // NotificationList = createComponent(prefix, state => state);
    // reducer = createReducer(initialState, createHandlers(prefix));
    // innerComp = <NotificationList/>;
    // comp = mount(<Provider store={store}>{innerComp}</Provider>);
    // actionTypes = createActionTypes(prefix);
    // actions = createActionCreators(actionTypes, {});
  });

  afterEach(() => {
    // jasmine.clock().uninstall();
    // actionTypes = null;
    // comp = null;
    // NotificationList = null;
    // reducer = null;
    // store = null;
  });

  it('Dumb Test', () => {
    expect(1).toBe(1);
  });
});
