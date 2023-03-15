var wms_layers = [];

var format_Accesibilidadporcomuna_0 = new ol.format.GeoJSON();
var features_Accesibilidadporcomuna_0 = format_Accesibilidadporcomuna_0.readFeatures(json_Accesibilidadporcomuna_0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Accesibilidadporcomuna_0 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Accesibilidadporcomuna_0.addFeatures(features_Accesibilidadporcomuna_0);
var lyr_Accesibilidadporcomuna_0 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Accesibilidadporcomuna_0, 
                style: style_Accesibilidadporcomuna_0,
                interactive: true,
    title: 'Accesibilidad por comuna<br />\
    <img src="styles/legend/Accesibilidadporcomuna_0_0.png" /> Menor a 250<br />\
    <img src="styles/legend/Accesibilidadporcomuna_0_1.png" /> 250 - 500<br />\
    <img src="styles/legend/Accesibilidadporcomuna_0_2.png" /> 500 - 1000<br />\
    <img src="styles/legend/Accesibilidadporcomuna_0_3.png" /> 1000 - 1500<br />\
    <img src="styles/legend/Accesibilidadporcomuna_0_4.png" /> Mayor a 1500<br />'
        });
var format_Accesibilidadporbarrio_1 = new ol.format.GeoJSON();
var features_Accesibilidadporbarrio_1 = format_Accesibilidadporbarrio_1.readFeatures(json_Accesibilidadporbarrio_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Accesibilidadporbarrio_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Accesibilidadporbarrio_1.addFeatures(features_Accesibilidadporbarrio_1);
var lyr_Accesibilidadporbarrio_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Accesibilidadporbarrio_1, 
                style: style_Accesibilidadporbarrio_1,
                interactive: true,
    title: 'Accesibilidad por barrio<br />\
    <img src="styles/legend/Accesibilidadporbarrio_1_0.png" /> Menor a 250<br />\
    <img src="styles/legend/Accesibilidadporbarrio_1_1.png" /> 250 - 500<br />\
    <img src="styles/legend/Accesibilidadporbarrio_1_2.png" /> 500 - 1000<br />\
    <img src="styles/legend/Accesibilidadporbarrio_1_3.png" /> 1000 - 1500<br />\
    <img src="styles/legend/Accesibilidadporbarrio_1_4.png" /> Mayor a 1500<br />'
        });
var format_Accesibilidadpormanzana_2 = new ol.format.GeoJSON();
var features_Accesibilidadpormanzana_2 = format_Accesibilidadpormanzana_2.readFeatures(json_Accesibilidadpormanzana_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Accesibilidadpormanzana_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Accesibilidadpormanzana_2.addFeatures(features_Accesibilidadpormanzana_2);
var lyr_Accesibilidadpormanzana_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Accesibilidadpormanzana_2, 
                style: style_Accesibilidadpormanzana_2,
                interactive: true,
    title: 'Accesibilidad por manzana<br />\
    <img src="styles/legend/Accesibilidadpormanzana_2_0.png" /> Menor a 250<br />\
    <img src="styles/legend/Accesibilidadpormanzana_2_1.png" /> 250 - 500<br />\
    <img src="styles/legend/Accesibilidadpormanzana_2_2.png" /> 500 - 1000<br />\
    <img src="styles/legend/Accesibilidadpormanzana_2_3.png" /> 1000 - 1500<br />\
    <img src="styles/legend/Accesibilidadpormanzana_2_4.png" /> Mayor a 1500<br />'
        });
var format_Clubes_3 = new ol.format.GeoJSON();
var features_Clubes_3 = format_Clubes_3.readFeatures(json_Clubes_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Clubes_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Clubes_3.addFeatures(features_Clubes_3);
var lyr_Clubes_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Clubes_3, 
                style: style_Clubes_3,
                interactive: true,
                title: '<img src="styles/legend/Clubes_3.png" /> Clubes'
            });
var format_Accesibilidadporcomuna_4 = new ol.format.GeoJSON();
var features_Accesibilidadporcomuna_4 = format_Accesibilidadporcomuna_4.readFeatures(json_Accesibilidadporcomuna_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Accesibilidadporcomuna_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Accesibilidadporcomuna_4.addFeatures(features_Accesibilidadporcomuna_4);
var lyr_Accesibilidadporcomuna_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Accesibilidadporcomuna_4, 
                style: style_Accesibilidadporcomuna_4,
                interactive: true,
    title: 'Accesibilidad por comuna<br />\
    <img src="styles/legend/Accesibilidadporcomuna_4_0.png" /> Menor a 250<br />\
    <img src="styles/legend/Accesibilidadporcomuna_4_1.png" /> 250 - 500<br />\
    <img src="styles/legend/Accesibilidadporcomuna_4_2.png" /> 500 - 1000<br />\
    <img src="styles/legend/Accesibilidadporcomuna_4_3.png" /> 1000 - 1500<br />\
    <img src="styles/legend/Accesibilidadporcomuna_4_4.png" /> Mayor a 1500<br />'
        });
