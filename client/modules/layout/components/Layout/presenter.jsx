import React from 'react';
import { Link } from 'react-router-dom';

import * as Routing from '../../../../../common/constants/routing';

import { defaultProps, propTypes } from './props';
import styles from './styles.css';

class Layout extends React.PureComponent {
  render() {
    const { children } = this.props;

    return (
      <div className={styles.layout}>
        <header className={styles.header}>
          <div className={styles.headerContent}>
            <div className={styles.logoWrapper}>
              <a className={styles.logo} href="/" />
            </div>

            <h1 className={styles.title}>
              Combinatory
            </h1>
          </div>
        </header>

        <div className={styles.body}>
          {children}
        </div>

        <footer className={styles.footer}>
          <div className={styles.footerContent}>
            <Link to={Routing.SiteRoutes.about}>About</Link>
            <Link to={Routing.SiteRoutes.contact}>Contact</Link>
          </div>
        </footer>
      </div>
    );
  }
}

Layout.propTypes = propTypes;

Layout.defaultProps = defaultProps;

export default Layout;
