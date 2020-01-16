<template>
  <canvas id="winterSkin"></canvas>
</template>

<script lang="ts">
import Vue from 'vue'
import Component from 'vue-class-component'

  class SnowBall {
    private x: number
    private y: number = 0
    private radius: number = 0
    private color: string = '#fff'

    constructor (x: number, radius: number) {
      this.x = x
      this.radius = radius
    }

    public draw (context: CanvasRenderingContext2D): void {
      context.save()
      context.translate(this.x, this.y)
      context.fillStyle = this.color
      context.beginPath()
      context.arc(0, 0, this.radius, 0, 2 * Math.PI, false)
      context.closePath()
      context.fill()
      context.restore()
    }

    public move (index: number): number {
      this.y += this.radius / 3
      return this.y
    }
  }

  @Component({
    name: 'Snow'
  })
  export default class Snow extends Vue {
    // Data
    private canvas: any // HTMLCanvasElement
    private context: any // CanvasRenderingContext2D
    private snows: any // Array<SnowBall>
    private lastCreateTime: any // number
    private maxSnowBallCount: any // number

    // Constructor
    constructor () {
      super()
    }

    private mounted (): void {
      this.canvas = <HTMLCanvasElement>document.getElementById('winterSkin')
      this.context = <CanvasRenderingContext2D>this.canvas.getContext('2d')
      this.snows = []
      this.lastCreateTime = new Date().getTime()
      this.maxSnowBallCount = 200
    }

    // Life Cycle Hook
    private activated (): void {
      this.lastCreateTime = new Date().getTime()
      console.log('activated')
      if (window.innerWidth < 520) this.maxSnowBallCount = 100
      if (window.innerWidth < 360) this.maxSnowBallCount = 80
      console.log(`窗口大小：${window.innerWidth}`)
      console.log(`雪球数量：${this.maxSnowBallCount}`)
      this.drawFrame()
      this.canvasResize()
      // recalculate the size of the canvas
      window.onresize = () => {
        console.log(window.innerWidth)
        console.log(this.maxSnowBallCount)
        if (window.innerWidth < 360) {
          this.maxSnowBallCount = 80
        } else if (window.innerWidth < 520) {
          this.maxSnowBallCount = 100
        } else {
          this.maxSnowBallCount = 200
        }
        this.canvasResize()
      }
    }

    private deactivated (): void {
      console.log('deactivated')
      cancelAnimationFrame(window.winterSkin)
      webkitCancelAnimationFrame(window.winterSkin)
    }

    // Methods
    private createSnow (): void {
      let now = new Date()
      if (now.getTime() - this.lastCreateTime > this.snows.length - now.getMinutes() && this.snows.length < this.maxSnowBallCount) {
        const radius = Math.random() * 5 + 2
        const snow = new SnowBall(Math.random() * this.canvas.width + 1, radius)
        this.snows.push(snow)
        this.lastCreateTime = now.getTime()
      }
    }

    private snowMove (snowball: SnowBall, index: number): void {
      if (snowball.move(index) > this.canvas.height)
        this.snows.splice(index, 1)
      else
        snowball.draw(this.context)
    }

    private drawFrame (): void {
      window.winterSkin = requestAnimationFrame(this.drawFrame)
      this.context.clearRect(0, 0, this.canvas.width, this.canvas.height)
      this.createSnow()
      this.snows.forEach(this.snowMove)
    }

    private canvasResize (): void {
      const width = window.innerWidth
      const height = window.innerHeight
      this.canvas.width = width
      this.canvas.height = height
    }
  }
</script>