var format_Accesibilidadporbarrio_5 = new ol.format.GeoJSON();
var features_Accesibilidadporbarrio_5 = format_Accesibilidadporbarrio_5.readFeatures(json_Accesibilidadporbarrio_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Accesibilidadporbarrio_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Accesibilidadporbarrio_5.addFeatures(features_Accesibilidadporbarrio_5);
var lyr_Accesibilidadporbarrio_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Accesibilidadporbarrio_5, 
                style: style_Accesibilidadporbarrio_5,
                interactive: true,
    title: 'Accesibilidad por barrio<br />\
    <img src="styles/legend/Accesibilidadporbarrio_5_0.png" /> Menor a 250<br />\
    <img src="styles/legend/Accesibilidadporbarrio_5_1.png" /> 250 - 500<br />\
    <img src="styles/legend/Accesibilidadporbarrio_5_2.png" /> 500 - 1000<br />\
    <img src="styles/legend/Accesibilidadporbarrio_5_3.png" /> 1000 - 1500<br />\
    <img src="styles/legend/Accesibilidadporbarrio_5_4.png" /> Mayor a 1500<br />'
        });
var format_Accesibilidadpormanzana_6 = new ol.format.GeoJSON();
var features_Accesibilidadpormanzana_6 = format_Accesibilidadpormanzana_6.readFeatures(json_Accesibilidadpormanzana_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Accesibilidadpormanzana_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Accesibilidadpormanzana_6.addFeatures(features_Accesibilidadpormanzana_6);
var lyr_Accesibilidadpormanzana_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Accesibilidadpormanzana_6, 
                style: style_Accesibilidadpormanzana_6,
                interactive: true,
    title: 'Accesibilidad por manzana<br />\
    <img src="styles/legend/Accesibilidadpormanzana_6_0.png" /> Menor a 250<br />\
    <img src="styles/legend/Accesibilidadpormanzana_6_1.png" /> 250 - 500<br />\
    <img src="styles/legend/Accesibilidadpormanzana_6_2.png" /> 500 - 1000<br />\
    <img src="styles/legend/Accesibilidadpormanzana_6_3.png" /> 1000 - 1500<br />\
    <img src="styles/legend/Accesibilidadpormanzana_6_4.png" /> Mayor a 1500<br />'
        });
var format_Localesgastronmicos_7 = new ol.format.GeoJSON();
var features_Localesgastronmicos_7 = format_Localesgastronmicos_7.readFeatures(json_Localesgastronmicos_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Localesgastronmicos_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Localesgastronmicos_7.addFeatures(features_Localesgastronmicos_7);
var lyr_Localesgastronmicos_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Localesgastronmicos_7, 
                style: style_Localesgastronmicos_7,
                interactive: true,
                title: '<img src="styles/legend/Localesgastronmicos_7.png" /> Locales gastronómicos'
            });
var format_Accesibilidadporcomuna_8 = new ol.format.GeoJSON();
var features_Accesibilidadporcomuna_8 = format_Accesibilidadporcomuna_8.readFeatures(json_Accesibilidadporcomuna_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Accesibilidadporcomuna_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Accesibilidadporcomuna_8.addFeatures(features_Accesibilidadporcomuna_8);
var lyr_Accesibilidadporcomuna_8 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Accesibilidadporcomuna_8, 
                style: style_Accesibilidadporcomuna_8,
                interactive: true,
    title: 'Accesibilidad por comuna<br />\
    <img src="styles/legend/Accesibilidadporcomuna_8_0.png" /> Menor a 250<br />\
    <img src="styles/legend/Accesibilidadporcomuna_8_1.png" /> 250 - 500<br />\
    <img src="styles/legend/Accesibilidadporcomuna_8_2.png" /> 500 - 1000<br />\
    <img src="styles/legend/Accesibilidadporcomuna_8_3.png" /> 1000 - 1500<br />\
    <img src="styles/legend/Accesibilidadporcomuna_8_4.png" /> Mayor a 1500<br />'
        });
var format_Accesibilidadporbarrio_9 = new ol.format.GeoJSON();
var features_Accesibilidadporbarrio_9 = format_Accesibilidadporbarrio_9.readFeatures(json_Accesibilidadporbarrio_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Accesibilidadporbarrio_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Accesibilidadporbarrio_9.addFeatures(features_Accesibilidadporbarrio_9);
var lyr_Accesibilidadporbarrio_9 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Accesibilidadporbarrio_9, 
                style: style_Accesibilidadporbarrio_9,
                interactive: true,
    title: 'Accesibilidad por barrio<br />\
    <img src="styles/legend/Accesibilidadporbarrio_9_0.png" /> Menor a 250<br />\
    <img src="styles/legend/Accesibilidadporbarrio_9_1.png" /> 250 - 500<br />\
    <img src="styles/legend/Accesibilidadporbarrio_9_2.png" /> 500 - 1000<br />\
    <img src="styles/legend/Accesibilidadporbarrio_9_3.png" /> 1000 - 1500<br />\
    <img src="styles/legend/Accesibilidadporbarrio_9_4.png" /> Mayor a 1500<br />'
        });
