// Adding models for the specific tours 
class Map {
    constructor(
        id, 
        categoryIds, 
        title, 
        affordability, 
        complexity, 
        imageUrl 
        )  
        {
            this.id = id;
            this.categoryIds = categoryIds;
            this.title = title;
            this.affordability = affordability;
            this.complexity = complexity;
            this.imageUrl = imageUrl
                    
        }
}

export default Map;