import type { FC } from 'react';
import React, { useContext, useState, useEffect } from 'react';
import { context, Link, NavLink } from 'dumi/theme';
import Menus from './Menus';
import classnames from 'classnames';

import '@kdcloudjs/kdesign/dist/kdesign.css';
import './Navbar.less';

interface INavbarProps {
  location: any;
  navPrefix?: React.ReactNode;
  darkPrefix?: React.ReactNode;
}

const Navbar: FC<INavbarProps> = ({ navPrefix, location }) => {
  const {
    base,
    config: { mode, logo: logos, title },
    nav: navItems,
  } = useContext(context);

  const { pathname } = location;

  const needPaths = ['/', '/resource'];
  const isKDesign = title === 'KDesign';
  const needTransparent = isKDesign && needPaths.includes(pathname);

  const [transparent, setTransparent] = useState(false);
  useEffect(() => {
    needTransparent && window.scrollY === 0 && setTransparent(true);
  }, []);
  const handleNavbarMouseEnter = () => {
    needTransparent && setTransparent(false);
  };
  const handleNavbarMouseLeave = () => {
    needTransparent && window.scrollY === 0 && setTransparent(true);
  };

  const [hide, setHide] = useState(false);
  useEffect(() => {
    if (needTransparent) {
      const hideNavbar = (evt: Record<string, any>) => {
        setHide(evt.wheelDelta <= 0);
        setTransparent(window.scrollY === 0);
      };
      document.addEventListener('mousewheel', hideNavbar);

      return () => document.removeEventListener('mousewheel', hideNavbar);
    }
  }, [needTransparent]);
  const [logo, whiteLogo] = (logos as string).split(',');

  return (
    <div
      className={classnames('__dumi-kdesign-navbar', { transparent, hide })}
      data-mode={mode}
      onMouseEnter={handleNavbarMouseEnter}
      onMouseLeave={handleNavbarMouseLeave}
    >
      <div className="__dumi-kdesign-navbar-brand">
        <Menus hiddenInPc={title === 'KDesign'} />
        {/* logo */}
        <Link
          className="__dumi-kdesign-navbar-logo"
          style={{
            backgroundImage: transparent
              ? whiteLogo && `url('${whiteLogo}')`
              : logo && `url('${logo}')`,
          }}
          to={base}
        ></Link>
      </div>
      <div className="__dumi-kdesign-navbar-main">
        <nav>
          {/* nav */}
          {navItems.map((nav) => {
            const child = Boolean(nav.children?.length) && (
              <ul>
                {nav.children.map((item) => (
                  <li key={item.path}>
                    <NavLink to={item.path}>{item.title}</NavLink>
                  </li>
                ))}
              </ul>
            );

            return (
              <span key={nav.title || nav.path}>
                {nav.path ? (
                  <NavLink to={nav.path} key={nav.path}>
                    {nav.title}
                  </NavLink>
                ) : (
                  nav.title
                )}
                {child}
              </span>
            );
          })}
        </nav>
        <div className="__dumi-kdesign-right">
          {navPrefix}
          <span className="__dumi-kdesign-version">V2.0.0</span>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
