if (self.CavalryLogger) { CavalryLogger.start_js(["j76Cs"]); }

__d("FantaReducersSendMessages",["fbt","AsyncRequest","Bootloader","ChatTabViewEvents","CurrentUser","EmojiLikeUtils","EmojiState","FantaMessageActions","FantaTypeComposer","FantaTypeFileUploader","FantaTypeTabContents","MercuryIDs","MercuryMessageActions","MercuryMessageObject","MercuryThreadActions","MercuryThreadIDMap","MessageRequestUtils","MessengerAdminGroupUtils","MessengerDiscoveryEntryPoint","MessengerDiscoveryEntryPointsLoggingHelper","MessengerEmojiUsageUtils","MessengerState.bs","SimpleXUIDialog","XMessagingSetThreadNameController","getPageIDFromThreadID"],(function(a,b,c,d,e,f,g){"use strict";var h=b("MercuryMessageActions").get(),i=b("MercuryMessageObject").get(),j=b("MercuryThreadActions").get(),k=b("MercuryThreadIDMap").get(),l=b("FantaMessageActions").Types,m=/^\s*$/,n="/ajax/chat/multichat/name_conversation/dismiss.php";function a(a,c){switch(c.type){case l.UPDATE_GROUP_NAME:var d=c.threadID;c=c.newName;var e=a.mercury.tabContents.get(d);if(!e)return a;var f=e;f=f.thread;if(!f)return a;f=f.name;(c||f)&&c!==f&&C(d,c);k.getServerIDFromClientID(d,function(a){new(b("AsyncRequest"))(n).setData({thread_fbid:a}).send()});e=e.merge({openSheet:null});a=a.setIn(["mercury","tabContents",d],e)}return a}function c(a,b){switch(b.type){case l.SET_NEW_GROUP_NAME_LOCALLY:var c=b.threadID;b=b.newName;var d=a.mercury.tabContents.get(c);if(!d)return a;d=d.merge({newGroupChatName:b});a=a.setIn(["mercury","tabContents",c],d)}return a}function d(a,b){switch(b.type){case l.ADD_GROUP_PARTICIPANTS_AS_OPEN_TAB:case l.ADD_GROUP_PARTICIPANTS_AS_REPLACE_TAB:b=b.tabID;var c=a.mercury.tabContents.get(b);if(!c)return a;c=c.merge({typeahead:null});a=a.setIn(["mercury","tabContents",b],c)}return a}function f(a,c){switch(c.type){case l.ADD_GROUP_PARTICIPANTS:var d=c.threadID,e=a.mercury.tabContents.get(d),f=e,j=f.thread;f=f.typeahead;if(!f||!j)return a;f=f.getSelectedParticipantIDs();var k=b("MessengerAdminGroupUtils").shouldInvite(j);k?f.forEach(function(a){a=b("MercuryIDs").getThreadIDFromParticipantID(a);a&&h.send(i.constructUserGeneratedMessageObject(j.joinable_mode.link,"source:chat:web",a))}):h.send(i.constructLogMessageObject("source:chat:web",d,"log:subscribe",{added_participants:f}));k=j.admins[b("CurrentUser").getID()]!==void 0;if(j.approval_mode===1&&!k){d=g._("New members need to be approved by an admin. This request was added to the approval queue.");f=g._("Approval pending");b("SimpleXUIDialog").show(d,f)}k=c.threadID;e=e.merge({typeahead:null});a=a.setIn(["mercury","tabContents",k],e)}return a}function o(a){a=a&&a.entryPoint;Array.isArray(a)&&(a=a[0]);switch(a){case"compose_link":a="chat_sidebar_new_message";break;case"jewel_new_message":a="jewel_new_message";break;case"created_locally_from_tokens":a="one_to_one_plus";break}return a}function p(a,c){if(!c)return[];a=b("getPageIDFromThreadID")(a);var d=[];a!==null&&Object.values(b("MessengerDiscoveryEntryPoint")).indexOf(c)!==-1&&d.push(b("MessengerDiscoveryEntryPointsLoggingHelper").getEntryPointsLoggingTagStr([c]));d.push("web:trigger:"+c);return d}function q(a,c,d){var e=b("MessengerState.bs").isEmptyLocalThread(b("CurrentUser").getID(),a);if(e&&c&&c.size>1){var f=b("MercuryIDs").tokenize(a).value;b("Bootloader").loadModules(["MessengerWebChatEventsTypedLogger","MessengerWebChatEventType"],function(a,b){new a().setEvent(b.CLICK_NEW_MESSAGE).setOfflineThreadingID(f).setEntryPoint(d).log()},"FantaReducersSendMessages")}}function r(a,c,d,e){var f=a.mercury.tabContents.get(c);if(!f)return a;if(c!==d){var g=a.tabGroup.tabs.get(c);a=a.deleteIn(["tabGroup","tabs",c]);a=a.deleteIn(["mercury","tabContents",c]);a=a.setIn(["tabGroup","tabs",d],g.merge({id:d}));a=a.setIn(["mercury","tabContents",d],new(b("FantaTypeTabContents"))({composer:e?new(b("FantaTypeComposer"))():f.composer,id:d}))}else a=a.setIn(["mercury","tabContents",d],f.merge({composer:e?new(b("FantaTypeComposer"))():f.composer,isNewMessageTab:!1,openSheet:null}));a.getIn(["mercury","tabContents",d,"composer","text"])||(a=a.setIn(["mercury","tabContents",d,"composer","replyingToMessage"],null));return a}function s(a,c){var d=a.mercury.tabContents.get(c);if(!d)return a;a=a.setIn(["mercury","tabContents",c],d.merge({composer:new(b("FantaTypeComposer"))(),isNewMessageTab:!1,openSheet:null}));return a}function t(a,c,d){d!=null&&d!==""&&(C(c,d),b("Bootloader").loadModules(["WorkChatActivityTypedLogger","WorkChatActivityEvent"],function(a,b){new a().setEvent(b.NAMED_GROUP_CHAT_CREATION_FROM_CHAT_TAB).log()},"FantaReducersSendMessages"));a=a.setIn(["mercury","tabContents",c],a.mercury.tabContents.get(c).merge({newGroupChatName:null}));return a}function u(a,c,d,e,f,g,k){var l=i.constructHotLikeObject(a,"source:chat:web",c,p(c,d),e);h.send(function(){b("EmojiLikeUtils").setEmojiSize(l,f||"");return b("EmojiLikeUtils").setEmojiSource(l,g||"")}());k&&k(l);j.markRead(c);j.markSeen(c)}function v(a,c){switch(c.type){case l.SEND_HOT_LIKE:var d=c.emoji,e=c.onSendSuccess,f=c.size,g=c.source;c=c.threadID;var h=a.mercury.tabContents.get(c);if(!h)return a;var i=o(a.tabGroup.tabs.get(c)),j=h.signatureID,k=h.threadPreviewID,m=h.threadPreviewRecipients;h=h.newGroupChatName;k=k||c;var n=b("MessengerEmojiUsageUtils").findAllEmojis(d);n.length>0&&b("EmojiState").updateRecentlyUsed(n);u(d,c,i,j,f,g,e);a=r(a,c,k);a=t(a,k,h);q(k,m,i)}return a}function w(a,b){switch(b.type){case l.SEND_STICKER:var c=b.threadID,d=a.tabGroup.tabs.get(c),e=b.onSendSuccess;b=b.stickerID;var f=a.mercury.tabContents.get(c);if(!f)return a;var g=f.signatureID,h=f.threadPreviewID,i=f.threadPreviewRecipients;f=f.newGroupChatName;h=h||c;x(h,b,i,g,o(d),e);a=r(a,c,h);a=t(a,h,f);q(h,i,o(d))}return a}function x(a,b,c,d,e,f){b=i.constructStickerMessageObject(b,"source:chat:web",a,p(a,e),d);D(b,a,c);f&&f(b);j.markRead(a);j.markSeen(a)}function y(a,b){switch(b.type){case l.SEND_PHOTO:case l.SEND_GIF:var c=b.threadID,d=b.onSendSuccess,e=b.photoData;b=b.clearComposerOnSend;var f=a.mercury.tabContents.get(c);if(!f)return a;var g=f.composer,h=f.signatureID,i=f.threadPreviewID,j=f.threadPreviewRecipients;f=f.newGroupChatName;g=g.replyingToMessage;g=g;i=i||c;var k=a.tabGroup.tabs.get(c);z(i,e,j,h,o(k),g,d);a=r(a,c,i,b);a=t(a,i,f);q(i,j,o(k))}return a}function z(a,b,c,d,e,f,g){c=i.constructPhotoMessageObject(f,"source:chat:web",a,p(a,e),d);h.addAttachmentPlaceholder(c,b.upload_id,b);g&&g(c);j.markRead(a);j.markSeen(a)}function A(a,b,c,d,e,f,g,h,k,l,m){e=i.constructTextMessageObject(b,c,l,g,d,"source:chat:web",a,p(a,k),h);D(e,a,f);m&&m(e);j.markRead(a);j.markSeen(a)}function B(a,c){switch(c.type){case l.SEND_MESSAGE:var d=c.message,e=c.threadID,f=d?d.mentions:null;d=d.message;var g=a.tabGroup.tabs.get(e),h=c.onSendSuccess;c=c.composer;var i=a.mercury.tabContents.get(e);if(!i)return a;var j=i.composer,k=i.signatureID,n=i.threadPreviewID,p=i.threadPreviewRecipients;i=i.newGroupChatName;var u=j.fileUploader,v=j.sharePreview,w=j.replyingToMessage;w=w;if(c&&j&&c.version!==j.version)return a;c=n||e;j=!!(v.params&&v.type);if(!m.test(d)||u.uploadedFiles.size>0||j){j=b("MessengerEmojiUsageUtils").findAllEmojis(d);j.length>0&&b("EmojiState").updateRecentlyUsed(j);j=u.getTypeIDs(b("FantaTypeFileUploader").fileTypes.GENERIC_ATTACHMENT);A(c,d,j,v,u,p,f,k,o(g),w,h);d=n&&u.get("uploadedFiles").size>0;d?a=s(a,e):a=r(a,e,c,!0);a=t(a,c,i);q(c,p,o(g))}}return a}function C(a,c){k.getServerIDFromClientID(a,function(a){var d=b("XMessagingSetThreadNameController").getURIBuilder().getURI();new(b("AsyncRequest"))().setURI(d).setData({thread_id:a,thread_name:c}).send()})}function D(a,c,d){var e=b("CurrentUser").getID();if(b("MessengerState.bs").isEmptyLocalThread(e,c)){d&&j.addParticipants(c,d.toArray());a.offline_threading_id=b("MercuryIDs").tokenize(c).value;d=b("MessengerState.bs").getThreadMetaNow(e,c);d&&(a.specific_to_list=Array.from(d.participants))}h.send(a,function(a){var c=b("MessengerState.bs").getThreadMetaNow(e,a);c&&b("MessageRequestUtils").isMessageRequest(c)&&j.movePendingToInbox(a);c&&c.thread_id&&c.other_user_fbid&&b("getPageIDFromThreadID")(c.thread_id)&&b("ChatTabViewEvents").inform("chat-send-to-page",{pageID:c.other_user_fbid})})}e.exports={addParticipantToLocalGroup:d,sendGroupMessage:f,sendHotLike:v,sendMessageOnly:B,sendPhoto:y,sendSticker:w,setNewGroupNameLocally:c,updateGroupName:a}}),null);
__d("FantaReducersSharePreview",["Bootloader","FantaMessageActions","FantaTypeSharePreview","immutable","ifRequired","setImmediate"],(function(a,b,c,d,e,f){"use strict";var g=b("FantaMessageActions").Types,h="scraperLastPermissiveMatch";function a(a,b){switch(b.type){case g.COMPOSER_TEXT_UPDATE:var c=b.message,d=b.threadID;b=b.composer;var e=a.mercury.tabContents.get(d);if(!e||e&&e.composer.version!==b.version)return a;a=i(a,c,d)}return a}function i(a,c,d){b("ifRequired")("URLMatcher",function(e){b("ifRequired")("DataStore",function(b){if(c.length===0)b.remove(d,h);else{var f=a.mercury.tabContents.get(d);if(!f)return a;if(!e.trigger(c+" ")){f=e.match(c);var g=e.permissiveMatch(c);g&&g!==b.get(d,h)&&(b.set(d,h,g),a=a.mergeIn(["mercury","tabContents",d,"composer","sharePreview"],{params:null,type:null,uri:f||g}))}}})},function(){b("Bootloader").loadModules(["URLMatcher","DataStore"],function(e,f){if(c.length>0){e=a.mercury.tabContents.get(d);var g=e&&e.composer;b("setImmediate")(function(){b("FantaMessageActions").composerTextUpdate(d,c,g)})}},"FantaReducersSharePreview")});return a}function c(a,b){switch(b.type){case g.LINK_PREVIEW:var c=b.uri;b=b.tabID;if(!a.mercury.tabContents.get(b))return a;a=a.mergeIn(["mercury","tabContents",b,"composer","sharePreview"],{params:null,type:null,uri:c})}return a}function d(a,c){switch(c.type){case g.LOADED_SHARE_DATA:var d=c.attachmentData,e=c.composer;c=c.tabID;d=d.share_data;var f=a.mercury.tabContents.get(c);if(!f||f.composer.version!==e.version)return a;a=a.mergeIn(["mercury","tabContents",c,"composer","sharePreview"],{isLoading:!1,params:b("immutable").Map({data:d.share_params}),type:d.share_type})}return a}function f(a,b){switch(b.type){case g.LOADING_SHARE_DATA:var c=b.composer;b=b.tabID;var d=a.mercury.tabContents.get(b);if(!d||d.composer.version!==c.version)return a;a=a.mergeIn(["mercury","tabContents",b,"composer","sharePreview"],{isLoading:!0,params:null,type:null})}return a}function j(a,b){switch(b.type){case g.REMOVE_SHARE_PREVIEW:b=b.tabID;a=k(a,b)}return a}function k(a,c){return!a.mercury.tabContents.get(c)?a:a.setIn(["mercury","tabContents",c,"composer","sharePreview"],new(b("FantaTypeSharePreview"))())}e.exports={closeTab:j,composerTextUpdate:a,linkPreview:c,loadedShareData:d,loadingShareData:f}}),null);