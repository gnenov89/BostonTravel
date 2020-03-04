// these actions go to './redicers/maps.js to describe what will happen to 
// state, but does not describes how the applications state will change 
// This is an action pointer
export const TOGGLE_FAVORITE = 'TOGGLE_FAVORITE';
export const SET_FILTERS = 'SET_FILTERS';
// This is an action creator
export const toggleFavorite = (id) => {
    return { type: TOGGLE_FAVORITE, mapId: id};
}

export const setFilters = filterSettings => {
    return {type: SET_FILTERS, filters: filterSettings}
}
