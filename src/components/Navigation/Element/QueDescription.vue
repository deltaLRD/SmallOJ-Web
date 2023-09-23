<template>
    <h1 style="color: white;">
        Question{{ itemID  }}
    </h1>
    <a>{{description}}</a>
</template>

<script>
export default {
    data() {
        return {
            itemID: 0,
            description: '',
        };
    },
    created() {
        // 在这里添加获取数据的逻辑
        const itemIDCookie = this.getCookie('itemID');
        if (itemIDCookie) {
            this.itemID = parseInt(itemIDCookie); // 将字符串转换为整数
        }
        else this.itemID = 0;

        this.$api.get('/api/problem/'+this.itemID+'/md')
            .then(response => {
                this.description = response.data
            })
            .catch(error => {
                console.error(error);
            });
    },
    methods: {
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