ol.proj.proj4.register(proj4);
//ol.proj.get("EPSG:3857").setExtent([3103357.527481, -2995834.031261, 3129854.422034, -2983945.032866]);
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
var format_DaveytonSPpilotareas_2 = new ol.format.GeoJSON();
var features_DaveytonSPpilotareas_2 = format_DaveytonSPpilotareas_2.readFeatures(json_DaveytonSPpilotareas_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_DaveytonSPpilotareas_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_DaveytonSPpilotareas_2.addFeatures(features_DaveytonSPpilotareas_2);
var lyr_DaveytonSPpilotareas_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_DaveytonSPpilotareas_2, 
                style: style_DaveytonSPpilotareas_2,
                popuplayertitle: "Daveyton SP pilot areas",
                interactive: true,
                    title: '<img src="styles/legend/DaveytonSPpilotareas_2.png" /> Daveyton SP pilot areas'
                });
var format_Diepslootpilotareas_3 = new ol.format.GeoJSON();
var features_Diepslootpilotareas_3 = format_Diepslootpilotareas_3.readFeatures(json_Diepslootpilotareas_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Diepslootpilotareas_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Diepslootpilotareas_3.addFeatures(features_Diepslootpilotareas_3);
var lyr_Diepslootpilotareas_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Diepslootpilotareas_3, 
                style: style_Diepslootpilotareas_3,
                popuplayertitle: "Diepsloot pilot areas",
                interactive: true,
                    title: '<img src="styles/legend/Diepslootpilotareas_3.png" /> Diepsloot pilot areas'
                });

