<template>
    <div>
        <table>
            <thead>
                <tr>
                    <th>#</th>
                    <th>题目</th>
                    <th></th>
                </tr>
            </thead>
            <tbody>
                <!-- 使用 v-for 渲染数据 -->
                <tr v-for="item in tableData" :key="item.id">
                    <td>
                        <!-- 每个单元格包含链接 -->
                        <RouterLink to="/question_bank/question_description" class="link-style" 
                            @click="storeItemID(item.id)">{{ item.id }}</RouterLink>
                    </td>
                    <td>
                        <RouterLink to="/question_bank/question_description" class="link-style" 
                            @click="storeItemID(item.id)">{{ item.description }}</RouterLink>
                    </td>
                    <td>
                        <RouterLink to="/question_bank/submit" class="link-style" 
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
            tableData: [
                {
                    id: 0,
                    link: '',
                    description: '题目一',
                },
                {
                    id: 1,
                    link: '',
                    description: '题目二',
                },
            ],
        };
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
  