if (self.CavalryLogger) { CavalryLogger.start_js(["dTrdX"]); }

__d("Number.react",["React","formatNumber","prop-types"],(function(a,b,c,d,e,f){var g=b("React");a=function(a){"use strict";babelHelpers.inheritsLoose(c,a);function c(){return a.apply(this,arguments)||this}var d=c.prototype;d.render=function(){return g.jsx("span",{children:b("formatNumber").withThousandDelimiters(this.props.value,this.props.decimals)})};return c}(g.Component);a.defaultProps={decimals:0};a.propTypes={value:b("prop-types").number.isRequired,decimals:b("prop-types").number};e.exports=a}),null);
__d("ProvideTranslationDialog.react",["cx","ContentTranslationStrings","Layout.react","React","XUIGrayText.react","prop-types"],(function(a,b,c,d,e,f,g){"use strict";var h=b("React"),i=b("Layout.react").Column,j=b("Layout.react").FillColumn;a=function(a){babelHelpers.inheritsLoose(c,a);function c(){return a.apply(this,arguments)||this}var d=c.prototype;d.render=function(){var a=this.props,c=a.onTranslationTextChange,d=a.defaultText;a=a.children;return h.jsxs("div",{children:[h.jsxs(b("Layout.react"),{children:[h.jsx(i,{className:"_1isa",children:h.jsx(b("XUIGrayText.react"),{style:{verticalAlign:"-10px"},size:"meta1",shade:"medium",weight:"bold",children:b("ContentTranslationStrings").ORIGINAL_TEXT})}),h.jsx(j,{children:h.jsx(b("XUIGrayText.react"),{display:"block",size:"meta1",children:a})})]}),h.jsxs(b("Layout.react"),{className:"_2pid",children:[h.jsx(i,{className:"_1isa",children:h.jsx(b("XUIGrayText.react"),{className:"_2pir",size:"meta1",shade:"medium",weight:"bold",children:b("ContentTranslationStrings").YOUR_TRANSLATION})}),h.jsx(j,{children:h.jsx("textarea",{className:"_5d_f",defaultValue:d,onChange:c})})]})]})};return c}(h.Component);a.propTypes={onTranslationTextChange:b("prop-types").func,defaultText:b("prop-types").string};e.exports=a}),null);
__d("LtgTranslationPreferenceEntryBase",["BanzaiLogger"],(function(a,b,c,d,e,f){a=function(){"use strict";function a(a){this.translationData=a}var c=a.prototype;c.getPreferenceType=function(){return null};c.getShouldShowPreference=function(){return!1};c.getEntryTitle=function(){return null};c.getEntrySubtitle=function(){return null};c.getConfirmDialogTitle=function(){return null};c.getConfirmDialogBody=function(){return null};c.getUseConfirmDialog=function(){return!1};c.getSuccessDialogTitle=function(){return null};c.getSuccessDialogBody=function(){return null};c.getUseSuccessDialog=function(){return!1};c.getUseCustomAction=function(){return!1};c.getURIForAsyncAction=function(){return null};c.getGlyph=function(){return null};c.performAction=function(){};c.log=function(){b("BanzaiLogger").log("LtgTranslationPreferencesLoggerConfig",{translation_request_id:this.translationData.requestID,translation_trigger:this.translationData.trigger,content_id:this.translationData.targetID,translation_ent_id:this.translationData.translationID,click_type:this.getPreferenceType()})};return a}();e.exports=a}),null);
__d("XTranslationCrowdsourcingSubmitAsyncController",["XController"],(function(a,b,c,d,e,f){e.exports=b("XController").create("/language_technology/translation/submit/",{content_id:{type:"FBID",required:!0},source_dialect:{type:"String",required:!0},target_dialect:{type:"String",required:!0},translation:{type:"String",required:!0}})}),null);
__d("LtgEditTranslationPreferenceEntryBase",["ContentTranslationStrings","LtgTranslationPreferenceEntryBase","XTranslationCrowdsourcingSubmitAsyncController"],(function(a,b,c,d,e,f){a=function(a){"use strict";babelHelpers.inheritsLoose(c,a);function c(b){b=a.call(this,b)||this;b.newTranslation=b.translationData.translatedText.text;return b}var d=c.prototype;d.getPreferenceType=function(){return"edit_translation"};d.getShouldShowPreference=function(){return!0};d.getEntryTitle=function(){return b("ContentTranslationStrings").EDIT_TRANSLATION_MENU};d.getConfirmDialogTitle=function(){return this.getEntryTitle()};d.getUseConfirmDialog=function(){return!0};d.getUseSuccessDialog=function(){return!0};d.getSuccessDialogTitle=function(){return this.getConfirmDialogTitle()};d.getSuccessDialogBody=function(){return b("ContentTranslationStrings").EDIT_TRANSLATION_THANKS};d.getURIForAsyncAction=function(){return b("XTranslationCrowdsourcingSubmitAsyncController").getURIBuilder().setFBID("content_id",this.translationData.targetID).setString("source_dialect",this.translationData.sourceDialect).setString("target_dialect",this.translationData.targetDialect).setString("translation",this.newTranslation).getURI()};return c}(b("LtgTranslationPreferenceEntryBase"));e.exports=a}),null);
__d("LtgEditTranslationPreferenceEntry",["LtgEditTranslationPreferenceEntryBase","ProvideTranslationDialog.react","React","TextWithEntities.react"],(function(a,b,c,d,e,f){var g=b("React");a=function(a){"use strict";babelHelpers.inheritsLoose(c,a);function c(){return a.apply(this,arguments)||this}var d=c.prototype;d.getConfirmDialogBody=function(){var a=this;return g.jsx(b("ProvideTranslationDialog.react"),{onTranslationTextChange:function(b){return a.newTranslation=b.target.value},defaultText:this.translationData.translatedText.text,children:g.jsx(b("TextWithEntities.react"),{text:this.translationData.originalText})})};return c}(b("LtgEditTranslationPreferenceEntryBase"));e.exports=a}),null);
__d("LtgLanguageSettingsBasePreferenceEntry",["ix","ContentTranslationStrings","LtgTranslationPreferenceEntryBase","fbglyph"],(function(a,b,c,d,e,f,g){a=function(a){"use strict";babelHelpers.inheritsLoose(c,a);function c(){return a.apply(this,arguments)||this}var d=c.prototype;d.getPreferenceType=function(){return"language_settings"};d.getShouldShowPreference=function(){return!0};d.getEntryTitle=function(){return b("ContentTranslationStrings").LANGUAGE_SETTINGS};d.getUseConfirmDialog=function(){return!1};d.getUseEditableDialog=function(){return!1};d.getGlyph=function(){return g("127835")};return c}(b("LtgTranslationPreferenceEntryBase"));e.exports=a}),null);
__d("LtgLanguageSettingsPreferenceEntry",["LtgLanguageSettingsBasePreferenceEntry","URI"],(function(a,b,c,d,e,f){var g;a=function(a){"use strict";babelHelpers.inheritsLoose(c,a);function c(){return a.apply(this,arguments)||this}var d=c.prototype;d.performAction=function(){new(g||(g=b("URI")))("/settings").addQueryData("tab","language").go()};return c}(b("LtgLanguageSettingsBasePreferenceEntry"));e.exports=a}),null);
__d("AbstractRating.react",["cx","fbt","invariant","React"],(function(a,b,c,d,e,f,g,h,i){var j=b("React");a=function(a){"use strict";babelHelpers.inheritsLoose(b,a);function b(){return a.apply(this,arguments)||this}var c=b.prototype;c.render=function(){this.props.rating>=0||i(0,4507);this.props.maxRating>0||i(0,4508);this.props.maxRating===parseInt(this.props.maxRating,10)||i(0,4509);this.props.rating<=this.props.maxRating||i(0,4510);var a=[];for(var b=1;b<=this.props.maxRating;b++)a.push(this.$1(b));return j.jsx("div",{"aria-label":this.$2(),className:"_2dh6",onMouseLeave:this.props.onMouseLeave,onMouseOut:this.props.onMouseOut,children:a})};c.$2=function(){return h._("{rating} out of {max rating} rating",[h._param("rating",this.props.rating),h._param("max rating",this.props.maxRating)])};c.$1=function(a){var b=this,c=Math.min(Math.max(0,this.props.rating-a+1),1);c=j.jsxs("div",{children:[this.props.emptyItem,j.jsx("div",{className:(c!==1?"_1v_j":"")+(c===1?" _2t51":""),style:{width:c*100+"%"},children:this.props.filledItem})]});return j.cloneElement(c,{className:"_1v_k",key:a,onClick:function(){return b.props.onClick&&b.props.onClick(a)},onMouseEnter:function(){return b.props.onMouseEnter&&b.props.onMouseEnter(a)},onMouseOver:function(){return b.props.onMouseOver&&b.props.onMouseOver(a)}})};return b}(j.Component);e.exports=a}),null);
__d("AbstractRatingInput.react",["AbstractRating.react","React"],(function(a,b,c,d,e,f){var g=b("React");a=function(a){"use strict";babelHelpers.inheritsLoose(c,a);function c(b){var c;c=a.call(this,b)||this;c.state={rating:b.rating||0};return c}var d=c.prototype;d.render=function(){var a=this;return g.jsx(b("AbstractRating.react"),babelHelpers["extends"]({},this.props,{onClick:this.props.onClick,onMouseEnter:function(b){a.setState({rating:b}),a.props.onMouseEnter&&a.props.onMouseEnter(b)},onMouseLeave:function(){a.setState({rating:a.props.rating}),a.props.onMouseLeave&&a.props.onMouseLeave()},onMouseOut:function(){a.setState({rating:a.props.rating}),a.props.onMouseOut&&a.props.onMouseOut()},onMouseOver:function(b){a.setState({rating:b}),a.props.onMouseOver&&a.props.onMouseOver(b)},rating:this.state.rating}))};d.componentDidUpdate=function(a){this.props.rating!==a.rating&&this.setState({rating:this.props.rating})};return c}(g.Component);e.exports=a}),null);
__d("StarRatingEmptyStar.react",["cx","invariant","ix","Image.react","React","asset"],(function(a,b,c,d,e,f,g,h,i){var j=b("React");a=function(a){var c=null,d=a.color?a.color:"fig-light-20";typeof a.size==="string"||h(0,4154);switch(d){case"fig-light-20":switch(a.size){case"12":c=i("363876");break;case"16":c=i("375633");break;case"20":c=i("369680");break;case"24":c=i("375640");break;case"32":c=i("660725");break}break;case"contextual-recommendations-orange":switch(a.size){case"24":c=i("94640");break}break}c!==null||h(0,4155);return j.jsx(b("Image.react"),babelHelpers["extends"]({},a,{className:"_55e6",src:c}))};e.exports=a}),null);
__d("StarRatingFilledStar.react",["ix","cx","invariant","Image.react","React","asset","fbglyph"],(function(a,b,c,d,e,f,g,h,i){var j=b("React");a=function(a){var c=null,d=a.color?a.color:"accent-blue";typeof a.size==="string"||i(0,4154);switch(d){case"accent-blue":switch(a.size){case"12":c=g("363875");break;case"16":c=g("375632");break;case"20":c=g("369679");break;case"24":c=g("375639");break;case"32":c=g("660723");break}break;case"fig-blue":switch(a.size){case"12":c=g("363874");break;case"16":c=g("375631");break;case"20":c=g("369678");break;case"24":c=g("375638");break}break;case"fds-blue-40":switch(a.size){case"12":c=g("543761");break;case"16":c=g("543763");break;case"20":c=g("543765");break;case"24":c=g("543767");break}break;case"fig-white":switch(a.size){case"12":c=g("363879");break;case"24":c=g("375643");break}break;case"big-yellow":switch(a.size){case"24":c=g("133222");break}break;case"artillery-cherry-dark-1":switch(a.size){case"12":c=g("461119");break;case"16":c=g("461123");break;case"20":c=g("461127");break;case"24":c=g("461131");break}break;case"artillery-orange":switch(a.size){case"12":c=g("400766");break;case"16":c=g("400767");break;case"20":c=g("400768");break;case"24":c=g("400769");break}break;case"artillery-lemon-dark-1":switch(a.size){case"12":c=g("461120");break;case"16":c=g("461124");break;case"20":c=g("461128");break;case"24":c=g("461132");break}break;case"artillery-lime-dark-1":switch(a.size){case"12":c=g("461121");break;case"16":c=g("461125");break;case"20":c=g("461129");break;case"24":c=g("461133");break}break;case"artillery-lime-dark-3":switch(a.size){case"12":c=g("461122");break;case"16":c=g("461126");break;case"20":c=g("461130");break;case"24":c=g("461134");break}break;case"primary-icon":switch(a.size){case"12":c=g("560884");break}break;case"secondary-icon":switch(a.size){case"12":c=g("519465");break}break;case"fds-yellow-20":switch(a.size){case"20":c=g("486810");break}}c!==null||i(0,4155);return j.jsx(b("Image.react"),babelHelpers["extends"]({},a,{className:"_55e6",src:c}))};e.exports=a}),null);
__d("StarRatingInput.react",["cx","AbstractRatingInput.react","React","StarRatingEmptyStar.react","StarRatingFilledStar.react"],(function(a,b,c,d,e,f,g){var h=b("React");a=function(a){"use strict";babelHelpers.inheritsLoose(c,a);function c(){return a.apply(this,arguments)||this}var d=c.prototype;d.render=function(){return h.jsx("div",{className:"_8jy",children:h.jsx(b("AbstractRatingInput.react"),babelHelpers["extends"]({},this.props,{emptyItem:h.jsx(b("StarRatingEmptyStar.react"),{size:this.props.size,color:this.props.emptyColor}),filledItem:h.jsx(b("StarRatingFilledStar.react"),{size:this.props.size,color:this.props.fillColor})}))})};return c}(h.Component);a.defaultProps={maxRating:5,size:"20",color:"fig-light-20"};e.exports=a}),null);
__d("LtgRatingTranslationPreference.react",["cx","CenteredContainer.react","ContentTranslationStrings","React","StarRatingInput.react","TranslationRating","XUIText.react"],(function(a,b,c,d,e,f,g){var h=b("React");a=function(a){"use strict";babelHelpers.inheritsLoose(c,a);function c(b){b=a.call(this,b)||this;b.state={hoverScore:b.props.score,score:b.props.score};return b}var d=c.prototype;d.render=function(){var a=this,c=this.state.hoverScore===b("TranslationRating").UNDEFINED?this.state.score:this.state.hoverScore;c=this.props.preferenceEntry.coerceRatingType(c);return h.jsxs(b("CenteredContainer.react"),{vertical:!0,children:[h.jsx(b("XUIText.react"),{size:"header4",children:b("ContentTranslationStrings").RATE_TRANSLATION}),h.jsx("div",{className:"_2pic _2pin",children:h.jsx(b("StarRatingInput.react"),{rating:this.props.score,size:"24",onClick:function(b){return a.$1(b)},onMouseOver:function(b){a.setState({hoverScore:a.props.preferenceEntry.coerceRatingType(b)})},onMouseOut:function(c){return a.setState({hoverScore:b("TranslationRating").UNDEFINED})}})}),h.jsx(b("XUIText.react"),{className:"_2tsj",children:c===b("TranslationRating").UNDEFINED?b("ContentTranslationStrings").CLICK_TO_RATE:b("ContentTranslationStrings").getUserFeedbackDescriptionForScore(c)})]})};d.$1=function(a){this.props.preferenceEntry.setRating(a);a=this.props.preferenceEntry.rating;this.setState({score:a});this.props.onClick(a)};return c}(h.Component);a.defaultProps={score:b("TranslationRating").UNDEFINED};e.exports=a}),null);
__d("LtgReportLanguagePreferenceEntryBase",["BanzaiLogger","ContentTranslationStrings","CurrentUser","LtgTranslationPreferenceEntryBase"],(function(a,b,c,d,e,f){a=function(a){"use strict";babelHelpers.inheritsLoose(c,a);function c(b,c){b=a.call(this,b)||this;b.haveSeenOriginal=c;b.correctedDialect="xx_XX";return b}var d=c.prototype;d.getPreferenceType=function(){return"disable_auto_translation"};d.getShouldShowPreference=function(){return this.haveSeenOriginal};d.getEntryTitle=function(){return b("ContentTranslationStrings").getReportLanguage(this.translationData.sourceDialectName,this.translationData.contentLabelType)};d.getConfirmDialogTitle=function(){return this.getEntryTitle()};d.getDialogBody=function(){return b("ContentTranslationStrings").getReportLanguageDialogBody(this.translationData.sourceDialectName,this.translationData.contentLabelType)};d.getUseConfirmDialog=function(){return!0};d.getUseSuccessDialog=function(){return!0};d.getSuccessDialogTitle=function(){return this.getConfirmDialogTitle()};d.getSuccessDialogBody=function(){return b("CurrentUser").isWorkUser()?b("ContentTranslationStrings").REPORT_LANGUAGE_THANKS_WORKPLACE:b("ContentTranslationStrings").REPORT_LANGUAGE_THANKS_FACEBOOK};d.performAction=function(){b("BanzaiLogger").log("LtgLanguageFeedbackLoggerConfig",{content_id:this.translationData.targetID,corrected_dialect:this.correctedDialect})};return c}(b("LtgTranslationPreferenceEntryBase"));e.exports=a}),null);
__d("LtgReportLanguagePreferenceEntry",["cx","ContentTranslationStrings","LanguageDialectSearchableDropdown.react","LtgReportLanguagePreferenceEntryBase","React","TextWithEntities.react","XUIGrayText.react"],(function(a,b,c,d,e,f,g){var h=b("React");a=function(a){"use strict";babelHelpers.inheritsLoose(c,a);function c(){return a.apply(this,arguments)||this}var d=c.prototype;d.getConfirmDialogBody=function(){var a=this,c;return h.jsxs("div",{children:[(c=b("ContentTranslationStrings")).getReportLanguageDialogBody(this.translationData.sourceDialectName,this.translationData.contentLabelType),h.jsx(b("XUIGrayText.react"),{display:"block",size:"meta1",className:"_2ph_",children:h.jsx(b("TextWithEntities.react"),{text:this.translationData.originalText})}),c.getReportLanguageSelector(h.jsx(b("LanguageDialectSearchableDropdown.react"),{dialectType:"language_detection",excludedDialects:[this.translationData.sourceDialect],placeholder:c.SEARCH,initialDialectName:c.I_DONT_KNOW,onSelect:function(b){a.correctedDialect=b}}),this.translationData.contentLabelType)]})};return c}(b("LtgReportLanguagePreferenceEntryBase"));e.exports=a}),null);
__d("XLtgDisableAutoTranslatePreferenceController",["XController"],(function(a,b,c,d,e,f){e.exports=b("XController").create("/translation_preferences/disable_auto_translate/",{dialect:{type:"String",required:!0},event_trigger:{type:"Enum",required:!0,enumType:1}})}),null);
__d("LtgDisableAutoTranslatePreferenceEntry",["ix","ContentTranslationStrings","LtgTranslationPreferenceEntryBase","React","XLtgDisableAutoTranslatePreferenceController","fbglyph"],(function(a,b,c,d,e,f,g){var h=b("React");a=function(a){"use strict";babelHelpers.inheritsLoose(c,a);function c(){return a.apply(this,arguments)||this}var d=c.prototype;d.getPreferenceType=function(){return"disable_auto_translation"};d.getShouldShowPreference=function(){return this.translationData.trigger==="auto_translation"};d.getEntryTitle=function(){return b("ContentTranslationStrings").getDisableAutoTranslate(this.translationData.sourceDialectName)};d.getConfirmDialogTitle=function(){return this.getEntryTitle()};d.getConfirmDialogBody=function(){return h.jsxs("div",{children:[h.jsx("div",{children:b("ContentTranslationStrings").getDisableAutoTranslateDialog(this.translationData.sourceDialectName,this.translationData.contentLabelType)}),b("ContentTranslationStrings").LANGUAGE_SETTINGS_REMINDER]})};d.getUseConfirmDialog=function(){return!0};d.getUseSuccessDialog=function(){return!0};d.getSuccessDialogTitle=function(){return this.getConfirmDialogTitle()};d.getSuccessDialogBody=function(){return b("ContentTranslationStrings").SETTINGS_SAVED};d.getURIForAsyncAction=function(){return b("XLtgDisableAutoTranslatePreferenceController").getURIBuilder().setString("dialect",this.translationData.sourceDialect).setEnum("event_trigger","do_not_auto_translate").getURI()};d.getGlyph=function(){return g("127914")};return c}(b("LtgTranslationPreferenceEntryBase"));e.exports=a}),null);
__d("XLtgNeverTranslatePreferenceController",["XController"],(function(a,b,c,d,e,f){e.exports=b("XController").create("/translation_preferences/never_translate/",{dialect:{type:"String",required:!0},event_trigger:{type:"Enum",required:!0,enumType:1},redirect_uri:{type:"String"}})}),null);
__d("LtgNeverTranslatePreferenceEntry",["ix","ContentTranslationStrings","LtgTranslationPreferenceEntryBase","React","XLtgNeverTranslatePreferenceController","fbglyph"],(function(a,b,c,d,e,f,g){var h=b("React");a=function(a){"use strict";babelHelpers.inheritsLoose(c,a);function c(){return a.apply(this,arguments)||this}var d=c.prototype;d.getPreferenceType=function(){return"disable_translation"};d.getShouldShowPreference=function(){return!0};d.getEntryTitle=function(){return b("ContentTranslationStrings").getNeverTranslate(this.translationData.sourceDialectName)};d.getEntrySubtitle=function(){return b("ContentTranslationStrings").getTranslatedFromTo(this.translationData.sourceDialectName,this.translationData.targetDialectName)};d.getConfirmDialogTitle=function(){return this.getEntryTitle()};d.getConfirmDialogBody=function(){return h.jsxs("div",{children:[h.jsx("div",{children:b("ContentTranslationStrings").getNeverTranslateDialog(this.translationData.sourceDialectName,this.translationData.contentLabelType)}),b("ContentTranslationStrings").LANGUAGE_SETTINGS_REMINDER]})};d.getUseConfirmDialog=function(){return!0};d.getUseSuccessDialog=function(){return!0};d.getSuccessDialogTitle=function(){return this.getConfirmDialogTitle()};d.getSuccessDialogBody=function(){return b("ContentTranslationStrings").SETTINGS_SAVED};d.getURIForAsyncAction=function(){return b("XLtgNeverTranslatePreferenceController").getURIBuilder().setString("dialect",this.translationData.sourceDialect).setEnum("event_trigger","do_not_translate").getURI()};d.getGlyph=function(){return g("127524")};return c}(b("LtgTranslationPreferenceEntryBase"));e.exports=a}),null);
__d("XLtgTranslationFeedbackController",["XController"],(function(a,b,c,d,e,f){e.exports=b("XController").create("/translation/feedback/",{target_id:{type:"FBID",required:!0},request_id:{type:"String",required:!0},trigger:{type:"Enum",required:!0,enumType:1},rating:{type:"Int",required:!0},original_text:{type:"String"},translated_text:{type:"String"},source_dialect:{type:"String"},target_dialect:{type:"String"}})}),null);
__d("LtgRatingPreferenceEntry",["ContentTranslationStrings","LtgTranslationPreferenceEntryBase","TranslationRating","XLtgTranslationFeedbackController"],(function(a,b,c,d,e,f){a=function(a){"use strict";babelHelpers.inheritsLoose(c,a);function c(b,c){b=a.call(this,b)||this;b.setRating(c);return b}var d=c.prototype;d.getPreferenceType=function(){return"rate_translation"};d.getEntryTitle=function(){return b("ContentTranslationStrings").RATE_TRANSLATION};d.getURIForAsyncAction=function(){return b("XLtgTranslationFeedbackController").getURIBuilder().setEnum("trigger",this.translationData.trigger).setFBID("target_id",this.translationData.targetID).setString("request_id",this.translationData.requestID).setInt("rating",this.rating).setString("source_dialect",this.translationData.sourceDialect).setString("target_dialect",this.translationData.targetDialect).setString("original_text",this.translationData.originalText).setString("translated_text",this.translationData.translatedText.text).getURI()};d.coerceRatingType=function(a){switch(a){case 1:return b("TranslationRating").VERY_BAD;case 2:return b("TranslationRating").BAD;case 3:return b("TranslationRating").OK;case 4:return b("TranslationRating").GOOD;case 5:return b("TranslationRating").VERY_GOOD;default:return b("TranslationRating").UNDEFINED}};d.setRating=function(a){this.rating=this.coerceRatingType(a)};return c}(b("LtgTranslationPreferenceEntryBase"));e.exports=a}),null);
__d("LtgTranslationUtils",[],(function(a,b,c,d,e,f){a={hasSeeOriginalOption:function(a){return a==="auto_translation"||a==="translate_all"||a==="see_translation_with_original_toggle"}};e.exports=a}),null);
__d("LtgSeeOriginalPreferenceEntry",["ix","ContentTranslationStrings","LtgTranslationPreferenceEntryBase","LtgTranslationUtils","fbglyph"],(function(a,b,c,d,e,f,g){a=function(a){"use strict";babelHelpers.inheritsLoose(c,a);function c(b,c,d){b=a.call(this,b)||this;b.isShowingOriginal=c;b.seeOriginalAction=d;return b}var d=c.prototype;d.getPreferenceType=function(){return this.isShowingOriginal?"click_hide_original":"click_see_original"};d.getShouldShowPreference=function(){return b("LtgTranslationUtils").hasSeeOriginalOption(this.translationData.trigger)};d.getEntryTitle=function(){return this.isShowingOriginal?b("ContentTranslationStrings").HIDE_ORIGINAL:b("ContentTranslationStrings").SEE_ORIGINAL};d.getUseConfirmDialog=function(){return!1};d.getUseEditableDialog=function(){return!1};d.getGlyph=function(){return g("128337")};d.performAction=function(){this.seeOriginalAction&&this.seeOriginalAction()};return c}(b("LtgTranslationPreferenceEntryBase"));e.exports=a}),null);
__d("LtgTranslationPreferencesTypedLogger",["Banzai","GeneratedLoggerUtils","nullthrows"],(function(a,b,c,d,e,f){"use strict";a=function(){function a(){this.$1={}}var c=a.prototype;c.log=function(){b("GeneratedLoggerUtils").log("logger:LtgTranslationPreferencesLoggerConfig",this.$1,b("Banzai").BASIC)};c.logVital=function(){b("GeneratedLoggerUtils").log("logger:LtgTranslationPreferencesLoggerConfig",this.$1,b("Banzai").VITAL)};c.logImmediately=function(){b("GeneratedLoggerUtils").log("logger:LtgTranslationPreferencesLoggerConfig",this.$1,{signal:!0})};c.clear=function(){this.$1={};return this};c.getData=function(){return babelHelpers["extends"]({},this.$1)};c.updateData=function(a){this.$1=babelHelpers["extends"]({},this.$1,a);return this};c.setClickType=function(a){this.$1.click_type=a;return this};c.setContentID=function(a){this.$1.content_id=a;return this};c.setTime=function(a){this.$1.time=a;return this};c.setTranslationEntID=function(a){this.$1.translation_ent_id=a;return this};c.setTranslationRequestID=function(a){this.$1.translation_request_id=a;return this};c.setTranslationTrigger=function(a){this.$1.translation_trigger=a;return this};c.setVC=function(a){this.$1.vc=a;return this};c.setWeight=function(a){this.$1.weight=a;return this};return a}();c={click_type:!0,content_id:!0,time:!0,translation_ent_id:!0,translation_request_id:!0,translation_trigger:!0,vc:!0,weight:!0};e.exports=a}),null);
__d("LtgTranslationPreferences.react",["cx","ix","AsyncRequest","ContentTranslationStrings","CSS","Image.react","Link.react","LtgDisableAutoTranslatePreferenceEntry","LtgEditTranslationPreferenceEntry","LtgLanguageSettingsPreferenceEntry","LtgNeverTranslatePreferenceEntry","LtgRatingPreferenceEntry","LtgRatingTranslationPreference.react","LtgReportLanguagePreferenceEntry","LtgSeeOriginalPreferenceEntry","LtgTranslationPreferencesTypedLogger","LtgTranslationUtils","MenuSeparator.react","Middot.react","PopoverMenu.react","React","ReactComponentWithPureRenderMixin","ReactXUIMenu","TranslationRating","SimpleXUIDialog","XUIDialogButton.react","XUIDialogCancelButton.react","XUIMenuStaticItem.react","classWithMixins","cxMargin","highlight","mixin"],(function(a,b,c,d,e,f,g,h){"use strict";var i=b("React"),j=b("ReactXUIMenu").Item,k="separator",l=["rate_translation",k,"click_see_original","disable_translation","disable_auto_translation","edit_translation","report language","language_settings"];a=function(a){babelHelpers.inheritsLoose(c,a);function c(c){c=a.call(this,c)||this;var d=c.props.translationData.trigger;c.haveSeenOriginal=d!=="auto_translation";c.state={rating:b("TranslationRating").UNDEFINED,isShowingOriginal:d==="see_translation"||d==="see_translation_with_original_toggle"};return c}var d=c.prototype;d.$LtgTranslationPreferences1=function(a){var c=this,d=null;switch(a){case"rate_translation":d=new(b("LtgRatingPreferenceEntry"))(this.props.translationData,this.state.rating);return i.jsx(b("XUIMenuStaticItem.react"),{children:i.jsx(b("LtgRatingTranslationPreference.react"),{onClick:function(a){c.setState({rating:a}),c.$LtgTranslationPreferences2(d)},score:this.state.rating,translationData:this.props.translationData,preferenceEntry:d})},"rating");case k:return i.jsx(b("MenuSeparator.react"),{},"separator");case"click_see_original":this.props.shouldShowSeeOriginalInDropdown&&(d=new(b("LtgSeeOriginalPreferenceEntry"))(this.props.translationData,this.state.isShowingOriginal,function(){return c.$LtgTranslationPreferences3()}));break;case"disable_translation":d=new(b("LtgNeverTranslatePreferenceEntry"))(this.props.translationData);break;case"disable_auto_translation":d=new(b("LtgDisableAutoTranslatePreferenceEntry"))(this.props.translationData);break;case"language_settings":d=new(b("LtgLanguageSettingsPreferenceEntry"))(this.props.translationData);break;case"edit_translation":d=new(b("LtgEditTranslationPreferenceEntry"))(this.props.translationData);break;case"report language":d=new(b("LtgReportLanguagePreferenceEntry"))(this.props.translationData,this.haveSeenOriginal);this.haveSeenOriginal=!0;break}return d===null||!d.getShouldShowPreference()?null:i.jsx(j,{value:d,children:d&&d.getEntryTitle()},a)};d.$LtgTranslationPreferences4=function(a,b){if(!b.item.getValue)return;a=b.item.getValue();this.$LtgTranslationPreferences2(a)};d.$LtgTranslationPreferences2=function(a){if(!a)return;a.getUseConfirmDialog()?this.$LtgTranslationPreferences5(a):this.$LtgTranslationPreferences6(a);a.log()};d.$LtgTranslationPreferences5=function(a){var c=this;b("SimpleXUIDialog").showEx(a.getConfirmDialogBody(),a.getConfirmDialogTitle(),i.jsxs("div",{children:[i.jsx(b("XUIDialogCancelButton.react"),{}),i.jsx(b("XUIDialogButton.react"),{action:"cancel",label:b("ContentTranslationStrings").SUBMIT,use:"confirm",onClick:function(){return c.$LtgTranslationPreferences6(a)}})]}))};d.$LtgTranslationPreferences7=function(a){b("SimpleXUIDialog").show(a.getSuccessDialogBody(),a.getSuccessDialogTitle())};d.$LtgTranslationPreferences6=function(a){var c=a.getURIForAsyncAction();c!==null?new(b("AsyncRequest"))().setURI(c).send():a.performAction();a.getUseSuccessDialog()&&this.$LtgTranslationPreferences7(a)};d.$LtgTranslationPreferences3=function(){this.props.originalMessage&&(this.state.isShowingOriginal?b("CSS").hide(this.props.originalMessage):(b("CSS").show(this.props.originalMessage),b("highlight")(this.props.originalMessage))),this.setState({isShowingOriginal:!this.state.isShowingOriginal}),this.props.onToggleOriginal&&this.props.onToggleOriginal(),this.$LtgTranslationPreferences8(this.state.isShowingOriginal?"click_hide_original":"click_see_original")};d.$LtgTranslationPreferences9=function(){this.$LtgTranslationPreferences8("click_translation_preferences")};d.render=function(){var a=this,c=l.map(function(b){return a.$LtgTranslationPreferences1(b)});c=i.jsx(b("ReactXUIMenu"),{onItemClick:function(b,c){return a.$LtgTranslationPreferences4(b,c)},children:c});var d=[];d.push(i.jsx(b("PopoverMenu.react"),{menu:c,children:i.jsx(b("Link.react"),{onClick:function(){return a.$LtgTranslationPreferences9()},children:this.props.isGray?i.jsx(b("Image.react"),{className:"_3-8w",src:h("99675")}):i.jsx(b("Image.react"),{className:"_3-8w",src:h("27290")})})},"gear"));var e=this.props.isGray?"_1u4h":null;b("LtgTranslationUtils").hasSeeOriginalOption(this.props.translationData.trigger)&&!this.props.shouldShowSeeOriginalInDropdown&&d.push(i.jsx(b("Link.react"),{className:(this.props.isGray?"_1u4h":"")+" _h90",onClick:function(){return a.$LtgTranslationPreferences3()},children:this.state.isShowingOriginal?b("ContentTranslationStrings").HIDE_ORIGINAL:b("ContentTranslationStrings").SEE_ORIGINAL},"seeOriginal"));d.push(i.jsx(b("PopoverMenu.react"),{menu:c,children:i.jsx(b("Link.react"),{onClick:function(){return a.$LtgTranslationPreferences9()},className:e,children:this.props.shouldShowTranslatedFromLanguage?b("ContentTranslationStrings").getTranslatedFrom(this.props.translationData.sourceDialectName):b("ContentTranslationStrings").RATE_TRANSLATION})},"rating"));var f=[];d.forEach(function(a,c){c!==0&&f.push(i.jsx(b("Middot.react"),{className:e},c)),f.push(a)});return i.jsx("span",{className:"_5pio",children:f})};d.$LtgTranslationPreferences8=function(a){new(b("LtgTranslationPreferencesTypedLogger"))().setTranslationEntID(this.props.translationData.translationID).setContentID(this.props.translationData.targetID).setTranslationRequestID(this.props.translationData.requestID).setTranslationTrigger(this.props.translationData.trigger).setClickType(a).log()};return c}(b("classWithMixins")(i.Component,b("mixin")(b("ReactComponentWithPureRenderMixin"))));a.defaultProps={isGray:!1,shouldShowTranslatedFromLanguage:!1,originalMessage:null,translateAllTargetID:""};e.exports=a}),null);
__d("StarRating.react",["cx","fbt","AbstractRating.react","PageRatingConfig","React","StarRatingEmptyStar.react","StarRatingFilledStar.react","intlNumUtils","joinClasses"],(function(a,b,c,d,e,f,g,h){var i=b("React");a=function(a){"use strict";babelHelpers.inheritsLoose(c,a);function c(){return a.apply(this,arguments)||this}var d=c.prototype;d.render=function(){var a=this.props.cursorStyle=="default"?"_8ya8 _8jy":"_8jy";return i.jsxs("div",{className:a,children:[this.$1(),i.jsx(b("AbstractRating.react"),{emptyItem:i.jsx(b("StarRatingEmptyStar.react"),{size:this.props.size,color:this.props.emptyColor}),filledItem:i.jsx(b("StarRatingFilledStar.react"),{size:this.props.size,color:b("PageRatingConfig").is_color?this.$2():this.props.fillColor}),rating:b("PageRatingConfig").is_ten_points?1:this.props.rating,maxRating:b("PageRatingConfig").is_ten_points?1:this.props.maxRating})]})};d.$1=function(){if(!this.props.showLabel)return null;var a=this.props.rating;return i.jsx("span",{className:b("joinClasses")("_4c4u"+(b("PageRatingConfig").is_color?"":" _405z")+(this.props.size==="12"?" _h9x":"")+(this.props.size==="16"?" _4c4w":"")+(this.props.size==="20"?" _4c4x":"")+(this.props.size==="24"?" _4c4y":""),this.$3(a)),children:h._({"*":"{rating}"},[h._param("rating",b("intlNumUtils").formatNumber(this.props.rating*(b("PageRatingConfig").is_ten_points?2:1),1),[0,this.props.rating])])})};d.$2=function(){if(this.props.rating<=2)return"artillery-cherry-dark-1";else if(this.props.rating<=3)return"artillery-lemon-dark-1";else if(this.props.rating<=4.4)return"artillery-orange";else if(this.props.rating<=4.7)return"artillery-lime-dark-1";return"artillery-lime-dark-3"};d.$3=function(a){return(b("PageRatingConfig").is_color&&a<=2?"_1ayq":"")+(b("PageRatingConfig").is_color&&a<=3&&a>2?" _1ayt":"")+(b("PageRatingConfig").is_color&&a<=4.4&&a>3?" _1ays":"")+(b("PageRatingConfig").is_color&&a<=4.7&&a>3?" _1az6":"")+(b("PageRatingConfig").is_color&&a<=5&&a>4.7?" _1az8":"")};return c}(i.Component);a.defaultProps={maxRating:5,showLabel:!0,size:"20",emptyColor:"fig-light-20",fillColor:"accent-blue",cursorStyle:"pointer"};e.exports=a}),null);
__d("PagesMetabox.react",["ix","cx","fbt","Image.react","Link.react","React","StarRating.react","XPagesProfileReviewsController","asset"],(function(a,b,c,d,e,f,g,h,i){var j=b("React");a=function(a){"use strict";babelHelpers.inheritsLoose(c,a);function c(){var b,c;for(var d=arguments.length,e=new Array(d),f=0;f<d;f++)e[f]=arguments[f];return(b=c=a.call.apply(a,[this].concat(e))||this,c.state={nuxShown:!1},b)||babelHelpers.assertThisInitialized(c)}var d=c.prototype;d.$1=function(){var a=this.props,c=a.pageURIToken;a=a.rating;if(a===0)return null;c=b("XPagesProfileReviewsController").getURIBuilder().setString("page_token",c).getURI();return j.jsx("div",{className:"_1b__ _3koq",children:j.jsx(b("Link.react"),{href:c,children:j.jsx(b("StarRating.react"),{fillColor:"fig-blue",rating:a,size:"12"})})},"rating")};d.$2=function(){var a=this.props,b=a.openStatus;a=a.openStatusLabel;a=b===1?i._("Closed Now"):a;return a===null?null:j.jsx("div",{className:"_1c00"+(b===0?" _14-3":"")+(b===2?" _14-4":"")+(b===3||b===1||b===4?" _14-5":""),children:a},"open-status")};d.$3=function(){return this.props.openStatusLabel===null||!this.props.isHoliday?null:j.jsx("div",{className:"_2q9t",children:i._("Today is a holiday. Open hours may be different.")})};d.render=function(){var a=this.props,c=a.categoryLabel,d=a.locationLabel;a=a.prepositionLabel;var e=this.$2(),f=this.$1(),h=null;f=[f,e].filter(function(a){return a});f.length==0?f=null:(f=j.jsx("div",{className:"_v6p",children:f}),h=this.$3());e=null;d!==null&&(e=i._("{space}{prepositionLabel}{space}{locationLabel}",[i._param("space"," "),i._param("prepositionLabel",a),i._param("locationLabel",d)]));a=this.props.showWatchLogo?j.jsxs(b("Link.react"),{className:"_1gj-",href:this.props.watchUrl,children:[j.jsx(b("Image.react"),{className:"_1gj_",src:g("488906")}),j.jsx("span",{className:"_1gk0",children:this.props.watchLogoLabel})]}):j.jsxs("div",{children:[c," ",e]});return j.jsxs("div",{className:"_1c02",children:[j.jsx("div",{className:"_1c03",children:a}),f,h]})};return c}(j.Component);e.exports=a}),null);