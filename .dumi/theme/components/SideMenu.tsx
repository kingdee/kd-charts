import type { FC, MouseEvent } from 'react';
import React, { useContext } from 'react';
import { context, Link, NavLink } from 'dumi/theme';
import LocaleSelect from './LocaleSelect';
import SlugList from './SlugList';
import './SideMenu.less';

interface INavbarProps {
  mobileMenuCollapsed: boolean;
  location: any;
  darkPrefix?: React.ReactNode;
  onMobileMenuClick: (ev: MouseEvent<HTMLButtonElement>) => void;
}

const SideMenu: FC<INavbarProps> = ({
  onMobileMenuClick,
  mobileMenuCollapsed,
  location,
}) => {
  const {
    config: {
      logo,
      title,
      description,
      mode,
      menus,
      repository: { url: repoUrl },
    },
    nav: navItems,
    base,
    meta,
    locale,
  } = useContext(context);
  const isHiddenMenus =
    Boolean((meta.hero || meta.features || meta.gapless) && mode === 'site') ||
    meta.sidemenu === false ||
    undefined;

  const docPath = location.pathname.match(/(\/\w+)/g);
  const docMens = menus[locale][docPath && docPath[0]];

  return (
    <div
      className="__dumi-kdesign-menu-wrapper"
      data-mobile-show={!mobileMenuCollapsed || undefined}
    >
      <div
        className="__dumi-kdesign-menu"
        data-mode={mode}
        data-hidden={isHiddenMenus}
        onClick={(evt) => evt.stopPropagation()}
        data-mobile-show={!mobileMenuCollapsed || undefined}
      >
        <div className="__dumi-kdesign-menu-inner">
          <div className="__dumi-kdesign-menu-header">
            <Link
              to={base}
              className="__dumi-kdesign-menu-logo"
              style={{
                backgroundImage: logo && `url('${logo}')`,
              }}
            />
            <h1>{title}</h1>
            <p>{description}</p>
            {/* github star badge */}
            {/github\.com/.test(repoUrl) && mode === 'doc' && (
              <p>
                <object
                  type="image/svg+xml"
                  data={`https://img.shields.io/github/stars${
                    repoUrl.match(/((\/[^\/]+){2})$/)[1]
                  }?style=social`}
                />
              </p>
            )}
          </div>
          {/* mobile nav list */}

          {false && (
            <div className="__dumi-kdesign-menu-mobile-area">
              {!!navItems.length && (
                <ul className="__dumi-kdesign-menu-nav-list">
                  {navItems.map((nav) => {
                    const child = Boolean(nav.children?.length) && (
                      <ul>
                        {nav.children.map((item) => (
                          <li key={item.path || item.title}>
                            <NavLink to={item.path}>{item.title}</NavLink>
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
                  <li>
                    <NavLink to="https://kingdee.design">KDesign</NavLink>
                  </li>
                </ul>
              )}
              {/* site mode locale select */}
              <LocaleSelect location={location} />
            </div>
          )}
          {/* menu list */}
          <ul className="__dumi-kdesign-menu-list">
            {docMens?.map((item) => {
              // always use meta from routes to reduce menu data size
              const hasSlugs = Boolean(meta.slugs?.length);
              const hasChildren =
                item.children && Boolean(item.children.length);
              const show1LevelSlugs =
                meta.toc === 'menu' &&
                !hasChildren &&
                hasSlugs &&
                item.path === location.pathname.replace(/([^^])\/$/, '$1');
              const menuPaths = hasChildren
                ? item.children.map((i) => i.path)
                : [
                    item.path,
                    // handle menu group which has no index route and no valid children
                    location.pathname.startsWith(`${item.path}/`) &&
                    meta.title === item.title
                      ? location.pathname
                      : null,
                  ];

              return (
                <li key={item.path || item.title}>
                  <NavLink
                    to={item.path}
                    isActive={() => menuPaths.includes(location.pathname)}
                  >
                    {item.title}
                  </NavLink>
                  {/* group children */}
                  {Boolean(item.children && item.children.length) && (
                    <ul>
                      {item.children.map((child) => (
                        <li key={child.path}>
                          <NavLink to={child.path} exact>
                            <span>{child.title}</span>
                          </NavLink>
                          {/* group children slugs */}
                          {Boolean(
                            meta.toc === 'menu' &&
                              typeof window !== 'undefined' &&
                              child.path === location.pathname &&
                              hasSlugs,
                          ) && <SlugList slugs={meta.slugs} />}
                        </li>
                      ))}
                    </ul>
                  )}
                  {/* group slugs */}
                  {show1LevelSlugs && <SlugList slugs={meta.slugs} />}
                </li>
              );
            })}
          </ul>

          <ul className="__dumi-kdesign-mobile-menu-list">
            {navItems.map(({ title, path }) => (
              <li key={path}>
                {menus[locale][path] ? (
                  <>
                    <h4 className="__dumi-kdesign-mobile-menu-list-title">
                      {title}
                    </h4>
                    <ul className="__dumi-kdesign-menu-list">
                      {menus[locale][path].map((item) => {
                        // always use meta from routes to reduce menu data size
                        const hasSlugs = Boolean(meta.slugs?.length);
                        const hasChildren =
                          item.children && Boolean(item.children.length);
                        const show1LevelSlugs =
                          meta.toc === 'menu' &&
                          !hasChildren &&
                          hasSlugs &&
                          item.path ===
                            location.pathname.replace(/([^^])\/$/, '$1');
                        const menuPaths = hasChildren
                          ? item.children.map((i) => i.path)
                          : [
                              item.path,
                              // handle menu group which has no index route and no valid children
                              location.pathname.startsWith(`${item.path}/`) &&
                              meta.title === item.title
                                ? location.pathname
                                : null,
                            ];

                        return (
                          <li key={item.path || item.title}>
                            <NavLink
                              to={item.path}
                              isActive={() =>
                                menuPaths.includes(location.pathname)
                              }
                            >
                              {item.title}
                            </NavLink>
                            {/* group children */}
                            {Boolean(item.children && item.children.length) && (
                              <ul>
                                {item.children.map((child) => (
                                  <li key={child.path}>
                                    <NavLink to={child.path} exact>
                                      <span>{child.title}</span>
                                    </NavLink>
                                    {/* group children slugs */}
                                    {Boolean(
                                      meta.toc === 'menu' &&
                                        typeof window !== 'undefined' &&
                                        child.path === location.pathname &&
                                        hasSlugs,
                                    ) && <SlugList slugs={meta.slugs} />}
                                  </li>
                                ))}
                              </ul>
                            )}
                            {/* group slugs */}
                            {show1LevelSlugs && <SlugList slugs={meta.slugs} />}
                          </li>
                        );
                      })}
                    </ul>
                  </>
                ) : (
                  <NavLink
                    className="__dumi-kdesign-mobile-menu-list-link"
                    to={path}
                  >
                    {title}
                  </NavLink>
                )}
              </li>
            ))}
          </ul>
        </div>
        {/* menu toogle button (only for mobile) */}
        <button
          className="__dumi-kdesign-menu-toggle"
          onClick={onMobileMenuClick}
        >
          <i className="__dumi-kdesign-menu-toggle-icon"></i>
        </button>
      </div>
    </div>
  );
};

export default SideMenu;
