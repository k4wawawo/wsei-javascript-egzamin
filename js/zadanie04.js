//.1
var sampleClass = document.querySelectorAll(".sample_class");

function getTagsOfElements(elements)
{
    retArray = [];
    elements.forEach(element => {
        retArray.push(element.tagName);
    });

    return retArray;
}
console.log(getTagsOfElements(sampleClass));
//.2

const Test = document.getElementById("sample_id");
function getClassesOfElement(kolo) {
    let arr2 = [];
     arra2 = kolo.className.split(" ");
    return arr2;
}
console.log(getClassesOfElement(Test));

//.3

var sampleClass2Li = document.querySelectorAll(".sample_class_2 li");
function getInnerTextsOfElements(elements)
{
    retArray = [];
    elements.forEach(element => {
        retArray.push(element.innerText);
    });
    return retArray;
}
console.log(getInnerTextsOfElements(sampleClass2Li));

