function restarHora(objDate, intHours) {
    //let intHours = 1;
    let numberOfMlSeconds = objDate.getTime();
    let addMlSeconds = (intHours * 60) * 60000;
    let newDateObj = new Date(numberOfMlSeconds - addMlSeconds);
    return newDateObj.getUTCHours();

}

function formatHora(h){
    let hour = h;
    str_hora = new String (h);
    if (str_hora.length == 1){
         hour = "0" + h;
    }
    
    return hour + '00';
    
}

function getNuevaHora(url, d, h) {
	hora = restarHora(d, h);
	hora = formatHora(hora);
    return hora;
}


function getHora(d){
    hora= d.getUTCHours();
    hora =formatHora(hora);
    return hora; 
}


function cargarEnlaces(fecha,hora){
    // CALCULO DE LA FECHA DEL SISTEMA
    var d = new Date();
    var month = d.getMonth()+1;
    var day = d.getDate();
    var fecha = d.getFullYear() + 
        (month<10 ? '0' : '') + month + 
        (day<10 ? '0' : '') + day;

    var enlace = "";
    //var hora= d.getHours()+"00";
    var hora= d.getUTCHours();
    hora =formatHora(hora);


//***********************************************************************
/*
<img id= "imagen" src="invalid_link" >
document.getElementById('imagen').addEventListener('error', e => {
 document.getElementById('imagen').src = 'https://placeimg.com/200/300/animals' 
 //Esto es una imagen de respaldo que se supone estás seguro de que existe
})

*/
    // ----------------------------------- RADAR - AEMET
    enlace1 = "https://www.aemet.es/imagenes_d/eltiempo/observacion/radar/"+fecha+hora+"_r8ca.gif";
	$("#enlace-radar-aemet").attr("href",enlace1);
	$("#img-radar-aemet").attr("src",enlace1);
	// EVENTO ERROR EN LA IMAGEN
	h=0;
	document.getElementById('img-radar-aemet').addEventListener('error', e => {
		h++; // Variable que va restando a la hora actual
		if(h == 3){
			enlace1 = "https://www.aemet.es/imagenes_d/eltiempo/observacion/radar/r8ca_nodisp.gif";
			//enlace1 = "./img/img-no-disponible.png"
		}else{
			hour = getNuevaHora(enlace, d, h);
			enlace1 = "https://www.aemet.es/imagenes_d/eltiempo/observacion/radar/"+fecha+hour+"_r8ca.gif";
		}
		document.getElementById('img-radar-aemet').src = enlace1;
		
	})
    
    

    // ------------------------------------ TORMENTAS - AEMET
    hora= getHora(d);

    enlace2 = "https://www.aemet.es/imagenes_d/eltiempo/observacion/rayos/"+fecha+hora+"_r78g.gif";
	$("#enlace-tormentas-aemet").attr("href",enlace2);
    $("#img-tormentas-aemet").attr("src",enlace2);
	// EVENTO ERROR EN LA IMAGEN
	h=0;
	document.getElementById('img-tormentas-aemet').addEventListener('error', e => {
		h++; 
		if(h == 3){
			enlace2 = "https://www.aemet.es/imagenes_d/eltiempo/observacion/rayos/r78g_nodisp.gif";
		}else{
			hour = getNuevaHora(enlace, d, h);
		enlace2 = "https://www.aemet.es/imagenes_d/eltiempo/observacion/rayos/"+fecha+hour+"_r78g.gif";
		}
		
		document.getElementById('img-tormentas-aemet').src = enlace2;
	})
    
	
	// ----------------------------------- INFRARROJO - AEMET
    hora= getHora(d);

    enlace3 = "https://www.aemet.es/imagenes_d/eltiempo/observacion/satelite/"+fecha+hora+"_s93g.gif";
	$("#enlace-infrarrojo-aemet").attr("href",enlace3);
    $("#img-infrarrojo-aemet").attr("src",enlace3);
	// EVENTO ERROR EN LA IMAGEN
	h=0;
	document.getElementById('img-infrarrojo-aemet').addEventListener('error', e => {
		h++; 
		if(h == 3){
			enlace3 = "https://www.aemet.es/imagenes_d/eltiempo/observacion/satelite/s93g_nodisp.gif";
		}else{
			hour = getNuevaHora(enlace, d, h);
			enlace3 = "https://www.aemet.es/imagenes_d/eltiempo/observacion/satelite/"+fecha+hour+"_s93g.gif";
		}
		
		document.getElementById('img-infrarrojo-aemet').src = enlace3;
	})

    
	// ----------------------------------- MAPA FRENTES - AEMET
    var f = d.getFullYear() + 
        (month<10 ? '0' : '') + month + 
        (day<10 ? '0' : '') + (day-1);

    if(hora < '1300'){
        enlace = "https://www.aemet.es/imagenes_d/eltiempo/prediccion/mapa_frentes/"+f+"12+024_ww_g1x0a2d1.gif";
    }else{
        enlace = "https://www.aemet.es/imagenes_d/eltiempo/prediccion/mapa_frentes/"+f+"12+036_ww_g1x0a2d1.gif";        
    }
    $("#img-frentes-aemet").attr("src",enlace);

    
	// ----------------------------------- MAPA AVISOS - AEMET
    hora= getHora(d);
    enlace4 = "https://www.aemet.es/imagenes_d/eltiempo/prediccion/avisos/"+fecha+hora+"00_avi_hoy.png";
    $("#img-avisos-hoy-aemet").attr("src",enlace4);
	// EVENTO ERROR EN LA IMAGEN
	h=0;
	document.getElementById('img-avisos-hoy-aemet').addEventListener('error', e => {
		h++;
		if(h == 3){
			enlace4 = "./img/img-no-disponible.png";
		}else{
			hour = getNuevaHora(enlace4, d, h);
			enlace4 = "https://www.aemet.es/imagenes_d/eltiempo/prediccion/avisos/"+fecha+hour+"00_avi_hoy.png";
		}
		document.getElementById('img-avisos-hoy-aemet').src = enlace4;
	})
	

    hora= getHora(d);
    enlace5 = "https://www.aemet.es/imagenes_d/eltiempo/prediccion/avisos/"+fecha+hora+"00_avi_mna.png"; 
    $("#img-avisos-mna-aemet").attr("src",enlace5);
	// EVENTO ERROR EN LA IMAGEN
	h=0;
	document.getElementById('img-avisos-mna-aemet').addEventListener('error', e => {
		h++;
		if(h == 3){
			enlace5 = "./img/img-no-disponible.png";
		}else{
			hour = getNuevaHora(enlace5, d, h);
			enlace5 = "https://www.aemet.es/imagenes_d/eltiempo/prediccion/avisos/"+fecha+hour+"00_avi_mna.png"; 
		}
		document.getElementById('img-avisos-mna-aemet').src = enlace5;
	})

    hora= getHora(d);
    enlace6 = "https://www.aemet.es/imagenes_d/eltiempo/prediccion/avisos/"+fecha+hora+"00_avi_pmna.png";  
    $("#img-avisos-pmna-aemet").attr("src",enlace6);
	// EVENTO ERROR EN LA IMAGEN
	h=0;
	document.getElementById('img-avisos-pmna-aemet').addEventListener('error', e => {
		h++;
		if(h == 3){
			enlace6 = "./img/img-no-disponible.png";
		}else{
			hour = getNuevaHora(enlace6, d, h);
			enlace6 = "https://www.aemet.es/imagenes_d/eltiempo/prediccion/avisos/"+fecha+hour+"00_avi_pmna.png";  
		}
		
		document.getElementById('img-avisos-pmna-aemet').src = enlace6;
	})
}

