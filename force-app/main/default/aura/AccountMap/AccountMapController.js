({
    jsLoaded : function(component, event, helper) {
        var map = L.map('map', {zoomControl:false}).setView([37.784173, -122.401557], 14);
        L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/World_Street_Map/MapServer/tile/{z}/{y}/{x}',
            {
                attribution: 'Tiles @ Esri'
            }).addTo(map);
            component.set("v.map", map);
    },
    accountsLoaded: function(component, event, helper) {
        // Add Markers
        console.log("IN ADD MARKERS");
        var map = component.get('v.map');
        var accounts = event.getParam('accounts');
        for(var i=0; i < accounts.length; i++){
            console.log("IN MARKERS LOOP");
            var account = accounts[i];
            console.log("Account LAT: " + [account.Location__Latitude__s]);
            console.log("Account LONG: " + [account.Location__Longitude__s]);
            var latLng = [account.Location__Latitude__s, account.Location__Longitude__s];
            L.marker(latLng, {account:account}).addTo(map);
        }
    }
})
