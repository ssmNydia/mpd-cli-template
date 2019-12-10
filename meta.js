/*
* @Author: shl
* @title: 
* @Date:   2019-04-23 16:07:22
* @Last Modified by:   shl
* @Last Modified time: 2019-12-10 16:33:16
*/
module.exports = {
  init: [
    {
      name: 'name',
      type: 'input',
      message: '项目名称',
      default: 'mpd-project'
    },
    {
      name: 'description',
      type: 'input',
      message: '项目描述',
      default: 'A mpd project',
    },
    {
      name: 'author',
      type: 'input',
      message: '作者信息',
      default: "yourname"
    },
    {
      name: 'openHttps',
      type: 'confirm',
      message: '是否开启https，默认n',
      prefix: '开发环境',
      default: false
    },
    {
      name: 'openLint',
      type: 'confirm',
      message: '是否开启检测，默认n',
      prefix: '开发环境',
      default: false
    },
    {
      name: 'clean',
      type: 'confirm',
      message: '打包前是否删除打包目录，默认y',
      prefix: '生产环境',
      default: true
    },
    {
      name: 'outHtml',
      type: 'confirm',
      message: '是否导出HTML文件，默认y',
      prefix: '生产环境',
      default: true
    },
    {
      name: 'openMinify',
      type: 'confirm',
      message: '是否启用HTML压缩，默认n',
      prefix: '生产环境',
      default: false,
      when: function (answers) {
        return answers.outHtml
      }
    },
    {
      name: 'favicon',
      type: 'confirm',
      message: 'HTML页面是否设置favicon，默认n',
      prefix: '生产环境',
      default: false,
      when: function (answers) {
        return answers.outHtml
      }
    }
  ],
  mini:{
    cssdir:{
      type: 'string',
      default: 'css',
      message: '目标样式目录'
    },
    jsdir:{
      type: 'string',
      default: 'js',
      message: '目标脚本目录'
    },
    cssout:{
      type: 'string',
      default: 'css',
      message: '样式压缩导出目录'
    },
    jsout:{
      type: 'string',
      default: 'js',
      message: '脚本压缩导出目录'
    }
  }
}