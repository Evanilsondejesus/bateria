


let batteryIsCharging = false;



navigator.getBattery().then((battery) => {
//document.getElementById("bt1").innerHTML = "1: " + battery.charging;


 console.log(battery)
var p =  Number(battery.level)* 100;

carregamento(p)













  battery.addEventListener('chargingchange', () => {
   // document.getElementById("bt2").innerHTML = "2: " +  battery.charging;
  //  document.getElementById("bt4").innerHTML = "tempo decarga: " +  Number(battery.chargingTime);

    var v =  Number(battery.level)* 100;

    carregamento(v)
    seu(battery.charging)

  });






  battery.addEventListener('levelchange', () => {
 //   document.getElementById("bt3").innerHTML = "3: " +  battery.charging;
   // document.getElementById("bt4").innerHTML = "tempo decarga: " +  Number(battery.chargingTime);

  var v =  Number(battery.level)* 100;

    carregamento(v)


});






battery.addEventListener('chargingtimechange', () => {
 // document.getElementById("bt4").innerHTML = "tempo decarga: " +  Number(battery.chargingTime);

  var v =  Number(battery.level)* 100;

    carregamento(v)


});















});





















function carregamento(v) {

var p = v;





//document.getElementById("porcentagem").innerText = p + "%";

var n = p - 100;

document.getElementById("inicio").style.height= Math.abs(n) + "px";



document.getElementById("porcentagem").innerText =Math.abs(p) ;
 




if (p <= 20) {


    document.getElementById("porcentagem").innerText = p + "% fraca"           ;


    document.getElementById("inicio").style.background = "red";

    
}

else if (p >= 75  && p < 99){
   document.getElementById("porcentagem").innerText = p + "%"     ;


   document.getElementById("inicio").style.background = "lightblue";

   








} else if(p >= 100){
    document.getElementById("porcentagem").innerText = p + "% cheia"           ;


   // document.getElementById("inicio").style.background = "darkblue";


}else{
    document.getElementById("porcentagem").innerText = p + "%"           ;



}










    
}










function seu(v) {
  
  var carregar = document.getElementById("bateria")



  if (v) {
  
carregar.classList.add('mydiv')
  
  }else{
  
    var carregar = document.getElementById("bateria")
carregar.classList.remove('mydiv')
  


  }


















  
}















