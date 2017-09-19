<template>
  <div class="demo incomingHistory" :class="{miniHeight: miniHeightStatus}">
    <div class="popover-head">
      <span class="title">非实名用户</span>
      <i class="el-icon-caret-top" :class="{iconChange: miniHeightStatus}" @click="changeSmall()"></i>
    </div>
    <div class="popover-main" v-html="word">
    </div>
    <div style="width: 100%;height: 40px" v-if="this.personRealName.realNameStatus==false">
      <el-button style="margin-left: 46%;" @click="turnOld('投诉派单')" type="primary" size="small">投诉派单</el-button>
    </div>
  </div>
</template>

<style scoped>
  .demo{
    width: 715px;
    height: auto;
    background: #F0FAFF;
    margin-left: -300px;
    margin-top: -220px;
    border-radius: 5px;
    border: 1px solid #90CCE8;
    box-shadow: 0 0 10px rgba(0,0,0,0.2);
    overflow: hidden;
    color: #333333;
    transition: all 0.3s ease;
    -moz-transition: all 0.3s ease; /* Firefox 4 */
    -webkit-transition: all 0.3s ease; /* Safari 和 Chrome */
    -o-transition: all 0.3s ease; /* Opera */
  }
  .miniHeight{
    height: 40px;
    transition: height 0.3s ease;
    -moz-transition: height 0.3s ease; /* Firefox 4 */
    -webkit-transition: height 0.3s ease; /* Safari 和 Chrome */
    -o-transition: height 0.3s ease; /* Opera */
  }
  .iconChange{
    transition: transform 0.3s ease;
    -moz-transition: transform 0.3s ease; /* Firefox 4 */
    -webkit-transition: transform 0.3s ease; /* Safari 和 Chrome */
    -o-transition: transform 0.3s ease; /* Opera */
    transform: rotate(180deg);
  }
  .popover-head{
    width: 100%;
    height: 40px;
    line-height: 40px;
    background: #F0FAFF;
    font-size: 14px;
    border-bottom: 1px solid #C5E2F0;
  }
  .popover-head i{
    float: right;
    color: #A1C1E2;
    font-size: 12px;
    margin-top: 13px;
    margin-right: 12px;
    cursor: pointer;
    transition: transform 0.3s ease;
    -moz-transition: transform 0.3s ease; /* Firefox 4 */
    -webkit-transition: transform 0.3s ease; /* Safari 和 Chrome */
    -o-transition: transform 0.3s ease; /* Opera */
  }
  .popover-head .title{
    margin-left: 15px;
    font-weight: bold;
    color: red;
  }
  .popover-head .small-title{
    font-size: 12px;
    color: #999999;
    font-weight: normal;
  }
  .popover-main{
    padding: 20px 8px;
    width: calc(100% - 25px);
    height: auto;
  }
  .popover-main .box-top{
    width: 100%;
    padding-bottom: 15px;
    border-bottom: 1px solid #C5E2F0;
  }
  .popover-main .title{
    margin: 15px 0 12px 0;
    font-weight: 500;
  }
</style>
<style>

