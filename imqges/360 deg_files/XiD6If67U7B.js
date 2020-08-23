if (self.CavalryLogger) { CavalryLogger.start_js(["bIVXf"]); }

__d("AlignmentEnum",["prop-types","objectValues"],(function(a,b,c,d,e,f){"use strict";a={left:"left",center:"center",right:"right"};c=b("objectValues")(a);d=babelHelpers["extends"]({},a,{values:c,propType:b("prop-types").oneOf(c)});e.exports=d}),null);
__d("CornerEnum",["objectValues"],(function(a,b,c,d,e,f){"use strict";a={topLeft:"topLeft",topRight:"topRight",bottomRight:"bottomRight",bottomLeft:"bottomLeft"};c=b("objectValues")(a);d=babelHelpers["extends"]({},a,{values:c});e.exports=d}),null);
__d("SideEnum",["prop-types","objectValues"],(function(a,b,c,d,e,f){"use strict";a={top:"top",right:"right",bottom:"bottom",left:"left"};c=b("objectValues")(a);d=babelHelpers["extends"]({},a,{values:c,propType:b("prop-types").oneOf(c)});e.exports=d}),null);
__d("FBProfilePhotoShadow.react",["cx","React","joinClasses"],(function(a,b,c,d,e,f,g){var h=b("React");a=function(a){"use strict";babelHelpers.inheritsLoose(c,a);function c(){return a.apply(this,arguments)||this}var d=c.prototype;d.render=function(){var a=this.props,c=a.className,d=a.children;a=babelHelpers.objectWithoutPropertiesLoose(a,["className","children"]);d=h.Children.only(d);return h.jsx("div",babelHelpers["extends"]({},a,{className:b("joinClasses")(c,"_38vo"),children:h.cloneElement(d,{className:b("joinClasses")(d.props.className,"_44ma")})}))};return c}(h.Component);e.exports=a}),null);
__d("ClickableArea.react",["Focus","React","ReactDOM"],(function(a,b,c,d,e,f){var g=b("React");a=function(a){"use strict";babelHelpers.inheritsLoose(c,a);function c(){return a.apply(this,arguments)||this}var d=c.prototype;d.componentDidMount=function(){if(this.props.buttonRef){var a=this.props.buttonRef();b("Focus").relocate(b("ReactDOM").findDOMNode(a),b("ReactDOM").findDOMNode(this))}};d.render=function(){var a=this.props,b=a.children,c=a.onClick;a=babelHelpers.objectWithoutPropertiesLoose(a,["children","onClick"]);return g.cloneElement(g.Children.only(b),babelHelpers["extends"]({},a,{onClick:c}))};return c}(g.Component);e.exports=a}),null);
__d("makeSUIThemeGetter",["SUITheme","memoizeWithArgs"],(function(a,b,c,d,e,f){"use strict";function a(a){function c(c){var d={};Object.keys(a).forEach(function(b){var e=a[b];e!==void 0&&(d[b]=e(c))});return new(b("SUITheme"))({id:c.id,components:d})}return b("memoizeWithArgs")(c,function(a){return a.id})}e.exports=a}),null);
__d("XUIDialogButton.react",["cx","React","XUIButton.react","joinClasses"],(function(a,b,c,d,e,f,g){var h=b("React");a=function(a){"use strict";babelHelpers.inheritsLoose(c,a);function c(){return a.apply(this,arguments)||this}var d=c.prototype;d.render=function(){var a=this.props.action,c=(a==="confirm"?"layerConfirm":"")+(a==="cancel"?" layerCancel":"")+(a==="button"?" layerButton":""),d=this.props.href;a==="cancel"?d="#":a==="button"&&((d==null||d==="")&&(d="#"));return h.jsx(b("XUIButton.react"),babelHelpers["extends"]({},this.props,{className:b("joinClasses")(this.props.className,c),href:d,role:"button"}))};return c}(h.Component);e.exports=a}),null);
__d("XUIDialogOkayButton.react",["cx","fbt","React","XUIDialogButton.react","joinClasses","prop-types"],(function(a,b,c,d,e,f,g,h){var i=b("React");a=function(a){"use strict";babelHelpers.inheritsLoose(c,a);function c(){return a.apply(this,arguments)||this}var d=c.prototype;d.render=function(){return i.jsx(b("XUIDialogButton.react"),babelHelpers["extends"]({},this.props,{className:b("joinClasses")(this.props.className,"_2z1w"),action:this.props.action,label:h._("OK")}))};return c}(i.Component);a.propTypes={action:b("prop-types").oneOf(["confirm","cancel","button"]).isRequired};e.exports=a}),null);
__d("XUIText.react",["cx","React","joinClasses","prop-types"],(function(a,b,c,d,e,f,g){var h=b("React");a=function(a){"use strict";babelHelpers.inheritsLoose(c,a);function c(){return a.apply(this,arguments)||this}var d=c.prototype;d.getAriaLevel=function(a,b){if(a==="header1")return 1;else if(a==="header2")return 2;else if(a==="header3")return 3;else if(a==="header4")return 4;return b};d.render=function(){var a=this.props,c=a.color,d=a.palette,e=a.type,f=a.size,g=a.weight,i=a.display,j=a.headingLevel,k=a.children;a=babelHelpers.objectWithoutPropertiesLoose(a,["color","palette","type","size","weight","display","headingLevel","children"]);e=(e==="serif"?"_5s6c":"")+(f==="small"?" _50f3":"")+(f==="medium"?" _50f4":"")+(f==="large"?" _50f5":"")+(f==="xlarge"||f==="xlarge_DEPRECATED"?" _50f6":"")+(g==="bold"?" _50f7":"")+(g==="normal"?" _5kx5":"")+(f==="display"?" _2iei":"")+(f==="header1"?" _2iej":"")+(f==="header2"?" _2iek":"")+(f==="header3"?" _2iel":"")+(f==="header4"?" _2iem":"")+(f==="body1"?" _2ien":"")+(f==="body2"?" _2ieo":"")+(f==="body3"?" _2iep":"")+(f==="meta1"?" _2ieq":"")+(c==="blueLink"?" _rzx":"")+(c==="white"?" _2ier":"")+(c==="highlight"?" _1hk0":"")+(c==="positive"?" _2iet":"")+(c==="negative"?" _2ieu":"")+(d!=="dark"&&c==="placeholder"?" _rzy":"")+(d!=="dark"&&c==="primary"?" _2iev":"")+(d!=="dark"&&c==="secondary"?" _2iex":"")+(d!=="dark"&&c==="disabled"?" _2iey":"")+(d==="dark"&&c==="primary"?" _2iez":"")+(d==="dark"&&c==="secondary"?" _2ie-":"")+(d==="dark"&&c==="disabled"?" _2ie_":"");g=this.getAriaLevel(f,j);g!==void 0&&g!==null&&(a=babelHelpers["extends"]({},a,{role:"heading","aria-level":""+g}));return i==="block"?h.jsx("div",babelHelpers["extends"]({},a,{className:b("joinClasses")(this.props.className,e),children:k})):h.jsx("span",babelHelpers["extends"]({},a,{className:b("joinClasses")(this.props.className,e),children:k}))};return c}(h.Component);a.propTypes={color:(c=b("prop-types")).oneOf(["primary","secondary","blueLink","placeholder","disabled","white","highlight","positive","negative"]),display:c.oneOf(["inline","block"]),headingLevel:c.oneOf([1,2,3,4,5,6]),palette:c.oneOf(["light","dark"]),size:c.oneOf(["small","medium","large","xlarge","xlarge_DEPRECATED","inherit","display","header1","header2","header3","header4","body1","body2","body3","meta1"]),type:c.oneOf(["serif","inherit"]),weight:c.oneOf(["bold","inherit","normal"])};a.defaultProps={type:"inherit",size:"inherit",weight:"inherit",display:"inline"};e.exports=a}),null);
__d("XUIDialogBody.react",["cx","React","XUIText.react","joinClasses"],(function(a,b,c,d,e,f,g){var h=b("React");a=function(a){"use strict";babelHelpers.inheritsLoose(c,a);function c(){return a.apply(this,arguments)||this}var d=c.prototype;d.render=function(){var a="_4-i2"+(this.props.useCustomPadding?"":" _pig");return h.jsx(b("XUIText.react"),babelHelpers["extends"]({},this.props,{className:b("joinClasses")(this.props.className,a),display:"block",size:this.props.fontSize,children:this.props.children}))};return c}(h.Component);a.defaultProps={fontSize:"medium"};e.exports=a}),null);
__d("XUIOverlayFooter.react",["cx","React","joinClasses"],(function(a,b,c,d,e,f,g){var h=b("React");a=function(a){"use strict";babelHelpers.inheritsLoose(c,a);function c(){return a.apply(this,arguments)||this}var d=c.prototype;d.render=function(){return h.jsx("div",babelHelpers["extends"]({},this.props,{className:b("joinClasses")(this.props.className,"_5lnf uiOverlayFooter"),children:this.props.children}))};return c}(h.Component);e.exports=a}),null);
__d("XUIDialogFooter.react",["cx","LeftRight.react","React","XUIOverlayFooter.react","XUIText.react","joinClasses","prop-types"],(function(a,b,c,d,e,f,g){var h=b("React");a=function(a){"use strict";babelHelpers.inheritsLoose(c,a);function c(){return a.apply(this,arguments)||this}var d=c.prototype;d.render=function(){var a="_5a8u"+(this.props.fullBleedBorder?" _27qq":""),c=this.props,d=c.children,e=c.leftContent;c=babelHelpers.objectWithoutPropertiesLoose(c,["children","leftContent"]);return h.jsx(b("XUIOverlayFooter.react"),babelHelpers["extends"]({},c,{className:b("joinClasses")(this.props.className,a),children:h.jsx(b("XUIText.react"),{display:"block",fontSize:this.props.fontSize,children:h.jsxs(b("LeftRight.react"),{children:[h.jsx("div",{children:e}),h.jsx("div",{children:d})]})})}))};return c}(h.Component);a.propTypes={fontSize:b("prop-types").oneOf(["medium","inherit"]),fullBleedBorder:b("prop-types").bool,leftContent:b("prop-types").object};a.defaultProps={fontSize:"medium"};e.exports=a}),null);
__d("FBStoriesGating",["gkx","qex"],(function(a,b,c,d,e,f){"use strict";a={shouldUseTrayMigration:function(){return b("qex")._("835044")||!1},getMaxBucketsForTrayLoad:function(){var a;return(a=b("qex")._("863217"))!=null?a:100},isFriendsAndConnectionsOptionDeprecated:function(){return b("gkx")("1234255")}};e.exports=a}),null);
__d("QPEventHandling",[],(function(a,b,c,d,e,f){"use strict";a={registerClickListener:function(a,b,c){a.addEventListener("click",c)}};e.exports=a}),null);
__d("SUIBorderUtils",["CornerEnum","Locale","SideEnum","prop-types"],(function(a,b,c,d,e,f){"use strict";var g=b("CornerEnum").values,h=b("SideEnum").values;c={ALL_CORNERS:g,ALL_SIDES:h,BorderedSidesPropType:(a=b("prop-types")).arrayOf(a.oneOf(h)),RoundedCornersPropType:a.arrayOf(a.oneOf(g)),getBorderRadiusStyles:function(a,c){c=c;if(a===g)return c!=null?{borderRadius:c}:null;a=new Set(a);if(a.size===g.length)return c!=null?{borderRadius:c}:null;c==null&&(c="2px");a={borderTopLeftRadius:a.has("topLeft")?c:"0",borderTopRightRadius:a.has("topRight")?c:"0",borderBottomRightRadius:a.has("bottomRight")?c:"0",borderBottomLeftRadius:a.has("bottomLeft")?c:"0"};return b("Locale").isRTL()?{borderTopLeftRadius:a.borderTopRightRadius,borderTopRightRadius:a.borderTopLeftRadius,borderBottomRightRadius:a.borderBottomLeftRadius,borderBottomLeftRadius:a.borderBottomRightRadius}:a},getBorderWidthStyles:function(a){if(a===h)return null;a=new Set(a);if(a.size===h.length)return null;a={borderTopWidth:a.has("top")?"1px":"0",borderRightWidth:a.has("right")?"1px":"0",borderBottomWidth:a.has("bottom")?"1px":"0",borderLeftWidth:a.has("left")?"1px":"0"};return b("Locale").isRTL()?babelHelpers["extends"]({},a,{borderRightWidth:a.borderLeftWidth,borderLeftWidth:a.borderRightWidth}):a}};e.exports=c}),null);
__d("SUITypeStyle",["UserAgent_DEPRECATED"],(function(a,b,c,d,e,f){"use strict";d=b("UserAgent_DEPRECATED").windows()?"":"0.01em";var g={letterSpacing:d},h={"40px":"50px","32px":"40px","24px":"30px","16px":"20px","14px":"18px","12px":"16px","11px":"14px"};function a(a){return a+"px"}function c(a){return babelHelpers["extends"]({},g,a,{lineHeight:h[a.fontSize]})}c.createSUIFontSize=a;e.exports=c}),null);
__d("SUIButtonContext",["React"],(function(a,b,c,d,e,f){"use strict";a=b("React");c=a.createContext({isFixedWidthPadded:void 0});e.exports=c}),null);
__d("SUIGlyphIcon.react",["Image.react","React","prop-types"],(function(a,b,c,d,e,f){"use strict";var g=b("React");function a(a){var c=a.active,d=a.disabled,e=a.focused,f=a.hover,h=a.srcActive,i=a.srcDefault,j=a.srcDisabled,k=a.srcFocused,l=a.srcHover;a=babelHelpers.objectWithoutPropertiesLoose(a,["active","disabled","focused","hover","srcActive","srcDefault","srcDisabled","srcFocused","srcHover"]);i=i;d===!0&&j!=null&&j!==""?i=j:c===!0&&h!=null&&h!==""?i=h:e===!0&&k!=null&&k!==""?i=k:f===!0&&l!=null&&l!==""&&(i=l);return g.jsx(b("Image.react"),babelHelpers["extends"]({},a,{src:i}))}d=(c=b("prop-types")).oneOfType([c.object,c.string]);a.propTypes={active:c.bool,disabled:c.bool,hover:c.bool,srcActive:d,srcDefault:d.isRequired,srcDisabled:d,srcHover:d};e.exports=a}),null);
__d("XGraphQLBatchAPIController",["XController"],(function(a,b,c,d,e,f){e.exports=b("XController").create("/api/graphqlbatch/",{queries:{type:"String"},batch_name:{type:"String"},scheduler:{type:"Enum",enumType:1},shared_params:{type:"String"},fb_api_req_friendly_name:{type:"String"},uft_request_id:{type:"String"}})}),null);
__d("WebGraphQL",["ActorURI","AsyncRequest","Deferred","FBLogger","WebGraphQLConfig","XGraphQLBatchAPIController","getAsyncParams"],(function(a,b,c,d,e,f){"use strict";function g(a){var c=a.getURIBuilder().getURI(),d={exec:function(a,b){return d.execAll([a],b)[0]},execAll:function(a,d){var e={},f={};a=a.map(function(a,c){c="o"+c;e[c]={doc_id:a.__getDocID(),query_params:a.__getVariables()};a=new(b("Deferred"))();f[c]=a;return a.getPromise()});var g=babelHelpers["extends"]({},b("getAsyncParams")("POST"));d&&d.actorID!=null&&(g[b("ActorURI").PARAMETER_ACTOR]=d.actorID);var h=d&&d.batchName?{batch_name:d.batchName}:{};h=new(b("AsyncRequest"))().setURI(c).setOption("suppressEvaluation",!0).setMethod("POST").setRequestHeader("Content-Type","application/x-www-form-urlencoded").setData(babelHelpers["extends"]({},h,g,{queries:JSON.stringify(e)})).setHandler(function(a){a=a.getPayload();try{var c=a.response.split("\r\n");c.pop();c=c.map(function(a){return JSON.parse(a)});c.forEach(function(a){return Object.keys(a).forEach(function(b){var c=f[b];if(c){b=a[b];b.errors?c.reject(b):b.data?c.resolve(b.data):c.reject({data:{},errors:[{message:"Unexpected response received from server.",severity:"CRITICAL",response:b}]})}})})}catch(d){c=a.response;b("FBLogger")("webgraphql").catching(d).mustfix("Bad response: ","%s%s",c.substr(0,250),c.length>250?"[truncated]":"")}Object.keys(f).forEach(function(a){f[a].isSettled()||f[a].reject({data:{},errors:[{message:"No response received from server.",severity:"CRITICAL"}]})})}).setTimeoutHandler(b("WebGraphQLConfig").timeout,function(){Object.keys(f).forEach(function(a){f[a].isSettled()||f[a].reject({data:{},errors:[{message:"Request timed out.",severity:"CRITICAL"}]})})}).setErrorHandler(function(a){var b=a.getErrorDescription();Object.keys(f).forEach(function(c){f[c].isSettled()||f[c].reject({data:{},errors:[{message:b,severity:"CRITICAL",error:a.getError()}]})})});d&&d.msgrRegion&&h.setRequestHeader("X-MSGR-Region",d.msgrRegion);h.setAllowCrossPageTransition(!0);h.send();return a},__forController:g};return d}a=g(b("XGraphQLBatchAPIController"));e.exports=a}),null);
__d("XUIGrayText.react",["cx","React","XUIText.react","joinClasses","prop-types"],(function(a,b,c,d,e,f,g){var h=b("React");a=function(a){"use strict";babelHelpers.inheritsLoose(c,a);function c(){return a.apply(this,arguments)||this}var d=c.prototype;d.render=function(){var a=this.props,c=a.shade;a=babelHelpers.objectWithoutPropertiesLoose(a,["shade"]);c=(c==="light"?"_50f8":"")+(c==="medium"?" _c24":"")+(c==="dark"?" _50f9":"");return h.jsx(b("XUIText.react"),babelHelpers["extends"]({},a,{className:b("joinClasses")(this.props.className,c),children:this.props.children}))};return c}(h.Component);a.propTypes={shade:b("prop-types").oneOf(["light","medium","dark"])};a.defaultProps={shade:"light"};e.exports=a}),null);
__d("ImageBlock.react",["cx","invariant","LeftRight.react","React","joinClasses"],(function(a,b,c,d,e,f,g,h){var i=b("React");function j(a){a=a.children;a&&(a.length===2||a.length===3)||h(0,97);a[0]!==null||h(0,98);return a}function k(a){return"img _8o"+(a==="small"?" _8r":"")+(a==="medium"?" _8s":"")+(a==="large"?" _8t":"")}a=function(a){"use strict";babelHelpers.inheritsLoose(c,a);function c(){return a.apply(this,arguments)||this}var d=c.prototype;d.render=function(){var a=j(this.props),c=a[0],d=a[1];a=a[2];var e=this.props,f=e.imageClassName,g=e.contentClassName,h=e.spacing;e=babelHelpers.objectWithoutPropertiesLoose(e,["imageClassName","contentClassName","spacing"]);var l=c.props,m=l.className,n=l.alt,o=l.tabIndex;l=l.title;m={className:b("joinClasses")(m,k(h),f)};c.type==="img"?n===void 0&&(m.alt=""):(c.type==="a"||c.type==="link")&&o===void 0&&l===void 0&&c.props["aria-label"]===void 0&&(m.tabIndex="-1",m["aria-hidden"]="true");c=i.cloneElement(c,m);f=!0;this.props.flexibleContent!=null&&(f=this.props.flexibleContent);n=b("joinClasses")(g,(f?"_42ef":"")+(h==="small"?" _8u":""));!a?o=i.jsx("div",{className:n,children:d}):o=i.jsxs(b("LeftRight.react"),{className:n,direction:b("LeftRight.react").DIRECTION.right,children:[d,a]});return i.jsxs(b("LeftRight.react"),babelHelpers["extends"]({},e,{direction:b("LeftRight.react").DIRECTION.left,children:[c,o]}))};return c}(i.Component);a.defaultProps={spacing:"small"};e.exports=a}),null);
__d("ObserveResize.react",["useResizeObserver"],(function(a,b,c,d,e,f){"use strict";function a(a){var c=a.onResize;a=a.children;c=b("useResizeObserver")(c);return a(c)}e.exports=a}),null);
__d("shallowArrayEqual",[],(function(a,b,c,d,e,f){function a(a,b){if(a===b)return!0;if(a.length!==b.length)return!1;for(var c=0,d=a.length;c<d;c++)if(a[c]!==b[c])return!1;return!0}e.exports=a}),null);
__d("objectKeys",[],(function(a,b,c,d,e,f){function a(a){return Object.keys(a)}e.exports=a}),null);
__d("FluxContainerInstrumentation",["invariant"],(function(a,b,c,d,e,f,g){"use strict";var h=null;function i(a,b,c){c=c||b;var d=!1;if(typeof b.getDependencyStores==="function"){var e=b.getDependencyStores();for(var f=0;f<e.length;f++)e[f].hasChanged()&&(d=d||i(a,e[f],c))}d||(a.push(b.__moduleID||"unnamed_store"),d=!0);return d}var j={updateTracking:null,inject:function(a){h==null||g(0,1394),h=a,a.updateTracking&&(j.updateTracking=a.updateTracking)},hasInstrumentation:function(){return Boolean(h)},onInit:function(a){h&&h.init(a)},onCalculateStateStart:function(a){return h?h.calculateStateStart(a):null},onDidUpdate:function(a,b,c,d,e,f){h&&h.didUpdate(a,b,c,d,e,f)},addStoreDependencies:i};e.exports=j}),null);
__d("FluxContainerNameUtils",[],(function(a,b,c,d,e,f){"use strict";function a(a,b){if(a&&b)try{Object.defineProperty(a,"name",{value:b})}catch(a){}return a}e.exports={nameContainer:a}}),null);
__d("getUniformDispatcher",["invariant"],(function(a,b,c,d,e,f,g){"use strict";function a(a){a&&a.length||g(0,18238);a=a[0].getDispatcher();return a}e.exports=a}),null);
__d("FluxContainerSubscriptions",["expectationViolation","getUniformDispatcher","nullthrows","shallowArrayEqual"],(function(a,b,c,d,e,f){"use strict";a=function(){function a(a,b){this.$1=[],this.$4=a!=null?a:this.constructor.name,this.$5=b}var c=a.prototype;c.setStores=function(a){var c=this;if(this.$3&&b("shallowArrayEqual")(this.$3,a))return;this.$3=a;this.$8();this.$9();if(a.length===0){b("expectationViolation")("there should be at least 1 store in a flux subscription");return}var d=!1,e=[],f=function(){d&&(c.$1.forEach(function(a){return a()}),d=!1)},g=b("getUniformDispatcher")(a);e=function(){if(g.registerContainer!=null)c.$7=g.registerContainer(function(a){f()},c.$4);else{var b=a.map(function(a){return a.getDispatchToken()});c.$7=g.register(function(a){g.waitFor(b),f()},c.$4,null,c.$4)}g.explicitlyRegisterStore&&g.explicitlyRegisterStore(c)};this.$2=a.map(function(a){return a.addListener(function(){d=!0,c.$5!=null&&c.$5(a)})});e();this.$6=g};c.addListener=function(a){this.$1.push(a)};c.reset=function(){this.$8(),this.$9(),this.$10(),this.$11()};c.$8=function(){this.$2&&(this.$2.forEach(function(a){return a.remove()}),this.$2=null)};c.$9=function(){this.$6&&this.$7!=null&&this.$6.unregister(this.$7),this.$6=null,this.$7=null};c.$11=function(){this.$3=null};c.$10=function(){this.$1=[]};c.getDispatchToken=function(){return b("nullthrows")(this.$7,"dispatchToken must be set")};return a}();e.exports=a}),null);
__d("getModuleNameFromFluxContainer",[],(function(a,b,c,d,e,f){"use strict";function a(a){if(a==null)return null;var b=a.match(/.* \[from (.*?)\]/);if(!b)return a;a=b[1];b=a.indexOf(".");return b>0?a.substr(0,b):a}e.exports=a}),null);
__d("FluxContainer",["FluxContainerInstrumentation","FluxContainerNameUtils","FluxContainerSubscriptions","React","getModuleNameFromFluxContainer","gkx","shallowEqual","warning"],(function(a,b,c,d,e,f){"use strict";c=b("React");var g=c.Component,h=c.PureComponent,i=b("gkx")("938344"),j={pure:!0,pureProps:!1,withProps:!1,withContext:!1};function k(a,c){var d=babelHelpers["extends"]({},j,c||{}),e,f=d.name,g=function(){f=f||b("getModuleNameFromFluxContainer")(e?e.displayName||e.name:null)||"FluxContainer(unknown)";return f},k=function(c,e,f){e=d.withProps?e:void 0;f=d.withContext?f:void 0;var h=b("FluxContainerInstrumentation").onCalculateStateStart(g());c=a.calculateState(c,e,f);h&&h();return c},m=function(b,c){b=d.withProps?b:void 0;c=d.withContext?c:void 0;return a.getStores(b,c)};c=function(a){babelHelpers.inheritsLoose(c,a);function c(c,d){var f;f=a.call(this,c,d)||this;f.$BasicContainer2=null;e||(e=f.constructor);f.$BasicContainer1=new(b("FluxContainerSubscriptions"))(e.displayName||e.name,b("FluxContainerInstrumentation").hasInstrumentation()?function(a){b("FluxContainerInstrumentation").updateTracking&&b("FluxContainerInstrumentation").updateTracking.shouldRecord()&&(f.$BasicContainer2=f.$BasicContainer2||[],b("FluxContainerInstrumentation").addStoreDependencies(f.$BasicContainer2,a))}:null);i||f.$BasicContainer3(c,d);c=k(void 0,c,d);b("FluxContainerInstrumentation").updateTracking&&b("FluxContainerInstrumentation").updateTracking.initialState(babelHelpers.assertThisInitialized(f),g());f.state=babelHelpers["extends"]({},f.state||{},c);return f}var f=c.prototype;f.UNSAFE_componentWillReceiveProps=function(c,e){var f=this;a.prototype.UNSAFE_componentWillReceiveProps&&a.prototype.UNSAFE_componentWillReceiveProps.call(this,c,e);var h=!d.withProps||d.pureProps&&b("shallowEqual")(c,this.props),i=!d.withContext||d.pureProps&&b("shallowEqual")(e,this.context);if(i&&h)return;this.$BasicContainer1.setStores(m(c,e));var j=b("FluxContainerInstrumentation").updateTracking&&b("FluxContainerInstrumentation").updateTracking.getCurrentDispatch();this.setState(function(a){b("FluxContainerInstrumentation").updateTracking&&b("FluxContainerInstrumentation").updateTracking.receiveProps(f,g(),j);return k(a,c,e)})};f.componentDidMount=function(){a.prototype.componentDidMount&&a.prototype.componentDidMount.call(this),i&&this.$BasicContainer3(this.props,this.context)};f.componentWillUnmount=function(){a.prototype.componentWillUnmount&&a.prototype.componentWillUnmount.call(this),this.$BasicContainer1.reset()};f.$BasicContainer3=function(a,c){var d=this;this.$BasicContainer1.setStores(m(a,c));this.$BasicContainer1.addListener(function(){var a=d.$BasicContainer2;d.$BasicContainer2=null;var e=b("FluxContainerInstrumentation").updateTracking&&b("FluxContainerInstrumentation").updateTracking.getCurrentDispatch();d.setState(function(f,h){b("FluxContainerInstrumentation").updateTracking&&b("FluxContainerInstrumentation").updateTracking.storeEmitChange(d,g(),a||[],e);return k(f,h,c)})})};return c}(a);c=d.pure&&!(a.prototype instanceof h)?l(c):c;if(b("FluxContainerInstrumentation").hasInstrumentation()){var n=!1;c=function(a){babelHelpers.inheritsLoose(c,a);function c(c,d){c=a.call(this,c,d)||this;n||(b("FluxContainerInstrumentation").onInit(c.constructor),n=!0);return c}var d=c.prototype;d.componentDidUpdate=function(c,d){a.prototype.componentDidUpdate&&a.prototype.componentDidUpdate.call(this,c,d),b("FluxContainerInstrumentation").onDidUpdate(this,g(),c,this.props,d,this.state)};return c}(c)}b("FluxContainerNameUtils").nameContainer(c,d.name||a.displayName||a.name);return c}function l(a){a=function(c){babelHelpers.inheritsLoose(a,c);function a(){var a,b;for(var d=arguments.length,e=new Array(d),f=0;f<d;f++)e[f]=arguments[f];return(a=b=c.call.apply(c,[this].concat(e))||this,b.isPureFluxContainer=!0,a)||babelHelpers.assertThisInitialized(b)}var d=a.prototype;d.shouldComponentUpdate=function(a,c){return!b("shallowEqual")(this.props,a)||!b("shallowEqual")(this.state,c)};return a}(a);return a}function a(a,b,c,d){var e=function(e){babelHelpers.inheritsLoose(d,e);function d(){return e.apply(this,arguments)||this}d.getStores=function(b){function a(a,c){return b.apply(this,arguments)}a.toString=function(){return b.toString()};return a}(function(a,c){return b(a,c)});d.calculateState=function(b){function a(a,c,d){return b.apply(this,arguments)}a.toString=function(){return b.toString()};return a}(function(a,b,d){return c(a,b,d)});var f=d.prototype;f.render=function(){return a(this.state)};return d}(g);return k(e,d)}e.exports={create:k,createFunctional:a}}),null);
__d("BaseGraphQLSubscription",["regeneratorRuntime","BladeRunnerWWWRolloutUtils","CurrentLocale","CurrentUser","GQLSHeartbeatConfig","Random","RelayRTIUtils","SkywalkerManager","gkx","nullthrows","relay-runtime","uuid"],(function(a,b,c,d,e,f){var g=b("GQLSHeartbeatConfig").heartbeat_interval,h=b("RelayRTIUtils").computeRoutingHint,i=b("RelayRTIUtils").extractUseCaseFromTopic,j=b("RelayRTIUtils").logSubscriptionEvent,k=b("relay-runtime").getRequest,l=100,m=1e3,n=100,o="gqls_default_logging",p="gqls_workplace_logging";function q(a){if(b("gkx")("676906")&&b("Random").coinflip(l))return o;a=b("BladeRunnerWWWRolloutUtils").getRolloutPositionForSubscription(a);if(a==b("BladeRunnerWWWRolloutUtils").inRolloutWhitelist&&b("Random").coinflip(b("BladeRunnerWWWRolloutUtils").BRSamplingRate))return b("BladeRunnerWWWRolloutUtils").wwwBRRolloutWebGraphqlBRForceLogContext;if(b("gkx")("1383502")&&b("Random").coinflip(n))return p;if(b("gkx")("1388683")||b("gkx")("1382775")&&b("Random").coinflip(m))return o}a=function(){"use strict";function a(){}var c=a.prototype;c.getTopic=function(a){throw new Error("getTopic() unimplemented by subclass of BaseGraphQLSubscription")};c.getQuery=function(){throw new Error("getQuery() or getQueryID() unimplemented by subclass of BaseGraphQLSubscription")};c.getQueryParameters=function(a){throw new Error("getQueryParameters() unimplemented by subclass of BaseGraphQLSubscription")};c.getSubscriptionName=function(){var a=k(this.getQuery());return String(b("nullthrows")(a.params.metadata.subscriptionName))};a.subscribe=function(a,b,c){c===void 0&&(c={});return new this().subscribe(a,b,c)};c.subscribe=function(a,c,d){d===void 0&&(d={});var e=this.getTopic(a);a=this.getQueryParameters(a);var f=s(e,b("nullthrows")(k(this.getQuery()).params.id),a,c,d);return{getContext:function(){return f.getContext()},unsubscribe:function(){f.unsubscribe()}}};return a}();a.getTransformContextForBaseGraphQLSubscription_INTERNAL=r;a.subscribeWithSkywalker_INTERNAL=s;function r(a,c,d){var e="0";return{viewerID:(d=d)!=null?d:b("CurrentUser").getID(),appID:e,locale:b("CurrentLocale").get(),queryID:a,serializedQueryParameters:JSON.stringify(c),useOSSResponseFormat:!1}}function s(a,c,d,e,f){f===void 0&&(f={});var k=b("nullthrows")(i(a)),l=b("SkywalkerManager").getSubscriptionType(a),m=b("uuid")(),n=babelHelpers["extends"]({},d,{input:babelHelpers["extends"]({},d.input,{client_subscription_id:m})}),o=(d=f.forceLogContext)!=null?d:q(a);o!=null&&(n=babelHelpers["extends"]({},n,{"%options":{client_logged_context:o}}));f.receiveLifecycleEvents&&(n=babelHelpers["extends"]({},n,{"%options":babelHelpers["extends"]({},n["%options"],{heartbeat:{interval:g}})}));d={};d.transformContext=JSON.stringify(r(c,n,f.viewerID));f.policy!=null&&(d.policy=f.policy);f.customOptions!=null&&(d.customOptions=JSON.stringify(f.customOptions));f=null;var p=h(k,n.input);if(p!=null){var s;f=babelHelpers["extends"]({},(s=f)!=null?s:{},{routing_hint:p})}j("client_subscribe",k,n,o,l,c);s=babelHelpers["extends"]({context:d,onUnsubscribeEager:function(){j("client_unsubscribe",k,n,o,l,c)},gqlsLifecycleHandler:function(a){return b("regeneratorRuntime").async(function(b){while(1)switch(b.prev=b.next){case 0:e({__type:"lifecycle_event",state:a});case 1:case"end":return b.stop()}},null,this)}},f?{headers:f}:{});p=null;o!=null&&(p={requestId:m,forceLogContext:o});p!=null&&(s=babelHelpers["extends"]({},s,{instrumentationData:p}));return b("SkywalkerManager").subscribe(a,function(a){j("receivepayload",k,n,o,l,c),e(babelHelpers["extends"]({__type:"data"},JSON.parse(a.payload)))},s)}e.exports=a}),null);
__d("ImmutableRecordWithV4Types",["immutable"],(function(a,b,c,d,e,f){"use strict";a=b("immutable").Record;e.exports={Record:a}}),null);
__d("XQuickPromotionSimpleLoggingController",["XController"],(function(a,b,c,d,e,f){e.exports=b("XController").create("/qp/action/log/",{qp_id:{type:"Int",required:!0},qp_action:{type:"Enum",enumType:1},qp_instance_log_data:{type:"StringToStringMap",defaultValue:{}},qp_event:{type:"String"}})}),null);
__d("QPRenderer",["csx","CSS","FBLogger","Parent","QPEventHandling","XAsyncRequest","XQuickPromotionSimpleLoggingController","ge"],(function(a,b,c,d,e,f,g){"use strict";function h(a,c,d){a=b("XQuickPromotionSimpleLoggingController").getURIBuilder().setInt("qp_id",a).setString("qp_event",c).setStringToStringMap("qp_instance_log_data",d).getURI();new(b("XAsyncRequest"))(a).send()}function a(a,c,d){a=b("XQuickPromotionSimpleLoggingController").getURIBuilder().setInt("qp_id",a).setEnum("qp_action",c).setStringToStringMap("qp_instance_log_data",d).getURI();new(b("XAsyncRequest"))(a).send()}function c(a,c,d,e,f,g){e=b("ge")(e);e!==null?i(a,d,e,g,function(){f&&b("CSS").hide(c)}):b("FBLogger")("quick_promotion").mustfix("Quick Promotion %s is missing %s action element.",a,d)}function d(a,c,d,e,f){i(a,c,d,f,function(){if(e){var a=b("Parent").bySelector(d,"._5jmm");a instanceof HTMLElement&&b("CSS").hide(a)}})}function e(a,c,d){c.show();h(a,"view",{});c.subscribe("cancel",function(){h(a,"dialog_cancel",{})});for(var e=0;e<d.length;e++){var f=d[e],g=b("ge")(f.element_id);g!==null?(i(a,f.action,g,f.extra_log_data,f.should_close?function(){c.hide()}:function(){}),f.action=="primary"&&g.focus()):b("FBLogger")("quick_promotion").mustfix("Quick Promotion %s is missing %s action element.",a,f.action)}}function i(a,c,d,e,f){b("QPEventHandling").registerClickListener(d,c,function(){var d=b("XQuickPromotionSimpleLoggingController").getURIBuilder().setInt("qp_id",a).setEnum("qp_action",c).setStringToStringMap("qp_instance_log_data",e).getURI();new(b("XAsyncRequest"))(d).send();f()})}f.setAction=c;f.setComponentActionForFeedUnitQP=d;f.setDialogActionsAndShow=e;f.logAction=a;f.logEvent=h}),null);
__d("ScrollBoundaryContain",["Event","Scroll","UserAgent"],(function(a,b,c,d,e,f){var g=function(a,c){c.deliberateSync=!0;if(c.axis!==void 0&&c.axis===c.HORIZONTAL_AXIS||c.wheelDeltaX&&!c.wheelDeltaY||c.deltaX&&!c.deltaY)return;var d=c.wheelDelta||-c.deltaY||-c.detail,e=a.scrollHeight,f=a.clientHeight;if(e>f){c.stopPropagation();a=b("Scroll").getTop(a);(d>0&&a===0||d<0&&a>=e-f-1)&&c.preventDefault()}},h=void 0,i=function(){if(h)return h;h=b("UserAgent").isBrowser("Firefox")?"WheelEvent"in window?"wheel":"DOMMouseScroll":"mousewheel";return h},j=function(a){var c=g.bind(null,a),d=i(),e,f=b("Event").listen(a,"mouseenter",function(){e==null&&(e=b("Event").listen(a,d,c))}),h=b("Event").listen(a,"mouseleave",function(){e&&(e.remove(),e=null)}),j=!1;return{remove:function(){if(j)return;e&&(e.remove(),e=null);f.remove();h.remove();j=!0}}},k=function(a){a.deliberateSync=!0,this.scrollHeight>this.clientHeight&&a.stopPropagation()},l=function(a){var c=b("Event").listen(a,i(),k,null,{passive:!0}),d=!1;return{remove:function(){if(d)return;c.remove();d=!0}}};a={applyToElem:function(a){if("overscrollBehavior"in a.style){a.style.overscrollBehavior="contain";return l(a)}else{a.style.msScrollChaining!==void 0&&(a.style.msScrollChaining="none");return j(a)}}};e.exports=a}),null);
__d("XWebGraphQLQueryController",["XController"],(function(a,b,c,d,e,f){e.exports=b("XController").create("/webgraphql/query/",{query_id:{type:"FBID"},variables:{type:"String"},doc_id:{type:"FBID"}})}),null);
__d("WebGraphQLQueryBase",["invariant","WebGraphQLLegacyHelper","XWebGraphQLQueryController"],(function(a,b,c,d,e,f,g){"use strict";a=function(){function a(a){this.$1=a}var c=a.prototype;c.__getVariables=function(){return this.$1};c.__getDocID=function(){return this.constructor.__getDocID()};a.__getController=function(){return b("XWebGraphQLQueryController")};a.__getDocID=function(){g(0,1804)};a.getURI=function(a){return b("WebGraphQLLegacyHelper").getURI({controller:this.__getController(),docID:this.__getDocID(),variables:a})};a.getLegacyURI=function(a){return b("WebGraphQLLegacyHelper").getURI({controller:this.__getController(),queryID:this.getQueryID(),variables:a})};a.getQueryID=function(){g(0,5095)};return a}();e.exports=a}),null);