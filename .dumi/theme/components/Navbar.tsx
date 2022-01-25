import { FC, MouseEvent, useEffect, useRef, useState } from 'react';
import React, { useContext, RefObject } from 'react';
import { context, Link, NavLink } from 'dumi/theme';
import { Tooltip } from '@kdcloudjs/kdesign';
import { useHistory } from 'react-router-dom';
import usePopper from '../../../node_modules/@kdcloudjs/kdesign/lib/_utils/usePopper';
import './Navbar.less';

interface INavbarProps {
  location: any;
  isTransparent: boolean;
  navPrefix?: React.ReactNode;
  onMobileMenuClick: (ev: MouseEvent<HTMLButtonElement>) => void;
  [key: string]: any;
}

const Navbar: FC<INavbarProps> = ({
  onMobileMenuClick,
  navPrefix,
  location,
  isTransparent,
  ...resProps
}) => {
  const {
    base,
    config: { mode, title, logo },
    nav: navItems,
  } = useContext(context);
  const history = useHistory();
  const [visible, setVisible] = useState<boolean | undefined>(undefined);
  const pathname = window.location.pathname;

  return (
    <div
      className={isTransparent ? 'navbar transparent' : 'navbar'}
      {...resProps}
    >
      <button className="navbar-toggle" onClick={onMobileMenuClick} />
      <div className="navbar-logo" onClick={() => history.push('/')} />
      <div className="navbar-charts">
        <nav>
          {navItems.map((nav, i) => {
            if (nav.show !== undefined && nav.show === false) {
              return null;
            }
            let flag = false;
            if (nav.path) {
              if (
                (pathname.startsWith('/charts/tutorial') && nav.path === '/tutorial') ||
                (pathname.startsWith('/charts/components') && nav.path === '/components')
              ) {
                flag = true;
              }
            }
            const base = (
              <span
                key={nav.title + i}
                className={flag ? 'active nav-title' : 'nav-title'}
              >
              {nav.path ? (
                <span
                  onClick={() => {
                    if (nav.path) {
                      history.push(nav.path);
                    }
                  }}
                >
                  {nav.title}
                </span>
              ) : (
                nav.title
              )}
            </span>
            );

            if (Boolean(nav.payload?.length)) {
              const sonItem = (
                <div className="nav-tooltip">
                  {nav.payload.map((son: any, si: number) => {
                    return (
                      <div
                        className="nav-tooltip-item"
                        key={son.title + si}
                        onClick={() => {
                          setVisible(false);
                          setTimeout(() => {
                            setVisible(undefined);
                          }, 300);
                        }}
                      >
                        <div className="nav-tooltip-item-top">{son.title}</div>
                        {son.children.map((s: any, ssi: number) => {
                          return (
                            <div
                              className="nav-tooltip-item-text"
                              key={s.title + ssi}
                              onClick={() => {
                                if (s.inner !== undefined && s.inner === false) {
                                  window.open(s.path);
                                } else {
                                  history.push(s.path);
                                }
                              }}
                            >
                              {s.title}
                            </div>
                          );
                        })}
                      </div>
                    );
                  })}
                </div>
              );

              return usePopper(base, sonItem, {
                arrow: false,
                placement: 'bottomLeft',
                prefixCls: 'kd-tooltip',
                trigger: 'hover',
                visible,
              });
            } else {
              return base;
            }
          })}
        </nav>
        <div className="navbar-search">
          {navPrefix}
          <span className="version">v 2.0.0</span>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
