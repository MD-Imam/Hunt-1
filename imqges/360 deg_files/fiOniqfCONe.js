if (self.CavalryLogger) { CavalryLogger.start_js(["xrLRW"]); }

__d("XCometSearchHashtagControllerRouteBuilder",["cometRouteBuilder"],(function(a,b,c,d,e,f){a=b("cometRouteBuilder")("/hashtag/{hashtag}/",Object.freeze({}),void 0);e.exports=a}),null);
__d("LiveVideoCometBadge_video.graphql",[],(function(a,b,c,d,e,f){"use strict";a={argumentDefinitions:[],kind:"Fragment",metadata:null,name:"LiveVideoCometBadge_video",selections:[{alias:null,args:null,kind:"ScalarField",name:"breaking_status",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"is_live_streaming",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"is_premiere",storageKey:null}],type:"Video",abstractKey:null};e.exports=a}),null);
__d("CometTahoeUpNextOverlay_video.graphql",[],(function(a,b,c,d,e,f){"use strict";a={argumentDefinitions:[],kind:"Fragment",metadata:null,name:"CometTahoeUpNextOverlay_video",selections:[{alias:null,args:null,kind:"ScalarField",name:"is_live_streaming",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"playable_duration",storageKey:null},{alias:null,args:null,concreteType:"VideoThumbnail",kind:"LinkedField",name:"preferred_thumbnail",plural:!1,selections:[{alias:null,args:[{kind:"Literal",name:"height",value:145},{kind:"Literal",name:"sizing",value:"cover-fill-cropped"},{kind:"Literal",name:"width",value:257}],concreteType:"Image",kind:"LinkedField",name:"image",plural:!1,selections:[{alias:null,args:null,kind:"ScalarField",name:"uri",storageKey:null}],storageKey:'image(height:145,sizing:"cover-fill-cropped",width:257)'}],storageKey:null},{alias:null,args:null,concreteType:"TextWithEntities",kind:"LinkedField",name:"title",plural:!1,selections:[{alias:null,args:null,kind:"ScalarField",name:"text",storageKey:null},{args:null,kind:"FragmentSpread",name:"CometTextWithEntitiesRelay_textWithEntities"}],storageKey:null},{alias:null,args:null,concreteType:null,kind:"LinkedField",name:"owner",plural:!1,selections:[{alias:null,args:null,kind:"ScalarField",name:"name",storageKey:null},{args:null,kind:"FragmentSpread",name:"CometTahoeVideoOwner_actor"}],storageKey:null},{args:null,kind:"FragmentSpread",name:"LiveVideoCometBadge_video"}],type:"Video",abstractKey:null};e.exports=a}),null);
__d("CometTahoeVideoOwner_actor.graphql",[],(function(a,b,c,d,e,f){"use strict";a={argumentDefinitions:[],kind:"Fragment",metadata:null,name:"CometTahoeVideoOwner_actor",selections:[{alias:null,args:null,kind:"ScalarField",name:"name",storageKey:null},{kind:"InlineFragment",selections:[{alias:null,args:null,kind:"ScalarField",name:"verification_status",storageKey:null}],type:"Page",abstractKey:null},{kind:"InlineFragment",selections:[{alias:null,args:null,kind:"ScalarField",name:"is_verified",storageKey:null}],type:"User",abstractKey:null}],type:"Actor",abstractKey:"__isActor"};e.exports=a}),null);
__d("CometVideoHomeThreeDotContextMenuWrapper_video.graphql",[],(function(a,b,c,d,e,f){"use strict";a={argumentDefinitions:[],kind:"Fragment",metadata:null,name:"CometVideoHomeThreeDotContextMenuWrapper_video",selections:[{alias:null,args:null,kind:"ScalarField",name:"id",storageKey:null}],type:"Video",abstractKey:null};e.exports=a}),null);
__d("CometVideoHomeVideoContextMenuContentsQuery$Parameters",[],(function(a,b,c,d,e,f){"use strict";a={kind:"PreloadableConcreteRequest",params:{id:"3362970270402159",metadata:{relayPreloadable:!0},name:"CometVideoHomeVideoContextMenuContentsQuery",operationKind:"query",text:null}};e.exports=a}),null);
__d("CometTriggerAccessibilityAlertContext",["React"],(function(a,b,c,d,e,f){"use strict";a=b("React");c=a.createContext(function(){return function(){}});e.exports=c}),null);
__d("useTriggerAccessibilityAlert",["CometTriggerAccessibilityAlertContext","React","recoverableViolation"],(function(a,b,c,d,e,f){"use strict";c=b("React");var g=c.useCallback,h=c.useContext,i=c.useEffect,j=c.useRef;function a(){var a=h(b("CometTriggerAccessibilityAlertContext")),c=j(null);i(function(){return function(){c.current!=null&&c.current()}},[]);return g(function(d){if(a==null){b("recoverableViolation")("triggerAccessibilityAlert callback was null in useAccessibilityAlert","comet_ax");return}c.current!=null&&c.current();c.current=a(d)},[a])}e.exports=a}),null);
__d("CometDefaultKeyCommands",["fbt","CometKeys"],(function(a,b,c,d,e,f,g){"use strict";c=Object.freeze({global:{label:g._("Global Shortcuts"),shortcuts:{home:{command:{alt:!0,key:(a=b("CometKeys")).ONE},description:g._("Home")},profile:{command:{alt:!0,key:a.TWO},description:g._("Profile")},search:{command:{key:a.SLASH},description:g._("Search Facebook")},toggleNub:{command:{key:a.QUESTION,shift:!0},description:g._("Show\/hide shortcuts"),isHiddenCommand:!0}}},newsfeed:{label:g._("News Feed Shortcuts"),shortcuts:{commentStory:{command:{key:a.C},description:g._("Comment on the selected post")},newPost:{command:{key:a.P},description:g._("Make a new post")},openAttachment:{command:{key:a.O},description:g._("Open attachment of the selected post"),shouldStopPropagation:!1},scrollNext:{command:{key:a.J},description:g._("Next post")},scrollPrevious:{command:{key:a.K},description:g._("Previous post")},searchContacts:{command:{key:a.Q},description:g._("Search Messenger contacts")},seeMore:{command:{key:a.ENTER},description:g._("See more of the selected post")},shareStory:{command:{key:a.S},description:g._("Share the selected post")}}},photoViewer:{label:g._("Photo Album Shortcuts"),shortcuts:{fullscreen:{command:{key:a.F},description:g._("Toggle fullscreen")},like:{command:{key:a.L},description:g._("Like photo")},viewNext:{command:{key:a.K},description:g._("Next photo")},viewPrevious:{command:{key:a.J},description:g._("Previous photo")}}}});c;e.exports=c}),null);
__d("cometGetKeyCommandConfig",["fbt","CometCustomKeyCommands","CometDefaultKeyCommands","CometKeys","recoverableViolation"],(function(a,b,c,d,e,f,g){"use strict";function h(a,c){var d=b("CometCustomKeyCommands").customCommands;for(var e=0;e<d.length;e++)if(d[e].group===a&&d[e].commandID===c){for(var f in b("CometKeys"))if(b("CometKeys")[f]===d[e].key)return{alt:d[e].alt,command:d[e].command,key:b("CometKeys")[f],shift:d[e].shift};return null}return b("CometDefaultKeyCommands")[a].shortcuts[c].command}var i={command:null,description:g._("Missing shortcut"),handler:function(){return void 0},isHiddenCommand:!0};function a(a,c,d){if(!Object.prototype.hasOwnProperty.call(b("CometDefaultKeyCommands"),a)||!Object.prototype.hasOwnProperty.call(b("CometDefaultKeyCommands")[a].shortcuts,c)){b("recoverableViolation")("Missing default key command config for "+a+" and "+c,"comet_ax");return i}var e=h(a,c);a=b("CometDefaultKeyCommands")[a].shortcuts[c];c=a.description;return e!=null&&c!=null?{command:e,description:c,handler:d,isHiddenCommand:a.isHiddenCommand}:i}e.exports=a}),null);
__d("CometRouteURL",["ConstUriUtils","React","useCurrentRoute"],(function(a,b,c,d,e,f){"use strict";f=b("React");var g=f.useMemo;function h(a){if(a!=null){a=b("ConstUriUtils").getUri(a);return a!=null?a.getPath():""}return""}function i(a){if(a!=null){a=b("ConstUriUtils").getUri(a);return a!=null?Object.fromEntries(a.getQueryParams()):{}}return{}}function a(){var a,c=b("useCurrentRoute")();a=(a=c==null?void 0:c.canonicalUrl)!=null?a:c==null?void 0:c.url;return a||""}function c(){var a,c=b("useCurrentRoute")(),d=(a=c==null?void 0:c.canonicalUrl)!=null?a:c==null?void 0:c.url;return g(function(){return h(d)},[d])}function d(){var a,c=b("useCurrentRoute")(),d=(a=c==null?void 0:c.canonicalUrl)!=null?a:c==null?void 0:c.url;return g(function(){return i(d)},[d])}e.exports={useRouteURL:a,useRouteURLParams:d,useRouteURLPath:c}}),null);
__d("CometFeedWidthStyles",["gkx","stylex"],(function(a,b,c,d,e,f){"use strict";f={composerAndFeedWrapper:{"@media (min-height: 700px)":{width:"q7g9yagz"}},feedContainer:{"@media (min-height: 700px)":{width:"q7g9yagz"}},megaphone:{"@media (min-height: 700px)":{maxWidth:"p2q3b8vm"}},storiesTray:{width:"h3ox8jsk"}};var g={composerAndFeedWrapper:{width:"oh7imozk","@media (min-height: 700px) and (max-height: 789px)":{width:"abvwweq7"},"@media (min-height: 790px)":{width:"ejjq64ki"}},feedContainer:{width:"oh7imozk","@media (min-height: 700px) and (max-height: 789px)":{width:"abvwweq7"},"@media (min-height: 790px)":{width:"ejjq64ki"}},megaphone:{maxWidth:"qmfd67dx","@media (min-height: 700px) and (max-height: 789px)":{maxWidth:"cx39uazk"},"@media (min-height: 790px)":{maxWidth:"e3zsy2ct"}},storiesTray:{width:"e3xpq0al","@media (min-height: 790px)":{width:"ejjq64ki"}}},h={container:{maxWidth:"o4feeg3o"}},i={container:{maxWidth:"o4feeg3o","@media (min-height: 700px) and (max-height: 789px)":{maxWidth:"mmbxn1bi"},"@media (min-height: 790px)":{maxWidth:"ppll0dsj"}}},j={FEED:{flexBasis:"gile2uim",maxWidth:"qmfd67dx"},FULL:{flexBasis:"dxtxif39",maxWidth:"gderk4og"},SECONDARY:{flexBasis:"o387gat7",maxWidth:"qmfd67dx"},container:{width:"ecyo15nh"},containerNoPadding:{width:"tn7ubyq0"}},k={FEED:{flexBasis:"gile2uim",flexGrow:"pwa15fzy",maxWidth:"fhuww2h9"},FULL:{flexBasis:"d8ncny3e",maxWidth:"d2edcug0"},SECONDARY:{flexBasis:"o387gat7",flexGrow:"g1e6inuh",maxWidth:"fhuww2h9"},container:{width:"ecyo15nh","@media (min-height: 700px) and (max-height: 789px)":{width:"k387qaup"},"@media (min-height: 790px)":{width:"r24q5c3a"}},containerNoPadding:{width:"tn7ubyq0","@media (min-height: 700px) and (max-height: 789px)":{width:"qj29k1nj"},"@media (min-height: 790px)":{width:"j39tunrt"}}};function a(){return b("gkx")("1296384")&&b("gkx")("708253")?i:h}function c(){return b("gkx")("1296384")&&b("gkx")("708253")?k:j}function d(){return g}e.exports={columns500:j,columns680v2:k,entityHeader500:h,entityHeader680v2:i,getEntityHeaderWidthStyles:a,getFeedWidthStyles:d,getResponsiveColumnWidthStyles:c,homeStyles584:f,homeStyles680v2:g}}),null);
__d("CometResponsiveColumns.react",["BaseRow.react","BaseRowItem.react","CometFeedWidthStyles","React","stylex"],(function(a,b,c,d,e,f){"use strict";var g;d=b("CometFeedWidthStyles").getResponsiveColumnWidthStyles;var h=b("React"),i={container:{boxSizing:"rq0escxv",maxWidth:"d2edcug0",width:"k4urcfbm"},containerPadding:{paddingEnd:"hv4rvrfc",paddingStart:"dati1w0a"},content:{alignItems:"gs1a9yip",display:"j83agx80",flexDirection:"btwxx1t3",flexWrap:"lhclo0ds",justifyContent:"taijpn5t"},negativeMargin:{marginTop:"sv5sfqaa",marginEnd:"o22cckgh",marginBottom:"obtkqiv7",marginStart:"fop5sh7t"},reverse:{flexWrap:"kbz25j0m"}},j=d();function a(a){var c=a.children,d=a.containerWidth,e=a.reverseColumns;e=e===void 0?!1:e;var f=a.testid;f=a.xstyle;a=babelHelpers.objectWithoutPropertiesLoose(a,["children","containerWidth","reverseColumns","testid","xstyle"]);return h.jsx("div",babelHelpers["extends"]({},a,{className:(g||(g=b("stylex")))(i.container,d==="DEFAULT"&&j.container,d==="DEFAULT"&&i.containerPadding,f),"data-testid":void 0,children:h.jsx(b("BaseRow.react"),{xstyle:[i.content,e&&i.reverse,i.negativeMargin],children:c})}))}var k={base:{marginTop:"aov4n071",marginEnd:"oi9244e8",marginBottom:"bi6gxh9e",marginStart:"h676nmdw",":empty":{display:"aghb5jc5"}}};function c(a){var c=a.children,d=a.columnType,e=a.xstyle;a=babelHelpers.objectWithoutPropertiesLoose(a,["children","columnType","xstyle"]);return h.jsx(b("BaseRowItem.react"),babelHelpers["extends"]({},a,{expanding:!0,useDeprecatedStyles:!0,xstyle:[k.base,d==="FEED"&&j.FEED,d==="FULL"&&j.FULL,d==="SECONDARY"&&j.SECONDARY,e],children:c}))}e.exports={Column:c,Container:a}}),null);
__d("CometRefineRef",[],(function(a,b,c,d,e,f){"use strict";function a(a){return function(b){if(a==null)return;typeof a==="function"?a(b):typeof a==="object"&&(a.current=b)}}e.exports=a}),null);
__d("LiveVideoCometBadge.react",["fbt","BaseRow.react","BaseRowItem.react","CometRelay","React","TetraText.react","stylex","LiveVideoCometBadge_video.graphql"],(function(a,b,c,d,e,f,g){"use strict";var h,i;b("CometRelay").graphql;var j=b("CometRelay").useFragment,k=b("React"),l=function(a,b,c){if(a)return g._("LIVE BREAKING");return c?g._("PREMIERE"):b?g._("LIVE"):null};function a(a){var c=a.pulse;c=c===void 0?!1:c;var d=a.size;d=d===void 0?"small":d;a=a.video;a=j(h!==void 0?h:h=b("LiveVideoCometBadge_video.graphql"),a);var e=!!a.breaking_status,f=!!a.is_live_streaming;a=!!a.is_premiere;return k.jsx("div",{className:(i||(i=b("stylex"))).dedupe({"background-color-1":"l44iypv3","border-top-start-radius-1":"jk6sbkaj","border-top-end-radius-1":"kdgqqoy6","border-bottom-end-radius-1":"ihh4hy1g","border-bottom-start-radius-1":"qttc61fc","box-sizing-1":"rq0escxv","display-1":"pq6dq46d","height-1":"datstx6m","margin-top-1":"rs0gx3tq","margin-end-1":"kady6ibp","margin-bottom-1":"dicw6rsg","margin-start-1":"dwxx2s2f"},d==="large"?{"padding-top-1":"l29c1vbm","padding-end-1":"dflh9lhu","padding-bottom-1":"j7796vcc","padding-start-1":"scb9dxdr"}:null,d==="small"?{"padding-top-1":"ipjc6fyt","padding-end-1":"ph5uu5jm","padding-bottom-1":"iuny7tx3","padding-start-1":"b3onmgus"}:null,c?{"animation-direction-1":"afxn4irw","animation-duration-1":"m8weaby5","animation-iteration-count-1":"ee40wjg4","animation-name-1":"q1gqmpn5","animation-timing-function-1":"jbu8tgem"}:null),children:k.jsx(b("BaseRow.react"),{align:"center",verticalAlign:"center",children:k.jsx(b("BaseRowItem.react"),{children:k.jsx(b("TetraText.react"),{color:"white",numberOfLines:1,type:d==="large"?"bodyLink3":"bodyLink4",children:l(e,f,a)})})})})}e.exports=a}),null);
__d("useInnerMostTrackingCode",["CometTrackingCodeContext","React"],(function(a,b,c,d,e,f){"use strict";c=b("React");var g=c.useContext;function a(){var a=g(b("CometTrackingCodeContext")),c={click_tracking_linkshim_cb:[],encrypted_click_tracking:[],encrypted_tracking:[]};for(var d in a){var e=a[d],f=e.length;c[d]=f>0?[e[f-1]]:[]}return c}e.exports=a}),null);
__d("CometPageVerificationIcon.react",["ix","CometDarkModeContext","CometImage.react","React","TetraIcon.react","asset","fbicon","stylex"],(function(a,b,c,d,e,f,g){"use strict";var h=b("React");c=b("React");var i=c.useContext;function a(a){var c=a.isInverted,d=a.size;a=a.verificationBadge;var e=i(b("CometDarkModeContext"));e=e.isDarkModeEnabled;var f=null,j=b("fbicon")._(g("498144"),12),k=12;d==="large"&&(k=16,j=b("fbicon")._(g("498145"),16));if(c===!0)f=h.jsx(b("TetraIcon.react"),{color:"white",icon:j,size:k});else switch(a){case"BLUE_VERIFIED":d==="large"?c=e?g("1459674"):g("1459676"):c=e?g("1350832"):g("1350833");f=h.jsx(b("CometImage.react"),{height:k,src:c,width:k});break;case"GRAY_VERIFIED":f=h.jsx(b("TetraIcon.react"),{color:"secondary",icon:j,size:k});break}return f!=null?h.jsx("span",{className:"hrs1iv20 pq6dq46d",children:f}):null}e.exports=a}),null);
__d("SearchCometHashtagUtil",["gkx","qex"],(function(a,b,c,d,e,f){"use strict";a={getHashtagTag:function(a){a=a.trim();var b=a.match(/^#(\S+)$/);a=a.split("#").length>2;return!a&&b!=null?b[1]:null},hasTypeaheadRedirection:function(){return b("gkx")("1444943")?Boolean(b("qex")._("1397754")):Boolean(b("qex")._("1394602"))}};e.exports=a}),null);
__d("CometTahoeEndScreenProgressCircle.react",["CometImage.react","React","stylex","useInterval"],(function(a,b,c,d,e,f){"use strict";var g=b("React");c=b("React");var h=c.useEffect,i=c.useRef,j=c.useState;function a(a){var c=a.circleDiameter;c=c===void 0?52:c;var d=a.isMakingProgress,e=a.onProgressDone;a=a.timeoutSec;var f=c/2,k=f*2*Math.PI,l=k/100,m=j(k),n=m[0],o=m[1];m=j(!1);var p=m[0],q=m[1];b("useInterval")(!d||p?null:function(){if(n<=2){o(0);q(!0);return}o(n-l)},a*10,[d,p]);var r=i(e);h(function(){r.current=e},[e]);h(function(){if(p){var a=r.current;a()}},[p]);return g.jsxs("div",{className:"ama3r5zh taijpn5t j83agx80 bp9cbjyn",children:[g.jsxs("svg",{className:"hgltlino ggxiycxj hihg3u9x",style:{height:c,width:c},children:[g.jsx("circle",{cx:f,cy:f,fill:"var(--fds-black-alpha-40)",r:f}),g.jsx("circle",{cx:f,cy:f,fill:"transparent",r:f,stroke:"var(--always-white)",strokeDasharray:k,strokeDashoffset:n,strokeWidth:4})]}),g.jsx(b("CometImage.react"),{className:"bsnbvmp4 pmk7jnqg f9o22wc5 myj7ivm5 ad2k81qe km676qkl k7cz35w2 a8c37x1j",src:"/images/video/player/embedded_controls/icons/play.png"})]})}e.exports=a}),null);
__d("CometTahoeVideoOwner.react",["CometPageVerificationIcon.react","CometRelay","React","stylex","CometTahoeVideoOwner_actor.graphql"],(function(a,b,c,d,e,f){"use strict";var g;b("CometRelay").graphql;var h=b("CometRelay").useFragment,i=b("React");function a(a){a=a.owner;a=h(g!==void 0?g:g=b("CometTahoeVideoOwner_actor.graphql"),a);var c=a.is_verified,d=a.name;a=a.verification_status;c=c===!0?"BLUE_VERIFIED":a;return i.jsxs("div",{children:[i.jsx("span",{children:d}),c!=null&&c!=="NOT_VERIFIED"&&i.jsx("span",{className:"bk00n993 l9j0dhe7 hytbnt81",children:i.jsx(b("CometPageVerificationIcon.react"),{size:"small",verificationBadge:c})})]})}e.exports=a}),null);
__d("VideoPlayerLoggingExternalLogContext",["React"],(function(a,b,c,d,e,f){"use strict";a=b("React");c=a.createContext({externalLogID:null,externalLogType:null});e.exports=c}),null);
__d("generateChainingSessionID",["Random"],(function(a,b,c,d,e,f){"use strict";function a(){return"f"+(b("Random").random()*(1<<30)).toString(16).replace(".","")}e.exports=a}),null);
__d("useCometTahoeChainingDepth",["React","generateChainingSessionID"],(function(a,b,c,d,e,f){"use strict";var g=b("React");a=b("React");c=a.createContext;var h=a.useContext,i=a.useMemo,j=a.useReducer,k=a.useState,l=c({chainingDepthDispatch:null,chainingDepthState:0,chainingSessionID:null});d=function(){var a=0,c=function(a,b){switch(b.type){case"INCREMENT":return a+1;default:return a}};c=j(c,a);var d=c[0],e=c[1];a=k(function(){return b("generateChainingSessionID")()});var f=a[0];a[1];return i(function(){return{chainingDepthDispatch:e,chainingDepthState:d,chainingSessionID:f}},[e,d,f])};f=function(){return h(l)};a=function(a){var b=a.children;a=a.value;return g.jsx(l.Provider,{value:a,children:b})};e.exports={CometTahoeChainingDepthContextProvider:a,useChainingDepth:d,useChainingDepthContext:f}}),null);
__d("CometTahoeUpNextOverlay.react",["ix","fbt","CometImage.react","CometLink.react","FBLogger","CometRelay","CometResponsiveColumns.react","CometTahoeEndScreenProgressCircle.react","CometTahoeVideoOwner.react","CometTextWithEntitiesRelay.react","LiveVideoCometBadge.react","React","TetraText.react","TetraTextPairing.react","VideoPlayerLoggingExternalLogContext","asset","formatDurationSeconds","gkx","requireCond","stylex","useCometRouterDispatcher","useInnerMostTrackingCode","useCometTahoeChainingDepth","cr:793833","CometTahoeUpNextOverlay_video.graphql"],(function(a,b,c,d,e,f,g,h){"use strict";var i,j,k=b("FBLogger")("watch_www_bug_rotation");b("CometRelay").graphql;var l=b("CometRelay").useFragment,m=b("React");c=b("React");var n=c.useContext,o=c.useState,p=b("useCometTahoeChainingDepth").useChainingDepthContext,q={backgroundThumbnail:{backgroundPosition:"skiu6z9h",backgroundSize:"r4lidvzm",borderBottomStartRadius:"qttc61fc",borderTopStartRadius:"jk6sbkaj",height:"m1bnnib3",width:"kfpcsd3p"},cancelLink:{alignItems:"bp9cbjyn",bottom:"d2iitwg3",color:"ljqsnud1",display:"j83agx80",end:"swmj3c3o",paddingBottom:"e5nlhep0",position:"pmk7jnqg",":hover":{textDecoration:"gpro0wi8"}},cancelLinkIcon:{marginEnd:"cgat1ltu"},centeredContainer:{alignItems:"bp9cbjyn",display:"j83agx80",flexDirection:"cbu4d94t",height:"datstx6m",justifyContent:"taijpn5t",position:"pmk7jnqg",start:"j9ispegn",top:"kr520xx4",width:"k4urcfbm"},durationOverlay:{backgroundColor:"d6rk862h",borderTopStartRadius:"jk6sbkaj",borderTopEndRadius:"kdgqqoy6",borderBottomEndRadius:"ihh4hy1g",borderBottomStartRadius:"qttc61fc",bottom:"irdul1xz",end:"qpq5lcxm",marginTop:"f43gzcya",marginEnd:"cxmmr5t8",marginBottom:"oygrvhab",marginStart:"bnywmjdh",paddingTop:"fdg1wqfs",paddingEnd:"jxrgncrl",paddingBottom:"ae35evdt",paddingStart:"qnrpqo6b",position:"pmk7jnqg"},headerLink:{color:"ljqsnud1"},liveOverlay:{position:"pmk7jnqg",start:"hnlv2pgd",top:"plgsh5y4"},metaColumn:{flexBasis:"ovwxwvn6"},metadataContainer:{display:"j83agx80",flexDirection:"cbu4d94t",justifyContent:"taijpn5t",marginTop:"n1l5q3vz",marginEnd:"oi9244e8",marginBottom:"oygrvhab",marginStart:"fop5sh7t"},thumbnailColumn:{flexBasis:"hwwcs9y8"},upNextOverlay:{animationDuration:"ipxafjjy",animationFillMode:"j1l0snac",animationIterationCount:"h9pa7xm5",animationName:"sbevj9st",backgroundColor:"by8nzva6",borderTopStartRadius:"jk6sbkaj",borderTopEndRadius:"kdgqqoy6",borderBottomEndRadius:"ihh4hy1g",borderBottomStartRadius:"qttc61fc",bottom:"cdjodzko",end:"swmj3c3o",height:"m1bnnib3",lineHeight:"soycq5t1",opacity:"pedkr2u6",position:"pmk7jnqg",width:"eezhb0co"},upNextText:{textShadow:"osv5lhw2"}};function a(a){var c,d=a.initialTracePolicy,e=a.isMakingProgress,f=a.logTahoeEvent,r=a.navigateToNextVideo,s=a.nextVideoURL,t=a.onCancelCallback,u=a.onProgressDone,v=a.reactionVideoChannelType,w=a.subOrigin,x=a.timeoutSec,y=a.video;a=a.visible;var z=o(!1),A=z[0];z=z[1];y=l(i!==void 0?i:i=b("CometTahoeUpNextOverlay_video.graphql"),y);var B=n(b("VideoPlayerLoggingExternalLogContext")),C=B.externalLogID;B=B.externalLogType;var D=p(),E=D.chainingDepthDispatch;D=b("useInnerMostTrackingCode")();c=(c=y.preferred_thumbnail)==null?void 0:(c=c.image)==null?void 0:c.uri;c=c!=null?{backgroundImage:"url("+c+")"}:{backgroundColor:"var(--disabled-icon)"};c=m.jsx("div",{className:(j||(j=b("stylex")))(q.backgroundThumbnail),style:c});var F=!!y.is_live_streaming,G=F?m.jsx("div",{className:(j||(j=b("stylex")))(q.liveOverlay),children:m.jsx(b("LiveVideoCometBadge.react"),{pulse:!0,size:"small",video:y})}):null,H=y.playable_duration;F=!F&&H!=null?m.jsx("div",{className:(j||(j=b("stylex")))(q.durationOverlay),children:m.jsx(b("TetraText.react"),{color:"white",type:"body4",children:b("formatDurationSeconds")(H)})}):null;H=(H=y.owner)==null?void 0:H.name;var I=y.title,J=null;I!=null&&I.text!=null&&I.text!==""?J=m.jsx(b("CometTextWithEntitiesRelay.react"),{textWithEntities:I}):H!=null&&(J=h._("Video From {name}",[h._param("name",H)]));I=y.owner!=null?m.jsx(b("CometTahoeVideoOwner.react"),{owner:y.owner}):null;var K=b("useCometRouterDispatcher")(),L=babelHelpers["extends"]({externalLogID:C,externalLogType:B,initialTracePolicy:d,playerSubOrigin:w,reactionVideoChannelType:v},b("gkx")("1369260")?{trackingCode:D}:{});H=u!=null?u:function(){if(K==null){k.warn("Route dispatcher is null, unable to navigate to next video.");return}if(s===""||s==null){k.warn("Cannot use Comet Router to navigate to an empty URL.");return}f&&f("up_next_overlay_redirect_on_countdown_finished");E&&E({type:"INCREMENT"});K.go(s,{passthroughProps:L,target:"self"})};y=r||function(){b("cr:793833")!=null&&b("cr:793833").go(s),K==null?k.warn("Route dispatcher is null, unable to navigate to next video."):s===""?k.warn("Cannot use Comet Router to navigate to an empty URL."):(f&&f("up_next_overlay_redirect_on_click"),E&&E({type:"INCREMENT"}),K.go(s,{passthroughProps:L,target:"self"}))};C=m.jsx(b("CometLink.react"),{onClick:y,xstyle:q.headerLink,children:J});a&&!A&&(z(!0),f&&f("up_next_overlay_shown"));return a?m.jsx("div",{className:(j||(j=b("stylex")))(q.upNextOverlay),children:m.jsxs(b("CometResponsiveColumns.react").Container,{children:[m.jsx(b("CometResponsiveColumns.react").Column,{xstyle:q.thumbnailColumn,children:m.jsxs(b("CometLink.react"),{onClick:y,children:[c,m.jsxs("div",{className:(j||(j=b("stylex")))(q.centeredContainer),children:[m.jsx(b("CometTahoeEndScreenProgressCircle.react"),{circleDiameter:52,isMakingProgress:e,onProgressDone:H,timeoutSec:x}),m.jsx("div",{className:(j||(j=b("stylex")))(q.upNextText),children:m.jsx(b("TetraText.react"),{color:"white",type:"headlineEmphasized3",children:h._("UP NEXT")})})]}),F,G]})}),m.jsxs(b("CometResponsiveColumns.react").Column,{xstyle:q.metaColumn,children:[m.jsx("div",{className:(j||(j=b("stylex")))(q.metadataContainer),children:m.jsx(b("TetraTextPairing.react"),{body:I,bodyColor:"disabled",bodyLineLimit:1,headline:C,headlineColor:"white",headlineLineLimit:3,level:4})}),m.jsx(b("CometLink.react"),{onClick:t,children:m.jsxs("div",{className:(j||(j=b("stylex")))(q.cancelLink),children:[m.jsx(b("CometImage.react"),{className:(j||(j=b("stylex")))(q.cancelLinkIcon),src:g("368787")}),m.jsx(b("TetraText.react"),{color:"white",type:"headline3",children:h._("Cancel")})]})})]})]})}):null}e.exports=a}),null);
__d("VideoHomeCometErrorBoundary.react",["CometErrorBoundary.react","React","VideoHomeTypedLoggerLite"],(function(a,b,c,d,e,f){"use strict";var g=b("React");c=b("React");var h=c.useCallback;function a(a){var c=h(function(c){b("VideoHomeTypedLoggerLite").log({event:"js_error",exception:c.message,exception_trace:c.componentStack,module_class:a.moduleClass,unit_position:a.unitPosition})},[a.moduleClass,a.unitPosition]);return g.jsx(b("CometErrorBoundary.react"),{context:{project:"www_watch"},fallback:a.fallback,onError:c,children:a.children})}e.exports=a}),null);
__d("CometVideoHomeLiveHeroVideoGlimmer.react",["BaseGlimmer.react","React","gkx","qex","stylex"],(function(a,b,c,d,e,f){"use strict";var g=b("React");c=461;d=530;f=!!b("qex")._("1425793");var h=48,i=(b("gkx")("708253")?d:c)+(f?h:0);function a(){return g.jsx("div",{className:"k4urcfbm a8nywdso qt6c0cv9 rz4wbd8a jb3vyjys stjgntxs ni8dbmo4 id8gkqje oygrvhab tci0nj69 trrkgow7 taijpn5t j83agx80 cddn0xzi",style:{height:i},children:g.jsx("div",{className:"d2edcug0 nwf6jgls taijpn5t j83agx80",children:g.jsx(b("BaseGlimmer.react"),{className:"k4urcfbm nwf6jgls",index:0})})})}e.exports=a}),null);
__d("CometVideoHomeVideoContextMenuContents.entrypoint",["JSResource","CometVideoHomeVideoContextMenuContentsQuery$Parameters"],(function(a,b,c,d,e,f){"use strict";a={getPreloadProps:function(a){var c=a.videoID;a=a.videoMenuLocation;return{queries:{menuContentsQuery:{parameters:b("CometVideoHomeVideoContextMenuContentsQuery$Parameters"),variables:{videoID:c,videoMenuLocation:a}}}}},root:b("JSResource")("CometVideoHomeVideoContextMenuContents.react").__setRef("CometVideoHomeVideoContextMenuContents.entrypoint")};e.exports=a}),null);
__d("CometVideoHomeVideoContextMenu.react",["CometEntryPointPopoverTrigger.react","CometTrackingNodeProvider.react","CometVideoHomeVideoContextMenuContents.entrypoint","React"],(function(a,b,c,d,e,f){"use strict";var g=b("React");function a(a){var c=a.button,d=a.enableLogging;d=d===void 0?!0:d;var e=a.hideableToken,f=a.identifierToken,h=a.onHideVideo,i=a.onUnsaveVideo,j=a.tracking,k=a.videoChannelType,l=a.videoID;a=a.videoMenuLocation;return l==null?null:g.jsx(b("CometTrackingNodeProvider.react"),{trackingNode:55,children:g.jsx(b("CometEntryPointPopoverTrigger.react"),{align:"end",entryPointParams:{videoID:l,videoMenuLocation:a},otherProps:{enableLogging:d,hideableToken:e,identifierToken:f,onHideVideo:h,onUnsaveVideo:i,tracking:j,videoChannelType:k},popoverEntryPoint:b("CometVideoHomeVideoContextMenuContents.entrypoint"),children:c})})}e.exports=a}),null);
__d("CometVideoHomeThreeDotContextMenu.react",["ix","fbt","CometPressable.react","CometVideoHomeVideoContextMenu.react","React","TetraIcon.react","fbicon"],(function(a,b,c,d,e,f,g,h){"use strict";var i=b("React");function a(a){var c=a.color,d=c===void 0?"primary":c,e=a.onPress;c=a.stopPropagation;c=c===void 0?!1:c;a=babelHelpers.objectWithoutPropertiesLoose(a,["color","onPress","stopPropagation"]);a=i.jsx(b("CometVideoHomeVideoContextMenu.react"),babelHelpers["extends"]({button:function(a,c){return i.jsx(b("CometPressable.react"),{display:"inline",label:h._("More"),onPress:e?function(a){e(),c(a)}:c,overlayDisabled:!0,ref:a,children:i.jsx(b("TetraIcon.react"),{color:d,icon:b("fbicon")._(g("484390"),20)})})}},a));return c?i.jsx("div",{onClick:function(a){a.stopPropagation()},children:a}):a}e.exports=a}),null);
__d("CometVideoHomeThreeDotContextMenuWrapperContext",["React"],(function(a,b,c,d,e,f){"use strict";a=b("React");e.exports=a.createContext({contextMenuEnabled:null})}),null);
__d("CometVideoHomeThreeDotContextMenuWrapper.react",["CometRelay","CometVideoHomeStoryContext","CometVideoHomeThreeDotContextMenu.react","CometVideoHomeThreeDotContextMenuWrapperContext","React","VideoHomeTypedLoggerLite","CometVideoHomeThreeDotContextMenuWrapper_video.graphql"],(function(a,b,c,d,e,f){"use strict";var g;b("CometRelay").graphql;var h=b("CometRelay").useFragment,i=b("React");c=b("React");var j=c.useContext,k=c.useState;function a(a){var c=a.video,d=a.videoChannelType;a=a.videoMenuLocation;c=h(g!==void 0?g:g=b("CometVideoHomeThreeDotContextMenuWrapper_video.graphql"),c);var e=c.id;c=k(!1);var f=c[0],l=c[1];c=j(b("CometVideoHomeStoryContext"));var m=c.hideableToken,n=c.identifierToken;c=c.tracking;var o=j(b("CometVideoHomeThreeDotContextMenuWrapperContext")),p=o.contextMenuEnabled,q=o.onHideVideo,r=o.tabType;p===null;if(p!==!0)return null;return e==null?null:i.jsx(b("CometVideoHomeThreeDotContextMenu.react"),{color:"white",hideableToken:m,identifierToken:n,onHideVideo:function(){q&&q(e)},onPress:f?null:function(){b("VideoHomeTypedLoggerLite").log({click_target:"context_menu",event:"click",tab_type:r}),l(!0)},stopPropagation:!0,tracking:c,videoChannelType:d,videoID:e,videoMenuLocation:a||"VIDEO_HOME_LIVE_TAB"})}e.exports=a}),null);
__d("CometVideoHomeLiveAutoplayContext",["React"],(function(a,b,c,d,e,f){"use strict";a=b("React");c=a.createContext(null);e.exports=c}),null);
__d("CometVideoHomeLiveContext",["React"],(function(a,b,c,d,e,f){"use strict";c=b("React");function a(){}d=c.createContext({hasInjectedVideo:!1,heroVideoID:null,hiddenVideoIDs:[],hotswapVideoID:null,setHeroVideoID:a,setHiddenVideoIDs:a,setHotswapVideoID:a,setVideoMuted:a,updateVisibleVideoIDs:a,videoMuted:!0,visibleVideoIDs:{}});e.exports=d}),null);
__d("CometVideoHomeLiveEntryPointVariables",["WebPixelRatio","gkx","qex"],(function(a,b,c,d,e,f){"use strict";a={disableCometFullWidthHero:!!b("qex")._("1425792"),scale:b("WebPixelRatio").get(),useCometLiveEndedOverlay:b("gkx")("1362110")};c=!!b("qex")._("1425793");d=!1;f=!1;var g=!0;c&&(d=b("gkx")("1365892"),f=!!b("qex")._("1107866"),g=b("gkx")("1344274"));c={containerIsFeedStory:!0,containerIsLiveStory:!0,containerIsTahoe:!1,containerIsWorkplace:!1,feedLocation:"VIDEO_HOME_LIVE_TAB",feedbackSource:60,heroUFIEnabled:c,isComet:b("gkx")("708253"),removeRealtimeUFI:g,shareSheetRedesign:d,useBlueDesign:f};g=babelHelpers["extends"]({},a,{isComet:b("gkx")("708253")});d=babelHelpers["extends"]({},a,c,{skipGridComponentAttachedStory:b("gkx")("1454794"),useThumbnailPreviewRelay3d:b("gkx")("1357994")});e.exports={CometVideoHomeLiveHeroEntryPointVariables:g,CometVideoHomeLiveHeroUFIEntryPointVariables:c,CometVideoHomeLiveRootEntryPointVariables:d}}),null);
__d("VideoHomeVisibilityUtils",["getViewportDimensions","gkx"],(function(a,b,c,d,e,f){"use strict";var g=42,h=.5;function a(a){if(a.isState("destroyed"))return!1;if(a.isFullscreen())return!0;if(b("gkx")("1250684")&&a.hasDialog()&&!a.isTahoe())return!1;var c=b("getViewportDimensions")(),d=c.width;c=c.height;a=a.getDOMPosition();if(a.height===0)return!1;var e=a.y-g+(1-h)*a.height,f=a.y+h*a.height,i=a.x+(1-h)*a.width;a=a.x+h*a.width;return e>=0&&f<c&&i>=0&&a<d}e.exports={isVisible:a,VISIBLE_THRESHOLD:h}}),null);
__d("VideoHomeVerifiedPageTooltip.react",["fbt","React","Tooltip.react","XUIText.react"],(function(a,b,c,d,e,f,g){"use strict";var h=b("React");a=function(a){babelHelpers.inheritsLoose(c,a);function c(){return a.apply(this,arguments)||this}var d=c.prototype;d.render=function(){return h.jsx(b("Tooltip.react"),{tooltip:h.jsxs("div",{children:[h.jsx(b("XUIText.react"),{display:"block",weight:"bold",children:g._("Verified Page")}),h.jsx(b("XUIText.react"),{display:"block",children:g._("Facebook confirmed this is an authentic Page for this public figure, media company or brand.")})]}),children:this.props.children})};return c}(h.PureComponent);e.exports=a}),null);
__d("VideoMetadataOverlay.react",["cx","React","SubscriptionsHandler"],(function(a,b,c,d,e,f,g){"use strict";var h=b("React");c=b("React");var i=c.useEffect,j=c.useState;function a(a){var c=a.overlay,d=a.vpc;a=j(!1);var e=a[0],f=a[1];a=j(!1);var g=a[0],k=a[1];a=j("unknown");var l=a[0],m=a[1];i(function(){var a=new(b("SubscriptionsHandler"))();a.addSubscriptions(d.addListener("stateChange",function(){m(d.getState())}),d.addListener("beginPlayback",function(){var a=d.getOption("VideoControls","areControlsVisible");f(!a)}),d.addListener("VideoControls/visibilityUpdate",function(a){a=a.areControlsVisible;return f(!a)}),d.addListener("TahoeController/exitTahoe",function(){k(!1)}),d.addListener("TahoeController/enterTahoe",function(){k(!0)}));return function(){a.release()}});if(!d||!c||l==="destroyed")return null;a=(l==="paused"||l==="ready"||l==="loading"||l==="playing")&&!e&&!g;return h.jsx("div",{className:(a?"":"_8klx")+(a?" _8mfz":""),children:c})}e.exports=a}),null);
__d("VideoComponentWithMetadataOverlay.react",["React","SubscriptionsHandler","VideoMetadataOverlay.react"],(function(a,b,c,d,e,f){"use strict";var g=b("React");a=function(a){babelHelpers.inheritsLoose(c,a);function c(){var c,d;for(var e=arguments.length,f=new Array(e),g=0;g<e;g++)f[g]=arguments[g];return(c=d=a.call.apply(a,[this].concat(f))||this,d.state={hidden:!1,vpc:null},d.subscriptionsHandler=new(b("SubscriptionsHandler"))(),c)||babelHelpers.assertThisInitialized(d)}var d=c.prototype;d.enable=function(a){var b=this;this.setState({vpc:a});this.subscriptionsHandler.addSubscriptions(a.addListener("enterWatchAndScroll",function(){b.setState({hidden:!0})}),a.addListener("exitWatchAndScroll",function(){b.setState({hidden:!1})}));this.props.visibleOnBeginPlayback===!0&&this.subscriptionsHandler.addSubscriptions(a.addListener("beginPlayback",function(){b.setState({hidden:!1})}))};d.disable=function(){this.subscriptionsHandler.release()};d.render=function(){return!this.state.vpc||this.state.hidden?null:g.jsx(b("VideoMetadataOverlay.react"),{overlay:this.props.overlay,vpc:this.state.vpc})};return c}(g.PureComponent);e.exports=a}),null);
__d("VideoWithExternalLogger",[],(function(a,b,c,d,e,f){"use strict";a=function(){function a(a){this.$1=a.external_log_id,this.$2=a.external_log_type}var b=a.prototype;b.enable=function(a){this.$3=a;this.$3.setLogEntryPropertyGetters((a={},a.external_log_id=this.$1,a.external_log_type=this.$2,a))};b.disable=function(){this.$3=null};return a}();e.exports=a}),null);
__d("VideoComponentWithExternalLogger.react",["React","VideoComponent","VideoWithExternalLogger"],(function(a,b,c,d,e,f){"use strict";a=b("React");c=function(a){babelHelpers.inheritsLoose(c,a);function c(){return a.apply(this,arguments)||this}var d=c.prototype;d.enable=function(a){this.$1=new(b("VideoWithExternalLogger"))({external_log_id:this.props.externalLogID,external_log_type:this.getExternalLogType()}),this.$1.enable(a)};d.disable=function(){var a;(a=this.$1)==null?void 0:a.disable()};d.render=function(){return null};d.getExternalLogType=function(){var a=this.props,b=a.playerOrigin,c=a.playerSuborigin;a=a.upstreamPlayerSource;if(b==="video_home"&&c==="entry_point"&&a==="search")return"search_results_session_id";return b==="video_home"&&c==="topic_live"?"search_results_session_id":null};return c}(a.Component);e.exports=b("VideoComponent").createContainer(c)}),null);