import PropTypes from 'prop-types';

const Social = ({ alignment = 'horizontal' }) => {
  return (
    <div className="social my-4">
      <h1>Social</h1>
      <ul>

      </ul>
    </div>
  )
}

Social.propTypes = {
  alignment: PropTypes.oneOf(['horizontal', 'vertical'])
}

export default Social;