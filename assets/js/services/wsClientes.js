var MTDS = new METODOS(); 
var dta_Clis;

function EditCliente(attrID){
    var str = attrID.split("-");
    var ID = str[1];

    $.each(dta_Clis, function (index, value) {
        // console.log(value);
        //FALTA QUE EL CAMPO SUCURSAL LO CARGUE BIEN
        if (value.Id_Cliente == ID) {
            $('#Namecliente').text(value.Nombre);

            $('#CLINOMBRE_EDIT').val( value.Nombre);
			$('#CLIAP_EDIT').val(value.ApePat);
			$('#CLIAM_EDIT').val(value.ApeMat);
			
			if (value.Genero == true) { $('#CLIGENERO_EDIT').val(1); }
			else{ $('#CLIGENERO_EDIT').val(0); }
			$('#CLIGENERO_EDIT').change();

			$('#CLIFECNAC_EDIT').datepicker({
			    language: "es",
			    format: "yyyy-mm-dd",
			    clearBtn: true,
			    orientation: "top auto",
			    autoclose: true
			});
			var fecha = value.FecNac.split('T');
			$('#CLIFECNAC_EDIT').val(fecha[0]);

			$('#CLIRFC_EDIT').val(value.RFC);
			$('#CLIHCL_EDIT').val(value.Homoclave);
			$('#CLIPAISNAC_EDIT').val(value.PaisNac);

			if (value.Nacionalidad == 'Mexicano') { $('#CLINACIONALIDAD_EDIT').val(1); }
			else{ $('#CLINACIONALIDAD_EDIT').val(2); }
			$('#CLINACIONALIDAD_EDIT').change();

			$('#CLITELCEL_EDIT').val(value.TelCel);
			$('#CLICORR_EDIT').val(value.Correo);
			$('#CLINUEXT_EDIT').val(value.CalleNoExt);
			$('#CLICLLNO_EDIT').val(value.NoInt);
			$('#CLICP_EDIT').val(value.CodPostal);

			var idEd = get_idEdo(value.Estado);
			$('#CLIEDO_EDIT').val(idEd);
			$('#CLIEDO_EDIT').change();
			get_municipios(value.Estado,'#CLIMUNICIPIO_EDIT');
			get_sucursales(value.Estado,'#CLISUCURSAL_EDIT', function(){
				$('#CLISUCURSAL_EDIT').val(value.Sucursal_Id);
				$('#CLISUCURSAL_EDIT').change();
			});

			$('#CLIMUNICIPIO_EDIT').val(value.Municipio);
			$('#CLIMUNICIPIO_EDIT').change();   			

			$('#CLICOL_EDIT').val(value.Colonia);
			$('#CLITIPOVIV_EDIT').val(value.TipoViv);
			$('#CLITIPOVIV_EDIT').change();
			$('#CLITELCASA_EDIT').val(value.TelCasa);


			$('#CLITRABACT_EDIT').val(value.NomTrabajoAct);
			$('#CLINUMANT_EDIT').val(value.TelTrabajo);
			$('#CLIFUENTEING_EDIT').val(value.Fuente_Id);
			$('#CLIFUENTEING_EDIT').change();

            $('#GUARDAR_EDITCLIENTE').attr('idSave',ID);
        }
        $('#Modal_EditCli').modal('toggle');       
    });
}
function DeleteCliente(attrID){
    var str = attrID.split("-");
    var ID = str[1];
    $.each(dta_Clis, function (index, value) {
        if (value.Id_Cliente == ID) {
            // console.log(value.Nombre +' '+ value.ApePat +' '+ value.ApeMat);
            $('#NomClienteD').text(value.Nombre +' '+ value.ApePat +' '+ value.ApeMat);
            $('#ELIMINAR_CLIENTE').attr('idSave',ID);
        }
        $('#Modal_DeleteCliente').modal('toggle');       
    });
}

