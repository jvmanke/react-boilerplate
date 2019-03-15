/* eslint-disable import/no-extraneous-dependencies */
import React from 'react'
import { shallow } from 'enzyme'

import GeneralComponent from './GeneralComponent'

describe('GeneralComponent', () => {
  it('Should show boilerplate text', () => {
    const component = shallow(<GeneralComponent />)
    expect(component.text()).toBe('GeneralComponent')
  })
})
