
var c=1;
function carrusel()
{
    c++;
    if(c>5){c=1}
    document.getElementById("imgcab").setAttribute("src","imagenes/Banner"+c+".png");
    setTimeout("carrusel()", 1500);
}
function fecha()
{
    let fecha=new Date();   
    let d=fecha.getDate();
    let m=fecha.getMonth();
    let y=fechar.getFullYear();
    document.getElementById("pf").innerHTML="Fecha: "+d+"/"+m+"/"+y;
    setTimeout("fecha()", 1000)
}
document.body.setAttribute("onload","carrusel(), fecha()");