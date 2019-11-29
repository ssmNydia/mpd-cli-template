/**
 * 路由配置
 * 新增配置实时生效，无需重启；编辑配置需要重启。
 */
module.exports  =  {
  /**
   * key : value
   * key 写法参考：/ ， /user ， /users/:id ， /users_:id ，/users_p_:id一个可以内变量（:id）仅可出现一次，遇到需要多个变量的情况，请选择写死多余变量来实现
   * 冒号后即视为变量字段名称 除非使用/隔断
   * value pages目录内的页面名称，可省略 .html后缀
   */
  '/':'index'
}