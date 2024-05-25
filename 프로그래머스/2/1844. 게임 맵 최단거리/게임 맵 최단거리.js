function solution(maps) {
    var que =[[0,0,1]]; // 시작 노드
    var y_goal = maps.length-1;
    var x_goal = maps[0].length-1;
    
    while(que.length !== 0){
        
        var location = que.shift(); // 노드를 꺼냄
        var y_location = location[0];
        var x_location = location[1];
        var distance = location[2];
        
        if(y_location === y_goal && x_location === x_goal){
            return distance;
        }
        else if(y_location<0 || y_location > y_goal || x_location<0 || x_location > x_goal){
            continue;
        }
        
        if(maps[y_location][x_location]){ // 방문할 노드인지 확인            
            que.push([y_location+1, x_location, distance+1]);
            que.push([y_location-1, x_location, distance+1]);
            que.push([y_location, x_location+1, distance+1]);
            que.push([y_location, x_location-1, distance+1]);
            maps[y_location][x_location] = 0; // 방문처리
        }
        
    }
    
    return -1;
}