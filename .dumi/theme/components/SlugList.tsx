import { FC, useContext } from 'react';
import React from 'react';
import { AnchorLink, context } from 'dumi/theme';
import './SlugList.less';

const SlugsList: FC<{ slugs: any; className?: string }> = ({
  slugs,
  ...props
}) => {
  const { meta } = useContext(context);

  return (
    <ul role="slug-list" {...props}>
      {meta && meta.title && <li>{meta.title}</li>}
      {slugs
        .filter(({ depth = -Infinity }) => depth > 1 && depth < 3)
        .map((slug: any) => (
          <li key={slug.heading} title={slug.value} data-depth={slug.depth}>
            <AnchorLink to={`#${slug.heading}`}>
              <span>{slug.value}</span>
            </AnchorLink>
          </li>
        ))}
    </ul>
  );
};

export default SlugsList;
