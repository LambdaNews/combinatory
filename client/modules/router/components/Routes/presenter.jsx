import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import * as Routing from '../../../../../common/constants/routing';

import { Landing, About, Contact } from '../../../landing/components';
import { Layout } from '../../../layout/components';

import { defaultProps, propTypes } from './props';

class Routes extends React.Component {
  render() {
    return (
      <Router>
        <Layout>
          <Switch>
            <Route path={Routing.SiteRoutes.about} component={About} />
            <Route path={Routing.SiteRoutes.contact} component={Contact} />
            <Route path={Routing.SiteRoutes.home} component={Landing} />
          </Switch>
        </Layout>
      </Router>
    );
  }
}

Routes.propTypes = propTypes;

Routes.defaultProps = defaultProps;

export default Routes;
