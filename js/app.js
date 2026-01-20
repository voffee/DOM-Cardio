
myDiv = document.createElement('div');
myDiv.classlist = 'wrapper';

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

console.log(myUnorderedList);