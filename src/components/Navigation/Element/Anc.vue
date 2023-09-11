<template>
    <div class="announcement">
        <!-- 标题和小标题，左对齐 -->
        <div class="title">
            <h2>{{ announcement.title }}</h2>
            <p class="subtitle">{{ announcement.subtitle }}</p>
        </div>

        <!-- 正文，居中对齐 -->
        <div class="content">
            <p>{{ announcement.content }}</p>
        </div>

        <!-- 作者和发表时间，左对齐 -->
        <div class="info">
            <p>作者: {{ announcement.author }}</p>
            <p>发表时间: {{ announcement.publishDate }}</p>
        </div>
    </div>
</template>
  
<script>
export default {
    props: {
        announcement: Object, // 从父组件传递公告数据
    },
};
</script>
  
<style scoped>
.announcement {
  width: 100%;
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
  border: 1px solid #ccc;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  background-color: #fff; /* 设置背景颜色为白色 */
  color: #000; /* 设置文字颜色为黑色 */
  text-align: left;

  .title {
    h2 {
      margin: 0;
      padding: 0;
    }
    .subtitle {
      margin: 5px 0;
      padding: 0;
    }
  }

  .content {
    text-align: center;
    margin: 20px 0;
  }

  .info {
    p {
      margin: 0;
      padding: 0;
    }
  }
}
</style>

  