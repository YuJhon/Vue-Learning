<!--  -->
<template>
  <div id="tmpl">
      <slide :imgs="list"></slide>
  </div>
</template>
<!--  -->
<script>
import picDatas from '../../../statics/data/home/pictureInfo.json';
import slide from '../subcommon/Slide.vue';
export default {
  data(){
      return {
          id:0,
          list:[]
      }
  },
  components:{
      slide
  },
  created(){
      this.id = this.$route.params.id;
      this.getImages();
  },
  methods:{
      getImages(){
          this.list = picDatas.data;
      }
  }
}
</script>
<!--  -->
<style scoped>

</style>
