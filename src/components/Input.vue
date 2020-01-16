<template>
  <div class="input">
    <input
      id="search"
      type="text"
      class="search"
      placeholder="Search"
      v-model="$store.state.searchKeyword"
      @click="$store.commit('changeMode', { mode: 1 })"
    />
    <SearchEngineSelect :class="{ 'hidden' : $store.state.mode !== 1 }"/>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import SearchEngineSelect from './SearchEngineSelect.vue'
import Component from 'vue-class-component'
  @Component({
    components: {
      SearchEngineSelect
    }
  })
  export default class Input extends Vue {}
</script>

<style scoped>
  .input {
    position: relative;
  }
  .search {
    box-sizing: border-box;
    width: 18rem;
    height: 4rem;
    line-height: 1.6rem;
    font-size: 1.6rem;
    font-weight: 300;
    border: none;
    border-radius: 2rem;
    outline: none;
    padding: 2rem;
    color: #fff;
    box-shadow: 0 0 1rem rgba(30, 30, 30, .2);
    background-color: rgba(240, 240, 240, .25);
    -webkit-backdrop-filter: blur(1rem);
    backdrop-filter: blur(1rem);
    text-align: center;
    transition-duration: .25s;
    position: relative;
    z-index: 4;
  }
  .search::placeholder {
    color: #fff;
  }
  .search::-moz-placeholder {
    color: #fff;
  }
  .search::-webkit-search-placeholder {
    color: #fff;
  }
  .input:hover .search {
    width: 40rem;
    background-color: rgba(255, 255, 255, .4);
    color: #666;
  }
  .search:hover::placeholder {
    color: #666;
  }
  .search:hover::-moz-placeholder {
    color: #666;
  }
  .search:hover::-webkit-search-placeholder {
    color: #666;
  }
  
  .search:focus {
    width: 40rem;
    background-color: rgba(255, 255, 255, .4);
    color: rgb(64, 64, 64);
  }
  .search:focus::placeholder {
    color: rgba(64, 64, 64, 0);
  }
  .search:focus::-moz-placeholder {
    color: rgba(64, 64, 64, 0);
  }
  .search:focus::-webkit-search-placeholder {
    color: rgba(64, 64, 64, 0);
  }
  @media screen and (max-width: 420px) {
    .input:hover .search {
      width: 80vw;
    }
  }
</style>