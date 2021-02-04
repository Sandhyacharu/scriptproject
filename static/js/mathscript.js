addbtn = document.querySelector('#button_add');

addbtn.addEventListener('click',function(e){

    TextA = document.querySelector('#value_a');
    TextB = document.querySelector('#value_b');
    TextC = document.querySelector('#value_c');

    let c;

    c = parseFloat(TextA.value) + parseFloat(TextB.value);

    TextC.value = c;
});