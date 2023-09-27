<template>
  <!-- <div>

  </div> -->
  <div v-if=flag class="top">
    <select id="languageSelect" v-model="selectedMode" class="select">
      <option value="quit" @click="quit">退出登陆</option>
      <option value="main" hidden>{{ userName }}</option>
    </select>
  </div>
  <div v-else class="top">
    <RouterLink to="/login" class="link-style">
      <a> 登陆 </a>
    </RouterLink>&nbsp;
    <RouterLink to="/register" class="link-style">
      <a> 注册 </a>
    </RouterLink>

  </div>
</template>

<script>
export default {
  data() {
    return {
      selectedMode:'main',
      userName: '',
      token: '',
      flag: 0,
    };
  },
  methods: {

  },
  watch: {
    selectedMode: function (val) {
      if (val === 'quit') {
        this.flag = 0;
        this.$router.push('/');
      }
    },
  },
  mounted: function () {
    this.token = localStorage.getItem('token');
    console.log(this.token);
    if (this.token) {
      this.flag = 1;
      this.$api.get('/api/user/'+this.token, {
        id: this.token,
      })
        .then(response => {
          this.userName = response.data.username;
        })
        .catch(error => {
          console.error(error);
        });
    }
  }
};
</script>

<style scoped>
.top {
  text-align: right;
  margin-right: 10px;
}

a {
  display: inline-block;
  text-align: center;
  width: 100px;
  height: 50px;
  line-height: 50px;
  font-size: 25px;
  background: rgba(147, 147, 147, 0.5); /* 设置纯黑色毛玻璃效果的背景，透明度为0.5 */
  transition: background-color 0.3s ease; /* 添加过渡效果，使颜色变化平滑 */
  border-radius: 10px;
  border:5px solid rgba(88, 88, 88, 0.8);
}

a:hover {
  background: rgba(88, 88, 88, 0.8);
}

.select{
  display: inline-block;
  text-align: center;
  width: 120px;
  height: 60px;
  line-height: 50px;
  font-size: 25px;
  background: rgba(147, 147, 147, 0.5); /* 设置纯黑色毛玻璃效果的背景，透明度为0.5 */
  transition: background-color 0.3s ease; /* 添加过渡效果，使颜色变化平滑 */
  border-radius: 10px;
  border:5px solid rgba(88, 88, 88, 0.8);
  appearance: none;
  -moz-appearance: none;
  -webkit-appearance: none;
}
.select::-ms-expand{
  display: none;
}
</style>
  