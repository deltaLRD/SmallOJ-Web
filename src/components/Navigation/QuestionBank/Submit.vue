<template>
  <div>
    <form @submit.prevent="submitCode">
      <!-- 输入框 -->
      <div class="form-group">
        <label for="numberInput" style="color: white;">题目：</label>
        <input type="number" id="numberInput" v-model.number="number" placeholder="" />
      </div>

      <!-- 下拉列表 -->
      <div class="form-group">
        <label for="languageSelect" style="color: white;">编程语言：</label>
        <select id="languageSelect" v-model="selectedLanguage">
          <option value="Python3">Python</option>
          <option value="Java">Java</option>
          <option value="C++">C++</option>
          <option value="C">C</option>
        </select>
      </div>
      <!-- 代码输入框 -->
      <div>
        <label for="codeInput" style="color: white;">提交代码:</label><br><br>
        <textarea id="codeInput" v-model="code" rows="5" style="width:60%; height: 200px;"></textarea>
      </div>

      <!-- 提交按钮 -->
      <button type="submit" class="sub">提交</button>
    </form>
  </div>
</template>
  
<script>
import { useCookies } from 'vue3-cookies';
export default {
  setup() {
    const { cookies } = useCookies();
    return { cookies };
  },
  data() {
    return {
      number: 0, // 输入框的默认值
      selectedLanguage: 'Java', // 下拉列表的默认值
      code: '', // 代码输入框的默认值
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
      const userid = this.cookies.get("userid");
      if (userid === '') {
        window.alert("请登录");
        return;
      }
      if (this.number === '') {
        window.alert('题目不能为空');
        return;
      }
      console.log(this.number);
      console.log(this.code);
      const form_data = new FormData();
      form_data.append("problem_id",this.number);
      form_data.append("language", this.selectedLanguage);
      form_data.append("code", this.code);
      form_data.append("userid", userid);
      // 可以将数据提交到后端或执行其他操作
      
      // this.$api.post("/api/submission/", {
      //   problem_id: this.number,
      //   language: this.selectedLanguage,
      //   code: this.code,
      //   userid: userid
      // },
      // { "Content-Type": "multipart/form-data" })
      this.$api({
        method: "post",
        url: "/api/submission/",
        data: form_data,
        headers: {"Content-Type": "application/form-data"},
      })
      .then(response => {
        console.log(response);
        if (response.data.status_code === 'Failed') {
          window.alert('提交失败');
        } else {
          window.alert('提交成功');
        }
      }).catch(error => {
        console.error(error);
      });
      this.code = '';
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

.sub {
  color: white;
  font-size: 30px;
  width: 100px;
  height: 70px;
  background-color: gray;
  border: 6px solid rgb(83, 83, 83);
  border-radius: 10px;
  transition: background-color 0.3s ease;
}

.sub:hover {
  background-color: rgb(88, 88, 88);
}
</style>
  