<template>
    <div class="package-case">

      <transition name="bounce">
        <vMore v-if="packageCase && Object.keys(packageCase).length >3"></vMore>
      </transition>
      <transition name="bounce">
        <vLess v-if="packageCase && 0<Object.keys(packageCase).length && Object.keys(packageCase).length <4"></vLess>
      </transition>
      <transition name="bounce">
        <vNone v-if="packageCase && Object.keys(packageCase).length ==0"></vNone>
      </transition>
    </div>
</template>
<script>
    import { mapGetters } from 'vuex'
    import { mapActions } from 'vuex'
    import vMore from '../packagecase/more.vue'
    import vLess from '../packagecase/less.vue'
    import vNone from '../packagecase/none.vue'
    export default {
        data () {
            return {
                isActive: false,
                personHidden: false,
                bigWindmill: true,
                grade: 4,
                kinds: [
                    {
                        type: 'warn',
                        title: '预警',
                        sun: [
                            {
                                smallTitle: '服务预警打标',
                                text: '针对近期突发服务事件，请根据用户情况进行打标',
                                button: ['服务事件处理']
                            },
                            {
                                smallTitle: '服务预警打标',
                                text: '针对近期突发服务事件，请根据用户情况进行打标',
                                button: ['服务事件处理']
                            }
                        ]
                    },
                    {
                        type: 'normal',
                        title: '预警',
                        sun: [
                            {
                                smallTitle: '服务预警打标',
                                text: '针对近期突发服务事件，请根据用户情况进行打标',
                                button: ['服务事件处理']
                            },
                            {
                                smallTitle: '服务预警打标',
                                text: '针对近期突发服务事件，请根据用户情况进行打标',
                                button: ['服务事件处理']
                            }
                        ]
                    },
                    {
                        type: 'normal',
                        title: '预警',
                        sun: [
                            {
                                smallTitle: '服务预警打标',
                                text: '针对近期突发服务事件，请根据用户情况进行打标',
                                button: ['服务事件处理']
                            },
                            {
                                smallTitle: '服务预警打标',
                                text: '针对近期突发服务事件，请根据用户情况进行打标',
                                button: ['服务事件处理']
                            }
                        ]
                    }
                ]
            }
        },
        created(){
//          this.$store.dispatch('saveForm',['/index_marketing','GET_INDEX_MARKETING_API','indexMarketingMM']);
//          this.$store.dispatch('saveForm',['/sale_product','GET_SALE_PRODUCT_API','saleProductMM']);
        },
        computed: {
          ...mapGetters([
            'packageCase'
          ])
        },
        methods: {
            mouseOver: function () {
                this.personHidden=true;
                this.bigWindmill=false;
                this.isActive=true;
            },
            mouseLeaver: function () {
                this.personHidden=false;
                this.bigWindmill=true;
                this.isActive=false;
            },
//          packageCaseLength: function () {
//                var length=0;
//                for(let ever in this.packageCase){
//                  length++;
//                }
//                return length;
//            }
        },
        components:{
            vMore,vLess,vNone
        }
    }
