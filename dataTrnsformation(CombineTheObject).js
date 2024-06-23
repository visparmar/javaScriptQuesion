

// Input ............................................................
const obj=[{
    key:"sample 1",
    data:"data1"
},
{
    key:"sample 2",
    data:"data1"
},
{
    key:"sample 1",
    data:"data1"
},
{
    key:"sample 1",
    data:"data1"
}
]

// Output................................................................... 
{
  'sample 1': [
    { key: 'sample 1', data: 'data1' },
    { key: 'sample 1', data: 'data1' },
    { key: 'sample 1', data: 'data1' }
  ],
  'sample 2': [ { key: 'sample 2', data: 'data1' } ]
}

//Solution ...................................................................

let Output={    
}

// sol 1.......................................................................
// obj.map((item)=>{
//     if(!Output.hasOwnProperty(item.key)){
//       Output[item.key]=[item] 
//     }else{
//         Output[item.key].push(item)
//     }
// })

// sol 2.......................................................................
Output=obj.reduce((acc,item)=>{
    if(!acc[item.key]){
        acc[item.key]=[item]
    }else{
        acc[item.key].push(item)
    }
    return acc;
},{})



console.log(Output);
