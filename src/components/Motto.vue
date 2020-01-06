<template>
  <div class="motto" :class="{ 'display': $store.state.mode == 1, 'hidden': $store.state.mode != 1 }">
    <p>{{ motto }}</p>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        motto: '可能是网络原因，一时半会儿想不到有什么好句子喔……'
      }
    },
    methods: {

    },
    mounted () {
      this.$axios.get('https://v1.hitokoto.cn')
      .then(res => {
        console.log(res)
        const resData = res.data
        if (res.status == 200) {
          this.motto = `${resData.hitokoto} —— ${resData.from}`
        }
      })
    }
  }
</script>

<style scoped>
  .motto {
    font-size: 1.2rem;
    font-family: -apple-system, BlinkMacSystemFont, Ubuntu, Microsoft YaHei;
    color: #fff;
    transition-duration: .25s;
    text-align: center;
    position: absolute;
    bottom: 10rem;
  }

  .motto:hover {
    cursor: default;
  }
</style>