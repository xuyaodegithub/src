<template>
  <div class="assets-locator" @mouseleave="mouseleave()">
    <el-row>
      <el-col :span="24">
        <div class="assets-locator-head" v-bind:style="{borderTop:'1px solid '+sidebarPageStyle.borderTopColor}">
          <span v-bind:style="{color: sidebarPageStyle.titleColor}">资产定位</span>
          <span v-on:click="idAuthentication()" class="button-small sidebar-button">身份认证</span>
          <span v-on:click="turnOld('政企认证')" class="button-small sidebar-button">政企认证</span>
        </div>
      </el-col>
      <el-col :span="24" class="sidebar-search">
        <input v-bind:style="{background: sidebarPageStyle.activeBg}" class="sidebar-search-input" v-model="input" placeholder="身份证设备查询" @keyup.enter="onEnter()">
        <button class="sidebar-search-button" @click="onEnter()"><i class="el-icon-search"></i></button>
      </el-col>
      <el-col class="assets-search-type">
        <el-col :span="6"><div class="assets-search-type-item"><span v-on:click="tabActive($event)" v-bind:style="{background: sidebarPageStyle.activeBg}" v-bind:class="{ active: custom }" class="tableBar">同客户</span></div></el-col>
        <el-col :span="6"><div  class="assets-search-type-item"><span v-on:click="tabActive($event)" v-bind:style="{background: sidebarPageStyle.activeBg}" v-bind:class="{ active: contract }" class="tableBar">同合同</span></div></el-col>
        <el-col :span="6"><div  class="assets-search-type-item"><span v-on:click="tabActive($event)" v-bind:style="{background: sidebarPageStyle.activeBg}" v-bind:class="{ active: identityCard }" class="tableBar">身份证</span></div></el-col>
        <el-col :span="6"><div class="assets-search-type-item more"><span v-bind:style="{color: sidebarPageStyle.buttonColor}" @click="openDeviceSearchTurn" class="">更多查询</span></div></el-col>
      </el-col>
      <!--<el-col class="assets-locator-table" v-bind:style="{background: sidebarPageStyle.sunBg}">-->
      <el-col class="assets-locator-table" v-bind:style="{background: sidebarPageStyle.sunBg}">
          <div class="assets-locator-table-head" v-bind:class="{ tableActive: identityCard  || custom || contract}"><span class="">状态</span><span class="">产品类别</span><span class="">号码</span></div>
          <div class="assets-locator-table-body"
             v-loading="sidebarEditorShow"
             element-loading-text="拼命加载中">
              <div class="assets-locator-table-item active" v-for="(item,index) in assetListShow" v-if="index!=='root'">
                <div class="item-head" v-on:click="changeLine($event)">
                  <i class="el-icon-caret-right"></i>

                  <el-tooltip class="item" effect="dark" :content="index" :disabled="index.length>18" placement="top">
                    <span>{{index | wordLimit}}</span>
                  </el-tooltip>
                </div>
                <el-popover
                  ref="popover1"
                  placement="top-start"
                  title="标题"
                  width="200"
                  trigger="click"
                  content="这是一段内容,这是一段内容,这是一段内容,这是一段内容。">
                </el-popover>
                <div class="item-list" v-bind:class="{ active: item.mainNumberFlg!=null }" v-for="(item,key) in item" v-if="item.productCode!=='PUB-MAN-0001'" @click="showHover(item,$event,key)" v-on:dblclick="personNumber(item)">
                    <span>{{item.status}}</span>
                    <span>{{item.productName}}</span>
                    <span>{{numberBack(item)}}</span>
                    <span v-if="item.mainNumberFlg=='Z'">(主)</span>
                    <span v-else-if="item.mainNumberFlg=='F'">(副)</span>
                </div>
              </div>

              <div class="assets-locator-table-item" v-for="(item,key) in assetListShowRoot" v-if="item.productCode!=='PUB-MAN-0001'" @click="showHover(item,$event,key)" v-on:dblclick="personNumber(item)">
                <div class="item-list item-single">
                  <span>{{item.status}}</span>

                  <el-tooltip class="item" effect="dark" :content="item.productName" placement="bottom-start">
                    <span>{{item.productName | wordLimitFour}}</span>
                  </el-tooltip>
                  <span>{{numberBack(item)}}</span>
                  <span v-if="item.mainNumberFlg=='Z'">(主)</span>
                  <span v-else-if="item.mainNumberFlg=='F'">(副)</span>
                </div>
              </div>
            </div>

      </el-col>
    </el-row>
    <div class="click-hover-point" :class="{showAlertCss: showAlertStatus}" :style="{left: hoverLeft+20+'px',top: hoverTop+'px'}" v-if="addressChoose(productName)">
      <p v-if="productName == '有线宽带'"><span class="header">速率：</span><span class="blue" v-if="flowDataLocal != null">{{flowDataLocal}}</span></p>
      <p v-if="!desensitization == true"><span class="header">地址：</span><span class="blue">{{addressLocal}}</span></p>
      <p v-if="desensitization == true"><span class="header">地址：</span><span class="blue">{{addressLocal | addressLimit}}</span></p>
    </div>
  </div>
