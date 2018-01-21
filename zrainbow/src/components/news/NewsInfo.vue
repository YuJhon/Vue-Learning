<!--  -->
<template>
  <div id="tmpl">
      <div class="header">
          <h4 v-text="info.title"></h4>
          <p>{{info.addTime | datefmt('YYYY-MM-DD')}} {{info.click}}浏览次数.</p>
      </div>
      <div id="content" v-html="info.content">
      </div>
  </div>
</template>
<!--  -->
<script>
import newInfoData from '../../../statics/data/news/info.json';
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
