<template>
  <div class="nav-wrap">
    <header class="top-bar">
      <button
        type="button"
        class="menu-btn"
        aria-label="打开导航"
        @click="drawerOpen = true"
      >
        <span class="menu-icon" />
      </button>
      <span class="top-title">{{ currentTitle }}</span>
      <router-link to="/Profile" class="profile-link">个人主页</router-link>
    </header>

    <div
      v-show="drawerOpen"
      class="drawer-overlay"
      @click="drawerOpen = false"
    />
    <aside class="drawer" :class="{ 'drawer-open': drawerOpen }">
      <div class="drawer-header">
        <span class="drawer-title">导航</span>
        <button
          type="button"
          class="drawer-close"
          aria-label="关闭"
          @click="drawerOpen = false"
        >
          ×
        </button>
      </div>
      <nav class="drawer-nav">
        <router-link
          to="/Home"
          class="drawer-link"
          @click="drawerOpen = false"
        >
          首页
        </router-link>
        <router-link
          to="/productList"
          class="drawer-link"
          @click="drawerOpen = false"
        >
          商品
        </router-link>
        <router-link
          to="/Order"
          class="drawer-link"
          @click="drawerOpen = false"
        >
          购物车
        </router-link>
      </nav>
    </aside>
  </div>
</template>

<script>
export default {
  name: 'AppNavBar',
  data() {
    return {
      drawerOpen: false
    }
  },
  computed: {
    currentTitle() {
      const path = this.$route.path
      if (path === '/Home') return '首页'
      if (path === '/productList') return '商品列表'
      if (path === '/Order') return '购物车'
      if (path === '/Profile') return '个人主页'
      if (path === '/Register') return '注册'
      return '首页'
    }
  }
}
</script>

<style scoped>
.nav-wrap {
  width: 100%;
}

.top-bar {
  background: linear-gradient(135deg, #2c3e50 0%, #34495e 100%);
  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.15);
  position: sticky;
  top: 0;
  z-index: 20;
  height: 64px;
  padding: 0 1.5rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-radius: 16px;
}

.menu-btn {
  width: 48px;
  height: 48px;
  border: none;
  border-radius: 10px;
  background: rgba(255, 255, 255, 0.12);
  color: #ecf0f1;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: background 0.2s;
}
.menu-btn:hover {
  background: rgba(255, 255, 255, 0.2);
}

.menu-icon {
  display: block;
  width: 24px;
  height: 2px;
  background: currentColor;
  box-shadow: 0 -7px 0 currentColor, 0 7px 0 currentColor;
}

.top-title {
  font-size: 1.25rem;
  font-weight: 600;
  color: #ecf0f1;
}

.profile-link {
  padding: 0.6rem 1.2rem;
  color: #ecf0f1;
  text-decoration: none;
  font-weight: 500;
  border-radius: 10px;
  transition: background 0.2s, color 0.2s;
}
.profile-link:hover {
  background: rgba(255, 255, 255, 0.15);
  color: #fff;
}
.profile-link.router-link-active {
  background: rgba(255, 255, 255, 0.2);
  color: #fff;
}

.drawer-overlay {
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.4);
  z-index: 30;
  transition: opacity 0.25s;
}

.drawer {
  position: fixed;
  top: 0;
  left: 0;
  width: 280px;
  max-width: 85vw;
  height: 100vh;
  background: #fff;
  box-shadow: 4px 0 20px rgba(0, 0, 0, 0.12);
  z-index: 40;
  display: flex;
  flex-direction: column;
  transform: translateX(-100%);
  transition: transform 0.25s ease-out;
  border-radius: 0 16px 16px 0;
}
.drawer.drawer-open {
  transform: translateX(0);
}

.drawer-header {
  padding: 1.25rem 1.5rem;
  border-bottom: 1px solid #eee;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: #f8f9fa;
}

.drawer-title {
  font-size: 1.15rem;
  font-weight: 600;
  color: #2c3e50;
}

.drawer-close {
  width: 36px;
  height: 36px;
  border: none;
  border-radius: 8px;
  background: transparent;
  color: #666;
  font-size: 1.5rem;
  line-height: 1;
  cursor: pointer;
  transition: background 0.2s, color 0.2s;
}
.drawer-close:hover {
  background: #eee;
  color: #333;
}

.drawer-nav {
  padding: 1rem 0;
  display: flex;
  flex-direction: column;
}

.drawer-link {
  padding: 1rem 1.5rem;
  color: #2c3e50;
  text-decoration: none;
  font-size: 1.05rem;
  font-weight: 500;
  transition: background 0.2s, color 0.2s;
  border-left: 3px solid transparent;
}
.drawer-link:hover {
  background: #f0f2f5;
  color: #1a1a2e;
}
.drawer-link.router-link-active {
  background: #e8eef5;
  color: #4a90d9;
  border-left-color: #4a90d9;
}
</style>

