const incio_sesion=()=>{

    document.querySelector('.fondo-inicio-sesion').classList.toggle('fondo');
    
    document.querySelector('.class-sidebar-fondo').classList.toggle('Menufondo');

    document.querySelector('.container-sesion').classList.toggle('invisible-sesion');
    
}


// MENU HEADER MOVIL
const activarFondo=()=>{
    document.querySelector('.hamburger').classList.toggle('is-active');
    document.querySelector('.class-sidebar-fondo').classList.toggle('menuFondo');
    document.querySelector('.menuMobil').classList.toggle('open');
}

// TERMINOS Y CONDICIONES
const incio_termino=()=>{
    document.querySelector('.termino-condiciones').classList.toggle('visible-termino');
}

// LLENADO DE ENCUESTA

// PREGUNTA 1
function encuesta1(){
    document.getElementById('valoracion1').innerHTML = document.querySelector('input[name=uno]:checked').value;
}
function encuesta2(){
    document.getElementById('valoracion1').innerHTML = document.querySelector('input[name=uno]:checked').value;
}
function encuesta3(){
    document.getElementById('valoracion1').innerHTML = document.querySelector('input[name=uno]:checked').value;
}
function encuesta4(){
    document.getElementById('valoracion1').innerHTML = document.querySelector('input[name=uno]:checked').value;
}
function encuesta5(){
    document.getElementById('valoracion1').innerHTML = document.querySelector('input[name=uno]:checked').value;
}

// PREGUNTA 2
function encuesta6(){
    document.getElementById('valoracion2').innerHTML = document.querySelector('input[name=dos]:checked').value;
}
function encuesta7(){
    document.getElementById('valoracion2').innerHTML = document.querySelector('input[name=dos]:checked').value;
}
function encuesta8(){
    document.getElementById('valoracion2').innerHTML = document.querySelector('input[name=dos]:checked').value;
}
function encuesta9(){
    document.getElementById('valoracion2').innerHTML = document.querySelector('input[name=dos]:checked').value;
}
function encuesta10(){
    document.getElementById('valoracion2').innerHTML = document.querySelector('input[name=dos]:checked').value;
}

// PREGUNTA 3
function encuesta11(){
    document.getElementById('valoracion3').innerHTML = document.querySelector('input[name=tres]:checked').value;
}
function encuesta12(){
    document.getElementById('valoracion3').innerHTML = document.querySelector('input[name=tres]:checked').value;
}
function encuesta13(){
    document.getElementById('valoracion3').innerHTML = document.querySelector('input[name=tres]:checked').value;
}
function encuesta14(){
    document.getElementById('valoracion3').innerHTML = document.querySelector('input[name=tres]:checked').value;
}
function encuesta15(){
    document.getElementById('valoracion3').innerHTML = document.querySelector('input[name=tres]:checked').value;
}

// PREGUNTA 4
function encuesta16(){
    document.getElementById('valoracion4').innerHTML = document.querySelector('input[name=cuatro]:checked').value;
}
function encuesta17(){
    document.getElementById('valoracion4').innerHTML = document.querySelector('input[name=cuatro]:checked').value;
}
function encuesta18(){
    document.getElementById('valoracion4').innerHTML = document.querySelector('input[name=cuatro]:checked').value;
}
function encuesta19(){
    document.getElementById('valoracion4').innerHTML = document.querySelector('input[name=cuatro]:checked').value;
}
function encuesta20(){
    document.getElementById('valoracion4').innerHTML = document.querySelector('input[name=cuatro]:checked').value;
}

// PREGUNTA 5
function encuesta21(){
    document.getElementById('valoracion5').innerHTML = document.querySelector('input[name=cinco]:checked').value;
}
function encuesta22(){
    document.getElementById('valoracion5').innerHTML = document.querySelector('input[name=cinco]:checked').value;
}
function encuesta23(){
    document.getElementById('valoracion5').innerHTML = document.querySelector('input[name=cinco]:checked').value;
}
function encuesta24(){
    document.getElementById('valoracion5').innerHTML = document.querySelector('input[name=cinco]:checked').value;
}
function encuesta25(){
    document.getElementById('valoracion5').innerHTML = document.querySelector('input[name=cinco]:checked').value;
}

// PREGUNTA 6
function encuesta26(){
    document.getElementById('valoracion6').innerHTML = document.querySelector('input[name=seis]:checked').value;
}
function encuesta27(){
    document.getElementById('valoracion6').innerHTML = document.querySelector('input[name=seis]:checked').value;
}
function encuesta28(){
    document.getElementById('valoracion6').innerHTML = document.querySelector('input[name=seis]:checked').value;
}
function encuesta29(){
    document.getElementById('valoracion6').innerHTML = document.querySelector('input[name=seis]:checked').value;
}
function encuesta30(){
    document.getElementById('valoracion6').innerHTML = document.querySelector('input[name=seis]:checked').value;
}


// MEJORAR EXPERIENCIAS DE LA PAGINA WEB
function cerrarEncuesta(){
    document.getElementById('mj_encuesta').style.display='none';
    document.getElementById('valoracion1').innerHTML = '0';
    document.getElementById('valoracion2').innerHTML = '0';
    document.getElementById('valoracion3').innerHTML = '0';
    document.getElementById('valoracion4').innerHTML = '0';
    document.getElementById('valoracion5').innerHTML = '0';
    document.getElementById('valoracion6').innerHTML = '0';

}
function opinionEncuesta(){
    document.getElementById('mj_encuesta').style.display='flex';
    document.getElementById('mjExperiencia').style.display='none'
}
    