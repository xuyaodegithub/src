<template>
  <div class="demo cuidanDetail">
      <div class="popover-head">
          <span class="title">催单详情</span><span class="small-title"></span><i v-on:click="popoverAlert()" class="el-icon-close"></i>
      </div>
      <div class="popover-main">
        <el-table
          :data="table_cuidanDetail"
          style="width: 100%">
          <el-table-column
            prop="num"
            label="催单工号"
            width="100">
          </el-table-column>
          <el-table-column
            prop="time"
            label="催单时间"
            width="158">
          </el-table-column>
          <el-table-column
            prop="info"
            label="催单内容"
            width="310">
          </el-table-column>
        </el-table>
      </div>
  </div>
</template>

<style scoped>
  .demo{
    width: 600px;
    /*height: 300px;*/
    background: #F0FAFF;
    margin-left: -300px;
    /*margin-top: -150px;*/
    transform: translateY(-50%);
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
      margin-left: 15px;
      font-weight: bold;
  }
  .popover-main{
    width: calc(100% - 30px);
    padding: 20px 15px;
  }
</style>
<style>
  .cuidanDetail .el-table{
    font-size: 12px;
    color: #333333;
  }
  .el-table td, .el-table th{
    height: 28px;
  }
  .el-table th>.cell{
    line-height: 28px;
  }
  .el-table .cell, .el-table th>div{
    padding: 0 10px;
  }
</style>
<script>
  import { mapActions } from 'vuex'
  import { mapGetters } from 'vuex'
  export default {
    data() {
      return {
          table_cuidanDetail:[{
            num: '4036',
            time: '2017/05/04  19:32:42',
            info: '现用户要求赔偿宽带没有100M期间的费用'
          },{
            num: '4036',
            time: '2017/05/04  19:32:42',
            info: '现用户要求赔偿宽带没有100M期间的费用'
          }]
      };
    },
    methods: {
      close: function () {
        alert(0)
      },
      ...mapActions([
        'popoverAlert'
      ]),
      ...mapGetters([
        'popoverAlive'
      ])
    }
  };
</script>
