import React, { useState } from 'react'
import LazyLoad from 'react-lazyload'
import PropTypes from 'prop-types'

function LazyImage(props) {
  const [loaded, setLoaded] = useState(false)
  const { children, imgProps, lazyProps } = props

  return (
    <LazyLoad placeholder={children} {...lazyProps}>
      {loaded ? (
        <img alt="" {...imgProps} />
      ) : (
        <>
          {children}
          <img style={{ display: 'none' }} onLoad={() => setLoaded(true)} alt="" {...imgProps} />
        </>
      )}
    </LazyLoad>
  )
}

LazyImage.propTypes = {
  children: PropTypes.node,
  imgProps: PropTypes.shape({ alt: PropTypes.string.isRequired }).isRequired,
  lazyProps: PropTypes.shape({ once: PropTypes.bool }),
}

LazyImage.defaultProps = {
  children: null,
  lazyProps: { once: true },
}

export default LazyImage
