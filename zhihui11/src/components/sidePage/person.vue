<template>
  <div class="person-message">

      <div class="person-message-item">
          <div class="person-message-title" v-bind:style="{color: sidebarPageStyle.titleColor}">呼入号码</div>
          <div class="person-message-text">{{callNo}}</div>
      </div>

      <div class="person-message-item">
          <div class="person-message-title" v-bind:style="{color: sidebarPageStyle.titleColor}">业务号码</div>
          <div class="person-message-text blue">
            <input placeholder="请输入" v-model="businessCallNumber" class="person-message-input" @keyup.enter="onEnter($event)">
            <div class="phone-number-icon" v-if="personMessage.mainNumberFlg != null && businessCallNumber != ''">
              <span v-if="personMessage.mainNumberFlg=='Z'">(主)</span>
              <span v-else-if="personMessage.mainNumberFlg=='F'">(副)</span>
              <!--<div v-on:click="popoverAlert('vNiceNumJudge')">靓</div>-->
            </div>
          </div>
      </div>
<!-- 关联账号 -->
      <div class="person-message-item" v-if="personMessage.outSideArea && getKdAccountByCallNum">
          <div class="person-message-title" v-bind:style="{color: sidebarPageStyle.titleColor}">关联账号</div>
        <div class="person-message-text" v-if="getKdAccountByCallNum">
          <span style="cursor: pointer" @click="freshSystem(getKdAccountByCallNum['itemVOS'][0]['netWorkNum'])">{{getKdAccountByCallNum['itemVOS'][0]['netWorkNum']}}</span>
          <span @click="getKdAccountByCallNum['itemVOS'].length>1 && popoverAlert('vContentAccount')" class="circleYellow">{{getKdAccountByCallNum['itemVOS'].length}}</span>
        </div>
      </div>

      <div class="person-message-item top5">
          <div class="person-message-title" v-bind:style="{color: sidebarPageStyle.titleColor}">号码地市</div>
          <div class="person-message-text " v-if="personMessage.data !== ''">
            <el-select v-model="addressAllValue" placeholder="请选择" size="mini" class="area-select">
              <el-option
                v-for="(item,index) in addressAll"
                :key="index"
                :label="item.name"
                :value="item.number">
              </el-option>
            </el-select>
            <span v-if="personMessage.c4Name != '' && personMessage.c4Name != null">({{personMessage.c4Id}})</span>
          </div>
      </div>

      <div class="person-message-item">
          <div class="person-message-title" v-bind:style="{color: sidebarPageStyle.titleColor}">号码类型</div>
          <div class="person-message-text" v-if="personMessage.status && !personMessage.outSideArea">
            ({{personMessage.status}}) {{personMessage.productName}}{{suspendType()}}{{subAssetPropertyPublicReturn()}}
          </div>
          <div class="person-message-text" v-if="personMessage.outSideArea">
            {{'(0'+personMessage.areaCode+')'}}{{personMessage.provinceName}}-{{personMessage.areaName}}{{'('+personMessage.corpName+')'}}{{personMessage.suspendFlag}}
          </div>
      </div>
      <div class="person-message-item ">
          <div class="person-message-title" v-bind:style="{color: sidebarPageStyle.titleColor}">用户姓名</div>
          <div class="person-message-text" v-if="desensitization == true">{{personMessage.accountName | nameLimit}}</div>
          <div class="person-message-text" v-if="!desensitization == true">{{personMessage.accountName}}</div>
      </div>
      <div class="person-message-item"  v-if="!personMessage.outSideArea">
          <div class="person-message-title" v-bind:style="{color: sidebarPageStyle.titleColor}">证件类型</div>
          <div class="person-message-text">
            {{personMessage.accountIdType}}
            <span v-if="personRealName">
              <span v-if="personRealName.realNameStatus == true" style="color: #D9D9D9;">（已实名）</span><span v-else style="color: red;">（未实名）</span>
            </span>
          </div>
      </div>
      <div class="person-message-item">
          <div class="person-message-title" v-bind:style="{color: sidebarPageStyle.titleColor}">证件号码</div>
          <div class="person-message-text" v-if="desensitization == true">{{personMessage.accountIdNumber | idCard}}</div>
          <div class="person-message-text" v-if="!desensitization == true">{{personMessage.accountIdNumber}}</div>
        <div class="person-message-text"></div>
      </div>
      <div class="person-message-item-adress" style="background: rgb(46, 75, 100);">
          <div class="address" v-if="desensitization == true">
            {{personMessage.serviceAddress | addressLimit}}
          </div>
          <div class="address" v-if="!desensitization == true">{{personMessage.serviceAddress}}</div>
      </div>
  </div>
