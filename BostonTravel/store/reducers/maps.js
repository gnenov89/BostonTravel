
import {MAPS} from '../../data/dummy-data';
import { TOGGLE_FAVORITE, SET_FILTERS } from '../actions/maps';
import FavoriteTours from '../../screens/FavoriteTours';


// seting up initial state
initilaState ={
    maps: MAPS,
    filteredMaps: MAPS,
    favoriteMaps: []
}
// creating the reducer function 
const mapsReducer = (state = initilaState, action) =>{
    switch (action.type) {
        case TOGGLE_FAVORITE:
            const existingIndex = state.favoriteMaps.findIndex(
                map => map.id === action.mapId );
            if (existingIndex >= 0){
                const updatedFavMaps = [...state.favoriteMaps ];
                updatedFavMaps.splice(existingIndex, 1);
                return {...state, favoriteMaps: updatedFavMaps}
            }else {
                const map = state.maps.find(map => map.id === action.mapId);
                return { ...state, favoriteMaps: state.favoriteMaps.concat(map)};
            }
            case SET_FILTERS:
                const appliedFilters =action.filters;
                const updatedFilteredMaps = state.maps.filter(map => {
                    if (appliedFilters.historic && !map.isHistoric) {
                        return false;
                    }
                    if (appliedFilters.byWater && !map.isWalkByWater) {
                        return false;
                    }
                    if (appliedFilters.educational && !map.isEducational) {
                        return false;
                    }
                    return true;

                });
                return {...state, filteredMaps: updatedFilteredMaps}
        default: 
            return state;
    }

}
// mapsReducer goes to App.js 
export default mapsReducer;