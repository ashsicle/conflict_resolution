'use strict'

console.log('Loaded map_ei.js')

mapboxgl.accessToken = 'pk.eyJ1IjoiYXNoc2ljbGUiLCJhIjoiY2pzcGlqeDFrMHh3dTQ1bGp5c3ozN3N4ciJ9.Bg-amNI9jqeWLDkQMylkmQ'

let map = new mapboxgl.Map ({
  container: 'map',
  style: 'mapbox://styles/ashsicle/cjx27mx0p697f1cp92ct3p2id',
  center: [-66.473054,18.220031],
  zoom: 8
})
        
var toggleableLayerIds = ['External Investors Decision Map', 'Hotels', 'Outdoor Leisure', 'Urban Destinations', 'Development Areas'];
