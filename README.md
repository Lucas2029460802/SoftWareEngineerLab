## SoftWareEngineerLab 前端开发指南（外卖商家界面）

本项目是一个**前后端分离**的小项目，前端使用 **Vue 3 + Vue Router**，模拟外卖商家/用户界面：展示商品、用户注册登录、下单与查看订单等。

本文档只关注 **前端部分**，目录在 `my-app/`。

---

### 一、环境与启动方式

- **安装依赖**

```bash
cd my-app
npm install
```

- **启动开发服务器**

```bash
npm run serve
```

浏览器打开终端中提示的地址（通常是 `http://localhost:8080/`），即可看到前端页面。

---

### 二、前端整体结构说明

- **入口文件**
  - `my-app/src/main.js`：创建 Vue 应用并挂载到 `#app`
  - `my-app/src/App.vue`：整个应用的根组件（放导航栏、整体布局、`<router-view>`）

- **路由配置**
  - `my-app/src/router/index.js`：配置所有页面的访问路径（如 `/home`、`/product-list` 等），并与视图组件关联

- **页面组件（按功能划分）**
  - `my-app/src/views/Home.vue`：首页（推荐商品、入口导航）
  - `my-app/src/views/ProductList.vue`：商品列表页
  - `my-app/src/views/Order.vue`：订单列表/下单页
  - `my-app/src/views/Profile.vue`：个人中心（查看信息、退出登录）
  - `my-app/src/views/Login.vue`：登录页
  - `my-app/src/views/Register.vue`：注册页

> 以上 6 个 `.vue` 文件目前是空文件，后续会按下面的步骤一点点填充。

---

### 三、推荐页面与路由设计

1. **在 `router/index.js` 中定义路由**

示例（可以在你实现前端时参考此结构进行完善）：

```js
import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import ProductList from '../views/ProductList.vue'
import Order from '../views/Order.vue'
import Profile from '../views/Profile.vue'
import Login from '../views/Login.vue'
import Register from '../views/Register.vue'

const routes = [
  { path: '/', redirect: '/home' },
  { path: '/home', name: 'Home', component: Home },
  { path: '/product-list', name: 'ProductList', component: ProductList },
  { path: '/order', name: 'Order', component: Order },
  { path: '/profile', name: 'Profile', component: Profile },
  { path: '/login', name: 'Login', component: Login },
  { path: '/register', name: 'Register', component: Register }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
```

2. **在 `main.js` 中挂载路由**

```js
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

createApp(App).use(router).mount('#app')
```

3. **在 `App.vue` 中放导航栏 + `<router-view>`**

示意结构：

```vue
<template>
  <div id="app">
    <header>
      <!-- 顶部导航：使用 router-link 跳转 -->
      <!-- 例如： -->
      <!-- <router-link to="/home">首页</router-link> -->
      <!-- <router-link to="/product-list">商品</router-link> -->
    </header>

    <main>
      <!-- 路由对应的页面会渲染在这里 -->
      <router-view />
    </main>
  </div>
</template>
```

---

### 四、按步骤完成前端界面的推荐流程

#### 第 1 步：搭好基础布局

- 在 `App.vue` 中：
  - 写一个简单的顶部导航（`<header>` + 若干 `<router-link>`）
  - 预留内容区域 `<router-view />`
  - 用基础 CSS 保证页面居中、留白、响应式布局

#### 第 2 步：实现各个页面的“骨架”

在 `src/views/*.vue` 中先写出基础结构（先不接后端接口）：

- `Home.vue`：标题 + 若干按钮（跳转到商品列表 / 登录 / 注册）
- `ProductList.vue`：搜索框、商品卡片列表占位、分页按钮占位
- `Order.vue`：展示“我的订单”列表占位
- `Profile.vue`：显示“用户名、退出登录按钮”等占位
- `Login.vue`：账号 + 密码表单，提交按钮（先只 `console.log`）
- `Register.vue`：用户名 + 邮箱 + 密码 + 确认密码表单（同上）

> 目的：**先把路由跳转通了，每个页面能打开、看得出大致布局，再慢慢加细节。**

#### 第 3 步：封装请求与对接后端

- 在 `my-app/src/` 下新建 `api/` 目录，例如：
  - `api/request.js`：封装 axios 实例（配置 baseURL、拦截器等）
  - `api/user.js`：登录、注册相关接口
  - `api/product.js`：商品列表、商品详情接口
  - `api/order.js`：下单、查询订单接口
- 在每个页面组件中，使用对应的 API 函数：
  - `Login.vue`：调用登录接口，成功后保存 token（localStorage）并跳转到首页/个人中心
  - `ProductList.vue`：在 `mounted`/`onMounted` 中获取商品列表

#### 第 4 步：完善交互与样式

- 根据需要选择：
  - 使用 **原生 CSS / Flex / Grid** 完成布局，保持清爽简洁
  - 或安装 UI 组件库（如 Element Plus）提升开发效率
- 增加：
  - 加载中状态（loading）
  - 空数据提示
  - 表单校验与错误提示

---

### 五、命名与规范建议

- **组件名**：使用多单词，例如 `HomePage`、`ProductListPage`，避免 ESLint 的 `multi-word-component-names` 报错。
- **路由 path**：统一使用小写 + 中划线，例如 `/product-list`、`/order`。
- **文件名**：与组件名保持一致或接近，如 `ProductList.vue` 内部组件名为 `ProductListPage`。

---

### 六、遇到问题如何求助

前端界面开发过程中，如果你遇到：

- 路由跳转报错或页面不显示
- 请求后端接口失败
- 布局样式无法实现预期效果

可以在对话中：

- 说明你当前所在的文件和大致目标
- 把相关代码片段粘出来（或告知路径）

我可以根据 README 中的整体设计，**一步步帮你调整具体实现代码**（包括路由、页面结构和样式等）。

# SoftWareEngineerLab
前后端分离的小项目，外卖界面
