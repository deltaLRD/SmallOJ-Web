<template>
    <h1>
        Submissions
    </h1>
</template>




<script>
export default {
  data() {
    return {
      
    };
  },
  created:function(){
    this.$api.get('/api/submission/')
    .then(response => {
        this.tableData = response.data.status_msg;
    })
    .catch(error => {
        console.error(error);
    });
  },
  methods: {

  },
};

</script>