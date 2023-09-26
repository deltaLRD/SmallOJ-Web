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
  created: function () {
    this.$api.get('/api/submission/')
      .then(response => {

        console.log(response.data);
      })
      .catch(error => {
        console.error(error);
      });
  },
  methods: {

  },
};

</script>
<!-- 
后端响应示例
{
    "status_code": "Success",
    "status_msg": "",
    "submissionInfos": [
        {
            "username": "Lird2002",
            "problemName": "A+B 2",
            "testcaseCount": 1,
            "passCount": 1,
            "id": 1706630651007058000
        },
        {
            "username": "Lird2002",
            "problemName": "A+B 2",
            "testcaseCount": 2,
            "passCount": 2,
            "id": 1706660088029184000
        }
    ]
}
-->