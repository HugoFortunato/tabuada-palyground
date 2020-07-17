function tabuada () {
    let num = document.getElementById('txtn')
    let tab = document.getElementById('seltab')


   if (num.value.length == 0) {
       window.alert('Por favor, digite um número!')
   } else {

        let n = Number(num.value)
        tab.innerHTML = ''
        
        //(let c = 1; 1 <= 10; 1++) 
        //(let c = 2; 2 <= 10; 2++) 
        //let  c = 3; 3 <=10;  3++)

     for (let c = 1; c <= 10; c++) {
         let item = document.createElement ('option')
         item.text = `${n} x ${c} = ${n*c}`
         tab.appendChild (item)
     }   
       
   }

}

