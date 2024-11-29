// new Promise(function(resolve,reject){
//     setTimeout(function(){
//     console.log("Async task 2");
//     resolve()
//     },4000)
// }).then(function(){
//     console.log("async resolve 2");
// })

// const promise3 = new Promise(function(resolve,reject){
//     setTimeout(function(){
//         resolve({username:"sanjit", email:"sanjit@123"})
//     })
// })

// promise3.then(function(user) {
//     console.log(user);
    
// })


const promiseFour = new Promise(function(resolve,reject){
    setTimeout(function(){
        let error = false
        console.log("pappu cant dance saala");
        
        if(!error){
            resolve({username: "sanjit", password:"123"})
        }else{
            reject("Promise 4 rejected")
        }
    },5000)
})

promiseFour
.then((user) => {
    console.log(user);
    return user.username
})
.then((username) => {
    console.log(username);
})
.catch((error) => {
    console.log(error);
})
.finally(() => console.log("the promise is either resolved or rejected"))


// in order to avoid .then chaining hell, we mostly use the async await. 