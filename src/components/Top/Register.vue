<template>
    <div>
      <h2>Register</h2>
      <form @submit.prevent="register">
        <div class="form-group">
          <label for="username">Username:</label>&nbsp;
          <input type="text" id="username" v-model="username" autocomplete="username"/>
        </div>
        <div class="form-group">
          <label for="password">Password:</label>&nbsp;&nbsp;
          <input type="password" id="password" v-model="password" autocomplete="current-password"/>
        </div>
        <div class="form-group">
          <label for="email">Email:</label>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <input type="email" id="email" v-model="email" />
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
        email:'',
        errorMessage: '',
      };
    },
    methods: {
        register() {
        // 这里可以添加登录逻辑
        if(this.username.trim() ==='') this.errorMessage = '用户名不能为空';
        else if(this.password.trim() ==='') this.errorMessage = '密码不能为空';
        else if(this.email.trim() ==='') this.errorMessage = '邮箱不能为空';
        else {
            this.errorMessage = '';   // 清空错误信息
            this.$api.post('/api/user/register',{
                username: this.username,
                password: this.password,
                email: this.email,

            })
                .then(response => {
                    console.log(response);
                    window.alert('注册成功')
                    
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
  