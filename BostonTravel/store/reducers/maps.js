
import {MAPS} from '../../data/dummy-data';
import { TOGGLE_FAVORITE } from '../actions/maps';
import FavoriteTours from '../../screens/FavoriteTours';

initilaState ={
    maps: MAPS,
    filteredMaps: MAPS,
    favoriteMaps: []
}

const mapsReducer = (state = initilaState, action) =>{
    switch (action.type) {
        case TOGGLE_FAVORITE:
            const existingIndex = state.favoriteMaps.findIndex(map => map.id === action.mapId );
            if (existingIndex >= 0){
                const updatedFavMaps = [...state, favoriteMaps ];
                updatedFavMaps.splice(existingIndex, 1);
                return {...state, favoriteMaps: updatedFavMaps}
            }else {
                const map = state.maps.find(map => map.id === action.mapId);
                return { ...state, favoriteMaps: state.favoriteMaps.concat(map)};
            }
        default: 
            return state;
    }

}

export default mapsReducer;