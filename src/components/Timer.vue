<template>
  <div>
    <h1 class="timer">{{ timer }}</h1>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        hour: '',
        minute: ''
      }
    },
    mounted () {
      this.getTime()
      const updateTime = setInterval(this.getTime, 5000)
    },
    methods: {
      getTime () {
        this.hour = (new Date()).getHours()
        this.minute = (new Date()).getMinutes()
        if (this.hour < 10) {
          this.hour = `0${this.hour}`
        }
        if (this.minute < 10) {
          this.minute = `0${this.minute}`
        }
      }
    },
    computed: {
      timer () {
        return `${this.hour}:${this.minute}`
      }
    }
  }
</script>

<style scoped>
  .timer {
    color: #fff;
    font-size: 4rem;
    font-weight: 100;
    margin-bottom: 3.6rem;
    transition-duration: .25s;
  }
</style>