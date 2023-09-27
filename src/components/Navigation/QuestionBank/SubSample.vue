<template>
    <div>
        <form @submit.prevent="submitQuestion">
            <!-- 输入框 -->
            <div class="form-group">
                <label for="numberInput" style="color: white;">题目编号：</label>
                <input type="number" id="numberInput" v-model.number="number" placeholder="" />
            </div>
            <div class="container">
                <div class="half-width-input">
                    <label for="Input" style="color: white;">输入:</label><br><br>
                    <textarea id="Input" v-model="input" rows="5" style="width:80%;"></textarea>
                </div>
                <div class="half-width-input">
                    <label for="Output" style="color: white;">输出:</label><br><br>
                    <textarea id="Output" v-model="output" rows="5" style="width:80%;"></textarea>
                </div>
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
            number: 0,
            input: '',
            output: '',
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
                window.alert('题目不能为空');
                return;
            }
            this.$api.post("/api/problem/"+userid+'/testcase',{
                number: this.number,
                input: this.input,
                output: this.output,
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
            this.input = '';
            this.output= '';
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

.container {
    display: flex;
    justify-content: space-between;
    width: 100%;
}

.half-width-input {
    flex: 1;
    /* 让输入框平均占据容器的一半 */
    margin-right: 5px;
    /* 可以添加一些间距 */
    text-align: left;
    /* 文字左对齐 */
}
</style>
    