</template>
<script>
  import { mapGetters } from 'vuex'
  import { mapActions } from 'vuex'
  import api from '../../store/fetch/api'
  export default {
    data() {
      return {
        show: '',
        input:'',
        hoverLeft:'',
        hoverTop:'',
        broadbandRate:'',
        showLate:null,
        idValue:'',
        productName: '',
        flowDataLocal:'',
        addressLocal:'',

        showAlertStatus:false,
        showAlertKey:'',
        isClickHoverPointActive: 'none',
        phoneState:'移动电话',
        phoneNum:'13777868324',
        aCity:{11:"北京",12:"天津",13:"河北",14:"山西",15:"内蒙古",21:"辽宁",22:"吉林",23:"黑龙江",31:"上海",32:"江苏",33:"浙江",34:"安徽",35:"福建",36:"江西",37:"山东",41:"河南",42:"湖北",43:"湖南",44:"广东",45:"广西",46:"海南",50:"重庆",51:"四川",52:"贵州",53:"云南",54:"西藏",61:"陕西",62:"甘肃",63:"青海",64:"宁夏",65:"新疆",71:"台湾",81:"香港",82:"澳门",91:"国外"}
      }
    },
    created(){
//      this.$store.dispatch('saveForm',['/asset_list','GET_ASSET_LIST_API','assetListMM']);
    },
    computed: {
      ...mapGetters([
        'sidebarPageStyle',
        'assetList',
        'assetListContract',
        'assetListCustom',
        'assetListId',
        'desensitization',
        'assetListIdSearch',
        'token',
        'assetListShow',
        'assetListShowRoot',
        'contract',
        'custom',
        'identityCard',
        'personMessage',
        'accountBundle',
        'sidebarEditorShow'
      ])
    },
    methods: {
      addressChoose(productName){
        if(productName != '移动电话' && productName.indexOf('小灵通')<0 && productName.indexOf('押金')<0){
            return true;
        }else{
            return false;
        }
      },
      numberBack(writeNo){
        if(this.desensitization==true ){
          if(writeNo.commonServiceId==''|| writeNo.commonServiceId==null){
            return '';
          }else {
            let num ='*******'+ writeNo.commonServiceId.substring(writeNo.commonServiceId.length-4,writeNo.commonServiceId.length);
            return num;
          }
        }else{
          return writeNo.commonServiceId;
        }
      },
      showHover(data,index,key){
        this.productName = data.productName;
        if(data.productName !='移动电话'){
            let broadbandRate ='';
            this.setBroadbandRate(data);
            api.widgetApi('/broadband_rate/?__dew_token__='+this.token,this.$store.state.editor.getBroadbandRateMM).then(
              res=>{
                this.flowDataLocal=res.body.data.broadbandRate;
              }
            );
            if(this.showLate!=null){
              clearTimeout(this.showLate);
            }
            $('.content').scrollTop();
//          let disTop = $('.assets-locator')[0].offsetTop;
//          let dis = index.clientY;

            this.hoverTop=index.pageY-90;
            this.hoverLeft=index.pageX+20;
            this.addressLocal=data.serviceAddress;
            if(this.showAlertKey == key){
              this.showAlertStatus = !this.showAlertStatus;
            }else{
              this.showAlertStatus = true;
              this.showAlertKey = key
            }
          }

//          console.log(index)
//          if(index.currentTarget.lastChild.style.display=='none'){
//            $('.item-hover').css('display','none')
//            index.currentTarget.lastChild.style.display='block'
//          }else{
//            $('.item-hover').css('display','none')
//            index.currentTarget.lastChild.style.display='none'
//          }
      },
      mouseenter(){
        clearTimeout(this.showLate);
        $('.click-hover-point').css('display','block');
      },
      mouseleave(){
        let that = this;
        this.showLate=setTimeout(function () {
          that.showAlertStatus=false;
        },1000);
      },
      //身份认证
      idAuthentication(){
        this.popoverAlert('vIdentity');
      },
      turnOld(name){
            this.$store.state.page.pageTitle.isActive=false;
            this.$store.state.page.pageTitle.changeTitle=true;
            this.$store.state.page.pageTitle.titleName= name;
        if(name=='身份认证'){
              this.toolBarTagActive();
              document.getElementById("oldWindow").contentWindow.showIdentityValidateWin();
              document.getElementById("oldWindow").contentWindow.recordCommonTraceActionId('TN1015', '');
        }else{
              this.toolBarTagActive();
              document.getElementById("oldWindow").contentWindow.doZqAuthUser();
              document.getElementById("oldWindow").contentWindow.recordCommonTraceActionId('TN1014', '');
        }
      },
      changeLine: function (event) {
          let dom = event.currentTarget;
          let domParent = dom.parentNode;
        if(domParent.getAttribute('class')=='assets-locator-table-item'){
          domParent.setAttribute('class','assets-locator-table-item active')
          Array.from(domParent.getElementsByClassName('item-list')).forEach(function (value) {
            value.style.display = 'block'
          })
        }else{
          domParent.setAttribute('class','assets-locator-table-item');
          Array.from(domParent.getElementsByClassName('item-list')).forEach(function (value) {
            value.style.display = 'none'
          })
        }
      },
      onEnter: function () {
        if(this.input.indexOf('*')>0){
          this.clearBtn();
          this.$store.state.editor.sidebarEditor.identityCard = true;
          this.$store.state.editor.sidebarEditor.identityCard = true;
          let result = this.isCardID(this.idValue);
          console.log(result);
          if(!this.idValue){
            this.$message({
              showClose: true,
              message: '请输入身份证',
              type: 'warning'
            });
            this.$store.state.page.sidebar.assetListShow = '';
            this.$store.state.page.sidebar.assetListId = '';
          }else if(result != 'ok'){
            this.$message({
              showClose: true,
              message: result,
              type: 'warning'
            });
            this.$store.state.page.sidebar.assetListShow = '';
            this.$store.state.page.sidebar.assetListId = '';
          }else {

            this.$store.dispatch('assetLineIdSearch',this.idValue);

            this.$message({
              showClose: true,
              message: '输入身份证份证是：'+this.idValue.substring(0,6)+'*******',
              type: 'success'
            });
          }
        }else{
          this.clearBtn();
          console.log(this.input);
          this.$store.state.editor.sidebarEditor.identityCard = true;
          this.$store.state.editor.sidebarEditor.identityCard = true;
          let result = this.isCardID(this.input);
          console.log(result);
          if(!this.input){
            this.$message({
              showClose: true,
              message: '请输入身份证',
              type: 'warning'
            });
            this.$store.state.page.sidebar.assetListShow = '';
            this.$store.state.page.sidebar.assetListId = '';
          }else if(result != 'ok'){
            this.$message({
              showClose: true,
              message: result,
              type: 'warning'
            });

            this.$store.state.page.sidebar.assetListShow = '';
            this.$store.state.page.sidebar.assetListId = '';
          }else {
            this.$store.dispatch('assetLineIdSearch',this.input);
            this.$store.dispatch('saveForm',['/asset_list/?__dew_token__='+this.token,'SET_ASSET_LIST_SEARCH_ID','assetListMM']);
            this.$store.state.editor.idCardFlag=false;
            this.$message({
              showClose: true,
              message: '输入身份证份证是：'+this.input,
              type: 'success'
            });

          }

        }
        document.getElementById("oldWindow").contentWindow.recordCommonTraceActionId('TN1016', '');
      },
      tabActive: function (event) {
        this.$store.state.editor.idCardFlag=true;
        this.identiFlag=true;
          console.log(event.target.innerText);
          if(event.target.innerText=='身份证'){
            if(this.accountBundle.facilityFlag=='Y'){
              this.$message({
                message: '当前客户为大客户，此处不支持同合同、同身份证、同客户的资产列表查询，请到设备查询中查询',
                type:'warning'
              })
            }else {
              this.$store.state.editor.sidebarEditor.contract = false;
              this.$store.state.editor.sidebarEditor.custom = false;
              if(this.identityCard == false){
                this.$store.state.editor.sidebarEditor.identityCard = true;
                if(this.assetListId==''){
                  this.$store.state.page.sidebar.assetListShow = '';
                  this.$store.dispatch('assetLineId');
                  document.getElementById("oldWindow").contentWindow.recordCommonTraceActionId('TN1012', '');
                }else{
                  this.$store.state.page.sidebar.assetListShow = '';
                  this.$store.state.page.sidebar.assetListShow  = this.assetListId;
                  document.getElementById("oldWindow").contentWindow.recordCommonTraceActionId('TN1012', '');
                }
              }else{
                console.log('1')
                this.$store.state.editor.sidebarEditor.identityCard = false;
                this.$store.state.page.sidebar.assetListShow  = this.assetList;
              }
            }

          }else if(event.target.innerText=='同合同'){
            if(this.accountBundle.facilityFlag=='Y'){
              this.$message({
                message: '当前客户为大客户，此处不支持同合同、同身份证、同客户的资产列表查询，请到设备查询中查询',
                type:'warning'
              })
            }else {
              this.$store.state.editor.sidebarEditor.identityCard = false;
              this.$store.state.editor.sidebarEditor.custom = false;
              if(this.contract == false){
                this.$store.state.editor.sidebarEditor.contract = true;
                if(this.assetListContract==''){
                  this.$store.state.page.sidebar.assetListShow = '';
                  this.$store.dispatch('assetLineContract');
                  document.getElementById("oldWindow").contentWindow.recordCommonTraceActionId('TN1011', '');
                }else{
                  this.$store.state.page.sidebar.assetListShow = '';
                  this.$store.state.page.sidebar.assetListShow = this.assetListContract;
                  document.getElementById("oldWindow").contentWindow.recordCommonTraceActionId('TN1011', '');
                }
              }else{
                this.$store.state.editor.sidebarEditor.contract = false;
                this.$store.state.page.sidebar.assetListShow = this.assetList;
              }
            }

          }else {
            if(this.accountBundle.facilityFlag=='Y'){

              this.$message({
                message: '当前客户为大客户，此处不支持同合同、同身份证、同客户的资产列表查询，请到设备查询中查询',
                type:'warning'
              })
            }else {
              this.$store.state.editor.sidebarEditor.identityCard = false;
              this.$store.state.editor.sidebarEditor.contract = false;
              if(this.custom == false){
                console.log('1')
                this.$store.state.editor.sidebarEditor.custom = true;
                if(this.assetListCustom==''){
                  this.$store.state.page.sidebar.assetListShow = '';
                  this.$store.dispatch('assetLineAccount');
                  document.getElementById("oldWindow").contentWindow.recordCommonTraceActionId('TN1010', '');
                }else{
                  this.$store.state.page.sidebar.assetListShow = '';
                  this.$store.state.page.sidebar.assetListShow = this.assetListCustom;
                  document.getElementById("oldWindow").contentWindow.recordCommonTraceActionId('TN1010', '');
                }
              }else{
                this.$store.state.editor.sidebarEditor.custom = false;
                this.$store.state.page.sidebar.assetListShow = this.assetList;
              }
            }

          }

        $('.tableBar').attr('class','tableBar');
        event.target.className='tableBar active';
      },
      isCardID(sId){
        let iSum=0 ;
        let info="" ;
        if(!/^\d{17}(\d|x)$/i.test(sId)) return "你输入的身份证长度或格式错误";
        sId=sId.replace(/x$/i,"a");
        if(this.aCity[parseInt(sId.substr(0,2))]==null) return "你的身份证地区非法";
        let sBirthday=sId.substr(6,4)+"-"+Number(sId.substr(10,2))+"-"+Number(sId.substr(12,2));
        let d=new Date(sBirthday.replace(/-/g,"/")) ;
        if(sBirthday!=(d.getFullYear()+"-"+ (d.getMonth()+1) + "-" + d.getDate()))return "身份证上的出生日期非法";
        for(let i = 17;i>=0;i --) iSum += (Math.pow(2,i) % 11) * parseInt(sId.charAt(17 - i),11) ;
        if(iSum%11!=1) return "你输入的身份证号非法";
        //aCity[parseInt(sId.substr(0,2))]+","+sBirthday+","+(sId.substr(16,1)%2?"男":"女");//此次还可以判断出输入的身份证号的人性别
        return 'ok';
      },
      ...mapActions([
        'saveForm',
        'assetLineContract',
        'assetLineAccount',
        'assetLineId',
        'assetLineIdSearch',
        'toolBarTagActive',
        'clearBtn',
        'setBusinessNo',
        'setSaveForm',
        'setWiredBroadband',//有线宽带,
        'setItvNo',//itv
        'setTelephoneNo',//固定号码
        'integrationIdSearch',
        'personNumber',
        'setBroadbandRate',
        'openDeviceSearchTurn',//更多查询
        'popoverAlert'//更多查询
      ]),
    },
    watch:{
      personMessage(){
        this.input=''
      }
    }
  }

