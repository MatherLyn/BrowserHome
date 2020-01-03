exports.install = function (Vue, options) {
  Vue.prototype.changeMode = function (target) {
    console.log(this)
    // this.$store.commit('onModeChange', target)
    // event.stopPropagation()
  }
}