

<template>
  <div class="home-page">
    <main class="main-content">
      <p class="welcome-text">喵喵喵喵喵帕次~</p>
      <img src="@/assets/furry2.gif" alt="可爱的猫猫" class="mascot-image" />
    </main>
  </div>
</template>

<script>
export default {
  name: 'homePage'
}
</script>

<style scoped>
.home-page {
  min-height: 100vh;
  min-width: 75vw;
  width: 100%;
  align-self: stretch;
  display: flex;
  flex-direction: column;
  background: #f8f9fa;
}

.main-content {
  flex: 1;
  min-width: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 1.5rem;
  padding: 2rem;
}

.welcome-text {
  font-size: 1.5rem;
  color: #2c3e50;
  margin: 0;
  font-weight: 500;
}

.mascot-image {
  width: 260px;
  max-width: 60vw;
  border-radius: 20px;
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.12);
}
</style>
