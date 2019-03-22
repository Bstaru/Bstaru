
var API;
    API = "http://localhost:80/wspasolis_compiled";
    // API = "http://ws.moresoft.com:9018/wscontacto.asmx";
    // API = "http://localhost:52084";


//ABRIR VENTANA ARCHIVO (Para cuando se usa el atributo onclick en el HTML)
    function openFile(elemId) {
        var elem = document.getElementById(elemId);
       if(elem && document.createEvent) {
          var evt = document.createEvent("MouseEvents");
          evt.initEvent("click", true, false);
          elem.dispatchEvent(evt);
       }
    }

//idioma de las tablas
    var spanish = {
        "sProcessing": "Procesando...",
        "sLengthMenu": "Mostrar _MENU_ registros",
        "sZeroRecords": "No hemos encontrado resultados",
        "sEmptyTable": "Sin resultados",
        "sInfo": "Mostrando registros del _START_ al _END_ de un total de _TOTAL_ registros",
        "sInfoEmpty": "Mostrando registros del 0 al 0 de un total de 0 registros",
        "sInfoFiltered": "(filtrado de un total de _MAX_ registros)",
        "sInfoPostFix": "",
        "sSearch": "Buscar:",
        "sUrl": "",
        "sInfoThousands": ",",
        "sLoadingRecords": "Cargando...",
        "oPaginate": {
            "sFirst": "Primero",
            "sLast": "Último",            
            "sNext": "Siguiente",
            "sPrevious": "Anterior"
        },
        "buttons": {
            "create": "Crear",
            "edit": "Editar",
            "remove": "Quitar",
            "copy": "Copiar",
            "csv": "CSV",
            "excel": "<i class='mdi mdi-file-excel'></i>",
            "pdf": "PDF",
            "print": "<i class='mdi mdi-printer'></i>",
            "colvis": "Ver solo",
            "collection": "Colección",
            "upload": "Descargar"
        },
        "oAria": {
            "sSortAscending": ": Activar para ordenar la columna de manera ascendente",
            "sSortDescending": ": Activar para ordenar la columna de manera descendente"
        },
    }

//----------------------NAVBAR MOVIL-------------------//
    $(".navbar-nav li a").click(function(event) {
        $(".navbar-collapse").collapse('hide');
    });

