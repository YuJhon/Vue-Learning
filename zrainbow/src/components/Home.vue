<!--  -->
<template>
  <div id="tmpl">
    <!-- 使用Mint-UI中的Swipe实现图片轮播 -->  
    <mt-swipe :auto="4000">
        <mt-swipe-item v-for="item in list" :key="item.url">
            <img :src="item.image">
        </mt-swipe-item>
    </mt-swipe>
    <!-- 使用MUI中的9宫格实现导航区域 -->
    <div class="mui-content">
		        <ul class="mui-table-view mui-grid-view mui-grid-9">
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
		                    <span class="mui-icon mui-icon-home"></span>
		                    <div class="mui-media-body">Home</div></a>
                    </li>
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
		                    <span class="mui-icon mui-icon-email"><span class="mui-badge">5</span></span>
		                    <div class="mui-media-body">Email</div></a>
                    </li>
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
		                    <span class="mui-icon mui-icon-chatbubble"></span>
		                    <div class="mui-media-body">Chat</div></a>
                    </li>
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
		                    <span class="mui-icon mui-icon-location"></span>
		                    <div class="mui-media-body">location</div></a>
                    </li>
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
		                    <span class="mui-icon mui-icon-search"></span>
		                    <div class="mui-media-body">Search</div></a>
                    </li>
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
		                    <span class="mui-icon mui-icon-phone"></span>
		                    <div class="mui-media-body">Phone</div></a>
                    </li>
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
		                    <span class="mui-icon mui-icon-gear"></span>
		                    <div class="mui-media-body">Setting</div></a>
                    </li>
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
		                    <span class="mui-icon mui-icon-info"></span>
		                    <div class="mui-media-body">about</div></a>
                            </li>
		           <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
		                    <span class="mui-icon mui-icon-more"></span>
		                    <div class="mui-media-body">more</div></a>
                    </li>
		        </ul> 
		</div>
  </div>
</template>
<!--  -->
<script>
import { Toast } from 'mint-ui';
export default {
  data() {
    return {
      list: []
    };
  },
  created(){
      this.list = this.getimgs();
  },
  methods:{
      getimgs(){
          /*
          // 1.确定url
          var url = '';
          // 2.调用$http.get()
          this.$http.get(url).then(resp=>{
              var data = resp.body;
              if(data.status == '0'){
                  return data.message;
              }else{
                  Toast('系统繁忙，请稍后再试！');
                  return;
              }
          }).then(resp=>{
              Toast('系统繁忙，请稍后再试！');
              return;
          });
          */
          // 接口还未实现，后期再实现
          return [
              { url: "1", image: "http://jhonrainproject.oss-cn-shanghai.aliyuncs.com/vue/timg.jpg" },
              { url: "2", image: "http://jhonrainproject.oss-cn-shanghai.aliyuncs.com/vue/timg%20%282%29.jpg" },
              { url: "3", image: "http://jhonrainproject.oss-cn-shanghai.aliyuncs.com/vue/timg%20%281%29.jpg" }
          ]; 
      }
  }
};
</script>
<!--  -->
<style scoped>
.mint-swipe {
  height: 200px;
}
.mint-swipe-item {
  width: 100%;
  height: 200px;
  background-color: aqua;
}
.mint-swipe-item img{
  width: 100%;
  height:200px;
}
.mui-content,.mui-grid-view.mui-grid-9{
    background-color: #fff;
}
.mui-grid-view.mui-grid-9 .mui-table-view-cell{
    border-right: 0px;
    border-bottom: 0px;
}
.mui-icon-home:before{
    content:'';
    background-image:url("../../statics/imgs/1.png");
    display:inline-block;
    width:50px;
    height:50px;
    background-repeat: round;
}
</style>