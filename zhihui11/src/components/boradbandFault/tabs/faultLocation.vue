<template>
  <div class="fault-location">             <!-- -----故障定位 块--- -->
    <div class="location-title">
      <i class="iconfont icon-dingwei2 handling-img blue"></i>
      <span class="plate-title lh24 left4 floatleft">故障定位</span>
    </div>
    <div class="location-content">
      <div class="select-block">
        <span class="typeface lh40 floatleft">错误代码：</span>
        <div class="floatleft">
          <el-select v-model="pre_select_error_code" placeholder="请选择" style="width:180px;" @visible-change="changeFaultCode">
            <el-option
              v-for="(item,index,key) in queryQuestionByTypeCode"
              :key="key"
              :label="index"
              :value="index">
            </el-option>
          </el-select>
        </div>
        <span class="typeface lh40 floatleft left20">错误现象：</span>
        <div class="floatleft">
          <el-select v-model="pre_select_error_phenomenon" placeholder="请选择" style="width:180px;" @visible-change="changeFaultPhenomenon">
            <el-option
              v-for="(item,index,key) in queryQuestionByTypePhenomenon"
              :key="key"
              :label="index"
              :value="index">
            </el-option>
          </el-select>
        </div>

      </div>

      <div class="question-block">
        <div class="question" v-if="questionListOne">
          <p class="smallface" v-if="questionListOne.faultLocationText">{{questionListOne.faultLocationText}}</p>
          <p class="smallface" v-if="questionListOne.faultContent">{{questionListOne.faultContent}}</p>
          <div class="question-list" v-if="itemSun.faultLocationOptionName && questionListOne.optionList" v-for="(itemSun,key) in questionListOne.optionList" @key="key">
            <el-radio-group v-model="radio" @change="turnQuestion(key)">
              <el-radio :label="key" v-model="itemSun.isRoute">{{itemSun.faultLocationOptionName}}</el-radio>
            </el-radio-group>
          </div>
        </div>

      </div>

      <div class="question-block">
        <div class="question" v-if="queryQuestionById">
          <p class="smallface" v-if="questionListOne.faultLocationText">{{questionListOne.faultLocationText}}</p>
          <p class="smallface" v-if="questionListOne.faultContent">{{questionListOne.faultContent}}</p>
          <div class="question-list" v-if="queryQuestionById.hasNext=='1' && queryQuestionById.optionList" v-for="(itemSun,key) in queryQuestionById.optionList" @key="key">
            <el-radio-group v-model="radio2" @change="turnQuestionTwo(key)">
              <el-radio :label="key" v-model="itemSun.isRoute">{{itemSun.faultLocationOptionName}}</el-radio>
            </el-radio-group>
          </div>
        </div>
      </div>

    </div>
  </div>
</template>

<style scoped>
  /*字体相关---*/
  .plate-title{
    font-size:14px;
    font-family: Helvetica Neue,"微软雅黑","黑体";
    color:#333;
  }
  .small-title{
    font-size:12px;
    font-family: Helvetica Neue,"微软雅黑","黑体";
    color:#1476CC;
  }
  .typeface{
    font-size:12px;
    font-family: Helvetica Neue,"微软雅黑","黑体";
    color:#333;       /*通用字的颜色默认为#333 修改额外添加 */
    margin-left:10px; /*通用字距离左边默认为10px 修改额外添加 */
  }
  .smallface{
    font-size:12px;
    font-family: Helvetica Neue,"微软雅黑","黑体";
    color:#333;       /*通用字的颜色默认为#333 修改额外添加 */
  }

  .lh40{  line-height:40px;  }
  .lh24{  line-height:24px;  }


  /*字体相关---完*/



  /* 公共----*/

  .left20{  margin-left:20px;  }
  .left4{margin-left:4px;}
  .top8{  margin-top:8px;  }
  .top5{  margin-top:5px;  }
  .floatleft{  float:left;  }
  .floatright{  float:right;  }

  .blue{
    color:#33A0FF;
  }

  .handling-img{
    float:left;
    font-size:20px;
    /*background:#1c8de0;*/
  }


  .fault-location{
    flex:1;

    display: flex;
    flex-direction:column;
  }

  .location-title{
    flex:35;
  }
  .location-content{
    flex:200;

    display: flex;
    flex-direction:column;
  }

  .select-block{
    flex:45;

  }

  .question-block{
    flex:159;
    overflow-x: hidden;
    overflow-y:auto;
    margin-top:10px;

    /*display:flex;*/
    /*flex-direction:column;*/
  }

  .question{
    flex:1;
    margin-bottom:10px;
  }
  .question .question-list{
    width: auto;
    float: left;
    margin-right: 10px;
    height: 30px;
    line-height: 30px;
  }

  .radioo{
    margin-top:5px;
  }



</style>
<script>
  import {mapActions} from 'vuex'
  import {mapGetters} from 'vuex'
  export default {
    data() {
      return {
        pre_select_error_code:'',
        pre_select_error_phenomenon:'',

        radio:'',
        radio2:'',
        net_radio:'1',
        alone_radio:'',
        alone_radio2:'',
        alone_radio3:''
      };
    },
    activated(){
      this.queryQuestionByTypeActions();
    },
    computed:{
      ...mapGetters([
        'queryBroadbandInfo',
        'questionListOne',
        'queryQuestionById',
        'dealWayTwo',
        'queryQuestionByTypePhenomenon',
        'queryQuestionByTypeCode',
        'routerChooseStatus'
      ])
    },
    methods: {
      ...mapActions([
        'questionListNext',
        'questionListTwoNext',
        'queryQuestionByTypeActions',
        'questionListChooseNext'
      ]),
      changeFaultCode(val){
        if(val){

        }else{
          let name='code';
          this.pre_select_error_phenomenon='';
          this.questionListChooseNext([name,this.pre_select_error_code]);
        }
      },
      changeFaultPhenomenon(val){
        if(val){

        }else{
          let name='phenomenon';
          this.pre_select_error_code=''
          this.questionListChooseNext([name,this.pre_select_error_phenomenon]);
        }
      },
      turnQuestion(value){
        if(value==this.radio){
          this.questionListNext(this.radio)
        }
      },
      turnQuestionTwo(value){
        if(value==this.radio2){
          this.questionListTwoNext(this.radio2)
        }
      }


    },
    watch:{
      routerChooseStatus: function () {
        this.radio='';
        this.radio2='';
        this.pre_select_error_code='';
        this.pre_select_error_phenomenon='';
      }
    }
  };
</script>
