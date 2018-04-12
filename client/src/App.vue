<template>
  
  <div id="app" class="mdl-layout mdl-js-layout mdl-layout--fixed-header">
    <Header ></Header>
    <div id="content" class="mdl-layout__content"><router-view ></router-view></div>
    
    <Footer></Footer>
  </div>
</template>

<script>
import Header from './components/AppHeader.vue'
import Footer from './components/AppFooter.vue'

export default {
  name: 'app',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  components:{
    Header,Footer
  }

  
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}

</style>
