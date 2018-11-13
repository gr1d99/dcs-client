import React from 'react'
import {shallow} from 'enzyme'

import Alert from './../../../components/shared/Alert'
import AlertTypes from './../../../constants/AlertTypes'

import './../../jestsetup'


const props = {
    kind: 'warning',
    message: 'warning message'
}

describe('Alert component', () => {
    it('should render a div with expected attributes', () => {
        const expectedClassName = AlertTypes[props.kind].props.className
        const wrapper = shallow(<Alert kind={props.kind} message={props.message}/>)
        const divs = wrapper.find('div')

        expect(wrapper.hasClass(expectedClassName))
        expect(divs.length).toEqual(1)
        expect(divs.first().text()).toBe(props.message)
    })

    it('should render an empty div if kind an message are undefined', () => {
        const wrapper = shallow(<Alert/>)
        const divs = wrapper.find('div')

        expect(divs.length).toBe(1)
        expect(divs.first().text()).toBe('')
    })
})
