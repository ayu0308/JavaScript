let btn = document.querySelector("button");
let ul = document.querySelector("ul");
let inp = document.querySelector("input");

btn.addEventListener("click", function(){
    let item = document.createElement("li");
    item.innerText = inp.value;

    let delBtn = document.createElement("button");
    delBtn.innerText = "Delete";
    delBtn.classList.add("delete");
    
    item.appendChild(delBtn);
    ul.appendChild(item);
    inp.value="";
});

ul.addEventListener("click", function(event){
    if(event.target.nodeName == "BUTTON"){
    let listItem = event.target.parentElement;
    listItem.remove();
    }
});

//event.targent hame batata hai ki kon si chij ko press kiya gaya hai matlb kiski wajah se trigger ho raha hi clik krne pe

//event.targent.nodeName se hame pata chlta hai uska naam jiski wajah se triggr hota hai yaha "BUTTON" se trigger ho raha hai