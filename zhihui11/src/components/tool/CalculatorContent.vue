<template>
  <section class="calculator" id="calculator">

    <div class="popover-head">
      <span class="title">计算器</span><span class="small-title"></span>
      <i @click="outCalculator()" class="el-icon-close"></i>
    </div>
    <div class="calculator-border">
      <div class="calculator-display">
        <div class="calculator-formula" v-cloak>{{ formula }}</div>
        <div class="calculator-result" v-cloak>{{ result }}</div>
      </div>

      <div class="calculator-items">
        <div class="item-block">

            <!--<div class="calculator-item" @click="square()">√</div>-->
            <!--<div class="calculator-item" @click="cleanResult()">CE</div>-->
            <!--<div class="calculator-item" @click="toggle()">±</div>-->
            <!--<div class="calculator-item" @click="operate('%')">%</div>-->
            <!--<div class="calculator-item" @click="outCalculator()">退出</div>-->

          <div class="button-column">
            <div class="button-item border-gray bg-gray color-gray size12" @click="cleanAll()">清零</div>
            <div class="button-item top10 border-blue bg-blue color-black size16" @click="operate(7)">7</div>
            <div class="button-item top10 border-blue bg-blue color-black size16" @click="operate(4)">4</div>
            <div class="button-item top10 border-blue bg-blue color-black size16" @click="operate(1)">1</div>
            <div class="button-item top10 border-blue bg-blue color-black size16" @click="operate(0)">0</div>
          </div>

          <div class="button-column left10">
            <div class="button-item border-gray bg-gray color-gray size12" @click="todrop()">删除</div>
            <div class="button-item top10 border-blue bg-blue color-black size16" @click="operate(8)">8</div>
            <div class="button-item top10 border-blue bg-blue color-black size16" @click="operate(5)">5</div>
            <div class="button-item top10 border-blue bg-blue color-black size16" @click="operate(2)">2</div>
            <div class="button-item top10 border-blue bg-blue color-black size16" @click="operate('00')">00</div>
          </div>

          <div class="button-column left10">
            <div class="button-item border-gray bg-gray color-gray size16" @click="operate('(')">(</div>
            <div class="button-item top10 border-blue bg-blue color-black size16" @click="operate(9)">9</div>
            <div class="button-item top10 border-blue bg-blue color-black size16" @click="operate(6)">6</div>
            <div class="button-item top10 border-blue bg-blue color-black size16" @click="operate(3)">3</div>
            <div class="button-item top10 border-blue bg-blue color-black size16" @click="operate('.')">.</div>
          </div>

          <div class="button-column left10">
            <div class="button-item border-gray bg-gray color-gray size16" @click="operate(')')">)</div>
            <div class="button-item top10 border-orange bg-orange color-white size16" @click="operate('+')">+</div>
            <div class="button-item top10 border-orange bg-orange color-white size16" @click="operate('-')">-</div>
            <div class="button-item top10 border-orange bg-orange color-white size16" @click="operate('*')">×</div>
            <div class="button-item top10 border-orange bg-orange color-white size16" @click="operate('/')">÷</div>
          </div>

          <div class="button-column-big left10">
            <div class="button-item border-gray bg-gray color-gray size10" @click="tosave()">保存结果</div>
            <div class="button-item top10 border-gray bg-gray color-gray size12" @click="takeout()">取数</div>
            <div class="button-item-big top10 border-orange bg-orange color-white" @click="equal()">=</div>
          </div>

        </div>
      </div>
    </div>
  </section>
</template>

<script>
  import { mapActions } from 'vuex'
  import { mapGetters } from 'vuex'
  export default {
    name: 'CalculatorContent',
    data () {
      return {
        formula :"",
        result : 0,

        formula_cache:"",
        result_cache:'',
      }
    },

    methods:{

      ...mapActions([
        'popoverAlert'
      ]),
      outCalculator(){
        this.$store.state.page.calculatorActive=false
      },
      operate(element){
        console.log("operate..");
        this.formula +=element;
        // console.log("this.formula:");
        // console.log(this.formula);
      },

      equal(){
        console.log("equal..");
        this.result = eval(this.formula);
        // console.log("this.formula:");
        // console.log(this.formula);
      },

      cleanResult(){
        console.log("cleanResult..");
        this.result = 0;
      },

      cleanAll(){
        console.log("cleanAll..");
        this.formula = "";
        this.result = 0;
      },

      todrop(){
        console.log("drop..");
        this.formula = this.formula.slice(0, -1);
      },

      square(){
        console.log("square..");
        console.log(eval(this.formula));
        eval(this.formula)<0? this.formula = "Can not suqre the negative value" : this.result=Math.sqrt(eval(this.formula));
      },

      devided(){
        console.log("devided..");
        this.formula===""||this.formula.endsWith("+"||"-"||"*"||"/"||"%")? {} :  this.formula="1/("+this.formula+")";this.equal();
      },

      toggle(){
        console.log("toggle..");
        this.formula===""||this.formula.endsWith("+"||"-"||"*"||"/"||"%")? {} :  this.formula.startsWith("-")?this.formula = Math.abs(eval(this.formula)).toString(): this.formula="-("+this.formula+")";
        this.equal();
      },

      tosave(){
        console.log("tosave..");
        this.formula_cache = this.formula;
        this.result_cache = this.result;
      },
      takeout(){
        console.log("takeout..");
        this.formula = this.formula_cache;
        this.result = this.result_cache;
      },

    }
  }
