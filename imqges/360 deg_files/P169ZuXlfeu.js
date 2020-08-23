if (self.CavalryLogger) { CavalryLogger.start_js(["AU3UL"]); }

__d("ExploreFeedEndOfFeedTracking",["OnVisible","tidyEvent"],(function(a,b,c,d,e,f){"use strict";var g=null,h=!1,i=!1;e.exports={reset:function(){h=!1,i=!1,g&&g.remove(),g=null},onEOFUnitRendered:function(a){h=!1,i=!1,g=new(b("OnVisible"))(a.element,function(){h=!0,g&&g.remove()},!0),b("tidyEvent")(g)},onStoryRendered:function(){if(!h||i)return;i=!0}}}),null);
__d("IntegrityContextTriggerBootloader",["Bootloader"],(function(a,b,c,d,e,f){"use strict";function g(a,b){a=a.triggerLoggerExtraData||null;b=b&&b.getExtraDataForTriggerLogger()||null;return babelHelpers["extends"]({},a,b)}function a(a){b("Bootloader").loadModules(["IntegrityContextTriggerGlimpseAnimator","IntegrityContextTriggerLoggerManager"],function(b,c){var d=b.initAnim(a);b=function(){return g(a,d)};c.initLogger(a,b)},"IntegrityContextTriggerBootloader")}e.exports={bootload:a}}),null);
__d("OWLBehavior",["fbt","Event","Run","gkx","goURI","memoize","nullthrows","uuid"],(function(a,b,c,d,e,f,g){"use strict";a={attach:function(a,c,d,e){var f=b("gkx")("1334188");if(b("gkx")("847879")){var g=function(){a!=null&&d.setAttribute("href",a),c!=null&&(f?(d.setAttribute("data-tooltip-content",c),d.setAttribute("data-hover","tooltip")):d.setAttribute("title",c))},k=function(){a!=null&&d.removeAttribute("href"),c!=null&&(f?(d.removeAttribute("data-tooltip-content"),d.removeAttribute("data-hover")):d.removeAttribute("title"))};if(e!=null&&b("gkx")("1267829")){var l=document.createElement("span");e=document.createTextNode(e);l.appendChild(e);l.setAttribute("hidden","true");var m=h();m.appendChild(l);b("Run").onLeave(function(){m.removeChild(l)});e=b("uuid")();l.setAttribute("id",e);d.setAttribute("aria-labelledby",e);if(b("gkx")("1422165")){var n;e=d.cloneNode(!1);e.style.display="none";e.setAttribute("hidden","true");e.setAttribute("id",b("uuid")());e.setAttribute("aria-labelledby",i());(n=d.parentNode)==null?void 0:n.appendChild(e)}}b("Event").listen(d,{blur:k,focus:g,mouseenter:g,mouseleave:k})}else a!=null&&d.addEventListener("click",function(c){return j(c,b("nullthrows")(a))}),c!=null&&d.addEventListener("mouseenter",function(){f?(d.setAttribute("data-tooltip-content",c),d.setAttribute("data-hover","tooltip")):d.setAttribute("title",c)})},attachOnlyOnFocus:function(a,c){b("Event").listen(a,{blur:e,focus:d,mouseenter:d,mouseleave:e});function d(){c.forEach(function(b,c){return a.setAttribute(c,b.toString())})}function e(){c.forEach(function(b,c){return a.removeAttribute(c)})}}};var h=b("memoize")(function(){var a,b=document.createElement("div");b.setAttribute("hidden","true");b.style.display="none";(a=document.body)==null?void 0:a.appendChild(b);return b}),i=b("memoize")(function(){var a=document.createElement("span"),c=document.createTextNode(g._("Sponsored").toString());a.appendChild(c);a.setAttribute("hidden","true");c=b("uuid")();a.setAttribute("id",c);var d=h();d.appendChild(a);return c}),j=function(a,c){a.metaKey||a.ctrlKey?window.open(c,"_blank"):b("goURI")(c)};e.exports=a}),null);
__d("MarketplaceLoggingHelper",["Event","MarketplaceClickFalcoEvent","MarketplaceImpressionFalcoEvent","WebStorage","ge","getStyleProperty","isTruthy"],(function(a,b,c,d,e,f){"use strict";var g,h="marketplaceLoggingBookmarkLogTimestamp",i=60*60*6*1e3;a={logBookmarkImpression:function(a){a=b("ge")(a);if(a&&b("getStyleProperty")(a,"display")==="none")return;a=(g||(g=b("WebStorage"))).getLocalStorage();var c=Date.now();if(a){var d=a.getItem(h);if(b("isTruthy")(d)){d=parseInt(d,10);if(d+i>c)return}a.setItem(h,c.toString())}b("MarketplaceImpressionFalcoEvent").log(function(){return{surface:"app_tab",uiComponent:"app_tab"}})},addBookmarkClickLoggingHandler:function(a){a=b("ge")(a);if(!a)return;b("Event").listen(a,"click",function(){b("MarketplaceClickFalcoEvent").log(function(){return{surface:"app_tab",uiComponent:"app_tab"}})})}};e.exports=a}),null);
__d("getEditorStateFromUFI2ComposerState",["CompositeDraftDecorator","ContentState","EditorState"],(function(a,b,c,d,e,f){"use strict";function a(a){var c=a.inputState;switch(c.__type){case"plain-text":var d=c.selectionOffsets,e=c.text;e=b("ContentState").createFromText(e.replace(/\n\n$/,"\n"));var f=b("EditorState").createWithContent(e);if(d){var g,h,i,j=e.getFirstBlock(),k=0;while(j){var l=j.getKey(),m=j.getLength(),n=k;k+=m;k>=d.start&&d.start-n>=0&&(g={key:l,offset:d.start-n});k>=d.end&&d.end-n>=0&&(h={key:l,offset:d.end-n});i==null&&(h&&!g?i=!0:g&&!h?i=!1:h&&g&&(i=g.offset>h.offset));j=e.getBlockAfter(l)}if(g&&h){m=f.getSelection().merge({anchorKey:g.key,anchorOffset:g.offset,focusKey:h.key,focusOffset:h.offset,isBackward:!!i});f=b("EditorState").forceSelection(f,m)}}return f;case"editor-state-based":default:return a.inputDecorators.length>0?b("EditorState").set(c.editorState,{decorator:new(b("CompositeDraftDecorator"))(a.inputDecorators)}):c.editorState}}e.exports=a}),null);
__d("UFI2RichComposerInput.react",["cx","DraftEditor.react","Keys","React","getDefaultKeyBinding","getEditorStateFromUFI2ComposerState","isSoftNewlineEvent","joinClasses"],(function(a,b,c,d,e,f,g){"use strict";var h=b("Keys").RETURN,i=b("React");a=function(a){babelHelpers.inheritsLoose(c,a);function c(){var c,d;for(var e=arguments.length,f=new Array(e),g=0;g<e;g++)f[g]=arguments[g];return(c=d=a.call.apply(a,[this].concat(f))||this,d.$1=function(a){d.props.onComposerStateChange(function(b){return babelHelpers["extends"]({},b,{inputState:b.inputState.__type==="editor-state-based"?babelHelpers["extends"]({},b.inputState,{editorState:a}):{__type:"editor-state-based",editorState:a}})})},d.$2=function(a,b){return d.props.handleBeforeInput?d.props.handleBeforeInput(a,b):"not-handled"},d.$3=function(a,b){if(d.props.handleKeyCommand&&d.props.handleKeyCommand(a,b)==="handled")return"handled";if(a==="ufi-commit"){d.props.onCommit();return"handled"}return"not-handled"},d.$4=function(a){if(d.props.keyBindingFn){var c=d.props.keyBindingFn(a);if(c!=null)return c}return a.keyCode===h&&!b("isSoftNewlineEvent")(a)?"ufi-commit":b("getDefaultKeyBinding")(a)},c)||babelHelpers.assertThisInitialized(d)}var d=c.prototype;d.execCommand=function(a){this.props.handleCommand&&this.props.handleCommand(a)};d.render=function(){return i.jsx("div",{className:b("joinClasses")((this.props.composerState.isLocked?"_3d2p":"")+" _3d2q",this.props.className),"data-novc":"1",onClick:this.props.onClick,children:i.jsx(b("DraftEditor.react"),{ariaLabel:String(this.props.placeholder),editorRef:this.props.onInputRefUpdated,editorState:b("getEditorStateFromUFI2ComposerState")(this.props.composerState),handleBeforeInput:this.$2,handleKeyCommand:this.$3,handlePastedFiles:this.props.handlePastedFiles,keyBindingFn:this.$4,onBlur:this.props.onBlur,onChange:this.$1,onFocus:this.props.onFocus,placeholder:String(this.props.placeholder),preventScroll:!0,readOnly:this.props.composerState.isLocked,spellCheck:!0,stripPastedStyles:!0,webDriverTestID:this.props.webDriverTestID})})};return c}(i.Component);e.exports=a}),null);
__d("installUFI2ComposerInputDecorators",[],(function(a,b,c,d,e,f){"use strict";function a(a){for(var b=arguments.length,c=new Array(b>1?b-1:0),d=1;d<b;d++)c[d-1]=arguments[d];return babelHelpers["extends"]({},a,{inputDecorators:[].concat(a.inputDecorators,c)})}e.exports=a}),null);
__d("getUpgradedUFI2EmojiComposerPlugin",["EmojiRenderer","EmojiSpan.react","installUFI2ComposerInputDecorators","removeEmojiFromEditorState"],(function(a,b,c,d,e,f){"use strict";function a(a){var c={component:b("EmojiSpan.react"),props:a,strategy:function(a,c){b("EmojiRenderer").parse(a.getText()).forEach(function(a){var b=a.length;a=a.offset;c(a,a+b)})}};return{handleKeyCommand:function(a,c,d){var e=a.composerState.inputState;if(e.__type==="editor-state-based"){var f;switch(c){case"backspace":f="backspace";break;case"delete":f="delete";break}if(f){var g=b("removeEmojiFromEditorState")(f,d);if(e.editorState!==g){a.onComposerStateChange(function(a){return babelHelpers["extends"]({},a,{inputState:babelHelpers["extends"]({},e,{editorState:g})})});return"handled"}}}return a.handleKeyCommand?a.handleKeyCommand(c,d):"not-handled"},installEmojiInputDecorator:function(a){return b("installUFI2ComposerInputDecorators")(a,c)}}}e.exports=a}),null);
__d("replaceEmoticonsWithEntitiesInEditorState",["invariant","CharacterMetadata","EditorState","EmoticonsList","immutable"],(function(a,b,c,d,e,f,g){"use strict";var h=b("immutable").List;function a(a){var c=a.getSelection();if(!c.isCollapsed())return a;var d=c.getAnchorKey(),e=a.getCurrentContent(),f=e.getBlockMap().reduce(function(a,e){var f=e.getText(),i=f.split(b("EmoticonsList").regexp);if(i.length===1)return a;var j=i.splice(0,1).join(""),k=[];while(i.length){var l=i.splice(0,2);if(i.length<2&&l[0].length+(l[1]?l[1].length:0)===0)continue;l.length===2||g(0,5882,l.join(", "));k.push(l)}var m=e.getKey()===d,n=j.length,o=e.getCharacterList(),p=f;k.forEach(function(d,f){var g=d[0],i=d[1];if(!b("EmoticonsList").emotes[i]||e===a.getLastBlock()&&f===k.length-1||m&&c.anchorOffset>=n+g.length&&c.anchorOffset<=n+g.length+i.length||function(){for(var a=0;a<i.length;a++)if(e.getEntityAt(n+g.length+a)!=null)return!0;return!1}())n+=d[0].length+d[1].length;else{f=a.createEntity("EMOTICON","IMMUTABLE",{originalEmoticon:i,type:b("EmoticonsList").emotes[i]});d=f.getLastCreatedEntityKey();f=n+g.length;p=p.slice(0,f)+"\u3000"+p.slice(f+i.length);o=o.slice(0,f).concat(h.of(b("CharacterMetadata").applyEntity(o.get(f),d)),o.slice(f+i.length));n=f+1}});if(f!==p){l=e.merge({characterList:o,text:p});var q;if(m){i=c.getAnchorOffset()-(e.getLength()-l.getLength());q={selectionAfter:c.merge({anchorOffset:i,focusOffset:i}),selectionBefore:c}}return a.merge(babelHelpers["extends"]({blockMap:a.getBlockMap().set(e.getKey(),l)},q))}return a},e);if(f===e)return a;else return b("EditorState").push(a,f,"insert-characters")}e.exports=a}),null);
__d("getUpgradedUFI2EmoticonsComposerPlugin",["EmoticonSpan.react","React","getEntityMatcher","installUFI2ComposerInputDecorators","replaceEmoticonsWithEntitiesInEditorState"],(function(a,b,c,d,e,f){"use strict";var g=b("React");function h(a,c){a.inputProps.onComposerStateChange(function(a){a=babelHelpers["extends"]({},a,c(a));var d=a.inputState;switch(d.__type){case"editor-state-based":var e=b("replaceEmoticonsWithEntitiesInEditorState")(d.editorState);if(e!==d.editorState)return babelHelpers["extends"]({},a,{inputState:babelHelpers["extends"]({},d,{editorState:e})});else return a;default:return a}})}function a(a){var c={component:b("EmoticonSpan.react"),props:a,strategy:b("getEntityMatcher")(function(a){return a.getType()==="EMOTICON"})};return{installPlugin:function(a){a.onInstallContentBlockToTextWithEntitiesInputMessageMappers(function(a,b,c,d){d=a.getEntityAt(c);if(d==null)return null;a=b.getEntity(d);if(a.getType()==="EMOTICON"){c=a.getData();b=c.originalEmoticon;return{message:{text:b}}}return null})},render:function(a,d){a.subscriptionsHandler;var e=babelHelpers.objectWithoutPropertiesLoose(a,["subscriptionsHandler"]);return g.jsx(d,babelHelpers["extends"]({},e,{inputProps:babelHelpers["extends"]({},e.inputProps,{composerState:b("installUFI2ComposerInputDecorators")(e.inputProps.composerState,c),onComposerStateChange:function(b){return h(a,b)}})}))}}}e.exports=a}),null);
__d("getUpgradedUFI2HashtagComposerPlugin",["HashtagSpan.react","getHashtagMatches","installUFI2ComposerInputDecorators"],(function(a,b,c,d,e,f){"use strict";function a(){var a={component:b("HashtagSpan.react"),props:{},strategy:b("getHashtagMatches")};return{installHashtagInputDecorator:function(c){return b("installUFI2ComposerInputDecorators")(c,a)}}}e.exports=a}),null);
__d("getUpgradedUFI2PrefillMentionComposerPlugin",["DraftModifier","EditorState","FBLogger","SelectionState","createMentionEntityForContentState","getPlainTextFromUFI2InputState","gkx","replaceSelectionWithMention"],(function(a,b,c,d,e,f){"use strict";function g(a,c){var d=a.inputState;switch(d.__type){case"editor-state-based":var e=b("getPlainTextFromUFI2InputState")(d),f=d.editorState,g=!1;if(b("gkx")("1328264")&&e.length>0&&f.getCurrentContent().getBlocksAsArray().length===1){g=!0;var h=null,i=f.getCurrentContent().getFirstBlock(),j=i.getText().trim();for(var k=0;k<j.length;k++){var l=i.getEntityAt(k);l=l!=null?f.getCurrentContent().getEntity(l):null;if(l==null||l.getType()!=="MENTION"||k>0&&l.getData().id!==h){g=!1;break}h=l.getData().id}}if(e.trim()===""||g){l=b("replaceSelectionWithMention")(c,f,new(b("SelectionState"))({anchorKey:f.getCurrentContent().getFirstBlock().getKey(),anchorOffset:0,focusKey:f.getCurrentContent().getLastBlock().getKey(),focusOffset:f.getCurrentContent().getLastBlock().getLength()}),b("createMentionEntityForContentState")).getCurrentContent();i=c.getTitle().length;f=b("EditorState").push(f,b("DraftModifier").insertText(l,b("SelectionState").createEmpty(f.getCurrentContent().getLastBlock().getKey()).merge({anchorOffset:i,focusOffset:i})," "),"insert-fragment");return babelHelpers["extends"]({},a,{inputState:babelHelpers["extends"]({},d,{editorState:b("EditorState").moveFocusToEnd(f)})})}else return null;case"plain-text":d.text.trim()===""&&b("FBLogger")("ufi2").warn("Someone called for the composer to be prefilled with a mention but the composer state was of the `plain-text` type. Adding mentions to a plain-text composer is not yet implemented (T29402486).");return null;default:return d.__type}}function a(){return{handleCommand:function(a,b){a.__type==="PrefillMention"&&b.onComposerStateChange(function(b){return g(b,a.mentionableEntity)}),b.handleCommand&&b.handleCommand(a)}}}e.exports=a}),null);
__d("UFIDismissNuxMutation",["requireCond","cr:1449049"],(function(a,b,c,d,e,f){"use strict";e.exports=b("cr:1449049")}),null);
__d("SupportReactionInterstitialImpressionFalcoEvent",["FalcoLoggerInternal","getSamplingPolicyConfig_DO_NOT_USE"],(function(a,b,c,d,e,f){"use strict";a=b("getSamplingPolicyConfig_DO_NOT_USE")("falco","support_reaction_interstitial_impression");c=b("FalcoLoggerInternal").create(a);e.exports=c}),null);
__d("SupportReactionInterstitialOkayPressedFalcoEvent",["FalcoLoggerInternal","getSamplingPolicyConfig_DO_NOT_USE"],(function(a,b,c,d,e,f){"use strict";a=b("getSamplingPolicyConfig_DO_NOT_USE")("falco","support_reaction_interstitial_okay_pressed");c=b("FalcoLoggerInternal").create(a);e.exports=c}),null);
__d("UFICareReactionNUXDialog.react",["ix","fbt","CometCardedDialog.react","CometImage.react","Keyframes.react","React","SupportReactionInterstitialImpressionFalcoEvent","SupportReactionInterstitialOkayPressedFalcoEvent","TetraButton.react","TetraCircleButton.react","TetraText.react","UFIReactionsKeyframesAssets","UFIReactionTypes","asset","fbicon","gkx","qex","stylex","useEffectOnce"],(function(a,b,c,d,e,f,g,h){"use strict";var i=b("React"),j=16;function a(a){b("useEffectOnce")(function(){b("SupportReactionInterstitialImpressionFalcoEvent").log(function(){return{}})});var c=b("qex")._("1407667"),d=b("qex")._("1407668");if(c==null||d==null){a.onClose();return null}var e=b("UFIReactionTypes").reactions[j].name,f=b("UFIReactionsKeyframesAssets").reactions[j],k=b("gkx")("1341692")?g("1392835"):g("1235513");return i.jsx(b("CometCardedDialog.react"),{onClose:a.onClose,children:i.jsxs("div",{className:"j97mns5l lbd8emgl dc11py5i k6hxx3wq rh7womw9 qwg1f61c h5ljc0t3 m4hu8p71 nn8lnlwb hwwfp7un c65i38f7 n82is2zj axbmc9i1 ha7v3njz r06hvk35 q4j490t4 rudl5i4p q4pta889 qazqv50n ll4v53fj ess5en20",children:[i.jsx(b("CometImage.react"),{className:"sbgoblh5 bakqt823 tn8apwoe",src:k}),i.jsx("div",{className:"sbgoblh5 tn8apwoe svvgp6du",children:i.jsx(b("TetraCircleButton.react"),{color:"secondary",icon:b("fbicon")._(g("478233"),20),label:h._("Close"),onPress:a.onClose,size:32})}),i.jsx("div",{className:"dc11py5i",children:i.jsx(b("Keyframes.react"),{assetName:e,height:100,projectName:"feedback_reactions",source:f,width:100})}),i.jsx("div",{className:"dc11py5i",children:i.jsx(b("TetraText.react"),{align:"center",isSemanticHeading:!0,type:"headlineEmphasized1",children:c})}),i.jsx("div",{className:"dc11py5i",children:i.jsx(b("TetraText.react"),{align:"center",type:"body2",children:d})}),i.jsx(b("TetraButton.react"),{label:h._("OK"),onPress:function(){b("SupportReactionInterstitialOkayPressedFalcoEvent").log(function(){return{}}),a.onClose()},reduceEmphasis:!0})]})})}e.exports=a}),null);