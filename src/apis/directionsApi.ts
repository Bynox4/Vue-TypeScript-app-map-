import axios from "axios";

const directionsApi = axios.create({
    baseURL: 'https://api.mapbox.com/directions/v5/mapbox/driving',
    params:{
        alternatives: false,
        geometries: 'geojson',
        overview: 'simplified',
        steps: false,
        access_token: 'pk.eyJ1IjoiYnlub3giLCJhIjoiY2xiaWd4OGNsMHpjYTNvcGR0azlqajZ6bCJ9.i4mC1-oeWD1IQ3vbdfxadw'
    }
})

export default directionsApi;