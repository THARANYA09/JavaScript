 //                                                       CALLBACK
 //Type 1:
/*function validation()
{
    console.log("Validation Successful");
    completion();
}
function completion()
{
    console.log("Validation Completed");
}
validation()*/

//Type 2:
/*function validation(VC)
{
    console.log("Validation Successful");
    VC();
}
function completion()
{
    console.log("Validation Completed");
}
validation(completion);*/

//set timout function
/*function validation(VC)
{
    setTimeout(()=>{
    console.log("Validation Successful");
    VC();},10000);
}
function completion()
{
    console.log("Validation Completed");
}
validation(completion);*/
 
//                                                      PROMISE

//Basic example of promise
/*
function prombaseEg(){
 let prom=new Promise((resolve) => {
    setTimeout(() =>{
        resolve("This is a base example");
    },2000);
 });
    prom.then(val => {
        console.log(val);
    }).catch(err => {
        console.log(err);
    });
}
prombaseEg();
*/
//ex using arrow function
/* islocFound=(loc,time) => {
    isloc="SKCET";
    t=2000;
    if(loc===isloc && t<=time)
    {
        return true;
    }
    else
    {
        return false;
    }
}
function locationFinder(){
    time=2209;
    loc="SKCET";
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if(islocFound(loc,time))
            {
                resolve("Location Found")
            }
            else
            {
                reject("Location not Found")
            }
        },time);
    })
}
locationFinder()
.then((val)=>{
    console.log(val);
})
.catch((val)=>{
    console.log(val);
})
    */
