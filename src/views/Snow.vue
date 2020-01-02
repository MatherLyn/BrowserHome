<template>
  <canvas id="winterSkin"></canvas>
</template>

<script>
  export default {
    name: 'Snow',
    data () {
      return {
        canvas: {},
        context: {},
        snows: [],
        lastCreateTime: '',
        SnowBall: {},
      }
    },
    methods: {
      snowMove (snowball, index) {
        snowball.y += snowball.radius / 3
        if (snowball.y > this.canvas.height)
          this.snows.splice(index, 1)
        else
          snowball.draw(this.context)
      },
      createSnow () {
        let now = new Date();
        if (now - this.lastCreateTime > this.snows.length - now.getMinutes() && this.snows.length < 200) {
          const radius = Math.random() * 5 + 2
          let snow = new this.SnowBall(radius)
          snow.x = Math.random() * this.canvas.width + 1
          snow.color = '#ffffff'
          this.snows.push(snow)
          this.lastCreateTime = now
        }
      },
      drawFrame () {
        window.winterSkin = requestAnimationFrame(this.drawFrame)
        this.context.clearRect(0, 0, this.canvas.width, this.canvas.height)
        this.createSnow()
        this.snows.forEach(this.snowMove)
      },
      canvasResize () {
        const width = window.innerWidth
        const height = window.innerHeight
        this.canvas.width = width
        this.canvas.height = height
      }
    },
    mounted () {
      console.log('mounted')
    },
    activated () {
      console.log('activated')
      this.canvas = document.getElementById('winterSkin')
      this.context = this.canvas.getContext('2d')
      this.SnowBall = class SnowBall {
        constructor (radius) {
          this.x = 0
          this.y = 0
          this.radius = radius
          this.color = '#fff'
        }

        draw (context) {
          context.save()
          context.translate(this.x, this.y)
          context.fillStyle = this.color
          context.beginPath()
          context.arc(0, 0, this.radius, 0, 2 * Math.PI, false)
          context.closePath()
          context.fill()
          context.restore()
        }
      }
      this.drawFrame()
      this.canvasResize()
      const oldOnResize = window.onresize
      // recalculate the size of the canvas
      window.onresize = () => {
        if (oldOnResize) oldOnResize()
        this.canvasResize()
      }
    },
    deactivated () {
      console.log('deactivated')
      cancelAnimationFrame(window.winterSkin)
      webkitCancelAnimationFrame(window.winterSkin)
    }
  }
</script>