/**
 * 管理快捷键的插件
 */
(function(WebAgent)
{
    // 在WebAgent初始化前就等待进行注册的快捷键
    var waitToRegister = new Object();
    
    /**
     * 添加热键
     * @param {String} name 热键的配置项的名称
     * @param {Object} keys 键值组合，可以是Array也可以是String。Array的元素是键值，传入String的话就是类似"17+18+79"这样的格式。只能是Ctrl,Alt,Shift和字母键的组合。
     */
    function doRegShortcutKey(name, keys)
    {
        if (name && keys) 
        {
            var strKeys = keys;
            if (Object.prototype.toString.call(keys) === "[object Array]" && keys.length > 0) 
            {
                var arrayKeys = new Array();
                for (var i = 0; i < keys.length; ++i) 
                {
                    arrayKeys.push(keys[i]);
                }
                strKeys = arrayKeys.join("+");
            }
            WebAgent.invoker("SetHotKey", ["add", name, strKeys]);
        }
    }
    
    /**
     * 添加快捷键,如果WebAgent没有初始化则会将其放在待初始化的缓存中.
     * 
     * @param {String} name 热键的配置项的名称
     * @param {Object} keys 键值组合，可以是Array也可以是String。Array的元素是键值，传入String的话就是类似"17+18+79"这样的格式。只能是Ctrl,Alt,Shift和字母键的组合。
     */
    function regShortcutKey(name, keys)
    {
        if (WebAgent.isInit) 
        {
            doRegShortcutKey(name, keys);
        }
        else if (!waitToRegister[name]) 
        {
            waitToRegister[name] = keys;
        }
    }
    
    /**
     * 清除所有热键
     */
    function clearShortcutKey()
    {
        WebAgent.invoker("SetHotKey", "clear");
    }
    
    /**
     * 将在待初始化缓存中的快捷键配置信息配置到AgentService中
     */
    function flush()
    {
        if (WebAgent.isInit) 
        {            
            for (var attr in waitToRegister) 
            {
                doRegShortcutKey(attr, waitToRegister[attr]);
                delete waitToRegister[attr];
            }
        }
    }
    
    
    
    // 等待WebAegent初始化后进行注册
    WebAgent.onInit(function()
    {
        flush();
    });
    
    // 扩展WebAgent对象
    WebAgent.extend({
    
        /**
         * 添加热键
         * @param {String} name 热键的配置项的名称
         * @param {Object} keys 键值组合，可以是Array也可以是String。Array的元素是键值，传入String的话就是类似"17+18+79"这样的格式。只能是Ctrl,Alt,Shift和字母键的组合。
         */
        regShortcutKey: regShortcutKey,
        
        /**
         * 移除热键
         * @param {String} name 热键的配置项的名称
         */
        removeShortcutKey: function(name)
        {
            if (name) 
            {
                WebAgent.invoker("SetHotKey", ["del", name]);
            }
        },
        
        /**
         * 清除所有热键
         */
        clearShortcutKey: clearShortcutKey,
        
        /**
         * 启用热键功能
         * @param {boolean} active 当为true时启用
         */
        setShortcutKeyActive: function(active)
        {
            WebAgent.invoker("SetHotKey", ["active", active ? "1" : "0"]);
        }
    });
    
})(WebAgent);
