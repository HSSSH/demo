<template>
  <div id="app">
    <div class="header">
      <ul>
        <li><router-link to="/display">浏览</router-link></li>
        <li><router-link to="/design">制作</router-link></li>
      </ul>
    </div>
    <router-view class="content-view"></router-view>
  </div>
</template>

<script>
import router from "@/router/index.js";
export default {
  name: 'app',
  router,
  components: {}
}
</script>

<style src="../node_modules/bootstrap/dist/css/bootstrap.min.css"></style>
<style scoped lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  .header{
    height: 36px;
    background: #135fac;
    ul{
      li{
        line-height: 36px;
        display: inline-block;
        margin: 0 10px; 
        a{
          color: white;
        }
      }
    }
  }
  .content-view{
    position: relative;
  }
}
</style>
