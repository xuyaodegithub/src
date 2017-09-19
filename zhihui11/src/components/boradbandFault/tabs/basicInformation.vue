<template>
  <div class="basic-information">             <!-- -----基础信息 块--- -->

    <div class="msg-title">
      <i class="iconfont icon-jishiben handling-img blue"></i>
      <span class="plate-title lh24 left4 floatleft">基础信息</span>
      <el-select v-if="sameAccountNobroadBandAsset" v-model="activeNetwork" @visible-change="activeNetworkChoose" placeholder="please" class="handling-select" size="small">
        <el-option
          v-for="(item,key) in sameAccountNobroadBandAsset"
          v-if="item['integrationNum']"
          :key="key"
          :label="labelReturn(item)"
          :value="item.integrationNum">
        </el-option>
      </el-select>
    </div>
    <div class="msg-content">
      <div class="msgblock" v-if="accountBundle.star">
        <div class="msgtitle"><span class="typeface lh30 ">星级</span></div>
        <div class="msgcontent">
          <div class="msgcontent-msg">
            <span class="typeface lh30 " v-if="accountBundle">{{accountBundle.star}}星</span>
          </div>
          <div class="msgcontent-link">
            <el-button type="text" @click="starEquityTurn()" v-if="accountBundle.star" class="typeface blue" style=";margin-top:-1px;">星级权益</el-button>
          </div>
        </div>
      </div>
      <div class="msgblock" v-if="queryBroadbandInfo.lineType">
        <div class="msgtitle"><span class="typeface lh30 ">线路类型</span></div>
        <div class="msgcontent"><span class="typeface lh30 ">{{queryBroadbandInfo.lineType}}</span></div>
      </div>
      <div class="msgblock" v-if="queryBroadbandInfo.applySpeed">
        <div class="msgtitle"><span class="typeface lh30 textcenter">付费速率</span></div>
        <div class="msgcontent">
          <div class="msgcontent-msg">
            <span class="typeface lh30 ">{{queryBroadbandInfo.applySpeed}}</span>
          </div>
          <div class="msgcontent-link">
            <el-button type="text" @click="speedControlTableTurn()" v-if="queryBroadbandInfo.applySpeed" class="typeface blue " style=";margin-top:-1px;">网速对照表</el-button>
          </div>
        </div>
      </div>
      <div class="msgblock" v-if="query24HOperation.actionName">
        <div class="msgtitle"><span class="typeface lh30 textcenter">最近操作轨迹</span></div>
        <div class="msgcontent"><span class="typeface lh30 ">{{query24HOperation.actionName}}</span></div>
      </div>
      <div class="msgblock" v-if="queryBroadbandInfo.testResult">
        <div class="msgtitle"><span class="typeface lh30 textcenter">测速</span></div>
        <div class="msgcontent">
          <div class="msgcontent-msg">
            <span class="typeface lh30 ">{{queryBroadbandInfo.testResult}}</span>
          </div>
          <div class="msgcontent-link">
            <el-button type="text" @click="speedDetailTurn()" v-if="queryBroadbandInfo.testResult" class="typeface blue" style=";margin-top:-1px;">测速详情</el-button>
          </div>
        </div>
      </div>
      <div class="msgblock" v-if="queryBroadbandInfo.tianyiIntelligentNetworking!=''&& queryBroadbandInfo.tianyiIntelligentNetworking!='null'">
        <div class="msgtitle"><span class="typeface lh30 textcenter">天翼智能组网</span></div>
        <div class="msgcontent">
          <span class="typeface lh30">
            {{getIntelligentNetworking}}
          </span>
        </div>
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

  /* 颜色相关----完*/

  .left4{margin-left:4px;}
  .floatleft{float:left;}

  /* 公共----*/

  .handling-img{
    float:left;
    font-size:20px;
    /*background:#1c8de0;*/
  }

  .basic-information{
    flex:1;

    display: flex;
    flex-direction:column;
  }



  .handling-select{
    float:right;
    width:210px;
  }
  .msg-title{

    flex:35;

  }

  .msg-content{

    flex:105;
    margin-top:5px;



  }

  .msgblock{
    float:left;
    width:calc(49.6%);
    height:28px;
    /*background:#8bb4e7;*/
    border:1px solid #D1EAFD;
    display:flex;
    flex-direction:row;
  }
  .msgtitle{
    float:left;
    flex:2;
    border-right:1px solid #D1EAFD;
    background:#F0F8FE;
  }
  .msgcontent{
    float:left;
    flex:3;
    display: flex;
    flex-direction: row;
    /*background:#cdcdcd;*/
  }
  .msgcontent-msg{  flex:3;  }
  .msgcontent-link{  flex:4;  }





</style>
<script>
  import { mapActions } from 'vuex'
  import { mapGetters } from 'vuex'

  export default {
    data() {
      return {
        baseSelectValue:'',
        baseSelect:[{
          value:'one',
          label:'13398789998 - 有线宽带'
        },{
          value:'two',
          label:'13398123451 - 有线宽带'
        }],
        activeNetwork: '',
        basicInfo: {
          "star":'3',
          "lineType": "光宽(GPON)路由模式",
          "payRate": "200M",
          "recentTrajectory": "一键修复",
          "velocityMeasurement": "已达标",
          "tianyiIntelligentNetworking": "2017-06-01"
        },




      };
    },
    computed:{
      ...mapGetters([
        'sameAccountNobroadBandAsset',
        'queryBroadbandInfo',
        'query24HOperation',
        'accountBundle',
        'getIntelligentNetworking'
      ])
    },
    created(){
      if(this.sameAccountNobroadBandAsset) this.activeNetwork=this.sameAccountNobroadBandAsset[0].integrationNum
    },
    activated(){
      this.getSameAccountNobroadBandAssetAction();
      this.query24HOperationActions();
      this.getIntelligentNetworkingActions();
      if(this.sameAccountNobroadBandAsset) this.activeNetwork=this.sameAccountNobroadBandAsset[0].integrationNum
    },
    methods: {
      ...mapActions([
        'popoverAlert',
        'getSameAccountNobroadBandAssetAction',
        'queryBroadbandInfoActions',
        'query24HOperationActions',
        'getIntelligentNetworkingActions',
        'getCrmPointActions',
        'closeAllAlert',
        'broadbandAccountNo',
        'setSaveForm'
      ]),
      activeNetworkChoose(val){
        if(val){

        }else{
          this.closeAllAlert();
          this.broadbandAccountNo(this.activeNetwork);
          this.setSaveForm();
        }
      },
      labelReturn(item){
          return item.integrationNum+'-'+item.productName;
      },
      starEquityTurn(){
        this.getCrmPointActions();
        this.popoverAlert('vStarEquity')
      },
      speedControlTableTurn(){
          this.popoverAlert('vSpeedControlTable')
      },
      speedDetailTurn(){
          this.popoverAlert('vSpeedDetail')
      }
    },
    watch:{
      sameAccountNobroadBandAsset:function () {
        if(this.sameAccountNobroadBandAsset) this.activeNetwork=this.sameAccountNobroadBandAsset[0].integrationNum
      }
    }
  };
</script>
