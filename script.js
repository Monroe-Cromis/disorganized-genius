
//timer function 

var timeDisplayE1= $("#time")

setInterval(function(){
var time= moment().format("MMM Do, YYYY HH: mm: ss: a");
document.querySelector("#time").textContent= time;
},1000)


//saving to local storage 

var entry = document.querySelector("#entry");
var save = document.querySelector('#Save');


var task = localStorage.setItem("task")
entry.textContent = task; 

saveBtn.addEventListener("click", function(event) {
  event.preventDefault();
  .onClick ("clicked", "#entry")
    localStorage.setItem("#entry")
    localStorage.getItem("#entry")

  saveBtn.addEventListener("click")
  }
  task.textContent.setItem("task", task)
 












/*const entryTask = document.querySelectorAll('entry')

saveBtn

let saveArr = JSON.parse(localStorage.getItem('savArr')) || []
saveBtn.forEach(function(saves){
    saves.addEventListener("click", function (event)}
    let row = event.target.parentNOde 
    let myContent= row.querySelector)'description').value;
    let hour = row.querySelector ('hour").textContent
    saveArr.push({
        myContenthour
    }}
    
    AudioD'
})


saveBtn.addEventListener("click")

var saveBtn = document.querySelectorAll("#save")
if function("clicked"){
localStorage.setItem("#entry")
localStorage.getItem("#entry")

})







//color blocks--------------------------------------------//


/*//*const colorcode = document.getElementsByClassName("colorcode");//<- switched to get elements with class corresponding to the given html
/*let currentHour = Date.now().getHours();//get current time hour

/*colorcode.forEach(function(colorcodedDiv){//just a syntax I use
    let colorcodeHour = parseInt(colorcodedDiv.id);
  if (colorcodeHour) {
    if (currentHour === colorcodeHour) {
      setColor(colorcodedDiv, "Red");//switched to reference the iterated element
    } else if ((currentHour < colorcodeHour) && (currentHour > colorcodeHour - 6)) {
      setColor(colorcodedDiv, "Green");
    } else if ((currentHour > colorcodeHour) && (currentHour < colorcodeHour + 6)) {
      setColor(colorcodedDiv, "LightGrey");
    } else {
      setColor(colorcodedDiv, "White");
    }
  }
});
function setColor(element, color) {
    element.style.backgroundColor = color;
}//added curly bracket since it was missing */