$(document).ready(function(){     

	//-----SERVICIOS
		var WS_FUENTEINGRESOS = function () {
            var THIS = this;
            this.DTA;
            this.ARR_0 = new Array();

            this.RUN = function (callback) {

                try {
                    callback();
                }
                catch (ex) {
                    //console.log(ex);
                    //console.log('NO CALLBACK');
                }
            };
            this.SELECT = function (callback) {
                var param = {};

                $.ajax({
                    method: "GET",
                    url: API + "/api/Ingresos/Select",
                    data: param,
                    contentType: "application/x-www-form-urlencoded",
                    dataType: "json",
                    complete: function (data) { },
                    success: function (data) {
                        THIS.DTA = (data);                   
                        //THIS.DATA_0();
                        THIS.RUN(callback(THIS.DTA));
                        // console.log(data);
                    },
                    error: function (e) {
                        console.log(e);
                        if (e.statusText == "Unauthorized") {
                            KillSession();
                        }
                    }
                });
            };
            this.INIT_TABLE = function () {
                THIS.SELECT(function (data) {
                    MTDS.FULLER_COMBO_NX('CLIFUENTEING', THIS.DTA, 'Id_Fuente', 'Tipo', [0, 'Fuente de Ingresos']);
                    MTDS.FULLER_COMBO_NX('CLIFUENTEING_EDIT', THIS.DTA, 'Id_Fuente', 'Tipo', [0, 'Fuente de Ingresos']);
                });
            };
		};
		var WS_CLIENTES = function () {
            var THIS = this;
            this.DTA;
            this.ARR_0 = new Array();

            this.RUN = function (callback) {

                try {
                    callback();
                }
                catch (ex) {
                    //console.log(ex);
                    //console.log('NO CALLBACK');
                }
            };
            this.INSERT = function (callback,Nombre,ApePat,ApeMat,Genero,FecNac,RFC,Homoclave,PaisNac,Nacionalidad,
            	TelCel,Correo,CalleNoExt,NoInt,CodPostal,Estado,Municipio,Colonia,TipoViv,TelCasa,Sucursal_Id,
            	NomTrabajoAct,TelTrabajo,Fuente_Id){
                var param = {
                			Nombre:Nombre,
                			ApePat:ApePat,
                			ApeMat:ApeMat,
                			Genero:Genero,
                			FecNac:FecNac,
                			RFC:RFC,
                			Homoclave:Homoclave,
                			PaisNac:PaisNac,
                			Nacionalidad:Nacionalidad,
			            	TelCel:TelCel,
			            	Correo:Correo,
			            	CalleNoExt:CalleNoExt,
			            	NoInt:NoInt,
			            	CodPostal:CodPostal,
			            	Estado:Estado,
			            	Municipio:Municipio,
			            	Colonia:Colonia,
			            	TipoViv:TipoViv,
			            	TelCasa:TelCasa,
			            	Sucursal_Id:Sucursal_Id,
			            	NomTrabajoAct:NomTrabajoAct,
			            	TelTrabajo:TelTrabajo,
			            	Fuente_Id:Fuente_Id 	
                			};
                $.ajax({
                    method: "POST",
                    url: API + "/api/Clientes/Insert",
                    data: param,
                    contentType: "application/x-www-form-urlencoded",
                    dataType: "json",
                    complete: function (data) { },
                    success: function (data) {
                        THIS.DTA = (data);    
                        THIS.RUN(callback(THIS.DTA));
                        if (data.Description == 'EXISTE') {
                        	// console.log('e ya')
                        	$('.MSG_TITLE').html('¡Espera! <i class="mdi mdi-alert" style="font-size:18pt;color: #eed01e;"></i>');
	            			$('.MSG_BODY').html('<p>El cliente ya existe.</p>');        
	            			$('#Modal_Save').modal('toggle'); 
                        }
                        else{
                        	$('.MSG_TITLE').html('Datos Guardados <i class="mdi mdi-check-check" style="font-size:18pt;color: green;"></i>');
	            			$('.MSG_BODY').html('<p>El cliente se ha guardado con éxito.</p>');        
	            			$('#Modal_Save').modal('toggle'); 
                        }
                    },
                    error: function (e) {                        
                        console.log(e);
                        if (e.statusText == "Unauthorized") {
                            KillSession();
                        }
                    }
                });
            };
            this.SELECT = function (callback) {
                var param = {};

                $.ajax({
                    method: "GET",
                    url: API + "/api/Clientes/Select",
                    data: param,
                    contentType: "application/x-www-form-urlencoded",
                    dataType: "json",
                    complete: function (data) { },
                    success: function (data) {
                        THIS.DTA = (data);  
                        THIS.RUN(callback(THIS.DTA));
                        // console.log(data);
                        dta_Clis = data;
                    },
                    error: function (e) {
                        console.log(e);
                        if (e.statusText == "Unauthorized") {
                            KillSession();
                        }
                    }
                });
            };
            this.UPDATE = function (callback,Id_Cliente,Nombre,ApePat,ApeMat,Genero,FecNac,RFC,Homoclave,PaisNac,Nacionalidad,
            	TelCel,Correo,CalleNoExt,NoInt,CodPostal,Estado,Municipio,Colonia,TipoViv,TelCasa,Sucursal_Id,
            	NomTrabajoAct,TelTrabajo,Fuente_Id){
                var param = {
                			Id_Cliente:Id_Cliente,
                			Nombre:Nombre,
                			ApePat:ApePat,
                			ApeMat:ApeMat,
                			Genero:Genero,
                			FecNac:FecNac,
                			RFC:RFC,
                			Homoclave:Homoclave,
                			PaisNac:PaisNac,
                			Nacionalidad:Nacionalidad,
			            	TelCel:TelCel,
			            	Correo:Correo,
			            	CalleNoExt:CalleNoExt,
			            	NoInt:NoInt,
			            	CodPostal:CodPostal,
			            	Estado:Estado,
			            	Municipio:Municipio,
			            	Colonia:Colonia,
			            	TipoViv:TipoViv,
			            	TelCasa:TelCasa,
			            	Sucursal_Id:Sucursal_Id,
			            	NomTrabajoAct:NomTrabajoAct,
			            	TelTrabajo:TelTrabajo,
			            	Fuente_Id:Fuente_Id 	
                			};
                $.ajax({
                    method: "PUT",
                    url: API + "/api/Clientes/Update",
                    data: param,
                    contentType: "application/x-www-form-urlencoded",
                    dataType: "json",
                    complete: function (data) { },
                    success: function (data) {
                        THIS.DTA = (data);    
                        THIS.RUN(callback(THIS.DTA));
                    },
                    error: function (e) {
                        console.log(e);
                        if (e.statusText == "Unauthorized") {
                            KillSession();
                        }
                    }
                });
            };
            this.DELETE = function (callback,Id_Cliente) {
                var param = {Id_Cliente: Id_Cliente};

                $.ajax({
                    method: "DELETE",
                    url: API + "/api/Clientes/Delete",
                    data: param,
                    contentType: "application/x-www-form-urlencoded",
                    dataType: "json",
                    complete: function (data) { },
                    success: function (data) {
                        THIS.DTA = (data);                   
                        //THIS.DATA_0();
                        THIS.RUN(callback(THIS.DTA));
                        // console.log(data);
                    },
                    error: function (e) {
                        console.log(e);
                        if (e.statusText == "Unauthorized") {
                            KillSession();
                        }
                    }
                });
            };
            this.INIT_TABLE = function () {
                THIS.SELECT(function (data) {
                	$('#table_clientes').DataTable({
                        language: spanish,
                        searching: true,
                        destroy: true,
                        info: false,
                        pageLength: 10,
                        paging: true,
                        scrollX: true,
                        LengthChange: true,
                        data: data,
                        columns: [
                            // { data: 'Nombre' },
                            {
                                "mData": null,
                                "bSortable": false,
                                "mRender": function (o) { 
                                    return o.Nombre + ' ' + o.ApePat + ' ' + o.ApeMat;
                                }
                            },
                            // { data: 'FecNac' },
                            {
                                "mData": null,
                                "bSortable": false,
                                "mRender": function (o) { 
                                	var fecha = o.FecNac.split('T');
                                    return fecha[0];
                                }
                            },
                            { data: 'RFC' },
                            { data: 'Homoclave' },
                            { data: 'PaisNac' },
                            { data: 'TelCel' },
                            { data: 'Correo' },
                            // { data: 'Direccion ' },
                            {
                                "mData": null,
                                "bSortable": false,
                                "mRender": function (o) { 
                                	if (o.NoInt!='N/A') {
	                                    return o.CalleNoExt + ' -' + o.NoInt + ' ' + o.Colonia; 
	                                }
	                                else{
	                                    return o.CalleNoExt + ' ' + o.Colonia; 
	                                }
                                }
                            },
                            { data: 'CodPostal' },
                            { data: 'Municipio' },
                            { data: 'Estado' },
                            { data: 'TipoViv' },
                            { data: 'TelCasa' },
                            { data: 'NomTrabajoAct' },
                            { data: 'TelTrabajo' },
                            { data: 'FuenteIng' },
                            {
                                "mData": null,
                                "bSortable": false,
                                "mRender": function (o) { 
                                    return '<button class="btn-edit" id="IdEdit-'+o.Id_Cliente
                                    +'" onClick="EditCliente($(this).attr(\'id\'));"><i class="mdi mdi-pencil"></i></button>'
                                    + '<button class="btn-delete" id="IdEditD-'+o.Id_Cliente
                                    +'" onClick="DeleteCliente($(this).attr(\'id\'));" ><i class="mdi mdi-delete"></i></button>';  
                                	
                                }
                            }                            
                        ]
                    });
                });
            };
		};

	var wsFuenteIngresos = new WS_FUENTEINGRESOS();
	var wsClientes = new WS_CLIENTES();
	wsFuenteIngresos.INIT_TABLE();
	wsClientes.INIT_TABLE();

	function CallTable(){
		wsClientes.SELECT(function (data) {
        	$('#table_clientes').DataTable({
                language: spanish,
                searching: true,
                destroy: true,
                info: false,
                pageLength: 10,
                paging: true,
                scrollX: true,
                LengthChange: true,
                data: data,
                columns: [
                    // { data: 'Nombre' },
                    {
                        "mData": null,
                        "bSortable": false,
                        "mRender": function (o) { 
                            return o.Nombre + ' ' + o.ApePat + ' ' + o.ApeMat;
                        }
                    },
                    // { data: 'FecNac' },
                    {
                        "mData": null,
                        "bSortable": false,
                        "mRender": function (o) { 
                        	var fecha = o.FecNac.split('T');
                            return fecha[0];
                        }
                    },
                    { data: 'RFC' },
                    { data: 'Homoclave' },
                    { data: 'PaisNac' },
                    { data: 'TelCel' },
                    { data: 'Correo' },
                    // { data: 'Direccion ' },
                    {
                        "mData": null,
                        "bSortable": false,
                        "mRender": function (o) { 
                            if (o.NoInt!='N/A') {
                                return o.CalleNoExt + ' -' + o.NoInt + ' ' + o.Colonia; 
                            }
                            else{
                                return o.CalleNoExt + ' ' + o.Colonia; 
                            }
                        }
                    },
                    { data: 'CodPostal' },
                    { data: 'Municipio' },
                    { data: 'Estado' },
                    { data: 'TipoViv' },
                    { data: 'TelCasa' },
                    { data: 'NomTrabajoAct' },
                    { data: 'TelTrabajo' },
                    { data: 'FuenteIng' },
                    {
                        "mData": null,
                        "bSortable": false,
                        "mRender": function (o) { 
                            return '<button class="btn-edit" id="IdEdit-'+o.Id_Cliente
                            +'" onClick="EditCliente($(this).attr(\'id\'));"><i class="mdi mdi-pencil"></i></button>'
                            + '<button class="btn-delete" id="IdEditD-'+o.Id_Cliente
                            +'" onClick="DeleteCliente($(this).attr(\'id\'));" ><i class="mdi mdi-delete"></i></button>'; 
                        	
                        }
                    }                            
                ]
            });
        });
	}

	// VARS PARA RFC
		var RFC = ['', '', '','', '', ''];
		function CheckRFC(input){
			$(input).val('');
			var FinalRFC = '';
			$.each(RFC, function (index, value) {
				if (value == '' || value == undefined) {
					FinalRFC += '';
				}
				else
					FinalRFC += value;
			});
			$(input).val(FinalRFC);
		}
		function getFirstLetter(dto){
			return dto.substring(0,1);
		}	
		function vowel_count(str){
			var vowel_list = 'aeiouAEIOU';
	  		var theVowel = '';
			for(var x = 1; x < str.length ; x++) {
			    if (vowel_list.indexOf(str[x]) !== -1) {
			      theVowel = str[x];
			      break;
			    }			  
			}
			return theVowel 
		}

	// PANTALLA REGISTRO DE CLIENTES

		$('#CLIFECNAC').datepicker({
		    language: "es",
		    format: "yyyy-mm-dd",
		    clearBtn: true,
		    orientation: "top auto",
		    autoclose: true
		});

		//RFC STUUFFF----------------------------	
			
			$('#CLINOMBRE').on('change',function(){
				var L = getFirstLetter($(this).val());
				RFC[2] = L; 
				CheckRFC('#CLIRFC');
			});
			$('#CLIAP').on('change',function(){
				var L = getFirstLetter($(this).val());
				var V = vowel_count($(this).val());
				RFC[0] = (L+V); 
				CheckRFC('#CLIRFC');
			});
			$('#CLIAM').on('change',function(){
				var L = getFirstLetter($(this).val());
				RFC[1] = L; 
				CheckRFC('#CLIRFC');
			});
			$('#CLIFECNAC').on('change',function(){
				var Fecha = $(this).val().split('-');
				var Y = Fecha[0].substr( Fecha[0].length -2); //4
				var M = Fecha[1]; //5
				var D = Fecha[2]; //6
				RFC[3] = Y; 
				RFC[4] = M; 
				RFC[5] = D; 
				CheckRFC('#CLIRFC');
			});

		$('#CLIEDO').on('change',function(){
			var idEdo = $(this).val();
			var Estado = $("#CLIEDO option:selected" ).text();
			get_municipios(Estado,'#CLIMUNICIPIO');
   			get_sucursales(Estado,'#CLISUCURSAL',function(){});
		});

		$('#REGCLIENTE').on('click',function(){
			
			var Nombre 			= $('#CLINOMBRE').val();
			var ApePat 			= $('#CLIAP').val();
			var ApeMat 			= $('#CLIAM').val();
			var Genero 			= $('#CLIGENERO').val();
			var FecNac 			= $('#CLIFECNAC').val();
			var RFC 			= $('#CLIRFC').val().toUpperCase();
			var Homoclave 		= $('#CLIHCL').val().toUpperCase();
			var PaisNac 		= $('#CLIPAISNAC').val();
			var Nacionalidad 	= $('#CLINACIONALIDAD option:selected' ).text();
			var TelCel 			= $('#CLITELCEL').val();
			var Correo 			= $('#CLICORR').val();
			var Correo2 		= $('#CLICORR2').val();

			var CalleNoExt 		= $('#CLICLLNO').val();
			var NoInt 			= $('#CLINUEXT').val(); if (NoInt == "") { NoInt = "N/A"}
			var CodPostal 		= $('#CLICP').val();
			var Estado 			= $('#CLIEDO option:selected' ).text();

			var Municipio 		= $('#CLIMUNICIPIO').val();
			var Colonia 		= $('#CLICOL').val();
			var TipoViv 		= $('#CLITIPOVIV').val();
			var TelCasa 		= $('#CLITELCASA').val();
			var Sucursal_Id 	= $('#CLISUCURSAL').val();

			var NomTrabajoAct 	= $('#CLITRABACT').val();
			var TelTrabajo 		= $('#CLINUMANT').val();
			var Fuente_Id 		= $('#CLIFUENTEING').val();
			

			wsClientes.INSERT(function (data) {

			},Nombre,ApePat,ApeMat,Genero,FecNac,RFC,Homoclave,PaisNac,Nacionalidad,TelCel,Correo,CalleNoExt,NoInt,CodPostal,
				Estado,Municipio,Colonia,TipoViv,TelCasa,Sucursal_Id,NomTrabajoAct,TelTrabajo,Fuente_Id);
			RFC = ['', '', '','', '', ''];
		});

        $('#ELIMINAR_CLIENTE').on('click',function(){     
            var Id_Cliente = $('#ELIMINAR_CLIENTE').attr('idSave');
            
            wsClientes.DELETE(function (data) {
                $('#Modal_DeleteCliente').modal('hide');           
                $('#Modal_Save').modal('toggle');
                $('.MSG_TITLE').html('Cliente eliminado <i class="mdi mdi-check-circle" style="font-size:18pt;color: green;"></i>');
                $('.MSG_BODY').html('<p>El Cliente ha sido eliminado.</p>');        
                $('#Modal_Save').modal('toggle');              
                CallTable();
            }, Id_Cliente);  
        });

	// PANTALLA EDITAR CLIENTES
		//RFC STUUFFF 2----------------------------
			$('#CLINOMBRE_EDIT').on('change',function(){
				var L = getFirstLetter( $(this).val() );
				RFC[2] = L; 
				CheckRFC('#CLIRFC_EDIT');
			});
			$('#CLIAP_EDIT').on('change',function(){
				var L = getFirstLetter($(this).val());
				var V = vowel_count($(this).val());
				RFC[0] = (L+V); 
				CheckRFC('#CLIRFC_EDIT');
			});
			$('#CLIAM_EDIT').on('change',function(){
				var L = getFirstLetter($(this).val());
				RFC[1] = L; 
				CheckRFC('#CLIRFC_EDIT');
			});
			$('#CLIFECNAC_EDIT').on('change',function(){
				var Fecha = $(this).val().split('-');
				var Y = Fecha[0].substr( Fecha[0].length -2); //4
				var M = Fecha[1]; //5
				var D = Fecha[2]; //6
				RFC[3] = Y; 
				RFC[4] = M; 
				RFC[5] = D; 
				CheckRFC('#CLIRFC_EDIT');			
			});

		$('#CLIEDO_EDIT').on('change',function(){
			var idEdo = $(this).val();
			var Estado = $("#CLIEDO_EDIT option:selected" ).text();
			get_municipios(Estado,'#CLIMUNICIPIO_EDIT');
	   		get_sucursales(Estado,'#CLISUCURSAL_EDIT');
		});
			
		$('#GUARDAR_EDITCLIENTE').on('click',function(){
			var Id_Cliente = $('#GUARDAR_EDITCLIENTE').attr('idSave');

			var Nombre 			= $('#CLINOMBRE_EDIT').val();
			var ApePat 			= $('#CLIAP_EDIT').val();
			var ApeMat 			= $('#CLIAM_EDIT').val();
			var Genero 			= $('#CLIGENERO_EDIT').val();
			var FecNac 			= $('#CLIFECNAC_EDIT').val();
			var RFC 			= $('#CLIRFC_EDIT').val().toUpperCase();
			var Homoclave 		= $('#CLIHCL_EDIT').val().toUpperCase();
			var PaisNac 		= $('#CLIPAISNAC_EDIT').val();
			var Nacionalidad 	= $('#CLINACIONALIDAD_EDIT option:selected' ).text();
			var TelCel 			= $('#CLITELCEL_EDIT').val();
			var Correo 			= $('#CLICORR_EDIT').val();
 
			var CalleNoExt 		= $('#CLINUEXT_EDIT').val();
			var NoInt 			= $('#CLICLLNO_EDIT').val(); if (NoInt == "") { NoInt = "N/A"}
			var CodPostal 		= $('#CLICP_EDIT').val();
			var Estado 			= $('#CLIEDO_EDIT option:selected' ).text();
 
			var Municipio 		= $('#CLIMUNICIPIO_EDIT').val();
			var Colonia 		= $('#CLICOL_EDIT').val();
			var TipoViv 		= $('#CLITIPOVIV_EDIT').val();
			var TelCasa 		= $('#CLITELCASA_EDIT').val();
			var Sucursal_Id 	= $('#CLISUCURSAL_EDIT').val();

			var NomTrabajoAct 	= $('#CLITRABACT_EDIT').val();
			var TelTrabajo 		= $('#CLINUMANT_EDIT').val();
			var Fuente_Id 		= $('#CLIFUENTEING_EDIT').val(); 

			// console.log(Id_Cliente,Nombre,ApePat,ApeMat,Genero,FecNac,RFC,Homoclave,PaisNac,Nacionalidad,
	  		// 		          	TelCel,Correo,CalleNoExt,NoInt,CodPostal,Estado,Municipio,Colonia,TipoViv,TelCasa,Sucursal_Id,
	  		// 		          	NomTrabajoAct,TelTrabajo,Fuente_Id); 
			wsClientes.UPDATE(function (data) {
				$('#Modal_EditCli').modal('hide');   
	            $('.MSG_TITLE').html('Datos Guardados <i class="mdi mdi-check-circle" style="font-size:18pt;color: green;"></i>');
	            $('.MSG_BODY').html('<p>El cliente se ha modificado.</p>');        
	            $('#Modal_Save').modal('toggle');           
	            CallTable();
			},Id_Cliente,Nombre,ApePat,ApeMat,Genero,FecNac,RFC,Homoclave,PaisNac,Nacionalidad,TelCel,Correo,CalleNoExt,NoInt,CodPostal,
				Estado,Municipio,Colonia,TipoViv,TelCasa,Sucursal_Id,NomTrabajoAct,TelTrabajo,Fuente_Id);

			RFC = ['', '', '','', '', ''];

		});


});