let first_div = document.getElementsByTagName('div')[0]
let first_h3 = first_div.firstElementChild
console.log(first_h3);

// 2
let titre_niv_3 = document.getElementById('titreNiv3')
console.log(titre_niv_3);
// 3
let previous = titre_niv_3.previousElementSibling
console.log(previous);
// 4
let p_para = document.getElementsByClassName('petitParagraphe')[0]
let g_para = p_para.nextElementSibling
console.log(g_para);
// 5
let parent_important = document.getElementsByClassName('important')
console.log(parent_important);
// 6
let parent_list = document.getElementById('listElements')
let first_child = parent_list.firstElementChild
console.log(first_child);
// 7
let listImporant = document.getElementsByClassName('important')
let childeren = listImporant[listImporant.length-1].nextElementSibling;
console.log(childeren);

//8
let textGeneral = document.getElementById('textGeneral')
console.log(textGeneral.nextElementSibling.nextElementSibling);

//9
let footer = document.getElementById('footer')
let span = footer.getElementsByTagName('span')[0]
console.log(span);
let spanParent = span.parentElement
console.log(spanParent.nextElementSibling.firstElementChild);

//10
let nicolas = document.getElementsByTagName('b')[2]
console.log(nicolas);
console.log(nicolas.parentElement.parentElement.previousElementSibling.firstElementChild.firstElementChild);

//11
let query = document.querySelector('.grandParagraphe')
console.log(query);

//12
// let liAll = document.querySelectorAll('li')
// console.log(liAll);

// liAll.forEach(el => {
//     console.log(el.innerText);
// });

let li_all_basic = document.getElementsByTagName('li')
console.log(li_all_basic);

// let convertArray = Array.from(li_all_basic)
let convertArray =  [...li_all_basic]
console.log(convertArray);
console.log(convertArray);

convertArray.forEach(el => {
    console.log(el.textContent);
});
