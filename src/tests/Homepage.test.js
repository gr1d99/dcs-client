import React from 'react';
import Enzyme, { configure, shallow, mount, render } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import Homepage from '../components/Homepage'

configure({ adapter: new Adapter() });

describe('HomePage component', function () {
    it('should render welcome text', function () {
        const wrapper = shallow(<Homepage/>);
        expect(wrapper.find('p').text()).toEqual('EEfficiently manage your dairy cattle through data')
    });
});
