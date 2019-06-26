'use strict'

console.log('Loaded map_lr.js')

mapboxgl.accessToken = 'pk.eyJ1IjoiYXNoc2ljbGUiLCJhIjoiY2pzcGlqeDFrMHh3dTQ1bGp5c3ozN3N4ciJ9.Bg-amNI9jqeWLDkQMylkmQ'

let map = new mapboxgl.Map ({
  container: 'map',
  style: 'mapbox://styles/ashsicle/cjxceevy1056w1hphlovb8qd1',
  center: [-66.473054,18.220031],
  zoom: 8
})
        
var toggleableLayerIds = ['Local Residents Decision Map', 'Population Density', 'Community Services', 'Health Services', 'Education Services'];
