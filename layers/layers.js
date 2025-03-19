ol.proj.proj4.register(proj4);
//ol.proj.get("EPSG:3857").setExtent([3115716.728179, -2992199.070730, 3119847.551277, -2990345.595068]);
var wms_layers = [];


        var lyr_GOogelsatalitehybrid_0 = new ol.layer.Tile({
            'title': 'GOogel satalite hybrid',
            //'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=y&x={x}&y={y}&z={z}'
            })
        });

        var lyr_Googlemaps_1 = new ol.layer.Tile({
            'title': 'Google maps',
            //'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=r&x={x}&y={y}&z={z}'
            })
        });
var format_DiepslootclusterGPilotareas_2 = new ol.format.GeoJSON();
var features_DiepslootclusterGPilotareas_2 = format_DiepslootclusterGPilotareas_2.readFeatures(json_DiepslootclusterGPilotareas_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_DiepslootclusterGPilotareas_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_DiepslootclusterGPilotareas_2.addFeatures(features_DiepslootclusterGPilotareas_2);
var lyr_DiepslootclusterGPilotareas_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_DiepslootclusterGPilotareas_2, 
                style: style_DiepslootclusterGPilotareas_2,
                popuplayertitle: "Diepsloot cluster G Pilot areas",
                interactive: true,
                    title: '<img src="styles/legend/DiepslootclusterGPilotareas_2.png" /> Diepsloot cluster G Pilot areas'
                });
var format_SP_NAMEGT_3 = new ol.format.GeoJSON();
var features_SP_NAMEGT_3 = format_SP_NAMEGT_3.readFeatures(json_SP_NAMEGT_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SP_NAMEGT_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SP_NAMEGT_3.addFeatures(features_SP_NAMEGT_3);
var lyr_SP_NAMEGT_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_SP_NAMEGT_3, 
                style: style_SP_NAMEGT_3,
                popuplayertitle: "SP_NAME GT",
                interactive: true,
                    title: '<img src="styles/legend/SP_NAMEGT_3.png" /> SP_NAME GT'
                });

lyr_GOogelsatalitehybrid_0.setVisible(false);lyr_Googlemaps_1.setVisible(true);lyr_DiepslootclusterGPilotareas_2.setVisible(true);lyr_SP_NAMEGT_3.setVisible(true);
var layersList = [lyr_GOogelsatalitehybrid_0,lyr_Googlemaps_1,lyr_DiepslootclusterGPilotareas_2,lyr_SP_NAMEGT_3];
lyr_DiepslootclusterGPilotareas_2.set('fieldAliases', {'SAL_CODE': 'SAL_CODE', 'SAL_CODE_s': 'SAL_CODE_s', 'SP_CODE': 'SP_CODE', 'SP_CODE_st': 'SP_CODE_st', 'SP_NAME': 'SP_NAME', 'MP_CODE': 'MP_CODE', 'MP_CODE_st': 'MP_CODE_st', 'MP_NAME': 'MP_NAME', 'MN_MDB_C': 'MN_MDB_C', 'MN_CODE': 'MN_CODE', 'MN_CODE_st': 'MN_CODE_st', 'MN_NAME': 'MN_NAME', 'DC_MDB_C': 'DC_MDB_C', 'DC_MN_C': 'DC_MN_C', 'DC_MN_C_st': 'DC_MN_C_st', 'DC_NAME': 'DC_NAME', 'PR_MDB_C': 'PR_MDB_C', 'PR_CODE': 'PR_CODE', 'PR_CODE_st': 'PR_CODE_st', 'PR_NAME': 'PR_NAME', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', 'SAL shapef': 'SAL shapef', });
lyr_SP_NAMEGT_3.set('fieldAliases', {'id': 'id', 'SP_NAME': 'SP_NAME', });
lyr_DiepslootclusterGPilotareas_2.set('fieldImages', {'SAL_CODE': 'TextEdit', 'SAL_CODE_s': 'TextEdit', 'SP_CODE': 'TextEdit', 'SP_CODE_st': 'TextEdit', 'SP_NAME': 'TextEdit', 'MP_CODE': 'TextEdit', 'MP_CODE_st': 'TextEdit', 'MP_NAME': 'TextEdit', 'MN_MDB_C': 'TextEdit', 'MN_CODE': 'TextEdit', 'MN_CODE_st': 'TextEdit', 'MN_NAME': 'TextEdit', 'DC_MDB_C': 'TextEdit', 'DC_MN_C': 'TextEdit', 'DC_MN_C_st': 'TextEdit', 'DC_NAME': 'TextEdit', 'PR_MDB_C': 'TextEdit', 'PR_CODE': 'TextEdit', 'PR_CODE_st': 'TextEdit', 'PR_NAME': 'TextEdit', 'Shape_Leng': 'TextEdit', 'Shape_Area': 'TextEdit', 'SAL shapef': 'TextEdit', });
lyr_SP_NAMEGT_3.set('fieldImages', {'id': 'TextEdit', 'SP_NAME': 'TextEdit', });
lyr_DiepslootclusterGPilotareas_2.set('fieldLabels', {'SAL_CODE': 'no label', 'SAL_CODE_s': 'no label', 'SP_CODE': 'no label', 'SP_CODE_st': 'no label', 'SP_NAME': 'no label', 'MP_CODE': 'no label', 'MP_CODE_st': 'no label', 'MP_NAME': 'no label', 'MN_MDB_C': 'no label', 'MN_CODE': 'no label', 'MN_CODE_st': 'no label', 'MN_NAME': 'no label', 'DC_MDB_C': 'no label', 'DC_MN_C': 'no label', 'DC_MN_C_st': 'no label', 'DC_NAME': 'no label', 'PR_MDB_C': 'no label', 'PR_CODE': 'no label', 'PR_CODE_st': 'no label', 'PR_NAME': 'no label', 'Shape_Leng': 'no label', 'Shape_Area': 'no label', 'SAL shapef': 'no label', });
lyr_SP_NAMEGT_3.set('fieldLabels', {'id': 'no label', 'SP_NAME': 'no label', });
lyr_SP_NAMEGT_3.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});