console.log('Hello from js');
// console.log(document);


const sections = document.querySelectorAll('section');
console.log(sections);
for (const section of sections) {
    section.style.border= "2px solid steelblue";
    section.style.marginBottom = "5px";
    section.style.borderRadius = "15px";
    section.style.padding = "0px 15px";
}



// 1. where to add
const placesList = document.getElementById('places-list');
// 2. what to be added
const li = document.createElement('li');
li.innerText = 'pahartoli bon';

// 3. add the child
placesList.appendChild(li);

// 1. where to ad
const mainContainer = document.getElementById('main-container');

// 2. what to be added
const section = document.createElement('section');
const h1 = document.createElement('h1');
h1.innerText = 'My Food List';
section.appendChild(h1);

const ul = document.createElement('ul');
const li1 = document.createElement('li');
li1.innerText ='biryani' 
ul.appendChild(li1);

const li2 = document.createElement('li');
li2.innerText ='borhani' 
ul.appendChild(li2);

const li3 = document.createElement('li');
li3.innerText ='salad' 
ul.appendChild(li3);

section.appendChild(ul);

mainContainer.appendChild(section);


// set innerHTML directly
const sectionDress = document.createElement('section');
sectionDress.innerHTML = `
<h1>My Dress section</h1>
<ul>
    <li>T-shirt</li>
    <li>Lungi</li>
    <li>Sando genji</li>
</ul>
`
mainContainer.appendChild(sectionDress);



/* console.log('second file');

const secondList = document.getElementById('second-list');

const li = document.createElement('li');
li.innerText = 'My dynamic item'

secondList.appendChild(li); */


/* const allLi = document.getElementsByTagName('li')
console.log(allLi);

const allTitles = document.getElementsByClassName('section-title');
console.log(allTitles);

const secondSection = document.getElementById('second-section');
console.log(secondSection);

secondSection.style.color = 'white';
secondSection.style.backgroundColor = 'tomato'; 

document.querySelectorAll('section');
document.querySelector('li'); */



/* const solution = (letter)=> {
    //Write Your solution Here
   //dont forget to return
    const inputWord = letter.toLowerCase();
    if ((inputWord == 'a') || (inputWord == 'e') || (inputWord == 'i') || (inputWord == 'o') || (inputWord == 'u')) {
        return "The word you've entered is a 'VOWEL.'"
    } else {
        return "The word you've entered is a 'Consonant.'"
    }
  };

const wordChecker = solution('w');
console.log(wordChecker); */


