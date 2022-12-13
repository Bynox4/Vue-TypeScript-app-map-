<template>
  <MapView />
  <Search-bar />
  <My-location-btn/>
  <TripDatails />
</template>

<script lang="ts">
import { usePlacesStore } from '@/composables';
import { defineComponent } from 'vue';

import MapView from '@/components/mapview/MapView.vue';
import SearchBar from '@/components/search-bar/SearchBar.vue';
import MyLocationBtn from '@/components/my-location-btn/MyLocationBtn.vue';
import TripDatails from '@/components/trip-details/TripDetails.vue'

export default defineComponent({
  name: 'HomeView',
  components: {
    MapView,
    MyLocationBtn,
    SearchBar,
    TripDatails
  },
  setup(){
    
    usePlacesStore();

    return{
      
    }
  }
});
</script>
