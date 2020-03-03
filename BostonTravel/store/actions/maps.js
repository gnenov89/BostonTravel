// these actions go to './redicers/maps.js to describe what will happen to 
// state, but does not describes how the applications state will change 
export const TOGGLE_FAVORITE = 'TOGGLE_FAVORITE';

export const toggleFavorite = (id) => {
    return { type: TOGGLE_FAVORITE, mapId: id};
}