<template>
  <div class="treatment-scheme">             <!-- -----处理方案 块--- -->
    <div class="handlemsg" v-html="dealWay.handleTerms">
    </div>

    <div class="bottom-menu">
       <i class="iconfont icon-shenglvehao handling-img3 blue" @click="processingSchemeButtonTurn()"></i>
      <div class="clickbutton2 width68 height28 bk-change-normal1 right10" v-for="item in dealWayChange()" @click="allTurn(item)">
        <span class="smallface2">{{item}}</span>
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
  .smallface2{
    font-size:12px;
    font-family: Helvetica Neue,"微软雅黑","黑体";
    color:#33A0FF;
    text-align:center;
    display:block;
    line-height:28px;

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
  .top7{  margin-top:7px;  }
  .top5{  margin-top:5px;  }
  .top4{  margin-top:4px;  }
  .floatleft{  float:left;  }
  .floatright{  float:right;  }
  .width68{ min-width:68px; }
  .width80{ width:80px; }
  .width87{ width:87px; }
  .width92{ width:92px; }
  .width100{ width:100px; }
  .width105{ width:105px; }
  .height24{height:24px;}
  .height28{height:28px;}
  /* 公共----完*/

  .treatment-scheme{
    flex:1;

    display:flex;
    flex-direction:column;
  }

  .handlemsg{
    /*float:left;*/
    /*margin-top:5px;*/
    /*width:100%;*/
    /*height:75px;*/

    font-size:12px;
    font-family: Helvetica Neue,"微软雅黑","黑体";
    color:#333;
    flex:90;

    overflow-x:hidden;
    overflow-y:auto;
    /*background:#00ff00;*/
  }

  .bottom-menu{
    flex:45;
    float:right;
    margin-top:5px;


  }

  .handling-img3{
    position: relative;
    float:right;
    /*background:#1c8de0;*/
    cursor:pointer;
    font-size:32px;
  }

  .bk-change-normal1{
    background: url("../../../assets/img/linearBg.jpg") center top repeat;
  }

  .clickbutton2{
    border:1px solid #67b7ff;
    border-radius:3px;
    float:right;
    margin-top:4px;
    cursor: pointer;
    padding-right: 5px;
    padding-left: 5px;
  }

</style>
<script>
  import {mapActions} from 'vuex'
  import {mapGetters} from 'vuex'

  export default {
    data() {
      return {
      };
    },
    computed:{
      ...mapGetters([
        'dealWay'
      ])
    },
    methods: {

      ...mapActions([
          'popoverAlert',
          'oneKeyRepairActions',
          'passwordResetActions',
          'recordingLogActions'
      ]),
      allTurn(item){
        let data = item+":是";
        this.recordingLogActions(data);
        switch (item){
          case '故障派单':
//            this.sendRouterConfigActions();
            this.popoverAlert('vDistributeLeaflets');
            break
          case '一键修复':
            this.oneKeyRepairActions('一键修复');
            this.popoverAlert('vOneButtonFix');
            break
          case '预处理归档':
//            this.sendRouterConfigActions();
            this.popoverAlert('vPretreatmentArchiving');
            break
          case '宽带延伸服务单':
//            this.sendRouterConfigActions();
            this.popoverAlert('vBroadbandExtendedServiceList');
            break
          case '密码验证':
            this.popoverAlert('vPasswordReset')
            break
          case '密码重置':
              this.popoverAlert('vPasswordReset')
            break
          case '转IVR修改密码':
            break
          case '归档后回访':
            break
          case '派故障单':
//            this.sendRouterConfigActions();
            this.popoverAlert('vBroadbandExtendedServiceList');
            break
          case '派延伸服务单':
            break
          case '路由器设置':
            break
          case '速率同步':
            break
          case '远程开关机查询':
              this.popoverAlert('vBroadbandErrorAuthentication')
            break
        }
      },
      dealWayChange(){
        let handleTermsKey = '';
        if(this.dealWay.handleTermsKey) handleTermsKey = this.dealWay.handleTermsKey.substring(1,this.dealWay.handleTermsKey.length-1);
        if(this.dealWay.handleTermsKey) return handleTermsKey.split('】【');
      },
      processingSchemeButtonTurn(){
          this.popoverAlert('vProcessingSchemeButton')
      },
      broadbandExtendedServiceListTurn(){
        this.popoverAlert('vBroadbandExtendedServiceList')
      },
      distributeLeafletsTurn(){
          this.popoverAlert('vDistributeLeaflets')
      },
      pretreatmentArchivingTurn(){
        this.popoverAlert('vPretreatmentArchiving')
      }



    }
  };
</script>
