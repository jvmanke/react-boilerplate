/* eslint-disable import/no-extraneous-dependencies */
import React from 'react'
import { shallow } from 'enzyme'

import RouteFallback from './RouteFallback'

describe('RouteFallback', () => {
  it('Should show boilerplate text', () => {
    const component = shallow(<RouteFallback />)
    const mainDiv = component.find('div')
    expect(mainDiv.text()).toBe('Loading...')
  })
})
