<template>
  <div>
    <el-form class="my-form" label-position="top">
      <el-form-item>
        <span class="form-title">{{ flag ? '设置' : '个人' }}</span>
        <i class="el-icon-close close" @click="$store.commit('changeMode', 0)"></i>
      </el-form-item>

      <!-- 设置 -->
      <div class="settings-form" v-if="flag">
        <el-form-item label="动画装饰（可能会对性能产生影响）">
          <el-radio-group v-model="$store.state.skinNumber">
            <el-radio
              v-for="(item, index) in $store.state.skinSet"
              :key="index"
              :label="index"
              class="skin-radio"
              :disabled="index === 2 || index === 3"
              @change="$store.commit('changeSkin', index)">
              {{ item.name }}
            </el-radio>
          </el-radio-group>
        </el-form-item>

        <el-form-item label="背景图片">
          <el-image
            v-for="(item, index) in $store.state.backgroundImageSet"
            :key="index"
            :title="item.name"
            :src="item.src"
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
        }
      }
    },
    methods: {
      
    },
    mounted() {
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

  .skin-radio {
    display: block !important;
    margin-bottom: 1rem !important;
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