import { Route } from 'react-router-dom';

const RouteWrapper = ({ component: Component, exact, path }) => (
  <>
    <Route
      exact={exact}
      path={path}
      render={props => (
        <Component {...props} />
      )} />
  </>
);

export default RouteWrapper;
