function examone(first,second) {
    if(typeof first==='number' && typeof second==='number'){
        return first + second;
    }
    else
    console.log("문자열 데이터를 입력하셨습니다.");
}
function examtwo(first,second,third) {
    if(typeof first==='number' && typeof second==='number' && typeof third==='number'){
        return first * second * third;
    }
    else
    return;
}
// 
function examThree(str){
    let count = 0;
    if(typeof str =="string"){
        while(str[count] !== undefined){
            count ++
        }
    }
    else{
        return;
    }
    return count;
}
function examFour(array){
    let mininum=array[0]
    for(let i=0;i<array.length;i++){
        if(mininum>array[i]){
            mininum=array[i]
        }
    }
    return mininum;
}
function examFive(array){
    let sum =0;
    for(let i=0;i<array.length;i++){
        sum=sum+array[i];
    }
    return sum;
}

console.log(examThree("abcd"))