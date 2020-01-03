<template>
  <div>
    <el-form class="my-form">
      <el-form-item>
        <p class="form-title">{{ flag ? '设置' : '个人' }}</p>
      </el-form-item>
      <el-form-item label="冬日皮肤" v-if="flag">
        <el-switch
          v-model="enableWinterSkin"
          @click.native="saveToLocalStorage"
          :active-value="true"
          :inactive-value="false"></el-switch>
      </el-form-item>
    </el-form>
  </div>

</template>

<script>
  export default {
    props: [
      'flag'
    ],
    data () {
      return {
        enableWinterSkin: true
      }
    },
    methods: {
      saveToLocalStorage () {
        this.$store.state.enableWinterSkin = this.enableWinterSkin
        console.log(this.$store.state.enableWinterSkin)
        localStorage.setItem('enableWinterSkin', this.enableWinterSkin)
      }
    },
    mounted() {
      this.enableWinterSkin = this.$store.state.enableWinterSkin
      // flag: 0表示个人信息，1表示设置
      switch (this.flag) {
        case 0: {
          break
        }
        case 1: {
          
          break
        }
      }
    },
  }
</script>

<style scoped>
  .my-form {
    position: fixed;
    transition-duration: .25s;
    width: 32rem;
    height: 42rem;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    margin: auto;
    box-sizing: border-box;
    padding: 4rem;
    background: #fff;
    border-radius: .4rem;
  }
</style>