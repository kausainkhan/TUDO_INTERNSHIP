function register(){
    return new Promise((resolve,reject)=>{
         setTimeout(()=> {
           return reject('Error while registering...');
        console.log('register end');
    },1000);  
})
}
function sendEmail(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=> {
            console.log('send email');
            resolve();
            },1000);
    });
    }
    
function login(){
    return new Promise((resolve,reject)=>{
    setTimeout(()=> {
        console.log('login');
        resolve();
    },1000);
});
}
function getUserData(){
    return new Promise((resolve,reject)=>{
    setTimeout(()=> {
        console.log('get user data');
        resolve();
    },1000);
});
}
function displayUserData(){
    return new Promise((resolve,reject)=>{
    setTimeout(()=> {
        console.log('displayuserdata');
        resolve();
    },1000);
});
}
//callback hell
//  register(function(){
//     sendEmail(function(){
//         login(function(){
//             getUserData(function(){
//                 displayUserData();
                 
//             });
         
//         });
        
//     });
 
//  });
 
// register()
// // .then(()=.{})
// .then(sendEmail)
// .then(login)
// .then(getUserData)
// .then(displayUserData)
// .catch((err)=>{
//     console.log('Error:',err)
//  });

 //async await

 async function aithenticate(){
   await register();
   await sendEmail();
   await login();
   await getUserData();
   await dispalyUserData();
 }

 authenticate().then(()=>{
      console.log('All set')
 });
 console.log('other applicaion work');