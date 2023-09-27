<template>
    <div>
        <table>
            <thead>
                <tr style="background-color: rgb(92, 92, 92);">
                    <th style="width: 3%; color: white;text-align: center;">#</th>
                    <th style="width: auto; color: white;">题目</th>
                    <th style="width: 2%;text-align: right;"></th>
                </tr>
            </thead>
            <tbody >
                <!-- 使用 v-for 渲染数据 -->
                <tr  v-for="item in tableData" :key="item.id" >
                    <td style="padding: 8px;">
                        <!-- 每个单元格包含链接 -->
                        <RouterLink to="/question_bank/question_description" class="link-style" 
                            @click="storeItemID(item.id)">{{ item.id }}</RouterLink>
                    </td>
                    <td>
                        <RouterLink to="/question_bank/question_description" class="link-style" 
                            @click="storeItemID(item.id)">
                            <a>{{ item.name }}</a>
                            <a style="float:right">{{ item.level }}</a>
                        </RouterLink>
                    </td>
                    <td>
                        <RouterLink to="/question_bank/submit" class="link-style submit"
                            @click="storeItemID(item.id)">submit</RouterLink>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
</template>
  
<script>
import { useCookies } from "vue3-cookies";
const { cookies } = useCookies();


export default {
    data() {
        return {
            tableData: [ ],
        };
    },
    created:function() {
            this.$api.get('/api/problem/', {
                params:{
                    page:1,
                    pagesize:10,
                }
            })
                .then(response => {
                    this.tableData = response.data.problems;
                })
                .catch(error => {
                    console.error(error);
                });
        },
    methods: {
        storeItemID(itemID) {
            this.setCookie('itemID', itemID, 7);
        },
        setCookie(name, value, days) {
            const date = new Date();
            date.setTime(date.getTime() + days * 60 * 1000);
            const expires = 'expires=' + date.toUTCString();
            document.cookie = name + '=' + value + ';' + expires + ';path=/';
        },
    },
};
</script>

<style scoped>
table {
  border-collapse: collapse; /* 合并边框，使边框更紧凑 */
  width: 100%; /* 表格宽度100% */
  border: 3px solid gray; /* 表格的外边框样式 */
  border-radius: 50px;
}

th, td {
  border: 3px solid gray; /* 单元格的边框样式 */
  padding: 8px; /* 单元格内边距，可根据需要调整 */
  text-align: left; /* 文本左对齐，可根据需要调整 */
}

.submit{
    color:white;
}
.submit:hover{
    color:greenyellow;
}
</style>