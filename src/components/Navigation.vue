<template >
  <div class="navi">
  <RouterLink to="/homepage" class="link-style ">主页</RouterLink>&nbsp;
  <RouterLink to="/question_bank" class="link-style">题库</RouterLink>&nbsp;
  <RouterLink to="/announcement" class="link-style">公告</RouterLink>&nbsp;
  <RouterLink to="/help" class="link-style">帮助</RouterLink>
  </div>
</template>


<style scoped>
div{
  text-align: left;
  margin-top: 20px;
}
.navi{
  height: 80px;
  border: 2px solid gray;
  border-radius: 5px; 
  line-height: 80px;
  margin-bottom: 20px;
  font-size: 25px;
}

a{
  display: inline-block;
  text-align: center;
  width: 100px;
}

</style>