cargarEnlaces();



//-------------------------------------------------------------------------------------------------
// Variables

let nav = document.getElementById('nav');
let menu = document.getElementById('enlaces');
let abrir = document.getElementById('open');
let botones = document.getElementsByClassName('btn-header');
let cerrado = true;

/* NAV */
function menus(){
    let Desplazamiento_Actual = window.pageYOffset;/* scroll */
    /* console.log(window.pageYOffset); */
    /* if(Desplazamiento_Actual <= 300){ */
    if(Desplazamiento_Actual <= 150){
        nav.classList.remove('nav2');
        nav.className = ('nav1');
        nav.style.transition = '1s';
        menu.style.top = '80px';
        abrir.style.color = '#fff';/* color icono hamburguesa blanco*/
    }else{
        nav.classList.remove('nav1');
        nav.className = ('nav2');
        nav.style.transition = '1s';
        menu.style.top = '100px';
        abrir.style.color = '#000';/* color icono hamburguesa negro*/
     }
}
/* Menú Hamburguesa */
function apertura(){
    if(cerrado){
        /* Muestra menú */
        menu.style.width = '70vw';
        cerrado = false;
    }else{
        /* Oculta menú */
        menu.style.width = '0%';
        menu.style.overflow = 'hidden';
        cerrado = true;
    }
}

/* Si se recarga la página para que controle si tiene que cambiar el menus() */
window.addEventListener('load', function(){
    $('#onload').fadeOut();/* Oculta el preloader */
    $('body').removeClass('hidden');/* Muestra la página */
    menus();
});
/* Controla sobre qué elemento se ha hecho click */
window.addEventListener('click',function(e){
    console.log(e.target);
    if(cerrado==false){/* Si el menú está abierto */
        let span = document.querySelector('span'); /* obtiene el primer span */
        /* con target se btiene el elmento que se hizo click */
        if(e.target !== span && e.target !== abrir){/* cierra el menú */
            menu.style.width = '0%';
            menu.style.overflow = 'hidden';
            cerrado = true;
        }
    }
});
/* Controla el scroll */
window.addEventListener('scroll', function(){
    /* console.log(window.pageYOffset); */
    menus();
});
/* Por si está en una tablet y cambia la orientación de vertical a orientación*/
window.addEventListener('resize', function(){
    if(screen.width>= 700){
        cerrado = true;
        menu.style.removeProperty('overflow');
        menu.style.removeProperty('width');
    }
});
/* Abrir cuando click en menú hamburguesa */
abrir.addEventListener('click', function(){
    apertura();
});

