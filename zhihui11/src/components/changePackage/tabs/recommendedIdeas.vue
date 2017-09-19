<template>
  <div class="recommended-ideas">             <!-- -----痛痒点 块 -推荐思路--- -->

    <div class="question-block" v-if="kdxq=='1'">
      <div class="question-msg">
        <span class="typeface">有无宽带需求</span>
      </div>
      <div class="answer-msg">
        <el-radio class="" v-model="broadband_demand" label="1"><span class="typeface">有</span></el-radio>
        <el-radio class="" v-model="broadband_demand" label="2"><span class="typeface">无</span></el-radio>
      </div>
    </div><!--有无宽带需求 块---↓ -->

    <div class="question-block1" v-if="broadband_demand=='1'">
      <div class="question-msg">
        <span class="typeface"></span>
      </div>
      <div class="answer-msg">
        <el-radio class="" v-model="happy_family_sharing_program" label="1"><span class="typeface">4G乐享家分享计划</span></el-radio>
      </div>
    </div>

    <div class="question-block" v-if="broadband_demand=='1' && happy_family_sharing_program=='1'">
      <div class="question-msg">
        <span class="typeface">选择新装资产</span>
      </div>
      <div class="answer-msg">
        <el-checkbox v-model="checked_newly_installed_assets1"><span class="typeface">C网</span></el-checkbox>
        <el-checkbox v-model="checked_newly_installed_assets2"><span class="typeface">宽带</span></el-checkbox>
        <el-checkbox v-model="checked_newly_installed_assets3"><span class="typeface">ITV</span></el-checkbox>
        <el-checkbox v-model="checked_newly_installed_assets4"><span class="typeface">固话</span></el-checkbox>
      </div>
    </div>

    <div class="question-block" v-if="broadband_demand=='2'">
      <div class="question-msg">
        <span class="typeface">对流量和语音都有需求</span>
      </div>
      <div class="answer-msg">
        <el-radio class="" v-model="traffic_voice_demand" label="1"><span class="typeface">乐享4G套餐</span></el-radio>
      </div>
    </div>

    <div class="question-block" v-if="broadband_demand=='2'">
      <div class="question-msg">
        <span class="typeface">对上网需求比较多</span>
      </div>
      <div class="answer-msg">
        <el-radio class="" v-model="internet_demand" label="1"><span class="typeface">飞Young4G套餐</span></el-radio>
        <el-radio class="" v-model="internet_demand" label="2"><span class="typeface">飞Young4G纯流量云卡</span></el-radio>
      </div>
    </div>

    <div class="question-block2" v-if="broadband_demand=='2'">
      <div class="question-msg">
        <span class="typeface">平时消费低</span>
      </div>
      <div class="answer-msg">
        <!--<div class="ddd">-->
        <el-radio class="ccc" v-model="peacetime_consumption" label="1"><span class="typeface">4G易通卡套餐</span></el-radio>
        <el-radio class="ccc" v-model="peacetime_consumption" label="2" disabled >&nbsp;</el-radio><span class="typeface right20">飞Young4G套餐(非定制版)</span>
        <el-radio class="ccc" v-model="peacetime_consumption" label="3" disabled >&nbsp;</el-radio><span class="typeface right20">飞Young4G套餐(定制版)</span>
        <!--</div>-->
      </div>
    </div>

    <div class="question-block" v-if="broadband_demand=='2'">
      <div class="question-msg">
        <span class="typeface">定制套餐</span>
      </div>
      <div class="answer-msg">
        <el-radio class="" v-model="customized_packages" label="1"><span class="typeface">4G易卡通套餐</span></el-radio>
      </div>
    </div>




    <div class="question-block" v-if="sjxq=='1'">
      <div class="question-msg">
        <span class="typeface">有无手机需求</span>
      </div>
      <div class="answer-msg">
        <el-radio class="" v-model="mobile_phone_demand" label="1"><span class="typeface">有</span></el-radio>
        <el-radio class="" v-model="mobile_phone_demand" label="2"><span class="typeface">无</span></el-radio>
      </div>
    </div><!--有无手机需求 块---↓ -->

    <div class="question-block1" v-if="mobile_phone_demand=='1'">
      <div class="question-msg">
        <span class="typeface"></span>
      </div>
      <div class="answer-msg">
        <el-radio class="" v-model="happy_family_sharing_program" label="1"><span class="typeface">4G乐享家分享计划</span></el-radio>
      </div>
    </div>

    <div class="question-block" v-if="mobile_phone_demand=='1' && happy_family_sharing_program=='1'">
      <div class="question-msg">
        <span class="typeface">选择新装资产</span>
      </div>
      <div class="answer-msg">
        <el-checkbox v-model="checked_newly_installed_assets1"><span class="typeface">C网</span></el-checkbox>
        <el-checkbox v-model="checked_newly_installed_assets2"><span class="typeface">宽带</span></el-checkbox>
        <el-checkbox v-model="checked_newly_installed_assets3"><span class="typeface">ITV</span></el-checkbox>
        <el-checkbox v-model="checked_newly_installed_assets4"><span class="typeface">固话</span></el-checkbox>
      </div>
    </div>

    <div class="question-block2" v-if="mobile_phone_demand=='2'">
      <div class="question-msg">
        <span class="typeface">选择宽带</span>
      </div>
      <div class="answer-msg">
        <el-radio class="" v-model="select_broadband" label="1"><span class="typeface">包年宽带</span></el-radio>
        <el-radio class="" v-model="select_broadband" label="2"><span class="typeface">假期宽带</span></el-radio>
        <el-radio class="" v-model="select_broadband" label="3"><span class="typeface">包月宽带</span></el-radio>
      </div>
    </div>




    <div class="question-block" v-if="rhxq=='1'">
      <div class="question-msg">
        <span class="typeface">有无融合需求</span>
      </div>
        <div class="answer-msg">
        <el-radio class="" v-model="convergence_demand" label="1"><span class="typeface">有</span></el-radio>
        <el-radio class="" v-model="convergence_demand" label="2"><span class="typeface">无</span></el-radio>
      </div>
    </div><!--有无融合需求 块---↓ -->

    <div class="question-block1" v-if="convergence_demand=='1'">
      <div class="question-msg">
        <span class="typeface"></span>
      </div>
      <div class="answer-msg">
        <el-radio class="" v-model="happy_family_sharing_program" label="1"><span class="typeface">4G乐享家分享计划</span></el-radio>
      </div>
    </div>

    <div class="question-block" v-if="convergence_demand=='1' && happy_family_sharing_program=='1'">
      <div class="question-msg">
        <span class="typeface">选择新装资产</span>
      </div>
      <div class="answer-msg">
        <el-checkbox v-model="checked_newly_installed_assets1"><span class="typeface">C网</span></el-checkbox>
        <el-checkbox v-model="checked_newly_installed_assets2"><span class="typeface">宽带</span></el-checkbox>
        <el-checkbox v-model="checked_newly_installed_assets3"><span class="typeface">ITV</span></el-checkbox>
        <el-checkbox v-model="checked_newly_installed_assets4"><span class="typeface">固话</span></el-checkbox>
      </div>
    </div>

    <div class="question-block" v-if="convergence_demand=='2'&& service_number=='1'">
      <div class="question-msg">
        <span class="typeface">对流量和语音都有需求</span>
      </div>
      <div class="answer-msg">
        <el-radio class="" v-model="traffic_voice_demand" label="1"><span class="typeface">乐享4G套餐</span></el-radio>
      </div>
    </div>

    <div class="question-block" v-if="convergence_demand=='2'&& service_number=='1'">
      <div class="question-msg">
        <span class="typeface">对上网需求比较多</span>
      </div>
      <div class="answer-msg">
        <el-radio class="" v-model="internet_demand" label="1"><span class="typeface">飞Young4G套餐</span></el-radio>
        <el-radio class="" v-model="internet_demand" label="2"><span class="typeface">飞Young4G纯流量云卡</span></el-radio>
      </div>
    </div>

    <div class="question-block2" v-if="convergence_demand=='2'&& service_number=='1'">
      <div class="question-msg">
        <span class="typeface">平时消费低</span>
      </div>
      <div class="answer-msg">
        <!--<div class="ddd">-->
        <el-radio class="ccc" v-model="peacetime_consumption" label="1"><span class="typeface">4G易通卡套餐</span></el-radio>
        <el-radio class="ccc" v-model="peacetime_consumption" label="2" disabled >&nbsp;</el-radio><span class="typeface right20">飞Young4G套餐(非定制版)</span>
        <el-radio class="ccc" v-model="peacetime_consumption" label="3" disabled >&nbsp;</el-radio><span class="typeface right20">飞Young4G套餐(定制版)</span>
        <!--</div>-->
      </div>
    </div>

    <div class="question-block" v-if="convergence_demand=='2'&& service_number=='1'">
      <div class="question-msg">
        <span class="typeface">定制套餐</span>
      </div>
      <div class="answer-msg">
        <el-radio class="" v-model="customized_packages" label="1"><span class="typeface">4G易卡通套餐</span></el-radio>
      </div>
    </div>

    <div class="question-block2" v-if="convergence_demand=='2'&& service_number=='2'">
      <div class="question-msg">
        <span class="typeface">选择宽带</span>
      </div>
      <div class="answer-msg">
        <el-radio class="" v-model="select_broadband" label="1"><span class="typeface">包年宽带</span></el-radio>
        <el-radio class="" v-model="select_broadband" label="2"><span class="typeface">假期宽带</span></el-radio>
        <el-radio class="" v-model="select_broadband" label="3"><span class="typeface">包月宽带</span></el-radio>
      </div>
    </div>





  </div>
