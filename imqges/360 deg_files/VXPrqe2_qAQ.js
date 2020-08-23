if (self.CavalryLogger) { CavalryLogger.start_js(["wvRPM"]); }

__d("IntegrityContextTriggerGlimpseAnimator",["cx","CSS","OnVisible","Run","SubscriptionsHandler","ViewportBounds","getElementRect","getViewportDimensions","requestAnimationFrame"],(function(a,b,c,d,e,f,g){"use strict";var h="_3i0x",i="_3i0y",j=500,k={GLIMPSE_ANIM_ENABLED:"glimpse_anim_enabled",GLIMPSE_HAS_EVER_EXPANDED:"glimpse_has_ever_expanded",GLIMPSE_EXPAND_DELAY_MS:"glimpse_expand_delay_ms",GLIMPSE_CONTRACT_DELAY_MS:"glimpse_contract_delay_ms"},l=function(){function a(a,c,d){this.$1=a;this.$2=c;this.$3=d;this.$7=!1;a=this.destroy.bind(this);this.$4=new(b("SubscriptionsHandler"))();this.$4.addSubscriptions(b("Run").onLeave(a),b("Run").onUnload(a));this.$5=new(b("SubscriptionsHandler"))();this.$8();this.$6=new(b("SubscriptionsHandler"))()}var c=a.prototype;c.getExtraDataForTriggerLogger=function(){var a={};a[k.GLIMPSE_ANIM_ENABLED]="1";var b=this.$7?"1":"0";a[k.GLIMPSE_HAS_EVER_EXPANDED]=b;a[k.GLIMPSE_EXPAND_DELAY_MS]=this.$2.toString();b=this.$3;b!==null&&b!==void 0&&(a[k.GLIMPSE_CONTRACT_DELAY_MS]=b.toString());return a};c.destroy=function(){this.$4.release(),this.$5.release(),this.$6.release()};c.$8=function(){var a=this;this.$5.release();if(this.$7)return;this.$5.engage();var c=new(b("SubscriptionsHandler"))();c.addSubscriptions(new(b("OnVisible"))(this.$1,function(){c.release(),a.$9()},!0,0));this.$5.addSubscriptions({remove:function(){c.release()}})};c.$9=function(){this.$10()};c.$10=function(){var a=this,c=new(b("SubscriptionsHandler"))(),d=setTimeout(function(){c.release(),a.$11(),a.$12()},this.$2);c.addSubscriptions({remove:function(){clearTimeout(d)}});c.addSubscriptions(new(b("OnVisible"))(this.$1,function(){c.release(),a.$8()},!0,0,!0));this.$5.addSubscriptions({remove:function(){c.release()}})};c.$13=function(){var a=b("ViewportBounds").getTop(),c=b("getViewportDimensions")().height,d=b("getElementRect")(this.$1);return d.bottom-d.top>0&&d.bottom>=a&&d.top<=c};c.$12=function(){var a=this;if(this.$3==null)return;var c=new(b("SubscriptionsHandler"))(),d=setTimeout(function(){c.release(),a.$13()?a.$14():a.$15()},this.$3);c.addSubscriptions({remove:function(){clearTimeout(d)}});this.$5.addSubscriptions({remove:function(){c.release()}})};c.$11=function(){this.$16(!0,!0)};c.$14=function(){this.$16(!1,!0)};c.$15=function(){this.$16(!1,!1)};c.$16=function(a,c){var d=this;this.$7=this.$7||a;this.$6.release();this.$6.engage();b("CSS").conditionClass(this.$1,h,c);var e=b("requestAnimationFrame")(function(){b("CSS").conditionClass(d.$1,i,a);if(!c)return;var e=setTimeout(function(){d.$6.release(),b("CSS").removeClass(d.$1,h)},j);d.$6.addSubscriptions({remove:function(){clearTimeout(e)}})});this.$6.addSubscriptions({remove:function(){cancelAnimationFrame(e)}})};return a}();function a(a){var b=a.triggerRootElem;a=a.glimpseConfig;if(!b||!a)return null;var c=a.expandDelayMs;a=a.contractDelayMs;return c==null?null:new l(b,c,a)}e.exports={initAnim:a}}),null);
__d("XAdsPlannerGRPPurchaseController",["XController"],(function(a,b,c,d,e,f){e.exports=b("XController").create("/ads/planner/grp/ajax/purchase/",{bonus_flags:{type:"IntVector"},business_id:{type:"Int"},campaign_names:{type:"StringVector"},account_id:{type:"FBID",required:!0},plan_id:{type:"FBID",required:!0},prediction_ids:{type:"IntVector",required:!0},trace_id:{type:"String"}})}),null);