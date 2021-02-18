import { memo } from 'react';
import { withQuery } from 'hoc';
import PropTypes from 'prop-types';
import { Layout } from 'components';

const App = ({ children, layout = false }) => {
  return (
    <div className="App">
      { (layout) ? (<Layout>{ children }</Layout>) : children }
    </div>
  )
};

App.propTypes = {
  children: PropTypes.node.isRequired,
  layout: PropTypes.bool,
}

export default memo(App);