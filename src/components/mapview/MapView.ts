import { defineComponent, onMounted, ref, watch } from "vue";
import mapboxgl from "mapbox-gl";

import { useMapStore, usePlacesStore } from "@/composables";

export default defineComponent({
    name: 'MapView',
    setup(){

        const mapElement = ref<HTMLDivElement>();
        const { userLocation, isUserlocationReady } = usePlacesStore();
        const { setMap } = useMapStore();

        const initMap = async() => {
            if( !mapElement.value ) throw new Error('Div Element no existe');
            if( !userLocation.value ) throw new Error('user location no existe');

            await Promise.resolve();

            const map = new mapboxgl.Map({
                container: mapElement.value, // container ID
                style: 'mapbox://styles/mapbox/light-v10', // style URL
                center: userLocation.value, // starting position [lng, lat]
                zoom: 15, // starting zoom
                });

            const myLocationPopup = new mapboxgl.Popup({ offset: [0, -25] })
                .setLngLat( userLocation.value )
                .setHTML(`
                    <h4>Estás Aquí</h4>
                `)

            const myLocationMarker = new mapboxgl.Marker()
                .setLngLat( userLocation.value )
                .setPopup( myLocationPopup )
                .addTo( map );
            
            // TODO:establecer el map en Vuex
            setMap( map );
        }

        onMounted(() => {
            if ( isUserlocationReady.value ) return initMap();
        })

        watch( isUserlocationReady, ( newVal ) => {
            if( isUserlocationReady.value ) initMap();
        } )

        return{
            isUserlocationReady,
            mapElement
        }
    }
});