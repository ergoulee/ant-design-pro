import React from 'react';
import { Link } from 'umi';
import Footer from '@/components/Footer';
import Script from 'react-load-script';

import styles from './index.less';

/**
 * 此方法会跳转到 redirect 参数所在的位置

const goto = () => {
  if (!history) return;
  setTimeout(() => {
    const { query } = history.location;
    const { redirect } = query as { redirect: string };
    history.push(redirect || '/');
  }, 10);
};
 */

const Login: React.FC<{}> = () => {
  const handleScriptLoad = () => {
    window.WwLogin({
      id: 'wx_reg',
      appid: 'wxb524c9f7b768dad6',
      agentid: '1000018',
      redirect_uri: 'http://sxtsqy.cttsn.com:7001/home/',
      state: '',
      href: '',
    });
  };

  return (
    <div className={styles.container}>
      {/* <div className={styles.lang}>{SelectLang && <SelectLang />}</div> */}
      <div className={styles.content}>
        <div className={styles.top}>
          <div className={styles.header}>
            <Link to="/">
              <img alt="logo" className={styles.logo} src="/ttlogo.png" />
              <span className={styles.title}>统一信息门户</span>
            </Link>
          </div>
          <div className={styles.desc}>数字服务专家 行业建设工匠</div>
        </div>

        <div className={styles.main} id="wx_reg" />
      </div>
      <Footer />
      <Script
        url="http://rescdn.qqmail.com/node/ww/wwopenmng/js/sso/wwLogin-1.0.0.js"
        onLoad={handleScriptLoad}
      />
    </div>
  );
};

export default Login;
