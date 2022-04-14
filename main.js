function firstLetterName (name){
    alert(`The name ${name}  starts with the leter ${name[0]}`  );
}

firstLetterName ("sebastien");

function divisableByTwo (number) {
    if (number % 2 ==0) {
        return(true)
    }   else{
        return(false)
    }

}
console.log(divisableByTwo(7),divisableByTwo(6));

function largestNum (arr){
    let largestNum=arr[0]
    for (let i=0;i<arr.length;i++ ) {
        if (arr[i] > largestNum){
            largestNum=arr[i]
        }
    }
    return largestNum;
}

   
console.log(largestNum([1,2,3,10,5]));