</template>

<style scoped>

  /*字体相关---*/
  .titleface{
    font-size:14px;
    font-family: Helvetica Neue,"微软雅黑","黑体";
    color:#333;
  }
  .blueface{
    font-size:12px;
    font-family: Helvetica Neue,"微软雅黑","黑体";
    color:#1476CC;
  }
  .typeface{
    font-size:12px;
    font-family: Helvetica Neue,"微软雅黑","黑体";
    color:#333;
  }

  /*字体相关---完*/

  /* 颜色相关----*/
  .red{  color:#F44848;  }
  .blue{  color:#33A0FF;  }

  /* 颜色相关----完*/


  /* 公共----*/
  .lh40{  line-height:40px;  }
  .lh39{  line-height:39px;  }
  .lh30{  line-height:30px;  }
  .lh28{  line-height:28px;  }
  .lh24{  line-height:24px;  }
  .lh22{  line-height:22px;  }
  .lh18{  line-height:18px;  }

  .floatleft{ float:left;}
  .floatright{ float:right;}

  .left20{ margin-left:20px;}
  .right20{ margin-right:20px;}

  /* 公共----完*/

  .recommended-ideas{
    flex:1;

    overflow: auto;

    /*display: flex;*/
    /*flex-direction:column;*/

  }

  .question-block1{
    /*flex:1;*/
    height:28px;
    margin-top:15px;
    border-bottom:1px solid #E5E5E5;


    display:flex;
    flex-direction:row;
  }
  .question-block{
    /*flex:1;*/
    height:22px;
    margin-top:15px;

    display:flex;
    flex-direction:row;
  }
  .question-block2{
    /*flex:1;*/
    height:45px;
    margin-top:15px;

    display:flex;
    flex-direction:row;
  }

  .question-msg{
    flex:120;
    /*width:140px;*/
    /*background:#eb2d2d;*/
  }
  .answer-msg{
    flex:355;
    /*background: #eee;*/
    text-align:left;

  }





</style>
<script>
  import { mapActions } from 'vuex'

  export default {
    data() {
      return {
        kdxq:'1',  // 宽带需求   1:显示宽带需求思路  0：隐藏该思路
        sjxq:'0',  // 手机需求   1:显示手机需求思路  0：隐藏该思路
        rhxq:'0',  // 融合需求   1:显示融合需求思路  0：隐藏该思路



        broadband_demand:'',
        happy_family_sharing_program:'',
        traffic_voice_demand:'',
        internet_demand:'',
        peacetime_consumption:'',
        customized_packages:'',

        mobile_phone_demand:'',
        select_broadband:'',

        convergence_demand:'',

        // 业务号码   假设1时为移动 2时为宽带
        service_number:'1',
//        service_number:'2',


        //新装资产
        checked_newly_installed_assets1:'',
        checked_newly_installed_assets2:'',
        checked_newly_installed_assets3:'',
        checked_newly_installed_assets4:'',


      };
    },
    computed:{

    },
    methods: {

      ...mapActions([
        'popoverAlert'
      ]),




    }
  };
</script>
