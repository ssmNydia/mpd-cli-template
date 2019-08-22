/*
* @Author: sansui
* @Date:   2019-05-06 16:05:07
*/
function set (name, value, days, domain) {
  if (typeof domain === 'undefined') {
    domain = window.location.host
    if (domain.indexOf(':') > -1) {
      domain = domain.split(':')[0]
    }
  }
  if (typeof days === 'undefined') {
    days = 30
  }
  let exp = new Date()
  exp.setTime(exp.getTime() + days * 24 * 60 * 60 * 1000)
  document.cookie = name + '=' + escape(value) + ';expires=' + exp.toGMTString() + ';domain=' + domain + ';path=/'
}
function get (name) {
  const reg = new RegExp('(^| )' + name + '=([^;]*)(;|$)')
  const arr = document.cookie.match(reg)
  if (arr) {
    return unescape(arr[2])
  } else {
    return null
  }
}
function getBoolean (name) {
  const reg = new RegExp('(^| )' + name + '=([^;]*)(;|$)')
  const arr = document.cookie.match(reg)
  if (arr) {
    const v = arr[2] === 'true' ? 1 : 0
    return !!v
  } else {
    return null
  }
}
function remove (name, domain) {
  set(name, '', -1, domain)
}

export const cookie = {
  set,
  get,
  getBoolean,
  remove
}
