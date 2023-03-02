//function for that take input field value
function getInputValueById(input){
    let a = document.getElementById(input).value;
    const a_number = parseFloat(a);
    return a_number;
}
//function that take inner text value
function getTextValueById(input){
    let a = document.getElementById(input).innerText;
    const a_number = parseFloat(a);
    return a_number;
}
//function that take card title
function title(name){
    let pCardName = document.getElementById(name).innerText;
    return pCardName;
}
//function that calculation for Rectangle Parallelogram.
function Rectangle_Parallelogram(a,b){
    return (a*b).toFixed(2);
}

//function for Triangle Rhombus Pentagon
function Triangle_Rhombus_Pentagon(a,b){
    return (0.5*a*b).toFixed(2);
}