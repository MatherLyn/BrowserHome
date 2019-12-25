<template>
  <div>
    <p class="motto" :class="{ 'display': $store.state.mode == 1, 'hidden': $store.state.mode != 1 }">{{ motto }}</p>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        motto: '曾经沧海难为水，除却巫山不是云。'
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
  }

  .motto:hover {
    cursor: default;
  }
</style>