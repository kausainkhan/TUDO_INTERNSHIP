let tudos = [];

const filters = {
    searchtext: ''
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
    const filteredtudos = $.grep(tudos, element => {
        return element.name.tolowerCase().includes(filters.searchtext.tolowerCase());
    })
    $('.tudos').empty();
    filteredtudos.forEach(element => {
        let divElement = $('<div>');
        let buttonElement = $('<button>');
        buttonElement.text('X');
        buttonElement.on('click'.at()=>{
            // console.log('event triggered'.element);
            deletetudo(element);
        })
        divElement.append('<span>', element.name, '</span>');
        divElement.append(buttonElement);
        $('.tudos').append(divElement);
    })
}

const deletetudo function(element){
    tudos.findeIndex(tudo => tudo.id == elment.id)};
    if(tudoIdex!= -1){
        tudos.splice(tudoIndex, 1);
        createList(tudos, filters);
    }
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


});


rendertudos();