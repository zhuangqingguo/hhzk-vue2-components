import menusIcon from './index.vue'
// 为组件添加 install 方法，用于按需引入
menusIcon.install = function (Vue) {
  Vue.component(menusIcon.name, menusIcon)
}
export default menusIcon
