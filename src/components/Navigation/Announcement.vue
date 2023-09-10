<template>
    <h1>
        Announcement
    </h1>
    <div v-for=" announcement in announcements" :key="announcement.id">
        <anc :announcement=announcement />
    </div>
</template>

<script>
import anc from './Element/Anc.vue';
export default {
    components: {
        anc,
    },
    data() {
        return {
            announcements: {
                a1: {
                    id: 1,
                    title: '公告一',
                    subtitle: '副标题',
                    content: '正文',
                    author: '作者',
                    publishDate: '发布时间',
                },
                a2: {
                    id: 2,
                    title: '公告二',
                    subtitle: '副标题',
                    content: '正文',
                    author: '作者',
                    publishDate: '发布时间',
                }
            }
        }
    }
}


</script>
