<template>
  <div class="demo qyxgz">
    <div class="popover-head">
      <span class="title">区域性故障历史查询</span><span class="small-title"></span><i v-on:click="popoverAlert()"
                                                                              class="el-icon-close"></i>
    </div>
    <div class="popover-main">
      <div class="condition-box">
        <label>宽带账号/业务号码</label>
        <el-select class="query_num" v-model="query.num" placeholder="请选择">
          <el-option
            v-for="item in options"
            :key="item.value"
            :label="item.label"
            :value="item.value">
          </el-option>
        </el-select>
        <label>开始日期</label>
        <el-date-picker type="date" placeholder="选择日期" v-model="query.begin"></el-date-picker>
        <label>结束日期</label>
        <el-date-picker type="date" placeholder="选择日期" v-model="query.end"></el-date-picker>
        <span class="popover-btn">查询</span>
      </div>
      <el-table
        :data="tableData3">
        <el-table-column
          prop="num"
          label="账号"
          width="74">
        </el-table-column>
        <el-table-column
          prop="begin"
          label="开始时间"
          width="115">
        </el-table-column>
        <el-table-column
          prop="end"
          label="恢复时间"
          width="115">
        </el-table-column>
        <el-table-column
          prop="type"
          label="设备类型"
          width="48">
        </el-table-column>
        <el-table-column
          prop="address"
          label="地区"
          width="36">
        </el-table-column>
      </el-table>
      <div class="pageing-box">
        <span class="left">显示1- 4条，共4条</span>
        <span class="right">
          <i class="iconfont icon-dL"></i><i class="iconfont icon-toLeft"></i>
          <span>第<span class="square-box">1</span>页，共1页</span>
          <i class="iconfont icon-toRight"></i><i class="iconfont icon-dR"></i>
        </span>
      </div>
    </div>
  </div>
</template>

<style scoped>
  .demo {
    width: 900px;
    /*height: 300px;*/
    background: #F0FAFF;
    margin-left: -450px;
    margin-top: -350px;
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
    color: #A1C1E2;
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
    padding: 0 15px;
  }

  .popover-main .condition-box {
    padding: 20px 0 12px 0;
  }

  .condition-box .query_num {
    width: 175px;
    margin: 0 15px 0 10px;
  }

  .condition-box .el-date-editor {
    width: 109px !important;
    margin: 0 15px 0 10px;
  }

  .condition-box .popover-btn {
    display: inline-block;
    width: 54px;
    height: 28px;
    line-height: 28px;
    font-size: 12px;
  }
  .pageing-box{
    margin: 15px 0 19px 0;
    height: 28px;
    line-height: 28px;
  }
  .pageing-box .left{
    float: left;
  }
  .pageing-box .right{
    float: right;
  }
  .pageing-box .icon-toLeft,.icon-toRight{
    margin: 0 9px;
  }
  .pageing-box .square-box{
    display: inline-block;
    width: 36px;
    height: 28px;
    line-height: 28px;
    text-align: center;
    color: #1D9BD9;
    border: 1px solid #E5E5E5;
    background: #ffffff;
    margin: 0 4px;
  }
</style>
<style>
  .qyxgz .el-input {
    font-size: 12px;
  }

  .qyxgz .el-input__inner {
    height: 28px;
  }

  .qyxgz .el-input__icon {
    width: 13px;
    right: 8px;
  }

  .qyxgz .el-date-picker {
  }

  .qyxgz .el-input__icon + .el-input__inner {
    padding-right: 22px;
  }

  .qyxgz .el-table{
    height: 480px;
    font-size: 12px;
  }
  .qyxgz .el-table__header{
    width: 869px!important;
  }
  .qyxgz .el-table__body{
    width: 869px!important;
  }
</style>
<script>
  import {mapActions} from 'vuex'
  import {mapGetters} from 'vuex'
  export default {
    data() {
      return {
        query: {
          num: '',
          begin: '',
          end: ''
        },
        options: [{
          value: '057188989887（现行）',
          label: '057188989887（现行）'
        }, {
          value: '546544444',
          label: '546544444'
        }],
        tableData3: [{
          num: '13398789998',
          begin: '2017/05/04  19:32:42',
          end: '2017/05/04  19:32:42',
          type: '固话',
          address: '杭州市'
        },{
          num: '13398789998',
          begin: '2017/05/04  19:32:42',
          end: '2017/05/04  19:32:42',
          type: '固话',
          address: '杭州市'
        },{
          num: '13398789998',
          begin: '2017/05/04  19:32:42',
          end: '2017/05/04  19:32:42',
          type: '固话',
          address: '杭州市'
        },{
          num: '13398789998',
          begin: '2017/05/04  19:32:42',
          end: '2017/05/04  19:32:42',
          type: '固话',
          address: '杭州市'
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
