import React from 'react';

import styles from './styles.module.css';

function Lightbox({children, src, title, collapsed}) {
  var collapsedClass = !!collapsed ? styles.collapsed : '';

  const featherlightStyles = `
  /**
   * Featherlight - ultra slim jQuery lightbox
   * Version 1.7.14 - http://noelboss.github.io/featherlight/
   *
   * Copyright 2019, Noël Raoul Bossart (http://www.noelboss.com)
   * MIT Licensed.
  **/
  html.with-featherlight{overflow:hidden}.featherlight{display:none;position:fixed;top:0;right:0;bottom:0;left:0;z-index:2147483647;text-align:center;white-space:nowrap;cursor:pointer;background:#333;background:rgba(0,0,0,0)}.featherlight:last-of-type{background:rgba(0,0,0,.8)}.featherlight:before{content:'';display:inline-block;height:100%;vertical-align:middle}.featherlight .featherlight-content{position:relative;text-align:left;vertical-align:middle;display:inline-block;overflow:auto;padding:25px 25px 0;border-bottom:25px solid transparent;margin-left:5%;margin-right:5%;max-height:95%;background:#fff;cursor:auto;white-space:normal}.featherlight .featherlight-inner{display:block}.featherlight link.featherlight-inner,.featherlight script.featherlight-inner,.featherlight style.featherlight-inner{display:none}.featherlight .featherlight-close-icon{position:absolute;z-index:9999;top:0;right:0;line-height:25px;width:25px;cursor:pointer;text-align:center;font-family:Arial,sans-serif;background:#fff;background:rgba(255,255,255,.3);color:#000;border:0;padding:0}.featherlight .featherlight-close-icon::-moz-focus-inner{border:0;padding:0}.featherlight .featherlight-image{width:100%}.featherlight-iframe .featherlight-content{border-bottom:0;padding:0;-webkit-overflow-scrolling:touch}.featherlight iframe{border:0}.featherlight *{-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box}@media only screen and (max-width:1024px){.featherlight .featherlight-content{margin-left:0;margin-right:0;max-height:98%;padding:10px 10px 0;border-bottom:10px solid transparent}}@media print{html.with-featherlight>*>:not(.featherlight){display:none}}
  `
  return (
    <React.Fragment>
      <style>{featherlightStyles}</style>
      <div className={ `${styles.docImage} ${collapsedClass}` }>
          <span>
              <a href="#" data-featherlight={src}>
                  <img
                      data-toggle="lightbox"
                      alt={title}
                      src={src}
                  />
              </a>
          </span>
          <p className={styles.title}><em>{ title }</em></p>
      </div>
    </React.Fragment>
  );
}

export default Lightbox;
