//step 1
function getValue(){
 let stringValue=document.getElementById('inputString').value
 processValue(stringValue)
}

//step 2
function processValue(sv){
 let reverseValue=[]
 let stringLength=sv.length-1
 for(stringLength;stringLength>=0;stringLength--){
   reverseValue+=sv[stringLength]
 }
 showValue(reverseValue)
}

//step 3
function showValue(pv){
 document.getElementById('message').innerHTML=`your REWIND is <strong>${pv}</strong>`
 document.getElementById('alert').classList.remove('invisible')
}