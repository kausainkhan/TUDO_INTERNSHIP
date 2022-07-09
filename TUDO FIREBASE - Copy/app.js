let tudos = [];

import { initializeApp } from "https://www.gstatic.com/firebasejs/9.9.0/firebase-app.js";
import { getFirestore, collection, getDocs } from "https://www.gstatic.com/firebasejs/9.9.0/firebase-firestore.js";
// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
var firebaseConfig = {
    apiKey: "AIzaSyDhZRbemeM6_qiuQ_oXfQR0BpSYH896f4I",
    authDomain: "intern-tudo.firebaseapp.com",
    databaseURL: "https://intern-tudo-default-rtdb.firebaseio.com",
    projectId: "intern-tudo",
    storageBucket: "intern-tudo.appspot.com",
    messagingSenderId: "199755981389",
    appId: "1:199755981389:web:3f47fa5917b62b77cff204",
    measurementId: "G-4FVVZKGMPD"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
var db = getFirestore();
console.log(db)
const filters = {
    searchtext: '',
    hideCompleted: flase
}
$('.search-tudo').on('input', () => {
    //console.log($('.search-tudo').val());
    $('.search-tudo').val();
    createList(tudos, filters);
})


const rendertudos = function () {

    db.collection('tudos').get().then(data => {
        //console.log(data.docs(0).data);
        data.docs.forEach(element => {
            // console.log(element.data());
            const singleTudo = element.data();
            tudos.push(singleTudo);
        });
        createList(tudos, filters);
        // tudos.forEach(element =>{
        //     $('.tudos').append('<p>',element.name,'</p>');
        // })
    });
}

const createList = function (tudos, fiters) {
    let count=0;
    const filteredtudos = $.grep(tudos, element => {
        return element.name.tolowerCase().includes(filters.searchtext.tolowerCase());
    })
    $('.tudos').empty();
    filteredtudos.forEach(element => {
        let divElement = $('<div>');
        let buttonElement = $('<button>');
        let labelElement = $('<label>');
        let checkboxElement = $('<input type "checkbox" />');
        buttonElement.text('X');
        buttonElement.on('click', () => {
            // console.log('event triggered'.element);
            deletetudo(element);
        })
        checkboxelement.attr('checked'.element.isCompleted);
        checkboxElement.on('change', () => {
            toggleTudo(element);
        })
        labelElement.appened(checkboxElement);
        labelElement.append('<span>' ', element.name , ' </span);
        divElement.append('<span>', element.name, '</span>');
        divElement.append(buttonElement);
        $('.tudos').append(divElement);
        if (element.isCompleted == false){
            count ++;
        }
    }) 
    $('.status').text('You have ',count,' tudo left');
}


const toggleTudo = function (element) {
    // element.isCompleted =!element.isCompleted;
    // createList(tudos, filters);

    const new_tudo = {
        id: element.id,
        isCompleted: !element.isCompleted,
        name: element.name

    }

    db.collection('tudos').doc(element.id).update(new_tudo).then(() => {
        console.log('Upadted successfully');
        element.isCompleted = !element.isCompleted;
        createList(tudos, filters);
    }).catch(error => {
        console.log('Error occured', error);
    })
}

const deletetudo = function (element) {
    db.collection('tudos').doc(element.id).delete().then(() => {
        console.log('Tudo deleted successfully.');
        const tudoIndex = tudos.findIndex(tudo => tudo.id === element.id);
        if (tudoIndex != -1) {
            tudos.splice(tudoIndex, 1);
            createList(tudos, filters);

        }

    });
};
$('.submit-tudo').click((event) => {
    event.preventDefault();
    const id = uuidv4();
    const tudo = {
        name: $('.new-tudo').val(),
        iscompleted: false,
        is: id,

    }
    db.collection('tudos').doc(id).set(tudo).then(() => {
        console.log('Tudo added succesfully');
        $('.new-tudo').val('');
        tudos.push(tudo);
        createList(tudos, filters);
    }).catch(error => {
        console.log('Error occured', e);
    });
    $('.hidecompleted').change(() => {
        if ($('.hidecomplted'.prop('checked')){
            hideCompleted(tudo.filters);
        } else {
            createList(tudos, filters);

        }
    })


    const hideCompleted = function (tudos, filters) {
        const filteredTudos = $.grep(tudos, (element) => {
            if (element.isCompleted == filters.hideCompleted) {
                return element;
            }

        })
        createList(filteredtudos, filters);
    }
});


rendertudos();
// FORM VALIDATION
function clearErrors() {

    errors = document.getElementsByClassName('formerror');
    for (let item of errors) {
        item.innerHTML = "";
    }


}
function seterror(id, error) {
    //sets error inside tag of id 
    element = document.getElementById(id);
    element.getElementsByClassName('formerror')[0].innerHTML = error;

}

function validateForm() {
    var returnval = true;
    clearErrors();

    //perform validation and if validation fails, set the value of returnval to false
    var name = document.forms['myForm']["fname"].value;
    if (name.length < 5) {
        seterror("name", "*Length of name is too short");
        returnval = false;
    }

    if (name.length == 0) {
        seterror("name", "*Length of name cannot be zero!");
        returnval = false;
    }

    var email = document.forms['myForm']["femail"].value;
    if (email.length > 25) {
        seterror("email", "*Email length is too long");
        returnval = false;
    }

    var phone = document.forms['myForm']["fphone"].value;
    if (phone.length != 10) {
        seterror("phone", "*Phone number should be of 10 digits!");
        returnval = false;
    }

    var password = document.forms['myForm']["fpass"].value;
    if (password.length < 6) {

        // Quiz: create a logic to allow only those passwords which contain atleast one letter, one number and one special character and one uppercase letter
        seterror("pass", "*Password should be atleast 6 characters long!");
        returnval = false;
    }

    var cpassword = document.forms['myForm']["fcpass"].value;
    if (cpassword != password) {
        seterror("cpass", "*Password and Confirm password should match!");
        returnval = false;
    }

    return returnval;
}


// consle
var form = document.getElementById('form')
form.addEventListener('submit', function (event) {
    event.preventDefault() //prevent form from auto submit
    var name = document.getElementById('name').value
    console.log(name)
    var email = document.getElementById('email').value
    console.log(email)
    var phone = document.getElementById('phone').value
    console.log(phone)
    var pass = document.getElementById('pass').value
    console.log(pass)

    $("#104").submit(function () {
        $("input.test[type=checkbox]:checked").each(function () {
            //alert($(this).val());
            console.log($(this).val());
        });

        return false;
    });




})