/* eslint-disable import/no-extraneous-dependencies */
import React from 'react'
import { shallow } from 'enzyme'

import App from './App'

describe('App', () => {
  it('Should show boilerplate text', () => {
    const component = shallow(<App />)
    expect(component.text()).toBe('App')
  })
})
