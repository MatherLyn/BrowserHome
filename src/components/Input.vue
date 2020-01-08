<template>
  <div>
    <input id="search" type="text" class="input" placeholder="Search" v-model="search" @click.stop="$store.commit('changeMode', 1)"/>

  </div>
</template>

<script>
  export default {
    data () {
      return {
        searchEngineSet: [
          {
            name: 'Baidu',
            addr: 'www.baidu.com',
            // logo: require()
          },
          {
            name: 'Google',
            addr: 'www.google.com',
            // logo: require()
          }
        ],
        search: ''
      }
    },
    methods: {
      
    }
  }
</script>

<style scoped>
  .input {
    box-sizing: border-box;
    width: 18rem;
    height: 4rem;
    line-height: 4rem;
    font-size: 1.6rem;
    border: none;
    border-radius: 2rem;
    outline: none;
    padding: 2rem;
    color: #fff;
    box-shadow: 0 0 1rem rgba(30, 30, 30, .2);
    background-color: rgba(240, 240, 240, .25);
    backdrop-filter: blur(1rem);
    text-align: center;
    transition-duration: .25s;
    font-family: -apple-system, BlinkMacSystemFont, Ubuntu, Microsoft YaHei;
  }

  .input::placeholder {
    color: #fff;
  }

  .input::-moz-placeholder {
    color: #fff;
  }

  .input::-webkit-input-placeholder {
    color: #fff;
  }

  .input:hover {
    width: 40rem;
    background-color: rgba(255, 255, 255, .4);
    color: #666;
  }

  .input:hover::placeholder {
    color: #666;
  }

  .input:hover::-moz-placeholder {
    color: #666;
  }

  .input:hover::-webkit-input-placeholder {
    color: #666;
  }
  
  .input:focus {
    width: 40rem;
    background-color: rgba(255, 255, 255, .4);
    color: rgb(64, 64, 64);
  }

  .input:focus::placeholder {
    color: rgba(64, 64, 64, 0);
  }

  .input:focus::-moz-placeholder {
    color: rgba(64, 64, 64, 0);
  }

  .input:focus::-webkit-input-placeholder {
    color: rgba(64, 64, 64, 0);
  }
</style>