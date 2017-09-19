(function(WebAgent)
{
    var htmlUrl = null, $toolBarFrame, $container;

    WebAgent.onInit(function()
    {
        var jsBase = WebAgent.getBase();
        jsBase = jsBase.substring(0, jsBase.length - 5);

        htmlUrl = jsBase + "plugin/toolbar/menuFrame.html";
    });

    WebAgent.extend({
        loadToolbar : function(container)
        {
            $container = $(container);
            $toolBarFrame = $("<iframe id='menu'></iframe>");
            $toolBarFrame.attr("frameborder", "0");
            $toolBarFrame.attr("allowTransparency", "true");
            $toolBarFrame.prependTo($container);
            $toolBarFrame.css({
                'width' : '100%',
                'height' : '100%',
                'border' : 'none',
                'background' : 'transparent'
            });
            setTimeout(function(){
                $toolBarFrame.attr("src", htmlUrl);
            });
        }
    });

})(WebAgent);