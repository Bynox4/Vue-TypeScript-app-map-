import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import mapboxgl from 'mapbox-gl'; // or "const mapboxgl = require('mapbox-gl');"
mapboxgl.accessToken = 'pk.eyJ1IjoiYnlub3giLCJhIjoiY2xiaWd4OGNsMHpjYTNvcGR0azlqajZ6bCJ9.i4mC1-oeWD1IQ3vbdfxadw';

if( !navigator.geolocation ){
    alert('Tu navegador no soporta el GeoLocation');
    throw new Error('Tu navegador no soporta el GeoLocation');
}

createApp(App).use(store).use(router).mount('#app')
