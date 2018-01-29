<!--  -->
<template>
  <div id="subtmpl">
      <div @click="sub" class="left div">-</div>
      <div class="center div">{{count}}</div>
      <div @click="add" class="right div">+</div>
  </div>
</template>
<!--  -->
<script>
export default {
  data(){
      return {
          count:1
      }
  },
  methods:{
      add(){
          this.count++;
          this.sendMsg();
      },
      sub(){
          this.count--;
          if(this.count <1){
              this.count = 1;
          }
          this.sendMsg();
      },
      sendMsg(){
          this.$emit('dataObj',this.count);
      }
  }
}
</script>
<!--  -->
<style scoped>
#subtmpl .div{
    height: 25px;
    line-height: 25px;
    display:inline-block;
    width:40px;
    border:1px solid #000;
    text-align: center;
}
</style>
