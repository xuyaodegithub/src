<template>
  <div class="tool-cabinet">
    <el-col :span="24">
      <div class="assets-locator-head" v-bind:style="{borderTop:'1px solid ' + sidebarPageStyle.borderTopColor}">
        <span v-bind:style="{color: sidebarPageStyle.titleColor}">工具箱</span>
        <span v-on:click="show = !show" class="button-small sidebar-button">更多</span>
      </div>
    </el-col>
    <el-col :span="24">
      <div class="tool-cabinet-box">
        <div class="tool-cabinet-item" @click="jumpPage($event,index)" v-for="(item,index) in chooseNum" v-if="item.sort==1" v-bind:style="{background: sidebarPageStyle.sunBg}" :key="item.index">
            <i class="iconfont" v-if="toolDataAllSearch[item.toolCode].title!=='一站式及公共故障'" :class="toolDataAllSearch[item.toolCode].icon"></i>
            <p>{{toolDataAllSearch[item.toolCode].title}}</p>
        </div>
        <div class="tool-cabinet-item" @click="jumpPage($event,index)" v-for="(item,index) in chooseNum" v-if="item.sort==2" v-bind:style="{background: sidebarPageStyle.sunBg}" :key="item.index">
          <i class="iconfont" v-if="toolDataAllSearch[item.toolCode].title!=='一站式及公共故障'" :class="toolDataAllSearch[item.toolCode].icon"></i>
          <p>{{toolDataAllSearch[item.toolCode].title}}</p>
        </div>
        <div class="tool-cabinet-item" @click="jumpPage($event,index)" v-for="(item,index) in chooseNum" v-if="item.sort==3" v-bind:style="{background: sidebarPageStyle.sunBg}" :key="item.index">
          <i class="iconfont" v-if="toolDataAllSearch[item.toolCode].title!=='一站式及公共故障'" :class="toolDataAllSearch[item.toolCode].icon"></i>
          <p>{{toolDataAllSearch[item.toolCode].title}}</p>
        </div>
        <div class="tool-cabinet-item" @click="jumpPage($event,index)" v-for="(item,index) in chooseNum" v-if="item.sort==4" v-bind:style="{background: sidebarPageStyle.sunBg}" :key="item.index">
          <i class="iconfont" v-if="toolDataAllSearch[item.toolCode].title!=='一站式及公共故障'" :class="toolDataAllSearch[item.toolCode].icon"></i>
          <p>{{toolDataAllSearch[item.toolCode].title}}</p>
        </div>
        <div class="tool-cabinet-item" @click="jumpPage($event,index)" v-for="(item,index) in chooseNum" v-if="item.sort==5" v-bind:style="{background: sidebarPageStyle.sunBg}" :key="item.index">
          <i class="iconfont" v-if="toolDataAllSearch[item.toolCode].title!=='一站式及公共故障'" :class="toolDataAllSearch[item.toolCode].icon"></i>
          <p>{{toolDataAllSearch[item.toolCode].title}}</p>
        </div>
        <div class="tool-cabinet-item" @click="jumpPage($event,index)" v-for="(item,index) in chooseNum" v-if="item.sort==6" v-bind:style="{background: sidebarPageStyle.sunBg}" :key="item.index">
          <i class="iconfont" v-if="toolDataAllSearch[item.toolCode].title!=='一站式及公共故障'" :class="toolDataAllSearch[item.toolCode].icon"></i>
          <p>{{toolDataAllSearch[item.toolCode].title}}</p>
        </div>
        <div class="tool-cabinet-item" @click="jumpPage($event,index)" v-for="(item,index) in chooseNum" v-if="item.sort==7" v-bind:style="{background: sidebarPageStyle.sunBg}" :key="item.index">
          <i class="iconfont" v-if="toolDataAllSearch[item.toolCode].title!=='一站式及公共故障'" :class="toolDataAllSearch[item.toolCode].icon"></i>
          <p>{{toolDataAllSearch[item.toolCode].title}}</p>
        </div>
        <div class="tool-cabinet-item" @click="jumpPage($event,index)" v-for="(item,index) in chooseNum" v-if="item.sort==8" v-bind:style="{background: sidebarPageStyle.sunBg}" :key="item.index">
          <i class="iconfont" v-if="toolDataAllSearch[item.toolCode].title!=='一站式及公共故障'" :class="toolDataAllSearch[item.toolCode].icon"></i>
          <p>{{toolDataAllSearch[item.toolCode].title}}</p>
        </div>
        <div class="tool-cabinet-item" @click="jumpPage($event,index)" v-for="(item,index) in chooseNum" v-if="item.sort==9" v-bind:style="{background: sidebarPageStyle.sunBg}" :key="item.index">
          <i class="iconfont" v-if="toolDataAllSearch[item.toolCode].title!=='一站式及公共故障'" :class="toolDataAllSearch[item.toolCode].icon"></i>
          <p>{{toolDataAllSearch[item.toolCode].title}}</p>
        </div>
      </div>
    </el-col>
    <transition name="slide-fade">
      <div v-if="show" class="tool-cabinet-choose" v-bind:style="{background: sidebarPageStyle.sidebarBg,color: '#FFFFFF'}">

        <el-col :span="24" class="head">
          <span>工具箱</span><span v-bind:style="{fontSize:'12px',color: '#D2D4D6'}">（最多选择9个工具）</span>
          <!--<div class="always-tool" v-bind:style="{border: '1px solid '+sidebarPageStyle.toolPage.smallTitle}"></div>-->
          <!--<span v-bind:style="{color: sidebarPageStyle.toolPage.smallTitle}">常用工具</span>-->
          <span class="tool-add" @click="toolAdd($event)" v-bind:style="{color: sidebarPageStyle.toolPage.smallTitle}">编辑</span>
          <i @click="closeTool()"  class="el-icon-close"></i>
        </el-col>

        <el-col class="tool-cabinet-choose-box">
          <el-col :span="24" style="padding-left: 10px;">
            <p class="tool-head" v-bind:style="{color: sidebarPageStyle.toolPage.smallTitle}">位置查询</p>
            <div class="tool-cabinet-choose-item" @click="changeToolFunA($event,index)" v-for="(item,index) in toolDataAll" :key="item.index" v-if="index<3" v-bind:style="{background: sidebarPageStyle.sunBg}">
              <i class="el-icon-circle-check make-true" v-show="item.sort !=0"></i>
              <i class="iconfont" :class="toolDataAllSearch[item.toolCode].icon" name=""></i>
              <p>{{toolDataAllSearch[item.toolCode].title}}</p>
            </div>
          </el-col>
          <el-col :span="24" style="padding-left: 10px;">
            <p class="tool-head" v-bind:style="{color: sidebarPageStyle.toolPage.smallTitle}">信息查询</p>
            <div class="tool-cabinet-choose-item" @click="changeToolFunA($event,index)" v-for="(item,index) in toolDataAll" :key="item.index" v-if="index<9 && 2<index" v-bind:style="{background: sidebarPageStyle.sunBg}">
              <i class="el-icon-circle-check make-true" v-show="item.sort !=0"></i>
              <i class="iconfont" :class="toolDataAllSearch[item.toolCode].icon" name=""></i>
              <p>{{toolDataAllSearch[item.toolCode].title}}</p>
            </div>
          </el-col>
          <el-col :span="24" style="padding-left: 10px;">
            <p class="tool-head" v-bind:style="{color: sidebarPageStyle.toolPage.smallTitle}">引导受理</p>
            <div class="tool-cabinet-choose-item" @click="changeToolFunA($event,index)" v-for="(item,index) in toolDataAll" :key="item.index" v-if="index<13 && 8<index" v-bind:style="{background: sidebarPageStyle.sunBg}">
              <i class="el-icon-circle-check make-true" v-show="item.sort !=0"></i>
              <i class="iconfont" :class="toolDataAllSearch[item.toolCode].icon" name=""></i>
              <p>{{toolDataAllSearch[item.toolCode].title}}</p>
            </div>
          </el-col>
          <el-col :span="24" style="padding-left: 10px;">
            <p class="tool-head" v-bind:style="{color: sidebarPageStyle.toolPage.smallTitle}">其他</p>
            <div class="tool-cabinet-choose-item" @click="changeToolFunA($event,index)" v-for="(item,index) in toolDataAll" :key="item.index" v-if="12<index && localChoose(item)" v-bind:style="{background: sidebarPageStyle.sunBg}">
              <i class="el-icon-circle-check make-true" v-show="item.sort !=0"></i>
              <i class="iconfont" :class="toolDataAllSearch[item.toolCode].icon" name=""></i>
              <p>{{toolDataAllSearch[item.toolCode].title}}</p>
            </div>
          </el-col>
        </el-col>
      </div>
    </transition>
  </div>
