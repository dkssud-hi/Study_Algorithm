function solution(numbers, target) {
   let answer = 0;
    
    function calculate(numbers, cur, acc){
        if(cur === numbers.length){
            if(acc === target){
                answer++;
            }
            return;
        }
        
        calculate(numbers, cur+1, acc+numbers[cur]);
        calculate(numbers, cur+1, acc-numbers[cur]);
    }
    
    calculate(numbers, 0, 0);
    
    return answer;
}