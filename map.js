'use strict'

console.log('Loaded map.js')

mapboxgl.accessToken = 'pk.eyJ1IjoiYXNoc2ljbGUiLCJhIjoiY2pzcGlqeDFrMHh3dTQ1bGp5c3ozN3N4ciJ9.Bg-amNI9jqeWLDkQMylkmQ'

// let map = new mapboxgl.Map({
//     container: 'map',
//     style: 'mapbox://styles/ashsicle/cjx27mx0p697f1cp92ct3p2id',
//     center: [-66.473054,18.220031],
//     zoom: 8
// })

let navigation = new mapboxgl.NavigationControl({
    showCompass: false
})
map.addControl(navigation, 'top-left')

let scale = new mapboxgl.ScaleControl({
    maxWidth: 80,
    unit: 'imperial'
})
map.addControl(scale, 'bottom-right')

for (var i = 0; i < toggleableLayerIds.length; i++) {
    var id = toggleableLayerIds[i];
 
    var link = document.createElement('a');
    link.href = '#';
    link.className = 'active';
    link.textContent = id;
 
    link.onclick = function (e) {
        var clickedLayer = this.textContent;
        e.preventDefault();
        e.stopPropagation();
 
        var visibility = map.getLayoutProperty(clickedLayer, 'visibility');
 
        if (visibility === 'visible') {
            map.setLayoutProperty(clickedLayer, 'visibility', 'none');
            this.className = '';
        } else {
            this.className = 'active';
            map.setLayoutProperty(clickedLayer, 'visibility', 'visible');
        }
    };
 
    var layers = document.getElementById('menu');
    layers.appendChild(link);
}
