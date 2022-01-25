import React, { useContext, useState, useEffect } from 'react';
import { IRouteComponentProps } from '@umijs/types';
import { context, Link } from 'dumi/theme';
import { useHistory } from 'react-router-dom';
import Navbar from './components/Navbar';
import SideMenu from './components/SideMenu';
import SlugList from './components/SlugList';
import Footer from './components/Footer';

import './style/layout.less';
import SearchBar from './components/SearchBar';

const Layout: React.FC<IRouteComponentProps> = ({ children, location }) => {
  if (location.pathname === '/') {
    window.location.href = '/charts/tutorial';
  }
  const {
    config: { mode, repository },
    meta,
    locale,
  } = useContext(context);
  const [menuCollapsed, setMenuCollapsed] = useState<boolean>(false);
  const pathname = window.location.pathname;
  const history = useHistory();
  const showSlugs =
    Boolean(meta.slugs?.length) &&
    (meta.toc === 'content' || meta.toc === undefined) &&
    !meta.gapless;
  const updatedTimeIns = new Date(meta.updatedTime);
  const updatedTime: any = `${updatedTimeIns.toLocaleDateString([], {
    hour12: false,
  })} ${updatedTimeIns.toLocaleTimeString([], { hour12: false })}`;

  useEffect(() => {
    //滚动条自动隐藏
    let t1 = 0;
    let t2 = 0;
    let timer: any = null; // 定时器
    document.styleSheets[0].addRule(
      'body::-webkit-scrollbar-thumb',
      'display:none;',
    );

    // scroll监听
    document.onscroll = function() {
      clearTimeout(timer);
      timer = setTimeout(isScrollEnd, 500);
      t1 = document.documentElement.scrollTop || document.body.scrollTop;
      document.styleSheets[0].addRule(
        'body::-webkit-scrollbar-thumb',
        'display:block;',
      );
    };

    function isScrollEnd() {
      t2 = document.documentElement.scrollTop || document.body.scrollTop;
      if (t2 == t1) {
        document.styleSheets[0].addRule(
          'body::-webkit-scrollbar-thumb',
          'display:none;',
        );
      }
    }
  }, []);

  return (
    <div className='homepage'>
      <Navbar
        isTransparent={false}
        navPrefix={<SearchBar isTransparent={false} />}
        onMobileMenuClick={ev => {
          setMenuCollapsed(val => !val);
          ev.stopPropagation();
        }}
        location={''}/>
      <div className="index">
        {
          <SideMenu
            mobileMenuCollapsed={menuCollapsed}
            location={location}
          />
        }
        {showSlugs && (
          <SlugList slugs={meta.slugs} className="slug-list" />
        )}
        <div className="content">
          <div>
            {children}
            {meta.filePath && !meta.gapless && (
              <div className="content-update">
                      <span data-updated-text={'最后更新时间：'}>
                        {updatedTime}
                      </span>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Layout;
