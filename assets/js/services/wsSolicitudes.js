var MTDS = new METODOS(); 
var dta_Solis;

function EditSolis(attrID){
    var str = attrID.split("-");
    var ID = str[1];

    $.each(dta_Solis, function (index, value) {
        //FALTA QUE EL CAMPO SUCURSAL LO CARGUE BIEN
        if (value.Id_Solicitud == ID) {
            $('#NUMFOLIO').text(value.Id_Solicitud);

            $('#ESTATUS_SOL').val(value.Estatus_Id).change();

            if (value.ResolucionFinal != 'N/A') {
            	$('#RESFINAL_SOL').val(value.ResolucionFinal).change();
            }

            $('#COMENTARIOS_SOL').val(value.Comentarios);

            $('#FECHA_SOL').datepicker({
			    language: "es",
			    format: "yyyy-mm-dd",
			    clearBtn: true,
			    orientation: "top auto",
			    autoclose: true
			});
			var fecha = value.FecAct.split('T');
			if (fecha[0] == '1990-09-09') {
        		$('#FECHA_SOL').val('--');
        	}
        	else{
            	$('#FECHA_SOL').val(fecha);
        	}

            if (value.Id_SucFinal != 'N/A') {
            	$('#SUCURSALES_SOL').val(value.Id_SucFinal).change();
            }

            $('#CUENTA_SOL').val(value.Cuenta);

			$('#FECHAAP_SOL').datepicker({
			    language: "es",
			    format: "yyyy-mm-dd",
			    clearBtn: true,
			    orientation: "top auto",
			    autoclose: true
			});
			var fechaP = value.FecApertura.split('T');
			if (fechaP[0] == '1990-09-09') {
        		$('#FECHAAP_SOL').val('--');
        	}
        	else{
            	$('#FECHAAP_SOL').val(fechaP);
        	}

        	$('#MONTO_SOL').val(value.Monto);

        	if (value.Motivo != 'N/A') {
            	$('#MOTIVO_SOL').val(value.Motivo).change();
            }

            $('#GUARDAR_EDITSOLI').attr('idSave',ID);
        }
        $('#Modal_EditSol').modal('toggle');       
    });
}

