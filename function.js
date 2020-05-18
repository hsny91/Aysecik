function helpAyse() { 
  let numberArray=["sifir","bir","iki","üc","dort","bes","altı","yedi","sekiz","dokuz","on"];
  let deger=prompt("Ayse 10 dan Kucuk Bir Sayi Girer misin.");
  let deger1=deger.toLowerCase();
      for(let i=0;i<11;i++) {
         if(numberArray[i]==deger1) { 
         let result=numberArray.indexOf(deger1);
         console.log(result)
        document.getElementById("result").innerHTML=10-result;
         }
      }
     if(deger1!=numberArray[0] && deger1!=numberArray[1] && deger1!=numberArray[2] && deger1!=numberArray[3] && deger1!=numberArray[4] && deger1!=numberArray[5] && deger1!=numberArray[6] && deger1!=numberArray[7] && deger1!=numberArray[8] && deger1!=numberArray[9]&& deger1!=numberArray[10]){
       document.getElementById("result").innerHTML="Aysecik sayiyi yanlis yazdin.";
      }
}


