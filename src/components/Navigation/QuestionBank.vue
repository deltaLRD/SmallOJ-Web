<template>
  <!-- <h1>
    QuestionBank
  </h1> -->
  <div style="text-align: left;">
    <RouterLink to="/question_bank/questions" class="link-style">
      <a style="width: 80px;">题目集</a>
    </RouterLink>&nbsp;
    <RouterLink to="/question_bank/submit" class="link-style">
      <a style="width: 100px;">提交代码</a></RouterLink>&nbsp;
    <RouterLink to="/question_bank/submissions" class="link-style">
      <a style="width: 100px;">所有提交</a></RouterLink>&nbsp;
    <RouterLink to="/question_bank/submit_topic" class="link-style">
      <a style="width: 100px;">创建题目</a></RouterLink>&nbsp;
    <RouterLink to="/question_bank/submit_sample" class="link-style">
      <a style="width: 100px;">创建示例</a></RouterLink>

    <div style="padding-top: 20px;">
      
      <RouterView></RouterView>
    </div>
  </div>
</template>

<style scoped>
a{
  display: inline-block;
  white-space: nowrap;
  text-align: center;
  height: 50px;
  line-height: 50px;
  background-color: gray;
  border-radius: 10px;
  transition: background-color 0.3s ease;
}

a:hover{
  background-color: rgb(88, 88, 88);
}
</style>