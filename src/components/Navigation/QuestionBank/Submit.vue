<template>
  <div>
    <form @submit.prevent="submitCode">
      <!-- 输入框 -->
      <div class="form-group">
        <label for="numberInput">题目：</label>
        <input type="number" id="numberInput" v-model.number="number" placeholder="" />
      </div>

      <!-- 下拉列表 -->
      <div class="form-group">
        <label for="languageSelect">编程语言：</label>
        <select id="languageSelect" v-model="selectedLanguage">
          <option value="python" >Python</option>
          <option value="java">Java</option>
          <option value="cpp">C++</option>
        </select>
      </div>

      <!-- 提交按钮 -->
      <button type="submit">提交</button>
    </form>
  </div>
</template>
  
<script>
export default {
  data() {
    return {
      number: 0, // 输入框的默认值
      selectedLanguage: 'cpp', // 下拉列表的默认值
    };
  },
  created() {
    // 在这里添加获取数据的逻辑
    const itemIDCookie = this.getCookie('itemID');
    if (itemIDCookie) {
      this.number = parseInt(itemIDCookie); // 将字符串转换为整数
    }
    else this.number = 0;
  },
  methods: {
    submitCode() {
      // 在这里添加提交代码的逻辑
      console.log(this.number);
      if (!this.number) window.alert('输入框为空');
      // 可以将数据提交到后端或执行其他操作
    },
    getCookie(name) {
      const cookieValue = document.cookie
        .split('; ')
        .find(row => row.startsWith(name + '='))
        ?.split('=')[1];
      return cookieValue || null;
    },
  },
};
</script>
  
<style>
/* 样式可以根据需要自定义 */
.form-group {
  margin-bottom: 20px;
}
</style>
  