$(document).ready( function () {
    
    var UserData =  leer_sess();

	$('#RANGOINI').datepicker({
	    language: "es",
	    format: "yyyy-mm-dd",
	    clearBtn: true,
	    orientation: "top auto",
	    autoclose: true,
	    orientation: "bottom auto"
	});
	$('#RANGOFIN').datepicker({
	    language: "es",
	    format: "yyyy-mm-dd",
	    clearBtn: true,
	    orientation: "top auto",
	    autoclose: true,
	    orientation: "bottom auto"
	});
   
	var WS_SOLICITUDES = function () {
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
        this.UPDATE = function (callback,Id_Solicitud,Estatus_Id,ResFinal_Id,Comentarios,FecAct,SucFinal_Id,Cuenta,FecApertura,Monto,Motivo_Id){
            var param = {
            			Id_Solicitud:Id_Solicitud,
            			Estatus_Id:Estatus_Id,
            			ResFinal_Id:ResFinal_Id,
            			Comentarios:Comentarios,
            			FecAct:FecAct,
            			SucFinal_Id:SucFinal_Id,
            			Cuenta:Cuenta,
            			FecApertura:FecApertura,
            			Monto:Monto,
            			Motivo_Id:Motivo_Id
            			};
            $.ajax({
                method: "PUT",
                url: API + "/api/Solicitudes/Update",
                data: param,
                contentType: "application/x-www-form-urlencoded",
                dataType: "json",
                complete: function (data) { },
                success: function (data) {
                    THIS.DTA = (data);    
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
        this.SELECT = function (callback) {
            var param = {};

            $.ajax({
                method: "GET",
                url: API + "/api/Solicitudes/Select",
                data: param,
                contentType: "application/x-www-form-urlencoded",
                dataType: "json",
                complete: function (data) { },
                success: function (data) {
                    THIS.DTA = (data);  
                    THIS.RUN(callback(THIS.DTA));
                    // console.log(data);
                    dta_Solis = data;
                },
                error: function (e) {
                    console.log(e);
                    if (e.statusText == "Unauthorized") {
                        KillSession();
                    }
                }
            });
        };
        this.SELECT_BY_EDO = function (callback,EDO) {
            var param = {EDO:EDO};

            $.ajax({
                method: "GET",
                url: API + "/api/Solicitudes/Select",
                data: param,
                contentType: "application/x-www-form-urlencoded",
                dataType: "json",
                complete: function (data) { },
                success: function (data) {
                    THIS.DTA = (data);  
                    THIS.RUN(callback(THIS.DTA));
                    // console.log(data);
                    dta_Solis = data;
                },
                error: function (e) {
                    console.log(e);
                    if (e.statusText == "Unauthorized") {
                        KillSession();
                    }
                }
            });
        };
        this.SELECT_BY_FECHAS = function (callback,FecSolicitud_ini,FecSolicitud_fin,Sucursal_Id) {
            var param = {FecSolicitud_ini:FecSolicitud_ini,FecSolicitud_fin:FecSolicitud_fin,Sucursal_Id:Sucursal_Id};

            $.ajax({
                method: "GET",
                url: API + "/api/Solicitudes/Select",
                data: param,
                contentType: "application/x-www-form-urlencoded",
                dataType: "json",
                complete: function (data) { },
                success: function (data) {
                    THIS.DTA = (data);  
                    THIS.RUN(callback(THIS.DTA));
                    // console.log(data);
                    dta_Solis = data;
                },
                error: function (e) {
                    console.log(e);
                    if (e.statusText == "Unauthorized") {
                        KillSession();
                    }
                }
            });
        };
        this.SELECT_BY_SUC = function (callback,Sucursal_Id) {
            var param = {Sucursal_Id:Sucursal_Id};

            $.ajax({
                method: "GET",
                url: API + "/api/Solicitudes/Select",
                data: param,
                contentType: "application/x-www-form-urlencoded",
                dataType: "json",
                complete: function (data) { },
                success: function (data) {
                    THIS.DTA = (data);  
                    THIS.RUN(callback(THIS.DTA));
                    // console.log(data);
                    dta_Solis = data;
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
            	$('#table_solis').DataTable({
            		dom: 'Bfrtip',
            		buttons: [
				        'colvis',
				        'excel',
				        'print'
				    ],
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
                        { data: 'Id_Solicitud' },
                        {
                            "mData": null,
                            "bSortable": false,
                            "mRender": function (o) { 
                            	var fecha = o.FecSolicitud.split('T');
                                return fecha[0];
                            }
                        },
                        { data: 'Cliente' },
                        { data: 'Sucursal' },
                        { data: 'DistrictCode' },
                        { data: 'Region' },
                        {
                            "mData": null,
                            "bSortable": false,
                            "mRender": function (o) { 
                            	var spn = '';
                            	switch(o.Estatus){
                            		case "Proceso":   
                            			spn = '<span class="spn proc">'+o.Estatus+'</span>';
                            			break;
                            		case "Reasignación":   
                            			spn = '<span class="spn reas">'+o.Estatus+'</span>';
                            			break;
                            		case "Aprobado":   
                            			spn = '<span class="spn apro">'+o.Estatus+'</span>';
                            			break;
                            		case "Cancelado":   
                            			spn = '<span class="spn canc">'+o.Estatus+'</span>';
                            			break;
                            		case "Rechazado":   
                            			spn = '<span class="spn rech">'+o.Estatus+'</span>';
                            			break;
                            		case "Declinado":   
                            			spn = '<span class="spn decl">'+o.Estatus+'</span>';
                            			break;
                            		default:
                            			spn = '<span>'+o.Estatus+'</span>';
                            			break;
                            	}
                            	return spn;
                            }
                        },
                        { data: 'ResolucionFinal' },
                        { data: 'Comentarios' },
                        {
                            "mData": null,
                            "bSortable": false,
                            "mRender": function (o) { 
                            	var fecha = o.FecAct.split('T');
                                if (fecha[0] == '1990-09-09') {
                            		return 'N/A'
                            	}
                            	else{
                                	return fecha[0];
                            	}
                            }
                        },
                        { data: 'SucFinal' },
                        { data: 'Cuenta' },
                        {
                            "mData": null,
                            "bSortable": false,
                            "mRender": function (o) { 
                            	var fecha = o.FecApertura.split('T');
                            	if (fecha[0] == '1990-09-09') {
                            		return 'N/A'
                            	}
                            	else{
                                	return fecha[0];
                            	}
                            }
                        },
                        {
                            "mData": null,
                            "bSortable": false,
                            "mRender": function (o) { 
                            	if (o.Monto == 0) {
                            		return '$' + o.Monto + '.0';
                            	}
                            	else{
                            		return '$' + o.Monto;
                            	}
                            }
                        },
                        { data: 'Motivo' },                        
                        {
                            "mData": null,
                            "bSortable": false,
                            "mRender": function (o) { 
                                return '<button class="btn-edit" id="IdEdit-'+o.Id_Solicitud
                                +'" onClick="EditSolis($(this).attr(\'id\'));"><i class="mdi mdi-pencil"></i></button>'; 
                            	
                            }
                        }                            
                    ]
                });
            });
        };
	};
	var WS_LISTBOXES = function () {
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
		this.SELECT_ESTATUS = function (callback) {
            var param = {};

            $.ajax({
                method: "GET",
                url: API + "/api/Estatus/Select",
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
        this.SELECT_SUCURSALES = function (callback) {
            var param = {};

            $.ajax({
                method: "GET",
                url: API + "/api/Sucursales/Select",
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
        this.SELECT_RESFINALES = function (callback,Estatus_Id) {
            var param = {Estatus_Id:Estatus_Id};

            $.ajax({
                method: "GET",
                url: API + "/api/ResFinal/Select",
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
        this.SELECT_MOTIVOS = function (callback,Estatus_Id) {
            var param = {Estatus_Id:Estatus_Id};

            $.ajax({
                method: "GET",
                url: API + "/api/Motivos/Select",
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
        this.INIT_TABLE = function () {
            THIS.SELECT_ESTATUS(function (data) {
               MTDS.FULLER_COMBO_NX('ESTATUS_SOL', THIS.DTA, 'Id_Estatus', 'Tipo', [0, 'Estatus']);
            });
            THIS.SELECT_SUCURSALES(function (data) {
               MTDS.FULLER_COMBO_NX('SUCURSALES_SOL', THIS.DTA, 'Id_Sucursal', 'Nombre', [0, 'Sucursales']);
            });            
        };
	};
	var wsListas = new WS_LISTBOXES();
	var wsSolicitudes = new WS_SOLICITUDES();
	wsListas.INIT_TABLE();	
	wsSolicitudes.INIT_TABLE();

	function CallTable(){
		wsSolicitudes.SELECT(function (data) {
        	$('#table_solis').DataTable({
        		dom: 'Bfrtip',
        		buttons: [
			        'colvis',
			        'excel',
			        'print'
			    ],
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
                    { data: 'Id_Solicitud' },
                    {
                        "mData": null,
                        "bSortable": false,
                        "mRender": function (o) { 
                        	var fecha = o.FecSolicitud.split('T');
                            return fecha[0];
                        }
                    },
                    { data: 'Cliente' },
                    { data: 'Sucursal' },
                    { data: 'DistrictCode' },
                    { data: 'Region' },
                    {
                        "mData": null,
                        "bSortable": false,
                        "mRender": function (o) { 
                        	var spn = '';
                        	switch(o.Estatus){
                        		case "Proceso":   
                        			spn = '<span class="spn proc">'+o.Estatus+'</span>';
                        			break;
                        		case "Reasignación":   
                        			spn = '<span class="spn reas">'+o.Estatus+'</span>';
                        			break;
                        		case "Aprobado":   
                        			spn = '<span class="spn apro">'+o.Estatus+'</span>';
                        			break;
                        		case "Cancelado":   
                        			spn = '<span class="spn canc">'+o.Estatus+'</span>';
                        			break;
                        		case "Rechazado":   
                        			spn = '<span class="spn rech">'+o.Estatus+'</span>';
                        			break;
                        		case "Declinado":   
                        			spn = '<span class="spn decl">'+o.Estatus+'</span>';
                        			break;
                        		default:
                        			spn = '<span>'+o.Estatus+'</span>';
                        			break;
                        	}
                        	return spn;
                        }
                    },
                    { data: 'ResolucionFinal' },
                    { data: 'Comentarios' },
                    {
                        "mData": null,
                        "bSortable": false,
                        "mRender": function (o) { 
                        	var fecha = o.FecAct.split('T');
                            if (fecha[0] == '1990-09-09') {
                        		return 'N/A'
                        	}
                        	else{
                            	return fecha[0];
                        	}
                        }
                    },
                    { data: 'SucFinal' },
                    { data: 'Cuenta' },
                    {
                        "mData": null,
                        "bSortable": false,
                        "mRender": function (o) { 
                        	var fecha = o.FecApertura.split('T');
                        	if (fecha[0] == '1990-09-09') {
                        		return 'N/A'
                        	}
                        	else{
                            	return fecha[0];
                        	}
                        }
                    },
                    {
                        "mData": null,
                        "bSortable": false,
                        "mRender": function (o) { 
                        	if (o.Monto == 0) {
                        		return '$' + o.Monto + '.0';
                        	}
                        	else{
                        		return '$' + o.Monto;
                        	}
                        }
                    },
                    { data: 'Motivo' },                        
                    {
                        "mData": null,
                        "bSortable": false,
                        "mRender": function (o) { 
                            return '<button class="btn-edit" id="IdEdit-'+o.Id_Solicitud
                            +'" onClick="EditSolis($(this).attr(\'id\'));"><i class="mdi mdi-pencil"></i></button>'; 
                        	
                        }
                    }                            
                ]
            });
        });
	}

	$('#ESTATUS_SOL').on('change',function(){
		var aidi = $(this).val();
		wsListas.SELECT_RESFINALES(function (data) {
           MTDS.FULLER_COMBO_NX('RESFINAL_SOL', data, 'Id_ResFinal', 'Descripcion');

            wsListas.SELECT_MOTIVOS(function (doto) {
	           MTDS.FULLER_COMBO_NX('MOTIVO_SOL', doto, 'Id_Motivo', 'Descripcion');
	        }, aidi);

        }, aidi);       
	})
	$('#GUARDAR_EDITSOLI').on('click',function(){

		// CAMPOS --------------

			var Id_Solicitud = $('#GUARDAR_EDITSOLI').attr('idSave');
			var Estatus_Id = $('#ESTATUS_SOL').val();
			var ResFinal_Id = $('#RESFINAL_SOL').val();
			if (ResFinal_Id == undefined || ResFinal_Id == ''){
				ResFinal_Id = 0;
			}
			var Comentarios =  $('#COMENTARIOS_SOL').val();
			if (Comentarios == '') {
				Comentarios = 'Sin Comentarios';
			}
			var FecAct = $('#FECHA_SOL').val();
			if (FecAct == '--' || FecAct == '') {
				FecAct = '1990-09-09'
			}		
	  		var SucFinal_Id = $('#SUCURSALES_SOL').val();
	  		if (SucFinal_Id == undefined || SucFinal_Id == ''){
				SucFinal_Id = 0;
			}
	  		var Cuenta =  $('#CUENTA_SOL').val();

			var FecApertura = $('#FECHAAP_SOL').val();
			if (FecApertura == '--' || FecApertura == '') {
				FecApertura = '1990-09-09'
			}	
			var Monto =  $('#MONTO_SOL').val();

			var Motivo_Id = $('#MOTIVO_SOL').val();
			if (Motivo_Id == undefined || Motivo_Id == ''){
				Motivo_Id = 0;
			}

		// console.log(Id_Solicitud,Estatus_Id,ResFinal_Id,Comentarios,FecAct,SucFinal_Id,Cuenta,FecApertura,Monto,Motivo_Id);
		wsSolicitudes.UPDATE(function (data) {
			// console.log('oof');
			$('#Modal_EditSol').modal('hide'); 
            $('.MSG_TITLE').html('Solicitud actualizada <i class="mdi mdi-check-circle" style="font-size:18pt;color: green;"></i>');
            $('.MSG_BODY').html('<p>La solicitud se actualizó con éxito.</p>');        
            $('#Modal_Save').modal('toggle');             
            CallTable();
		}, Id_Solicitud,Estatus_Id,ResFinal_Id,Comentarios,FecAct,SucFinal_Id,Cuenta,FecApertura,Monto,Motivo_Id);     
	});

	$('#FILTRAR_FECHA').on('click',function(){
		var fi = $('#RANGOINI').val();
		var ff = $('#RANGOFIN').val();
        
        if(UserData.TipoUsuario != 1){
            wsSolicitudes.SELECT_BY_FECHAS(function (data) {
                $('#table_solis').DataTable({
                    dom: 'Bfrtip',
                    buttons: [
                        'colvis',
                        'excel',
                        'print'
                    ],
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
                        { data: 'Id_Solicitud' },
                        {
                            "mData": null,
                            "bSortable": false,
                            "mRender": function (o) { 
                                var fecha = o.FecSolicitud.split('T');
                                return fecha[0];
                            }
                        },
                        { data: 'Cliente' },
                        { data: 'Sucursal' },
                        { data: 'DistrictCode' },
                        { data: 'Region' },
                        {
                            "mData": null,
                            "bSortable": false,
                            "mRender": function (o) { 
                                var spn = '';
                                switch(o.Estatus){
                                    case "Proceso":   
                                        spn = '<span class="spn proc">'+o.Estatus+'</span>';
                                        break;
                                    case "Reasignación":   
                                        spn = '<span class="spn reas">'+o.Estatus+'</span>';
                                        break;
                                    case "Aprobado":   
                                        spn = '<span class="spn apro">'+o.Estatus+'</span>';
                                        break;
                                    case "Cancelado":   
                                        spn = '<span class="spn canc">'+o.Estatus+'</span>';
                                        break;
                                    case "Rechazado":   
                                        spn = '<span class="spn rech">'+o.Estatus+'</span>';
                                        break;
                                    case "Declinado":   
                                        spn = '<span class="spn decl">'+o.Estatus+'</span>';
                                        break;
                                    default:
                                        spn = '<span>'+o.Estatus+'</span>';
                                        break;
                                }
                                return spn;
                            }
                        },
                        { data: 'ResolucionFinal' },
                        { data: 'Comentarios' },
                        {
                            "mData": null,
                            "bSortable": false,
                            "mRender": function (o) { 
                                var fecha = o.FecAct.split('T');
                                if (fecha[0] == '1990-09-09') {
                                    return 'N/A'
                                }
                                else{
                                    return fecha[0];
                                }
                            }
                        },
                        { data: 'SucFinal' },
                        { data: 'Cuenta' },
                        {
                            "mData": null,
                            "bSortable": false,
                            "mRender": function (o) { 
                                var fecha = o.FecApertura.split('T');
                                if (fecha[0] == '1990-09-09') {
                                    return 'N/A'
                                }
                                else{
                                    return fecha[0];
                                }
                            }
                        },
                        {
                            "mData": null,
                            "bSortable": false,
                            "mRender": function (o) { 
                                if (o.Monto == 0) {
                                    return '$' + o.Monto + '.0';
                                }
                                else{
                                    return '$' + o.Monto;
                                }
                            }
                        },
                        { data: 'Motivo' },                        
                        {
                            "mData": null,
                            "bSortable": false,
                            "mRender": function (o) { 
                                return '<button class="btn-edit" id="IdEdit-'+o.Id_Solicitud
                                +'" onClick="EditSolis($(this).attr(\'id\'));"><i class="mdi mdi-pencil"></i></button>'; 
                                
                            }
                        }                            
                    ]
                });
            },fi,ff,UserData.Sucursal_Id);
        }
        else{
    		wsSolicitudes.SELECT_BY_FECHAS(function (data) {
            	$('#table_solis').DataTable({
            		dom: 'Bfrtip',
            		buttons: [
    			        'colvis',
    			        'excel',
    			        'print'
    			    ],
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
                        { data: 'Id_Solicitud' },
                        {
                            "mData": null,
                            "bSortable": false,
                            "mRender": function (o) { 
                            	var fecha = o.FecSolicitud.split('T');
                                return fecha[0];
                            }
                        },
                        { data: 'Cliente' },
                        { data: 'Sucursal' },
                        { data: 'DistrictCode' },
                        { data: 'Region' },
                        {
                            "mData": null,
                            "bSortable": false,
                            "mRender": function (o) { 
                            	var spn = '';
                            	switch(o.Estatus){
                            		case "Proceso":   
                            			spn = '<span class="spn proc">'+o.Estatus+'</span>';
                            			break;
                            		case "Reasignación":   
                            			spn = '<span class="spn reas">'+o.Estatus+'</span>';
                            			break;
                            		case "Aprobado":   
                            			spn = '<span class="spn apro">'+o.Estatus+'</span>';
                            			break;
                            		case "Cancelado":   
                            			spn = '<span class="spn canc">'+o.Estatus+'</span>';
                            			break;
                            		case "Rechazado":   
                            			spn = '<span class="spn rech">'+o.Estatus+'</span>';
                            			break;
                            		case "Declinado":   
                            			spn = '<span class="spn decl">'+o.Estatus+'</span>';
                            			break;
                            		default:
                            			spn = '<span>'+o.Estatus+'</span>';
                            			break;
                            	}
                            	return spn;
                            }
                        },
                        { data: 'ResolucionFinal' },
                        { data: 'Comentarios' },
                        {
                            "mData": null,
                            "bSortable": false,
                            "mRender": function (o) { 
                            	var fecha = o.FecAct.split('T');
                                if (fecha[0] == '1990-09-09') {
                            		return 'N/A'
                            	}
                            	else{
                                	return fecha[0];
                            	}
                            }
                        },
                        { data: 'SucFinal' },
                        { data: 'Cuenta' },
                        {
                            "mData": null,
                            "bSortable": false,
                            "mRender": function (o) { 
                            	var fecha = o.FecApertura.split('T');
                            	if (fecha[0] == '1990-09-09') {
                            		return 'N/A'
                            	}
                            	else{
                                	return fecha[0];
                            	}
                            }
                        },
                        {
                            "mData": null,
                            "bSortable": false,
                            "mRender": function (o) { 
                            	if (o.Monto == 0) {
                            		return '$' + o.Monto + '.0';
                            	}
                            	else{
                            		return '$' + o.Monto;
                            	}
                            }
                        },
                        { data: 'Motivo' },                        
                        {
                            "mData": null,
                            "bSortable": false,
                            "mRender": function (o) { 
                                return '<button class="btn-edit" id="IdEdit-'+o.Id_Solicitud
                                +'" onClick="EditSolis($(this).attr(\'id\'));"><i class="mdi mdi-pencil"></i></button>'; 
                            	
                            }
                        }                            
                    ]
                });
            },fi,ff);
        }
	});
	$('#FILTRAR_EDO').on('click',function(){
		var edoo = $('#FILTROEDO option:selected').text();
		var edo = get_estado(edoo);
		// console.log(edo);
		wsSolicitudes.SELECT_BY_EDO(function (data) {
        	$('#table_solis').DataTable({
        		dom: 'Bfrtip',
        		buttons: [
			        'colvis',
			        'excel',
			        'print'
			    ],
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
                    { data: 'Id_Solicitud' },
                    {
                        "mData": null,
                        "bSortable": false,
                        "mRender": function (o) { 
                        	var fecha = o.FecSolicitud.split('T');
                            return fecha[0];
                        }
                    },
                    { data: 'Cliente' },
                    { data: 'Sucursal' },
                    { data: 'DistrictCode' },
                    { data: 'Region' },
                    {
                        "mData": null,
                        "bSortable": false,
                        "mRender": function (o) { 
                        	var spn = '';
                        	switch(o.Estatus){
                        		case "Proceso":   
                        			spn = '<span class="spn proc">'+o.Estatus+'</span>';
                        			break;
                        		case "Reasignación":   
                        			spn = '<span class="spn reas">'+o.Estatus+'</span>';
                        			break;
                        		case "Aprobado":   
                        			spn = '<span class="spn apro">'+o.Estatus+'</span>';
                        			break;
                        		case "Cancelado":   
                        			spn = '<span class="spn canc">'+o.Estatus+'</span>';
                        			break;
                        		case "Rechazado":   
                        			spn = '<span class="spn rech">'+o.Estatus+'</span>';
                        			break;
                        		case "Declinado":   
                        			spn = '<span class="spn decl">'+o.Estatus+'</span>';
                        			break;
                        		default:
                        			spn = '<span>'+o.Estatus+'</span>';
                        			break;
                        	}
                        	return spn;
                        }
                    },
                    { data: 'ResolucionFinal' },
                    { data: 'Comentarios' },
                    {
                        "mData": null,
                        "bSortable": false,
                        "mRender": function (o) { 
                        	var fecha = o.FecAct.split('T');
                            if (fecha[0] == '1990-09-09') {
                        		return 'N/A'
                        	}
                        	else{
                            	return fecha[0];
                        	}
                        }
                    },
                    { data: 'SucFinal' },
                    { data: 'Cuenta' },
                    {
                        "mData": null,
                        "bSortable": false,
                        "mRender": function (o) { 
                        	var fecha = o.FecApertura.split('T');
                        	if (fecha[0] == '1990-09-09') {
                        		return 'N/A'
                        	}
                        	else{
                            	return fecha[0];
                        	}
                        }
                    },
                    {
                        "mData": null,
                        "bSortable": false,
                        "mRender": function (o) { 
                        	if (o.Monto == 0) {
                        		return '$' + o.Monto + '.0';
                        	}
                        	else{
                        		return '$' + o.Monto;
                        	}
                        }
                    },
                    { data: 'Motivo' },                        
                    {
                        "mData": null,
                        "bSortable": false,
                        "mRender": function (o) { 
                            return '<button class="btn-edit" id="IdEdit-'+o.Id_Solicitud
                            +'" onClick="EditSolis($(this).attr(\'id\'));"><i class="mdi mdi-pencil"></i></button>'; 
                        	
                        }
                    }                            
                ]
            });
        },edo);
	});
   
    if(UserData.TipoUsuario != 1){
        wsSolicitudes.SELECT_BY_SUC(function (data) {
            $('#table_solis').DataTable({
                dom: 'Bfrtip',
                buttons: [
                    'colvis',
                    'excel',
                    'print'
                ],
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
                    { data: 'Id_Solicitud' },
                    {
                        "mData": null,
                        "bSortable": false,
                        "mRender": function (o) { 
                            var fecha = o.FecSolicitud.split('T');
                            return fecha[0];
                        }
                    },
                    { data: 'Cliente' },
                    { data: 'Sucursal' },
                    { data: 'DistrictCode' },
                    { data: 'Region' },
                    {
                        "mData": null,
                        "bSortable": false,
                        "mRender": function (o) { 
                            var spn = '';
                            switch(o.Estatus){
                                case "Proceso":   
                                    spn = '<span class="spn proc">'+o.Estatus+'</span>';
                                    break;
                                case "Reasignación":   
                                    spn = '<span class="spn reas">'+o.Estatus+'</span>';
                                    break;
                                case "Aprobado":   
                                    spn = '<span class="spn apro">'+o.Estatus+'</span>';
                                    break;
                                case "Cancelado":   
                                    spn = '<span class="spn canc">'+o.Estatus+'</span>';
                                    break;
                                case "Rechazado":   
                                    spn = '<span class="spn rech">'+o.Estatus+'</span>';
                                    break;
                                case "Declinado":   
                                    spn = '<span class="spn decl">'+o.Estatus+'</span>';
                                    break;
                                default:
                                    spn = '<span>'+o.Estatus+'</span>';
                                    break;
                            }
                            return spn;
                        }
                    },
                    { data: 'ResolucionFinal' },
                    { data: 'Comentarios' },
                    {
                        "mData": null,
                        "bSortable": false,
                        "mRender": function (o) { 
                            var fecha = o.FecAct.split('T');
                            if (fecha[0] == '1990-09-09') {
                                return 'N/A'
                            }
                            else{
                                return fecha[0];
                            }
                        }
                    },
                    { data: 'SucFinal' },
                    { data: 'Cuenta' },
                    {
                        "mData": null,
                        "bSortable": false,
                        "mRender": function (o) { 
                            var fecha = o.FecApertura.split('T');
                            if (fecha[0] == '1990-09-09') {
                                return 'N/A'
                            }
                            else{
                                return fecha[0];
                            }
                        }
                    },
                    {
                        "mData": null,
                        "bSortable": false,
                        "mRender": function (o) { 
                            if (o.Monto == 0) {
                                return '$' + o.Monto + '.0';
                            }
                            else{
                                return '$' + o.Monto;
                            }
                        }
                    },
                    { data: 'Motivo' },                        
                    {
                        "mData": null,
                        "bSortable": false,
                        "mRender": function (o) { 
                            return '<button class="btn-edit" id="IdEdit-'+o.Id_Solicitud
                            +'" onClick="EditSolis($(this).attr(\'id\'));"><i class="mdi mdi-pencil"></i></button>'; 
                            
                        }
                    }                            
                ]
            });
        },UserData.Sucursal_Id);    
    }
    
} );
