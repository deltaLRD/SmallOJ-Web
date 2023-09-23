<template>
  <div v-if="0" class="top">
    <img src="../assets/vue.svg" />
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

<script setup>

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
</style>
  