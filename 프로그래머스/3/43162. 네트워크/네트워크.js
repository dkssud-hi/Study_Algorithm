function solution(n, computers) {
    let visited = new Array(n).fill(0);
    let answer = 0;
    
    while(visited.includes(0)){
        const que = [visited.indexOf(0)];
        let checked = [];
        
        while(que.length !== 0){
            let visit = que.shift();
            if(!checked.includes(visit)){
            for(let i=0; i<computers[visit].length; i++){
                if(i === visit) continue;
                if(computers[visit][i] === 1) que.push(i);
            }
            checked.push(visit);
            visited[visit] = 1;
            }
        }
        answer++;
    }
    
    return answer;
}