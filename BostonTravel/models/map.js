// Adding models for the specific tours 
class Map {
    constructor(
        id, 
        categoryIds, 
        title, 
        affordability, 
        complexity, 
        imageUrl,
        isHistoric,
        isWalkByWater,
        isEducational
        )  
        {
            this.id = id;
            this.categoryIds = categoryIds;
            this.title = title;
            this.affordability = affordability;
            this.complexity = complexity;
            this.imageUrl = imageUrl;
            this.isHistoric = isHistoric;
            this.isWalkByWater = isWalkByWater;
            this.isEducational = isEducational
                    
        }
}

export default Map;