lyr_GOogelsatalitehybrid_0.setVisible(true);lyr_Googlemaps_1.setVisible(false);lyr_DaveytonSPpilotareas_2.setVisible(true);lyr_Diepslootpilotareas_3.setVisible(true);
var layersList = [lyr_GOogelsatalitehybrid_0,lyr_Googlemaps_1,lyr_DaveytonSPpilotareas_2,lyr_Diepslootpilotareas_3];
lyr_DaveytonSPpilotareas_2.set('fieldAliases', {'SAL_CODE': 'SAL_CODE', 'SAL_CODE_s': 'SAL_CODE_s', 'SP_CODE': 'SP_CODE', 'SP_CODE_st': 'SP_CODE_st', 'SP_NAME': 'SP_NAME', 'MP_CODE': 'MP_CODE', 'MP_CODE_st': 'MP_CODE_st', 'MP_NAME': 'MP_NAME', 'MN_MDB_C': 'MN_MDB_C', 'MN_CODE': 'MN_CODE', 'MN_CODE_st': 'MN_CODE_st', 'MN_NAME': 'MN_NAME', 'DC_MDB_C': 'DC_MDB_C', 'DC_MN_C': 'DC_MN_C', 'DC_MN_C_st': 'DC_MN_C_st', 'DC_NAME': 'DC_NAME', 'PR_MDB_C': 'PR_MDB_C', 'PR_CODE': 'PR_CODE', 'PR_CODE_st': 'PR_CODE_st', 'PR_NAME': 'PR_NAME', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', 'SAL shapef': 'SAL shapef', });
lyr_Diepslootpilotareas_3.set('fieldAliases', {'SAL_CODE': 'SAL_CODE', 'SAL_CODE_s': 'SAL_CODE_s', 'SP_CODE': 'SP_CODE', 'SP_CODE_st': 'SP_CODE_st', 'SP_NAME': 'SP_NAME', 'MP_CODE': 'MP_CODE', 'MP_CODE_st': 'MP_CODE_st', 'MP_NAME': 'MP_NAME', 'MN_MDB_C': 'MN_MDB_C', 'MN_CODE': 'MN_CODE', 'MN_CODE_st': 'MN_CODE_st', 'MN_NAME': 'MN_NAME', 'DC_MDB_C': 'DC_MDB_C', 'DC_MN_C': 'DC_MN_C', 'DC_MN_C_st': 'DC_MN_C_st', 'DC_NAME': 'DC_NAME', 'PR_MDB_C': 'PR_MDB_C', 'PR_CODE': 'PR_CODE', 'PR_CODE_st': 'PR_CODE_st', 'PR_NAME': 'PR_NAME', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', 'SAL shapef': 'SAL shapef', });
lyr_DaveytonSPpilotareas_2.set('fieldImages', {'SAL_CODE': 'TextEdit', 'SAL_CODE_s': 'TextEdit', 'SP_CODE': 'TextEdit', 'SP_CODE_st': 'TextEdit', 'SP_NAME': 'TextEdit', 'MP_CODE': 'TextEdit', 'MP_CODE_st': 'TextEdit', 'MP_NAME': 'TextEdit', 'MN_MDB_C': 'TextEdit', 'MN_CODE': 'TextEdit', 'MN_CODE_st': 'TextEdit', 'MN_NAME': 'TextEdit', 'DC_MDB_C': 'TextEdit', 'DC_MN_C': 'TextEdit', 'DC_MN_C_st': 'TextEdit', 'DC_NAME': 'TextEdit', 'PR_MDB_C': 'TextEdit', 'PR_CODE': 'TextEdit', 'PR_CODE_st': 'TextEdit', 'PR_NAME': 'TextEdit', 'Shape_Leng': 'TextEdit', 'Shape_Area': 'TextEdit', 'SAL shapef': 'TextEdit', });
lyr_Diepslootpilotareas_3.set('fieldImages', {'SAL_CODE': 'TextEdit', 'SAL_CODE_s': 'TextEdit', 'SP_CODE': 'TextEdit', 'SP_CODE_st': 'TextEdit', 'SP_NAME': 'TextEdit', 'MP_CODE': 'TextEdit', 'MP_CODE_st': 'TextEdit', 'MP_NAME': 'TextEdit', 'MN_MDB_C': 'TextEdit', 'MN_CODE': 'TextEdit', 'MN_CODE_st': 'TextEdit', 'MN_NAME': 'TextEdit', 'DC_MDB_C': 'TextEdit', 'DC_MN_C': 'TextEdit', 'DC_MN_C_st': 'TextEdit', 'DC_NAME': 'TextEdit', 'PR_MDB_C': 'TextEdit', 'PR_CODE': 'TextEdit', 'PR_CODE_st': 'TextEdit', 'PR_NAME': 'TextEdit', 'Shape_Leng': 'TextEdit', 'Shape_Area': 'TextEdit', 'SAL shapef': 'TextEdit', });
lyr_DaveytonSPpilotareas_2.set('fieldLabels', {'SAL_CODE': 'no label', 'SAL_CODE_s': 'no label', 'SP_CODE': 'no label', 'SP_CODE_st': 'no label', 'SP_NAME': 'no label', 'MP_CODE': 'no label', 'MP_CODE_st': 'no label', 'MP_NAME': 'no label', 'MN_MDB_C': 'no label', 'MN_CODE': 'no label', 'MN_CODE_st': 'no label', 'MN_NAME': 'no label', 'DC_MDB_C': 'no label', 'DC_MN_C': 'no label', 'DC_MN_C_st': 'no label', 'DC_NAME': 'no label', 'PR_MDB_C': 'no label', 'PR_CODE': 'no label', 'PR_CODE_st': 'no label', 'PR_NAME': 'no label', 'Shape_Leng': 'no label', 'Shape_Area': 'no label', 'SAL shapef': 'no label', });
lyr_Diepslootpilotareas_3.set('fieldLabels', {'SAL_CODE': 'no label', 'SAL_CODE_s': 'no label', 'SP_CODE': 'no label', 'SP_CODE_st': 'no label', 'SP_NAME': 'no label', 'MP_CODE': 'no label', 'MP_CODE_st': 'no label', 'MP_NAME': 'no label', 'MN_MDB_C': 'no label', 'MN_CODE': 'no label', 'MN_CODE_st': 'no label', 'MN_NAME': 'no label', 'DC_MDB_C': 'no label', 'DC_MN_C': 'no label', 'DC_MN_C_st': 'no label', 'DC_NAME': 'no label', 'PR_MDB_C': 'no label', 'PR_CODE': 'no label', 'PR_CODE_st': 'no label', 'PR_NAME': 'no label', 'Shape_Leng': 'no label', 'Shape_Area': 'no label', 'SAL shapef': 'no label', });
lyr_Diepslootpilotareas_3.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});