</template>
<script>
  import { mapGetters } from 'vuex'
  import { mapActions } from 'vuex'
  export default {
    data() {
      return {
        show: false,
        addAllowed: false
      }
    },
    created(){
    },
    computed: {
      ...mapGetters([
        'sidebarPageStyle','homePageStyle','toolPage','toolDataAll','toolDataAllSearch','chooseNum','token','enterCase'
      ]),
      personMessage () {
        return this.$store.state.page.sidebar.personMessage
      }
    },
    methods: {
      closeTool(){
        if(this.addAllowed){
            this.$message({
              message: '工具箱还没编辑完成',
              type: 'warning'
            });
        }else{
            this.show = !this.show
        }
      },
      localChoose(toolDataAll){
        let extObj =  eval('(' + this.enterCase.ext + ')');
        if(extObj['branchId']=='4' && toolDataAll.toolCode=='outsideSystem'){
          return true;
        }else if(extObj['branchId']!='4' && toolDataAll.toolCode=='outsideSystem'){
          return false;
        }else if(extObj['branchId']!='4' && toolDataAll.toolCode!='outsideSystem'){
          return true;
        }else{
          return true;
        }

      },
      jumpPage(event) {
        this.show = false
        let name = event.currentTarget.lastChild.innerHTML;
          if(name == '计算器'){
              if(this.$store.state.page.calculatorActive==false){
                this.$store.state.page.calculatorActive=true
              }else{
                this.$store.state.page.calculatorActive=false
              }
              document.getElementById("oldWindow").contentWindow.recordCommonTraceActionId('TN1021', '');
          }else if(name=='子产品&amp;属性'){
              this.popoverAlert('vSubassembly');
              document.getElementById("oldWindow").contentWindow.recordCommonTraceActionId('TN1019', '');
          }else if(name=='集团知识库'){
            this.knowledgeTurn('集团知识库')
            document.getElementById("oldWindow").contentWindow.recordCommonTraceActionId('TN1030', '');
          }else{
            this.$store.state.page.pageTitle.isActive=false;
            this.$store.state.page.pageTitle.changeTitle=true;
            this.$store.state.page.pageTitle.titleName= name;
            this.toolBarTagActive('');
            switch(name)
            {
              case '区域性故障':
                document.getElementById("oldWindow").contentWindow.info.BigAreaObstacleHisShow();
//         操作轨迹添加
                document.getElementById("oldWindow").contentWindow.recordCommonTraceActionId('TN1038', '');
                break;
              case '选址查询':
                document.getElementById("oldWindow").contentWindow.linguiSearch();
//         操作轨迹添加
                document.getElementById("oldWindow").contentWindow.recordCommonTraceActionId('TN1039', '');
                break;
              case 'vpn同群查询':
                document.getElementById("oldWindow").contentWindow.showVpnInfoWindow();
                break;
              case '营业厅查询':
                document.getElementById("oldWindow").contentWindow.openBusinessHallWin();
                document.getElementById("oldWindow").contentWindow.recordCommonTraceActionId('TN1023', '');
                break;
              case 'wifi热点查询':
                document.getElementById("oldWindow").contentWindow.openWifi();
                document.getElementById("oldWindow").contentWindow.recordCommonTraceActionId('TN1028', '');
                break;
              case '销售品':
                document.getElementById("oldWindow").contentWindow.openPromition();
                document.getElementById("oldWindow").contentWindow.recordCommonTraceActionId('TN1018', '');
                break;
              case 'CRM工单':
                document.getElementById("oldWindow").contentWindow.openCrmOrderTab();
                document.getElementById("oldWindow").contentWindow.recordCommonTraceActionId('TN1017', '');
                break;
              case '客户信息':
                document.getElementById("oldWindow").contentWindow.openCustomerDetailInfoTab();
//         操作轨迹添加
                document.getElementById("oldWindow").contentWindow.recordCommonTraceActionId('TN1040', '');
                break;
              case '靓号查询':
                document.getElementById("oldWindow").contentWindow.showesurfingQueryWin();
//         操作轨迹添加
                document.getElementById("oldWindow").contentWindow.recordCommonTraceActionId('TN1041', '');
                break;
              case '短信引导':
                document.getElementById("oldWindow").contentWindow.openSendSMS();
//         操作轨迹添加
                document.getElementById("oldWindow").contentWindow.recordCommonTraceActionId('TN1042', '');
                break;
              case '提醒定制':
                document.getElementById("oldWindow").contentWindow.showRemindCustomizeWin();
                document.getElementById("oldWindow").contentWindow.recordCommonTraceActionId('TN1024', '');
                break;
              case '密码服务':
                document.getElementById("oldWindow").contentWindow.pwdService();
                document.getElementById("oldWindow").contentWindow.recordCommonTraceActionId('TN1025', '');
                break;
              case '传真':
                document.getElementById("oldWindow").contentWindow.sendFax();
                document.getElementById("oldWindow").contentWindow.recordCommonTraceActionId('TN1027', '');
                break;
              case '坐席秘书':
                document.getElementById("oldWindow").contentWindow.openZxmsLink();
                document.getElementById("oldWindow").contentWindow.recordCommonTraceActionId('TN1029', '');
                break;
              case '一站式及公共故障':
                document.getElementById("oldWindow").contentWindow.openYzsLink();
                document.getElementById("oldWindow").contentWindow.recordCommonTraceActionId('TN1002', '');
                break;
              case '公告信息':
                document.getElementById("oldWindow").contentWindow.openBoardNotice();
                document.getElementById("oldWindow").contentWindow.recordCommonTraceActionId('TN1026', '');
                break;
              case '外部系统':
                document.getElementById("oldWindow").contentWindow.openWbxtLink();
                break;
              default:
            }
          }
      },
      changeToolFunA(event,num){
          if(this.addAllowed == true){
//            if(this.toolPage.chooseNum.length==0 && this.toolDataAll[num].sort=='0'){
//              this.$message({
//                message: '警告哦，多选了',
//                type: 'warning'
//              });
//            }
            this.changeToolFun(num)
          }else{
            this.jumpPage(event)
            this.show = false
          }
      },
      toolAdd(event){
          if(event.target.innerText=='编辑'){
              this.addAllowed = true;
              event.target.innerText='结束编辑';
          }else {
              this.setToolFun();
              this.$store.dispatch('saveForm',['/tool_box/?__dew_token__='+this.token,'','saveToolBoxMM']);
              event.target.innerText='编辑';
              this.addAllowed = false;
          }
      },
      ...mapActions([
        'toolBarTagActive','changeToolFun','setToolFun','popoverAlert','knowledgeTurn'
      ])
    }
  }
