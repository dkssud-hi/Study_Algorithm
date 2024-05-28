function solution(maps) {
    function Location_info(location, distance){
        this.location = location;
        this.distance = distance;
    }
    
    const ENEMY_XPOINT = maps[0].length-1;
    const ENEMY_YPOINT = maps.length-1;
    let willVisit = [new Location_info([0,0], 1)];
    
    while(willVisit.length !== 0){
        let visit = willVisit.shift();
        let xpoint = visit.location[0];
        let ypoint = visit.location[1];
        let distance = visit.distance;
        
        if(maps[ypoint][xpoint] !== 0){
            if(xpoint===ENEMY_XPOINT && ypoint===ENEMY_YPOINT){
                return distance;
            }
            
          if(xpoint-1 >=0){
              willVisit.push(new Location_info([xpoint-1,ypoint],distance+1));  
          } 
          if(xpoint+1 <= ENEMY_XPOINT){
              willVisit.push(new Location_info([xpoint+1,ypoint],distance+1));
          }  
          if(ypoint-1 >= 0){
              willVisit.push(new Location_info([xpoint,ypoint-1],distance+1));
          }  
          if(ypoint+1 <= ENEMY_YPOINT){
              willVisit.push(new Location_info([xpoint,ypoint+1],distance+1));
          }  
              maps[ypoint][xpoint] = 0;
                
        }

    }
    
    return -1;
}