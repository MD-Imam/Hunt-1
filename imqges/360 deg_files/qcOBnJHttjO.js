if (self.CavalryLogger) { CavalryLogger.start_js(["OSXsJ"]); }

__d("PopoverMenuDisableTypeahead",[],(function(a,b,c,d,e,f){a=function(){"use strict";function a(a){this.$1=a}var b=a.prototype;b.enable=function(){this.$1.disableTypeaheadActivation()};b.disable=function(){this.$1.enableTypeaheadActivation()};return a}();e.exports=a}),null);
__d("UFIShareNowMenu.react",["ContextualDialogArrow","ContextualLayerAsyncRelative","ContextualLayerAutoFlip","PopoverAsyncMenu.react","PopoverMenuDisableTypeahead","PopoverMenuShowOnHover","React","ShareNowController","prop-types","qex"],(function(a,b,c,d,e,f){"use strict";var g=b("React");a=function(a){babelHelpers.inheritsLoose(c,a);function c(){var c,d;for(var e=arguments.length,f=new Array(e),g=0;g<e;g++)f[g]=arguments[g];return(c=d=a.call.apply(a,[this].concat(f))||this,d.$1=function(a){if(!a)return;a=a.getPopoverMenu();b("ShareNowController").initMenu(a);d.props.focusOnInit&&a.getTriggerElem().focus();d.props.openOnInit&&a.getTriggerElem().click()},c)||babelHelpers.assertThisInitialized(d)}var d=c.prototype;d.render=function(){var a=this.props,c=a.children,d=a.className,e=a.endpoint,f=a.endpointData,h=a.onShow;a=a.onHide;var i=b("qex")._("1087397")?[b("PopoverMenuDisableTypeahead"),b("PopoverMenuShowOnHover")]:[b("PopoverMenuDisableTypeahead")];return g.jsx(b("PopoverAsyncMenu.react"),{alignv:"baseline",behaviors:i,className:d,endpoint:e,endpointData:f,onShow:h,onHide:a,layerBehaviors:[b("ContextualLayerAutoFlip"),b("ContextualDialogArrow"),b("ContextualLayerAsyncRelative")],ref:this.$1,children:c})};return c}(g.Component);a.propTypes={focusOnInit:b("prop-types").bool,openOnInit:b("prop-types").bool};e.exports=a}),null);