</script>

<style scoped>
  .tool-cabinet{
    width: 230px;
    padding: 10px;
    height: 220px;
    position: relative;
    float: left;
    font-weight: normal !important;
  }
  .el-icon-close{
    cursor: pointer;
  }
  .assets-locator-head{
    width: 230px;
    border-top: 1px solid #A1C1E2;
    height: 36px;
    line-height: 36px;
  }
  .assets-locator-head span{
    font-size: 15px;
    color: #4286B2;
  }
  .sidebar-button{
    float: right;
    margin-top: 6px;
    color: #B3DAFF !important;
    font-size: 12px;
    border: 1px solid #B3DAFF;
  }
  .tool-cabinet{
    position: relative !important;
  }
  .tool-cabinet-box{
    width: 232px;
    cursor: pointer;
    margin-left: -1px;
    display: -webkit-flex; /* Safari */
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    -ms-flex-pack: center;
    -webkit-justify-content: center;
  }
  .tool-cabinet-item{
    flex: none;
    height: 38px;
    width: 76px;
    /*text-align: center;*/
    margin-top: 1px;
    background: #262626;
    font-size: 12px;
    font-weight: normal !important;
    margin-right: 1px;

    display:flex;
    flex-direction:row;
    align-items: center;
  }
  .tool-cabinet-item i{
    cursor: pointer;
    font-size: 16px;
    margin-left:5px;
  }
  .tool-cabinet-item p{
    margin:0 5px;
    text-align: left;
  }
  .tool-cabinet-choose{
    min-width: 485px;
    height: 460px;
    background: #456F90;
    position: absolute !important;
    left: 100%;
    margin-left: 6px;
    top: -345px;
    z-index: 100;
    padding-bottom: 10px;
  }
  .tool-cabinet-choose-box{
    height: 426px;
    width: auto;
  }
  .tool-cabinet-choose .head{
    height: 34px;
    line-height: 34px;
    border-bottom: 1px solid #065279;
  }
  .tool-cabinet-choose .head span{
    margin-left: 5px;
    font-size: 14px;
  }
  .always-tool{
    width: 14px;
    height: 14px;
    display: inline-block;
    border-radius: 50%;
    margin-bottom: -3px;
  }
  .tool-add{
    cursor: pointer;
  }
  .tool-cabinet-choose .head i{
    float: right;
    margin-right: 15px;
    margin-top: 10px;
    font-size: 12px;
  }
  .tool-cabinet-choose .tool-head{
    height: 34px;
    line-height: 34px;
    font-size: 13px;
    color: #4286B2;
  }
  .tool-cabinet-choose-item{
    cursor: pointer;
    height: 60px;
    width: 76px;
    float: left;
    padding-top: 10px;
    margin-right: 1px;
    margin-top: 2px;
    text-align: center;
    background: #262626;
    font-size: 13px;
    position: relative;
  }
  .tool-cabinet-choose-item .make-true{
    position: absolute;
    top: 3px;
    right: 3px;
    font-size: 14px;
    color: #80C3FF;
  }
  .tool-cabinet-choose-item i{
    font-size: 22px;
  }
  .tool-cabinet-choose-item p{
    margin-top: 5px;
  }
  /*定义自定义功能滑动*/
  .slide-fade-enter-active {
    transition: all .3s ease;
  }
  .slide-fade-leave-active {
    transition: all .3s cubic-bezier(1.0, 0.5, 0.8, 1.0);
  }
  .slide-fade-enter, .slide-fade-leave-active {
    transform: translateX(10px);
    opacity: 0;
  }
</style>
