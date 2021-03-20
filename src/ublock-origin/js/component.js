chrome.runtime.onMessageExternal.addListener(function(request, sender, sendResponse) {
    if(request.what === "count"){
        //alert("I got a count request");
        let µb = µBlock;
        let tabIds = request.tabIds
        let res = [];
        tabIds.forEach(tabId =>{
            let pageStore = µb.pageStoreFromTabId(tabId);
            let blockCount = pageStore.perLoadBlockedRequestCount;
            let allowedCount = pageStore.perLoadAllowedRequestCount;
            let tabData = {tabId : tabId, blockCount, allowedCount};
            res.push(tabData)
        });
        sendResponse({response:res});
    }
});

let privacyFiltersObj = {
    "adguard-generic": true, 
    "ublock-filters": true, 
    "ublock-privacy": true, 
    "adguard-spyware": true, 
    "easyprivacy": true,
    "ublock-unbreak": true
};
let securityFiltersObj = {
    "ublock-badware": true,
    "disconnect-malvertising": true,
    "malware-0": true,
    "malware-1":  true,
    "spam404-0": true,
    "ublock-abuse": true
};
let cosmeticFiltersObj = {
    "block-the-eu-cookie-shit-list": true,
    "ADBlock": true
};

let filterArray = [privacyFiltersObj, securityFiltersObj, cosmeticFiltersObj];

chrome.runtime.onMessageExternal.addListener(function(request, sender, sendResponse) {
    if(request.what === "toggle"){
        switch(request.type){
            case("privacy"): {
                let value = request.toggle_value;
                for(let filter in privacyFiltersObj){
                    privacyFiltersObj[filter] = value;
                }
                break;
            }
            case("security"): {
                let value = request.toggle_value;
                for(let filter in securityFiltersObj){
                    securityFiltersObj[filter] = value;
                }
                break;
            }
            case("cosmetic"): {
                let value = request.toggle_value;
                for(let filter in cosmeticFiltersObj){
                    cosmeticFiltersObj[filter] = value;
                }
                break;
            }
            default: {
                break;
            }
        }
        let µb = µBlock;
        let filterList = [
            "user-filters"
        ];
        for(let i = 0; i<3; i++){
            let currentFilterObj = filterArray[i];
            for(let key in currentFilterObj){
                if(currentFilterObj[key]){
                    filterList.push(key);
                }
            }
        }
        let details = {
            toSelect : filterList
        }
        //console.log(details);  
        µb.applyFilterListSelection(details);
        µb.loadFilterLists();
    }
});