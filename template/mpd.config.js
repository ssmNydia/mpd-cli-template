/*
* @title MPD 项目基础配置
* @author: sansui
*/
module.exports = {
  /**
   * 第三方库引入
   * @type {Array}
   */
  plugins:{
    /**
     * 所有页面都引入的库
     * @type {Array}
     * 仅global内支持 字符和对象两种类型
     */
    global:[
        /* 直接填入需要引入库的路径 */
        'https://cdn.bootcss.com/jquery/1.12.4/jquery.min.js',
        /* 
        * 或填入对象，可配置 
        * ishead放置在头部 
        * islast 放置在所有资源的末尾 
        * url为引入库路径 
            e.g:
            { ishead: true, url: 'https://cdn.bootcss.com/jquery/1.12.4/jquery.min.js' },
        */
    ],
    /**
     * 指定页面引入库
     * @type {Array}
     */
    assign:[
        {
            pages:['index'],
            urls:[
                'https://cdnjs.cloudflare.com/ajax/libs/Swiper/4.5.0/css/swiper.min.css',
                'https://cdnjs.cloudflare.com/ajax/libs/Swiper/4.5.0/js/swiper.min.js'
            ]
        }
    ]
  },
  /*
  * dev 和 build 拥有一样的可配置项:
  * dir, output
   */
  dev:{
    /**
     * 启用代理 启用代理需要配置 proxy
     * @type {Boolean} 默认false
     */
    openProxy: true,
    /**
     * 设置代理对应关系
     * @type {Object}
     */
    proxy:{
      '/api': {
        target: 'http://api.mpd-cli.com/',
        changeOrigin: true,
        pathRewrite: { 
            '^/api': ' '
        }
      }
    },
    /**
     * 设置 dev服务器端口号
     * @type {Number} 默认9000
     */
    port: 9100,
    
    /**
     * 自动刷新监听端口 多开时需要手动修改避免重复
     * @type {Number}
     */
    liveport: 35729,

    /**
     * 启用页面自动刷新
     * @type {Boolean} 默认false
     */
    livereload: true,

    /**
     * dev服务器启动自动打开页面
     * @type {Boolean} 默认false
     */
    autoopen: true
  },

  build:{
    /**
     * 打包前删除打包目录
     * @type {Boolean} 默认true
     */
    clean: false,
    /**
     * 导出HTML文件
     * @type {Boolean} 默认true
     */
    outHtml: true,
    /**
     * 启用HTML压缩
     * @type {Boolean} 默认false
     */
    openMinify: false,
    /**
     * 项目目录
     * @type {String} 默认根目录无需填写
     */
    dir:'',
    /**
     * 设置打包目录名称
     * @type {String} 默认dist
     */
    output:'dist',
    /**
     * 资源的发布路径
     * @type {String} 默认 ../
     */
    publicPath: {
        js: '../',
        css: '../',
        img: '../'
    },
    /**
     * 对应的公开 访问URL 暂无效
     * @type {String}
     */
    publicUrl: ''
  }
}