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
        var map = component.get('v.map');
        var accounts = event.getParam('accounts');
        for(var i=0; i < accounts.kength; i++){
            var account = accounts[i];
            var latLng = [account.Location__Latitude__s, account.Location_Longitude__s];
            L.marker(latLng, {account:account}).addTo(map);
        }
    }
})