var METODOS = function () {
    //---------------------LLENAR SELECTS-----------------------------
        this.FULLER_COMBO = function (COMBO_ID, DATA) {

            $('#' + COMBO_ID).empty();
            $.each(DATA, function (indx, obj) {

                if (obj.Nombre) { //nombre de algún campo
                    $('#' + COMBO_ID).append('<option value="' + obj.id + '">' + obj.Nombre + '</option>');
                }
            });

            $('#' + COMBO_ID).selectpicker('refresh');
        };
        this.FULLER_COMBO_NX = function (COMBO_ID, DATA, CAMPO_ID, CAMPO_DESC, DEFAULT_VAL) {
            //debugger
            $('#' + COMBO_ID).empty();
            var IDS = new Array();

            if (DEFAULT_VAL != undefined) {
                $('#' + COMBO_ID).append('<option value="' + DEFAULT_VAL[0] + '">' + DEFAULT_VAL[1] + '</option>');
            }


            $.each(DATA, function (indx, obj) {
                var bnd = true;
                $.each(IDS, function (indx_y, obj_y) {
                    //console.log(obj_y);
                    if (obj_y == obj[CAMPO_ID]) {
                        bnd = false;
                    }
                });

                if (bnd) {
                    $('#' + COMBO_ID).append('<option value="' + obj[CAMPO_ID] + '">' + obj[CAMPO_DESC] + '</option>');
                    IDS.push(obj[CAMPO_ID]);
                }

            });

            $('#' + COMBO_ID).selectpicker('refresh');
        };

    //---------------------FECHAS-------------------------------------
        this.FULLER_LEFT = function (Char, cantTTL, Cadena) {
            if(Cadena.length < cantTTL)        {
                var diff = cantTTL - Cadena.length;
                for(var i = 0; i< diff; i++)
                {
                    Cadena = Char + Cadena;
                }            
            }   
            return Cadena;
        };
        this.CAST_DATE = function (Fecha) {
            var milli = Fecha.replace(/\/Date\((-?\d+)\)\//, '$1');
            var d = new Date(parseInt(milli));

            var SP = '-';
            return d.getFullYear() + SP +
            			this.FULLER_LEFT('0', 2, (d.getMonth() + 1) + '') + SP +
            			this.FULLER_LEFT('0', 2, d.getDate() + '');
        };
        this.CAST_HOUR = function (Fecha) {
            var milli = Fecha.replace(/\/Date\((-?\d+)\)\//, '$1');
            var d = new Date(parseInt(milli));

            var SP = '/';
            Fecha = Fecha.split(' ', 1);
            Fecha = Fecha[0].split('/');

            return d.toLocaleTimeString(); //Fecha[2] + SP + Fecha[1] + SP + Fecha[0];		
        };
        this.GET_TODAY = function () {
            var today = new Date();
            var dd = today.getDate();
            var mm = today.getMonth() + 1; //January is 0!
            var yyyy = today.getFullYear();
            mm = (mm + '').length > 1 ? mm : '0' + mm;
            dd = (dd + '').length > 1 ? dd : '0' + dd;

            hoy = yyyy + '-' + mm + '-' + (dd);

            return hoy;
        };
        this.CAST_MONTHYEAR = function (Fecha) {
            var meses = new Array ("ENE","FEB","MAR","ABR","MAY","JUN","JUL","AGO","SEP","OCT","NOV","DIC");
            var milli = Fecha.replace(/\/Date\((-?\d+)\)\//, '$1');
            
            var d = new Date(parseInt(milli));
            
            return meses [d.getMonth()] + ' ' + d.getFullYear();                    
        };
        this.GET_WEEK = function () {
            var d = new Date();
            d.setHours(0, 0, 0, 0);
            d.setDate(d.getDate() + 4 - (d.getDay() || 7));
            return Math.ceil((((d - new Date(d.getFullYear(), 0, 1)) / 8.64e7) + 1) / 7);
        };
    
    //---------------------COMAS--------------------------------------
        this.COMMA = function (x) {
            return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
        };
  
    //---------------------VARIABLE EN LA URL-------------------------
        this.GET_URL_PARAM = function(sParam) {
            var sPageURL = decodeURIComponent(window.location.search.substring(1)),
                sURLVariables = sPageURL.split('&'),
                sParameterName,
                i;

            for (i = 0; i < sURLVariables.length; i++) {
                sParameterName = sURLVariables[i].split('=');

                if (sParameterName[0] === sParam) {
                    return sParameterName[1] === undefined ? true : sParameterName[1];
                }
            }
        };
  
    //---------------------CAMBIAR NOMBRE ARCHIVO INPUT---------------
        this.CHANGE_PATH = function(inp,txt){
            var filename = inp.replace(/^.*\\/, "");
            txt.val(filename);
        };
   
    //---------------------ABRIR VENTANA DE ARCHIVO-------------------
        this.OPEN_FILE = function openFile(elemId) {
           var elem = document.getElementById(elemId);
           if(elem && document.createEvent) {
              var evt = document.createEvent("MouseEvents");
              evt.initEvent("click", true, false);
              elem.dispatchEvent(evt);
           }
        };

    //--------------------ANIMACIONES---------------------------------
        this.Hide = function (sec,claseAnim){
            if (claseAnim == "fade") {
                for (var i = 0; i < sec.length; i++) {
                    $(sec[i]).addClass('fadeOut').removeClass('fadeIn');
                } 
            }
            else if (claseAnim == "bounce") {
                for (var i = 0; i < sec.length; i++) {
                    $(sec[i]).addClass('bounceOut').removeClass('bounceIn');
                } 
            }
                          
            }
        this.Show = function (secH, secS,claseAnim){
            if (claseAnim == "fade") {
                setTimeout(function(){
                    for (var i = 0; i < secH.length; i++) {
                        $(secH[i]).addClass('elem_hide');
                    }   
                    // seccion a mostrar
                    for (var i = 0; i < secS.length; i++) {
                        $(secS[i]).removeClass('elem_hide').addClass('fadeIn').removeClass('fadeOut');
                    }   
                },800);
            }
            else if (claseAnim == "bounce") {
                setTimeout(function(){
                    for (var i = 0; i < secH.length; i++) {
                        $(secH[i]).addClass('elem_hide');
                    }   
                    // seccion a mostrar
                    for (var i = 0; i < secS.length; i++) {
                        $(secS[i]).removeClass('elem_hide').addClass('bounceIn').removeClass('bounceOut');
                    }   
                },800); 
            }        
        } 
        //para poner la linea en la seccion correspondiente
        this.ChangeLine = function (add,rev,clase){
            for (var i = 0; i < rev.length; i++) {
                $(rev[i]).removeClass(clase);
            }
            add.addClass(clase);
        }
   
}

$(document).ready(function(){
    $(".onlyletters").keypress(function (key) {        
        if ((key.charCode < 97 || key.charCode > 122)//letras mayusculas
            && (key.charCode < 65 || key.charCode > 90) //letras minusculas
            && (key.charCode != 45) //retroceso
            && (key.charCode != 241) //ñ
            && (key.charCode != 209) //Ñ
            && (key.charCode != 32) //espacio
            && (key.charCode != 225) //á
            && (key.charCode != 233) //é
            && (key.charCode != 237) //í
            && (key.charCode != 243) //ó
            && (key.charCode != 250) //ú
            && (key.charCode != 193) //Á
            && (key.charCode != 201) //É
            && (key.charCode != 205) //Í
            && (key.charCode != 211) //Ó
            && (key.charCode != 218) //Ú
        )        
        return false;
    });
    $(".onlynumbers").keypress(function (key) {        
        if(key.charCode < 48 || key.charCode > 57) return false;       
    });
    $(".onlyMoney").keypress(function (key) {        
        if((key.charCode < 48 || key.charCode > 57) && key.charCode != 46) return false;       
    });
    $('.onlyTels').mask('000-000-0000');
    $('.onlyDate').mask('0000-00-00');
    $('.onlyMails').mask(
        "A", { translation: {
            "A": { pattern: /[\w@\-.+]/, recursive: true }
        }
    });
});