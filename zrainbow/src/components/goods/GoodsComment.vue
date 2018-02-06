<!--  -->
<template>
  <div id="tmpl">
      <comment v-bind:id="id" :category="category">

      </comment>
  </div>
</template>
<!--  -->
<script>
import {GOODS_COMMENT_CATEGORY} from '../../kits/vm.js';
import comment from '../subcommon/Comment.vue';
export default {
  data(){
      return{
          id:0,
          category:''
      }
  },
  components:{
      comment
  },
  created(){
      this.id = this.$route.params.id;
      this.category = GOODS_COMMENT_CATEGORY;
  },
  methods:{

  }
}
</script>
<!--  -->
<style scoped>

</style>
