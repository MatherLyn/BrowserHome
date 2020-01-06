<template>
  <div>
    <el-form class="my-form" label-position="top">
      <el-form-item>
        <span class="form-title">{{ flag ? '设置' : '个人' }}</span>
        <i class="el-icon-close close" @click="$store.commit('changeMode', 0)"></i>
      </el-form-item>

      <!-- 设置 -->
      <div class="settings-form" v-if="flag">
        <el-form-item label="冬日装饰">
          <el-switch
            v-model="settings.enableWinterSkin"
            @click.native="chooseThisSkin(0)"
            :active-value="true"
            :inactive-value="false">
          </el-switch>
        </el-form-item>
        <el-form-item label="雨夜装饰（即将到来）">
          <el-switch
            v-model="settings.enableRainSkin"
            @click.native="chooseThisSkin(1)"
            :active-value="true"
            :inactive-value="false"
            disabled>
          </el-switch>
        </el-form-item>
        <el-form-item label="暖阳装饰（即将到来）">
          <el-switch
            v-model="settings.enableSunSkin"
            @click.native="chooseThisSkin(2)"
            :active-value="true"
            :inactive-value="false"
            disabled>
          </el-switch>
        </el-form-item>
        <el-form-item label="背景图片">
          <el-image
            v-for="(item, index) in $store.state.backgroundImageSet"
            :key="index"
            :src="item"
            class="image-item"
            @click="$store.commit('changeBackground', index)">
          </el-image>
        </el-form-item>
      </div>

      <!-- 个人 -->
      <div class="profile-form" v-if="!flag">
        <el-form-item label="用户名">
          <el-input
            placeholder="请输入用户名"
            v-model="userInfo.username"
            clearable="">
          </el-input>
        </el-form-item>
        <el-form-item label="密码">
          <el-input
            placeholder="请输入密码"
            v-model="userInfo.password"
            show-password>
          </el-input>
        </el-form-item>
        <el-button type="primary" class="submit-button">提交</el-button>
      </div>

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
        userInfo: {
          username: '',
          password: '',
        },
        settings: {
          enableWinterSkin: true,
          enableRainSkin: false,
          enableSunSkin: false
        }
      }
    },
    methods: {
      chooseThisSkin (skinNumber) {
        // 应该跟图片一样，做成数组
        switch (skinNumber) {
          case 0: {
            // winter skin
            this.$store.state.enableWinterSkin = this.settings.enableWinterSkin
            console.log(this.$store.state.enableWinterSkin)
            localStorage.setItem('enableWinterSkin', this.settings.enableWinterSkin)
          }

        }

      }
    },
    mounted() {
      this.settings.enableWinterSkin = this.$store.state.enableWinterSkin
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
    width: 52rem;
    height: fit-content;
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

  .form-title {
    line-height: 4rem;
    float: left;
  }

  .close {
    line-height: 4rem;
    float: right;
  }

  .close:hover {
    color: #7090FF;
    cursor: pointer;
  }

  .image-item {
    width: 10rem;
    height: 6.18rem;
    padding: .5rem
  }

  .image-item:hover {
    cursor: pointer;
  }
</style>