</script>

<style scoped>

  .popover-head {
    width: 100%;
    height: 40px;
    line-height: 40px;
    font-size: 14px;
    cursor: pointer;
  }
  .popover-head i {
    float: right;
    color: #CECECE;
    font-size: 12px;
    margin-top: 13px;
    margin-right: 12px;
    cursor: pointer;
  }

  .popover-head .title {
    margin-left: 12px;
    font-weight: bold;
    color: #333333;
  }

  /*vue*/
  /*[v-cloak] { display: none; }*/
  /*body{*/
    /*font-size:62.5%;  !* =10px *!*/
  /*}*/
  .calculator{
    position: absolute;
    top: 200px;
    left: 50%;
    transform: translateX(-50%);
    width: 260px;
    height: 310px;
    background-color: #F5F5F5;
    border-radius: 8px;
    box-shadow: 0 0 16px #ccc;
  }
  .calculator .calculator-border .calculator-display{
    border: 2.5px solid #b9b4b4;
    background-color: #333333;

    height:50px;
    width: 224px;
    margin-left:15px;
    margin-right:16px;
    font-size: 14px;
    border-radius: 7px;
  }

  .calculator .calculator-border .calculator-formula{
    width: 100%;
    height: 42.9%;
    text-align: right;
    box-sizing: border-box;
    padding: 8px 15px;
    color: #ffffff;
    text-overflow: ellipsis;
    white-space:nowrap;
    overflow:hidden;
  }

  .calculator .calculator-border .calculator-result{
    width: 100%;
    height: 57.1%;
    text-align: right;
    box-sizing: border-box;
    padding:8px 15px;
    color: #ffffff;
    text-overflow: ellipsis;
    white-space:nowrap;
    overflow:hidden;
  }

/* ------------------------------------------------↓----------*/
  .calculator .calculator-border .calculator-items{
    /*width:428px;*/
    position:relative;
    /*width:420px;*/
    /*width:calc(100% - 4px);*/
    width:100%;
    /*padding-left:2px;*/
    /*padding-right:2px;*/
    height:220px;
    /*height:100%;*/
    /*background:#888;*/

    display:flex;
    flex-direction: row;


  }

  .item-block{
    flex:1;
    padding:15px 15px 20px 15px;

    display:flex;
    flex-direction: row;

  }

  .button-column{
    flex:52;

    display: flex;
    flex-direction: column;
  }

  .button-column-big{
    flex:78;

    display: flex;
    flex-direction: column;
  }

  .button-item{
    flex:38;
    border-radius:3px;
    cursor: pointer;
    user-select: none;

    display: flex;
    flex-direction:row;
    align-items: center;
    justify-content:center;
  }

  .button-item-big{
    flex:138;
    border-radius:3px;
    font-size:30px;
    cursor: pointer;
    user-select: none;

    display: flex;
    flex-direction:row;
    align-items: center;
    justify-content:center;
  }

  .button-item:hover{
    box-shadow: 0 0 8px #DCEFFF;
  }
  .button-item:active{
    transform: translate(0.8px,0.8px);
  }
  .button-item-big:hover{
    box-shadow: 0 0 8px #DCEFFF;
  }
  .button-item-big:active{
    transform: translate(0.8px,0.8px);
  }

  .left10{margin-left:10px;}
  .top10{margin-top:10px;}

  .color-white{color:#fff;}
  .color-black{color:#333;}
  .color-gray{color:#4D4D4D;}
  .size10{font-size:10px;}
  .size12{font-size:12px;}
  .size14{font-size:14px;}
  .size16{font-size:16px;}
  .size24{font-size:24px;}

  .border-gray{  border:1px solid #D9D9D9;  }
  .border-blue{  border:1px solid #B2DAFF;  }
  .border-orange{  border:1px solid #FA9126;  }

  .bg-gray{
    background:  url(../../assets/img/jisuanjiBkGray.png)  repeat-x;
    background-size:100% 110%;
  }
  .bg-blue{
    background:  url(../../assets/img/jisuanjiBkBlue.png)  repeat-x;
    background-size:100% 110%;
  }
  .bg-orange{
    background:  url(../../assets/img/jisuanjiBkYellow.png) repeat-x;
    background-size:100% 110%;
  }



  /* --------------------------------------------------↑----------*/



</style>
