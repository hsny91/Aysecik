function helpAyse() { 
  let numberArray=["sifir","bir","iki","üc","dort","bes","altı","yedi","sekiz","dokuz","on"];
  let value=prompt("Ayse 10 dan Kucuk Bir Sayi Girer misin.");
  let value1=value.toLowerCase();
      for(let i=0;i<11;i++) {
         if(numberArray[i]==value1) { 
         let result=numberArray.indexOf(value1);
         console.log(result)
        document.getElementById("result").innerHTML=10-result;
         }
      }
     if(value1!=numberArray[0] && value1!=numberArray[1] && value1!=numberArray[2] && value1!=numberArray[3] && value1!=numberArray[4] && value1!=numberArray[5] && value1!=numberArray[6] && value1!=numberArray[7] && value1!=numberArray[8] && value1!=numberArray[9]&& value1!=numberArray[10]){
       document.getElementById("result").innerHTML="Aysecik sayiyi yanlis yazdin.";
      }
}


