const objToFd = function(obj, form, name) {
  const fd = form || new FormData()

  if (typeof obj !== 'object' || obj instanceof File) {
    fd.append(name, obj)
    return fd
  }

  const keyName = name ? name + '.' : ''

  for (const prop in obj) {
    // 判断是自己的属性 且不为空
    // eslint-disable-next-line no-prototype-builtins
    if (prop != null && obj.hasOwnProperty(prop) && obj[prop] != null && obj[prop] !== '') {
      const val = obj[prop]
      if (val instanceof Array) {
        // 如果是数组
        val.map((item, index) => {
          objToFd(item, fd, keyName + prop + '[' + index + ']')
        })
      } else {
        objToFd(val, fd, keyName + prop)
      }
    }
  }

  return fd
}
export {
  objToFd
}
