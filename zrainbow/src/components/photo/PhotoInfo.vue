<!--  -->
<template>
  <div id="tmpl">
      图片详情{{id}}
  </div>
</template>
<!--  -->
<script>
export default {
  data(){
    return {
      id:''
    }
  },
  created(){
    this.id = this.$route.params.id;
  }
}
</script>
<!--  -->
<style scoped>

</style>
