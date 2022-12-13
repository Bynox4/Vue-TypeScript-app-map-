import axios from "axios";

const serachApi = axios.create({
    baseURL: 'https://api.mapbox.com/geocoding/v5/mapbox.places',
    params:{
        limit: 5,
        language: 'es',
        access_token: 'pk.eyJ1IjoiYnlub3giLCJhIjoiY2xiaWd4OGNsMHpjYTNvcGR0azlqajZ6bCJ9.i4mC1-oeWD1IQ3vbdfxadw'
    }
})

export default serachApi;