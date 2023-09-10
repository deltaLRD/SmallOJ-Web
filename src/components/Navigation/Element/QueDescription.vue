<template>
    <h1>
        Question{{ itemID  }}
    </h1>
</template>

<script>
export default {
    data() {
        return {
            itemID: 0,
        };
    },
    created() {
        // 在这里添加获取数据的逻辑
        const itemIDCookie = this.getCookie('itemID');
        if (itemIDCookie) {
            this.itemID = parseInt(itemIDCookie); // 将字符串转换为整数
        }
        else this.itemID = 0;
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