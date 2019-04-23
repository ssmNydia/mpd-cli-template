/*
* @Author: shl
* @title: 
* @Date:   2019-04-23 16:07:22
* @Last Modified by:   shl
* @Last Modified time: 2019-04-23 16:13:37
*/
module.exports = {
  name: {
      type: 'string',
      default: 'mip-project',
      message: '项目名称',
  },
  description: {
      type: 'string',
      message: '项目描述',
      default: 'A MIP project',
  },
  author: {
      type: 'string',
      message: '作者信息',
      default: "yourname"
  }
}