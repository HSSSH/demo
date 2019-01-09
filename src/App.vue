<style src="@/sass/global.scss" lang="scss"></style>
<style scoped lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  .content-view{
    width: 100%;
    height: calc(100vh - 60px);
    position: relative;
  }
}
</style>

<template>
  <div id="app">
    <Menu mode="horizontal" :theme="menuTheme" active-name="1">
        <MenuItem name="1">
            <Icon type="ios-paper" />
            <router-link to="/design">制作</router-link>
        </MenuItem>
        <MenuItem name="2">
            <Icon type="ios-people" />
            <router-link to="/display">浏览</router-link>
        </MenuItem>
        <MenuItem name="3">
            <Icon type="ios-stats" />
            <router-link to="/test">XXX</router-link></li>
        </MenuItem>
        <!-- <Submenu name="4">
            <template slot="title">
                <Icon type="ios-stats" />
                统计分析
            </template>
            <MenuGroup title="使用">
                <MenuItem name="4-1">新增和启动</MenuItem>
                <MenuItem name="4-2">活跃分析</MenuItem>
                <MenuItem name="4-3">时段分析</MenuItem>
            </MenuGroup>
            <MenuGroup title="留存">
                <MenuItem name="4-4">用户留存</MenuItem>
                <MenuItem name="4-5">流失用户</MenuItem>
            </MenuGroup>
        </Submenu> -->
    </Menu>
    <router-view class="content-view"></router-view>
  </div>
</template>

<script>
import router from "@/router/index.js";
export default {
  name: 'app',
  router,
  data(){
    return {
      menuTheme: 'light'
    }
  },
  components: {}
}
</script>