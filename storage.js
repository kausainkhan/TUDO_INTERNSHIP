console.log('hi everyone')
let impArray=['Tudo','Technologies','Bangalore']
localStorage.setItem('Name', 'Kausain')
localStorage.setItem('Name2', 'Ayush')
localStorage.setItem('Company', JSON.stringify(impArray));

let name = localStorage.getItem('Name');
 name = JSON.parse(localStorage.getItem('Company'));
console.log(name)

sessionStorage.setItem('sessionName', 'sKausain')
sessionStorage.setItem('sessionName2', 'sAyush')
sessionStorage.setItem('sessionCompany', JSON.stringify(impArray));



// to clear localstorage
// localStorage.clear();
// claer particular key
//localStorage.removeItem('Name)
