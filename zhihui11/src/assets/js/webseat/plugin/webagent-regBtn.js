/**
 * 把一组菜单中互斥的按钮自动组合成【切换按钮】，针对统一视图实现的插件。
 * 统一视图按钮接口（setEnabled(boolean)和isEnabled(),setVisible(boolean)和isVisible()）
 * 按钮切换管理（静音<=>取消静音、示忙<=>示闲、保持<=>取保持、应答<=>挂机、录音<=>停止录音、整理<=>取消整理、聊天上线/离线）
 */
(function(WebAgent)
{
    var SwitchBtnCreator =
    {
        btnGroup : {}, // { Map<groupID , Map<Cmd,IButton>> }

        waitForRegBtns : [], // {Array<Object{cmd,btn}>} 座席未初始化之前先保存

        waitCreateBtns : [], // Cmd.js未加载成功前先保存相关的参数

        isInit : false, // 是否已经初始化？必要的js已经加载完成
        
        cmdBtnMap : {}, //命令、按钮映射关系

        /**
         * 初始化，提前加载必要的js文件
         */
        init : function()
        {
            var thisobj = this;
            if (WebAgent.Cmd)
            {
                thisobj.isInit = true;
            }

            WebAgent.loadjs("Cmd.js", function()
            {
                thisobj.isInit = true;

                var arr = thisobj.waitCreateBtns;
                while (arr.length > 0)
                {
                    var args = arr.shift();
                    thisobj.regSwitchBtn(args[0], args[1], args[2]);
                }
            });
        },

        /**
         * 注册按钮
         * 
         * @param cmd 菜单命令
         * @param btn 按钮对象 {setVisible,setEnabled}
         * @param groupID 群组（主菜单、快捷菜单、其他）
         */
        regSwitchBtn : function(cmd, btn, groupID)
        {
            if (!this.isInit)
            {
                this.waitCreateBtns.push([ cmd, btn, groupID ]);
                return;
            }
            
            //保存命令和按钮的映射关系,供getBtnByCmd()方法用
            var btnArr = this.cmdBtnMap[cmd];
            btnArr = (!btnArr)?[]:btnArr;
            btnArr.push(btn);
            this.cmdBtnMap[cmd] = btnArr;
            
            var Cmd = WebAgent.Cmd;
            var btnMap = this.btnGroup["gid_" + groupID];
            this.btnGroup["gid_" + groupID] = btnMap = (!btnMap) ? {} : btnMap;

            var btn_ =
            {
                disable : function()
                {
                    btn.setEnabled(false);
                },

                enable : function()
                {
                    btn.setEnabled(true);
                },

                setVisible : function(isShow)
                {
                    btn.setVisible(isShow);
                }
            };

            btn_.disable();
            btnMap[cmd] = btn_;

            // 示忙<==>示闲 Cmd.SHOW_BUSY, Cmd.IDLE
            if (cmd == Cmd.SHOW_BUSY || cmd == Cmd.IDLE)
            {
                var cmd1 = Cmd.SHOW_BUSY;
                var cmd2 = Cmd.IDLE;

                var btn1 = btnMap[cmd1];
                var btn2 = btnMap[cmd2];

                if (btn1 && btn2)
                {
                    var swtichBtn = this.createSwitchBtn(cmd1, cmd2, btn1, btn2);
                    btnMap[cmd1] = swtichBtn;
                    btnMap[cmd2] = null;
                    this.waitForRegBtns.push(
                    {
                        "cmd" : cmd1,
                        "btn" : swtichBtn
                    });
                }
            }
            
            // 媒体/取消媒体Cmd.MEDIA, Cmd.CANCEL_MEDIA
            else if (cmd == Cmd.MEDIA || cmd == Cmd.CANCEL_MEDIA)
            {
                var cmd1 = Cmd.MEDIA;
                var cmd2 = Cmd.CANCEL_MEDIA;

                var btn1 = btnMap[cmd1];
                var btn2 = btnMap[cmd2];

                if (btn1 && btn2)
                {
                    var swtichBtn = this.createSwitchBtn(cmd1, cmd2, btn1, btn2);
                    btnMap[cmd1] = swtichBtn;
                    btnMap[cmd2] = null;
                    this.waitForRegBtns.push(
                    {
                        "cmd" : cmd1,
                        "btn" : swtichBtn
                    });
                }
            }

            // 静音<==>取消 静音 Cmd.MUTE, Cmd.UNMUTE
            else if (cmd == Cmd.MUTE || cmd == Cmd.UNMUTE)
            {
                var cmd1 = Cmd.MUTE;
                var cmd2 = Cmd.UNMUTE;

                var btn1 = btnMap[cmd1];
                var btn2 = btnMap[cmd2];

                if (btn1 && btn2)
                {
                    var swtichBtn = this.createSwitchBtn(cmd1, cmd2, btn1, btn2);
                    btnMap[cmd1] = swtichBtn;
                    btnMap[cmd2] = null;
                    this.waitForRegBtns.push(
                    {
                        "cmd" : cmd1,
                        "btn" : swtichBtn
                    });
                }
            }

            // 保持<==>取消保持 Cmd.HOLD, Cmd.RE_HOLD
            else if (cmd == Cmd.HOLD || cmd == Cmd.RE_HOLD)
            {
                var cmd1 = Cmd.HOLD;
                var cmd2 = Cmd.RE_HOLD;

                var btn1 = btnMap[cmd1];
                var btn2 = btnMap[cmd2];

                if (btn1 && btn2)
                {
                    var swtichBtn = this.createSwitchBtn(cmd1, cmd2, btn1, btn2);
                    btnMap[cmd1] = swtichBtn;
                    btnMap[cmd2] = null;
                    this.waitForRegBtns.push(
                    {
                        "cmd" : cmd1,
                        "btn" : swtichBtn
                    });
                }
            }

            // 整理<==>取消整理 Cmd.MANUAL_ADJUEST, Cmd.CANCEL_ADJUST
            else if (cmd == Cmd.MANUAL_ADJUST || cmd == Cmd.CANCEL_ADJUST)
            {
                var cmd1 = Cmd.MANUAL_ADJUST;
                var cmd2 = Cmd.CANCEL_ADJUST;

                var btn1 = btnMap[cmd1];
                var btn2 = btnMap[cmd2];

                if (btn1 && btn2)
                {
                    var swtichBtn = this.createSwitchBtn(cmd1, cmd2, btn1, btn2);
                    btnMap[cmd1] = swtichBtn;
                    btnMap[cmd2] = null;
                    this.waitForRegBtns.push(
                    {
                        "cmd" : cmd1,
                        "btn" : swtichBtn
                    });
                }
            }
            
            // 媒体示忙<=>媒体示闲 Cmd.MEDIA_BUSY, cmd == Cmd.MEDIA_IDLE
            else if (cmd == Cmd.MEDIA_BUSY || cmd == Cmd.MEDIA_IDLE)
            {
                var cmd1 = Cmd.MEDIA_BUSY;
                var cmd2 = Cmd.MEDIA_IDLE;

                var btn1 = btnMap[cmd1];
                var btn2 = btnMap[cmd2];

                if (btn1 && btn2)
                {
                    var swtichBtn = this.createSwitchBtn(cmd1, cmd2, btn1, btn2);
                    btnMap[cmd1] = swtichBtn;
                    btnMap[cmd2] = null;
                    this.waitForRegBtns.push(
                    {
                        "cmd" : cmd1,
                        "btn" : swtichBtn
                    });
                }
            }

            // 普通按钮
            else
            {
                this.waitForRegBtns.push(
                {
                    "cmd" : cmd,
                    "btn" : btn_
                });
            }

            this.reg();
        },

        /**
         * 创建切换按钮
         * 
         * @param cmd1 {String}
         * @param cmd2 {String}
         * @param btn1 {WebAgent.IButton}
         * @param btn2 {WebAgent.IButton}
         * @returns
         */
        createSwitchBtn : function(cmd1, cmd2, btn1, btn2)
        {
            if (!(cmd1 && cmd2 && btn1 && btn2))
            {
                return null;
            }

            btn2.setVisible(false);

            var _btn1 =
            {
                currentCmd : cmd1,

                disable : function()
                {
                    this.btnMap[this.currentCmd].disable();
                },

                enable : function()
                {
                    this.btnMap[this.currentCmd].enable();
                },

                switchTo : function(cmd)
                {
                    var oldBtn = this.btnMap[this.currentCmd];
                    var newBtn = this.btnMap[cmd];

                    oldBtn.setVisible(false);
                    newBtn.setVisible(true);
                    return _btn2;
                }
            };

            _btn1.btnMap = {};
            _btn1.btnMap[cmd1] = btn1;
            _btn1.btnMap[cmd2] = btn2;
            
            var _btn2 =
            {
                currentCmd : cmd2,

                disable : function()
                {
                    this.btnMap[this.currentCmd].disable();
                },

                enable : function()
                {
                    this.btnMap[this.currentCmd].enable();
                },

                switchTo : function(cmd)
                {
                    var oldBtn = this.btnMap[this.currentCmd];
                    var newBtn = this.btnMap[cmd];

                    oldBtn.setVisible(false);
                    newBtn.setVisible(true);
                    return _btn1;
                }
            };

            _btn2.btnMap = {};
            _btn2.btnMap[cmd1] = btn1;
            _btn2.btnMap[cmd2] = btn2;

            return _btn1;
        },

        /**
         * 向WebAgent注册按钮
         */
        reg : function()
        {
            if (!WebAgent.isInit) return;

            var arr = this.waitForRegBtns;
            while (arr.length > 0)
            {
                var btnObj = arr.shift();
                var regSucc = WebAgent.regBtn(btnObj.cmd, btnObj.btn);
                if(!regSucc) btnObj.btn.enable();
            }
        },
        
        /**
         * 获取命令对应的按钮
         * @param cmd {Array<IButton>}
         */
        getBtnByCmd : function(cmd)
        {
            var btnArr = this.cmdBtnMap[cmd];
            return (!btnArr)?[] : btnArr;
        }
    };
    
    // 加载必要的文件
    SwitchBtnCreator.init();

    // 初始化成功后，注册按钮
    WebAgent.onInit(function()
    {
        SwitchBtnCreator.reg();
    });

    // 扩展WebAgent方法
    WebAgent.extend(
    {
        regSwitchBtn : function(cmd, btn, groupID)
        {
           SwitchBtnCreator.regSwitchBtn(cmd, btn, groupID);
        },
        
        getBtnByCmd : function(cmd)
        {
            return SwitchBtnCreator.getBtnByCmd(cmd);
        },
        
        // 刷新页面退出的特殊方法
        logout2 : function()
        {
            WebAgent.loadjs(WebAgent.AinfOCX.ainfSevURL+"StatusMonitor?0,0,0,SignOut&callback=_jqjsp&_1307942293885=");
        },
        
        /**
         * 轻量级调用A接口方法，立即调用，无结果返回。
         * 该方法主要是用于在onbeforeunload事件触发时调用，invoker在此时可能无法被调用。
         * 
         * @parem method {String}
         * @param args {Array}
         */
        lightweightInvoke: function(method,args)
        {
            var url = WebAgent.AinfOCX.ainfSevURL+method+"?"+args+"&callback=_jqjsp";
            WebAgent.loadjs(url);
        }
    });

})(WebAgent);