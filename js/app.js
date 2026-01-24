
myDiv = document.createElement('div');
myDiv.classlist = `wrapper`;

document.body.append(myDiv);

myUnorderedList = document.createElement('ul');

for (i=0; i<=2; i++) {
    myListItems = document.createElement(`li`);
    
    if (i===0) {
        myListItems.textContent = `One`;
        myUnorderedList.append(myListItems);
    }

    else if (i===1) {
        myListItems.textContent = `Two`;  
        myUnorderedList.append(myListItems);
    }

    else 
        myListItems.textContent = `Three`; 
        myUnorderedList.append(myListItems);

}

myDiv.append(myUnorderedList);

const myImage = document.createElement(`img`);
myImage.src = `https://picsum.photos/200`;
myImage.classlist = `cute`;
myImage.width = 250;
myImage.alt = `Cute Puppy`;
document.body.append(myImage);

const myString = `
                <div>
                    <p></p>
                    <p></p>
                </div>`;

const myFrag = document.createRange().createContextualFragment(myString);
// document.body.insertAdjacentHTML("afterbegin", myString);
// console.log(myFrag);
myDiv.prepend(myFrag);
console.log(myDiv.firstChild.nextElementSibling.lastElementChild);
myDiv.firstChild.nextElementSibling.lastElementChild.classList.add('warning');

console.log(myDiv.firstChild.nextElementSibling.firstElementChild);
myDiv.firstChild.nextElementSibling.firstElementChild.remove();

function generatePlayerCard(name, age, height) {
    console.log(name);
    console.log(age);
    console.log(height);

    const cardTemplate = `
                <div class='playerCard'>
                    <h2>${name} - ${age}</h2>
                    <p>They are ${height} and ${age} years old.</p>
                </div>
    `;

    const strConvert = document.createRange().createContextualFragment(cardTemplate);

    return (strConvert);
}