<!--  -->
<template>
  <div id="tmpl">
      <comment v-bind:id="id">

      </comment>
  </div>
</template>
<!--  -->
<script>
import comment from '../subcommon/Comment.vue';
export default {
  data(){
      return{
          id:0,
      }
  },
  components:{
      comment
  },
  created(){
      this.id = this.$route.params.id;
  },
  methods:{

  }
}
</script>
<!--  -->
<style scoped>

</style>
