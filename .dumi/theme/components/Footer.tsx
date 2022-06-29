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
        <Row className={styles.top} gutter={0} align="bottom">
          <Col flex="none" className={styles.contact}>
            <div className={styles.kingdee}>
              <img src={require('../images/kingdee.png')} />
            </div>
            <div className={styles.email}>
              <span className={styles.label}>邮箱：</span>
              <a href="mailto:KUX@kingdee.com">KUX@kingdee.com</a>
            </div>
          </Col>
          <Col flex="auto" className={styles.links}>
            <span className={styles.label}>快速链接：</span>
            <ul>
              <li>
                <a target="_blank" href="https://www.kingdee.com">
                  金蝶官网
                </a>
              </li>
              <li>
                <a target="_blank" href="https://dev.kingdee.com">
                  开发者门户
                </a>
              </li>
              <li>
                <a target="_blank" href="https://vip.kingdee.com">
                  开发者社区
                </a>
              </li>
              <li>
                <a target="_blank" href="https://vip.kingdee.com/school">
                  金蝶学习与成长中心
                </a>
              </li>
            </ul>
          </Col>
          <Col flex="none" style={{ textAlign: 'right' }}>
            <div className={styles.qrcode}>
              <img src={require('../images/wechat.png')} />
            </div>
            <span className={styles.label}>欢迎加入KDesign微信交流群</span>
          </Col>
        </Row>
        <div className={styles.bottom}>
          <Row className={styles.record}>
            <Col flex="auto">
              &copy;2022金蝶软件（中国）有限公司 粤ICP备05041751号 粤公网安备
              44030502002324号
            </Col>
            <Col flex="none">法律声明及隐私政策</Col>
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
