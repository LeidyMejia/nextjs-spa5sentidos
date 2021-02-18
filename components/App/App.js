import { withQuery } from 'hoc';
import { useEffect } from 'react';
import PropTypes from 'prop-types';
import { Layout } from 'components';
import { useDispatchApp } from 'context';
import { queryAppData } from 'components/queries';

const App = (props) => {
  const dispatch = useDispatchApp();
  const { children, layout, data } = props;

  useEffect(() => {
    if (!Object.keys(data).length) {
      return;
    }

    dispatch({
      type: 'SET_SITE_INFORMATION',
      payload: data.siteInformation
    })
    dispatch({
      type: 'SET_SOCIAL_INFORMATION',
      payload: data.menus[0]
    })
  }, [data])

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

export default withQuery(queryAppData)(App);