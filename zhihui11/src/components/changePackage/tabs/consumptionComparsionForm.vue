<template>
  <div class="consumption-comparsion-form">             <!-- -----消费对比 块 - 表格--- -->

    <div class="form-msg">
      <div class="column-content">
        <div class="column-son-title"><span class="typeface">类型</span></div>
        <div class="column-son-content"><span class="typeface">月基本消费</span></div>
        <div class="column-son-content"><span class="typeface">年基本消费</span></div>
        <div class="column-son-content"><span class="typeface">主套餐档次名称</span></div>
        <div class="column-son-content"><span class="typeface">宽带</span></div>
        <div class="column-son-content"><span class="typeface">天翼高清</span></div>
        <div class="column-son-content "><span class="typeface">手机主卡</span></div>
        <div class="column-son-content"><span class="typeface">手机副卡</span></div>
        <div class="column-son-content"><span class="typeface">其他</span></div>
      </div>

      <div class="column-content">
        <div class="column-son-title"><span class="typeface">现有套餐</span></div>
        <div class="column-son-content"><span class="typeface">249元</span></div>
        <div class="column-son-content"><span class="typeface">1548元</span></div>
        <div class="column-son-content"><span class="typeface">乐享4G套餐</span></div>
        <div class="column-son-content"><span class="typeface">20M（120元）</span></div>
        <div class="column-son-content"><span class="typeface">/</span></div>
        <div class="column-son-content "><span class="typeface">1G+500分钟（129元）</span></div>
        <div class="column-son-content"><span class="typeface">/</span></div>
        <div class="column-son-content"><span class="typeface blue">增值优惠套餐外优惠</span></div>
      </div>

      <div class="column-content" v-if="this.isclose2=='0'">
        <div class="column-son-title"><span class="typeface">实际使用</span> <span class="close" @click="toclose2()">×</span></div>
        <div class="column-son-content"><span class="typeface">274元</span></div>
        <div class="column-son-content"><span class="typeface"> </span></div>
        <div class="column-son-content"><span class="typeface">乐享4G套餐</span></div>
        <div class="column-son-content"><span class="typeface">20M（120元）</span></div>
        <div class="column-son-content"><span class="typeface">/</span></div>
        <div class="column-son-content "><span class="typeface">1G+500分钟（129元）</span></div>
        <div class="column-son-content"><span class="typeface">1张（10元）</span></div>
        <div class="column-son-content"><span class="typeface"></span></div>
      </div>

      <div class="column-content" v-if="this.isclose3=='0'">
        <div class="column-son-title"><span class="typeface">推荐套餐</span> <span class="close" @click="toclose3()">×</span></div>
        <div class="column-son-content"><span class="typeface">159元</span></div>
        <div class="column-son-content"><span class="typeface">1908元 </span></div>
        <div class="column-son-content"><span class="typeface">乐享家129套餐</span></div>
        <div class="column-son-content"><span class="typeface">100M（0元）</span></div>
        <div class="column-son-content"><span class="typeface">1部天翼高清(10元）</span></div>
        <div class="column-son-content "><span class="typeface">2GB国内上网流量（可与副卡共享）</span></div>
        <div class="column-son-content"><span class="typeface">2张（20元）</span></div>
        <div class="column-son-content"><span class="typeface blue">增值优惠套餐外优惠</span></div>
      </div>

      <div class="column-content" v-if="this.isclose4=='0'">
        <div class="column-son-title"><span class="typeface">推荐套餐</span> <span class="close" @click="toclose4()">×</span></div>
        <div class="column-son-content"><span class="typeface">159元</span></div>
        <div class="column-son-content"><span class="typeface">1908元 </span></div>
        <div class="column-son-content"><span class="typeface">乐享家129套餐</span></div>
        <div class="column-son-content"><span class="typeface">100M（0元）</span></div>
        <div class="column-son-content"><span class="typeface">1部天翼高清(10元）</span></div>
        <div class="column-son-content "><span class="typeface">2GB国内上网流量（可与副卡共享）</span></div>
        <div class="column-son-content"><span class="typeface">2张（20元）</span></div>
        <div class="column-son-content"><span class="typeface blue">增值优惠套餐外优惠</span></div>
      </div>









    </div>
  </div>
</template>

<style scoped>

  /*字体相关---*/
  .titleface{
    font-size:14px;
    font-family: Helvetica Neue,"微软雅黑","黑体";
    color:#333;
  }
  .blueface{
    font-size:12px;
    font-family: Helvetica Neue,"微软雅黑","黑体";
    color:#1476CC;
  }
  .typeface{
    font-size:12px;
    font-family: Helvetica Neue,"微软雅黑","黑体";
    color:#333;
  }
  .close{
    font-size:20px;
    color:#8A8A8A;
    margin-left:10px;
    margin-top:2px;
    cursor:pointer;
  }

  /*字体相关---完*/

  /* 颜色相关----*/
  .red{  color:#F44848;  }
  .blue{  color:#33A0FF;  }

  /* 颜色相关----完*/


  /* 公共----*/
  .lh40{  line-height:40px;  }
  .lh39{  line-height:39px;  }
  .lh30{  line-height:30px;  }
  .lh28{  line-height:28px;  }
  .lh24{  line-height:24px;  }
  .lh22{  line-height:22px;  }
  .lh18{  line-height:18px;  }

  .floatleft{ float:left;}
  .floatright{ float:right;}

  .left20{ margin-left:20px;}
  .right20{ margin-right:20px;}

  /* 公共----完*/

  .consumption-comparsion-form{
    flex:1;

    display: flex;
    flex-direction:row;

    /*overflow: auto;*/
  }


  .form-msg{
    flex:1;
    /*max-width:580px;*/
    /*background:#eee;*/
    border-left:1px solid #d1eafd;
    overflow: auto;

    display:flex;
    flex-direction:row;

  }

  .column-title{
    width:109px;
    /*background:#ddd;*/
    border-right:1px solid #d1eafd;

    display:flex;
    flex-direction: column;
  }
  .column-son-title{
    height:27px;
    background:#F0F8FE;
    border-bottom:1px  solid #d1eafd;
    border-top:1px  solid #d1eafd;

    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content:center;
  }
  .column-son-content{
    flex:1;
    /*padding:10px;*/
    background:#fff;
    border-bottom:1px  solid #d1eafd;
    padding-left:5px;
    padding-right:5px;

    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content:center;
  }
  .big{
    flex:1.5;
  }


  .column-content{
    width:175px;
    /*flex:175;*/
    /*min-width:170px;*/
    /*background:#ddd;*/
    border-right:1px solid #d1eafd;

    display:flex;
    flex-direction: column;
  }



</style>
<script>
  import { mapActions } from 'vuex'

  export default {
    data() {
      return {
        isclose2:'0',
        isclose3:'0',
        isclose4:'0',

      };
    },
    computed:{

    },
    methods: {

      ...mapActions([
        'popoverAlert'
      ]),

      toclose2(){
        this.isclose2='1'
      },
      toclose3(){
        this.isclose3='1'
      },
      toclose4(){
        this.isclose4='1'
      },




    }
  };
</script>
