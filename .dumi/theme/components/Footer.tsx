import React, { useContext, useState, useEffect } from 'react';
import './Footer.less';

const Footer = (props: any) => {
  const { isTransparent } = props;
  return (
    <div className={isTransparent ? 'footer transparent' : 'footer'}>
      <div className="footer-top">
        <img src="/resource/kingdee.png" alt="" />
      </div>
      <div className="footer-main">
        <div className="footer-main-item">
          <div>邮箱：</div>
          <div>KUX@kingdee.com</div>
        </div>
        <div className="footer-main-item">
          <div>快速链接：</div>
          <div>
            <a href="https://www.kingdee.com/" target="_blank">
              金蝶官网
            </a>
            <a href="https://dev.kingdee.com/" target="_blank">
              开发者门户
            </a>
            <a
              href="https://club.kdcloud.com/ifinclub/56403552855748352"
              target="_blank"
            >
              开发者社区
            </a>
            <a href="https://vip.kingdee.com/school" target="_blank">
              金蝶学习与成长中心
            </a>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <div>
          ©2021金蝶软件（中国）有限公司
          <a href="https://beian.miit.gov.cn/" target="_blank">
            粤ICP备05041751号
          </a>
          <a href="http://www.beian.gov.cn/" target="_blank">
            粤公网安备 44030502002324号
          </a>
        </div>
        {/*<div>法律声明及隐私政策</div>*/}
      </div>
    </div>
  );
};

export default Footer;