</template>
<script>
  import { mapActions } from 'vuex'
  import { mapGetters } from 'vuex'
  export default {
    data() {
      return {
        show: '',
        inputNumber: '',
        addressAllValue:'',
        addressAll:[
          {
            number:'571',
            name:'杭州市'
          },
          {
            number:'574',
            name:'宁波市'
          },
          {
            number:'577',
            name:'温州市'
          },
          {
            number:'573',
            name:'嘉兴市'
          },
          {
            number:'572',
            name:'湖州市'
          },
          {
            number:'575',
            name:'绍兴市'
          },
          {
            number:'579',
            name:'金华市'
          },
          {
            number:'570',
            name:'衢州市'
          },
          {
            number:'580',
            name:'舟山市'
          },
          {
            number:'576',
            name:'台州市'
          },
          {
            number:'578',
            name:'丽水市'
          },
        ],
        idCard: '330183199308202615',
        tableData: [{
          date: '现行',
          name: '王小虎',
          address: '13777868324'
        },{
          date: '现行',
          name: '王小虎',
          address: '13777868324'
        },{
          date: '现行',
          name: '王小虎',
          address: '13777868324'
        }, {
          date: '现行',
          name: '王小虎',
          address: '13777868324'
        }, {
          date: '现行',
          name: '王小虎',
          address: '13777868324'
        }, {
          date: '现行',
          name: '王小虎',
          address: '13777868324'
        }]
      }
    },
    created(){
      this.$store.dispatch('ivrEnterDate');
    },
    activated(){
    },
    mounted: function(){
//      this.$nextTick(function () {
//        this.cartView()
//      })
    },
    computed: {
      ...mapGetters([
        'sidebarPageStyle',
        'personMessage',
        'callNumberMM',
//        'personMessageAccount',
        'businessCallNumber',
        'callNo',
        'desensitization',
        'personRealName',
        'subAssetPropertyPublic',
        'getKdAccountByCallNum'
      ])
    },
    methods: {
      ...mapActions([
        'popoverAlert',
        'changeBusinessCallNum',
        'changeBusinessCallNumThenData',
        'callSaveForm',
        'setBusinessNo',
        'setSaveForm',
        'broadBandAccount',
        'clear',
        'clearAll',
        'turnIndex',
        'alertShow',
        'smallPopoverAlert',
        'closeAllAlert',
        'phoneRel',
        'contentSinger'
      ]),
//      cartView(){
//      },
      freshSystem(data){
        if(data){
          this.contentSinger(data);
        }else{

        }
      },
      getKdAccountByCallNumReturn(){
          if(this.getKdAccountByCallNum){
              return this.getKdAccountByCallNum['itemVOS'].length;
          }

      },
      onEnter(event){
        this.clearAll();
        this.turnIndex();
        this.closeAllAlert();
        let reg = new RegExp("[\\u4E00-\\u9FFF]+","g");
        if (reg.test(event.target.value)) {
          this.$message({
            showClose: true,
            message: '输入有误，重新输入',
            type: 'warning'
          });
        }else{
          let valueText = event.target.value.replace( /^\s+/, "" ).replace( /\s+$/, "" );
          if(valueText.length==8){
            this.clearAll();
            this.$store.state.editor.businessCallNumber=this.addressAllValue+valueText;
            this.setBusinessNo(this.addressAllValue+valueText);
            this.setSaveForm();
          }else{
            this.clearAll();
            this.setBusinessNo(valueText);
            this.setSaveForm();
          }

//          this.$message({
//            showClose: true,
//            message: '输入号码是：'+event.target.value,
//            type: 'success'
//          });
        }
      },
      subAssetPropertyPublicReturn(){

        for(let i=0;i<this.subAssetPropertyPublic.length;i++){

          if(this.subAssetPropertyPublic[i].displayName=='服务状态' && this.subAssetPropertyPublic[i].value=='流量封顶断网'){
            return ' (流量断网)'
          }else{
          }

        }

        return '';
      },
      suspendType(){
          if(this.personMessage.status=='已暂停'){
            if(this.personMessage.suspendFlag!='无'){
              if(this.personMessage.suspendFlag=='单向'){
                return '('+this.personMessage.suspendFlag+'欠费停机'+')';
              }else if(this.personMessage.suspendFlag=='双向'){
                return '('+this.personMessage.suspendFlag+'欠费停机'+')';
              }
            }else if(this.personMessage.lossSuspendFlag=='Y'){
              return '('+'挂失停机'+')';
            }else if(this.personMessage.initiativeSuspend=='Y'){
              return '('+'主动停机'+')';
            }else if(this.personMessage.peccancySuspend=='Y'){
              return '('+'违章停机'+')';
            }
          }else{
            return '';
          }
      }
    },
    watch:{
      personRealName:function () {
//        if(this.personRealName.realNameStatus==true && !this.personMessage.outSideArea && this.personMessage["peccancySuspend"]!='N' && this.personMessage["peccancySuspend"]!='否'){
        if(this.personRealName.realNameStatus==true && !this.personMessage.outSideArea){
          if(this.personMessage.accountIdType=='警官证' || this.personMessage.accountIdType=='军官证' || this.personMessage.accountIdType=='户口簿' || this.personMessage.accountIdType=='居民临时身份证' || this.personMessage.accountIdType=='外国人永久居留身份证'){
            this.popoverAlert('vkingOfMen')
          }else{
          }
        }else if(this.personRealName.realNameStatus==false && !this.personMessage.outSideArea) {
          this.popoverAlert('vRealName')
        }
      },
      personMessage: function () {
        if(this.personMessage && this.personMessage.c3Name){
          this.addressAllValue=this.personMessage.areaCode;
        }else{
          if(this.personMessage.areaCode){
            this.addressAllValue=this.personMessage.areaCode;
          }else{
            this.addressAllValue='';
          }
        }
//        一阵五号

//          if(this.personMessage){
//            if(this.personMessage.productName == '移动电话'){
//              this.phoneRel()
//            }else{
//            }
//          }

          if(this.personMessage.outSideArea){
              if(this.personMessage.resold!=null && this.personMessage.resold=='1'){
                this.alertShow('客户资料不存在');
//                this.alertShow(this.personMessage.provinceName + this.personMessage.areaName + '(虚拟运营商)')
//                this.$message({
//                  message: this.personMessage.provinceName + this.personMessage.areaName + '(虚拟运营商)',
//                  type: 'warning'
//                })
              }else{
                this.alertShow('客户资料不存在');
//                this.alertShow(this.personMessage.provinceName + this.personMessage.areaName + this.personMessage.corpName)
//                this.$message({
//                  message: this.personMessage.provinceName + this.personMessage.areaName + this.personMessage.corpName,
//                  type: 'warning'
//                })
              }
          }
      }
    }
  }
