if (self.CavalryLogger) { CavalryLogger.start_js(["vf13D"]); }

__d("FeedStoryCategory",[],(function(a,b,c,d,e,f){e.exports={UNKNOWN:0,ORGANIC:1,ENGAGEMENT:2,FIXED_POSITION:3,PROMOTION:4,SPONSORED:5,END_OF_FEED_CONTENT:6,FB_STORIES:7,HIGH_VALUE_PROMOTION:8,FB_STORIES_ENGAGEMENT:9,SHOWCASE:10,FB_SHORTS:11,TRENDING:12}}),null);
__d("AdAllocationIntegrityGapsInfo",["FeedStoryCategory"],(function(a,b,c,d,e,f){a=function(){"use strict";function a(a){this.story_category=a,this.dist_to_top=-1,this.dist_to_fixed=-1,this.dist_to_promo=-1,this.dist_to_sponsored=-1,this.dist_to_engagement=-1}var c=a.prototype;c.setDistToTop=function(a){this.dist_to_top=a};c.setDistIfAbsent=function(a,c){if(c<0||a===b("FeedStoryCategory").UNKNOWN||a===b("FeedStoryCategory").ORGANIC)return;switch(a){case b("FeedStoryCategory").ENGAGEMENT:this.dist_to_engagement=this.$1(c,this.dist_to_engagement);break;case b("FeedStoryCategory").FIXED_POSITION:this.dist_to_fixed=this.$1(c,this.dist_to_fixed);break;case b("FeedStoryCategory").PROMOTION:this.dist_to_promo=this.$1(c,this.dist_to_promo);break;case b("FeedStoryCategory").SPONSORED:this.dist_to_sponsored=this.$1(c,this.dist_to_sponsored);break}};c.$1=function(a,b){return b===-1?a:b};return a}();e.exports=a}),null);
__d("AdAllocationIntegrityUtils",["DataAttributeUtils","FeedStoryCategory","collectDataAttributes"],(function(a,b,c,d,e,f){"use strict";var g="data-story_category",h="data-dedupekey",i="ft";a={getFeedStoryCategory:function(a){var c=b("collectDataAttributes")(a,[i]).ft;a=b("DataAttributeUtils").getDataAttribute(a,g);if(a)switch(a){case"2":return b("FeedStoryCategory").ENGAGEMENT;case"3":return b("FeedStoryCategory").FIXED_POSITION;case"4":return b("FeedStoryCategory").PROMOTION;default:return b("FeedStoryCategory").UNKNOWN}else if(c.ei)return b("FeedStoryCategory").SPONSORED;else return b("FeedStoryCategory").ORGANIC},isGapRuleCategory:function(a){if(a===b("FeedStoryCategory").SPONSORED||a===b("FeedStoryCategory").ENGAGEMENT||a===b("FeedStoryCategory").FIXED_POSITION||a===b("FeedStoryCategory").PROMOTION)return!0;else return!1},getDedupKey:function(a){return b("DataAttributeUtils").getDataAttribute(a,h)}};e.exports=a}),null);
__d("viewportTrackingBuilder",[],(function(a,b,c,d,e,f){"use strict";a=function(a){var b=null;return{factory:a,singleton:function(){b||(b=a.apply(void 0,arguments));return b},clearSingleton:function(){b=null}}};e.exports=a}),null);
__d("ViewportTracking",["cx","invariant","AdAllocationIntegrityGapsInfo","AdAllocationIntegrityUtils","Arbiter","Banzai","BanzaiScuba","CSS","CurrentUser","DOM","DOMDimensions","Event","LitestandMessages","NavigationMessage","Run","SubscriptionsHandler","TimeSlice","UserActivity","ViewportTrackingHelper","WebSession","clearTimeout","clickRefAction","collectDataAttributes","debounce","getElementPosition","getViewportDimensions","gkx","pageID","setTimeout","throttle","viewportTrackingBuilder"],(function(a,b,c,d,e,f,g,h){"use strict";var i=97,j="vpv",k=3,l=2,m=1,n=0,o=1,p=2,q=3,r=4,s=function(){function a(a){this.cachedAllStories=[],this.vpvdBoundingRect=!1,this.vpvdAnalysis=!1,this.vpvdDebug=!1,this.vpvDebug=!1,this.fireTimer=this.fireTimer.bind(this),this.markStoryRead=this.markStoryRead.bind(this),this.behavior=a}var c=a.prototype;c.init=function(a){var c=this;this.useBanzai=!0;this.vpvDebug=!!a.vpv_debug;this.vpvdBoundingRect=b("gkx")("1229480");this.vpvdDebug=!!a.vpvd_debug;this.vpvdAnalysis=!!a.vpvd_analysis;this.ctaLoggingEnabled=!!a.cta_logging_enabled;this.adAllocationIntegrityLoggingEnabled=!!a.ad_allocation_integrity_logging_enabled;this.readStoryIDs={};this.storyIDsWasInView={};this.minFractionToBeVisibleForTimetracking=.5;this.scrollThrottlingInterval=100;this.mouseThrottlingInterval=100;this.keyboardThrottlingInterval=100;this.userActivityPollingInterval=5e3;this.timeToBeConsideredInactive=15e3;this.minTimeToReportImmediately=500;this.discardVPVDIntervalThreshold=9e4;this.active_state_duration=1e3;this.height_diff_to_change_state=25;this.focused_state_duration=3500;this.minSizeToBeVisible=200;this.invalidateAllStoriesCache();this.cachedViewportHeight=b("getViewportDimensions")().height;this.isTimetrackingEnabled=!1;this.activeStories={};this.userInactiveLock=!1;this.userActivityPollerTimeoutID=null;this._headLoadStoryCount=0;this.behavior.getDataFromConfig&&this.behavior.getDataFromConfig(a,this);this.isTimetrackingEnabled&&(this.lastMouseX=-1,this.lastMouseY=-1,this.lastStreamY=-1,this.latestStreamYChangedTimeStamp=-1,this.userFocus=p,this.latestUserFocus=p,this.latestUserActivity="init",this.focusedStory=null,this.latestFocusedStory=null,this.latestActiveStory=null,this.totalVPVDuration={});a.tracking_duration_config&&(this.scrollThrottlingInterval=a.tracking_duration_config.scroll_throttling_interval,this.mouseThrottlingInterval=a.tracking_duration_config.mouse_throttling_interval,this.keyboardThrottlingInterval=a.tracking_duration_config.keyboardThrottlingInterval,this.userActivityPollingInterval=a.tracking_duration_config.user_activity_polling_interval,this.timeToBeConsideredInactive=a.tracking_duration_config.time_to_be_considered_inactive,this.minSizeToBeVisible=a.tracking_duration_config.min_height_to_be_visible,this.minFractionToBeVisibleForTimetracking=a.tracking_duration_config.min_fraction_to_be_visible,this.minTimeToReportImmediately=a.tracking_duration_config.min_time_to_report_immediately,this.active_state_duration=a.tracking_duration_config.active_state_duration,this.height_diff_to_change_state=a.tracking_duration_config.story_height_diff_to_change_state,this.focused_state_duration=a.tracking_duration_config.focused_state_duration,this.discardVPVDIntervalThreshold=a.tracking_duration_config.discard_vpvd_interval_threshold);a.record_delay!==void 0||h(0,1115);var d=b("debounce")(this.fireTimer,a.record_delay,this);this.initialStories=this.getStoriesInView();this.initialStoriesLogged=!1;this.subscriptions=new(b("SubscriptionsHandler"))();this.subscriptions.addSubscriptions(this._getScrollListener(d),b("Event").listen(window,"resize",function(){c.cachedViewportHeight=b("getViewportDimensions")().height,d()}),b("Event").listen(window,"focus",function(){c.isTimetrackingEnabled&&c.updateTimeTrackingData(!1,"window_focus")}),b("Event").listen(window,"blur",function(){c.isTimetrackingEnabled&&c.updateTimeTrackingData(!0,"window_blur")}),b("Arbiter").subscribe(b("NavigationMessage").NAVIGATION_BEGIN,this.cleanup.bind(this)),b("Arbiter").subscribe("Stream/totalHeadLoadedStories",function(a,b){c._headLoadStoryCount=b.count}),b("Arbiter").subscribe(b("LitestandMessages").STORIES_INSERTED,function(){c.initialStoriesLogged&&d(),c.isTimetrackingEnabled&&c.updateTimeTrackingData(!1,"stories_inserted")}));if(this.isTimetrackingEnabled&&this.behavior.getStream){var e;this.updateTimeTrackingData(!1,"init");a=b("throttle")(function(a){c.handleScroll(a)},this.scrollThrottlingInterval);var f=b("throttle")(function(a){return c.handleKeyboard(a)},this.keyboardThrottlingInterval),g=b("throttle")(function(a){return c.handleMouse(a)},this.mouseThrottlingInterval);this.subscriptions.addSubscriptions((e=b("Event")).listen(window,"scroll",a),e.listen(document.documentElement,"DOMMouseScroll",a,void 0,{passive:!0}),e.listen(document.documentElement,"mousewheel",a,void 0,{passive:!0}),e.listen(document.documentElement,"keydown",f),e.listen(document.documentElement,"mouseover",g),e.listen(document.documentElement,"mousemove",g),e.listen(document.documentElement,"click",function(a){c.handleMouse(a)}),b("Arbiter").subscribe("Event/stop",function(a,b){c.handleMouse(b.event)}),b("Arbiter").subscribe("PhotoSnowlift.OPEN",function(){c.userFocus=q,c.handleLayers()}),b("Arbiter").subscribe("PhotoSnowlift.CLOSE",function(){c.userFocus=o,c.focusedStory=null,c.updateTimeTrackingData(!1,"snowlift_close")}));this._userActivityPoller()}b("Run").onLeave(this.cleanup.bind(this));b("Run").onUnload(this.cleanup.bind(this))};c._getScrollListener=function(a){return b("Event").listen(window,"scroll",a)};c.cleanup=function(){this.subscriptions&&(this.subscriptions.release(),this.subscriptions=null),this.isTimetrackingEnabled&&(b("clearTimeout")(this.userActivityPollerTimeoutID),this.updateTimeTrackingData(!0,"cleanup")),this.initialStories=[],this._headLoadStoryCount=0};c.fireTimer=function(){this.initialStoriesLogged||(this.initialStories.forEach(this.markStoryRead,this),this.initialStoriesLogged=!0),this.storiesInView=this.getStoriesInView(),this.storiesInView.forEach(this.markStoryRead,this)};c.getSessionID=function(){return null};c._userActivityPoller=function(){var a=this;!this.userInactiveLock&&!b("UserActivity").isActive(this.timeToBeConsideredInactive)&&(this.userInactiveLock=!0,this.userFocus=p,this.updateTimeTrackingData(!1,"user_activity_inactive"),b("UserActivity").subscribeOnce(function(){a.userFocus=o,a.updateTimeTrackingData(!1,"user_activity_active"),a.userInactiveLock=!1}));this.userActivityPollerTimeoutID=b("setTimeout")(b("TimeSlice").guard(this._userActivityPoller.bind(this),"ViewportTracking poll setTimeout",{propagationType:b("TimeSlice").PropagationType.EXECUTION}),this.userActivityPollingInterval)};c.getQueryID=function(a){return-1};c.getFBFeedLocations=function(a){return-1};c.getFBFeedInsertionPosition=function(a){return-1};c.createVPVDTimer=function(a){var b=document.createElement("label");b.setAttribute("for",a.toString());b.setAttribute("class","vpvd_debug_timer");return b};c.updateVPVDTimer=function(a){var c=this.activeStories[a].story;if(!c)return;var d=b("DOM").scry(c,".vpvd_debug_timer");if(!d.length){d=[this.createVPVDTimer(c),this.createVPVDTimer(c)];var e=b("DOM").scry(c,".UFIRow");e.length&&e[e.length-1].clientWidth>0?e[e.length-1].appendChild(d[0]):c.appendChild(d[0]);c.insertBefore(d[1],c.firstChild)}e=this.totalVPVDuration[a];c=Math.floor(e/1e3)+"."+Math.floor(e%1e3/100);b("DOM").setContent(d[0],c);b("DOM").setContent(d[1],c)};c.updateVPVDTimers=function(){for(var a in this.activeStories)Object.prototype.hasOwnProperty.call(this.activeStories,a)&&this.updateVPVDTimer(a)};c.logVpvdAnalysis=function(a,c,d,e,f,g){var h=new(b("BanzaiScuba"))("vpv_duration");h.addDenorm("qid",this.getQueryID(this.activeStories[a].story));h.addDenorm("uid",b("CurrentUser").getID());h.addDenorm("vsid",a);h.addInteger("time",Math.round(Date.now()/1e3));h.addInteger("duration",e);h.addInteger("total_duration",f);h.addNormal("story_state",this.activeStories[a].state);h.addNormal("is_active_state",d);h.addNormal("num_visible_stories",this.numVisibleStories);h.addInteger("story_height",this.activeStories[a].story_height);h.addInteger("story_visible_height",this.activeStories[a].height);h.addInteger("state_visible_height",g);h.addInteger("total_visible_height",this.totalVisibleHeight);h.addInteger("total_height",this.totalHeight);h.addNormal("user_focus",this.latestUserFocus);h.addNormal("next_user_focus",this.userFocus);h.addInteger("vpvd",c);h.addInteger("accumulated_vpvd",this.activeStories[a].vpvd);h.addNormal("user_activity",this.latestUserActivity);h.addNormal("next_user_activity",this.userActivity);h.addInteger("story_position_y",this.activeStories[a].y);h.addInteger("feed_insertion_position",this.getFBFeedInsertionPosition(this.activeStories[a].story));h.addNormal("visible_position",this.activeStories[a].visible_position);h.addNormal("is_focused_story",this.activeStories[a].is_focused);h.post()};c.shouldDiscardStory=function(a){var b=this.activeStories[a].height||0;return b!=this.activeStories[a].story_height&&b<this.totalHeight/2};c.calculateTotalHeight=function(){this.totalHeight=0;for(var a in this.activeStories)Object.prototype.hasOwnProperty.call(this.activeStories,a)&&(this.totalHeight+=this.activeStories[a].height)};c.updateVPVDurations=function(a){var b;if(this.latestUserFocus===p||a-this.latestTimeTrackingTimestamp>this.discardVPVDIntervalThreshold)return;b=(b={},b[m]=0,b[l]=0,b[k]=0,b);var c=a-this.latestTimeTrackingTimestamp>=this.focused_state_duration;this.totalVisibleHeight=0;for(var d in this.activeStories)if(Object.prototype.hasOwnProperty.call(this.activeStories,d)&&!(this.latestUserFocus===o&&c&&this.shouldDiscardStory(d))){var e=this.activeStories[d].state||null,f=this.activeStories[d].height||0;e!==null&&Object.prototype.hasOwnProperty.call(b,e)&&(b[e]+=f);this.totalVisibleHeight+=f}e=0;f=a-this.latestTimeTrackingTimestamp;this.latestUserFocus===o&&(f=b[k]>0?this.focused_state_duration:this.active_state_duration,f=Math.min(f,a-this.latestTimeTrackingTimestamp),e=a-this.latestTimeTrackingTimestamp-f);a=0;var g=k;for(var h=k;h>=m;h--)if(b[h]>0){a=b[h];g=h;break}h=b[k]+b[l]+b[m];b=0;for(d in this.activeStories)if(Object.prototype.hasOwnProperty.call(this.activeStories,d)){if(this.latestUserFocus===o&&c&&this.shouldDiscardStory(d))continue;var i=this.activeStories[d].state||n;if(a>0&&i>=g){i=this.activeStories[d].height||0;b=f*(i/a);this.vpvdAnalysis&&f>0&&this.logVpvdAnalysis(d,b,!0,f,f+e,a);this.activeStories[d].vpvd+=b;this.totalVPVDuration[d]+=b}if(h>0){i=this.activeStories[d].height||0;b=e*(i/h);this.vpvdAnalysis&&e>0&&this.logVpvdAnalysis(d,b,!1,e,f+e,h);this.activeStories[d].vpvd+=b;this.totalVPVDuration[d]+=b}}};c.updateActiveStory=function(a,b,c,d){this.activeStories[a].state=b,this.activeStories[a].ts=c,this.activeStories[a].height_snapshot=d[a].height,this.activeStories[a].is_focused=this.focusedStory===d[a].story,this.activeStories[a].story_height=d[a].story_height,this.vpvdAnalysis&&(this.activeStories[a].visible_position=d[a].visible_position,this.activeStories[a].y=d[a].y)};c.updateActiveStories=function(a,b){for(var c in a)if(Object.prototype.hasOwnProperty.call(a,c))if(c in this.activeStories){var d=a[c].height||0;this.activeStories[c].height=d;d=d-(this.activeStories[c].height_snapshot||0);this.focusedStory===a[c].story?this.updateActiveStory(c,k,b,a):d<=-this.height_diff_to_change_state?this.updateActiveStory(c,this.shouldDiscardStory(c)?n:m,b,a):(d>=this.height_diff_to_change_state||this.activeStories[c].is_focused||this.activeStories[c].height===this.activeStories[c].story_height)&&this.updateActiveStory(c,l,b,a)}else this.storyIDsWasInView[c]=!0,this.activeStories[c]={evp_ts:b,story:a[c].story,height:a[c].height,vpvd:0},this.totalVPVDuration[c]||(this.totalVPVDuration[c]=0),this.updateActiveStory(c,l,b,a),this.behavior.afterStoryEntersViewport&&this.behavior.afterStoryEntersViewport(this.activeStories[c].story)};c.recordVPVDurations=function(a,b){for(var c in this.activeStories)if(Object.prototype.hasOwnProperty.call(this.activeStories,c)&&(b||!(c in a))){var d=this.activeStories[c].vpvd||0;(d>this.focused_state_duration||d===this.totalVPVDuration[c]||d>=250)&&this.recordTimeStoryWasInView(this.activeStories[c]);this.behavior.afterStoryExitsViewport&&this.behavior.afterStoryExitsViewport(this.activeStories[c].story);delete this.activeStories[c]}};c.updateTimeTrackingData=function(a,b){this.userActivity=b;this.activeStories||(this.activeStories={});b=Date.now();this.latestTimeTrackingTimestamp||(this.latestTimeTrackingTimestamp=b);var c=this.getAllStoriesInView();this.calculateTotalHeight();this.updateVPVDurations(b);this.updateActiveStories(c,b);this.vpvdDebug&&this.updateVPVDTimers();this.recordVPVDurations(c,a);a?this.latestTimeTrackingTimestamp=0:this.latestTimeTrackingTimestamp=b;this.latestUserActivity=this.userActivity;this.latestUserFocus=this.userFocus;this.focusedStory&&(this.latestActiveStory=this.focusedStory);this.latestFocusedStory=this.focusedStory;this.focusedStory=null};c.needsToUpdateTimeTrackingData=function(){return!(this.latestUserFocus===this.userFocus&&(this.userFocus===p||this.userFocus===o&&!this.latestFocusedStory&&!this.focusedStory))};c.getfocusedStory=function(a){var c=this.getAllStoriesInView();for(var d in c)if(Object.prototype.hasOwnProperty.call(c,d)){var e=c[d].story;if(e&&b("ViewportTrackingHelper").isDescendantOf(a,e))return e}return null};c.handleLayers=function(){if(this.userFocus===q||this.userFocus===r){this.focusedStory=this.latestActiveStory;this.updateTimeTrackingData(!1,"media_layer");return!0}return!1};c.didInteractWithStream=function(a){if(!this.behavior.getStream)return!1;var c=this.behavior.getStream();return b("ViewportTrackingHelper").isDescendantOf(a,c)||b("ViewportTrackingHelper").isDescendantOf(c,a)};c.handleScroll=function(a){if(this.handleLayers())return;var c=Date.now();this.behavior.getStream||h(0,1116);var d=b("getElementPosition")(this.behavior.getStream()).y;d!=this.lastStreamY||c-this.latestStreamYChangedTimeStamp<2.5*this.scrollThrottlingInterval||this.didInteractWithStream(a.target)?(this.latestStreamYChangedTimeStamp=c,this.userFocus=o):this.userFocus=p;this.lastStreamY=d;(this.userFocus===o||this.needsToUpdateTimeTrackingData())&&this.updateTimeTrackingData(!1,"scroll")};c.handleKeyboard=function(a){if(this.handleLayers())return;this.didInteractWithStream(a.target)?(this.userFocus=o,this.focusedStory=this.getfocusedStory(a.target)):b("CSS").hasClass(a.target,"shareInput")?(this.userFocus=o,this.focusedStory=this.latestActiveStory):this.userFocus=p;(this.userFocus===o||this.needsToUpdateTimeTrackingData())&&this.updateTimeTrackingData(!1,"keyboard")};c.handleMouse=function(a){if(this.handleLayers())return;if(a.type!="click"&&a.clientX===this.lastMouseX&&a.clientY===this.lastMouseY)return;this.didInteractWithStream(a.target)?(this.userFocus=o,this.focusedStory=this.getfocusedStory(a.target)):this.userFocus=p;this.lastMouseX=a.clientX;this.lastMouseY=a.clientY;this.needsToUpdateTimeTrackingData()&&this.updateTimeTrackingData(!1,a.type)};c.getStoriesInView=function(){var a=this.behavior.getAllStories(),c=[],d=!1;for(var e=0;e<a.length;e++){var f=a[e],g=this.behavior.getStoryID(f);if(g&&this.hasBeenVisible(g))continue;if(b("ViewportTrackingHelper").isVisible(f,this.minSizeToBeVisible))f.getAttribute("data-insertion-position")===null&&f.setAttribute("data-insertion-position",(e-this._headLoadStoryCount).toString()),c.push(f),d=!0;else if(d)break}return c};c.getAllStoriesFromCache=function(){this.cachedAllStories.length===0&&(this.cachedAllStories=this.behavior.getAllStories());return this.cachedAllStories};c.invalidateAllStoriesCache=function(){this.cachedAllStories=[]};c.getAllStoriesInViewUsingBoundingRect=function(){var a=this.getAllStoriesFromCache(),c={},d=a.length,e=window.innerHeight;for(var f=0;f<a.length;f++){var g=a[f],h=Math.min(this.minSizeToBeVisible,this.minFractionToBeVisibleForTimetracking*b("DOMDimensions").getElementDimensions(g).height),i=b("ViewportTrackingHelper").getHeightIfVisible(g,h);if("getBoundingClientRect"in g){var j=g.getBoundingClientRect();if(!j.top&&!j.bottom)continue;if(j.top>e-h)break;if(j.top<=e-h&&j.bottom>=h){j=this.behavior.getStoryID(g);j&&(c[j]={story:g,height:i,story_height:b("DOMDimensions").getElementDimensions(g).height},this.vpvdAnalysis&&(c[j].y=b("getElementPosition")(g).y,c[j].visible_position=f,d=Math.min(d,f)))}}}if(this.vpvdAnalysis){this.numVisibleStories=0;for(j in c)Object.prototype.hasOwnProperty.call(c,j)&&(c[j].visible_position-=d,this.numVisibleStories++)}return c};c.getAllStoriesInView=function(){if(this.vpvdBoundingRect)return this.getAllStoriesInViewUsingBoundingRect();var a=this.getAllStoriesFromCache(),c={},d=!1,e=0,f=a.length,g=1,h=a.length;this._indexOfLastVisibleStoryOnPreviousPass>f/2&&(e=f-1,f=-1,g=-g);for(var e=e;e!=f;e+=g){var i=a[e],j=b("ViewportTrackingHelper").getHeightIfVisible(i,Math.min(this.minSizeToBeVisible,this.minFractionToBeVisibleForTimetracking*b("DOMDimensions").getElementDimensions(i).height));if(j>0||i===this.focusedStory){i.getAttribute("data-insertion-position")===null&&i.setAttribute("data-insertion-position",(e-this._headLoadStoryCount).toString());var k=this.behavior.getStoryID(i);k&&(c[k]={story:i,height:j,story_height:b("DOMDimensions").getElementDimensions(i).height},d=!0,this.vpvdAnalysis&&(c[k].y=b("getElementPosition")(i).y,c[k].visible_position=e,h=Math.min(h,e)))}else if(d){this._indexOfLastVisibleStoryOnPreviousPass=e-g;break}}if(this.vpvdAnalysis){this.numVisibleStories=0;for(k in c)Object.prototype.hasOwnProperty.call(c,k)&&(c[k].visible_position-=h,this.numVisibleStories++)}return c};c.getTimetrackingDataToLog=function(a){a={evt:i,time_spent_id:b("pageID"),vpvd_start_timestamp:a.evp_ts||null,vpvd_time_delta:Math.round(a.vpvd||0),story_height:b("DOMDimensions").getElementDimensions(a.story).height,viewport_height:this.cachedViewportHeight,sid_raw:b("WebSession").getId()};return{ft:a}};c.getGapsInfoToLog=function(a){var c=this;if(a===null||a===void 0)return null;var d=b("AdAllocationIntegrityUtils").getFeedStoryCategory(a),e=new(b("AdAllocationIntegrityGapsInfo"))(d);if(!b("AdAllocationIntegrityUtils").isGapRuleCategory(d))return e;else{d=b("AdAllocationIntegrityUtils").getDedupKey(a);if(d===null)return null;a=this.behavior.getAllStories().filter(function(a){return Object.prototype.hasOwnProperty.call(c.storyIDsWasInView,c.behavior.getStoryID(a))});var f=-1;for(var g=a.length-1;g>=0;g--){var h=b("AdAllocationIntegrityUtils").getDedupKey(a[g]);if(f<0)h!==null&&d===h&&(f=g,e.setDistToTop(f+1));else{h=b("AdAllocationIntegrityUtils").getFeedStoryCategory(a[g]);b("AdAllocationIntegrityUtils").isGapRuleCategory(h)&&e.setDistIfAbsent(h,f-g)}}return e}};c.recordTimeStoryWasInView=function(a){if(!this.isTimetrackingEnabled)return;var c=a.story;if(!a.vpvd||!c)return;if(a.vpvd>0){a=this.getTimetrackingDataToLog(a);var d=b("collectDataAttributes")(c,["ft"]);Object.assign(a.ft,d.ft);if(this.adAllocationIntegrityLoggingEnabled){var e=this.getGapsInfoToLog(c);Object.assign(a.ft,e)}e=!!d.ft.ei&&a.ft.vpvd_time_delta>this.minTimeToReportImmediately;a.ei&&delete a.ei;this.sendDataToLog(c,a,e)}};c.hasBeenVisible=function(a){return a in this.readStoryIDs};c.sendDataToLog=function(a,c,d){if(this.useBanzai){var e={};d&&(e.delay=3e3);d=this.getSessionID();d&&(c.ft.session_id=d);c.ft.raw_client_time=Date.now()/1e3;b("Banzai").post("feed_tracking",c,e)}else b("clickRefAction")(j,a,null,"FORCE",c)};c.markStoryRead=function(a){var c=this.behavior.getStoryID(a);if(!c||this.hasBeenVisible(c))return;this.readStoryIDs[c]=!0;c=this._getDataToLogImpl(a);var d=b("collectDataAttributes")(a,["ft"]);Object.assign(c.ft,d.ft);delete c.ei;this.sendDataToLog(a,c,!1);this.vpvDebug&&b("CSS").addClass(a,"_5m7s")};c._getDataToLogImpl=function(a){a=this.behavior.getDataToLog(a);a.ft||(a.ft={});return a};return a}();s.clearSingleton=function(){};var t={getAllStories:function(){return[]},getStoryID:function(a){return null},getDataToLog:function(a){return{}}};a=b("viewportTrackingBuilder")(function(a){return new s(t)});s.factory=a.factory.bind(a);s.singleton=a.singleton.bind(a);s.clearSingleton=a.clearSingleton.bind(a);s.getBehavior=function(){return t};e.exports=s}),null);
__d("collectSubtreeData",[],(function(a,b,c,d,e,f){function g(a,b,c,d,e){if(a.offsetWidth===0&&a.offsetHeight===0)return e;var f={};if(a.getAttribute)for(j=0;j<b.length;j++){k=b[j];var h=a.getAttribute(c[k]);if(h){f[k]={};h=JSON.parse(h);for(var i in d)h[i]!==void 0&&(f[k][i]=!0,e[k]===void 0&&(e[k]={}),e[k][i]===void 0&&(e[k][i]=[]),d[i].length>0&&e[k][i].push(d[i]),e[k][i].push("("+h[i]))}}for(var j=0;j<a.childNodes.length;j++){h=a.childNodes[j];g(h,b,c,d,e)}for(var k in f)for(var l in f[k]){h=e[k][l][e[k][l].length-1];h.length>0&&h.charAt(0)=="("?e[k][l][e[k][l].length-1]=h.substr(1):e[k][l].push(")")}return e}function a(a,b){var c={};for(var d=0;d<b.length;++d)c[b[d]]="data-"+b[d];d={tn:"","tn-debug":","};var e={};g(a,b,c,d,e);for(var f in e)for(var h in e[f])e[f][h]=e[f][h].join("");return e}e.exports=a}),null);
__d("recordTNTreeData",["collectSubtreeData"],(function(a,b,c,d,e,f){function a(a,c){var d={},e=b("collectSubtreeData")(a,["ft"]);for(var f in e.ft)d[f+"_tree"]=e.ft[f],f==="tn-debug"&&a.setAttribute("tn-debug_subtree",e.ft[f]);d.evt_value=a.offsetHeight;c&&(d.offset=Math.max(0,a.offsetTop-c.offsetTop));return d}e.exports=a}),null);
__d("ReactFeedComposerXBody",["DOM","Event","SubscriptionsHandler"],(function(a,b,c,d,e,f){"use strict";a=function(){function a(a){this.$2=a.get("root"),this.$4=b("DOM").find(this.$2,"textarea"),this.$1=b("DOM").find(this.$2,'input[type="hidden"]'),this.$3=new(b("SubscriptionsHandler"))(),this.$3.addSubscriptions(b("Event").listen(this.$4,"change",this.$5.bind(this)))}var c=a.prototype;c.$5=function(a){this.$1.value=a.target.value};return a}();e.exports=a}),null);
__d("StreamViewportTracking",["DataAttributeUtils","DOM","DOMDimensions","ViewportTracking","ge","recordTNTreeData","viewportTrackingBuilder"],(function(a,b,c,d,e,f){"use strict";var g=51;function h(a,c,d,e,f){e===void 0&&(e=g);f===void 0&&(f=null);return{_stream:null,getDataFromConfig:function(a,b){b.isTimetrackingEnabled=!0},getAllStories:function(){var a=b("DOM").scry(this.getStream(),d);return a.filter(function(a){return b("DataAttributeUtils").getDataFt(a)})},getStream:function(){if(c)return c;this._stream||(this._stream=b("ge")("home_stream"));return this._stream},getStoryID:function(a){var c=JSON.parse(b("DataAttributeUtils").getDataFt(a));if(c&&c.mf_story_key)return c.mf_story_key;return f!==null?f(a):null},getDataToLog:function(a){var c=this.getStream();c=b("recordTNTreeData")(a,c);var d=a.getAttribute("data-insertion-position");d!==null&&(c.inspos=d);c.evt=e;c.vpv_time=Math.round(Date.now()/1e3);d=b("DOM").scry(a,".fbStoryAttachmentImage")[0];if(d){a=b("DOMDimensions").getElementDimensions(d);c.story_image_height=a.height;c.story_image_width=a.width}return{ft:c}}}}var i=function(c){babelHelpers.inheritsLoose(a,c);function a(){return c.apply(this,arguments)||this}var d=a.prototype;d.getQueryID=function(a){a=JSON.parse(b("DataAttributeUtils").getDataFt(a));return a.qid};d.getFBFeedLocations=function(a){a=JSON.parse(b("DataAttributeUtils").getDataFt(a));return a.fbfeed_location};d.getFBFeedInsertionPosition=function(a){a=JSON.parse(b("DataAttributeUtils").getDataFt(a));return a.insertion_position};d.getTimetrackingDataToLog=function(a){var d=c.prototype.getTimetrackingDataToLog.call(this,a);if(this.ctaLoggingEnabled){a=b("DOM").scry(a.story,"[data-is-cta]").map(function(a){a=b("DataAttributeUtils").getDataFt(a);a=a&&JSON.parse(a);return a&&a.cta_types}).filter(function(a){return!!a});a.length>0&&(d.ft.cta_types=a)}return d};d.cleanup=function(){j.clearSingleton(),c.prototype.cleanup.call(this)};return a}(b("ViewportTracking")),j=b("viewportTrackingBuilder")(function(a,b){b=new i(h(a,b,".uiStreamStory"));b.init(a);return b});i.factory=j.factory.bind(j);i.singleton=j.singleton.bind(j);i.clearSingleton=j.clearSingleton.bind(j);i.getBehavior=h;e.exports=i}),null);