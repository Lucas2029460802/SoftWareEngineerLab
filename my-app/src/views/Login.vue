<template>
  <div class="login-page">
    <div class="login-card">
      <h1 class="title">用户登录</h1>
      <form class="form" @submit.prevent="goToHome">
        <input
          v-model="email"
          type="email"
          class="input"
          placeholder="邮箱"
          autocomplete="email"
        />
        <input
          v-model="password"
          type="password"
          class="input"
          placeholder="密码"
          autocomplete="current-password"
        />
        <button type="submit" class="btn btn-login">登录</button>
        <router-link to="/Register" class="link-register">注册</router-link>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  name: 'loginPage',
  data() {
    return {
      email: '',
      password: ''
    }
  },
  methods: {
    goToHome() {
      this.$router.push('/Home')
    }
  }
}
</script>

<style scoped>
.login-page {
  min-height: calc(100vh - 4rem);
  display: flex;
  align-items: center;
  justify-content: center;
}

.login-card {
  background: rgba(255, 255, 255, 0.92);
  backdrop-filter: blur(10px);
  border-radius: 16px;
  padding: 2.5rem;
  box-shadow: 0 12px 40px rgba(0, 0, 0, 0.12);
  width: 100%;
  max-width: 380px;
}

.title {
  margin: 0 0 1.5rem;
  font-size: 1.5rem;
  font-weight: 600;
  text-align: center;
  color: #1a1a2e;
}

.form {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.input {
  padding: 0.75rem 1rem;
  border: 1px solid #e0e0e0;
  border-radius: 10px;
  font-size: 1rem;
  outline: none;
  transition: border-color 0.2s, box-shadow 0.2s;
}
.input::placeholder {
  color: #999;
}
.input:focus {
  border-color: #4a90d9;
  box-shadow: 0 0 0 3px rgba(74, 144, 217, 0.15);
}

.btn {
  padding: 0.75rem 1.25rem;
  border: none;
  border-radius: 10px;
  font-size: 1rem;
  font-weight: 500;
  cursor: pointer;
  transition: background 0.2s, transform 0.1s;
}
.btn-login {
  background: #2c3e50;
  color: #fff;
  margin-top: 0.25rem;
}
.btn-login:hover {
  background: #1a252f;
}
.btn-login:active {
  transform: scale(0.98);
}

.link-register {
  display: block;
  text-align: center;
  margin-top: 0.5rem;
  color: #4a90d9;
  text-decoration: none;
  font-size: 0.95rem;
}
.link-register:hover {
  text-decoration: underline;
}
</style>