var format_Accesibilidadpormanzana_10 = new ol.format.GeoJSON();
var features_Accesibilidadpormanzana_10 = format_Accesibilidadpormanzana_10.readFeatures(json_Accesibilidadpormanzana_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Accesibilidadpormanzana_10 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Accesibilidadpormanzana_10.addFeatures(features_Accesibilidadpormanzana_10);
var lyr_Accesibilidadpormanzana_10 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Accesibilidadpormanzana_10, 
                style: style_Accesibilidadpormanzana_10,
                interactive: true,
    title: 'Accesibilidad por manzana<br />\
    <img src="styles/legend/Accesibilidadpormanzana_10_0.png" /> Menor a 250<br />\
    <img src="styles/legend/Accesibilidadpormanzana_10_1.png" /> 250 - 500<br />\
    <img src="styles/legend/Accesibilidadpormanzana_10_2.png" /> 500 - 1000<br />\
    <img src="styles/legend/Accesibilidadpormanzana_10_3.png" /> 1000 - 1500<br />\
    <img src="styles/legend/Accesibilidadpormanzana_10_4.png" /> Mayor a 1500<br />'
        });
var format_Espaciosverdes_11 = new ol.format.GeoJSON();
var features_Espaciosverdes_11 = format_Espaciosverdes_11.readFeatures(json_Espaciosverdes_11, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Espaciosverdes_11 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Espaciosverdes_11.addFeatures(features_Espaciosverdes_11);
var lyr_Espaciosverdes_11 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Espaciosverdes_11, 
                style: style_Espaciosverdes_11,
                interactive: true,
                title: '<img src="styles/legend/Espaciosverdes_11.png" /> Espacios verdes'
            });
var format_Saladeteatro_12 = new ol.format.GeoJSON();
var features_Saladeteatro_12 = format_Saladeteatro_12.readFeatures(json_Saladeteatro_12, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Saladeteatro_12 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Saladeteatro_12.addFeatures(features_Saladeteatro_12);
var lyr_Saladeteatro_12 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Saladeteatro_12, 
                style: style_Saladeteatro_12,
                interactive: true,
                title: '<img src="styles/legend/Saladeteatro_12.png" /> Sala de teatro'
            });
var format_Saladecine_13 = new ol.format.GeoJSON();
var features_Saladecine_13 = format_Saladecine_13.readFeatures(json_Saladecine_13, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Saladecine_13 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Saladecine_13.addFeatures(features_Saladecine_13);
var lyr_Saladecine_13 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Saladecine_13, 
                style: style_Saladecine_13,
                interactive: true,
                title: '<img src="styles/legend/Saladecine_13.png" /> Sala de cine'
            });
var format_Museo_14 = new ol.format.GeoJSON();
var features_Museo_14 = format_Museo_14.readFeatures(json_Museo_14, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Museo_14 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Museo_14.addFeatures(features_Museo_14);
var lyr_Museo_14 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Museo_14, 
                style: style_Museo_14,
                interactive: true,
                title: '<img src="styles/legend/Museo_14.png" /> Museo'
            });
var format_Librera_15 = new ol.format.GeoJSON();
var features_Librera_15 = format_Librera_15.readFeatures(json_Librera_15, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Librera_15 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Librera_15.addFeatures(features_Librera_15);
var lyr_Librera_15 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Librera_15, 
                style: style_Librera_15,
                interactive: true,
                title: '<img src="styles/legend/Librera_15.png" /> Librería'
            });
var format_Galeradearte_16 = new ol.format.GeoJSON();
var features_Galeradearte_16 = format_Galeradearte_16.readFeatures(json_Galeradearte_16, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Galeradearte_16 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Galeradearte_16.addFeatures(features_Galeradearte_16);
var lyr_Galeradearte_16 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Galeradearte_16, 
                style: style_Galeradearte_16,
                interactive: true,
                title: '<img src="styles/legend/Galeradearte_16.png" /> Galería de arte'
            });
var format_Espacioferial_17 = new ol.format.GeoJSON();
var features_Espacioferial_17 = format_Espacioferial_17.readFeatures(json_Espacioferial_17, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Espacioferial_17 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Espacioferial_17.addFeatures(features_Espacioferial_17);
var lyr_Espacioferial_17 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Espacioferial_17, 
                style: style_Espacioferial_17,
                interactive: true,
                title: '<img src="styles/legend/Espacioferial_17.png" /> Espacio ferial'
            });
var format_Espaciodeformacin_18 = new ol.format.GeoJSON();
var features_Espaciodeformacin_18 = format_Espaciodeformacin_18.readFeatures(json_Espaciodeformacin_18, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Espaciodeformacin_18 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Espaciodeformacin_18.addFeatures(features_Espaciodeformacin_18);
var lyr_Espaciodeformacin_18 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Espaciodeformacin_18, 
                style: style_Espaciodeformacin_18,
                interactive: true,
                title: '<img src="styles/legend/Espaciodeformacin_18.png" /> Espacio de formación'
            });
