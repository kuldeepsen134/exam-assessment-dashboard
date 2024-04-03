import React from 'react'
import PropTypes from 'prop-types'

const Alert = ({ alerts }) => {
  if (alerts === null) {
    return ''
  }

  return (
    <div className="alert alert-danger" role="alert">
      {alerts.data.message}
    </div>
  )
}

Alert.propTypes = {
  alerts: PropTypes.any,
}

export default Alert
