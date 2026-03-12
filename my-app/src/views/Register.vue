<template>
  <div class="register-page">
    <div class="register-card">
      <h1 class="title">用户注册</h1>
      <form class="form" @submit.prevent="handleRegister">
        <input
          v-model="form.email"
          type="email"
          class="input"
          placeholder="邮箱"
          autocomplete="email"
        />
        <input
          v-model="form.password"
          type="password"
          class="input"
          placeholder="密码"
          autocomplete="new-password"
        />
        <input
          v-model="form.confirmPassword"
          type="password"
          class="input"
          placeholder="确认密码"
          autocomplete="new-password"
        />
        <button type="submit" class="btn btn-register">注册</button>
        <router-link to="/Login" class="link-login">已有账号？去登录</router-link>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  name: 'registerPage',
  data() {
    return {
      form: {
        username: '',
        email: '',
        password: '',
        confirmPassword: ''
      }
    }
  },
  methods: {
    handleRegister() {
      // 这里只做简单示例：校验两次密码一致后直接跳转登录页
      if (this.form.password !== this.form.confirmPassword) {
        alert('两次输入的密码不一致')
        return
      }
      // TODO: 将来可在此处调用后端注册接口
      this.$router.push('/Login')
    }
  }
}
</script>

<style scoped>
.register-page {
  min-height: calc(100vh - 4rem);
  display: flex;
  align-items: center;
  justify-content: center;
}

.register-card {
  background: rgba(255, 255, 255, 0.92);
  backdrop-filter: blur(10px);
  border-radius: 16px;
  padding: 2.5rem;
  box-shadow: 0 12px 40px rgba(0, 0, 0, 0.12);
  width: 100%;
  max-width: 420px;
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
.btn-register {
  background: #2c3e50;
  color: #fff;
  margin-top: 0.25rem;
}
.btn-register:hover {
  background: #1a252f;
}
.btn-register:active {
  transform: scale(0.98);
}

.link-login {
  display: block;
  text-align: center;
  margin-top: 0.5rem;
  color: #4a90d9;
  text-decoration: none;
  font-size: 0.95rem;
}
.link-login:hover {
  text-decoration: underline;
}
</style>