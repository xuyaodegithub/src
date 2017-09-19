function createTestBtn(cmd, fn, btnName)
{
    btnName = btnName || cmd;

    var btn = document.createElement("input");
    btn.type = 'button';
    btn.value = btnName;
    btn.onclick = fn;

    btn.enable = function()
    {
        btn.disabled = false;
    };

    btn.disable = function()
    {
        btn.disabled = true;
    };

    var btnDiv = document.getElementById("btnDiv");
    btnDiv.appendChild(btn);

    if (WebAgent.isInit && cmd) WebAgent.regBtn(cmd, btn);
}

/**
 * 创建切换按钮
 * 
 * @param cmd 按钮绑定的命令
 * @param fn1 cmd命令指定的执行方法
 * @param fn2 另外一个命令的执行方法（cmd2）
 * @param btnName1 cmd对应的按钮名称，缺省为cmd
 * @param btnName2 另外一个命令对应的按钮名称，缺省为cmd2
 */
function createSwitchBtn(cmd, fn1, fn2, btnName1, btnName2)
{
    btnName1 = btnName1 || cmd;
    var btn = document.createElement("input");
    btn.type = 'button';
    btn.value = btnName1;
    btn.onclick = fn1;

    btn.enable = function()
    {
        btn.disabled = false;
    };

    btn.disable = function()
    {
        btn.disabled = true;
    };

    btn.switchTo = function(cmd_)
    {
        if (cmd == cmd_)
        {
            btn.value = btnName1;
            btn.onclick = fn1;
        }
        else
        {
            btn.value = btnName2 || cmd_;
            btn.onclick = fn2;
        }
    };

    var btnDiv = document.getElementById("btnDiv");
    btnDiv.appendChild(btn);
    if (WebAgent.isInit && cmd) WebAgent.regBtn(cmd, btn);
}

    function print(msg)
    {
		var span = document.createElement("span");
		span.innerHTML = msg;
        var btnDiv = document.getElementById("btnDiv");
        btnDiv.appendChild(span);
    }

function info(msg)
{
    var msgDiv = document.getElementById("msg");
    msgDiv.innerHTML += "<br><font color=#0099FF>" + msg + "</font>";
    msgDiv.scrollTop = msgDiv.scrollHeight;
}
function error(msg)
{
    var msg_ = document.getElementById("msg");
    msg_.innerHTML += "<br><font color=#FFCC00>" + msg + "</font>";
    msg_.scrollTop = msg_.scrollHeight;
}

function clearMsg()
{
    $("#msg")[0].innerHTML = "";
}
