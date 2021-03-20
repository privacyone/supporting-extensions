chrome.runtime.onMessageExternal.addListener(function(request, sender, sendResponse){
  if(request.what != "badger_blocked_count") { return; }
  let res = badger.tabData;
  sendResponse(res);
})