var format_Disquera_19 = new ol.format.GeoJSON();
var features_Disquera_19 = format_Disquera_19.readFeatures(json_Disquera_19, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Disquera_19 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Disquera_19.addFeatures(features_Disquera_19);
var lyr_Disquera_19 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Disquera_19, 
                style: style_Disquera_19,
                interactive: true,
                title: '<img src="styles/legend/Disquera_19.png" /> Disquería'
            });
var format_Clubdemsicaenvivo_20 = new ol.format.GeoJSON();
var features_Clubdemsicaenvivo_20 = format_Clubdemsicaenvivo_20.readFeatures(json_Clubdemsicaenvivo_20, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Clubdemsicaenvivo_20 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Clubdemsicaenvivo_20.addFeatures(features_Clubdemsicaenvivo_20);
var lyr_Clubdemsicaenvivo_20 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Clubdemsicaenvivo_20, 
                style: style_Clubdemsicaenvivo_20,
                interactive: true,
                title: '<img src="styles/legend/Clubdemsicaenvivo_20.png" /> Club de música en vivo'
            });
var format_Centrocultural_21 = new ol.format.GeoJSON();
var features_Centrocultural_21 = format_Centrocultural_21.readFeatures(json_Centrocultural_21, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Centrocultural_21 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Centrocultural_21.addFeatures(features_Centrocultural_21);
var lyr_Centrocultural_21 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Centrocultural_21, 
                style: style_Centrocultural_21,
                interactive: true,
                title: '<img src="styles/legend/Centrocultural_21.png" /> Centro cultural'
            });
var format_Biblioteca_22 = new ol.format.GeoJSON();
var features_Biblioteca_22 = format_Biblioteca_22.readFeatures(json_Biblioteca_22, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Biblioteca_22 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Biblioteca_22.addFeatures(features_Biblioteca_22);
var lyr_Biblioteca_22 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Biblioteca_22, 
                style: style_Biblioteca_22,
                interactive: true,
                title: '<img src="styles/legend/Biblioteca_22.png" /> Biblioteca'
            });
var format_Bar_23 = new ol.format.GeoJSON();
var features_Bar_23 = format_Bar_23.readFeatures(json_Bar_23, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Bar_23 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Bar_23.addFeatures(features_Bar_23);
var lyr_Bar_23 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Bar_23, 
                style: style_Bar_23,
                interactive: true,
                title: '<img src="styles/legend/Bar_23.png" /> Bar'
            });
var format_Anfiteatro_24 = new ol.format.GeoJSON();
var features_Anfiteatro_24 = format_Anfiteatro_24.readFeatures(json_Anfiteatro_24, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Anfiteatro_24 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Anfiteatro_24.addFeatures(features_Anfiteatro_24);
var lyr_Anfiteatro_24 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Anfiteatro_24, 
                style: style_Anfiteatro_24,
                interactive: true,
                title: '<img src="styles/legend/Anfiteatro_24.png" /> Anfiteatro'
            });

        var lyr_Mapabase_25 = new ol.layer.Tile({
            'title': 'Mapa base',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' &middot; <a href="https://cartodb.com/basemaps/">Map tiles by CartoDB, under CC BY 3.0. Data by OpenStreetMap, under ODbL.</a>',
                url: 'http://a.basemaps.cartocdn.com/light_all/{z}/{x}/{y}.png'
            })
        });
var format_AccesibilidadaactividadesprogramadasporelMindeCulturavsaccesibilidadaespaciosculturales_26 = new ol.format.GeoJSON();
var features_AccesibilidadaactividadesprogramadasporelMindeCulturavsaccesibilidadaespaciosculturales_26 = format_AccesibilidadaactividadesprogramadasporelMindeCulturavsaccesibilidadaespaciosculturales_26.readFeatures(json_AccesibilidadaactividadesprogramadasporelMindeCulturavsaccesibilidadaespaciosculturales_26, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_AccesibilidadaactividadesprogramadasporelMindeCulturavsaccesibilidadaespaciosculturales_26 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AccesibilidadaactividadesprogramadasporelMindeCulturavsaccesibilidadaespaciosculturales_26.addFeatures(features_AccesibilidadaactividadesprogramadasporelMindeCulturavsaccesibilidadaespaciosculturales_26);
var lyr_AccesibilidadaactividadesprogramadasporelMindeCulturavsaccesibilidadaespaciosculturales_26 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AccesibilidadaactividadesprogramadasporelMindeCulturavsaccesibilidadaespaciosculturales_26, 
                style: style_AccesibilidadaactividadesprogramadasporelMindeCulturavsaccesibilidadaespaciosculturales_26,
                interactive: true,
    title: 'Accesibilidad a actividades programadas por el Min. de Cultura vs. accesibilidad a espacios culturales<br />\
    <img src="styles/legend/AccesibilidadaactividadesprogramadasporelMindeCulturavsaccesibilidadaespaciosculturales_26_5.png" /> Menos Accesibles<br  />\
    <img src="styles/legend/AccesibilidadaactividadesprogramadasporelMindeCulturavsaccesibilidadaespaciosculturales_26_2.png" /> Igual de Accesibles<br />\
    <img src="styles/legend/AccesibilidadaactividadesprogramadasporelMindeCulturavsaccesibilidadaespaciosculturales_26_0.png" /> Más Accesibles<br /> '
        });
