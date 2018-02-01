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
  props:['recount','goodsId'],
  data(){
      return {
          count:1,
          resObj:{goodsId:0,type:"add"}
      }
  },
  created(){
      this.count = this.recount;
  },
  methods:{
      add(){
          this.count++;
          this.sendMsg('add');
      },
      sub(){
          this.count--;
          if(this.count <1){
              this.count = 1;
              return;
          }
          this.sendMsg('sub');
      },
      sendMsg(type){
          this.resObj.type = type;
          this.resObj.goodsId = this.goodsId;
          this.$emit('initCount',this.resObj);
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
