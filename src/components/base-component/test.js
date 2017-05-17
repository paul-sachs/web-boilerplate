import test from 'ava';
import { shallow } from 'enzyme';
import React from 'react';
import BaseComponent from './';

test('foo6', t => {
	const exportDocument = shallow(<BaseComponent />);

	t.snapshot(exportDocument.node);
});
