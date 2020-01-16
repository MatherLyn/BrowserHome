<template>
  <div class="form">
    <el-form class="my-form" label-position="top">
      <el-form-item class="title">
        <span class="form-title">设置</span>
        <i class="el-icon-close close" @click="$store.commit('changeMode', { mode: 0 })"></i>
      </el-form-item>

      <div class="form-body">
        <el-form-item label="外观">
          <el-radio-group v-model="$store.state.appearanceNumber" text-color="#561CF5">
            <el-radio
              v-for="(item, index) in $store.state.appearanceSet"
              :key="index"
              :label="index"
              :disabled="index === 0 || index === 1"
              @change="$store.commit('changeAppearance', { index })">
              {{ item.name }}
              </el-radio>
          </el-radio-group>
        </el-form-item>

        <el-form-item label="动画装饰（可能会对性能产生影响）">
          <el-radio-group v-model="$store.state.skinNumber" text-color="#561CF5">
            <el-radio
              v-for="(item, index) in $store.state.skinSet"
              :key="index"
              :label="index"
              class="skin-radio"
              :disabled="index === 2 || index === 3 || index === 4"
              @change="$store.commit('changeSkin', { index })">
              {{ item.name }}
            </el-radio>
          </el-radio-group>
        </el-form-item>

        <el-form-item label="背景图片">
          <div class="image-container">
            <el-image
              v-for="(item, index) in $store.state.backgroundImageSet"
              :key="index"
              :title="item.name"
              :src="item.src"
              class="image-item"
              :class="{ 'active-item': index === $store.state.backgroundImageNumber }"
              @click="$store.commit('changeBackgroundImage', { index })"
              lazy>
              <div slot="placeholder" class="image-slot">
                加载中<span class="dot">...</span>
              </div>
              <div slot="error" class="image-slot">
                <i class="el-icon-picture-outline"></i>
              </div>
            </el-image>
          </div>
        </el-form-item>
      </div>
    </el-form>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import Component from 'vue-class-component'

@Component
export default class Login extends Vue {
  private username: string = ''
  private password: string = ''
  private msg: string = ''

  constructor () {
    super()
  }

  doLogin () {
    console.log('登录')
    console.log(this)
  }
}
</script>

<style scoped>
  .skin-radio {
    display: block !important;
    margin-bottom: 1rem !important;
    float: none;
  }
  .image-container {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
  }
  .image-item {
    box-sizing: border-box;
    width: 14rem;
    height: 9rem;
    padding: .5rem;
  }
  .image-item:hover {
    cursor: pointer;
  }
  .image-slot {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #eee;
  }
  .image-slot > i {
    font-size: 2rem;
    color: #777;
  }
  .active-item::before {
    content: '';
    position: absolute;
    top: .5rem;
    left: .5rem;
    display: block;
    width: calc(100% - 1rem);
    height: calc(100% - 1rem);
    background-color: #333;
    opacity: .3;
  }
  .active-item::after {
    content: '';
    position: absolute;
    top: 39%;
    left: 40%;
    display: block;
    box-sizing: border-box;
    width: 3rem;
    height: 1.5rem;
    border-left: .2rem solid #fff;
    border-bottom: .2rem solid #fff;
    transform: rotate(-45deg);
  }
  @media screen and (max-width: 520px) {
    .image-item {
      width: 33%;
    }
  }
  @media screen and (max-width: 520px) {
    .image-item {
      height: 8rem;
    }
    .active-item::after {
      top: 36%;
      left: 38%;
    }
  }
  
  @media screen and (max-width: 400px) {
    .image-item {
      width: 50%;
    }
    .active-item::after {
      top: 28%;
    }
  }
</style>