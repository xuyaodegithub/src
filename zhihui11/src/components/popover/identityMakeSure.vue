<template>
  <div class="demo identityHand">
    <div class="popover-head">
      <span class="title" v-if="assetListIdSearchData.accountName">用户姓名确认</span><span class="small-title"></span>
      <i v-on:click="popoverAlert()" class="el-icon-close"></i>
    </div>
    <div class="popover-main">
      <p v-if="!assetListIdSearchData.accountName">该证件号码下无本省电信资产！</p>
      <p v-if="assetListIdSearchData.accountName">请确认用户姓名</p>
      <p v-if="assetListIdSearchData.accountName" class="error">{{assetListIdSearchData.accountName}}</p>
    </div>
    <div class="popover-bottom">
      <span v-if="assetListIdSearchData.accountName" class="popover-btn" @click="close(assetListIdSearchData.accountIdNumber)">
        验证通过
      </span>
      <span v-if="!assetListIdSearchData.accountName" class="popover-btn" @click="closeSure()">
        确定
      </span>
    </div>
  </div>
</template>

<style scoped>
  .demo {
    width: 230px;
    background: #F0FAFF;
    margin-left: -760px;
    margin-top: 40px;
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
    margin-left: 12px;
    font-weight: bold;
  }

  .popover-main {
    width: auto;
    padding-left: 10px;
    padding-right: 10px;
    height: 60px;
    border-bottom: 1px solid #C5E2F0;
  }

  .popover-main .input {
    display: block;
    width: 270px;
    margin: 20px auto;
  }

  .popover-main .error {
    color: #F44848;
  }

  .popover-main p {
    margin-top: 10px;
  }

  .popover-bottom{
    height: 59px;
    padding-top: 1px;
  }
  .popover-btn{
    width: 80px;
    height: 30px;
    line-height: 30px;
    margin: 14px auto 0;
  }
</style>
<style>
  .identityHand .el-input__inner {
    height: 30px;
  }
</style>
<script>
  import {mapActions} from 'vuex'
  import {mapGetters} from 'vuex'
  export default {
    data() {
      return {
        input: ''
      };
    },
    computed:{
      ...mapGetters([
        'assetListIdSearchData'
      ])
    },
    methods: {
      close: function (value) {
        this.assetLineIdSearchThen(value);
        this.popoverAlert();
      },
      closeSure: function (value) {
        this.popoverAlert();
      },
      ...mapActions([
        'popoverAlert','assetLineIdSearchThen'
      ])
    }
  };
</script>
