'use strict'

console.log('Loaded map_rr.js')

mapboxgl.accessToken = 'pk.eyJ1IjoiYXNoc2ljbGUiLCJhIjoiY2pzcGlqeDFrMHh3dTQ1bGp5c3ozN3N4ciJ9.Bg-amNI9jqeWLDkQMylkmQ'

let map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/ashsicle/cjxccztr303vb1eldx5fq16u7',
    center: [-66.473054,18.220031],
    zoom: 8
})

let navigation = new mapboxgl.NavigationControl({
    showCompass: false
})
map.addControl(navigation, 'top-left')

let scale = new mapboxgl.ScaleControl({
    maxWidth: 80,
    unit: 'imperial'
})
map.addControl(scale, 'bottom-right')
