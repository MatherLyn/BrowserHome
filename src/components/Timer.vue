<template>
  <h1 class="timer">{{ timer }}</h1>
</template>

<script lang="ts">
import Vue from 'vue'
import Component from 'vue-class-component'

  @Component
  export default class Timer extends Vue {
    private hour: string =  (new Date()).getHours().toString()
    private minute: string = (new Date()).getMinutes().toString()
    private timer: String

    // Constructor
    constructor () {
      super()
      this.timer = this.getTime()
    }

    // LifeCycle Hooks
    private mounted (): void {
      setInterval(this.getTime, 5000)
    }

    // Methods
    private getTime (): string {
      let hour: number = (new Date()).getHours()
      let minute: number = (new Date()).getMinutes()
      if (hour < 10) {
        this.hour = `0${ hour }`
      } else {
        this.hour = hour.toString()
      }
      if (minute < 10) {
        this.minute = `0${ minute }`
      } else {
        this.minute = minute.toString()
      }
      return `${this.hour}:${this.minute}`
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