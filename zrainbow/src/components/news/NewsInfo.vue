<!--  -->
<template>
  <div id="tmpl">
      <!-- 资讯的标题 -->
      <div class="header">
          <h4 v-text="info.title"></h4>
          <p>{{info.addTime | datefmt('YYYY-MM-DD')}} {{info.click}}浏览次数.</p>
      </div>
      <!-- 资讯的内容 -->
      <div id="content" v-html="info.content">
      </div>
      <!-- 评论区域 -->
      <comment v-bind:id="id" :category="category">
      </comment>
  </div>
</template>
<!--  -->
<script>
/* 公共组件的导入 */
import common from '../../kits/common.js';
/* 评论组件的导入 */
import comment from '../subcommon/Comment.vue';
import {Toast} from 'mint-ui';
import {NEWS_COMMENT_CATEGORY} from '../../kits/vm.js';
export default {
    data(){
        return {
            id:0,
            info:{
                title:'标题',
                addTime:'2018-01-21 14:45:22',
                click:0,
                content:''
            },
            category:''
        }
    },
    components:{
        comment
    },
    created(){
        this.id = this.$route.params.id;
        /** 初始化类目 */
        this.category = NEWS_COMMENT_CATEGORY;
        /**获取新闻信息 */
        this.getNewsInfo(this.id);
    },
    methods:{
        getNewsInfo(){
            var itemId = this.id;
            // 1.确定url
            var url = common.apidomain+'/news/detail/'+itemId;
            // 2.调用$http.get()
            this.$http.get(url).then(resp=>{
                var tempData = resp.body;
                if(tempData.code == '0'){
                    this.info = tempData.data;
                }else{
                    Toast(tempData.code+':'+tempData.data);
                    return;
                }
            },err=>{
                Toast("调用接口异常："+err);
                return;
            });
            
            /** 模拟的静态数据 **/
            /*
            this.info = newInfoData.data;
            */
        }
    }
}
</script>
<!--  -->
<style scoped>
    #tmpl{
        background-color: #fff;
    }
    .header h4{
        color:#0094ff;
    }
    .header p{
        color:rgba(0, 0, 0, 0.5);
    }
    .header,#content,p{
        padding:5px;
    }
</style>
