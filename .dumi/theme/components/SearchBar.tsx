import React, { useState, useEffect, useRef } from 'react';
import { useSearch, AnchorLink } from 'dumi/theme';
import { Icon } from '@kingdee-ui/kui';
// @ts-ignore
import arrow from './img/arrow.png';
// @ts-ignore
import nodata from './img/nodata.png';
import './SearchBar.less';

const LIST = [
  { path: '/tutorial', name: '指南', list: [], key: 0 },
  { path: '/components', name: '组件', list: [], key: 1 },
  { name: '其它', list: [], key: 3 },
];

export function useOnClickOutside(
  refs: React.RefObject<HTMLElement>[],
  handler: (e: Event) => void,
) {
  useEffect(() => {
    const listener = (event: Event) => {
      for (const ref of refs) {
        if (!ref.current || ref.current.contains(event.target as Element)) {
          return;
        }
      }
      handler(event);
    };

    document.addEventListener('mousedown', listener);
    document.addEventListener('touchstart', listener);

    return () => {
      document.removeEventListener('mousedown', listener);
      document.removeEventListener('touchstart', listener);
    };
  }, [refs, handler]);
}

export default (props: any) => {
  const { isTransparent } = props;
  const [keywords, setKeywords] = useState<string>('');
  const [items, setItems] = useState<any>(undefined);
  const [show, setShow] = useState<boolean>(false);
  const input = useRef<HTMLInputElement>(null);
  const ref = useRef<HTMLInputElement>(null);
  const result = useSearch(keywords);

  useOnClickOutside([input, ref], () => {
    setShow(false);
    setKeywords('');
  });

  useEffect(() => {
    if (keywords) {
      setShow(true);
    } else {
      setShow(false);
    }
  }, [keywords]);

  useEffect(() => {
    if (Array.isArray(result) && result.length) {
      setShow(true);
      let map = JSON.parse(JSON.stringify(LIST));
      result.forEach(d => {
        let t = JSON.parse(JSON.stringify(d));
        const reg = new RegExp(keywords, 'g');
        if (t.parent?.title) {
          t.parent.title = t.parent.title.replace(
            reg,
            `<font style='color: #118af9'>${keywords}</font>`,
          );
        }
        t.title = t.title.replace(
          reg,
          `<font style='color: #118af9'>${keywords}</font>`,
        );

        let key;
        LIST.forEach(l => {
          if (l.path && d.path.startsWith(l.path)) {
            key = l.key;
          }
        });
        if (key || key === 0) {
          map[key].list.push(t);
        } else {
          map[map.length - 1].list.push(t);
        }
      });
      // ret.sort((a, b) => a.key - b.key);
      setItems(map);
    } else {
      setItems(null);
    }
  }, [result]);

  return (
    <div className={isTransparent ? 'search-bar' : 'search-bar white'}>
      <div className='search-bar-main'>
        <Icon className='search-bar-main-logo' type='search' />
        <input
          className='search-bar-main-input'
          type='search'
          placeholder='搜索您感兴趣的内容'
          ref={input}
          {...(Array.isArray(result)
            ? { value: keywords, onChange: ev => setKeywords(ev.target.value) }
            : {})}
        />
        {show && (
          <div className='search-bar-list' ref={ref}>
            {items ? items.map((d: any) => {
              if (d.list.length) {
                return (
                  <div className='search-bar-list-block' key={d.key}>
                    <div className='search-bar-list-block-title'>
                      <div>{d.name}</div>
                    </div>
                    <div className='search-bar-list-block-list'>
                      {d.list.map((meta: any, i: number) => {
                        return (
                          <div
                            className='search-bar-list-block-list-item'
                            key={meta.path + i}
                          >
                            <AnchorLink to={meta.path}>
                              {
                                meta.parent?.title
                                  ? (
                                    <>
                                      <div dangerouslySetInnerHTML={{ __html: meta.parent.title }} />
                                      <img src={arrow} alt='' />
                                    </>
                                  )
                                  : null
                              }
                              <div dangerouslySetInnerHTML={{ __html: meta.title }} />
                            </AnchorLink>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                );
              }
              return null;
            }) : (
              <div className='no-data'>
                <img src="/charts/theme/nodata.png" alt='' />
                <div>暂时没有你想要的内容</div>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};
