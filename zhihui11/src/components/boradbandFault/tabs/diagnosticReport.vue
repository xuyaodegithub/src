<template>
  <div class="diagnostic-report">             <!-- -----诊断报告 块--- -->
      <div class="report-title">
        <i class="iconfont icon-jishiben handling-img blue"></i>
        <span class="plate-title lh24 left4 floatleft">诊断报告</span>
        <span class="listNum" v-if="">{{resultAll(queryBroadbandInfo.resultList)}}</span>
      </div>

    <div class="report-content">
        <div class="contentblock" v-for="(item,key) in queryBroadbandInfo.resultList"  v-if="item.affiliation<7 && queryBroadbandInfo" @key="key">
          <el-radio-group v-model="radio" @change="changeQuestion(key)">
            <el-radio class="radio" v-model="item.diagnosticReport" :label="key" size="small"><span class="smallface ">{{key+1}}、{{item.diagnosticReport}}</span></el-radio>
          </el-radio-group>
          <!--<i class="iconfont icon-duigou1 content-img blue"></i>-->
          <!--<span class="smallface lh24 floatleft left5"></span>-->
        </div>
    </div>

  </div>
</template>

<style scoped>
  /*字体相关---*/
  .plate-title{
    font-size:14px;
    font-family: Helvetica Neue,"微软雅黑","黑体";
    color:#333;
  }
  .small-title{
    font-size:12px;
    font-family: Helvetica Neue,"微软雅黑","黑体";
    color:#1476CC;
  }
  .typeface{
    font-size:12px;
    font-family: Helvetica Neue,"微软雅黑","黑体";
    color:#333;       /*通用字的颜色默认为#333 修改额外添加 */
    margin-left:10px; /*通用字距离左边默认为10px 修改额外添加 */
  }
  .smallface{
    font-size:12px;
    font-family: Helvetica Neue,"微软雅黑","黑体";
    color:#333;       /*通用字的颜色默认为#333 修改额外添加 */
  }

  .lh40{  line-height:40px;  }
  .lh39{  line-height:39px;  }
  .lh30{  line-height:30px;  }
  .lh28{  line-height:28px;  }
  .lh24{  line-height:24px;  }
  .lh22{  line-height:22px;  }
  .lh18{  line-height:18px;  }

  /*字体相关---完*/

  /* 颜色相关----*/

  .color-ash{
    background:#F0F0F0;
  }
  .bg-blue{
    background:#F4FAFF;
    border:1px solid #67B7FF;
  }
  .color-red{
    background:#FFF9F3;
    border:1px solid #FA9126;
  }

  .red{
    color:#F44848;
  }
  .blue{
    /*color:#1476cc;*/
    color:#33A0FF;
  }

  .orange{
    color:#E57809;
  }
  .green{
    color:#10B03B;
  }
  .white{
    color:#ffffff;
  }

  /* 颜色相关----完*/


  /* 公共----*/
  .left57{  margin-left:57px;  }
  .left10{  margin-left:10px;  }
  .left15{  margin-left:15px;  }
  .left20{  margin-left:20px;  }
  .left4{  margin-left:4px;  }
  .left5{  margin-left:5px;  }
  .right20{margin-right:20px;}
  .right15{margin-right:15px;}
  .right10{margin-right:10px;}
  .top10{  margin-top:10px;  }
  .top8{  margin-top:8px;  }
  .top5{  margin-top:5px;  }
  .floatleft{  float:left;  }
  .floatright{  float:right;  }
  .width68{ width:68px; }
  .width80{ width:80px; }
  .width87{ width:87px; }
  .width100{ width:100px; }
  .height24{height:24px;}
  .height28{height:28px;}

  .blue{
    color:#33A0FF;
  }


  .diagnostic-report{

  flex:1;

  display:flex;
  flex-direction:column;

}

  .report-title{
    flex:35;
  }
  .report-content{
    flex:105;
    overflow-x:hidden;
    overflow-y:auto;

    display:flex;
    flex-direction:column;
  }

  .contentblock{
    flex:1;
    /*background:#1c8de0;*/
  }
  .content-img{
    width:16px;
    height:16px;
    margin-top:3px;
    float:left;
  }

  .handling-img{
    float:left;
    font-size:20px;
    /*background:#1c8de0;*/
  }

  .listNum{
    background: #33A0FF;
    padding-left: 10px;
    padding-right: 10px;
    width: auto;
    height: 20px;
    line-height: 20px;
    display: inline-block;
    color: #ffffff;
    font-size: 12px;
    border-radius: 10px;
    margin-left:8px;
  }


</style>
<script>
  import {mapGetters} from 'vuex'
  import {mapActions} from 'vuex'
  export default {
    data() {
      return {
        radio:''
      };
    },
    computed:{
      ...mapGetters([
        'queryBroadbandInfo',
        'routerChooseStatus'
      ])
    },
    methods: {
      ...mapActions([
        'questionListFind'
      ]),
      changeQuestion(value){
        if((value)==this.radio){
          this.questionListFind(this.radio);
          console.log(this.radio);
        }
      },
      resultAll(item){
        let num=0;
        if(item){
          for(let i in item){
            if(item[i].affiliation<7){
              num+=1;
            }
          }
        }
        return num;
      }
    },
    watch:{
      routerChooseStatus: function () {
        this.radio='';
        this.radio2='';
      }
    }
  };
</script>
