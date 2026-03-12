<template>
  <div id="app" class="app-wrap">
    <div class="bg-layer" />
    <main class="main">
      <NavBar v-if="!$route.meta.hideNav" />
      <router-view />
    </main>
  </div>
</template>

<script>
import NavBar from './components/NavBar.vue'

export default {
  name: 'App',
  components: {
    NavBar
  }
}
</script>

<style scoped>
.app-wrap {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  min-height: 100vh;
  position: relative;
  isolation: isolate;
}

.bg-layer {
  position: fixed;
  inset: 0;
  z-index: 0;
  background-image: url('@/assets/boat.png');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  opacity: 0.45;
  filter: brightness(1.35) saturate(0.85);
}
.bg-layer::after {
  content: '';
  position: absolute;
  inset: 0;
  background: rgba(255, 255, 255, 0.35);
  pointer-events: none;
}

.main {
  position: relative;
  z-index: 1;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: stretch;
  justify-content: flex-start;
  padding: 2rem;
}
</style>

<style>
#app {
  min-height: 100vh;
}
</style>
