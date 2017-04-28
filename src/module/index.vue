<template>
  <div class="content">
    <h1>hello,welcome to use {{ name }}</h1>
  </div>
</template>
<script>
  export default {
    data () {
      return {
        name: 'vue-mpa'
      }
    },
    mounted: function () {
      console.log(1)
    }
  }
</script>
<style lang="scss" scoped>
  .content{
    background: #f1f1f1;
    border:1px solid #ccc;
    h1{
      font-size:32px;
      color:#f00;
    }
  }
</style>