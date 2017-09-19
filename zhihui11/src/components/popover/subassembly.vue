<template>
    <div class="demo wjgd">
      <div class="popover-head">
        <span class="title">子产品</span><span class="small-title"></span><i v-on:click="popoverAlert()" class="el-icon-close"></i>
      </div>
      <div class="popover-main">
        <div class="set-meal-item set-meal-item-last" style="flex: 0 0 35px;">
          <div class="header bk-change-normal" @click="pullDown($event)" v-bind:style="homePageBorderTb+homePageBkNormal">
            <span>子产品</span><i class="el-icon-arrow-right"></i>
            <div class="sale-choose">
              <el-select v-model="allStateSub" placeholder="状态" class="state">
                <el-option
                  v-for="item in optionsThree"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value">
                </el-option>
              </el-select>
            </div>
          </div>
          <div class="inside-box">
            <div class="inside-box-item inside-box-sale" v-if="personMessage.status == allStateSub || allStateSub=='全部'">
              <p class="head red" @click="saleDown($event,'主产品',personMessage)">
                <i v-show="personMessage.productName && subOutList.indexOf(personMessage.productName)<0" class="el-icon-arrow-right"></i>
                <span v-bind:class="{marginActive: subOutList.indexOf(personMessage.productName)>0}">（{{personMessage.status}}）主@{{personMessage.productName}}</span>
                <span class="right">{{personMessage.effectiveStartDate | timeLimit}}</span>
              </p>
              <div class="inside-box-sale-text">
                <span v-for="subItem in subAssetPropertyPublic" v-html="desensitization(subItem)" @click="mixAccount(subItem)"></span>
              </div>
            </div>
            <div class="inside-box-item inside-box-sale" v-model="subAssetProperty" v-for="(item,index) in subAsset" :key="item.id" v-if="item.status == allStateSub || allStateSub=='全部'">
              <p class="head" @click="saleDown($event,'子产品',item,index)">
                <i v-show="subOutList.indexOf(item.productName)<0" class="el-icon-arrow-right"></i>
                <span v-bind:class="{marginActive: subOutList.indexOf(item.productName)>=0}">（{{item.status}}）{{item.productName}}</span>
                <span class="right">{{item.effectiveStartDate | timeLimit}}</span>
              </p>
              <div class="inside-box-sale-text">
                <p style="color: blue" v-if="item.productName=='翼聊（协同通信ECP）'" @click="turnSetMM()">重置密码</p>
                <span v-for="subItem in subAssetProperty['list'+index]" v-bind:key="subItem.id" v-bind:item="subItem">
                  {{desensitization(subItem)}}
                </span>
                <span v-if="item.productName=='天翼亲情网'">成员数：{{familyNetworkList.groupSize}}</span>
                <span v-if="familyNetworkList && item.productName=='天翼亲情网'" v-for="familyItem in familyNetworkList['familyList']">
                    成员{{familyItem.shortNo}}：{{familyItem.no}}
                </span>
                <span v-if="item.productName=='天翼亲情网'">亲情网群号：{{familyNetworkList['groupId']}}</span>
                <span v-if="item.productName=='天翼亲情网'">亲情网短号：{{familyNetworkList['shortNo']}}</span>
                <span v-if="item.effectiveEndDate">{{'失效时间: '+item.effectiveEndDate}}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

