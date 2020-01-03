<script>
  const changeMode = function (target) {
    console.log(this)
    // this.$store.commit('onModeChange', target)
    // event.stopPropagation()
  }

  export default {
    changeMode
  }
</script>