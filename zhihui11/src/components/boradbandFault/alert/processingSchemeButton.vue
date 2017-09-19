<template>
  <div class="demo incomingHistory">            <!-- 处理方案按钮 -->

    <div class="popover-head">
        <i v-on:click="popoverAlert()" class="el-icon-close"></i>     <!-- 关闭按钮 -->
        <div class="clickbutton bk-change-normal1 " @click="btnTurn('密码验证')"><span class="smallface ">密码验证</span></div>
        <div class="clickbutton bk-change-normal1 " @click="btnTurn('密码重置')"><span class="smallface ">密码重置</span></div>
        <div class="clickbutton bk-change-normal1 " @click="btnTurn('转IVR修改密码')"><span class="smallface ">转IVR修改密码</span></div>
        <div class="clickbutton bk-change-normal1 " @click="btnTurn('一键修复')"><span class="smallface ">一键修复</span></div>
        <div class="clickbutton bk-change-normal1 " @click="btnTurn('预处理归档')"><span class="smallface ">预处理归档</span></div>
        <div class="clickbutton bk-change-normal1 " @click="btnTurn('归档后回访')"><span class="smallface ">归档后回访</span></div>
        <div class="clickbutton bk-change-normal1 " @click="btnTurn('派故障单')"><span class="smallface ">派故障单</span></div>
        <div class="clickbutton bk-change-normal1 " @click="btnTurn('派延伸服务单')"><span class="smallface ">派延伸服务单</span></div>
        <div class="clickbutton bk-change-normal1 " @click="btnTurn('路由器设置')"><span class="smallface ">路由器设置</span></div>
        <div class="clickbutton bk-change-normal1 " @click="btnTurn('速率同步')"><span class="smallface ">速率同步</span></div>
        <div class="clickbutton bk-change-normal1 " @click="btnTurn('远程开关机查询')"><span class="smallface ">远程开关机查询</span></div>
    </div>

  </div>
</template>

<style scoped>

  .demo{
    width: 480px;
    height:144px;
    background: #F0FAFF;
    margin-left: 250px;
    margin-top: 50px;
    border-radius: 5px;
    border: 1px solid #90CCE8;
    box-shadow: 0 0 10px rgba(0,0,0,0.2);
    overflow: hidden;
    color: #333333;

    display:flex;
    flex-direction:row;

  }


  .popover-head{
    flex:1;
    padding:15px 10px;
    background: #F0FAFF;

  }


  i{          /*头关闭按钮*/
    color: #A1C1E2;
    font-size: 12px;
    cursor: pointer;
    float:right;

  }



  /*---------↓*/

  .clickbutton{
    border:1px solid #67b7ff;
    border-radius:3px;
    float:left;
    margin-bottom:10px;
    cursor: pointer;
    width:100px;
    height:28px;
    margin-right:10px;
  }

  .bk-change-normal1{
    background: url("../../../assets/img/linearBg.jpg") center top repeat;
  }

  .smallface{
    font-size:12px;
    font-family: Helvetica Neue,"微软雅黑","黑体";
    color:#33A0FF;       /*通用字的颜色默认为#333 修改额外添加 */
    line-height:28px;
    display: block;
    text-align: center;

  }


  /*---------↑*/

  .table-head .head-item span{
    margin-left: 10px;
    color: #333333;
    font-size: 12px;
  }

  .table-list .head-item span{
    margin-left: 10px;
    color: #333333;
    font-size: 12px;
  }

</style>
<script>
  import { mapActions } from 'vuex'
  export default {
    data() {
      return {

      }
    },
    computed:{

    },

    methods: {
      ...mapActions([
          'popoverAlert',
          'oneKeyRepairActions',
          'sendTicketActions'
      ]),
      btnTurn(item){
        this.popoverAlert()
        console.log(item)
        switch (item){
          case '密码验证':
            this.popoverAlert('vPasswordAuthentication')
            break;
          case '密码重置':
            this.popoverAlert('vPasswordReset')
            break;
          case '转IVR修改密码':

            break;
          case '一键修复':
            this.oneKeyRepairActions();
            this.popoverAlert('vOneButtonFix');
            break;
          case '预处理归档':
            let item = {
              receptFlag:'1',
              urgent:'',
              name:'',
              remark:'',
              btnKey:'2',
              bigName:'',
              bigValue:'',
              smallName:'',
              smallValue:''
            };
            this.sendTicketActions(item);
            this.popoverAlert('vPretreatmentArchiving');
            break;
          case '归档后回访':
            this.popoverAlert('vReturnAfterFilling');
            break;
          case '派故障单':
            this
            break;
          case '派延伸服务单':

            break;
          case '路由器设置':

            break;
          case '速率同步':

            break;
          case '远程开关机查询':
//            this.popoverAlert('vBroadbandErrorAuthentication')
            break;
        }
      },
      passwordAuthenticationTurn(){
          this.popoverAlert('vPasswordAuthentication')
      },
      oneButtonFixTurn(){
          this.popoverAlert('vOneButtonFix')
      },
      returnAfterFillingTurn(){
          this.popoverAlert('vReturnAfterFilling')
      },
      pretreatmentArchivingTurn(){
          this.popoverAlert('vPretreatmentArchiving')
      },


    }
  };
</script>