</template>
<script>
  import {mapGetters} from 'vuex'
  import {mapActions} from 'vuex'
  import api from '../../store/fetch/api'
  export default{
    data () {
      return{
        optionsOne: [{
          value: '选项1',
          label: '13398789998 - 移动号码'
        }, {
          value: '选项2',
          label: '13398789998 - 移动号码'
        }, {
          value: '选项3',
          label: '13398789998 - 移动号码'
        }, {
          value: '选项4',
          label: '13398789998 - 移动号码'
        }, {
          value: '选项5',
          label: '13398789998 - 移动号码'
        }],
        activeFreeFlex:'',
        activeSaleFlex:'',
        allNumber:'',
        allNumberStatus: false,
        allState:'有效',
        allStateSub:'现行',
        subOutList:[
          'CDMA 1X',
          '彩信',
          '短消息',
          '月帐单提醒',
          '翼支付账户',
          '普通国际长途',
          '结转流量提醒',
          '来电显示',
          '国内漫游',
          '在线VPN',
          'ISPP平台业务',
          '七彩铃音',
          '普通国内长途',
          '小灵通短信',
          '一机双号[C+P][辅]',
          '禁止国际漫游流量提醒',
          '禁止异常高额费用提醒',
          '禁止不足提醒',
          '套餐消费-定期提醒',
          '呼叫保持',
          '通信助理(C网)'
        ],
        optionsTwo: [{
          value: '全部',
          label: '全部'
        }, {
          value: '有效',
          label: '有效'
        }, {
          value: '无效',
          label: '无效'
        }],
        optionsThree: [{
          value: '全部',
          label: '全部'
        }, {
          value: '现行',
          label: '现行'
        }, {
          value: '已暂停',
          label: '已暂停'
        }, {
          value: '不活动',
          label: '不活动'
        }]
      }
    },
    computed: {
      ...mapGetters([
        'homePageBorder',
        'homePageBorderTopNone',
        'homePageBorderTb',
        'homePageBkNormal',
        'homePageButton',
        'packageCase',
        'kindName',
        'packageCasePrecision',
        'precisionButton',
        'saleProduct',
        'freeResource',
        'assetVOS',
        'subAsset',
        'token',
        'setSubAssetPropertyApi',
        'subAssetProperty',
        'subAssetPropertySelf',
        'setSubAssetPropertyNum',
        'subAssetPropertyPublic',
        'personMessage',
        'familyNetworkList'
      ])
    },
    created(){
//          this.$store.dispatch('saveForm',['/precision_marketing','GET_PRECISION_MARKETING_API','precisionMarketingMM']);
//          this.$store.dispatch('saveForm',['/sale_product','GET_SALE_PRODUCT_API','saleProductMM']);
    },
    methods: {
      ...mapActions([
        'iframeBlock','popoverAlert','saleChangeMM','getSubAssetPropertyApi','getSubAssetPropertyZhuApi','familyNetworkListActions'
      ]),
      turnSetMM(){
        this.iframeBlock('密码设置');
        document.getElementById("oldWindow").contentWindow.postPayECPSetNewPwd();
      },
      mixAccount(item){
        console.log(item)
        if(item.displayName && item.displayName.indexOf('必须桥接')>=0){
          if(!(this.personMessage.c3Name=='嘉兴市' || this.personMessage.c3Name=='绍兴市') && this.FTTH){
            this.iframeBlock('修改桥接');
            document.getElementById('oldWindow').contentWindow.changeAllowBridging(item.value)
          }
        }
        if(this.personMessage.productName && this.personMessage.productName=='ITV' && item.displayName.indexOf('分组名')>=0){
          if (item.value=='广电默认公众分组' || item.value == '农村信息化广电标清分组'||
            item.value=='默认公众分组' ||item.value=='默认政企分组' ||
            item.value=='百视通农村信息化分组' ||item.value=='酒店分组' ||
            item.value=='酒店高级分组' ||item.value=='百视通酒店高清分组') {
            this.iframeBlock('修改');
            document.getElementById('oldWindow').contentWindow.doChangeItvGroupName()
          }
        }
      },
      desensitization(item){
        if(item.displayName && item.displayName.indexOf('ICCID')>=0){
          return item.displayName+'：******';
        }else if(item.displayName && item.displayName.indexOf('IMSI码')>=0){
          return item.displayName+': ******';
        }else if(item.displayName && item.displayName.indexOf('线路类型')>=0){
          if(item.value.indexOf('FTTH')>=0){
            this.FTTH=true;
          }
          return item.displayName+'：'+item.value;
        }else if(item.displayName && item.displayName.indexOf('PUK1')>=0){
          return item.displayName+'：******';
        }else if(item.displayName && item.displayName.indexOf('PUK2')>=0){
          return item.displayName+'：******';
        }else if(item.displayName && item.displayName.indexOf('鉴权密钥')>=0){
          return item.displayName+'：******';
        }else if(item.displayName && item.displayName.indexOf('PIN2')>=0){
          return item.displayName+'：******';
        }else if(item.displayName && item.displayName.indexOf('密码')>=0){
          return item.displayName+'：******';
        }else if(item.displayName && item.displayName.indexOf('必须桥接')>=0){
          if(!(this.personMessage.c3Name=='嘉兴市' || this.personMessage.c3Name=='绍兴市') && this.FTTH){
            return '手动拨号'+'：'+item.value+'  <a>修改</a>';
          }
        }else if(this.personMessage.productName && this.personMessage.productName=='ITV' && item.displayName.indexOf('分组名')>=0){
          if (item.value=='广电默认公众分组' || item.value == '农村信息化广电标清分组'||
            item.value=='默认公众分组' ||item.value=='默认政企分组' ||
            item.value=='百视通农村信息化分组' ||item.value=='酒店分组' ||
            item.value=='酒店高级分组' ||item.value=='百视通酒店高清分组') {
            return item.displayName+'：'+item.value+'  <a>修改</a>';
          }
        }else{
          return item.displayName+'：'+item.value;
        }
      },
      pullDown: function (event) {
        if($(event.target).closest('.sale-choose').length <= 0){
          let dom = event.currentTarget;
          let iDom = dom.getElementsByClassName('el-icon-arrow-right')[0];
          if(iDom.getAttribute('class')=='el-icon-arrow-right'){
            iDom.setAttribute('class','el-icon-arrow-right active');
            var item = iDom.parentNode.parentNode.parentNode.getElementsByClassName('set-meal-item');
            for(var i=0;i<item.length;i++){
              if(item[i].style.flex=="1 0 auto"){
                item[i].style.flex="0 0 36px";
                item[i].getElementsByTagName('i')[0].setAttribute('class','el-icon-arrow-right')
              }
            }
            dom.parentNode.style.flex="1 0 auto"
          }else{
          }
        }
      },
      saleDown: function (event,name,item,index) {

        console.log(event.target.tagName)
        $('.inside-box-item .inside-box-sale inside-box-sale-active').attr('class','inside-box-item inside-box-sale');
        if(item){
          if(this.subOutList.indexOf(item.productName)<0){
            if(event.currentTarget.parentNode.className == 'inside-box-item inside-box-sale'){
              if(name=='子产品'){
                this.$store.state.editor.setSubAssetPropertyNum=index;
                this.$store.dispatch('setSubAssetPropertyApi',item);
                if(item.productName=='天翼亲情网'){
                  this.familyNetworkListActions();
                }
                api.widgetApi('/sub_assetProperty/?__dew_token__='+this.token,this.$store.state.editor.getSubAssetPropertyMM).then(
                  res=>{
                    this.getSubAssetPropertyApi(res);
                    if(res.body.data.properties.length=='0'){

                    }else{
                      if(event.target.tagName=='I' || event.target.tagName=='SPAN'){
                        console.log(event.target.parentNode.parentNode)
                        event.target.parentNode.parentNode.style.height='auto';
                        event.target.parentNode.parentNode.className='inside-box-item inside-box-sale inside-box-sale-active';
                        console.log(event.target)
                      }else if(event.target.tagName=='P'){
                        console.log(event.target.parentNode)
                        event.target.parentNode.style.height='auto';
                        event.target.parentNode.className='inside-box-item inside-box-sale inside-box-sale-active';
                      }
//                      for(item in event.path){
//                        if (event.path[item].className=='inside-box-item inside-box-sale'){
//                          console.log(event.path[item])
//                          event.path[item].style.height='auto';
//                          event.path[item].className='inside-box-item inside-box-sale inside-box-sale-active';
//                        }
//                      }
                    }
                  }
                )
              }
              if(name=='主产品'){
                this.$store.dispatch('setSubAssetPropertyZhuApi');
                api.widgetApi('/sub_assetProperty/?__dew_token__='+this.token,this.$store.state.editor.getSubAssetPropertyMM).then(
                  res=>{
                    this.getSubAssetPropertyZhuApi(res);
                    if(res.body.data.properties.length=='0'){

                    }else{

                      if(event.target.tagName=='I' || event.target.tagName=='SPAN'){
                        console.log(event.target)
                        event.target.parentNode.parentNode.style.height='auto';
                        event.target.parentNode.parentNode.className='inside-box-item inside-box-sale inside-box-sale-active';
                        console.log(event.target)
                      }else if(event.target.tagName=='P'){
                        event.target.parentNode.style.height='auto';
                        event.target.parentNode.className='inside-box-item inside-box-sale inside-box-sale-active';
                      }
//                      for(item in event.path){
//                        if (event.path[item].className=='inside-box-item inside-box-sale'){
//
//                          event.path[item].style.height='auto';
//                          event.path[item].className='inside-box-item inside-box-sale inside-box-sale-active';
//                        }
//                      }
                    }
                  }
                );
              }
            }else{
              event.currentTarget.parentNode.style.height='24px';
              event.currentTarget.parentNode.className='inside-box-item inside-box-sale';
            }

          }
        }
      },
    },
    watch:{
    },
    filters:{
      numToString: function (val) {
        let ary = ['账务查询','故障专区','故障申告','咨询受理','投诉建议','账务专区和营销专区','营销专区','推送解锁','宽带新装','ITV故障专区','同步服务状态','密码验证和故障专区','派故障单和宽带故障专区','一键修复和宽带故障专区'];
        if( val >= 0 && val <ary.length){
          return ary[val - 1]
        }else{
          return val
        }
      }
    }
  }
