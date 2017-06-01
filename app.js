// function makeFieldYellow(color){
//     color.style.backgroundColor = "yellow";
// }
// function makeFieldGrey(color){
//     color.style.backgroundColor = "grey";
// }

// function myFunc(fieldId , getFieldId){
//     var getInputField = document.getElementById(fieldId).value;
//     document.getElementById(getFieldId).innerHTML = getInputField ;
//     console.log(getInputField)
// }


// function myFunc(){
//     var getInput = document.getElementById("input").value
//     var newTag = document.createElement("li");
//     var tagText = document.createTextNode(getInput);
//     newTag.appendChild(tagText)
//     document.getElementById('list').appendChild(newTag)
// }


function myFunction(){
    var myName = document.getElementById("myName").value;
    var myAge = document.getElementById('myAge').value;
    var myEmail = document.getElementById('email').value;
    var mainTable = document.getElementById('Table');  
    console.log(mainTable)
    var newTr = document.createElement("tr");
    var nameTd = document.createElement("td");
    var ageTd = document.createElement("td");
    var emailTd = document.createElement("td");
    
    var tagName = document.createTextNode(myName);
     var tagAge = document.createTextNode(myAge);
     var tagEmail = document.createTextNode(myEmail);
    
    nameTd.appendChild(tagName);
     ageTd.appendChild(tagAge);
     emailTd.appendChild(tagEmail);
    
     newTr.appendChild(nameTd);
      newTr.appendChild(ageTd);
       newTr.appendChild(emailTd);
    mainTable.appendChild(newTr);
}
