/*
* @Author: shl
* @title: 
* @Date:   2019-04-23 16:07:22
* @Last Modified by:   shl
* @Last Modified time: 2019-08-05 11:07:37
*/
module.exports = {
  init:{
    name: {
      type: 'string',
      default: 'mpd-project',
      message: '项目名称',
    },
    description: {
      type: 'string',
      message: '项目描述',
      default: 'A mpd project',
    },
    author: {
      type: 'string',
      message: '作者信息',
      default: "yourname"
    },
    style: {
      type: 'string',
      message: '使用的css语言',
      default: "scss"
    }
  },
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