<template>
  <div class="itch-point">             <!-- -----痛痒点 块--- -->

    <div class="line-up">
      <div class="msg-title">
        <i class="iconfont icon-top_block_message handling-img blue"></i>
        <span class="titleface left5 ">痛痒点</span>

      </div>
      <div class="msg-content">
        <div class="block-icon-msg"><!--痛痒点信息 -->
          <div class="icon-button width80"  v-show="true"><span class="typeface">流量不够用</span></div>
          <div class="icon-button width80"  v-show="false"><span class="typeface">语音不够用</span></div>
          <div class="icon-button width140" v-show="true"><span class="typeface">实际消费高于月套餐费</span></div>
          <div class="icon-button width140" v-show="false"><span class="typeface">宽带即将到期（剩5天）</span></div>
          <div class="icon-button width180" v-show="false"><span class="typeface">宽带已经到期（2017-05-31）</span></div>
          <div class="icon-button width104" v-show="true"><span class="typeface">爱游戏、爱视频</span></div>
          <div class="icon-button width80"  v-show="false"><span class="typeface">网速不够用</span></div>
          <div class="icon-button width115" v-show="false"><span class="typeface">有全网通双模手机</span></div>
          <div class="icon-button width115" v-show="false"><span class="typeface">多手机端使用客户</span></div>
          <div class="icon-button width155" v-show="false"><span class="typeface">无ITV但又有视频观看需求</span></div>
          <div class="icon-button width120" v-show="false"><span class="typeface">手机大流量需求客户</span></div>
          <div class="icon-button width90"  v-show="false"><span class="typeface">资费敏感客户</span></div>
        </div><!--痛痒点信息 -->

        <div class="block-recommended-program" v-show="true"><!--推荐方案 -->

          <div class="program-title"><!--方案标题 -->
            <div class="program-title-space">
              <i class="iconfont icon-kongxin-damuzhizhaoshang handling-img2 blue "></i>
              <span class="titleface left5 ">推荐方案</span>
            </div>

            <div class="program-button-space">
              <div class="program-button" :class="{ programActive: num=='2' }" @click="turnPage('2','vMobileScheme')">移动</div>
              <div class="program-button" :class="{ programActive: num=='1' }" @click="turnPage('1','vBroadbandScheme')">宽带</div>
            </div>

          </div>

          <div class="specific-program"><!--具体方案 -->
            <keep-alive>
              <component :is="goingto"></component>
            </keep-alive>
          </div>

          <div class="customer-appeals"><!--客户诉求 -->
            <i class="iconfont icon-icon-duihua handling-img3 blue"></i>
            <span class="titleface left5">客户诉求</span>

            <div class="appeals-details">

              <div class="appeals-button2 bk-change-normal1">
                <span class="typeface deep-blue">资费高</span>
              </div>
              <div class="appeals-button2 bk-change-normal1">
                <span class="typeface deep-blue">不够用</span>
              </div>
              <div class="appeals-button3 bk-change-normal1">
                <span class="typeface deep-blue">不要融合</span>
              </div>
              <div class="appeals-button3 bk-change-normal1">
                <span class="typeface deep-blue">首推方案</span>
              </div>
              <div class="appeals-button1 bk-change-normal1">
                <span class="typeface deep-blue">其他</span>
              </div>

            </div>

          </div><!--客户诉求 -->

        </div><!--推荐方案 -->

        <div class="block-recommended-ideas" v-show="false"><!--推荐思路 -->
          <div class="ideas-title"><!--思路标题 -->
            <div class="ideas-title-space">
              <i class="iconfont icon-kongxin-damuzhizhaoshang handling-img2 blue "></i>
              <span class="titleface left5 ">推荐思路</span>
            </div>
          </div>
          <div class="ideas-select"><!--思路选择 -->
            <v-recommended-ideas></v-recommended-ideas>


          </div>
        </div><!--推荐思路 -->


      </div>

    </div>

    <div class="line-bottom">
      <div class="block-click-button"><!--功能按钮 -->
          <div class="func-button1 bk-change-normal1" >
            <i class="iconfont icon-mn03 handling-img blue"></i>
            <span class="typeface left5 deep-blue">线路查询</span>
          </div>

          <div class="func-button1 left10 bk-change-normal1" @click="costCalculationTurn()">
            <i class="iconfont icon-50 handling-img blue"></i>
            <span class="typeface left5 deep-blue">计算费用</span>
          </div>

          <div class="func-button2 left10 bk-change-normal2" @click="reasonsForRefusalTurn()">
            <i class="iconfont icon-bugaoxing handling-img2 orange"></i>
            <span class="typeface left5 deep-orange">失败反馈</span>
          </div>

          <div class="func-button2 bk-change-normal2">
            <i class="iconfont icon-paidan handling-img2 orange"></i>
            <span class="typeface left5 deep-orange">商机派单</span>
          </div>

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
  .deep-blue{ color:#1476CC;}
  .orange{ color:#FA9126; }
  .deep-orange{ color:#E57809}

  /* 颜色相关----完*/


  /* 公共----*/

  .floatleft{ float:left;}
  .floatright{ float:right;}

  .top2{margin-top:2px;}
  .left4{ margin-left:4px;}
  .left5{ margin-left:5px;}
  .left10{ margin-left:10px;}

  .width80{width:80px;}
  .width90{width:90px;}
  .width104{width:104px;}
  .width115{width:115px;}
  .width120{width:120px;}
  .width140{width:140px;}
  .width155{width:155px;}
  .width180{width:180px;}

  /* 公共----完*/

  .itch-point{
    flex:1;

    display: flex;
    flex-direction:column;
  }

  .line-up{
    flex:1;
    padding:9px 14px;

    display: flex;
    flex-direction:column;
  }


  .handling-img{
    /*float:left;*/
    font-size:18px;
  }
  .handling-img2{
    /*float:left;*/
    font-size:16px;
  }
  .handling-img3{
    /*float:left;*/
    font-size:22px;
  }

  .bk-change-normal1{
    background: url("../../../assets/img/linearBg.jpg") center top repeat;
  }

  .bk-change-normal2{
    background: url("../../../assets/img/linear_red.jpg") center top repeat;
  }


  .msg-title{
    /*flex:28;*/
    height:28px;
    /*background:#f3cc31;*/
    user-select: none;

    display: flex;
    align-items:center;
  }

  .msg-content{
    flex:370;
    margin-top:5px;

    /*background:#eee;*/

    display:flex;
    flex-direction:column;
  }

  .block-icon-msg{
    background:#fff;
    flex:30;
    /*height:30px;*/

    display:flex;
    flex-direction:row;

  }
  .icon-button{
    /*width:80px;*/
    height:28px;
    background:#F0F0F0;
    border-radius:3px;
    margin-right:10px;

    display:flex;
    align-items:center;
    justify-content:center;
  }

  .block-recommended-program{
    /*background:#eee;*/
    flex:273;
    margin-top:5px;

    display:flex;
    flex-direction:column;
  }
  .program-title{
    height:23px;
    /*background:#eee;*/
    border-bottom:1px solid #B2DAFF;
    user-select: none;

    display:flex;
    flex-direction:row;
    align-items: center;
  }
  .program-title-space{
    flex:1;
    display:flex;
    flex-direction:row;
    align-items: center;
  }
  .program-button-space{
    margin-right:5px;

    display:flex;
    flex-direction:row-reverse;
    align-items: center;
    justify-content:center;

  }
  .program-button-space .programActive{
    /*background: url("../../../assets/img/linear_gray.jpg") center top repeat;*/
    /*background: url("../../../assets/img/linearBg.jpg") center top repeat;*/
    background:#fff;
    color:#33A0FF;
    border:1px solid #B2DAFF;
    border-bottom:1px solid #fff;
  }

  .program-button{
    width:54px;
    height:24px;
    background:#F5F5F5;
    border:1px solid #D9D9D9;
    border-bottom:1px solid #B2DAFF;
    border-radius:3px 3px 0 0 ;
    margin-right:5px;
    cursor:pointer;
    color:#333;

    display:flex;
    align-items: center;
    justify-content:center;

  }


  .specific-program{
    /*background:#eee;*/
    flex:196;
    margin-top:5px;

    display:flex;
    flex-direction:column;
  }


  .customer-appeals{
    /*background:#eee;*/
    /*flex:1;*/
    height:30px;
    margin-top:5px;
    user-select: none;

    display: flex;
    flex-direction:row;
    align-items:center;
  }

  .appeals-details{
    margin-left:5px;

    display: flex;
    flex-direction:row;
    align-items:center;

  }

  .appeals-button1{
    width:44px;
    height:28px;
    border:1px solid #B2DAFF;
    border-radius: 3px;
    margin-left:10px;
    cursor: pointer;

    display:flex;
    justify-content:center;
    align-items: center;
  }
  .appeals-button2{
    width:54px;
    height:28px;
    border:1px solid #B2DAFF;
    border-radius: 3px;
    margin-left:10px;
    cursor: pointer;

    display:flex;
    justify-content:center;
    align-items: center;
  }
  .appeals-button3{
    width:68px;
    height:28px;
    border:1px solid #B2DAFF;
    border-radius: 3px;
    margin-left:10px;
    cursor: pointer;

    display:flex;
    justify-content:center;
    align-items: center;
  }



  .block-recommended-ideas{
    /*background:#eee;*/
    flex:273;
    margin-top:5px;

    display:flex;
    flex-direction:column;
  }
  .ideas-title{
    height:23px;
    /*background:#888;*/
    display:flex;
    flex-direction:row;
    align-items: center;
  }
  .ideas-select{
    flex:1;
    /*background:#eee;*/

    display:flex;
    flex-direction:column;
  }



  .line-bottom{
    height:57px;

    display: flex;
    flex-direction:row;
  }

  .block-click-button{
    flex:1;
    border-top:1px solid #B2DAFF;
    padding:15px 14px;
    user-select: none;

  }

  .func-button1{
    width:87px;
    height:28px;
    border:1px solid #67B7FF;
    border-radius:3px;
    float:left;
    cursor: pointer;

    display: flex;
    align-items:center;
    justify-content:center;
  }

  .func-button2{
    width:87px;
    height:28px;
    border:1px solid #FA9126;
    border-radius:3px;
    float:right;
    cursor: pointer;

    display: flex;
    align-items:center;
    justify-content:center;
  }


</style>
<script>
  import { mapActions } from 'vuex'

  import vBroadbandScheme from '../tabs/broadbandScheme.vue'
  import vMobileScheme from '../tabs/mobileScheme.vue'
  import vRecommendedIdeas from '../tabs/recommendedIdeas.vue'

  export default {
    data() {
      return {
        num:'1',
        goingto:'vBroadbandScheme',




      };
    },
    computed:{

    },
    methods: {

      ...mapActions([
        'popoverAlert'
      ]),

      turnPage(num,name){
        console.log(name);
        this.num=num;
        if(name){
          this.goingto=name
        }
      },

      reasonsForRefusalTurn(){
        this.popoverAlert('vReasonsForRefusal')
//        this.popoverAlert('vValueAddedDiscount')
//        this.popoverAlert('vMailboxFreePackage')
//        this.popoverAlert('vPackageCharge')
//        this.popoverAlert('vCostCalculation')
      },
      costCalculationTurn(){
        this.popoverAlert('vCostCalculation')
      },

    },
    components:{
      vBroadbandScheme,vMobileScheme,vRecommendedIdeas,
    }
  };
</script>
