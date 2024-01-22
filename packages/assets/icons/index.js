const requireAll = requireContext => requireContext.keys().map(requireContext)
const req = require.context('./svg', true, /\.svg$/)

requireAll(req)

export const menusNames = req
  .keys()
  .filter(item => item.includes('/menus/'))
  .map(item => {
    let str = item
    str = str.substring(str.indexOf('/menus/') + 7, str.indexOf('.svg'))
    return str
  })

// const allIcons = {}
// Promise.all(req.keys().map(item => import(`./svg/${item.slice(2)}?inline`))).then(res => {
//   res.forEach((item, idx) => {
//     let str = req.keys()[idx]
//     str = str.substring(str.lastIndexOf('/') + 1, str.indexOf('.svg'))

//     allIcons[str] = JSON.parse(JSON.stringify(item.default))
//   })
// })

// export { allIcons }
