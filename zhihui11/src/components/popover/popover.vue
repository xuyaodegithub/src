<template>
    <div class="popover">
        <component :is="popoverAlive.title"></component>
    </div>
</template>

<style scoped>
  .popover{
      z-index: 30;
      position: relative;
      width:auto;
      height: auto;
  }
</style>
<script>
  import vDemo from '../popover/demo.vue'
  import vDial from './dial.vue'
  import vDrjhzx from './drjhzx.vue'
  import vMsgCount from './msgCount.vue'
  import vNiceNumJudge from './nicenumJudge.vue'
  import vRest from './rest.vue'
  import vSummary from './summary.vue'
  import vTransfer from './transfer.vue'
  import vIncomingHistory from './incomingHistory.vue'
  import vNodePad from './nodepad.vue'
  import vFeedback from './feedback.vue'
  import vBalance from './balance.vue'
  import vMSGCount from './msgCount.vue'
  import vServiceEvent from './serviceEvent.vue'
  import vContentAccount from './contentAccount.vue'
  import vIdentity from './identity.vue'
  import vIdentityMakeSure from './identityMakeSure.vue'
  import vSubassembly from './subassembly.vue'
  import vIndexMarkingDetail from './indexMarkingDetail.vue'
  import vRealName from './realName.vue'
  import vkingOfMen from './kingOfMen.vue'
  import vContactClientsManage from './contactClientsManage.vue'
  import vContactClientsTransfer from './contactClientsTransfer.vue'
  import vCenterFunctionAlert from './centerFunctionAlert.vue'
  import vContactClientsMessage from './contactClientsMessage.vue'
  import vFreeResourceAlert from './freeResourceAlert.vue'
  import vArrearsDetails from '../balanceAndrrears/alert/arrearsDetails.vue'
  import vCanUseMoney from '../balanceAndrrears/alert/canUseMoney.vue'
  import vQuotaDetails from '../balanceAndrrears/alert/quotaDetails.vue'
  import vAmountInEffect from '../balanceAndrrears/alert/amountInEffect.vue'
  import vReturnRedPackets from '../balanceAndrrears/alert/returnRedPackets.vue'
  import vServiceSynergy from '../balanceAndrrears/alert/serviceSynergy.vue'
  import vRemindSmsInquiry from '../balanceAndrrears/alert/remindSmsInquiry.vue'
  import vChangeDetails from '../balanceAndrrears/alert/changeDetails.vue'
  import vBookOne from '../balanceAndrrears/alert/bookOne.vue'

  import vStarEquity from '../boradbandFault/alert/starEquity.vue'
  import vSpeedControlTable from '../boradbandFault/alert/speedControlTable.vue'
  import vSmsSpeedMeasurement from '../boradbandFault/alert/smsSpeedMeasurement.vue'
  import vSmsCreatesDialUpConnection from '../boradbandFault/alert/smsCreatesDialUpConnection.vue'
  import vSmsViewLocalConnection from '../boradbandFault/alert/smsViewLocalConnection.vue'
  import vBroadbandErrorAuthentication from '../boradbandFault/alert/broadbandErrorAuthentication.vue'
  import vPasswordAuthentication from '../boradbandFault/alert/passwordAuthentication.vue'
  import vProcessingSchemeButton from '../boradbandFault/alert/processingSchemeButton.vue'
  import vBroadbandExtendedServiceList from '../boradbandFault/alert/broadbandExtendedServiceList.vue'
  import vDistributeLeaflets from '../boradbandFault/alert/distributeLeaflets.vue'
  import vOneButtonFix from '../boradbandFault/alert/oneButtonFix.vue'
  import vPretreatmentArchiving from '../boradbandFault/alert/pretreatmentArchiving.vue'
  import vSpeedDetail from '../boradbandFault/alert/speedDetail.vue'
  import vRoutingModeSelection from '../boradbandFault/alert/routingModeSelection.vue'
  import vRoutingModeSendSms from '../boradbandFault/alert/routingModeSendSms.vue'
  import vQqBootSms from '../boradbandFault/alert/qqBootSms.vue'
  import vReturnAfterFiling from '../boradbandFault/alert/returnAfterFiling.vue'
  import vPasswordReset from '../boradbandFault/alert/passwordReset.vue'

  import vReasonsForRefusal from '../changePackage/alert/reasonsForRefusal.vue'
  import vValueAddedDiscount from '../changePackage/alert/valueAddedDiscount.vue'
  import vMailboxFreePackage from '../changePackage/alert/mailboxFreePackage.vue'
  import vPackageCharge from '../changePackage/alert/packageCharge.vue'
  import vCostCalculation from '../changePackage/alert/costCalculation.vue'


  import { mapActions } from 'vuex'
  import { mapGetters } from 'vuex'
  export default {
    data() {
      return {
          changeAlert: 'vDemo'
      };
    },
    components:{
      vDemo,vDial,vDrjhzx,
      vMsgCount,vNiceNumJudge,
      vRest,vSummary,
      vTransfer,vIncomingHistory,
      vFeedback,vNodePad,vBalance,
      vMSGCount,vServiceEvent,
      vSubassembly,vIndexMarkingDetail,
      vRealName,vContactClientsManage,
      vkingOfMen,
      vContactClientsTransfer,
      vCenterFunctionAlert,
      vContactClientsMessage,
      vFreeResourceAlert,
      vArrearsDetails,
      vCanUseMoney,
      vQuotaDetails,
      vAmountInEffect,
      vReturnRedPackets,
      vServiceSynergy,
      vRemindSmsInquiry,
      vContentAccount,
      vChangeDetails,
      vBookOne,
      vIdentityMakeSure,
      vIdentity,
      vStarEquity,
      vSpeedControlTable,
      vSmsSpeedMeasurement,
      vSmsCreatesDialUpConnection,
      vSmsViewLocalConnection,
      vBroadbandErrorAuthentication,
      vPasswordAuthentication,
      vProcessingSchemeButton,
      vBroadbandExtendedServiceList,
      vDistributeLeaflets,
      vOneButtonFix,
      vPretreatmentArchiving,
      vSpeedDetail,
      vRoutingModeSelection,
      vRoutingModeSendSms,
      vQqBootSms,
      vReturnAfterFiling,
      vPasswordReset,


      vReasonsForRefusal,
      vValueAddedDiscount,
      vMailboxFreePackage,
      vPackageCharge,
      vCostCalculation,






    },
    methods: {
    },
    computed: {
    // 使用对象展开运算符将 getters 混入 computed 对象中
      ...mapGetters([
        'popoverAlive'
      ])
    }
  };
</script>
