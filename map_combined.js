'use strict'

console.log('Loaded map_combined.js')

mapboxgl.accessToken = 'pk.eyJ1IjoiYXNoc2ljbGUiLCJhIjoiY2pzcGlqeDFrMHh3dTQ1bGp5c3ozN3N4ciJ9.Bg-amNI9jqeWLDkQMylkmQ'

let map = new mapboxgl.Map ({
  container: 'map',
  style: 'mapbox://styles/ashsicle/cjxdsq3mu01an1cuujd5nyizb',
  center: [-66.473054,18.220031],
  zoom: 8
})
        
var toggleableLayerIds = ['Equally Weighted', 'Local Residents and Recovery Resilience Prioritized', 'Recovery Resilience and External Investors Pioritized'];
