<template>
  <div class="demo">
      <div class="popover-head">
          <span class="title">接话统计</span><span class="small-title"></span><i v-on:click="popoverAlert()" class="el-icon-close"></i>
      </div>
      <div class="popover-main">
        <p>
          <span>当天接话量: </span>
          <span v-if="StaffStatInfo['FILELOC']">{{StaffStatInfo['FILELOC'].countTimes}}</span>
          <i @click="refreshStatistics()" class="iconfont icon-shuaxin" style="float: right;color: #1D9BD9;cursor: pointer"></i><span style="float: right;color: #1D9BD9;cursor: pointer" @click="refreshStatistics()" class="shuaxin">刷新</span>
        </p>
        <p>
          <span>个人重复率 (当日) %: </span>
          <span v-if="StaffStatInfo['SATISFIED']!='null'">{{StaffStatInfo['FILELOC'].countTimes==0?0:((StaffStatInfo['FILELOC'].countTimes - StaffStatInfo['FILELOC'].discount)/StaffStatInfo['FILELOC'].countTimes*100).toFixed(2)}}</span>
        </p>
        <p>
          <span>平均话务时长: </span>
          <span v-if="StaffStatInfo['FILELOC']">
            {{StaffStatInfo['FILELOC'].countTimes == 0?'0分0秒': parseInt(StaffStatInfo['FILELOC'].countTimes==0?0:(parseInt(StaffStatInfo['FILELOC'].duration / StaffStatInfo['FILELOC'].countTimes))/60) + '分' + (parseInt(StaffStatInfo['FILELOC'].duration / StaffStatInfo['FILELOC'].countTimes)%60) + '秒'}}
          </span>
        </p>
        <p>
          <span>当天小休累计时长: </span>
          <span v-if="StaffStatInfo['REST']">
            {{StaffStatInfo['REST'].duration == 0?'0分0秒': parseInt(StaffStatInfo['REST'].duration/60) + '分' + (StaffStatInfo['REST'].duration % 60) + '秒'}}
          </span>
        </p>
        <p>
          <span>当天小休次数: </span>
          <span v-if="StaffStatInfo['REST']">{{StaffStatInfo['REST'].countTimes}}</span>
        </p>
        <p>
          <span>当天示忙时长: </span>
          <span v-if="(StaffStatInfo['BUSY'].duration - StaffStatInfo['REST'].duration)>0">{{parseInt((StaffStatInfo['BUSY'].duration - StaffStatInfo['REST'].duration)/60) + '分' + ((StaffStatInfo['BUSY'].duration - StaffStatInfo['REST'].duration) % 60) + '秒'}}</span>
          <span v-if="(StaffStatInfo['BUSY'].duration - StaffStatInfo['REST'].duration)<=0">0分0秒</span>
        </p>
        <p>
          <span>平均小结时长: </span>
          <span v-if="StaffStatInfo['SUMMARY']">
            {{
              (StaffStatInfo['SUMMARY'].countTimes==0?0:(parseInt(StaffStatInfo['SUMMARY'].duration / StaffStatInfo['SUMMARY'].countTimes)))== 0?'0分0秒': parseInt((StaffStatInfo['SUMMARY'].countTimes==0?0:(parseInt(StaffStatInfo['SUMMARY'].duration / StaffStatInfo['SUMMARY'].countTimes)))/60) + '分' + ((StaffStatInfo['SUMMARY'].countTimes==0?0:(parseInt(StaffStatInfo['SUMMARY'].duration / StaffStatInfo['SUMMARY'].countTimes))) % 60) + '秒'
            }}
           </span>
        </p>
        <p>
          <span>用户满意度参评个数: </span>
          <span v-if="StaffStatInfo['ALLSATISFIED']">{{StaffStatInfo['ALLSATISFIED'].countTimes}}</span>
        </p>
        <p>
          <span>客服代表不满意个数: </span>
          <span v-if="StaffStatInfo['SATISFIED']">{{StaffStatInfo['SATISFIED'].countTimes}}</span>
        </p>
        <p>
          <span>客服代表不满意率(当日/当月)%: </span>
          <span v-if="StaffStatInfo['ALLSATISFIED']">
            {{StaffStatInfo['ALLSATISFIED'].countTimes==0?'0':(StaffStatInfo['SATISFIED'].countTimes/StaffStatInfo['ALLSATISFIED'].countTimes*100).toFixed(2)}}/
            {{StaffStatInfo['ALLSATISFIEDOFMONTH'].countTimes==0?'0':(StaffStatInfo['SATISFIEDOFMONTH'].countTimes/StaffStatInfo['ALLSATISFIEDOFMONTH'].countTimes*100).toFixed(2)}}
          </span>
        </p>
      </div>
  </div>
</template>

<style scoped>
  .demo{
    width: 300px;
    height: 300px;
    background: #F0FAFF;
    margin-left: -150px;
    margin-top: -150px;
    border-radius: 5px;
    box-shadow: 0 0 10px rgba(0,0,0,0.2);
    overflow: hidden;
    color: #333333;
  }
  .popover-head .el-icon-close{
    color: #A1C1E2;
   }
  .popover-head{
    background: #F0FAFF;
    width: 100%;
    height: 40px;
    line-height: 40px;
    font-size: 14px;
    border-bottom: 1px solid #C5E2F0;
  }
  .popover-head i{
      float: right;
      color: #CECECE;
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
    width: calc(100% - 20px);
    height: calc(260px - 17px);
    padding: 20px 0 0 17px;
  }
  .popover-main p{
    line-height: 22px;
    font-size: 12px;
    font-family: "Microsoft YaHei", Arial, STHeiTi, sans-serif;
  }
  .popover-main p .number{
    color: #2099d8;
  }
</style>
<script>
  import { mapActions } from 'vuex'
  import { mapGetters } from 'vuex'
  export default {
    data() {
      return {
          items: [
            '当天接话量',
            '个人重复率 (当日) %',
            '平均话务时长',
            '当天小休累计时长',
            '当天小休次数',
            '当天示忙时长',
            '平均小结时长',
            '用户满意度参评个数',
            '客服代表不满意个数',
            '客服代表不满意率(当日/当月)%'
          ]
      };
    },
    computed:{
      ...mapGetters([
         'StaffStatInfo'
      ])
    },
    methods: {
      close: function () {
        alert(0)
      },
      ...mapActions([
        'popoverAlert','refreshStatistics'
      ])
    }
  };
</script>
