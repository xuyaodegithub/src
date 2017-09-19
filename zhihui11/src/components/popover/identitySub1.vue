<template>
  <div class="demo assistValidate">
    <div class="popover-head">
      <span class="title">C网辅助信息认证</span><span class="small-title"></span><i v-on:click="smallPopoverAlert()"
                                                                             class="el-icon-close"></i>
    </div>
    <div class="popover-main">
      <p class="row">
        <label class="month">通话月份：</label>
        <el-select class="select-month" v-model="selectMonth1">
          <el-option
            v-for="item in options1"
            :key="item.value"
            :label="item.label"
            :value="item.value">
          </el-option>
        </el-select>
        <label class="tel">号码一：</label>
        <el-input class="input-number" v-model="inputTel1"></el-input>
        <span class="popover-btn validate-btn" @click="checkNumber(1)">验证</span>
        <span class="right-tip" v-if="this.result1">通过</span><span class="tip" v-else>未通过</span>
      </p>
      <p class="row">
        <label class="month">通话月份：</label>
        <el-select class="select-month" v-model="selectMonth2">
          <el-option
            v-for="item in options1"
            :key="item.value"
            :label="item.label"
            :value="item.value">
          </el-option>
        </el-select>
        <label class="tel">号码二：</label>
        <el-input class="input-number" v-model="inputTel2"></el-input>
        <span class="popover-btn validate-btn" @click="checkNumber(2)">验证</span>
        <span class="right-tip" v-if="this.result2">通过</span><span class="tip" v-else>未通过</span>
      </p>
      <p class="row">
        <label class="month">通话月份：</label>
        <el-select class="select-month" v-model="selectMonth3">
          <el-option
            v-for="item in options1"
            :key="item.value"
            :label="item.label"
            :value="item.value">
          </el-option>
        </el-select>
        <label class="tel">号码三：</label>
        <el-input class="input-number" v-model="inputTel3"></el-input>
        <span class="popover-btn validate-btn" @click="checkNumber(3)">验证</span>
        <span class="right-tip" v-if="this.result3">通过</span><span class="tip" v-else>未通过</span>
      </p>
      <p class="warn">提醒：仅支持验证普通固话号码活手机号码，不支持虚拟网、亲情网等特服号码验证</p>
    </div>
    <div class="popover-bottom">
      <span class="popover-btn end-btn" @click="smallPopoverAlert()">结束验证</span>
    </div>
  </div>
</template>

<style scoped>
  .demo {
    width: 600px;
    background: #F0FAFF;
    margin-left: -300px;
    margin-top: -130px;
    border-radius: 5px;
    border: 1px solid #90CCE8;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
    overflow: hidden;
    color: #333333;
  }

  .popover-head {
    width: 100%;
    height: 40px;
    line-height: 40px;
    background: #F0FAFF;
    font-size: 14px;
    border-bottom: 1px solid #C5E2F0;
  }

  .popover-head i {
    float: right;
    color: #a1c1e2;
    font-size: 12px;
    margin-top: 13px;
    margin-right: 12px;
    cursor: pointer;
  }

  .popover-head .title {
    margin-left: 15px;
    font-weight: bold;
  }

  .popover-main {
    width: calc(100% - 15px);
    padding:10px 0 10px 15px;
    border-bottom: 1px solid #C5E2F0;
  }
  .popover-main .row{
    height: 28px;
    line-height: 28px;
    margin: 10px 0;
  }
  label.tel{
    margin-left: 30px;
  }
  .select-month{
    width: 100px;
  }
  .select-tel{
    width: 120px;
  }

  .validate-btn{
    display: inline-block;
    width: 54px;
    height: 28px;
    line-height: 28px;
    font-size: 12px;
    margin-left: 8px;
  }
  .tip{
    margin-left: 13px;
    color: #F44848;
  }
  .right-tip{
    margin-left: 13px;
    color: #34B981;
  }
  .warn{
    color: #999999;
    margin-bottom: 10px;
  }
  .popover-bottom{
    height: 60px;
  }
  .end-btn{
    float: right;
    margin:15px 15px 0 0;
    width: 80px;
    height: 30px;
  line-height: 30px;
  }
  .input-number {
    height: 28px;
    color: #333333;
    width: 150px;
  }
