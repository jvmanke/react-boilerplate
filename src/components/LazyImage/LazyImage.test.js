/* eslint-disable import/no-extraneous-dependencies */
import React from 'react'
import { shallow, render } from 'enzyme'

import LazyImage from './LazyImage'

describe('LazyImage', () => {
  it('Should render chidren when not in view', () => {
    const component = shallow(
      <LazyImage imgProps={{ alt: 'empty img' }}>
        <span className="testChild">child</span>
      </LazyImage>
    )
    expect(component.find('.testChild').text()).toBe('child')
  })

  it('Should not render children when in view', () => {
    const component = render(
      <LazyImage imgProps={{ alt: 'empty img' }}>
        <span className="testChild">child</span>
      </LazyImage>
    )
    expect(component.find('.testChild').length).toBe(0)
  })
})
