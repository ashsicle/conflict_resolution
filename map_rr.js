'use strict'

console.log('Loaded map_rr.js')

mapboxgl.accessToken = 'pk.eyJ1IjoiYXNoc2ljbGUiLCJhIjoiY2pzcGlqeDFrMHh3dTQ1bGp5c3ozN3N4ciJ9.Bg-amNI9jqeWLDkQMylkmQ'

let map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/ashsicle/cjxccztr303vb1eldx5fq16u7',
    center: [-66.473054,18.220031],
    zoom: 8
})
        
var toggleableLayerIds = ['Recovery and Resilience Decision Map', 'Population Density', 'Days without Power', 'Flood Risk Zones', 'Hurricane Maria Damage'];
