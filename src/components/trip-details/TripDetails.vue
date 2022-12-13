<template>
  <div v-if="distance"
    class="trip-container column position-absolute bottom-0 start-50 translate-middle-x text-center">
    <div class="col"> Distancia: <strong> {{ distance }} Kms </strong> </div>
    <div class="col"> Duracion: <strong> {{ duration }} Mins </strong> </div>
  </div>
</template>

<script lang="ts">
import { useMapStore } from "@/composables";
import { defineComponent } from "vue";

export default defineComponent({
    name: 'TripDatails',
    setup(){

        const { distance, duration } = useMapStore();

        return{
            distance,
            duration
        }
    }
})
</script>

<style scoped>

.trip-container{
    padding: 10px;
    border-radius: 10px;
    background-color: white;
    box-shadow: 0 10px 10px rgba(0, 0, 0, 0.2);
    font-size: 20px;
    width: 250px;
}

</style>