var format_ActividadesprogramadasporelMindeCultura2021_27 = new ol.format.GeoJSON();
var features_ActividadesprogramadasporelMindeCultura2021_27 = format_ActividadesprogramadasporelMindeCultura2021_27.readFeatures(json_ActividadesprogramadasporelMindeCultura2021_27, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ActividadesprogramadasporelMindeCultura2021_27 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ActividadesprogramadasporelMindeCultura2021_27.addFeatures(features_ActividadesprogramadasporelMindeCultura2021_27);
var lyr_ActividadesprogramadasporelMindeCultura2021_27 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ActividadesprogramadasporelMindeCultura2021_27, 
                style: style_ActividadesprogramadasporelMindeCultura2021_27,
                interactive: true,
                title: '<img src="styles/legend/ActividadesprogramadasporelMindeCultura2021_27.png" /> Actividades programadas por el Min. de Cultura (2021)'
            });
var group_Espaciosculturalessegntipo = new ol.layer.Group({
                                layers: [lyr_Saladeteatro_12,lyr_Saladecine_13,lyr_Museo_14,lyr_Librera_15,lyr_Galeradearte_16,lyr_Espacioferial_17,lyr_Espaciodeformacin_18,lyr_Disquera_19,lyr_Clubdemsicaenvivo_20,lyr_Centrocultural_21,lyr_Biblioteca_22,lyr_Bar_23,lyr_Anfiteatro_24,],
                                title: "Espacios culturales según tipo"});
var group_Accesibilidadfsicaaespaciosverdesenmts = new ol.layer.Group({
                                layers: [lyr_Accesibilidadporcomuna_8,lyr_Accesibilidadporbarrio_9,lyr_Accesibilidadpormanzana_10,lyr_Espaciosverdes_11,],
                                title: "Accesibilidad física a espacios verdes (en mts)"});
var group_Accesibilidadfsicaalocalesgastronmicosenmts = new ol.layer.Group({
                                layers: [lyr_Accesibilidadporcomuna_4,lyr_Accesibilidadporbarrio_5,lyr_Accesibilidadpormanzana_6,lyr_Localesgastronmicos_7,],
                                title: "Accesibilidad física a locales gastronómicos (en mts)"});
var group_Accesibilidadfsicaaclubesenmts = new ol.layer.Group({
                                layers: [lyr_Accesibilidadporcomuna_0,lyr_Accesibilidadporbarrio_1,lyr_Accesibilidadpormanzana_2,lyr_Clubes_3,],
                                title: "Accesibilidad física a clubes (en mts)"});

