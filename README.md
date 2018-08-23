# demo

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```
### 技术选型
* 使用 `.vue` 单文件组件构建代码（[文档](https://cn.vuejs.org/v2/guide/index.html)）
* 使用 `vuex` 管理状态（[文档](https://vuex.vuejs.org/zh/guide/)）
* 使用 `vue-router` 管理页面路由（[文档](https://router.vuejs.org/zh/)）
* 使用 `axios` 作为 http 请求库([文档](https://github.com/axios/axios))
* 使用 `iview` 作为 UI 库([文档](https://www.iviewui.com/docs/guide/install))
* 可结合使用 `jsx` 语法构建 html 模版，使得具有完全编程能力书写模版（[文档](https://github.com/vuejs/babel-plugin-transform-vue-jsx)）

### 文件结构
```
-- src 源代码
    -- api 和服务端的数据交互
    -- components 组件代码
    -- plugins 第三方插件
    -- utils 工具函数库
    -- sass
        -- _variables.scss 全局变量，主题配置
        -- global.scss 应用级设置
    -- store vuex配置文件
        -- index.js
        -- actions.js
        -- getters.js
        -- mutations.js
    -- router 路由配置
-- packjson.json npm 依赖配置，额外配置 node-sass 和 sass-loader 以便在.vue中使用scss
-- vue.config.js vue 额外配置使用 sass-resources-loader 加载全局scss变量文件
```