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
      <comment v-bind:id="id">
          
      </comment>
  </div>
</template>
<!--  -->
<script>
/* 静态数据的导入 */
import newInfoData from '../../../statics/data/news/info.json';
/* 公共组件的导入 */
import common from '../../kits/common.js';
/* 评论组件的导入 */
import comment from '../subcommon/comment.vue';
export default {
    data(){
        return {
            id:0,
            info:{
                title:'标题',
                addTime:'2018-01-21 14:45:22',
                click:0,
                content:''
            }
        }
    },
    components:{
        comment
    },
    created(){
        this.id = this.$route.params.id;
        this.getNewsInfo(this.id);
    },
    methods:{
        getNewsInfo(){
            var itemId = this.id;
            /*
            // 1.确定url
            var url = '';
            // 2.调用$http.get()
            this.$http.get(url).then(resp=>{
                var data = resp.body;
                if(data.status == '0'){
                    this.info = data.data;
                }else{
                    Toast('系统繁忙，请稍后再试1！');
                    return;
                }
            }).then(resp=>{
                Toast('系统繁忙，请稍后再试！'+resp);
                return;
            });
            */
            /** 模拟的静态数据 **/
            this.info = newInfoData.data;
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
