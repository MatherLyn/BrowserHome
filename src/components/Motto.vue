<template>
  <div class="motto" :class="{ 'display': $store.state.mode == 1, 'hidden': $store.state.mode != 1 }">
    <p>{{ motto }}</p>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        motto: '曾经沧海难为水，除却巫山不是云'
      }
    },
    methods: {

    },
    mounted () {
      
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