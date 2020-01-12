<template>
  <div class="motto" :class="[ $store.state.mode == 1 ? 'display' : 'hidden']">
    <p>{{ motto }}</p>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        motto: '网络不通畅，一时半会儿想不到有什么好句子喔……'
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
    position: absolute;
    bottom: 10rem;
    width: 100%;
    box-sizing: border-box;
    padding: 1rem 2rem;
    font-size: 1.2rem;
    font-family: -apple-system, BlinkMacSystemFont, Ubuntu, Microsoft YaHei;
    color: #fff;
    transition-duration: .25s;
    text-align: center;
  }

  .motto:hover {
    cursor: default;
  }
</style>