</script>
<style scoped>
  .demo{
    width: 700px;
    height: auto;
    background: #F0FAFF;
    margin-left: -350px;
    margin-top: -230px;
    border-radius: 5px;
    border: 1px solid #90CCE8;
    box-shadow: 0 0 10px rgba(0,0,0,0.2);
    overflow: hidden;
    color: #333333;
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
  }
  .popover-head .title{
    margin-left: 12px;
    font-weight: bold;
  }
  .popover-main{
    height: 500px;
    border-bottom: 1px solid #C5E2F0;
    padding: 10px 0;
  }
  .popover-main .row{
    margin: 10px 0 10px 15px;
  }
  .popover-main .row .txt{
    display: block;
    width: 60px;
    float: left;
    line-height: 28px;
  }
  .popover-main .el-input{
    width: 120px;
    font-size: 12px;
  }
  .popover-main .el-textarea{
    width: 205px;
  }
  .popover-btn{
    width: 80px;
    height: 30px;
    line-height:30px;
    margin: 15px auto;
    font-size: 12px;
  }

  .package-case{
    width: 100%;
    height: 100%;
    margin-top: 10px;
  }

  .package-case-state-all{
    display: -webkit-flex; /* Safari */
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    flex-wrap: wrap;
    background: #ffffff;
    width: 100%;
    height: 454px;
    overflow: hidden;
  }

  /* 左部面板 */
  .less-left{
    flex: 1;
    border: 1px solid #B2DAFF;
  }
  .package-case-state{
    width: 100%;
    height: 100%;
    overflow-y: auto !important;

  }
  .state-item{
    width: 100%;
    height: 150px !important;
  }
  .item-sun .header{
    width: auto;
    position: relative;
    height: 35px;
    line-height: 35px;
    background: url("../../assets/img/linearBg.jpg") center top repeat;
    background-size: 100% 100%;
  }
  .set-meal-item{
  }
  .set-meal-item .header{
    background: url("../../assets/img/linearBg.jpg") center top repeat;
    background-size: 100% 100%;
  }
  .warn .item-sun .header{
    margin-right: 0;
  }
  /*.warn .item-sun .header{*/
  /*background: url("../../assets/img/linear_red.jpg") center top repeat;*/
  /*background-size: 100% 100%;*/
  /*}*/
  .normal .item-sun{
  }
  .normal .item-sun .header{
    background: #FAFDFF;
  }
  .item-sun .header .title{
    float: left;
    color: #333333;
    margin-left: 10px;
    font-weight: bold;
    font-size: 14px;
  }
  .item-sun .header .small-title-right{
    font-size: 13px;
    position: absolute;
    right: 30px;
    margin-right: 24px;
    color: #666666;
  }
  .item-sun .header .small-title-right span{
    color: #F71818;
  }
  .item-sun .header .small-title{
    font-size: 14px;
    float: left;
    color: #333333;
    margin-left: 10px;
  }
  .item-sun .header .small-title div{
    color: #F71818;
    width: 14px;
    height: 14px;
    line-height: 12px;
    text-align: center;
    background: #66B8FF;
    border-radius: 7px;
    margin-top: 11px;
  }
  .item-sun .header .small-title div span{
    font-size: 12px;
    color: #ffffff;
    font-weight: 100;
  }
  .item-sun{
    width: 100%;
    height: 100%;
    float: left;
    overflow: hidden;
  }
  .turn-button{
    float: right;
  }
  .turn-button i{
    margin-right: 5px;
    color: #B2DAFF;
    cursor: pointer;
  }
  .item-sun .text{
    width: 100%;
    height: 100%;
    float: left;
    position: relative;
  }
  .item-sun .text .text-sun-all{
    position: absolute;
    width: 100%;
    display: flex;
    height: 100%;
    flex-direction: row;
    transition: all 0.2s ease;
    left: 0;
  }
  .text .text-sun-all .text-sun{
    flex: 0 0 100%;
    width: 100%;
    height: 110px;
    float: left;
    overflow-y: auto;
  }
  .warn .text-sun .title{
    color: #F71818;
  }
  .text-sun .title{
    color: #1476CC;
    font-size: 15px;
    height: 40px;
    line-height: 40px;
    padding-left: 20px;
    padding-right: 20px;
  }
  .text-sun .text-area{
    color: #333333;
    font-size: 13px;
    line-height: 20px;
    padding-left: 20px;
    padding-right: 20px;
  }
  .text-sun .text-area a{
    cursor: pointer;
    color: #1476CC;
  }
  .text-sun .button{
    font-size: 16px;
    margin-top: 10px;
    padding-left: 20px;
    padding-right: 20px;
  }
  .text-sun .button span{
    margin-right: 10px;
  }
  .text-sun button{
    background: #63ADE3;
    color: #ffffff;
  }

  /* 右部面板 */
  .set-meal{
    width: 100%;
    color: #333333;
    height: 100%;
  }
  .set-meal-item{
    position: relative;
    width: 100%;
    height: 100%;
  }
  .set-meal-item .header{
    width: auto;
    height: 35px;
    line-height: 35px;
    padding-left: 10px;
    padding-right: 10px;
  }
  .set-meal-item .header .active{
    transform: rotate(90deg) !important;
  }
  .set-meal-item .header i{
    color: #1D9BD9;
    font-size: 14px;
    float: right;
    margin-top: 10px;
    transition: all 0.3s ease;
  }
  .set-meal-item .header span{
    font-size: 14px;
    font-weight: bold;
    position: relative;
    color: #1D9BD9;
  }
  .set-meal-item .inside-box{
    width: 100%;
    height: 90%;
  }
  .set-meal-item .inside-box .inside-box-item{
    width: 96%;
    margin-left: 2%;
    margin-top: 5px;
    height: 35px;
    line-height: 35px;
    border-radius: 5px;
    overflow: hidden;
    border: 1px solid #E5E5E5;
  }
  .set-meal-item .inside-box .inside-box-sale{
    border: none;
    height: 24px;
    line-height: 24px !important;
  }
  .set-meal-item .header .sale-choose{
    width: auto;
    height: 37px;
    float: right;
    margin-right: 10px;
  }
  .set-meal-item .header .sale-choose .el-input{
    height: 37px;
    padding-top: 5px;
  }
  .set-meal-item .header .sale-choose .el-select{
    height: 37px;
    padding: 0;
  }
  .set-meal-item .header .sale-choose .number{
    width: 165px;
  }
  .set-meal-item .header .sale-choose .state{
    width: 75px;
  }
  .set-meal-item .header .sale-choose .el-input i{
    height: 24px;
    padding: 0;
    margin-top: 5px;
    width: 22px;
  }
  .set-meal-item .header .sale-choose .el-input{
    padding: 0;
    margin: 0;
    width: auto;
    height: 24px;
  }
  .set-meal-item .header .sale-choose .el-input input{
    height: 24px !important;
    font-size: 12px;
    padding-right: 16px;
    padding-left: 5px;
  }
  .set-meal-item .inside-box .inside-box-sale i{
    font-size: 12px !important;
    font-weight: bolder;
    color: #1592E6;
    transition: transform 0.3s ease;

  }
  .set-meal-item .inside-box .inside-box-sale .head{
    color: #333333;
    font-size: 12px;
  }
  .set-meal-item .inside-box .inside-box-sale .red{
    color: #F71818 !important;
  }
  .set-meal-item .inside-box .inside-box-sale .gray{
    color: #666666 !important;
  }
  .set-meal-item .inside-box .inside-box-sale .head .right{
    float: right;
  }
  .set-meal-item .inside-box .inside-box-sale .inside-box-sale-text{
    min-height: 60px;
    padding-left: 10px;
    padding-top: 4px;
    padding-bottom: 4px;
    padding-right: 10px;
    width: auto;
    background: #F5F5F5;
  }
  .set-meal-item .inside-box .inside-box-sale .inside-box-sale-text span{
    min-width: 49%;
    display: inline-block;
    height: 20px;
    line-height: 20px !important;
    margin: 0;
    padding: 0;
  }
  .set-meal-item .inside-box .inside-box-sale-active i{
    transform:rotate(90deg);
    -ms-transform:rotate(90deg); 	/* IE 9 */
    -moz-transform:rotate(90deg); 	/* Firefox */
    -webkit-transform:rotate(90deg); /* Safari 和 Chrome */
    -o-transform:rotate(90deg); 	/* Opera */
  }
  .set-meal-item .inside-box .inside-box-sale-active i{
    font-size: 12px !important;
    font-weight: bolder;
    color: #1592E6;
  }
  .inside-box .inside-box-item .inside-box-item-header{
    width: auto;
    height: 35px;
    line-height: 35px;
    padding-right: 8px;
    background: url("../../assets/img/linear_gray.jpg") center top repeat;
    background-size: 100% 100%;
    padding-left: 8px;
  }
  .flow-all{
    font-size: 12px !important;
    margin-left: 10px;
    color: #333333;
    font-weight: normal;
    min-width: 70px;
  }
  .flow-less{
    font-size: 12px !important;
    margin-left: 10px;
    color: #666666;
    min-width: 70px;
    font-weight: normal;
  }
  .flow-less a{
    color: #FF8000;
  }
  .flow-over{
    font-size: 13px !important;
    margin-left: 10px;
    color: #EB2D2D;
    font-weight: normal;
    min-width: 70px;
  }
  .inside-box .inside-box-item .inside-box-item-header .iconfont{
    color: #1D9BD9;
    float: left;
    font-size: 16px;
    width: 18px;
    font-weight: 100;
    text-align: center;

  }
  .inside-box .inside-box-item .inside-box-item-header .icon-yuyin-copy{
    color: #1D9BD9;
    float: left;
    font-size: 14px;
    width: 16px;
    /*font-weight: bolder;*/
  }
  .inside-box .inside-box-item .inside-box-item-header .icon-youjian{
    font-size: 14px;
    width: 16px;
  }
  .inside-box .inside-box-item .inside-box-item-header .el-icon-arrow-right{
    color: #95989A;
    float: right;
    font-size: 13px;
    margin-top: 10px;
    transition: all 0.3s ease;
  }
  .inside-box .inside-box-item .inside-box-item-header .active-right-icon{
    transform:rotate(90deg);
    -ms-transform:rotate(90deg); 	/* IE 9 */
    -moz-transform:rotate(90deg); 	/* Firefox */
    -webkit-transform:rotate(90deg); /* Safari 和 Chrome */
    -o-transform:rotate(90deg); 	/* Opera */
  }
  .inside-box .inside-box-item .inside-box-item-header span{
    float: left;
    font-size: 14px;
    font-weight: bold;
    position: relative;
  }
  .set-meal-item-last{
    margin-bottom: 0;
  }
  .inside-box .inside-box-item .inside-box-item-box{
    height: 125px;
    overflow: auto;
    width: auto;
    border-bottom-right-radius: 5px;
    border-bottom-left-radius: 5px;
  }
  .inside-box .inside-box-item .inside-box-item-box .inside-box-details{
    width: auto;
    height: auto;
    padding-left: 10px;
    padding-right: 10px;
  }
  .inside-box-item-box .inside-box-details .details-header{
    width: auto;
    height: 30px;
    line-height: 30px;
  }
  .inside-box-details-member{
    width: auto;
    height: 20px;
    overflow: hidden;
  }
  .inside-box-details-member-header{
    color: #1476CC;
  }
  .inside-box-details-member-header i{
    margin-right: 2px;
    transition: all .3s ease;
  }
  .inside-box-details-member i.active{
    transform:rotate(90deg);
    -ms-transform:rotate(90deg); 	/* IE 9 */
    -moz-transform:rotate(90deg); 	/* Firefox */
    -webkit-transform:rotate(90deg); /* Safari 和 Chrome */
    -o-transform:rotate(90deg); 	/* Opera */
  }
  .inside-box-item-box .inside-box-details .details-header{
    width: auto;
    height: 30px;
    line-height: 30px;
  }
  .inside-box-item-box .inside-box-details p{
    margin-left: 21px;
  }
  .inside-box-item-box .inside-box-details .details-header .details-header-num{
    width: 16px;
    height: 16px;
    line-height: 16px;
    text-align: center;
    background: #FF9933;
    float: left;
    border-radius: 50%;
    color: #ffffff;
    margin-top: 7px;
    margin-right: 5px;
  }
  .inside-box .inside-box-item .inside-box-item-box .inside-box-details p{
    line-height: 20px;
  }
  /* 自定义 scroll-bar */
  ::-webkit-scrollbar
  {
    width: 6px;
    height: 16px;
    position: fixed;
    background: none !important;
  }

  /*定义滚动条轨道 内阴影+圆角*/
  ::-webkit-scrollbar-track
  {
    background: none !important;
  }

  /*定义滑块 内阴影+圆角*/
  ::-webkit-scrollbar-thumb
  {
    border-radius: 10px;
    background-color: #C5C7CB;
  }

</style>
