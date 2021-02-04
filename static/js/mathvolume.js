addbtn = document.querySelector('#button_volume');

addbtn.addEventListener('click',function(e){

    TextA = document.querySelector('#value_radius');
    TextB = document.querySelector('#value_height');
    TextC = document.querySelector('#value_volume');

    let volume;

    volume = 3.14 * parseFloat(TextA.value) * parseFloat(TextA.value) * parseFloat(TextB.value);

    TextC.value = volume;
});