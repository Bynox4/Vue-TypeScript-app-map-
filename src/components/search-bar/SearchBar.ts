import { usePlacesStore } from "@/composables";
import { computed, defineComponent, ref } from "vue";
import SearchResults from "../search-results/SearchResults.vue";

export default defineComponent({
    name: 'SearchBar',
    components:{
        SearchResults
    },
    setup(){
        
        const { searchPlacesByTerm } = usePlacesStore();

        const debounceTimeout = ref();
        const debouncedValue = ref('');


        return{
            debouncedValue,

            searchTerm: computed({
                get(){
                    return debouncedValue.value;
                },
                set( val: string ){
                    if( debounceTimeout.value ) clearTimeout( debounceTimeout.value )
                    debounceTimeout.value = setTimeout(() => {
                        debouncedValue.value = val;
                        searchPlacesByTerm( val );
                    }, 500);
                }
            }) 
        }
    }
});
