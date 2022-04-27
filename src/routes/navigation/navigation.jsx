import { Outlet, Link } from 'react-router-dom';

import { ReactComponent as CrwnLogo } from '../../assets/crown.svg';

import './navigation.scss';

export default function Navigation() {
  return (
    <>
      <div className="navigation">
        <Link className="logo-container" to="/">
          <CrwnLogo className="logo" />
        </Link>
        <div className="menu">
          <Link className="link" to="/shop">
            shop
          </Link>
          <Link className="link" to="/sign-in">
            sign in
          </Link>
        </div>
      </div>
      <Outlet />
    </>
  );
}
