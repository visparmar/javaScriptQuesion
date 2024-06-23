
// Question :-  add =() => a+b;
// const memoizesAdd=memoizeOne(fn); function can be different ....and it should be memoize the result 
//memoizesAdd(1,2)
//

const add =(a,b) =>a+b;
const multiply =(a,b) =>a*b;


const memoizeOne = (fn) =>{
    const obj={
    }
   return (...args)=>{
       if(obj[JSON.stringify(args)]){
           console.log("return from cache");
           return obj[JSON.stringify(args)]
       }else{
            console.log("Calculate Result..");
           let temp=fn(...args)
           obj[JSON.stringify(args)]=temp;
           return temp;
       }
   }
}
const memoizesAdd=memoizeOne(multiply);

memoizesAdd(1,2)
memoizesAdd(1,2)
memoizesAdd(5,6)
memoizesAdd(5,6)
memoizesAdd(3,2)
