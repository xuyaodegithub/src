<template>
  <div class="demo incomingHistory" :class="{miniHeight: miniHeightStatus}">
    <div class="popover-head">
      <span class="title">一证五卡用户</span>
      <i class="el-icon-caret-top" :class="{iconChange: miniHeightStatus}" @click="changeSmall()"></i>
    </div>
    <div class="popover-main" v-html="word">
    </div>
    <div style="width: 100%;height: 40px">
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
  import simplePinyin from 'simple-pinyin';
  export default {
    data() {
      return {
        miniHeightStatus:false
      };
    },
    computed:{
      ...mapGetters([
          'personMessage',
          'personRealName',
          'phoneRelNum',
          'callNumber',
          'businessCallNumber',
          'enterCase'
      ]),
      word(){
        let testMessage1='';
        let testMessage2='';
        let searchCity="100";//100表示杭州
        let searchCityEngName='';
        let c4Name=this.personMessage.c4Name;
        let relSize=this.phoneRelNum.relSize;
        let searchCountyCode = "";
        let countyCode='';
        let Base64 = require('js-base64').Base64;
        let id=Base64.encode(this.enterCase.accountCode)
        if(c4Name && c4Name.indexOf('区')>0){
          c4Name=c4Name.substring(0,c4Name.length-1);
        }
        let countyCodeArr = simplePinyin(c4Name,{
          pinyinOnly: false
        });
        let searchCityEngNameArr=simplePinyin(this.personMessage.c3Name,{
          pinyinOnly: false
        });
        for(let i=0;i<searchCityEngNameArr.length-1;i++){
          searchCityEngName+=searchCityEngNameArr[i];
          searchCityEngName=searchCityEngName.toUpperCase();
        }
        for(let i=0;i<countyCodeArr.length;i++){
          countyCode+=searchCityEngNameArr[i];
          countyCode=countyCode.toUpperCase();
        }
        console.log(countyCode)
        if(searchCityEngName=='TAIZHOU'){
          searchCity="101";
        }else if(searchCityEngName=='LISHUI'){
          searchCity="102";
        }else if(searchCityEngName=='WENZHOU'){
          searchCity="103";
        }else if(searchCityEngName=='SHAOXING'){
          searchCity="105";
        }else if(searchCityEngName=='JIAXING'){
          searchCity="106";
        }else if(searchCityEngName=='HUZHOU'){
          searchCity="107";
        }else if(searchCityEngName=='NINGBO'){
          searchCity="108";
        }else if(searchCityEngName=='JINHUA'){
          searchCity="109";
        }else if(searchCityEngName=='QUZHOU'){
          searchCity="110";
        }else if(searchCityEngName=='ZHOUSHAN'){
          searchCity="111";
        }

        if(countyCode == "HANGZHOUSHI")
        {
          searchCountyCode = "1001";
        }
        else if(countyCode == "YUHANG")
        {
          searchCountyCode = "1002";
        }
        else if(countyCode == "CHUN,ZHUNAN")
        {
          searchCountyCode = "1005";
        }
        else if(countyCode == "XIAOSHAN")
        {
          searchCountyCode = "1003";
        }
        else if(countyCode == "LINAN")
        {
          searchCountyCode = "1006";
        }
        else if(countyCode == "JIANDE")
        {
          searchCountyCode = "1007";
        }
        else if(countyCode == "FUYANG")
        {
          searchCountyCode = "1008";
        }
        else if(countyCode == "TONGLU")
        {
          searchCountyCode = "1004";
        }
        else if(countyCode == "NINGBOSHI")
        {
          searchCountyCode = "1081";
        }
        else if(countyCode == "CIXI")
        {
          searchCountyCode = "1084";
        }
        else if(countyCode == "NINGHAI")
        {
          searchCountyCode = "1089";
        }
        else if(countyCode == "YINZHOU")
        {
          searchCountyCode = "1083";
        }
        else if(countyCode == "ZHENHAI")
        {
          searchCountyCode = "1087";
        }
        else if(countyCode == "BEILUN")
        {
          searchCountyCode = "1086";
        }
        else if(countyCode == "YUYAO")
        {
          searchCountyCode = "1085";
        }
        else if(countyCode == "FENGHUA")
        {
          searchCountyCode = "1088";
        }
        else if(countyCode == "XIANGSHAN")
        {
          searchCountyCode = "1080";
        }
        else if(countyCode == "WENZHOUSHI")
        {
          searchCountyCode = "1031";
        }
        else if(countyCode == "RUIAN")
        {
          searchCountyCode = "1032";
        }
        else if(countyCode == "WENCHENG")
        {
          searchCountyCode = "1038";
        }
        else if(countyCode == "PINGYANG")
        {
          searchCountyCode = "1036";
        }
        else if(countyCode == "CANGNAN,NA")
        {
          searchCountyCode = "1034";
        }
        else if(countyCode == "YONGJIA")
        {
          searchCountyCode = "1035";
        }
        else if(countyCode == "LE,YUEQING")
        {
          searchCountyCode = "1033";
        }
        else if(countyCode == "DONGTOU")
        {
          searchCountyCode = "1039";
        }
        else if(countyCode == "TAISHUN")
        {
          searchCountyCode = "1037";
        }
        else if(countyCode == "JIAXINGSHI")
        {
          searchCountyCode = "1061";
        }
        else if(countyCode == "JIASHAN")
        {
          searchCountyCode = "1064";
        }
        else if(countyCode == "PINGHU")
        {
          searchCountyCode = "1065";
        }
        else if(countyCode == "HAIYAN")
        {
          searchCountyCode = "1066";
        }
        else if(countyCode == "HAINING")
        {
          searchCountyCode = "1062";
        }
        else if(countyCode == "TONGXIANG")
        {
          searchCountyCode = "1063";
        }
        else if(countyCode == "HUZHOUSHI")
        {
          searchCountyCode = "1071";
        }
        else if(countyCode == "CHANGXING")
        {
          searchCountyCode = "1073";
        }else if(countyCode == "ANJI"){
          searchCountyCode = "1074";
        }else if(countyCode == "DEQING"){
          searchCountyCode = "1072";
        }
        else if(countyCode == "SHAOXINGSHI")
        {
          searchCountyCode = "1051";
        }
        else if(countyCode == "ZHUJI")
        {
          searchCountyCode = "1052";
        }else if(countyCode == "SHANGYU"){
          searchCountyCode = "1053";
        }else if(countyCode == "SHENGZHOU"){
          searchCountyCode = "1054";
        }else if(countyCode == "XINCHANG"){
          searchCountyCode = "1055";
        }
        else if(countyCode == "JINHUASHI")
        {
          searchCountyCode = "1091";
        }
        else if(countyCode == "LANXI")
        {
          searchCountyCode = "1095";
        }else if(countyCode == "YIWU"){
          searchCountyCode = "1097";
        }else if(countyCode == "PUJIANG"){
          searchCountyCode = "1098";
        }else if(countyCode == "YONGKANG"){
          searchCountyCode = "1096";
        }else if(countyCode == "PANAN"){
          searchCountyCode = "1093";
        }else if(countyCode == "DONGYANG"){
          searchCountyCode = "1094";
        }else if(countyCode == "WUYI"){
          searchCountyCode = "1092";
        }
        else if("QUZHOUSHI" == countyCode){
          searchCountyCode = "1101";
        }else if ("LONGYOU" == countyCode){
          searchCountyCode = "1102";
        }else if ("JIANGSHAN" == countyCode){
          searchCountyCode = "1103";
        }else if ("CHANGSHAN" == countyCode){
          searchCountyCode = "1104";
        }else if ("KAIHUA" == countyCode){
          searchCountyCode = "1105";
        }else if ("ZHOUSHANSHI" == countyCode){
          searchCountyCode = "1111";
        }else if ("SHENGSI" == countyCode){
          searchCountyCode = "1114";
        }else if ("DAISHAN" == countyCode){
          searchCountyCode = "1113";
        }else if ("PUTUO" == countyCode){
          searchCountyCode = "1112";
        }else if ("JIAOJIANG" == countyCode){
          searchCountyCode = "1012";
        }else if ("HUANGYAN" == countyCode){
          searchCountyCode = "1013";
        }else if ("LUQIAO" == countyCode){
          searchCountyCode = "1014";
        }else if ("WENLING" == countyCode){
          searchCountyCode = "1015";
        }else if ("TIANTAI" == countyCode){
          searchCountyCode = "1016";
        }else if ("YUHUAN" == countyCode){
          searchCountyCode = "1017";
        }else if ("XIANJU" == countyCode){
          searchCountyCode = "1018";
        }else if ("SANMEN" == countyCode){
          searchCountyCode = "1019";
        }else if ("LINHAI" == countyCode){
          searchCountyCode = "1010";
        }else if ("LISHUISHI" == countyCode){
          searchCountyCode = "1021";
        }else if ("JINYUN" == countyCode){
          searchCountyCode = "1023";
        }else if ("QINGTIAN" == countyCode){
          searchCountyCode = "1022";
        }else if ("LONGQUAN" == countyCode){
          searchCountyCode = "1029";
        }else if ("QINGYUAN" == countyCode){
          searchCountyCode = "1028";
        }else if ("JING,YINGNING" == countyCode){
          searchCountyCode = "1027";
        }else if ("SUICHANG" == countyCode){
          searchCountyCode = "1026";
        }else if ("YUNHE,HUO,HU" == countyCode){
          searchCountyCode = "1024";
        }else if ("SONGYANG" == countyCode){
          searchCountyCode = "1025";
        }
        testMessage1 = "<td width='80%' align='left' border='0' cellspacing='0' cellpadding='10' class='td_with_bg' >8月1日起，移动号码仅可以办理充值交费、实名补登、过户、拆机、客户信息修改（10000号可受理，商机派单范围内）、停复机（10000号可受理）、自动订单类（10000号一键受理范围）业务。</td>";
        testMessage2 = "<td width='80%' align='left' border='0' cellspacing='0' cellpadding='10' class='td_with_bg'>"
          +"尊敬的客户，您好，您名下的手机有"+relSize+"部，已超出国家实名制所规定的5部限额，为方便您能正常办理相关业务，请您带上您本人以及真实使用人的有效身份证件到就近中国电信营业厅办理相关手续（过户或变更实际使用人信息，以达到国家对“实际使用人与登记信息一致”的要求）。"
          +"<br>知识链接：<a target='_blank' href='http://134.96.108.136:8111/logingetDocHtml.do?loginId="+id+"&cityId="+searchCity+"&countyId="+searchCountyCode+"&visitType=1&docid=507356&callNum="+this.callNumber+"&busiNum="+this.businessCallNumber+"'>“一证五卡”实名制查验</a>"
          +"&nbsp;&nbsp;&nbsp;&nbsp;<a target='_blank' href='http://134.96.108.136:8111/logingetDocHtml.do?loginId="+id+"&cityId="+searchCity+"&countyId="+searchCountyCode+"&visitType=1&docid=68080&callNum="+this.callNumber+"&busiNum="+this.businessCallNumber+"'>营业网点</a></td>";
//          +getTop().enStaffId+"&cityId="+getTop().getSearchCity()+"&countyId="+getTop().getSearchCountyCode()+"&visitType=1&docid=507356&callNum="+getTop().deviceInfoCache['CALLPHONE']+"&busiNum="+getTop().deviceInfoCache['BUSIPHONE']+"'>“一证五卡”实名制查验</a>"
//          +"&nbsp;&nbsp;&nbsp;&nbsp;<a target='_blank' href='http://134.96.108.136:8111/logingetDocHtml.do?loginId="
//          +getTop().enStaffId+"&cityId="+getTop().getSearchCity()+"&countyId="+getTop().getSearchCountyCode()+"&visitType=1&docid=68080&callNum="+getTop().deviceInfoCache['CALLPHONE']+"&busiNum="+getTop().deviceInfoCache['BUSIPHONE']+"'>营业网点</a></td>";



        let tableHtml = "<div id='realnameCheckDiv'><table  BORDERCOLOR='#15428b'  width='99%' border='0'>"
          + "<tr BGCOLOR='#F2F2F2'><td align='center' width='20%' class='td_with_bg'>业务规则：</td>"+testMessage1+"</tr>"
          + "<tr BGCOLOR='#F2F2F2'><td align='center' width='20%' class='td_with_bg'>话术指引：</td>"+testMessage2+"</tr>"
          + "</table></div>";

          return tableHtml;
      }
    },
    methods: {

      ...mapActions([
        'smallPopoverAlert','iframeBlock'
      ]),
      close: function () {

      },
      changeSmall(){
        this.miniHeightStatus=!this.miniHeightStatus;
      },
      turnOld(name){
        this.iframeBlock(name);
        this.popoverAlert();
        document.getElementById("oldWindow").contentWindow.openTspdLink();
      }
    }
  };
</script>
