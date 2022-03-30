import React from 'react';
import { Spin } from '@kdcloudjs/kdesign';
import '../.dumi/theme/style/kui.min.less';

export default () => {
  return (
    <div style={{ marginTop: 'calc(50vh - 50px)' }}>
      <Spin />
    </div>
  );
};
