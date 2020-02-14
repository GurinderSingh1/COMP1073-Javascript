// storing the references of ul, text,addBtn
var ul = document.getElementById('ul');
var ulNotAdded = document.getElementById('notadded');
var text = document.getElementById('addCar');
var button =document.getElementsByClassName('addBtn');
//
// ADDING THE LIST ITEM
        button.onclick = addElement; // creating an eventhandler that will call the function named addElement
            function addElement(){
                let ul = document.getElementById('ul'); // stroing the unordered list
                
                let li = document.getElementsByTagName('li');// storing the list
                let newLi = document.createElement('li');  // adding a new list that will store the new li 
                
                let label=document.createElement('label');// adding the labvel element
                label.innerText = text.value; // label getting value
                
                let  deleteButton = document.createElement('button');// creatuing the delete button
                deleteButton.innerText = 'delete';//text of the delete button 
                deleteButton.setAttribute('class', 'deleteButton');// adding inner html 
                function deleteTask(){
                        var removeList = this.parentElement;//  adding the functionality to the delete button i.e. whren pressed the list element gonna vanish
                        ul.removeChild(removeList)
                }
                
                // adding checkbox
                var checkbox = document.createElement('input');
                checkbox.type = 'checkbox';
                checkbox.value = '1';
                checkbox.name ='checkbox1';

                var checkIt = function(e){// adding functionality when user checked the checkbox 
			checkbox = document.querySelector("input[name = checkbox1]");// select the checkbox 
		if(checkbox.checked){
			var enteredText = this.parentElement;
			enteredText.style.textDecoration = 'line-through';// styling the text 
                        ul.appendChild(enteredText); // adding the text as a child in an unoredered list
			var removeList = function(){ // adding tthe functionality to remove the listItem when delete button is presed
			var removeItem = this.parentElement;
                        ul.removeChild(removeItem);
                  
                        
		}
		deleteButton.addEventListener('click', deleteTask);// creating an event handler for delete button


		}
		else
		{
			var enteredText = this.parentElement;
			enteredText.style.textDecoration = 'none';
                        ul.removeChild(enteredText);
                        ul.appendChild(newLi);

                }
                }
                checkbox.addEventListener('change', checkIt); // event handler for checkbox

                deleteButton.addEventListener('click', deleteTask);
                ul.appendChild(newLi);
                text.value = "";
               
                 newLi.appendChild(checkbox);
                 newLi.appendChild(label);
                 newLi.appendChild(deleteButton);
            }
            var checkedItems = document.getElementsByTagName('li');