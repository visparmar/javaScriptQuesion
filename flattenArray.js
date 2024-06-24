// inpput........................
let a=[1,2,3,[4,[5,6]],7,8]

// output........................
let a=[1,2,3,4,5,6,7,8]


//Solution......................

const flattenArray =(arr) =>{
    let ans=[]
    arr.forEach((item)=>{
    if(Array.isArray(item)){
        // flattenArray(item);
        ans=ans.concat(flattenArray(item));
    }else{
        ans.push(item)
    }
        
    })
    return ans;
}

const b= flattenArray(a);
console.log(b);
