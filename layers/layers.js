var wms_layers = [];


        var lyr_GoogleSatellite_0 = new ol.layer.Tile({
            'title': 'Google Satellite',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' &middot; <a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });
var lyr_FalseColorCompositeImageApr122016_1 = new ol.layer.Image({
                            opacity: 1,
                            title: "False Color Composite Image Apr 12, 2016",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/FalseColorCompositeImageApr122016_1.png",
    attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [8767194.064332, 3433398.849667, 8792453.646799, 3458889.150778]
                            })
                        });
var lyr_Topographicfeatures_2 = new ol.layer.Image({
                            opacity: 1,
                            title: "Topographic features",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/Topographicfeatures_2.png",
    attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [8771338.915983, 3439512.083378, 8785769.735746, 3450481.060773]
                            })
                        });
var lyr_Jim_CorbettUK_Fires_2016_April_3 = new ol.layer.Image({
                            opacity: 1,
                            title: "Jim_Corbett,UK_Fires_2016_April",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/Jim_CorbettUK_Fires_2016_April_3.png",
    attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [8575146.535407, 3401461.980827, 8851697.458780, 3683732.823963]
                            })
                        });
var format_ForestRoads_4 = new ol.format.GeoJSON();
var features_ForestRoads_4 = format_ForestRoads_4.readFeatures(json_ForestRoads_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ForestRoads_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ForestRoads_4.addFeatures(features_ForestRoads_4);
var lyr_ForestRoads_4 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_ForestRoads_4, 
                style: style_ForestRoads_4,
                interactive: false,
                title: '<img src="styles/legend/ForestRoads_4.png" /> Forest Roads'
            });

lyr_GoogleSatellite_0.setVisible(true);lyr_FalseColorCompositeImageApr122016_1.setVisible(true);lyr_Topographicfeatures_2.setVisible(true);lyr_Jim_CorbettUK_Fires_2016_April_3.setVisible(true);lyr_ForestRoads_4.setVisible(true);
var layersList = [lyr_GoogleSatellite_0,lyr_FalseColorCompositeImageApr122016_1,lyr_Topographicfeatures_2,lyr_Jim_CorbettUK_Fires_2016_April_3,lyr_ForestRoads_4];
lyr_ForestRoads_4.set('fieldAliases', {'id': 'id', });
lyr_ForestRoads_4.set('fieldImages', {'id': 'TextEdit', });
lyr_ForestRoads_4.set('fieldLabels', {'id': 'no label', });
lyr_ForestRoads_4.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});