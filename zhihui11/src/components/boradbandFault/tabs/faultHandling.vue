<template>
  <div class="fault-handling">
    <!--<div class="handling-block">-->
      <div class="block-left">
        <div class="block-left-top"><!--基础信息 -->
            <v-basic-information></v-basic-information>
        </div>
        <div class="block-left-bottom">  <!--智能诊断 -->
          <div class="function-content">
            <v-intelligent-diagnosis></v-intelligent-diagnosis>
          </div>
        </div>
      </div>
      <div class="block-right">
        <div class="block-right-top"><!-- 诊断报告 -->

          <div class="report-all">
            <v-diagnostic-report></v-diagnostic-report>
          </div>
        </div>

        <div class="block-right-middle1"><!--故障定位 -->
          <!--<div class="location-title">-->
            <!--<i class="iconfont icon-dingwei2 handling-img blue"></i>-->
            <!--<span class="plate-title lh24 left4 floatleft">故障定位</span>-->
          <!--</div>-->
          <!--<div class="location-content">-->
            <!--<v-fault-location></v-fault-location>-->
          <!--</div>-->

          <div class="location-all">
            <v-fault-location></v-fault-location>
          </div>
        </div>

        <div class="block-right-middle2"><!--处理方案 -->
          <div class="treatment-title">
            <i class="iconfont icon-jishiben handling-img blue"></i>
            <span class="plate-title lh24 left4 floatleft">处理方案</span>
          </div>
          <div class="treatment-content">
            <v-treatment-scheme></v-treatment-scheme>
          </div>
        </div>

        <div class="block-right-bottom"><!--服务协同 -->
          <div class="service-all">
          <v-service-synergy></v-service-synergy>
          </div>
        </div>
      </div>
    <!--</div>-->
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
  .smallface2{
    font-size:12px;
    font-family: Helvetica Neue,"微软雅黑","黑体";
    color:#333;
    display:block;
    text-align:center;
    line-height:24px;
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
  .color-blue{
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
    color:#33A0FF;
  }

  /* 颜色相关----完*/


  /* 公共----*/
  .left4{  margin-left:4px;  }
  .floatleft{  float:left;  }
  .floatright{  float:right;  }

  /* 公共----完*/
  .fault-handling{
    flex:1;

    display: flex;
    flex-direction:row;
    /*height:100%;*/
  }

  .handling-block{
    /*position:relative;*/
    /*display: flex;*/
    /*flex-direction:row;*/
    /*height:630px;*/
    /*background: #eee;*/
  }

  /* ------------------左边部分------------------ */
 .block-left{
    flex:495;
    /*background:#00ffff;*/
    border-right:1px solid #B2DAFF;
    display:flex;
    flex-direction:column;

  }
 .block-left-top{
    flex:140;
    border-bottom:1px solid #B2DAFF;
    /*position:relative;*/
    padding:10px 15px;

   display:flex;
   flex-direction:column;

  }
 .msg-title{
   flex:35;
 }
 .msg-content{
   flex:105;
 }

  .handling-img{
    float:left;
    font-size:20px;
    /*background:#1c8de0;*/
  }

  .bk-change-normal1{
    background: url("../../../assets/img/linearBg.jpg") center top repeat;
  }



  /* ------智能诊断-- */

 .block-left-bottom{
    flex:485;
   position:relative;
   padding:10px 15px;

   display: flex;
   flex-direction:column;
  }
 /*.function-title{*/
    /*flex:42;*/
 /*}*/
 .function-content{
    /*flex:443;*/
   flex:1;

   display: flex;
   flex-direction:column;
 }

  .btn-repeat{
    border:1px solid #67b7ff;
    border-radius:5px;
    float:right;
    /*margin-right:15px;*/
    cursor: pointer;
    width:68px;
    height:24px;
    /*margin-bottom:10px; !*作用于下面第一个独立小版块距离顶部10px不用额外设置一个margin-top*!*/

  }

/* ------------------右边部分------------------ */
.block-right{
    flex:495;
    /*background:#0000ff;*/
    display:flex;
    flex-direction:column;
    /*position:relative;*/

  }
  /* ------诊断报告-- */
.block-right-top{
  flex:110;
  border-bottom:1px solid #B2DAFF;
  padding:10px 15px;

  display:flex;
  flex-direction: row;;

  }

.report-all{
  flex:1;

  display:flex;
  flex-direction:row;
}




  /* ------故障定位+处理方案-- */


 .block-right-middle1{
    /*background:#8bb4e7;*/
    flex:231;
    border-bottom:1px solid #B2DAFF;
    position: relative;
   padding:10px 15px;

   display:flex;
   flex-direction:column;
  }

 .location-all{
   flex:1;

   display:flex;
   flex-direction:column;
 }



.block-right-middle2{
    /*background:#00ffff;*/
    flex:177;
    border-bottom:1px solid #B2DAFF;
    position: relative;
    padding:10px 15px;

  display:flex;
  flex-direction:column;

  }

.treatment-title{
  flex:30;
}
.treatment-content{
  flex:146;

  display:flex;
  flex-direction:column;
}




  /* ------服务协同-- */
.block-right-bottom{
    /*background:#00ff00;*/
    flex:105;
    position: relative;
    padding:10px 15px;

  display: flex;
  flex-direction:row;
  }

  .service-all{
    flex:1;

    display: flex;
    flex-direction:row;

  }

</style>

<script>
  import {mapGetters} from 'vuex'
  import {mapActions} from 'vuex'
  import vIntelligentDiagnosis from "../tabs/intelligentDiagnosis.vue"
  import vBasicInformation from "../tabs/basicInformation.vue"
  import vDiagnosticReport from "../tabs/diagnosticReport.vue"
  import vFaultLocation from "../tabs/faultLocation.vue"
  import vTreatmentScheme from "../tabs/treatmentScheme.vue"
  import vServiceSynergy from "../tabs/serviceSynergy.vue"

  export default {
    data() {
      return {

      }
    },
    created(){
      this.clearBeoadBandailure();
    },
    computed:{
      ...mapGetters([

      ])
    },
    methods: {

      ...mapActions([
        'clearBeoadBandailure'
      ])

    },
    components:{
      vIntelligentDiagnosis,vBasicInformation,vDiagnosticReport,vFaultLocation,vTreatmentScheme,vServiceSynergy,

    },

  };
</script>