</script>
<style>

  .el-select-dropdown__wrap{
    max-height: 600px !important;
    /*background:#333;*/
  }

  .area-select .el-scrollbar__wrap{
    height: 600px!important;
    /*background:#333;*/
  }
</style>
<style scoped>
  .person-message{
    margin-top: 10px;
    height: 240px;
    font-weight: normal;
  }
  .person-message-item-adress{
    width: calc(100% - 30px);
    margin-left: 10px;
    margin-right: 10px;
    min-height: 40px;
    border-radius: 5px;
    padding: 5px;
    color: #D9D9D9;
    float:left;
  }
  .person-message-item{
    width: 100%;
    min-height: 26px;
    line-height: 26px;
    float:left;
    /*background:#ff00ff;*/
  }
  .person-message-text .address{
    line-height: 22px!important;
  }
  .person-message-item .icon-zeng02{
    font-size: 30px;
    position: absolute;
    right: 15%;
    top: -2px;
    color: #E37C22;
  }
  .person-message-title{
    float: left;
    width: 55px;
    padding-left: 10px;
    color: #777777;
  }
  .person-message-text{
    position: relative;
    width: 179px;
    float: left;

  }
  .address{
    line-height: 16px;
  }

  .area-select{
    width:83px;
    /*background:#333;*/
  }

  .top5{margin-top:5px;}
  .top4{margin-top:4px;}

  .phone-number-icon{
    height: 30px;
    line-height: 30px;
    position: absolute;
    left: 135px;
  }
  .phone-number-icon span{
      float: left;
      font-size: 12px;
      line-height: 28px;
  }
  .phone-number-icon div{
      width: 18px;
      height: 18px;
      line-height: 16px;
      text-align: center;
      float: left;
      font-size: 12px;
      font-weight: 100!important;
      margin-top: 6px;
      margin-left: 4px;
      background: #E07C18;
      border-radius: 5px;
      color: #ffffff;
      cursor: pointer;
  }
  .person-message-input{
    background: none;
    border: none;
    width: 134px;
    height: 24px;
    color: #FFEB00;
    font-size: 16px;
    outline:none;
    border-bottom: solid 1px #A1C1E2;
    position: absolute;
    left: 0;
  }
  .person-message-input::-webkit-input-placeholder {color: #FFEB00;}
  .person-message-input::-moz-placeholder {color: #FFEB00;} /* firefox 19+ */
  .person-message-input:-ms-input-placeholder {color: #FFEB00;} /* ie10 */
  .person-message-input:-moz-placeholder {color: #FFEB00;}
  .circleYellow{
    width: 18px;
    height: 18px;
    display: block;
    background: #E5994F;
    text-align: center;
    line-height: 16px;
    border-radius: 50%;
    font-size: 12px;
    cursor: pointer;
    float: right;
    margin-top: 3px;
    margin-right: 30px;
  }


</style>
