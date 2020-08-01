'use strict'

console.log('Loaded map_lr.js')

mapboxgl.accessToken = 'pk.eyJ1IjoiYXNoc2ljbGUiLCJhIjoiY2pzcGlqeDFrMHh3dTQ1bGp5c3ozN3N4ciJ9.Bg-amNI9jqeWLDkQMylkmQ'

let map = new mapboxgl.Map ({
  container: 'map',
  style: 'mapbox://styles/ashsicle/cjxceevy1056w1hphlovb8qd1',
  center: [-66.473054,18.220031],
  zoom: 8
})

// map.on('load', function() {
//   map.addLayer({
//     id: 'raster-layer',
//     type: 'raster',
//     source: {
//       type: 'raster',
//       tiles: ['https://api.mapbox.com/v4/{tileset_id}/{z}/{x}/{y}.png?access_token=YOUR_MAPBOX_ACCESS_TOKEN'],
//     },
//     minzoom: 0,
//     maxzoom: 22
//   });
// });
        
var toggleableLayerIds = ['Local Residents Decision Model', 'Population Density', 'Community Services', 'Health Services', 'Education Services'];
