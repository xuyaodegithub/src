var $btnLogout, $btnSetBusy, $btnSetIdle, $btnHold, $btnRetrieve, $btnMakeCall, $btnHangup, $btnService, eh, callWin, selfWin = window;
var Cmd = WebAgent.Cmd;

function getRegButton($btn)
{
    return {
        setEnabled : function(enabled)
        {
            $.data($btn[0], "enabled", enabled);
            if (enabled)
            {
                $btn.removeClass("disabled");
            }
            else
            {
                $btn.addClass("disabled");
            }
        },
        setVisible : function(visible)
        {
            if (visible)
            {
                $btn.show();
            }
            else
            {
                $btn.hide();
            }
        }
    };
}

function regButtions()
{
    WebAgent.regSwitchBtn(Cmd.LOGOUT, getRegButton($btnLogout),
            "defaultToolbar");
    WebAgent.regSwitchBtn(Cmd.SHOW_BUSY, getRegButton($btnSetBusy),
            "defaultToolbar");
    WebAgent
            .regSwitchBtn(Cmd.IDLE, getRegButton($btnSetIdle), "defaultToolbar");
    WebAgent.regSwitchBtn(Cmd.HOLD, getRegButton($btnHold), "defaultToolbar");
    WebAgent.regSwitchBtn(Cmd.RE_HOLD, getRegButton($btnRetrieve),
            "defaultToolbar");
    WebAgent.regSwitchBtn(Cmd.MAKE_CALL, getRegButton($btnMakeCall),
            "defaultToolbar");
    WebAgent.regSwitchBtn(Cmd.HANG_UP, getRegButton($btnHangup),
            "defaultToolbar");
    WebAgent.regSwitchBtn(Cmd.SERVICE, getRegButton($btnService),
            "defaultToolbar");
}

function openCallWin()
{
    var winW = window.screen.availWidth, winH = window.screen.availHeight, hh = 200, ww = 400, iLfet = winW
            / 2 - ww / 2, iTop = winH / 2 - hh;
    setTimeout(function(){
        callWin = selfWin.open('call.html', 'callWin', 'height=' + hh + 'px,width=' + ww
                + 'px,left=' + iLfet + 'px,top=' + iTop
                + 'px,toolbar=no, menubar=no, scrollbars=no');
    });
}

function closeCallWin()
{
    if (callWin && !callWin.closed)
    {
        callWin.close();
    }
}

function clickMakeCall()
{
    var statecode = WebAgent.getState().stateCode * 1;

    if ((statecode == 105 || statecode == 106)
            || (statecode >= 200 && statecode < 300)
            || (statecode >= 400 && statecode < 500))
    {
        WebAgent.invoker("StatusMonitor", [ 0, 0, 0, "SetPreCall" ]);
    }
    else
    {
        openCallWin();
    }
}

function callDlgClosed()
{
    var stateCode = WebAgent.getState().stateCode * 1;
    if (stateCode == 107)
    {
        setIdle();
    }
}

function setIdle()
{
    if (WebAgent.isCalling())
    {
        WebAgent.setPreIdle();
    }
    else
    {
        WebAgent.invoke("StatusMonitor", [ 0, 0, 0, "SetIdle" ]);
    }
}

function buildButtons()
{
    $btnLogout = $(".iconMenu li.logout");
    $btnSetBusy = $(".iconMenu li.busy");
    $btnSetIdle = $(".iconMenu li.idle");
    $btnHold = $(".iconMenu li.holdOn");
    $btnRetrieve = $(".iconMenu li.reply");
    $btnMakeCall = $(".iconMenu li.call");
    $btnHangup = $(".iconMenu li.hook");
    $btnService = $(".iconMenu li.service");

    $btnLogout.click(function()
    {
        if ($.data(this, "enabled"))
        {
            WebAgent.logout();
        }
    });

    $btnSetBusy.click(function()
    {
        if ($.data(this, "enabled"))
        {
            if (WebAgent.isCalling())
            {
                WebAgent.setPreBusy();
            }
            else
            {
                WebAgent.invoke("StatusMonitor", [ 0, 0, 0, "SetBusy" ]);
            }
        }
    });

    $btnSetIdle.click(function()
    {
        if ($.data(this, "enabled"))
        {
            setIdle();
        }
    });

    $btnHold.click(function()
    {
        if ($.data(this, "enabled"))
        {
            WebAgent.invoke("Hold");
        }
    });

    $btnRetrieve.click(function()
    {
        if ($.data(this, "enabled"))
        {
            WebAgent.invoker("QueryCallIDOnAgent", WebAgent.operator.oid,
                    function(callid)
                    {
                        WebAgent.invoker("RetrieveHold", callid);
                    });
        }
    });
    
    $btnMakeCall.click(function()
    {
        if ($.data(this, "enabled"))
        {
            clickMakeCall();
        }
    });

    $btnHangup.click(function()
    {
        if ($.data(this, "enabled"))
        {
            WebAgent.invoker("QueryCallIDOnAgent", WebAgent.operator.oid,
                    function(callid)
                    {
                        WebAgent.invoker("ReleaseCallByCallID", callid);
                    });
        }
    });

    $btnService.click(function()
    {
        if ($.data(this, "enabled"))
        {
            WebAgent.invoker("StatusMonitor", [ 0, 0, 0, "SetIdle" ]);
        }
    });
}

function onStateChange(state)
{
    var stateCode = state.stateCode * 1;
    if (stateCode == 107)
    {
        openCallWin();
    }
    else
    {
        closeCallWin();
    }
}

// JavaScript Document
$(function()
{
    $('a,input[type="button"],input[type="submit"],input[type="radio"]').bind(
            'focus', function()
            {
                if (this.blur)
                {
                    this.blur();
                }
                ;
            });

    eh = new WebAgent.EventHelper();
    eh.regEvent("OnStateChanged", onStateChange);

    buildButtons();
    regButtions();
});