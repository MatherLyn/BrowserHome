<template>
  <div id="container" :class="{ 'blur': $store.state.mode === 1 || $store.state.mode === 3 || $store.state.mode === 4 }"></div>
</template>

<script>
  export default {
    data () {
      return {
        
      }
    },
    methods: {

    }
  }
</script>