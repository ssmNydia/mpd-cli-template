/*
* @Author: shl
* @title: 
* @Date:   2019-04-23 16:07:22
* @Last Modified by:   shl
* @Last Modified time: 2019-12-10 16:10:27
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
      message: '开发环境是否开启https',
    },
    {
      name: 'openLint',
      type: 'confirm',
      message: '开发环境是否开启检测，推荐"No"',
      default: false
    },
    {
      name: 'clean',
      type: 'confirm',
      message: '生产环境打包前是否删除打包目录',
    },
    {
      name: 'outHtml',
      type: 'confirm',
      message: '生产环境是否导出HTML文件',
    },
    {
      name: 'openMinify',
      type: 'confirm',
      message: '生产环境是否启用HTML压缩',
      when: function (answers) {
        return answers.outHtml
      }
    },
    {
      name: 'favicon',
      type: 'confirm',
      message: '生成环境HTML页面是否设置favicon',
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