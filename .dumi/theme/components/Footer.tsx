import { FC, useContext, useState } from 'react';
import { Row, Col } from '@kdcloudjs/kdesign';
import { context } from 'dumi/theme';
import classnames from 'classnames';
import styles from './Footer.less';

const Footer: FC = () => {
  const {
    config: { title },
  } = useContext(context);

  const { pathname } = location;
  const isKDesign = title === 'KDesign';
  const needTransparent = isKDesign && pathname === '/';

  return (
    <div
      className={classnames(styles.footer, {
        [styles.transparent]: needTransparent,
      })}
    >
      <div className={styles.main}>

        <div className={styles.bottom}>
          <Row className={styles.record}>
            <Col flex="auto">
              <div className={styles.beian}>
                ©1993 - {new Date().getFullYear()}
                <a href="https://beian.miit.gov.cn/" target="_blank">
                  粤ICP备05041751号
                </a>
                <a
                  href="https://www.beian.gov.cn/portal/registerSystemInfo?recordcode=44030502008641"
                  target="_blank"
                >
                  粤公网安备 44030502008641号
                </a>
              </div>
            </Col>
            <Col flex="none"></Col>
          </Row>
          <div className={styles.copyright}>
            金蝶软件（中国）有限公司版权所有
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
