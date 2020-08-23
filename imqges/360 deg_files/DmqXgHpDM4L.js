if (self.CavalryLogger) { CavalryLogger.start_js(["0qAOs"]); }

__d("MercurySendMessageFields",[],(function(a,b,c,d,e,f){e.exports=Object.freeze({AUTO_RETRY_CNT:"auto_retry_cnt",MANUAL_RETRY_CNT:"manual_retry_cnt"})}),null);
__d("MercuryMessageObject",["BanzaiODS","MercuryIDs","MercuryLocalIDs","MercuryMessageClientState","MercurySendMessageFields","MercurySingletonProvider","MessengerObjectAssociationType","MessengerState.bs","RepliedToMessageStatusForGraphQL","SiteData","md5"],(function(a,b,c,d,e,f){a=function(){"use strict";a.getForFBID=function(a){return i.getForFBID(a)};a.get=function(){return i.get()};function a(a){this.$1=a}var c=a.prototype;c.constructHotLikeObject=function(a,c,d,e,f){c=g(this.$1,"ma-type:user-generated-message",c,d);d={body:a,has_attachment:!1,html_body:!1,attachments:[],specific_to_list:[],participants_to_hash:[],creator_info:void 0,tags:e||[],signatureID:f,ui_push_phase:b("SiteData").push_phase};return babelHelpers["extends"]({},c,d)};c.constructPhotoMessageObject=function(a,c,d,e,f){c=g(this.$1,"ma-type:user-generated-message",c,d,a);d={has_attachment:!1,html_body:!1,attachments:[],specific_to_list:[],participants_to_hash:[],creator_info:void 0,tags:e||[],signatureID:f,ui_push_phase:b("SiteData").push_phase};return babelHelpers["extends"]({},c,d)};c.constructTextMessageObject=function(a,c,d,e,f,h,i,j,k,l){h=g(this.$1,"ma-type:user-generated-message",h,i,d);i=f.params&&f.type;d=c.length>0;a={body:typeof a==="string"?a.replace(/^\s+/,"").replace(/\s+$/,""):"",has_attachment:i||d,raw_attachments:d?c:void 0,shareable_attachment:i?{share_params:f.params.get("data"),share_type:f.type}:void 0,profile_ranges:e,profile_xmd:e,verse_group_role_xmd:l,mib_direct_message_data:null,html_body:!1,attachments:[],specific_to_list:[],participants_to_hash:[],creator_info:void 0,tags:j||[],signatureID:k,ui_push_phase:b("SiteData").push_phase};return babelHelpers["extends"]({},h,a)};c.constructUserGeneratedMessageObject=function(a,b,c,d,e,f,h){b=g(this.$1,"ma-type:user-generated-message",b,c,h);c={body:typeof a==="string"?a.replace(/^\s+/,"").replace(/\s+$/,""):"",has_attachment:!1,html_body:!1,attachments:[],specific_to_list:d||[],participants_to_hash:[],creator_info:e,tags:f||[]};return babelHelpers["extends"]({},b,c)};c.constructStickerMessageObject=function(a,c,d,e,f,h){c=g(this.$1,"ma-type:user-generated-message",c,d,h);d={has_attachment:!0,html_body:!1,attachments:[],sticker_id:a,specific_to_list:[],participants_to_hash:[],tags:e||[],signatureID:f,ui_push_phase:b("SiteData").push_phase};return babelHelpers["extends"]({},c,d)};c.constructAttachmentMessageObject=function(a,b,c){a=g(this.$1,"ma-type:user-generated-message",a,b,c);b={attachments:[],specific_to_list:[],participants_to_hash:[]};return babelHelpers["extends"]({},a,b,{tags:[]})};c.constructLogMessageObject=function(a,b,c,d){a=g(this.$1,"ma-type:log-message",a,b);b={log_message_type:c,log_message_data:d,ephemeral_ttl_mode:d&&d.untypedData&&d.untypedData.ttl};return babelHelpers["extends"]({},a,b)};c.constructCTAConfirmationMessageObject=function(a,b,c,d,e,f){a=this.constructUserGeneratedMessageObject(a,b,c,null,null,e,null);b=d?{quick_replies:d,ignore_for_webhook:!1}:{ignore_for_webhook:!0};f&&(b.postback_data=JSON.stringify(f));return babelHelpers["extends"]({},a,{platform_xmd:JSON.stringify(b)})};c.normalizeNewMessage=function(a){a.status===void 0&&(a.status=0);a.offline_threading_id=a.offline_threading_id||b("MercuryLocalIDs").generateOfflineThreadingID(a.timestamp);a.offline_threading_id||b("BanzaiODS").bumpEntityKey(3303,"chat.web","invalid_otid_generated");a.message_id=a.message_id||a.offline_threading_id;var c=b("MercuryIDs").getParticipantIDFromUserID(this.$1);a.specific_to_list=a.specific_to_list||[];a.participants_to_hash=a.participants_to_hash||[];a.specific_to_list.length&&a.specific_to_list.indexOf(c)===-1&&a.specific_to_list.push(c);a.participants_to_hash.length&&a.participants_to_hash.indexOf(c)===-1&&a.participants_to_hash.push(c);var d=!1;if(!a.thread_id)a.thread_id="root:"+a.offline_threading_id;else{var e,f=b("MessengerState.bs").getThreadMetaNow(this.$1,a.thread_id);f&&f.ephemeral_ttl_mode!==null&&a.ephemeral_ttl_mode===void 0&&(a.ephemeral_ttl_mode=f.ephemeral_ttl_mode);((e=f)!=null?(e=e.associated_object)!=null?e.name:e:e)&&((e=f)!=null?e.object_association_type:e)===b("MessengerObjectAssociationType").GENERAL_CHAT&&(d=!0)}if(!d)if(a.specific_to_list.length==1)a.thread_id="user:"+this.$1;else if(a.specific_to_list.length==2){f=a.specific_to_list[0]==c?a.specific_to_list[1]:a.specific_to_list[0];a.thread_id=b("MercuryIDs").getThreadIDFromParticipantID(f)}if(!a.specific_to_list.length){e=b("MercuryIDs").tokenize(a.thread_id);d=e.type;f=e.value;d=="user"&&(a.specific_to_list=["fbid:"+f,c])}a.to_list_md5=this.sortAndHash(a.participants_to_hash);a[b("MercurySendMessageFields").MANUAL_RETRY_CNT]||(a[b("MercurySendMessageFields").MANUAL_RETRY_CNT]=0)};c.sortAndHash=function(a){if(!a||a.length===0)return null;a=a.map(function(a){return b("MercuryIDs").getUserIDFromParticipantID(a)});return a.some(function(a){return a==null})?null:b("md5")(a.sort(function(a,b){if(a==null||b==null)throw new Error("invalid participant id in to_list_md5 creation");if(a.length<b.length)return-1;return a.length>b.length?1:a.localeCompare(b)}).join(":"))};c.normalizeResendMessage=function(a){a.status=7,a.timestamp=Date.now(),a[b("MercurySendMessageFields").MANUAL_RETRY_CNT]+=1};c.normalizeAddAttachmentPlaceholder=function(a,c,d){d.preview_attachments.length>0&&(a.has_attachment=!0,a.preview_attachments=d.preview_attachments),a.client_state=b("MercuryMessageClientState").DO_NOT_SEND_TO_SERVER,a.status=7,a.upload_id=c};return a}();function g(a,c,d,e,f){var g=h(d)?["source:chat"]:[],i=Date.now();c={action_type:c,thread_id:e,author:b("MercuryIDs").getParticipantIDFromUserID(a),author_email:null,timestamp:i,is_unread:!1,is_filtered_content:!1,is_filtered_content_bh:!1,is_filtered_content_account:!1,is_filtered_content_quasar:!1,is_filtered_content_invalid_app:!1,is_spoof_warning:!1,source:d,source_tags:g,replied_to_message:f?{message:f,status:b("RepliedToMessageStatusForGraphQL").VALID}:void 0};return c}function h(a){switch(a){case"source:chat:web":case"source:chat:jabber":case"source:chat:iphone":case"source:chat:meebo":case"source:chat:orca":case"source:chat:test":case"source:chat":return!0;default:return!1}}var i=new(b("MercurySingletonProvider"))(a);e.exports=a}),null);
__d("MercuryMessageActions",["AsyncRequest","Bootloader","CurrentUser","MercuryDispatcher","MercuryMessageObject","MercuryServerRequests","MercurySingletonMixin","MessengerState.bs","WorkChatSavedMessagesOnHeaderMenuNux"],(function(a,b,c,d,e,f){"use strict";a=function(){function a(a){this.$1=a,this.$2=b("MercuryMessageObject").getForFBID(this.$1),this.__serverRequests=b("MercuryServerRequests").getForFBID(this.$1),this.__dispatcher=b("MercuryDispatcher").getForFBID(this.$1)}var c=a.prototype;c.send=function(a,b,c){this.$2.normalizeNewMessage(a),this.__dispatcher.handleUpdate(this.__constructClientSingleMessagePayload(babelHelpers["extends"]({},a),"client_send_message")),this.__serverRequests.sendNewMessage(a,c),b!=null&&b(a.thread_id)};c.resend=function(a,b){a=babelHelpers["extends"]({},a);this.$2.normalizeResendMessage(a);this.send(a,void 0,b)};c.addAttachmentPlaceholder=function(a,b,c){this.$2.normalizeAddAttachmentPlaceholder(a,b,c),this.$2.normalizeNewMessage(a),this.__dispatcher.handleUpdate(this.__constructClientSingleMessagePayload(babelHelpers["extends"]({},a),"client_send_message"))};c.cancelAttachmentPlaceholder=function(a,b){this.__dispatcher.handleUpdate(this.__constructClientSingleMessagePayload({upload_id:a,upload_data:b,action_type:"ma-type:cancel-attachment-placeholder"},"client_send_message"))};c.confirmAttachmentPlaceholder=function(a,b){this.__dispatcher.handleUpdate(this.__constructClientSingleMessagePayload({upload_id:a,upload_data:b,action_type:"ma-type:confirm-attachment-placeholder"},"client_send_message"))};c["delete"]=function(a,b,c){this.__dispatcher.handleUpdate(this.$3(a,b,"ma-type:delete-messages",c||"client_delete_messages"))};c.changeSaveStatus=function(a,c,d){var e=b("MessengerState.bs").getServerMessageID(b("CurrentUser").getID(),a.message_id);this.__dispatcher.handleUpdate(this.__constructClientSingleMessagePayload({thread_id:a.thread_id,messageId:e,tags_to_add:c?["message:save"]:[],tags_to_delete:c?[]:["message:save"],action_type:"ma-type:mutate_tags"},d||"client_update_saved_message_status"));b("Bootloader").loadModules(["XMessengerDotComSaveController","SavedStateActions","CollectionsDisplaySurface","CollectionCurationMechanisms","WorkChatSavedMessagesTypedLogger","SavedMessagesEvent","useWorkGalahadEventEmitter"],function(d,f,g,h,i,j,k){new(b("AsyncRequest"))().setURI(d.getURIBuilder().getURI()).setData({action:c?f.SAVE:f.UNSAVE,surface:g.MESSENGER_DOT_COM_MESSAGE,mechanism:h.RIGHT_CLICK,message_id:e}).setHandler(function(){if(c&&b("WorkChatSavedMessagesOnHeaderMenuNux").shouldShowNux){var d=k(["toggleNavHeaderMenu","showSavedMessageNux"]);d[0];d=d[1];d()}new i().setEvent(c?j.SAVE:j.UNSAVE).setThreadID(a.thread_id).setMessageID(e).log()}).send()},"MercuryMessageActions")};c.__constructClientSingleMessagePayload=function(a,b){return{actions:[a],from_client:!0,payload_source:b}};c.$3=function(a,b,c,d){return{actions:[{action_type:c,thread_id:a,message_ids:b}],from_client:!0,payload_source:d}};return a}();c=Object.assign(a,b("MercurySingletonMixin"),{_instances:{}});e.exports=c}),null);
__d("MessengerBootloadedSecondarySearchLogger",["Bootloader","MessengerSecondarySearchFunnelConstants","gkx"],(function(a,b,c,d,e,f){"use strict";var g=[],h="",i={LOCAL_CONTACTS:[],ORDERED_GCF_FRIENDLIST:[],SHORT_PROFILES:[],SUGGESTED_RECIPIENTS:[]},j=!1,k=!1;d=(c=b("MessengerSecondarySearchFunnelConstants")).EVENTS;var l=d.CLICK_OTHER_THREAD,m=d.END,n=d.IMPRESSIONS,o=d.START,p=d.QUERY_CHANGED,q=d.RESULT_SELECTED,r=d.SOURCE_ENDED,s=d.SOURCE_STARTED,t=d.TOKEN_REMOVED;f=c.END_ACTIONS;var u=f.ABANDON,v=f.SINGLE_RESULT_SELECTED;d=c.SOURCES;var w=d.SERVER,x=d.SHORT_PROFILES,y=d.SUGGESTED_RECIPIENTS,z=d.LOCAL_CONTACTS,A=d.LOCAL_AND_SERVER,B=d.ORDERED_GCF_FRIENDLIST,C=c.ENTRY_SURFACES.COMPOSER;function D(a){if(i.SUGGESTED_RECIPIENTS.includes(a))return y;else if(i.ORDERED_GCF_FRIENDLIST.includes(a))return B;else if(i.SHORT_PROFILES.includes(a))return x;else if(i.LOCAL_CONTACTS.includes(a))return z;else return w}function a(a){if(!b("gkx")("678592"))return;b("Bootloader").loadModules(["MessengerSecondarySearchFunnelLogger"],function(c){switch(a.name){case o:if(a.surface===C&&k===!0){c.reenterSearch(a.loggingID);break}j=!1;i={LOCAL_CONTACTS:[],ORDERED_GCF_FRIENDLIST:[],SHORT_PROFILES:[],SUGGESTED_RECIPIENTS:[]};c.startFunnel(a.client,a.surface,a.surface,null,a.loggingID);a.surface===C&&(k=!0);break;case m:var d=a.end_reason;a.surface===b("MessengerSecondarySearchFunnelConstants").SEARCH_SURFACES.BROADCAST&&(d=j?v:u);c.endFunnel(b("MessengerSecondarySearchFunnelConstants").END_REASONS.ACTION,d,a.loggingID,a.threadID,a.isNewThread);k=!1;break;case n:d=a.entries.map(function(a){a.data_source=[D(a.result_fbid)];return a});g=a.entries.map(function(a){return a.result_fbid});c.impressions(a.query,d,A,a.loggingID);break;case p:h=a.query;c.queryChanged(a.query,a.loggingID);break;case q:j=!0;d=D(a.id);var e=g.indexOf(a.id);c.resultSelected(a.id,e,a.type,a.query?a.query:h,d,a.surface,a.loggingID,a.selectionType);break;case r:e=!a.query||a.query===h;switch(a.source){case z:i.LOCAL_CONTACTS=a.ids?a.ids:[];break;case y:i.SUGGESTED_RECIPIENTS=a.ids?a.ids:[];break;case x:i.SHORT_PROFILES=a.ids?a.ids:[];e=!0;break;case B:i.ORDERED_GCF_FRIENDLIST=a.ids?a.ids:[];e=!0;break;default:break}c.sourceEnded(a.query,a.numResults,a.source,a.status,e,a.loggingID);break;case s:c.sourceStarted(a.query,a.source,a.loggingID);break;case t:c.tokenRemoved(a.deletedIDs,a.clearedAll,a.loggingID);break;case l:c.unfocusSearch(a.loggingID);break}},"MessengerBootloadedSecondarySearchLogger")}e.exports={logSearchEvent:a}}),null);
__d("MessengerDiscoveryEntryPoint",[],(function(a,b,c,d,e,f){e.exports=Object.freeze({FB_HEADER_DOCK:"fb_header_dock",FB_HEADER_DOCK_LOADED_FROM_BROWSER_COOKIE:"fb_header_dock:loaded_from_browser_cookie",FB_HEADER_DOCK_JEWEL_THREAD:"fb_header_dock:jewel_thread",FB_HEADER_DOCK_JEWEL_SEE_ALL_MESSAGES:"fb_header_dock:jewel_see_all_messages",DONOR_SUPPORT:"donor_support",DONOR_SUPPORT_REACTIVE_MORE_MENU:"donor_support:reactive_more_menu",DONOR_SUPPORT_REACTIVE_FAQ:"donor_support:reactive_faq",DONOR_SUPPORT_PROACTIVE:"donor_support:proactive",DONOR_SUPPORT_CHECKLIST:"donor_support:checklist",BROWSER_PROFILE_ICON:"browser_profile_icon",MESSAGING_IN_BLUE:"messaging_in_blue",MESSAGING_IN_BLUE_THREAD_DETAILS_VIEW:"messaging_in_blue:thread_details_view",MESSAGING_IN_BLUE_THREAD_VIEW_HEADER:"messaging_in_blue:thread_view_header",MESSAGING_IN_BLUE_GROUPS_CHAT_THREAD_VIEW_HEADER:"messaging_in_blue:groups_chat_thread_view_header",FB_STORY:"fb_story",FB_STORY_VIEWER_SHEET_ROW:"fb_story:viewer_sheet_row",FB_STORY_VIEWER_SHEET_MENU:"fb_story:viewer_sheet_menu",FB_STORY_THREAD_VIEW_HEADER:"fb_story:thread_view_header",FB_STORY_THREAD_VIEW_FOOTER:"fb_story:thread_view_footer",FB_STORY_STORIES_PUSH_NOTIFICATION:"fb_story:stories_push_notification",FB_STORY_STORIES_JEWEL_NOTIFICATION:"fb_story:stories_jewel_notification",FB_STORY_STORIES_VIEWER_CONSUMER_REPLY:"fb_story:stories_viewer_consumer_reply",FB_STORY_STORIES_VIEWER_CONSUMER_ARTIFACT:"fb_story:stories_viewer_consumer_artifact",FB_STORY_STORIES_PAGE_STORY_CONVERSATIONS:"fb_story:stories_page_story_conversations",FB_STORY_STORIES_PAGE_STORY_ADMIN_CONVERSATIONS:"fb_story:stories_page_story_admin_conversations",FB_STORY_QUESTION_TRIGGERED_MENTION_UPSELL:"fb_story:question_triggered_mention_upsell",FB_STORY_PAGE_STORIES_COMMENT_STICKER_CONVERSATIONS:"fb_story:page_stories_comment_sticker_conversations",FB_STORY_SOCIAL_CONTEXT_CONVERSATIONS:"fb_story:social_context_conversations",FB_STORY_STORIES_MULTI_AUTHOR_STORY_CONVERSATIONS:"fb_story:stories_multi_author_story_conversations",FB_TOP_OF_FEED_UNIT:"fb_top_of_feed_unit",ANONYMOUS_MESSAGING:"anonymous_messaging",FIRST_PARTY_BOT:"first_party_bot",FIRST_PARTY_BOT_RECRUITING_BOT:"first_party_bot:recruiting_bot",FIRST_PARTY_BOT_MESSENGER_BOT:"first_party_bot:messenger_bot",FIRST_PARTY_BOT_WORKPLACE_APP:"first_party_bot:workplace_app",FIRST_PARTY_BOT_REPORT_SPAM:"first_party_bot:report_spam",FIRST_PARTY_BOT_MOBILE_BUILDS_BOT:"first_party_bot:mobile_builds_bot",FIRST_PARTY_BOT_FB_TEST_PAGE:"first_party_bot:fb_test_page",FIRST_PARTY_BOT_CALENDAR_BOT:"first_party_bot:calendar_bot",FIRST_PARTY_BOT_ORDER_FOOD:"first_party_bot:order_food",FIRST_PARTY_BOT_BUSINESS_ASSISTANT:"first_party_bot:business_assistant",FIRST_PARTY_BOT_MOBILE_FINANCIAL_SERVICE:"first_party_bot:mobile_financial_service",FIRST_PARTY_BOT_FACEBOOK_BUSINESS:"first_party_bot:facebook_business",FIRST_PARTY_BOT_LEAD_GEN:"first_party_bot:lead_gen",FIRST_PARTY_BOT_MARKETPLACE:"first_party_bot:marketplace",FIRST_PARTY_BOT_INSTANT_EXPERIENCES:"first_party_bot:instant_experiences",FIRST_PARTY_BOT_PRODUCT_SUPPORT_TOOL:"first_party_bot:product_support_tool",FIRST_PARTY_BOT_CTA_ADS:"first_party_bot:cta_ads",FIRST_PARTY_BOT_FB_LOGIN_ALERTS:"first_party_bot:fb_login_alerts",FIRST_PARTY_BOT_M:"first_party_bot:m",FIRST_PARTY_BOT_TOGETHER:"first_party_bot:together",FIRST_PARTY_BOT_MPP_SUPPORT:"first_party_bot:mpp_support",MESSENGER_SEARCH:"messenger_search",MESSENGER_SEARCH_HOME:"messenger_search:home",MESSENGER_SEARCH_PEOPLE:"messenger_search:people",MESSENGER_SEARCH_GAMES:"messenger_search:games",MESSENGER_SEARCH_DISCOVER:"messenger_search:discover",MESSENGER_SEARCH_NULL_STATE:"messenger_search:null_state",MESSENGER_SEARCH_M3:"messenger_search:m3",MESSENGER_SEARCH_M4:"messenger_search:m4",FB_NOTIFICATIONS:"fb_notifications",BEGIN_SHARE_FLOW:"begin_share_flow",APP_INSIGHTS:"app_insights",BRANDED_CAMERA:"branded_camera",SAMPLE_BOTS:"sample_bots",PAGES_COMMS_AUTOMATED_RESPONSES:"pages_comms_automated_responses",PAGES_COMMS_AUTOMATED_RESPONSES_PREVIEW:"pages_comms_automated_responses:preview",PAGES_COMMS_AUTOMATED_RESPONSES_RECOMMENDATIONS:"pages_comms_automated_responses:recommendations",PAGES_COMMS_AUTOMATED_RESPONSES_JOB_APPLICATION:"pages_comms_automated_responses:job_application",PAGES_COMMS_AUTOMATED_RESPONSES_SMART_REPLY_LOCATION:"pages_comms_automated_responses:smart_reply_location",PAGES_COMMS_AUTOMATED_RESPONSES_SMART_REPLY_CONTACT:"pages_comms_automated_responses:smart_reply_contact",PAGES_COMMS_AUTOMATED_RESPONSES_SMART_REPLY_HOURS:"pages_comms_automated_responses:smart_reply_hours",PAGES_COMMS_AUTOMATED_RESPONSES_SMART_REPLY_POSITIVE_FEEDBACK:"pages_comms_automated_responses:smart_reply_positive_feedback",PAGES_COMMS_AUTOMATED_RESPONSES_SMART_REPLY_NEGATIVE_FEEDBACK:"pages_comms_automated_responses:smart_reply_negative_feedback",PAGES_COMMS_AUTOMATED_RESPONSES_INSTANT_REPLIES:"pages_comms_automated_responses:instant_replies",PAGES_COMMS_AUTOMATED_RESPONSES_AWAY_MESSAGE:"pages_comms_automated_responses:away_message",PAGES_COMMS_AUTOMATED_RESPONSES_APPOINTMENT_REMINDER:"pages_comms_automated_responses:appointment_reminder",PAGES_COMMS_AUTOMATED_RESPONSES_APPOINTMENT_FOLLOWUP:"pages_comms_automated_responses:appointment_followup",PAGES_COMMS_AUTOMATED_RESPONSES_ORGANIC_INTAKE_FORM:"pages_comms_automated_responses:organic_intake_form",PAGES_COMMS_AUTOMATED_RESPONSES_WELCOME_MESSAGE:"pages_comms_automated_responses:welcome_message",MARKETPLACE_INBOX:"marketplace_inbox",CUSTOMER_MATCHING:"customer_matching",CUSTOMER_MATCHING_PHONE_NUMBER:"customer_matching:phone_number",VERTICAL_SERVICES:"vertical_services",VERTICAL_SERVICES_GET_QUOTE:"vertical_services:get_quote",UNKNOWN:"unknown",UNKNOWN_BNP_PSID:"unknown:bnp_psid",UNKNOWN_ORGANIC_POST:"unknown:organic_post",MESSAGING_PLUGIN:"messaging_plugin",MESSAGING_PLUGIN_MOBILE_REDIRECT:"messaging_plugin:mobile_redirect",MESSAGING_PLUGIN_UPGRADE_FLOW:"messaging_plugin:upgrade_flow",MESSENGERDOTCOM:"messengerdotcom",MESSENGERDOTCOM_WEB_SEARCH:"messengerdotcom:web_search",MESSENGERDOTCOM_PAGES_PLUGIN:"messengerdotcom:pages_plugin",FB_PROFILE:"fb_profile",FB_PROFILE_MESSAGE_BUTTON:"fb_profile:message_button",FB_PROFILE_FRIEND_REQUEST_OPEN_MESSENGER_BUTTON:"fb_profile:friend_request_open_messenger_button",FB_PROFILE_AUDIO_CALL_BUTTON:"fb_profile:audio_call_button",FB_PROFILE_VIDEO_CALL_BUTTON:"fb_profile:video_call_button",DISCOVER_TAB:"discover_tab",DISCOVER_TAB_M4:"discover_tab:m4",DISCOVER_TAB_M3:"discover_tab:m3",MESSAGING_INBOX_IN_BLUE:"messaging_inbox_in_blue",MESSAGING_INBOX_IN_BLUE_THREAD_LIST:"messaging_inbox_in_blue:thread_list",MESSAGING_INBOX_IN_BLUE_PEOPLE_PICKER:"messaging_inbox_in_blue:people_picker",MESSAGING_INBOX_IN_BLUE_INBOX_ICON:"messaging_inbox_in_blue:inbox_icon",MESSAGING_INBOX_IN_BLUE_SWIPE_FROM_RIGHT:"messaging_inbox_in_blue:swipe_from_right",MESSAGING_INBOX_IN_BLUE_MIB_NOTIFICATION:"messaging_inbox_in_blue:mib_notification",MESSAGING_INBOX_IN_BLUE_ACTIVE_NOW:"messaging_inbox_in_blue:active_now",MESSAGING_INBOX_IN_BLUE_SUGGESTED_CHATS:"messaging_inbox_in_blue:suggested_chats",MESSAGING_INBOX_IN_BLUE_CHAT_PREVIEW_BANNER:"messaging_inbox_in_blue:chat_preview_banner",MESSAGING_INBOX_IN_BLUE_INBOX_QP:"messaging_inbox_in_blue:inbox_qp",MESSAGING_INBOX_IN_BLUE_THREAD_VIEW_CORE_NULL_STATE:"messaging_inbox_in_blue:thread_view_core_null_state",NEARBY__HOME:"nearby__home",NEARBY__HOME_DASH_LIST:"nearby__home:dash_list",NEARBY__HOME_DASH_MAP:"nearby__home:dash_map",NEARBY__HOME_DASH_WAVE:"nearby__home:dash_wave",NEARBY__HOME_WAVE_INT:"nearby__home:wave_int",NEARBY__HOME_FEED:"nearby__home:feed",NEARBY__HOME_SHARE_LIVE_LOC:"nearby__home:share_live_loc",BYMM_NULL_STATE:"bymm_null_state",FUNDRAISER_SUPPORT:"fundraiser_support",FUNDRAISER_SUPPORT_REACTIVE_MORE_MENU:"fundraiser_support:reactive_more_menu",FUNDRAISER_SUPPORT_REACTIVE_FAQ:"fundraiser_support:reactive_faq",FUNDRAISER_SUPPORT_PROACTIVE:"fundraiser_support:proactive",FUNDRAISER_SUPPORT_CHECKLIST:"fundraiser_support:checklist",FUNDRAISER_SUPPORT_FACEBOOK_PAY_HANDOVER:"fundraiser_support:facebook_pay_handover",FB_SEARCH:"fb_search",FB_SEARCH_CHAT_SIDEBAR_TYPEAHEAD:"fb_search:chat_sidebar_typeahead",FB_SEARCH_SEARCH_ENTITY_CARD:"fb_search:search_entity_card",FB_SEARCH_HIGH_CONFIDENCE_CARD:"fb_search:high_confidence_card",SPONSORED_MESSAGES_ADS:"sponsored_messages_ads",LOCAL_COMMUNITIES:"local_communities",LOCAL_COMMUNITIES_FEED:"local_communities:feed",LOCAL_COMMUNITIES_NEIGHBORHOOD_INBOX:"local_communities:neighborhood_inbox",LOCAL_COMMUNITIES_PERSONAL_INBOX:"local_communities:personal_inbox",LOCAL_COMMUNITIES_NOTIFICATION:"local_communities:notification",INSTANT_ARTICLE:"instant_article",INSTANT_ARTICLE_CTA:"instant_article:cta",INSTANT_ARTICLE_OVERFLOW_MENU:"instant_article:overflow_menu",INSTANT_ARTICLE_TOOLKIT_DISCUSS:"instant_article:toolkit_discuss",FB_FEED:"fb_feed",FB_FEED_PYMM_RHC:"fb_feed:pymm_rhc",FB_FEED_PAGE_HOVER_CARD:"fb_feed:page_hover_card",FB_FEED_ADMIN:"fb_feed:admin",FB_FEED_ORGANIC_POST:"fb_feed:organic_post",FB_FEED_BCF:"fb_feed:bcf",FB_FEED_BCF_OPEN_CHAT_BUTTON:"fb_feed:bcf_open_chat_button",FB_FEED_COMMENT_PIVOT_VIEW_BUTTON:"fb_feed:comment_pivot_view_button",FB_FEED_REACTORS_LIST_MESSAGE_BUTTON:"fb_feed:reactors_list_message_button",FB_FEED_POST_HEADER_MESSAGE_BUTTON:"fb_feed:post_header_message_button",FB_FEED_COMMENT_UFI:"fb_feed:comment_ufi",FB_FEED_REPLY_TO_POST:"fb_feed:reply_to_post",FB_FEED_GO_TO_CHAT:"fb_feed:go_to_chat",PAGES_MANAGER_APP:"pages_manager_app",PAGES_MANAGER_APP_NOTIFICATION_DIRECT_REPLY_TEXT:"pages_manager_app:notification_direct_reply_text",PAGES_MANAGER_APP_NOTIFICATION_DIRECT_REPLY_LIKE:"pages_manager_app:notification_direct_reply_like",PAGES_MANAGER_APP_CRM_SCHEDULED_MESSAGES:"pages_manager_app:crm_scheduled_messages",BUSINESS_ON_MESSENGER:"business_on_messenger",GEMSTONE:"gemstone",GEMSTONE_MESSAGE_INBOX:"gemstone:message_inbox",CLICK_TO_MESSENGER_AD:"click_to_messenger_ad",CLICK_TO_MESSENGER_AD_MESSENGER_DEEPLINK_ADS:"click_to_messenger_ad:messenger_deeplink_ads",CLICK_TO_MESSENGER_AD_ADS_WELCOME_ADMIN:"click_to_messenger_ad:ads_welcome_admin",CLICK_TO_MESSENGER_AD_USER_SENT:"click_to_messenger_ad:user_sent",CLICK_TO_MESSENGER_AD_PARTIAL_AUTOMATED:"click_to_messenger_ad:partial_automated",CLICK_TO_MESSENGER_AD_FB_P2B_DEEPLINK:"click_to_messenger_ad:fb_p2b_deeplink",MDOTME:"mdotme",FB_OFFER:"fb_offer",FB_OFFER_OFFER_DETAILS_VIEW:"fb_offer:offer_details_view",ADMIN_MESSAGES:"admin_messages",SEND_TO_MESSENGER_PLUGIN:"send_to_messenger_plugin",NPX_ICE_BREAKER:"npx_ice_breaker",BUSINESS_TAB_M4:"business_tab_m4",BUSINESS_TAB_M4_BUSINESS_INBOX:"business_tab_m4:business_inbox",BUSINESS_TAB_M4_RECOMMENDATION_CARD:"business_tab_m4:recommendation_card",BUSINESS_TAB_M4_RECOMMENDATION_DETAILS:"business_tab_m4:recommendation_details",FACEBOOKPAY_SUPPORT:"facebookpay_support",FACEBOOKPAY_SUPPORT_PAYMENT_HISTORY:"facebookpay_support:payment_history",FB_PAGE:"fb_page",FB_PAGE_ICEBREAKER_RHC:"fb_page:icebreaker_rhc",FB_PAGE_SEND_AND_POST_FROM_COMPOSER:"fb_page:send_and_post_from_composer",FB_PAGE_ADMIN_TEST_LINK:"fb_page:admin_test_link",FB_PAGE_SHOP_PDP:"fb_page:shop_pdp",FB_PAGE_FREQUENTLY_ASKED_QUESTION_CARD:"fb_page:frequently_asked_question_card",FB_PAGE_ABOUT_CARD_DETAIL_VIEW:"fb_page:about_card_detail_view",FB_PAGE_RESPONSIVENESS_CONTEXT_CARD:"fb_page:responsiveness_context_card",FB_PAGE_ABOUT_CARD:"fb_page:about_card",FB_PAGE_ABOUT_CARD_PQI_MESSAGE_UPSELL:"fb_page:about_card_pqi_message_upsell",FB_PAGE_PAGE_HEADER:"fb_page:page_header",FB_PAGE_PRIMARY_MESSAGE_BUTTON:"fb_page:primary_message_button",FB_PAGE_SECONDARY_MESSAGE_BUTTON:"fb_page:secondary_message_button",FB_PAGE_FB_PAGE_CTA_PAGES_ACTIONS_UNIT:"fb_page:fb_page_cta_pages_actions_unit",FB_PAGE_JEWEL_THREAD:"fb_page:jewel_thread",FB_PAGE_USER_MESSAGE_PROMPT:"fb_page:user_message_prompt",FB_PAGE_PAGES_INFO:"fb_page:pages_info",FB_PAGE_LOADED_FROM_DATA:"fb_page:loaded_from_data",FB_PAGE_CHAT_SIDEBAR_TYPEAHEAD:"fb_page:chat_sidebar_typeahead",FB_PAGE_DYNAMICHOVERCARD:"fb_page:dynamicHoverCard",FB_PAGE_ABOUT_ROW:"fb_page:about_row",FB_PAGE_PYMM_RHC:"fb_page:pymm_rhc",FB_PAGE_GROUPS_RHC:"fb_page:groups_rhc",FB_PAGE_CONTEXT_CARD:"fb_page:context_card",FB_PAGE_CONTEXTUAL_RECOMMENDATIONS:"fb_page:contextual_recommendations",FB_PAGE_SEARCHENTITYCARD:"fb_page:searchEntityCard",FB_PAGE_MESSAGE_RECEIVED:"fb_page:message_received",FB_PAGE_PAGE_HOVERCARD:"fb_page:page_hovercard",FB_PAGE_QUESTION_TRIGGERED_CONVO:"fb_page:question_triggered_convo",FB_PAGE_DEFAULT_NATIVE_TEMPLATES_CTA:"fb_page:default_native_templates_cta",FB_PAGE_LAUNCHPAD_MORE_DRAWER:"fb_page:launchpad_more_drawer",FB_PAGE_LAUNCHPAD_HEADER:"fb_page:launchpad_header",FB_PAGE_LAUNCHPAD_FOOTER:"fb_page:launchpad_footer",FB_PAGE_REPLY_TRIGGERED_CONVO:"fb_page:reply_triggered_convo",FB_PAGE_LOCATIONS_CHILD_PAGE_MESSAGE_CTA:"fb_page:locations_child_page_message_cta",BROADCAST:"broadcast",CUSTOMER_CHAT_PLUGIN:"customer_chat_plugin",IN_APP_BROWSER:"in_app_browser",IN_APP_BROWSER_SEND_MESSAGE_CTA:"in_app_browser:send_message_cta",MESSENGER_RTC:"messenger_rtc",MESSENGER_RTC_PHOTO_CAPTURE:"messenger_rtc:photo_capture",NULL_STATE_CTA:"null_state_cta",INSTANT_GAMES:"instant_games",INSTANT_GAMES_ADMIN_INTRO:"instant_games:admin_intro",PRIVATE_REPLY:"private_reply",PRIVATE_REPLY_ADMIN:"private_reply:admin",PRIVATE_REPLY_RICH_POST_REPLY:"private_reply:rich_post_reply",PRIVATE_REPLY_RICH_COMMENT_REPLY:"private_reply:rich_comment_reply",PRIVATE_REPLY_RICH_VIDEO_TEXT_QUESTION_RESPONSE_REPLY:"private_reply:rich_video_text_question_response_reply",ONE_TIME_NOTIF:"one_time_notif",MESSENGER_BUSINESS_SOLUTIONS:"messenger_business_solutions",MEET_NEW_FRIENDS:"meet_new_friends",FB_GROUPS:"fb_groups",FB_GROUPS_PICKER_EXISTING_CHAT:"fb_groups:picker_existing_chat",FB_GROUPS_PICKER_JOIN_CHAT:"fb_groups:picker_join_chat",FB_GROUPS_PICKER_CREATE_CHAT:"fb_groups:picker_create_chat",FB_GROUPS_MALL_CHATS_TAB:"fb_groups:mall_chats_tab",FB_GROUPS_ADMIN_REPORT:"fb_groups:admin_report",FB_GROUPS_CREATION:"fb_groups:creation",FB_GROUPS_INBOX:"fb_groups:inbox",FB_GROUPS_PUSH_NOTIFICATION:"fb_groups:push_notification",FB_GROUPS_JEWEL_NOTIFICATION:"fb_groups:jewel_notification",FB_GROUPS_UNKNOWN:"fb_groups:unknown",VERSE:"verse",UFI:"UFI",UFI_SEND_MESSAGE_BUTTON:"UFI:send_message_button",UFI_REACTIONS_AUXILIARY_REPLY_ACTION_NEWS_FEED:"UFI:reactions_auxiliary_reply_action_news_feed",UFI_REACTIONS_AUXILIARY_REPLY_ACTION_PHOTO_STORY:"UFI:reactions_auxiliary_reply_action_photo_story",UFI_REACTIONS_AUXILIARY_REPLY_ACTION_GROUPS:"UFI:reactions_auxiliary_reply_action_groups",UFI_REACTIONS_AUXILIARY_REPLY_ACTION_TIMELINE:"UFI:reactions_auxiliary_reply_action_timeline",UFI_REACTIONS_AUXILIARY_REPLY_ACTION_PHOTO_VIEWER:"UFI:reactions_auxiliary_reply_action_photo_viewer",PAGES_PLUGIN:"pages_plugin",PAGES_PLUGIN_MESSAGE_TAB:"pages_plugin:message_tab",FB_LOGIN_ALERTS:"fb_login_alerts",WORK_CHAT:"work_chat",WORK_CHAT_WORK_IDS:"work_chat:work_ids",WORK_CHAT_EMAIL:"work_chat:email",CHECKBOX_PLUGIN:"checkbox_plugin",DEPRECATED:"deprecated",DEPRECATED_BUSINESS_ON_MESSENGER:"deprecated:business_on_messenger",DEPRECATED_ADMIN_MESSAGES:"deprecated:admin_messages",DEPRECATED_PIXEL_EVENT:"deprecated:pixel_event",DEPRECATED_NULL_STATE_CTA:"deprecated:null_state_cta",DEPRECATED_SUBSCRIPTIONS:"deprecated:subscriptions",FB_JOB:"fb_job",FB_JOB_JOB_APPLICATION:"fb_job:job_application",FRIENDS_HOME:"friends_home",FRIENDS_HOME_ACTIVE_NOW:"friends_home:active_now",FRIENDS_HOME_POST_ACCEPT_MESSAGING:"friends_home:post_accept_messaging",FRIENDS_HOME_MESSAGE_NEW_FRIENDS:"friends_home:message_new_friends",M:"m",MIB_NOTIFICATION:"mib_notification",MIB_NOTIFICATION_DIRECT_PUSH_NOTIF:"mib_notification:direct_push_notif",MIB_NOTIFICATION_DIRECT_JEWEL_NOTIF:"mib_notification:direct_jewel_notif",MIB_NOTIFICATION_SUBSEQUENT_PUSH_NOTIF:"mib_notification:subsequent_push_notif",MIB_NOTIFICATION_SUBSEQUENT_JEWEL_NOTIF:"mib_notification:subsequent_jewel_notif",LOCAL_DEV_PLATFORM:"local_dev_platform",LOCAL_DEV_PLATFORM_SEND_AVAILABILITY:"local_dev_platform:send_availability",MESSENGER_INBOX:"messenger_inbox",MESSENGER_INBOX_THREAD_LIST:"messenger_inbox:thread_list",MESSENGER_INBOX_IN_THREAD:"messenger_inbox:in_thread",MESSENGER_INBOX_NESTED_FOLDER:"messenger_inbox:nested_folder",FB_JOINABLE_VIDEO_CHATS:"fb_joinable_video_chats",FB_EVENT:"fb_event",FB_EVENT_MESSAGE_HOST:"fb_event:message_host",FB_INLINE_SHARE_SHEET_SEND_BUTTON:"fb_inline_share_sheet_send_button",NEARBY_FRIENDS:"nearby_friends",NEARBY_FRIENDS_DASH_LIST:"nearby_friends:dash_list",NEARBY_FRIENDS_DASH_MAP:"nearby_friends:dash_map",NEARBY_FRIENDS_DASH_WAVE:"nearby_friends:dash_wave",NEARBY_FRIENDS_WAVE_INT:"nearby_friends:wave_int",NEARBY_FRIENDS_FEED:"nearby_friends:feed",NEARBY_FRIENDS_SHARE_LIVE_LOC:"nearby_friends:share_live_loc",NONPROFIT_SUPPORT:"nonprofit_support",NONPROFIT_SUPPORT_REACTIVE_MORE_MENU:"nonprofit_support:reactive_more_menu",NONPROFIT_SUPPORT_REACTIVE_FAQ:"nonprofit_support:reactive_faq",NONPROFIT_SUPPORT_PROACTIVE:"nonprofit_support:proactive",NONPROFIT_SUPPORT_CHECKLIST:"nonprofit_support:checklist",IG_FEED:"ig_feed",IG_FEED_ORGANIC_POST:"ig_feed:organic_post",DYNAMIC_LOCAL_ADS:"dynamic_local_ads",WATCH_SHARESHEET:"watch_sharesheet",WATCH_SHARESHEET_SEE_CHAT_BUTTON:"watch_sharesheet:see_chat_button"})}),null);
__d("PhotoResizeModeConst",[],(function(a,b,c,d,e,f){e.exports=Object.freeze({CONTAIN:"s",COVER:"p"})}),null);