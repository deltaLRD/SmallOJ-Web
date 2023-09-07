<template>
  <div>
    <h2>Login</h2>
    <form @submit.prevent="login">
      <div class="form-group">
        <label for="username">Username:</label>&nbsp;
        <input type="text" id="username" v-model="username" autocomplete="username" />
      </div>
      <div class="form-group">
        <label for="password">Password:</label>&nbsp;&nbsp;
        <input type="password" id="password" v-model="password" autocomplete="current-password" />
      </div>
      <button type="submit" style="color:aqua">Login</button>
    </form>
    <div v-if="errorMessage" class="error-message">{{ errorMessage }}</div>
  </div>
</template>
  
<script>
export default {
  data() {
    return {
      username: '',
      password: '',
      errorMessage: '',
    };
  },
  methods: {
    login() {
      // // 这里可以添加登录逻辑

      if (this.username.trim() === '') this.errorMessage = '用户名不能为空';
      else if (this.password.trim() === '') this.errorMessage = '密码不能为空';
      else {
        this.errorMessage = '';   // 清空错误信息
        // 发送 GET 请求，只需要指定相对路径
        this.$api.get('/api/user/login', {
          username: this.username,
          password: this.password
        })
          .then(response => {


            window.alert('登录成功');
          })
          .catch(error => {
            console.error(error);
          });
      }
    },
  },
};
</script>
  
<style>
.error-message {
  color: red;
}
</style>
  