</script>
<style>
    .package-case{
        width: 100%;
        height: 100%;
        margin-top: 10px;
    }

    /* 左部面板 */
    .less-left{
      flex: 1;
      border: 1px solid #B2DAFF;
    }
    .package-case-state{
      width: 100%;
      height: 100%;
      overflow-y: auto !important;

    }
    .state-item{
      width: 100%;
      height: 180px;
      overflow: hidden;
    }
    .item-sun .header{
      width: auto;
      position: relative;
      height: 35px;
      line-height: 35px;
      background: url("../../assets/img/linearBg.jpg") center top repeat;
      background-size: 100% 100%;
    }
    .set-meal-item .header{
      background: url("../../assets/img/linearBg.jpg") center top repeat;
      background-size: 100% 100%;
    }
    .warn .item-sun .header{
      margin-right: 0;
    }
    /*.warn .item-sun .header{*/
      /*background: url("../../assets/img/linear_red.jpg") center top repeat;*/
      /*background-size: 100% 100%;*/
    /*}*/
    .normal .item-sun{
    }
    .normal .item-sun .header{
      background: #FAFDFF;
    }
    .item-sun .header .title{
      float: left;
      color: #333333;
      margin-left: 10px;
      font-weight: bold;
      font-size: 14px;
    }
    .item-sun .header .small-title-right{
      font-size: 13px;
      position: absolute;
      right: 30px;
      margin-right: 24px;
      color: #666666;
    }
    .item-sun .header .small-title-right span{
      color: #F71818;
    }
    .item-sun .header .small-title{
      font-size: 14px;
      float: left;
      color: #333333;
      margin-left: 10px;
    }
    .item-sun .header .small-title div{
      color: #F71818;
      width: 14px;
      height: 14px;
      line-height: 12px;
      text-align: center;
      background: #66B8FF;
      border-radius: 7px;
      margin-top: 11px;
    }
    .item-sun .header .small-title div span{
      font-size: 12px;
      color: #ffffff;
      font-weight: 100;
    }
    .item-sun{
      width: 100%;
      height: 100%;
      float: left;
    }
    .turn-button{
      float: right;
    }
    .turn-button .on-light{
      color: #1476CC;
    }
    .turn-button i{
      margin-right: 5px;
      color: #B2DAFF;
      cursor: pointer;
    }
    .item-sun .text{
      width: 100%;
      height: 100%;
      float: left;
      position: relative;
    }
    .item-sun .text .text-sun-all{
      position: absolute;
      width: 100%;
      display: flex;
      height: 100%;
      flex-direction: row;
      transition: all 0.2s ease;
      left: 0;
    }
    .text .text-sun-all .text-sun{
      flex: 0 0 100%;
      width: 100%;
      height: auto;
      float: left;
    }
    .warn .text-sun .title{
      color: #F71818;
    }
    .text-sun .title{
      color: #1476CC;
      font-size: 15px;
      height: 40px;
      line-height: 40px;
      padding-left: 20px;
      padding-right: 20px;
    }
    .text-sun .text-area{
      color: #333333;
      font-size: 13px;
      line-height: 20px;
      padding-left: 20px;
      padding-right: 20px;
    }
    .text-sun .text-area a{
      cursor: pointer;
      color: #1476CC;
    }
    .text-sun .button{
      font-size: 16px;
      margin-top: 10px;
      padding-left: 20px;
      padding-right: 20px;
    }
    .text-sun .button span{
      margin-right: 10px;
    }
    .text-sun button{
      background: #63ADE3;
      color: #ffffff;
    }

    /* 右部面板 */

    .less-right{
      flex: 1;
      border: 1px solid #B2DAFF;
    }
    .set-meal{
      display: -webkit-flex; /* Safari */
      display: -webkit-box;
      display: -ms-flexbox;
      display: flex;
      flex-wrap: wrap;
      color: #333333;
      height: 100%;
      flex-direction: column;
      justify-content: space-between;
      -webkit-justify-content: space-between;
    }
    .set-meal-item{
      position: relative;
      background: #ffffff;
      flex: 1;
      overflow: hidden;
      cursor: pointer;
    }
    .set-meal-item .header{
      width: auto;
      height: 35px;
      line-height: 35px;
      padding-left: 10px;
      padding-right: 10px;
    }
    .set-meal-item .header .active{
      transform: rotate(90deg) !important;
    }
    .set-meal-item .header i{
      color: #1D9BD9;
      font-size: 14px;
      float: right;
      margin-top: 10px;
      transition: all 0.3s ease;
    }
    .set-meal-item .header span{
      font-size: 14px;
      font-weight: bold;
      position: relative;
      color: #1D9BD9;
    }
    .set-meal-item .inside-box{
      position: absolute;
      left: 0;
      width: 100%;
      height: 100%;
      overflow: auto;
      float: left;
    }
    .set-meal-item .inside-box .inside-box-item{
      width: 96%;
      margin-left: 2%;
      margin-top: 5px;
      height: 35px;
      line-height: 35px;
      border-radius: 5px;
      overflow: hidden;
      border: 1px solid #E5E5E5;
    }
    .set-meal-item .inside-box .inside-box-item .marginActive{
      margin-left: 15px;
    }
    .set-meal-item .inside-box .inside-box-sale{
      border: none;
      height: 24px;
      line-height: 24px !important;
    }
    .set-meal-item .header .sale-choose{
      width: auto;
      height: 37px;
      float: right;
      margin-right: 10px;
    }
    .set-meal-item .header .sale-choose .el-input{
      height: 37px;
      padding-top: 5px;
    }
    .set-meal-item .header .sale-choose .el-select{
      height: 37px;
      padding: 0;
    }
    .set-meal-item .header .sale-choose .number{
      width: 165px;
    }
    .set-meal-item .header .sale-choose .state{
      width: 75px;
    }
    .set-meal-item .header .sale-choose .el-input i{
      height: 24px;
      padding: 0;
      margin-top: 5px;
      width: 22px;
    }
    .set-meal-item .header .sale-choose .el-input{
      padding: 0;
      margin: 0;
      width: auto;
      height: 24px;
    }
    .set-meal-item .header .sale-choose .el-input input{
      height: 24px !important;
      font-size: 12px;
      padding-right: 16px;
      padding-left: 5px;
    }
    .set-meal-item .inside-box .inside-box-sale i{
      font-size: 12px !important;
      font-weight: bolder;
      color: #1592E6;
      transition: transform 0.3s ease;

    }
    .set-meal-item .inside-box .inside-box-sale .head{
      color: #333333;
      font-size: 12px;
    }
    .set-meal-item .inside-box .inside-box-sale .red{
      color: #F71818 !important;
    }
    .set-meal-item .inside-box .inside-box-sale .gray{
      color: #666666 !important;
    }
    .set-meal-item .inside-box .inside-box-sale .head .right{
      float: right;
    }
    .set-meal-item .inside-box .inside-box-sale .inside-box-sale-text{
      min-height: 60px;
      padding-left: 10px;
      padding-top: 4px;
      padding-bottom: 4px;
      padding-right: 10px;
      width: auto;
      background: #F5F5F5;
    }
    .set-meal-item .inside-box .inside-box-sale .inside-box-sale-text span{
      min-width: 49%;
      display: inline-block;
      height: 20px;
      line-height: 20px !important;
      margin: 0;
      padding: 0;
    }
    .set-meal-item .inside-box .inside-box-sale .inside-box-sale-text span a{
      color: #1d9bd9;
    }
    .set-meal-item .inside-box .inside-box-sale-active i{
      transform:rotate(90deg);
      -ms-transform:rotate(90deg); 	/* IE 9 */
      -moz-transform:rotate(90deg); 	/* Firefox */
      -webkit-transform:rotate(90deg); /* Safari 和 Chrome */
      -o-transform:rotate(90deg); 	/* Opera */
    }
    .set-meal-item .inside-box .inside-box-sale-active i{
      font-size: 12px !important;
      font-weight: bolder;
      color: #1592E6;
    }

    .click-hover-point{
      background: #ffffff;
      position: absolute;
      width: 100px;
      min-height: 40px;
      border-radius: 5px;
      padding: 5px;
      left: 0;
      z-index: 99;
      top: 0;
      display: none;
    }
    .click-hover-point:hover{
      cursor: pointer;
    }
    .click-hover-point:before{
      content: '';
      position: absolute;
      left: -10px;
      top: 20px;
      width: 0;
      height: 0;
      border-top: 5px solid transparent;
      border-right: 10px solid #ffffff;
      border-bottom: 5px solid transparent;
    }
    body .clickHoverPointActive{
      display: none !important;
    }
    body .click-hover-point .blue{
      color: #1D9BD9;
    }
    body .click-hover-point .header{
      color: #000;
    }

    .inside-box .inside-box-item .inside-box-item-header{
      width: 100%;
      height: 35px;
      line-height: 35px;
      display: flex;
      flex-direction: row;
      background: url("../../assets/img/linear_gray.jpg") center top repeat;
      background-size: 100% 100%;
    }
    .inside-box .inside-box-item .inside-box-item-header .red{
      color: red;
    }
    .inside-box .inside-box-item .inside-box-item-header .item-list-super-big{
    }
    .inside-box .inside-box-item .inside-box-item-header .item-list-big{
      flex: 4.5;
      overflow: hidden;
    }
    .inside-box .inside-box-item .inside-box-item-header .item-list-middle{
      flex: 2;
      overflow: hidden;
    }
    .inside-box .inside-box-item .inside-box-item-header .item-list-small{
      flex: 1.2;
      text-align: right;
      overflow: hidden;
    }
    .inside-box .inside-box-item .inside-box-item-header .item-list-mini{
      flex: 1;
    }
    .inside-box .inside-box-item .inside-box-item-header .light{
      font-size: 12px;
      font-weight: normal;
    }
    .flow-all{
      font-size: 12px !important;
      color: #333333;
      font-weight: normal;
      overflow: hidden;
    }

    .flow-less{
      font-size: 12px !important;
      color: #666666;
      font-weight: normal;
    }
    .flow-less a{
      color: #FF8000;
    }
    .font-red a{
      color: red;
    }
    .flow-over{
      font-size: 13px !important;
      margin-left: 10px;
      color: #EB2D2D;
      font-weight: normal;
      min-width: 70px;
    }
    .inside-box .inside-box-item .inside-box-item-header .iconfont{
      color: #1D9BD9;
      float: left;
      font-size: 16px;
      width: 18px;
      font-weight: 100;
      text-align: center;

    }
    .inside-box .inside-box-item .inside-box-item-header .icon-yuyin-copy{
      color: #1D9BD9;
      float: left;
      font-size: 14px;
      width: 16px;
      /*font-weight: bolder;*/
    }
    .inside-box .inside-box-item .inside-box-item-header .icon-youjian{
      font-size: 14px;
      width: 16px;
    }
    .inside-box .inside-box-item .inside-box-item-header .icon-qianbi{
      font-size: 13px;
      width: 16px;
    }
    .inside-box .inside-box-item .inside-box-item-header .el-icon-arrow-right{
      color: #95989A;
      float: right;
      font-size: 13px;
      margin-top: 10px;
      transition: all 0.3s ease;
    }
    .inside-box .inside-box-item .inside-box-item-header .active-right-icon{
      transform:rotate(90deg);
      -ms-transform:rotate(90deg); 	/* IE 9 */
      -moz-transform:rotate(90deg); 	/* Firefox */
      -webkit-transform:rotate(90deg); /* Safari 和 Chrome */
      -o-transform:rotate(90deg); 	/* Opera */
    }
    .inside-box .inside-box-item .inside-box-item-header span{
      float: left;
      font-size: 14px;
      font-weight: bold;
      position: relative;
    }
    .set-meal-item-last{
      margin-bottom: 0;
    }
    .inside-box .inside-box-item .inside-box-item-box{
      height: 125px;
      overflow: auto;
      width: auto;
      border-bottom-right-radius: 5px;
      border-bottom-left-radius: 5px;
    }
    .inside-box .inside-box-item .inside-box-item-box .inside-box-details{
      width: auto;
      height: auto;
      padding-left: 10px;
      padding-right: 10px;
    }
    .inside-box .inside-box-item .inside-box-item-box .inside-box-details-line{
      display: flex;
      flex-direction: row;
      width: 100%;
      height: 30px;
      line-height: 30px;
    }
    .inside-box .inside-box-item .inside-box-item-box .inside-box-details-line .canClick{
       color: #1c8de0!important;
    }
    .inside-box .inside-box-item .canClick{
       color: #1c8de0!important;
    }
    .inside-box .inside-box-item .inside-box-item-box .inside-box-details .product-big-box{
      flex: 2.5;
      overflow: hidden;
    }
    .inside-box .inside-box-item .inside-box-item-box .inside-box-details .product-small-box{
      flex: 1;
    }
    .inside-box-item-box .inside-box-details .details-header{
      width: auto;
      height: 30px;
      line-height: 30px;
    }
    .inside-box-details-member{
      width: auto;
      height: 20px;
      overflow: hidden;
    }
    .inside-box-details-member-header{
      color: #1476CC;
    }
    .inside-box-details-member-header i{
      margin-right: 2px;
      transition: all .3s ease;
    }
    .inside-box-details-member i.active{
      transform:rotate(90deg);
      -ms-transform:rotate(90deg); 	/* IE 9 */
      -moz-transform:rotate(90deg); 	/* Firefox */
      -webkit-transform:rotate(90deg); /* Safari 和 Chrome */
      -o-transform:rotate(90deg); 	/* Opera */
    }
    .inside-box-item-box .inside-box-details .details-header{
      width: auto;
      height: 30px;
      line-height: 30px;
    }
    .inside-box-item-box .inside-box-details p{
    }
    .inside-box-item-box .inside-box-details .details-header .details-header-num{
      width: 16px;
      height: 16px;
      line-height: 16px;
      text-align: center;
      background: #FF9933;
      float: left;
      border-radius: 50%;
      color: #ffffff;
      margin-top: 7px;
      margin-right: 5px;
    }
    .inside-box .inside-box-item .inside-box-item-box .inside-box-details p{
      line-height: 20px;
    }
    /* 自定义 scroll-bar */
    ::-webkit-scrollbar
    {
      width: 6px;
      height: 16px;
      position: fixed;
      background: none !important;
    }

    /*定义滚动条轨道 内阴影+圆角*/
    ::-webkit-scrollbar-track
    {
      background: none !important;
    }

    /*定义滑块 内阴影+圆角*/
    ::-webkit-scrollbar-thumb
    {
      border-radius: 10px;
      background-color: #C5C7CB;
    }

    @media screen and (min-height:699px){
      .package-case-state-all{
        display: -webkit-flex; /* Safari */
        display: -webkit-box;
        display: -ms-flexbox;
        display: flex;
        flex-wrap: wrap;
        background: #ffffff;
        height: 383px;
        overflow: hidden;
      }
    }

    @media screen and (min-height:700px){

      .package-case-state-all{
        display: -webkit-flex; /* Safari */
        display: -webkit-box;
        display: -ms-flexbox;
        display: flex;
        flex-wrap: wrap;
        background: #ffffff;
        height: 395px;
        overflow: hidden;
      }
    }
    @media screen and (min-height: 750px) {

      .package-case-state-all{
        display: -webkit-flex; /* Safari */
        display: -webkit-box;
        display: -ms-flexbox;
        display: flex;
        flex-wrap: wrap;
        background: #ffffff;
        height: 433px;
        overflow: hidden;
      }
    }
    @media screen and (min-height:800px){

      .package-case-state-all{
        display: -webkit-flex; /* Safari */
        display: -webkit-box;
        display: -ms-flexbox;
        display: flex;
        flex-wrap: wrap;
        background: #ffffff;
        height: 473px;
        overflow: hidden;
      }
    }
    @media screen and (min-height:850px){

      .package-case-state-all{
        display: -webkit-flex; /* Safari */
        display: -webkit-box;
        display: -ms-flexbox;
        display: flex;
        flex-wrap: wrap;
        background: #ffffff;
        height: 523px;
        overflow: hidden;
      }
    }
    @media screen and (min-height:900px){

      .package-case-state-all{
        display: -webkit-flex; /* Safari */
        display: -webkit-box;
        display: -ms-flexbox;
        display: flex;
        flex-wrap: wrap;
        background: #ffffff;
        height: 573px;
        overflow: hidden;
      }
    }
    @media screen and (min-height:950px){

      .package-case-state-all{
        display: -webkit-flex; /* Safari */
        display: -webkit-box;
        display: -ms-flexbox;
        display: flex;
        flex-wrap: wrap;
        background: #ffffff;
        height: 583px;
        overflow: hidden;
      }
    }
    @media screen and (min-height:1000px){

      .package-case-state-all{
        display: -webkit-flex; /* Safari */
        display: -webkit-box;
        display: -ms-flexbox;
        display: flex;
        flex-wrap: wrap;
        background: #ffffff;
        height: 593px;
        overflow: hidden;
      }
    }
</style>
