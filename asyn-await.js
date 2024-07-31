//Async and Await

/*async function a()
{
    await b()
    setTimeout(() =>  {
 
    console.log("Apple")
},2000);
}
async function b()
{
    await c()
    setTimeout(() =>  {
 
        console.log("Orange")
    },1000);
}
async function c()
{
  console.log("Cherry");  
}
a();*/

// async&await with promise

let reach=new Promise((resolve,reject)=>{
    const reached=false
    if(reached)
        setTimeout(resolve,3000,"Reached!!")
    else
        reject("Not reached")
})

async function asyncstatus(){
    try{
    console.log("Wait...checking data");
    res=await reach
    console.log(res);
    console.log("Thank you for visiting.");
    }
    catch(err){
        console.log(err);
    }
}
asyncstatus()