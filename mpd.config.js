/*
* @title MPD 项目基础配置
* @author: sansui
*/
module.exports = {
  dev:{
    /**
     * 服务器端口号
     * @type {Number}
     */
    port: 9000,
    /**
     * 自动刷新
     * @type {Boolean}
     */
    liverload: true,
    /**
     * 自动打开网页
     * @type {Boolean}
     */
    autoopen: true
  },
  build:{
    /**
     * 同步打包H5版本
     * @type {Boolean}
     */
    h5open: false
  }
}