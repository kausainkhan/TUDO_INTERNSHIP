function register(callback){
    setTimeout(()=> {
        console.log('register end');
        callback();
    },1000);  
    
}
function sendEmail(callback){
    setTimeout(()=> {
        console.log('send email');
        callback();
    },1000);
}
function login(callback){
    setTimeout(()=> {
        console.log('login');
        callback();
    },1000);
}
function getUserData(callback){
    setTimeout(()=> {
        console.log('get user data');
        callback();
    },1000);
}
function displayUserData(){
    setTimeout(()=> {
        console.log('displayuserdata');
    },1000);
}
//callback hell
 register(function(){
    sendEmail(function(){
        login(function(){
            getUserData(function(){
                displayUserData();
                 
            });
         
        });
        
    });
 
 });
 
 console.log('other applicaion work');
