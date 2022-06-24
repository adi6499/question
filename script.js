let loading = false
window.addEventListener("load",async()=>{
   let json = await fetch("ans.json")
   let data = await json.json()
   
   let name = []
   
   name.push(data.Sheet1);
   let nameData =name[0]
   for(let i=0;i < nameData.length;i++){
      
       let question = nameData[i]["M.Com"]
       let option1 = nameData[i].__EMPTY
       let option2 =nameData[i].__EMPTY_1
       let option3 =nameData[i].__EMPTY_2
       let option4 = nameData[i].__EMPTY_3
       let answer = nameData[i].__EMPTY_4
       
       let list = document.querySelector(".list")
      
       list.innerHTML+=`
       
        <li class="questions">
       <b class="num">${i+1}</b>
       <h3>${question}</h3>
        <option>->${option1}</option>
        <option>->${option2}</option>
        <option>->${option3}</option>
        <option>->${option4}</option>
        Answer:<b class="answer">${answer}</b>
       </li>
       `
   }
})