</style>
<script>
  import { mapActions } from 'vuex'
  import { mapGetters } from 'vuex'
  export default {
    data() {
      return {
        miniHeightStatus:false
      };
    },
    computed:{
      ...mapGetters([
          'personMessage',
          'personRealName'
      ]),
      word(){
          if(this.personRealName.realNameStatus==false){
            let testMessage = this.personRealName["realNameMessage"]==null?"无":this.personRealName["realNameMessage"];
            let testMessage2 = '';
            let testMessage3 = '';
            let wztfjAlertMsg5='您好！您当前号码不符合国家实名制登记规范（参见“未实名原因”），根据国家相关规定和要求，所有未实名登记或实名信息不完整的客户都要按要求进行补登记，未办理补登记的将依法停止通信服务。';
            wztfjAlertMsg5 +='<br><font color=red><b>营业厅渠道：</b></font>请您持有效证件前往指定电信营业厅进行实名信息补登，感谢您的配合。';
            if(this.personMessage["peccancySuspend"]=='N'||this.personMessage["peccancySuspend"]=='否'){
              testMessage2 = '<b>提醒话术：</b>'+wztfjAlertMsg5+'<br/><b>若用户追问具体参照什么部门的什么法规:</b>您好！我们是根据全国人大常委会审议通过的《反恐怖主义法》以及工信部下发的《进一步做好电话用户真实身份信息登记工作的通知》的要求，进行实名信息补登及实施未实名停机。';
              testMessage3 = '该客户为<font color=red>非实名用户</font>，根据10000服务规范，仅可查询该号码的<font color=red>话费及套餐信息</font>，其他业务查询及办理，请指引至指定电信营业厅做实名信息补登后方可受理。';
            }

            let tableHtml = "<div id='realnameMsgDiv'><table  BORDERCOLOR='#99bbe8'  width='99%' border='0' cellspacing='3' cellpadding='3'>"+
              "<tr BGCOLOR='#F2F2F2'><td align='center' width='20%' >话术指引：</td><td width='80%' align='left' border='0' cellspacing='3' cellpadding='3'>"+testMessage2+"</td></tr>"+
              "<tr BGCOLOR='#F2F2F2'><td align='center' width='20%' >业务办理指引：</td><td width='80%' align='left' border='0' cellspacing='3' cellpadding='3'>"+testMessage3+"</td></tr>"+
              "<tr BGCOLOR='#F2F2F2'><td align='center' width='20%'>未实名原因：</td><td width='80%'>"+testMessage+"</td></tr>"+
              "<tr><td colspan='2' align='center'>"+
              "</td></tr>"+
              "</table></div>"
            ;

            return tableHtml;
          }else{
            let ctzjdumbervalue=this.personMessage["accountIdNumber"]?this.personMessage["accountIdNumber"].substr(6,8):'';
            let agevalue;
            let myDate = new Date();
            let nowYear = myDate.getFullYear();    //获取完整的年份(4位,1970-????)
            let nowMonth = myDate.getMonth()+1;       //获取当前月份(0-11,0代表1月)
            let nowDay = myDate.getDate();
            let year =  ctzjdumbervalue.substr(0,4);
            let month = ctzjdumbervalue.substr(4,2);
            let day = ctzjdumbervalue.substr(6,2);
            let len=(nowYear-year)*12+(nowMonth-month);
            if(nowDay<day)
            {
              len = len-1;
              agevalue=Math.floor(len/12);
            }else{
              agevalue=Math.floor(len/12);
            }
            let testMessage1='';
            let cardtype=this.personMessage.accountIdType;
            let testMessage2='';
            if(cardtype=='军官证'||cardtype=='警官证'){
//              Ext.getCmp('realnameMsgWinNew').setTitle('<font color=red>'+cardtype+'-个人信息修改提醒</font>');
              testMessage1 = "<td width='80%' align='left' border='0' cellspacing='0' cellpadding='10'  >可以为用户查询或受理业务，受理后请提醒用户到营业厅修改证件信息</td>"

              testMessage2 = "<tr BGCOLOR='#F2F2F2'><td align='center' width='20%'>话术指引：</td><td width='80%' align='left' border='0' cellspacing='3' cellpadding='3'>" +
                "您好，您的证件类型为“<font color=red>" +cardtype +"</font>”，由于无法在线验证证件的真实性、有效性，所以目前"+cardtype+"已不再作为个人有效证件。为了不影响您以后办理业务，建议您使用个人居民身份证前往电信营业厅修改证件信息，感谢您的支持和配合。" +
                "<br><font color=red>注:</font>个人有效证件包含个人居民身份证、外国公民护照、港澳居民来往内地通行证，台湾居民来往内地通行证</td></tr>";

            }else if(cardtype=='户口簿'){
//              Ext.getCmp('realnameMsgWinNew').setTitle('<font color=red>'+cardtype+'-个人信息修改提醒</font>');
              if(agevalue>=16){
                testMessage1 = "<td width='80%' align='left' border='0' cellspacing='3' cellpadding='3'>"+
                  "<b>16周岁以上：</b>可以提供查询服务，但无法通过10000号办理业务，若用户要求办理，请引导至电信营业厅。</td>";
                testMessage2="<tr BGCOLOR='#F2F2F2'>"
                  +"<td align='center' width='20%'>话术指引：</td>"
                  +"<td width='80%' align='left' border='0' cellspacing='3' cellpadding='3' >"
                  +"<font color=red><b>针对16周岁以上：</b></font>您好，您的证件类型为“<font color=red>户口簿</font>”，由于无法在线验证证件的真实性、有效性，所以目前户口簿已不再作为个人有效证件。请您使用个人居民身份证前往电信营业厅修改证件信息后再来办理业务，感谢您的支持和配合。"
                  +"<br><font color=red><b>注：</b></font>目前个人有效证件为个人居民身份证、外国公民护照、港澳居民来往内地通行证、台湾居民来往内地通行证。<br>详见：<a href='javascript:Ext.getCmp(\"BusinessHallBtn\").getEl().dom.click();'>营业网点</a><td><tr>";
              }else{
                testMessage1 = "<td width='80%' align='left' border='0' cellspacing='3' cellpadding='3'>"+
                  "<b>16周岁以下：</b>可以提供查询服务，但无法通过10000号办理业务，若用户要求办理，请引导至电信营业厅。<br></td>"
                testMessage2="<tr BGCOLOR='#F2F2F2'>"
                  +"<td align='center' width='20%'>话术指引：</td>"
                  +"<td width='80%' align='left' border='0' cellspacing='3' cellpadding='3' >"
                  +"<font color=red><b>针对16周岁以下：</b></font>您好，为响应国家实名制要求，更好的完善电话用户实名信息，持户口簿（16周岁以下）办理业务需要监护人陪同或者委托监护人办理，建议您前往电信营业厅办理业务。  <br> 详见：<a href='javascript:Ext.getCmp(\"BusinessHallBtn\").getEl().dom.click();'>营业网点</a><td><tr>";
              }

            }else if(cardtype=='居民临时身份证'){
//              Ext.getCmp('realnameMsgWinNew').setTitle('<font color=red>'+cardtype+'-二次业务办理指引</font>');

              testMessage1 = "<td width='80%' align='left' border='0' cellspacing='3' cellpadding='3'>"+
                "可以提供查询服务，但无法通过10000号办理二次业务，若用户要求办理业务，请引导电信营业厅办</td>";

              testMessage2="<tr BGCOLOR='#F2F2F2'>"
                +"<td align='center' width='20%'>话术指引：</td><td width='80%' align='left' border='0' cellspacing='3' cellpadding='3'>"
                +"您好，您的证件类型为“<font color=red>临时身份证</font>”，为了更好的完善电话用户实名信息管控要求，临时身份证不再作为电信个人有效证件。建议您携带个人居民身份证前往电信营业厅（除卖场外）办理业务。 详见：<a href='javascript:Ext.getCmp(\"BusinessHallBtn\").getEl().dom.click();'>营业网点</a>"
                +"<br><font color=red>注:</font>若用户持临时身份证办理二次业务必须提供辅助证件（市民卡、驾驶证、户口簿、公安补换证明等），且仅限本人办理。"
                +"</td></tr>";
            }


            var tableHtml = "<div id='realnameMsgDiv'><table BORDERCOLOR='#15428b'  width='99%' border='0'>"+
              "<tr BGCOLOR='#F2F2F2'><td align='center' width='20%' >业务规则：</td>"+testMessage1+"</tr>"
              +testMessage2+
              "</table></div>";
            return tableHtml;
          }
      }
    },
    methods: {

      ...mapActions([
        'popoverAlert','iframeBlock'
      ]),
      close: function () {

      },
      changeSmall(){
        this.miniHeightStatus=!this.miniHeightStatus;
      },
      turnOld(name){
        this.iframeBlock(name);
        document.getElementById("oldWindow").contentWindow.openTspdLink();
      }
    }
  };
</script>
