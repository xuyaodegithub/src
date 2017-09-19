/**
 *  只有通话时整理按钮才可用
 */
;
(function(WebAgent)
{
    WebAgent.onInit(function()
    {
    	// 拦截状态变化事件，通话态下【整理】按钮可用
        WebAgent.EventHelper.intercept("OnStateChanged", function(interceptor)
        {
            var args = interceptor.eventArgs;
            WebAgent.debug("[webagent-inCallCollate.js] Intercept Event ：" + interceptor.eventName + ",args=" + args);
            var state = args[0];
            var stateCode = state.stateCode*1;
            var isCall = (stateCode >= 300) && (stateCode < 400);
            if (!isCall)
            {
                state.enableCmds_ = (!state.enableCmds_) ? state.enableCmds : state.enableCmds_;
                var Cmd = WebAgent.Cmd;
                var enableCmds = [].concat(state.enableCmds_);
                
                // 整理态按钮不可用
                var disableCmds = (stateCode>=400)?[Cmd.MANUAL_ADJUST] : [ Cmd.CANCEL_ADJUST,Cmd.MANUAL_ADJUST ];
                state.enableCmds = WebAgent.utils.arrSub(enableCmds, disableCmds);
            }
            interceptor.next();
        });
    });
})(WebAgent);