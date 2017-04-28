<template>
  <div class="content">
    <router-link :to="{path:'/list'}">
      <h1>hello,welcome to use {{ name }}</h1>
    </router-link>
  </div>
</template>
<script>
  import 'assets/common.scss'
  export default {
    data () {
      return {
        name: 'vue框架!'
      }
    },
    mounted: function () {
      console.log(this.name)
      this.name = 'vue mpa'
    }
  }
</script>
<style lang="scss" scoped>
  @function px2rem($px, $base: 75) {
      @return ($px / $base) * 1rem;
  }
  h1{
    width:px2rem(500);
    height:px2rem(100);
    color:#f00;
    text-align: center;
    font-size:px2rem(20);
    margin:0 auto;
    padding:20px;
  }
</style>