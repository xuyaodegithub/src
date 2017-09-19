<template>
  <div class="faultall">
    <!--<div class="utop">-->
    <!--<v-operating-guide></v-operating-guide>-->
    <!--</div>-->
    <div class="ubottom">
      <div class="ubottom-header bk-change-normal1">
        <div class="ubottom-header-blank">
          <div class="ubottom-header-item" :class="{ colorActive: num=='1' }" @click="turnPage('1','vFaultHandling')">故障处理</div>
          <div class="ubottom-header-item" :class="{ colorActive: num=='2' }" @click="turnPage('2','vDistributeLeaflets')">派单</div>
          <div class="ubottom-header-item itemlong" :class="{ colorActive: num=='3' }" @click="turnPage('3','33')">历史工单查询（已结/未结）0/0</div>
          <div class="ubottom-header-item itemlong1" :class="{ colorActive: num=='4' }" @click="turnPage('4','vBroadbandExtendedServiceList')">宽带延伸服务派单</div>
          <div class="ubottom-header-item" :class="{ colorActive: num=='5' }" @click="turnPage('5','55')">小额减免</div>
          <!--<div class="ubottom-header-line" :style="{left: numLeft}"></div>-->
        </div>
      </div>
      <div class="ubottom-middle">
        <component :is="boradbandFaulTitle"></component>
      </div>
    </div>

  </div>
</template>


<script>
  import { mapActions } from 'vuex'
  import { mapGetters } from 'vuex'

  import vOperatingGuide from '../common/operatingGuide.vue';
  import vFaultHandling from '../boradbandFault/tabs/faultHandling.vue';
  import vDistributeLeaflets from '../boradbandFault/tabs/distributeLeaflets.vue'
  import vBroadbandExtendedServiceList from '../boradbandFault/tabs/broadbandExtendedServiceList.vue'


  export default {
    data() {
      return {
        num:'1',
//        numLeft:'0px',
      }
    },
    computed:{
      ...mapGetters([
        'personMessage',
        'boradbandFaulTitle'
      ])
    },
    methods: {
      close: function () {
        alert(0)
      },
      ...mapActions([
        'popoverAlert',
        'boradbandFaulTitle'
      ]),

      turnPage(num,name){
        if(name=='vFaultHandling' || name=='vDistributeLeaflets' || name=='vBroadbandExtendedServiceList'){
          this.numLeft=(num-1)*120+'px';
          this.num=num;
          if(name){
            this.$store.state.broadbandailure.page.boradbandFaulTitle=name;
          }
        }else{

        }
      },
    },
    components:{
      vOperatingGuide,vFaultHandling,vDistributeLeaflets,vBroadbandExtendedServiceList,
    }
  };
</script>


<style scoped>
  .faultall{
    width:100%;
    height:100%;
    /*background:#333;*/
    display: flex;
    flex-direction:column;
  }


  /*上面整个板块-------------------------------------------------------------------*/
 .utop{
    margin-top:20px;
    height:40px;
  }

  /*上面整个板块-------------------------------------------------------------------完*/

  /*下面整个板块-------------------------------------------------------------------*/

 .ubottom{
    margin-top:10px;
    background:#fff;
    flex:1;
    border:1px solid #B2DAFF;
    border-radius:5px;

   display:flex;
   flex-direction:column;
  }

 .ubottom-header{
    flex:31;
    border-bottom: 1px solid #B2DAFF;

   display:flex;
   flex-direction:row;

  }
 .ubottom-header-blank{
    margin-left:16px;
   flex:1;
   /*background:#888;*/

   display:flex;
   flex-direction:row;
   align-items: center;
   /*justify-content:center;*/

  }

  .bk-change-normal1{
    background: url("../../assets/img/linearBg.jpg") center top repeat;
  }

 .ubottom-header-blank .ubottom-header-line{
    position:absolute;
    left:16px;
    top:0px;
    height:2px;
    width:100px;
    transition:left 0.3s ease;
    background:#33A0FF;
  }

 .ubottom-header-item{
    width:78px;
    text-align: center;
    color:#1476CC;
    float:left;
   cursor:pointer;
  }

 .itemlong{
    width:184px;
   /*flex:184;*/
  }

  .itemlong1{
    width:150px;
    /*flex:184;*/
  }


  .ubottom-header-blank  .colorActive{
     color: #33A0FF;
    border-left:1px solid #B2DAFF;
    border-right:1px solid #B2DAFF;
    border-bottom:1px solid #fff;
    border-top:2px solid #33A0FF;
    background:#fff;
    line-height:250%;
    height:100%;
   }



.ubottom-middle{
  flex:627;

  display: flex;
  flex-direction:row;

  }



  /*下面整个板块-------------------------------------------------------------------完*/

</style>
