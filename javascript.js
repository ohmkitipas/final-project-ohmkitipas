function editname(){
    let name = prompt("Your Name")
    let fullname = "Name : "+name+" "
    console.log(fullname)
    if (name == ""){alert("Please input your name") }
    else{changename.innerText = fullname;}}




function editNname(){
    let nickname = prompt("Your Nickname")
    let nname = "Nickname : "+nickname+" "
    console.log(nname)
    if (nickname == ""){
      alert("Please input your nickname")
    }
    else{
      changeNname.innerText = nname;
}}


document.addEventListener('DOMContentLoaded', function () {
    var checkbox = document.querySelector('input[id="changetheme"]');
  
    checkbox.addEventListener('change', function () {
      if (checkbox.checked) {
        
        document.body.style.background ="#606060"
      } else {
        
        document.body.style.background ="rgba(245, 156, 169, 0.521)"
      }
    });
  });

function showFB() { alert("FB- ohmkitipas")}







