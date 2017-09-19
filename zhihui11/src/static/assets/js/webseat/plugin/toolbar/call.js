function callOutSideCallback(ret)
{
    if (ret == "0")
    {
        close();
    }
    else
    {
        alert("执行呼叫失败");
    }
}

function clickCall()
{
    var inputNO = $.trim($("#inputNO").val());
    if (inputNO.length == 0)
    {
        alert("请输入呼叫号码");
		return;
    }
    
    var parseResult = parseInt(inputNO, 10);
    if (isNaN(parseResult))
    {
        alert("不是有效外呼号码");
		return;
    }
    
    opener.WebAgent.CallUser(inputNO, callOutSideCallback);
}

function closeDlg()
{
    opener.callDlgClosed();
}

$(function()
{
    $(window).unload(closeDlg);
});
