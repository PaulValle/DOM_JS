function sombrear(){
  if(document.getElementById('sombreo').innerHTML === "Resaltar"){
var texto=document.getElementsByTagName('p');
    for(let i=0;i<texto.length;i++){
          texto[i].innerHTML=resaltarPalabra(texto[i].innerHTML);       
    }
  document.getElementById('sombreo').innerHTML = "Apagar";
  }else{
        var texto=document.getElementsByTagName('p');
    for(let i=0;i<texto.length;i++){
          texto[i].innerHTML=apagarPalabra(texto[i].innerHTML);       
    } 
    document.getElementById('sombreo').innerHTML = "Resaltar";
      }
   }
    function resaltarPalabra(texto){
        var patron = "I wanna be the very best";
        nuevoValor = "<span style=\u0022background-Color:yellow;\u0022>"+patron+"</span>";
        return texto.replace(patron, nuevoValor);
        
     }
function apagarPalabra(texto){
        var patron = "I wanna be the very best";
        nuevoValor = "<span style=\u0022background-Color:white;\u0022>"+patron+"</span>";
        return texto.replace(patron, nuevoValor);
        
     }
function ocultar(){ 
    document.getElementById('contenedor').style.display = 'none';
    document.getElementById('enlace').innerHTML = "mostrar";
    //alert("contenedor");
        
}
function mostrar(){ 
    document.getElementById('contenedor').style.display = 'block';
    document.getElementById('enlace').innerHTML = "ocultar";
    //alert("contenedor");
}
function mostrarOcultar(){
  var imagen = document.images[0];
    if(document.getElementById('enlace').innerHTML === "mostrar"){
        mostrar();
        
      
    }else{
        ocultar();
      
    }
    
}