</style>
<style>
  .assistValidate .el-input{
    font-size: 12px;
  }
  .assistValidate .el-input__inner{
    height: 28px;
    color:#333333;
  }
  .assistValidate .el-select-dropdown__item{
    height: 28px;
    line-height: 28px;
    padding: 0 8px;
  }
</style>
<script>
  import {mapActions} from 'vuex'
  import {mapGetters} from 'vuex'
  export default {
    data() {
      return {
        input: '',
        selectMonth1: '',
        selectMonth2: '',
        selectMonth3: '',
        inputTel1: '',
        inputTel2: '',
        inputTel3: '',
        finalCheckResult : false,//最终验证验结果
        options1: [],
        result1 : false,
        result2 : false,
        result3 : false
      };
    },
    created(){
      for(let i = 0; i  < 3; i++){
        let returnDate = this.formatDate(i)
        this.options1.push({
          value: returnDate,
          label: returnDate
        })
      }
    },
    watch:{
      finalCheckResult(curVal,oldVal){
        if(curVal === true){
          //this.alertMessage("辅助验证通过",'提示信息')
          getOldWindow().refreshIdentityValidateInfo('4')
          this.updateCheckIdentityResult({
            code :'5',
            result : true,
            businessCallNumber : this.businessCallNumber
          })
          this.smallPopoverAlert()
        }
      }
    },
    methods: {
      formatDate(beforeMonth){
        let date = new Date()
        let year = date.getFullYear()
        let month = date.getMonth()+1
        let returnMonth = month - beforeMonth
        let returnDate = '';
        if(returnMonth < 0){
          returnDate = (year-1) + '/' + (12 +returnMonth)
        }else if(returnMonth == 0){
          returnDate = (year-1) + '/' + '12'
        }else if(returnMonth < 10){
          returnDate = year + '/' + '0' + returnMonth
        }else {
          returnDate = year + '/'  + returnMonth
        }
        return returnDate
      },
      checkNumber(type){
        if(((this.inputTel1 && this.inputTel2) && (this.inputTel1 === this.inputTel2))
          || ((this.inputTel1 && this.inputTel3) && (this.inputTel1 === this.inputTel3))
          || ((this.inputTel2 && this.inputTel3) && (this.inputTel2 === this.inputTel3))){
          this.alertMessage("号码不允许重复，请重填",'提示信息')
          return false;
        }
        if(type === 1){
          this.result1 = this.callOldCheckMethod(this.selectMonth1,this.inputTel1)
        }else if(type === 2){
          this.result2 = this.callOldCheckMethod(this.selectMonth2,this.inputTel2)
        }else if(type === 3){
          this.result3 = this.callOldCheckMethod(this.selectMonth3,this.inputTel3)
        }
        this.finalCheckResult = this.result1 &&this.result2 && this.result3
      },
      callOldCheckMethod(month,phone){
        if(!month){
          this.alertMessage('请选择通话月份')
          return false;
        }
        if(!(/^1(3|4|5|7|8|9)\d{9}$/.test(phone))){
          this.alertMessage("手机号码有误，请重填",'提示信息')
          return false;
        }
        let ret =  getOldWindow().validateFZInfo(month,phone);
        if(!ret){
          this.alertMessage("验证失败",'提示信息')
        }else{
          this.alertMessage("验证通过",'提示信息')
        }
        return ret;
      },
      alertMessage(content,title = '提示信息'){
        this.$alert(content, title, {
          confirmButtonText: '确定',
          callback: action => {
//            this.$message({
//              type: 'info',
//              message: `action: ${ action }`
//            });
          }
        });
      },
      close: function () {
        alert(0)
      },
      ...mapActions([
        'popoverAlert','smallPopoverAlert','updateCheckIdentityResult'
      ]),
      ...mapGetters([
        'popoverAlive'
      ])
    },
    computed: {
      ...mapGetters(['businessCallNumber'])
    }
  };
</script>
