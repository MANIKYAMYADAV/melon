// Print Current Date 

let date = new Date();

let options = {
   year:"numeric",month:"long",day:"numeric",hour:"2-digit"
};

console.log("Current Date :",date.toLocaleTimeString("en-us",options));

console.log("Current Date : ",date.toLocaleString());



//print consective sub array from the array of numbers which has given

const sum = arr => arr.reduce((a,b)=>a+b);

 function func(arr,x){
     const rs = [];
     for(let i=0;i<arr.length;i++){
         const tmp=[];
         for(let j=i;j<arr.length;j++){
             tmp.push(arr[j]);
             if(sum(tmp)===x)
             rs.push([...tmp]);
         }
     }
     return rs;
}

let arr = [1,2,3,4,5,6,7,8,9,10];
let s = 9;
console.log("Actual Array is : ",arr , "Sum is :",s);
console.log("Consecutive Sub Array : ",func(arr,s))

