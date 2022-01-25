import { FC, useEffect } from 'react';
import React, { useContext } from 'react';
import { context, Link, NavLink } from 'dumi/theme';
import LocaleSelect from './LocaleSelect';
import SlugList from './SlugList';
import './SideMenu.less';

interface INavbarProps {
  mobileMenuCollapsed: boolean;
  location: any;
}

const SideMenu: FC<INavbarProps> = ({ mobileMenuCollapsed, location }) => {
  const {
    config: {
      logo,
      title,
      description,
      mode,
      repository: { url: repoUrl },
    },
    menu,
    nav: navItems,
    base,
    meta,
  } = useContext(context);
  const isHiddenMenus =
    Boolean((meta.hero || meta.features || meta.gapless) && mode === 'site') ||
    meta.sidemenu === false ||
    undefined;

  const objectData = `https://img.shields.io/github/stars${
    // @ts-ignore
    repoUrl ? repoUrl.match(/((\/[^\/]+){2})$/)[1] : ''
  }?style=social`;

  useEffect(() => {
    let t1 = 0;
    let t2 = 0;
    let timer: any = null; // 定时器
    let element: any = document.getElementById('default-menu-inner');
    document.styleSheets[0].addRule(
      '.__dumi-default-menu-inner::-webkit-scrollbar-thumb',
      'display:none;',
    );

    element.onscroll = function() {
      clearTimeout(timer);
      timer = setTimeout(isScrollEnd, 500);
      t1 = element.scrollTop;
      document.styleSheets[0].addRule(
        '.__dumi-default-menu-inner::-webkit-scrollbar-thumb',
        'display:block;',
      );
    };

    function isScrollEnd() {
      t2 = element.scrollTop;
      if (t2 == t1) {
        document.styleSheets[0].addRule(
          '.__dumi-default-menu-inner::-webkit-scrollbar-thumb',
          'display:none;',
        );
      }
    }
  }, []);

  return (
    <div
      className='__dumi-default-menu'
      data-mode={mode}
      data-hidden={isHiddenMenus}
      data-mobile-show={!mobileMenuCollapsed || undefined}
    >
      <div className='__dumi-default-menu-inner' id='default-menu-inner'>
        {navItems.length ? (
          <div className='__dumi-default-menu-mobile-area'>
            <ul className='__dumi-default-menu-nav-list'>
              {navItems.map(nav => {
                const child = Boolean(nav.children?.length) && (
                  <ul>
                    {nav.children.map(item => (
                      <li key={item.path || item.title}>
                        <NavLink to={item.path || ''}>{item.title}</NavLink>
                      </li>
                    ))}
                  </ul>
                );

                return (
                  <li key={nav.path || nav.title}>
                    {nav.path ? (
                      <NavLink to={nav.path}>{nav.title}</NavLink>
                    ) : (
                      nav.title
                    )}
                    {child}
                  </li>
                );
              })}
            </ul>
            {/* site mode locale select */}
            <LocaleSelect location={location} />
          </div>
        ) : (
          <div className='__dumi-default-menu-doc-locale'>
            {/* doc mode locale select */}
            <LocaleSelect location={location} />
          </div>
        )}

        <ul className='__dumi-default-menu-list'>
          {!isHiddenMenus &&
          menu.map(item => {
            // always use meta from routes to reduce menu data size
            const hasSlugs = Boolean(meta.slugs?.length);
            const hasChildren =
              item.children && Boolean(item.children.length);
            const show1LevelSlugs =
              meta.toc === 'menu' &&
              !hasChildren &&
              hasSlugs &&
              item.path === location.pathname.replace(/([^^])\/$/, '$1');
            return (
              <li key={item.path || item.title}>
                <div className='list-second'>{item.title}</div>
                {/* group children */}
                {Boolean(item.children && item.children.length) && (
                  <ul>
                    {item.children &&
                    item.children.map(child => {
                      return (child as any).type === 'menu' ? (
                        <li key={child.path}>
                          {item.path ? (
                            <NavLink
                              className='list-third'
                              to={item.path}
                              exact
                            >
                              <span>{child.title}</span>
                            </NavLink>
                          ) : (
                            <div className='list-third'>
                              <span>{child.title}</span>
                            </div>
                          )}
                          <ul>
                            {child.children &&
                            child.children.map(c => (
                              <li key={c.path}>
                                <NavLink
                                  className='list-third'
                                  to={c.path || ''}
                                  exact
                                >
                                  {c.title}
                                </NavLink>
                                {/* group children slugs */}
                                {Boolean(
                                  meta.toc === 'menu' &&
                                  typeof window !== 'undefined' &&
                                  c.path === location.pathname &&
                                  hasSlugs,
                                ) && <SlugList slugs={meta.slugs} />}
                              </li>
                            ))}
                          </ul>
                        </li>
                      ) : (
                        <li key={child.path}>
                          <NavLink
                            className='list-third'
                            to={child.path || ''}
                            exact
                          >
                            <span>{child.title}</span>
                          </NavLink>
                        </li>
                      );
                    })}
                  </ul>
                )}
                {/* group slugs */}
                {show1LevelSlugs && <SlugList slugs={meta.slugs} />}
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default SideMenu;
