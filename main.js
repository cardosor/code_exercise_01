class JobExercise {
    //Returns object with keys "above" and "bellow" with the counter of intergers in the `arr`, above and bellow the `value`
    //input: [1,5,2,1,10], 6
    //output: {"above":1, "bellow":4}
    aboveBellow(arr, value){
        //create the object to return
        const obj = {above:0, below:0};

        for(let i = 0; i < arr.length; i++){
            //if the array element is greater add to above
            if(arr[i] > value) obj.above++;
            //if the array element is less add to bellow
            if(arr[i] < value) obj.below++;
        }
        return obj;
    }
    
    //Returns a new string, rotating the characters in the original string `str` to the right by the rotation amount `value`
    //and have the overflow appear at the beginning
    //input: "MyString", 2
    //output: "ngMyStri"
    stringRotation(str, value){
        //Create an array from the `str` argument
        const strArr =  str.split("");

        //Loop until value equals or less than 0
        while(value > 0){
            //Removes from the end off the array and add to the start of the array
            strArr.unshift(strArr.pop());
            //substracts 1 from value
            value--;
        }
        //same result but only using javascript builtin string methods -> str.slice(value*-1) + str.substring(0, str.length-value)
        //console.log(strArr.join(""));
        return  strArr.join("");
    }
}

const jobExercise = new JobExercise();
console.log(jobExercise.aboveBellow([1,5,2,1,10], 6));
console.log(jobExercise.stringRotation("MyString", 2));