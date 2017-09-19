<template>
  <div class="mealall">

    <!--<div class="utop">-->
    <!--<v-operating-guide></v-operating-guide>-->
    <!--</div>-->

    <div class="umiddle">
      <div class="umiddle-left">
        <div class="umiddle-left-top" v-show="true"><!--客户前三个月套餐使用分析 -->
          <v-analysis-of-package-usage></v-analysis-of-package-usage>
        </div>
        <div class="umiddle-left-bottom"><!--痛痒点 -->
          <v-itch-point></v-itch-point>
        </div>

      </div>
      <div class="umiddle-right">
        <div class="umiddle-right-top"><!--基本信息 -->
          <v-essential-information></v-essential-information>
        </div>
        <div class="umiddle-right-bottom" v-show="true"><!--消费对比 -->
          <v-consumption-comparsion></v-consumption-comparsion>
        </div>

      </div>
    </div>

    <div class="ubottom"><!--相关优惠 -->
        <v-related-preferences></v-related-preferences>
    </div>

    <div class="flooo">
      <i class="iconfont icon-zuojian1 handling-img white"></i>
    </div>

  </div>
</template>


<script>
  import { mapActions } from 'vuex'

//  import vOperatingGuide from '../common/operatingGuide.vue';
  import vAnalysisOfPackageUsage from '../changePackage/tabs/analysisOfPackageUsage.vue'
  import vItchPoint from '../changePackage/tabs/itchPoint.vue'
  import vEssentialInformation from '../changePackage/tabs/essentialInformation.vue'
  import vConsumptionComparsion from '../changePackage/tabs/consumptionComparsion.vue'
  import vRelatedPreferences from '../changePackage/tabs/relatedPreferences.vue'


  export default {
    data() {
      return {

      }
    },
    methods: {

    },
    components:{
//      vOperatingGuide,
        vAnalysisOfPackageUsage,vItchPoint,vEssentialInformation,vConsumptionComparsion,vRelatedPreferences
    }
  };
</script>


<style scoped>

  .white{color:#fff;}

  .mealall{
    width:100%;
    height:100%;
    background:#eee;

    display: flex;
    flex-direction:column;
  }


  /*上面整个板块-------------------------------------------------------------------*/
 .utop{
    margin-top:20px;
    height:40px;
  }

  /*上面整个板块-------------------------------------------------------------------完*/

  /*中面整个板块-------------------------------------------------------------------*/

 .umiddle{
    margin-top:10px;
    /*background:#888;*/
    flex:608;
    /*border:1px solid #B2DAFF;*/
    /*border-radius:5px;*/

   display:flex;
   flex-direction:row;
  }
 .umiddle-left{
   /*flex:1;*/
   /*flex:1 0 auto;*/
   flex:1;
   /*flex-shrink:1;*/
   /*background:#ff8000;*/
   /*flex-shrink: 0;*/

   display:flex;
   flex-direction:column;
 }

 .umiddle-left-top{
   flex:200;
   background:#fff;
   border:1px solid #B2DAFF;
   border-radius:5px;
   margin-bottom:10px;


   display:flex;
   flex-direction:column;

 }
  .umiddle-left-bottom{
    flex:400;
    background: #ffffff;
    /*padding:9px 14px;*/
    border:1px solid #B2DAFF;
    border-radius:5px;


    display:flex;
    flex-direction:column;
  }

 .umiddle-right{
   /*flex:1;*/
   /*flex:1 1 auto;*/
   flex:1;
   /*flex-shrink:0;*/
   /*background:#f3cc31;*/
   margin-left:10px;
   /*flex-shrink: 1;*/

   display:flex;
   flex-direction:column;

 }
  .umiddle-right-top{
    flex:200;
    /*flex:200 0 auto;*/
    background:#fff;
    border:1px solid #B2DAFF;
    border-radius:5px;


    display:flex;
    flex-direction:column;

  }
  .umiddle-right-bottom{
    flex:400;
    /*flex:400 0 auto;*/
    background:#fff;
    margin-top:10px;
    border:1px solid #B2DAFF;
    border-radius:5px;

    display:flex;
    flex-direction:column;
  }

  /*中面整个板块-------------------------------------------------------------------完*/

  /*下面整个板块-------------------------------------------------------------------*/

  .ubottom{
    flex:40;
    margin-top:10px;
    background:#F2F9FF;
    border:1px solid #B2DAFF;
    -webkit-border-radius: 5px;
    -moz-border-radius: 5px;
    border-radius: 5px;
    /*padding:11px 15px;*/

    display: flex;
    /*align-items: center;*/
    flex-direction:row;
    padding-left:15px;
  }

  /*下面整个板块-------------------------------------------------------------------完*/

  .flooo{
    z-index:9999;
    width:16px;
    height:30px;
    right:0px;
    top:295px;
    background: #A1C1E2;
    position: absolute;
    /*border:1px solid #D2D4D6;*/
    border-radius: 3px 0px 0px 3px;

    display: flex;
    align-items:center;
    justify-content:center;
  }

  .handling-img{
    float:left;
    font-size:18px;
  }

</style>
