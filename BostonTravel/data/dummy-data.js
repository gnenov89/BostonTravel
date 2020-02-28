// Here we are creating new instances class Tours which we will use in Tours.js
import Tour from '../models/category';
import Map from '../models/map'


export const TOURS = [
    new Tour('t1', 'FreedomTrail', '#f5428d'),
    new Tour('t2', 'Harbourwalk', '#008000'),
    new Tour('t3', 'HarvardYard', '#800000')
];

export const MAPS = [
    new Map(
        'm1',
        't1',
        'MapOfFreedomTrail',
        'free',
        'simple',
        'https://upload.wikimedia.org/wikipedia/commons/2/24/Freedom_Trail%2C_Congress_St%2C_Boston_%28493560%29_%2811061825394%29.jpg'

    ),
    new Map(
        'm2',
        't2',
        'MapOFHarbourWalk',
        'free',
        'simple',
        'https://upload.wikimedia.org/wikipedia/commons/thumb/f/fe/UnderCharlestownBridge.jpg/1920px-UnderCharlestownBridge.jpg'

    ),
    new Map(
        'm3',
        't3',
        'MapOfHarvardYard',
        'free',
        'simple',
        'https://upload.wikimedia.org/wikipedia/commons/b/b5/Harvard_University_Massachusetts_Hall.jpg'

    ), 
]

