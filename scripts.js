const input = document.getElementById('mainInput')
const li = document.getElementsByTagName(`li`)

let myArray = []



const showLi = () => {

   let mod = document.getElementById('tasks')
   let newLi = ""

   myArray.forEach((element, index) => {

      newLi = newLi + `<li id="tasks" class="${element.complete == true ? "completar" : "" }">
                
    <button id="rocketB" class="fas fa-rocket"  onclick="completar(${index})"></button>
    <p class="${element.complete == true ? "completar" : "" }">${element.task}</p> 
    <button id="thrashB" class="fas fa-trash" onclick="deleteq(${index})"></button>

</li>`
   });

   mod.innerHTML = newLi

   localStorage.setItem("list", JSON.stringify(myArray))

}


const arrayObj = () => {

   myArray.push({
      task: input.value,
      complete: false
   })


   showLi()
}

const deleteq = index => {
   myArray.splice(index, 1)
   showLi()

}

const completar = index => {
   myArray[index].complete = !myArray[index].complete
   showLi()
}

function reloadingTask() {
   let lista = localStorage.getItem("list")
   myArray = JSON.parse(lista)
   console.log(myArray)

   showLi()
}

reloadingTask()