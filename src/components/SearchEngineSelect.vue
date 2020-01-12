<template>
  <div class="search-engine" :class="{ 'engine-select' : $store.state.mode === 1 && $store.state.subMode === 1 }">
    <ul class="search-engine-select" :class="{ 'select' : $store.state.mode === 1 && $store.state.subMode === 1 }">
      <li
        v-for="(item, index) in $store.state.searchEngineSet"
        :key="index"
        class="search-engine-options">
        <img :src="item.logo" :title="item.name" @click="$store.commit('changeSearchEngine', { index })"/>
      </li>
    </ul>
    <img
      class="current-search-engine"
      :src="$store.state.searchEngineSet[$store.state.searchEngineNumber].logo"
      alt="搜索"
      @click="$store.commit('doSearch')"
    />
    <div class="arrow" @click="$store.commit('changeSubMode', { subMode: 1 })"></div>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        
      }
    },
    methods: {

    },
    components: {
      
    }
  }
</script>

<style scoped>
  .search-engine {
    position: absolute;
    width: 4.4rem;
    overflow: hidden;
    border-radius: 1.5rem;
    top: .5rem;
    right: .5rem;
    transition-duration: .25s;
    background-color: rgb(240, 240, 240);
    opacity: .6;
    z-index: 5;
  }

  .search-engine:hover {
    opacity: 1;
  }

  .search-engine-select {
    position: relative;
    width: 100%;
    height: 15rem;
    margin-top: -15rem;
    border-radius: 1.5rem;
    background-color: rgba(240, 240, 240, .6);
    opacity: .8;
    display: flex;
    flex-direction: column;
    align-items: center;
    transition-duration: .25s;
  }

  .search-engine-options {
    width: 3rem;
    height: 3rem;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  
  .search-engine-options > img {
    width: 2rem;
    height: 2rem;
  }

  .current-search-engine {
    float: left;
    width: 2rem;
    height: 2rem;
    margin-top: .5rem;
    margin-bottom: .5rem;
    margin-left: .5rem;
  }

  .current-search-engine:hover {
    cursor: pointer;
  }

  .arrow {
    float: right;
    margin-right: .4rem;
    margin-top: 1.25rem;
    margin-bottom: .75rem;
    box-sizing: border-box;
    width: 1rem;
    height: .8rem;
    border-top: .5rem solid #000;
    border-bottom: .5rem solid transparent;
    border-left: .4rem solid transparent;
    border-right: .4rem solid transparent;
  }

  .arrow:hover {
    cursor: pointer;
  }

  .engine-select {
    height: 15rem;
  }

  .select {
    margin-top: 0;
    cursor: pointer;
  }
</style>