</script>
<style scoped>
  .click-hover-point{
    background: #ffffff;
    position: absolute;
    width: 100px;
    min-height: 40px;
    border-radius: 5px;
    padding: 5px;
    left: 0;
    z-index: 99;
    top: 0;
    display: none;
    animation: myfirst 0.5s;
    -moz-animation: myfirst 0.5s;	/* Firefox */
    -webkit-animation: myfirst 0.5s;	/* Safari 和 Chrome */
    -o-animation: myfirst 0.5s;	/* Opera */
    box-shadow: 0 0 10px #333333;
  }
  @keyframes myfirst
  {
    0% {
      opacity: 0;
      margin-left: -10px;
    }
    100% {
      opacity: 1;
      margin-left: 0;
    }
  }

  @-moz-keyframes myfirst /* Firefox */
  {
    0% {
      opacity: 0;
      margin-left: -10px;
    }
    100% {
      opacity: 1;
      margin-left: 0;
    }
  }

  @-webkit-keyframes myfirst /* Safari 和 Chrome */
  {
    0% {
      opacity: 0;
      margin-left: -10px;
    }
    100% {
      opacity: 1;
      margin-left: 0;
    }
  }

  @-o-keyframes myfirst /* Opera */
  {
    0% {
      opacity: 0;
      margin-left: -10px;
    }
    100% {
      opacity: 1;
      margin-left: 0;
    }
  }
  .click-hover-point:hover{
    cursor: pointer;
  }
  .click-hover-point:before{
    content: '';
    position: absolute;
    left: -8px;
    top: 20px;
    width: 0;
    height: 0;
    border-top: 5px solid transparent;
    border-right: 8px solid #ffffff;
    border-bottom: 5px solid transparent;
  }
  .clickHoverPointActive{
    display: none !important;
  }
  .click-hover-point .blue{
    color: #1D9BD9;
  }
  .click-hover-point .header{
    color: #000;
  }
  .showAlertCss{
    display: block;
  }

  .assets-locator{
    padding-left: 10px;
    padding-right: 10px;
    font-weight: normal !important;
  }
  .assets-locator-head{
    border-top: 1px solid #A1C1E2;
    margin-top: 5px;
    height: 30px;
    line-height: 30px;
  }
  .assets-locator-head span{
    font-size: 14px;
    color: #4286B2;
  }
  .sidebar-button{
    float: right;
    margin-top: 5px;
    color: #B3DAFF !important;
    font-size: 12px;
    border: 1px solid #B3DAFF;
    margin-left: 8px;
  }
  .sidebar-search{
    margin-top: 5px;
  }
  .sidebar-search-input{
    background: #262626;
    border: none;
    width: 80%;
    height: 30px;
    line-height: 30px;
    color: #D2D4D6;
    font-weight: normal;
    font-size: 14px;
    outline:none;
    padding-left: 10px;
    float: left;
  }
  .sidebar-search-input::-webkit-input-placeholder {
    color: #D3D3D3;
    font-size: 14px;
    font-weight: normal;
  }
  .sidebar-search-input::-moz-placeholder {
    color: #D3D3D3;
    font-size: 1px;
    font-weight: normal;
  } /* firefox 19+ */
  .sidebar-search-input:-ms-input-placeholder {
    color: #D3D3D3;
    font-size: 12px;
    font-weight: normal;
  } /* ie */
  .sidebar-search-input:-moz-placeholder {
    color: #D3D3D3;
    font-size: 12px;
    font-weight: normal;
  }
  .sidebar-search-button{
    width: 20%;
    margin-left: -10px;
    cursor: pointer;
    height: 30px;
    background: #238EC4;
    border: none;
    color: #ffffff;
    outline:none;
  }
  .sidebar-search-button i{
    font-size: 16px;
  }
  .assets-search-type{
    height: 34px;
    line-height: 44px;
    font-size: 12px;
    color: #D3D3D3;
    font-weight: normal !important;
  }
  .assets-search-type .active span{
    background: #4286B2 !important;
  }
  .assets-search-type .more{
    text-align: right;
    color: #4286B2;
  }
  .assets-search-type-item{
    border-top-right-radius: 5px;
    border-top-left-radius: 5px;
  }
  .assets-search-type-item .tableBar{
    cursor: pointer;
    padding: 5px;
    border-top-right-radius: 4px;
    border-top-left-radius: 4px;
  }
  .assets-search-type-item span{
    cursor: pointer;
  }
  .assets-search-type-item .active{
    background: #4286B2 !important;
  }
  .assets-locator-table{
    width: 100%;
    background: #262626;
    color: #95989A;
    font-size: 12px;
    font-weight: normal !important;
  }
  .tableActive{
    color: #ffffff;
    background: #4286B2;
  }
  .assets-locator-table-head{
    height: 30px;
    text-align: left;
    font-weight: 100 !important;
    line-height: 30px;
    width: 100%;
    float: left;
    border-bottom: 1px solid #60788D;
  }
  .assets-locator-table-head span{
    margin-left: 15px;
  }
  .assets-locator-table-body .active{
    height: auto !important;
  }
  .assets-locator-table-item{
    width: 100%;
    /*height: 24px;*/
    transition:height 0.3s ease;
    -moz-transition:height 0.3s ease; /* Firefox 4 */
    -webkit-transition:height 0.3s ease; /* Safari and Chrome */
    -o-transition:height 0.3s ease; /* Opera */
  }
  .assets-locator-table-item .active{
    height: auto;
    background: #52718B;
  }
  .assets-locator-table-item .title{
    color: #999999;
  }
  .el-popover{
    margin-left: -50px !important;
  }
  .el-popover .title{
    color: #999999;
  }
  .el-popover p{
    color: #333333 !important;
  }
  .assets-locator-table-item .item-single{
    color: #FFFF00;
  }
  .item-head{
    width: 100%;
    min-height: 24px;
    line-height: 24px;
    cursor: pointer;
  }
  .assets-locator-table-body .active .item-head i{
    transform:rotate(90deg);
    -ms-transform:rotate(90deg); 	/* IE 9 */
    -moz-transform:rotate(90deg); 	/* Firefox */
    -webkit-transform:rotate(90deg); /* Safari 和 Chrome */
    -o-transform:rotate(90deg); 	/* Opera */
  }
  .item-head i{
    cursor: pointer;
  }
  .item-head span{
    color: #FF9933;
  }
  .item-list{
    width: 100%;
    min-height: 24px;
    line-height: 24px;
    color: #E5E5E5;
    font-weight: normal;
    position: relative;
    cursor: pointer;
    -webkit-animation: move 0.3 ease;
    -o-animation: move 0.3 ease;
    animation: move 0.3 ease;
  }
  @keyframes move {
    0%{
      opacity: 0;
      margin-top: -5px;
    }
    100%{
      opacity: 1;
      margin: 0;
    }
  }
  @-webkit-keyframes move {

    0%{
      opacity: 0;
      margin-top: -5px;
    }
    100%{
      opacity: 1;
      margin: 0;
    }
  }
  .item-list span{
    margin-left: 5px;
  }
  ::-webkit-scrollbar
  {
    width: 6px;
    height: 16px;
    position: fixed;
    background: none;
  }
  /*定义滚动条轨道 内阴影+圆角*/
  ::-webkit-scrollbar-track
  {
    background: none;
  }
  /*定义滑块 内阴影+圆角*/
  ::-webkit-scrollbar-thumb
  {
    border-radius: 10px;
    -webkit-box-shadow: none;
    background-color: #6685A0;
  }

  @media screen and (min-height:699px){

    .assets-locator-table-body{
      width: 100%;
      height: 75px;
      overflow-y: scroll;
      margin-left: 5px;
      clear: both;
    }
  }

  @media screen and (min-height:700px){

    .assets-locator-table-body{
      width: 100%;
      height: 105px;
      overflow-y: scroll;
      margin-left: 5px;
      clear: both;
    }
  }
  @media screen and (min-height: 750px) {

    .assets-locator-table-body{
      width: 100%;
      height: 135px;
      overflow-y: scroll;
      margin-left: 5px;
      clear: both;
    }
  }
  @media screen and (min-height:800px){

    .assets-locator-table-body{
      width: 100%;
      height: 175px;
      overflow-y: scroll;
      margin-left: 5px;
      clear: both;
    }
  }
  @media screen and (min-height:850px){

    .assets-locator-table-body{
      width: 100%;
      height: 225px;
      overflow-y: scroll;
      margin-left: 5px;
      clear: both;
    }
  }
  @media screen and (min-height:900px){

    .assets-locator-table-body{
      width: 100%;
      height:275px;
      overflow-y: scroll;
      margin-left: 5px;
      clear: both;
    }
  }
  @media screen and (min-height:950px){

    .assets-locator-table-body{
      width: 100%;
      height: 285px;
      overflow-y: scroll;
      margin-left: 5px;
      clear: both;
    }
  }
  @media screen and (min-height:1000px){
    .assets-locator-table-body{
      width: 100%;
      height: 295px;
      overflow-y: scroll;
      margin-left: 5px;
      clear: both;
    }
  }

</style>