lyr_Accesibilidadporcomuna_0.setVisible(false);lyr_Accesibilidadporbarrio_1.setVisible(false);lyr_Accesibilidadpormanzana_2.setVisible(false);lyr_Clubes_3.setVisible(false);lyr_Accesibilidadporcomuna_4.setVisible(false);lyr_Accesibilidadporbarrio_5.setVisible(false);lyr_Accesibilidadpormanzana_6.setVisible(false);lyr_Localesgastronmicos_7.setVisible(false);lyr_Accesibilidadporcomuna_8.setVisible(false);lyr_Accesibilidadporbarrio_9.setVisible(false);lyr_Accesibilidadpormanzana_10.setVisible(false);lyr_Espaciosverdes_11.setVisible(false);lyr_Saladeteatro_12.setVisible(false);lyr_Saladecine_13.setVisible(false);lyr_Museo_14.setVisible(false);lyr_Librera_15.setVisible(false);lyr_Galeradearte_16.setVisible(false);lyr_Espacioferial_17.setVisible(false);lyr_Espaciodeformacin_18.setVisible(false);lyr_Disquera_19.setVisible(false);lyr_Clubdemsicaenvivo_20.setVisible(false);lyr_Centrocultural_21.setVisible(false);lyr_Biblioteca_22.setVisible(false);lyr_Bar_23.setVisible(false);lyr_Anfiteatro_24.setVisible(false);lyr_Mapabase_25.setVisible(true);lyr_AccesibilidadaactividadesprogramadasporelMindeCulturavsaccesibilidadaespaciosculturales_26.setVisible(true);lyr_ActividadesprogramadasporelMindeCultura2021_27.setVisible(false);
var layersList = [lyr_Mapabase_25,lyr_AccesibilidadaactividadesprogramadasporelMindeCulturavsaccesibilidadaespaciosculturales_26,group_Accesibilidadfsicaaclubesenmts,group_Accesibilidadfsicaalocalesgastronmicosenmts,group_Accesibilidadfsicaaespaciosverdesenmts,group_Espaciosculturalessegntipo,lyr_ActividadesprogramadasporelMindeCultura2021_27];
lyr_Accesibilidadporcomuna_0.set('fieldAliases', {'fid': 'fid', 'COMUNA': 'Comuna', 'distancia_clubes_polideportivos': 'Distancia promedio por comuna (m)', });
lyr_Accesibilidadporbarrio_1.set('fieldAliases', {'fid': 'fid', 'barrio': 'Barrio', 'distancia_clubes_polideportivos': 'Distancia promedio por barrio (m)', });
lyr_Accesibilidadpormanzana_2.set('fieldAliases', {'fid': 'fid', 'manzana': 'Manzana', 'promedio_clubes_polideportivos': 'Distancia promedio de la manzana (m)', });
lyr_Clubes_3.set('fieldAliases', {'fid': 'fid', 'nombre': 'Nombre', });
lyr_Accesibilidadporcomuna_4.set('fieldAliases', {'fid': 'fid', 'COMUNA': 'Comuna', 'distancia_locales_gastronomicos': 'Distancia locales gastronómicos (m)', });
lyr_Accesibilidadporbarrio_5.set('fieldAliases', {'fid': 'fid', 'barrio': 'Barrio', 'distancia_locales_gastronomicos': 'Distancia promedio por barrio (m)', });
lyr_Accesibilidadpormanzana_6.set('fieldAliases', {'fid': 'fid', 'manzana': 'Manzana', 'promedio_locales_gastronomicos': 'Distancia promedio de la manzana (m)', });
lyr_Localesgastronmicos_7.set('fieldAliases', {'fid': 'fid', 'nombre': 'Nombre', });
lyr_Accesibilidadporcomuna_8.set('fieldAliases', {'fid': 'fid', 'COMUNA': 'Comuna', 'distancia_espacios_verdes': 'Distancia promedio por comuna (m)', });
lyr_Accesibilidadporbarrio_9.set('fieldAliases', {'fid': 'fid', 'barrio': 'Barrio', 'distancia_espacios_verdes': 'Distancia promedio por barrio (m)', });
lyr_Accesibilidadpormanzana_10.set('fieldAliases', {'fid': 'fid', 'manzana': 'Manzana', 'promedio_espacios_verdes': 'Distancia promedio de la manzana (m)', });
lyr_Espaciosverdes_11.set('fieldAliases', {'fid': 'fid', 'nom_mapa': 'Nombre', });
lyr_Saladeteatro_12.set('fieldAliases', {'fid': 'fid', 'Nombre del espacio': 'Nombre del espacio', 'Función principal': 'Función principal', 'Dirección': 'Dirección', });
lyr_Saladecine_13.set('fieldAliases', {'fid': 'fid', 'Nombre del espacio': 'Nombre del espacio', 'Función principal': 'Función principal', 'Dirección': 'Dirección', });
lyr_Museo_14.set('fieldAliases', {'fid': 'fid', 'Nombre del espacio': 'Nombre del espacio', 'Función principal': 'Función principal', 'Dirección': 'Dirección', });
lyr_Librera_15.set('fieldAliases', {'fid': 'fid', 'Nombre del espacio': 'Nombre del espacio', 'Función principal': 'Función principal', 'Dirección': 'Dirección', });
lyr_Galeradearte_16.set('fieldAliases', {'fid': 'fid', 'Nombre del espacio': 'Nombre del espacio', 'Función principal': 'Función principal', 'Dirección': 'Dirección', });
lyr_Espacioferial_17.set('fieldAliases', {'fid': 'fid', 'Nombre del espacio': 'Nombre del espacio', 'Función principal': 'Función principal', 'Dirección': 'Dirección', });
lyr_Espaciodeformacin_18.set('fieldAliases', {'fid': 'fid', 'Nombre del espacio': 'Nombre del espacio', 'Función principal': 'Función principal', 'Dirección': 'Dirección', });
lyr_Disquera_19.set('fieldAliases', {'fid': 'fid', 'Nombre del espacio': 'Nombre del espacio', 'Función principal': 'Función principal', 'Dirección': 'Dirección', });
lyr_Clubdemsicaenvivo_20.set('fieldAliases', {'fid': 'fid', 'Nombre del espacio': 'Nombre del espacio', 'Función principal': 'Función principal', 'Dirección': 'Dirección', });
lyr_Centrocultural_21.set('fieldAliases', {'fid': 'fid', 'Nombre del espacio': 'Nombre del espacio', 'Función principal': 'Función principal', 'Dirección': 'Dirección', });
lyr_Biblioteca_22.set('fieldAliases', {'fid': 'fid', 'Nombre del espacio': 'Nombre del espacio', 'Función principal': 'Función principal', 'Dirección': 'Dirección', });
lyr_Bar_23.set('fieldAliases', {'fid': 'fid', 'Nombre del espacio': 'Nombre del espacio', 'Función principal': 'Función principal', 'Dirección': 'Dirección', });
lyr_Anfiteatro_24.set('fieldAliases', {'fid': 'fid', 'Nombre del espacio': 'Nombre del espacio', 'Función principal': 'Función principal', 'Dirección': 'Dirección', });
lyr_AccesibilidadaactividadesprogramadasporelMindeCulturavsaccesibilidadaespaciosculturales_26.set('fieldAliases', {'fid': 'fid', 'id': 'id', 'sm': 'sm', 'promedio_espacios_compuestos': 'promedio_espacios_compuestos', 'promedio_2021_compuesta': 'promedio_2021_compuesta', 'dif2021': 'dif2021', 'texto_2021': 'texto_2021', 'accesibilidad': 'accesibilidad', });
lyr_ActividadesprogramadasporelMindeCultura2021_27.set('fieldAliases', {'fid': 'fid', 'Nombre': 'Nombre de la actividad', });
lyr_Accesibilidadporcomuna_0.set('fieldImages', {'fid': 'Hidden', 'COMUNA': 'Range', 'distancia_clubes_polideportivos': 'TextEdit', });
lyr_Accesibilidadporbarrio_1.set('fieldImages', {'fid': 'Hidden', 'barrio': 'TextEdit', 'distancia_clubes_polideportivos': 'TextEdit', });
lyr_Accesibilidadpormanzana_2.set('fieldImages', {'fid': 'Hidden', 'manzana': 'Hidden', 'promedio_clubes_polideportivos': 'TextEdit', });
lyr_Clubes_3.set('fieldImages', {'fid': 'Hidden', 'nombre': 'TextEdit', });
lyr_Accesibilidadporcomuna_4.set('fieldImages', {'fid': 'Hidden', 'COMUNA': 'Range', 'distancia_locales_gastronomicos': 'TextEdit', });
lyr_Accesibilidadporbarrio_5.set('fieldImages', {'fid': 'Hidden', 'barrio': 'TextEdit', 'distancia_locales_gastronomicos': 'TextEdit', });
lyr_Accesibilidadpormanzana_6.set('fieldImages', {'fid': 'Hidden', 'manzana': 'Hidden', 'promedio_locales_gastronomicos': 'TextEdit', });
lyr_Localesgastronmicos_7.set('fieldImages', {'fid': 'Hidden', 'nombre': 'TextEdit', });
lyr_Accesibilidadporcomuna_8.set('fieldImages', {'fid': 'Hidden', 'COMUNA': 'Range', 'distancia_espacios_verdes': 'TextEdit', });
lyr_Accesibilidadporbarrio_9.set('fieldImages', {'fid': 'Hidden', 'barrio': 'TextEdit', 'distancia_espacios_verdes': 'TextEdit', });
lyr_Accesibilidadpormanzana_10.set('fieldImages', {'fid': 'Hidden', 'manzana': 'Hidden', 'promedio_espacios_verdes': 'TextEdit', });
lyr_Espaciosverdes_11.set('fieldImages', {'fid': 'Hidden', 'nom_mapa': 'TextEdit', });
lyr_Saladeteatro_12.set('fieldImages', {'fid': 'Hidden', 'Nombre del espacio': 'TextEdit', 'Función principal': 'TextEdit', 'Dirección': 'TextEdit', });
lyr_Saladecine_13.set('fieldImages', {'fid': 'Hidden', 'Nombre del espacio': 'TextEdit', 'Función principal': 'TextEdit', 'Dirección': 'TextEdit', });
lyr_Museo_14.set('fieldImages', {'fid': 'Hidden', 'Nombre del espacio': 'TextEdit', 'Función principal': 'TextEdit', 'Dirección': 'TextEdit', });
lyr_Librera_15.set('fieldImages', {'fid': 'Hidden', 'Nombre del espacio': 'TextEdit', 'Función principal': 'TextEdit', 'Dirección': 'TextEdit', });
lyr_Galeradearte_16.set('fieldImages', {'fid': 'Hidden', 'Nombre del espacio': 'TextEdit', 'Función principal': 'TextEdit', 'Dirección': 'TextEdit', });
lyr_Espacioferial_17.set('fieldImages', {'fid': 'Hidden', 'Nombre del espacio': 'TextEdit', 'Función principal': 'TextEdit', 'Dirección': 'TextEdit', });
lyr_Espaciodeformacin_18.set('fieldImages', {'fid': 'Hidden', 'Nombre del espacio': 'TextEdit', 'Función principal': 'TextEdit', 'Dirección': 'TextEdit', });
lyr_Disquera_19.set('fieldImages', {'fid': 'Hidden', 'Nombre del espacio': 'TextEdit', 'Función principal': 'TextEdit', 'Dirección': 'TextEdit', });
lyr_Clubdemsicaenvivo_20.set('fieldImages', {'fid': 'Hidden', 'Nombre del espacio': 'TextEdit', 'Función principal': 'TextEdit', 'Dirección': 'TextEdit', });
lyr_Centrocultural_21.set('fieldImages', {'fid': 'Hidden', 'Nombre del espacio': 'TextEdit', 'Función principal': 'TextEdit', 'Dirección': 'TextEdit', });
lyr_Biblioteca_22.set('fieldImages', {'fid': 'Hidden', 'Nombre del espacio': 'TextEdit', 'Función principal': 'TextEdit', 'Dirección': 'TextEdit', });
lyr_Bar_23.set('fieldImages', {'fid': 'Hidden', 'Nombre del espacio': 'TextEdit', 'Función principal': 'TextEdit', 'Dirección': 'TextEdit', });
lyr_Anfiteatro_24.set('fieldImages', {'fid': 'Hidden', 'Nombre del espacio': 'TextEdit', 'Función principal': 'TextEdit', 'Dirección': 'TextEdit', });
lyr_AccesibilidadaactividadesprogramadasporelMindeCulturavsaccesibilidadaespaciosculturales_26.set('fieldImages', {'fid': 'Hidden', 'id': 'Hidden', 'sm': 'Hidden', 'promedio_espacios_compuestos': 'Hidden', 'promedio_2021_compuesta': 'Hidden', 'dif2021': 'Hidden', 'texto_2021': 'Hidden', 'accesibilidad': 'Hidden', });
lyr_ActividadesprogramadasporelMindeCultura2021_27.set('fieldImages', {'fid': 'Hidden', 'Nombre': 'TextEdit', });
lyr_Accesibilidadporcomuna_0.set('fieldLabels', {'COMUNA': 'inline label', 'distancia_clubes_polideportivos': 'inline label', });
lyr_Accesibilidadporbarrio_1.set('fieldLabels', {'barrio': 'inline label', 'distancia_clubes_polideportivos': 'inline label', });
lyr_Accesibilidadpormanzana_2.set('fieldLabels', {'promedio_clubes_polideportivos': 'inline label', });
lyr_Clubes_3.set('fieldLabels', {'nombre': 'inline label', });
lyr_Accesibilidadporcomuna_4.set('fieldLabels', {'COMUNA': 'inline label', 'distancia_locales_gastronomicos': 'inline label', });
lyr_Accesibilidadporbarrio_5.set('fieldLabels', {'barrio': 'inline label', 'distancia_locales_gastronomicos': 'inline label', });
lyr_Accesibilidadpormanzana_6.set('fieldLabels', {'promedio_locales_gastronomicos': 'inline label', });
lyr_Localesgastronmicos_7.set('fieldLabels', {'nombre': 'inline label', });
lyr_Accesibilidadporcomuna_8.set('fieldLabels', {'COMUNA': 'inline label', 'distancia_espacios_verdes': 'inline label', });
lyr_Accesibilidadporbarrio_9.set('fieldLabels', {'barrio': 'inline label', 'distancia_espacios_verdes': 'inline label', });
lyr_Accesibilidadpormanzana_10.set('fieldLabels', {'promedio_espacios_verdes': 'inline label', });
lyr_Espaciosverdes_11.set('fieldLabels', {'nom_mapa': 'inline label', });
lyr_Saladeteatro_12.set('fieldLabels', {'Nombre del espacio': 'inline label', 'Función principal': 'inline label', 'Dirección': 'inline label', });
lyr_Saladecine_13.set('fieldLabels', {'Nombre del espacio': 'inline label', 'Función principal': 'inline label', 'Dirección': 'inline label', });
lyr_Museo_14.set('fieldLabels', {'Nombre del espacio': 'inline label', 'Función principal': 'inline label', 'Dirección': 'inline label', });
lyr_Librera_15.set('fieldLabels', {'Nombre del espacio': 'inline label', 'Función principal': 'inline label', 'Dirección': 'inline label', });
lyr_Galeradearte_16.set('fieldLabels', {'Nombre del espacio': 'inline label', 'Función principal': 'inline label', 'Dirección': 'inline label', });
lyr_Espacioferial_17.set('fieldLabels', {'Nombre del espacio': 'inline label', 'Función principal': 'inline label', 'Dirección': 'inline label', });
lyr_Espaciodeformacin_18.set('fieldLabels', {'Nombre del espacio': 'inline label', 'Función principal': 'inline label', 'Dirección': 'inline label', });
lyr_Disquera_19.set('fieldLabels', {'Nombre del espacio': 'inline label', 'Función principal': 'inline label', 'Dirección': 'inline label', });
lyr_Clubdemsicaenvivo_20.set('fieldLabels', {'Nombre del espacio': 'inline label', 'Función principal': 'inline label', 'Dirección': 'inline label', });
lyr_Centrocultural_21.set('fieldLabels', {'Nombre del espacio': 'inline label', 'Función principal': 'inline label', 'Dirección': 'inline label', });
lyr_Biblioteca_22.set('fieldLabels', {'Nombre del espacio': 'inline label', 'Función principal': 'inline label', 'Dirección': 'inline label', });
lyr_Bar_23.set('fieldLabels', {'Nombre del espacio': 'inline label', 'Función principal': 'inline label', 'Dirección': 'inline label', });
lyr_Anfiteatro_24.set('fieldLabels', {'Nombre del espacio': 'inline label', 'Función principal': 'inline label', 'Dirección': 'inline label', });
lyr_AccesibilidadaactividadesprogramadasporelMindeCulturavsaccesibilidadaespaciosculturales_26.set('fieldLabels', {});
lyr_ActividadesprogramadasporelMindeCultura2021_27.set('fieldLabels', {'Nombre': 'inline label', });
lyr_ActividadesprogramadasporelMindeCultura2021_27.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});