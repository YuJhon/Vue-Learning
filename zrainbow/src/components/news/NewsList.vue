<!--  -->
<template>
  <div id="tmpl">
    <ul class="mui-table-view">
        <li class="mui-table-view-cell mui-media" v-for="item in list" :key="item.id">
            <router-link v-bind="{to:'/news/newsInfo/'+item.id}" >
                <img class="mui-media-object mui-pull-left" :src="item.icon">
                <div class="mui-media-body">
                    {{item.title}}
                    <p class='mui-ellipsis' v-text="item.prefix"></p>
                    <div class="ft">
                        <span>发布时间:{{item.addTime | datefmt('YYYY-MM-DD HH:mm:ss')}}</span>
                        <span class="click">点击数:{{item.click}}</span>
                    </div>
                </div>
            </router-link>
        </li>
    </ul>
  </div>
</template>
<!--  -->
<script>
/* 获取静态数据 */
import newListDatas from '../../../statics/data/news/list.json';
/* 公共组件的导入 */
import common from '../../kits/common.js';
export default {
  data(){
      return {
          list:[]
      }
  },
  created(){
      this.getNewsList();
  },
  methods:{
      getNewsList(){
          /*
          // 1.确定url
          var url = '';
          // 2.调用$http.get()
          this.$http.get(url).then(resp=>{
              var data = resp.body;
              if(data.status == '0'){
                  return data.message;
              }else{
                  Toast('系统繁忙，请稍后再试1！');
                  return;
              }
          }).then(resp=>{
              Toast('系统繁忙，请稍后再试！'+resp);
              return;
          });
          */
          
          // 接口还未实现，后期再实现
          this.list = newListDatas.data;
      }
  }
}
</script>
<!--  -->
<style scoped>
.mui-table-view img{
    width:80px;
    height:80px;
}
.mui-table-view .mui-media-object {
    line-height: 80px;
    max-width: 80px;
    height: 80px;
}
.ft{
    color:#f7a162;
    margin-top:1.5em;
    font-size:13px;
}
.ft .click{
    margin-left:20px;
}
</style>
