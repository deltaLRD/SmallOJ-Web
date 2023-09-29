<template>
    <div>
      <form @submit.prevent="submitQuestion">
        <!-- 难度选择-->
        <div>
            <label for="levelSelect" style="color: white;">题目难度：</label>
          <select id="levelSelect" v-model="level">
            <option value= '0' >easy</option>
            <option value= '1' >normal</option>
            <option value= '2' >hard</option>
          </select>
        </div><br>
        <!-- 题目名字-->
        <div>
          <label for="nameInput" style="color: white;">题目名字:</label>&nbsp;
          <textarea id="nameInput" v-model="name" rows="1" style="width:10%; "></textarea>
        </div><br><br>
        <!-- 代码输入框 -->
        <div>
          <label for="questionInput" style="color: white;">提交题目:</label><br><br>
          <textarea id="questionInput" v-model="question" rows="5" style="width:60%; height: 200px;"></textarea>
        </div>
  
        <!-- 提交按钮 -->
        <button type="submit" class="sub">提交</button>
      </form>
    </div>
  </template>
    
  <script>
  import { expandKeys } from 'element-plus/es/components/table-v2/src/common';
import { useCookies } from 'vue3-cookies';
  export default {
    setup() {
      const { cookies } = useCookies();
      return { cookies };
    },
    data() {
      return {
        name:'',
        level: '0',
        question: '', // 代码输入框的默认值
      };
    },
    methods: {
      submitQuestion() {
        const userid = this.cookies.get("userid");
        if (userid === '') {
          window.alert("请登录");
          return;
        }
        if (this.number === '') {
          window.alert('题目号不能为空');
          return;
        }
        this.$api.post("/api/problem/",{
          name: this.name,
          level: this.level,
          question: this.question,
        })
        .then(response => {
          console.log(response.data);
          if (response.data.status_code === 'Failed') {
            window.alert('提交失败');
          } else {
            window.alert('提交成功');
          }
        }).catch(error => {
          console.error(error);
        });
        this.name = '';
        this.question = '';
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
    