<template>
    <!-- <h1>
        Announcement
    </h1> -->
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
                    title: '全新界面上线！提供更直观的编程体验',
                    subtitle: '探索全新的代码编辑界面',
                    content: '我们引以为傲的在线代码评测工具又有了新变化！全新的界面为您提供了更直观的编程体验，同时保留了您喜爱的功能。现在，您可以更轻松地编写和测试代码，尽情探索吧！',
                    author: '代码评测团队',
                    publishDate: '2023-09-25',
                },
                a2: {
                    id: 2,
                    title: 'Python 3.10 支持正式上线',
                    subtitle: '最新 Python 版本全力支持',
                    content: '我们很高兴宣布，我们的代码评测工具正式支持 Python 3.10！无论您是 Python 新手还是专家，您都可以在我们的平台上编写和测试最新版本的 Python 代码。',
                    author: '代码评测团队',
                    publishDate: '2023-09-26',
                },
                a3: {
                    id: 3,
                    title: '学习如何进行性能优化',
                    subtitle: '提高代码效率的秘诀',
                    content: '想要让您的代码运行更快吗？参加我们的新性能优化课程，了解提高代码效率的秘诀。从代码分析到优化技巧，我们将教您一切。',
                    author: '教程团队',
                    publishDate: '2023-09-27',
                },
                a4: {
                    id: 4,
                    title: '新的编程挑战赛来袭！',
                    subtitle: '测试您的编程技能',
                    content: '准备好挑战自己了吗？我们即将举办新的编程挑战赛，测试您的编程技能。参与竞争，赢取奖品，同时提高您的编程水平。',
                    author: '竞赛团队',
                    publishDate: '2023-09-28',
                },
                a5: {
                    id: 5,
                    title: '最佳实践：如何写出干净、可维护的代码',
                    subtitle: '编写高质量代码的指南',
                    content: '想要写出干净、可维护的代码吗？了解最佳实践，提高您的编码技巧。我们将与您分享编写高质量代码的指南和技巧。',
                    author: '编码专家',
                    publishDate: '2023-09-29',
                }
            }

        }
    }
}


</script>
