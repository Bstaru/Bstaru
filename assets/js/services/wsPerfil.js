
var MTDS = new METODOS(); 

$(document).ready(function(){    
	var UserData =  leer_sess();
	$('#NAMES').val(UserData.NombreCompleto);
	$('#USERS').val(UserData.Usuario);
	$('#SAVENEWPAS').attr('idSave',UserData.Id_Usuario);

	//-----SERVICIOS
        var WS_SUCURSALES = function () {
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
                    url: API + "/api/Sucursales/Select",
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
                    MTDS.FULLER_COMBO_NX('SUC_PERFIL', THIS.DTA, 'Id_Sucursal', 'Nombre', [0, 'Selecciona una sucursal']);
                    $('#SUC_PERFIL').val(UserData.Sucursal_Id);
					$('#SUC_PERFIL').change();
                },0);
            };
        };
        var WS_USUARIOS = function () {
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
                    url: API + "/api/Usuarios/Select",
                    data: param,
                    contentType: "application/x-www-form-urlencoded",
                    dataType: "json",
                    complete: function (data) { },
                    success: function (data) {
                        THIS.DTA = (data);                   
                        //THIS.DATA_0();
                        THIS.RUN(callback(THIS.DTA));
                        // console.log(data);
                        dta_Users = data;
                    },
                    error: function (e) {
                        console.log(e);
                        if (e.statusText == "Unauthorized") {
                            KillSession();
                        }
                    }
                });
            };
            this.UPDATE = function (callback,Id_Usuario,NombreCompleto,_Usuario,TipoUsuario,Sucursal_Id) {
                var param = {Id_Usuario:Id_Usuario,
                            NombreCompleto: NombreCompleto,
                            _Usuario:_Usuario,
                            TipoUsuario:TipoUsuario,
                            Sucursal_Id:Sucursal_Id};

                $.ajax({
                    method: "PUT",
                    url: API + "/api/Usuarios/Update",
                    data: param,
                    contentType: "application/x-www-form-urlencoded",
                    dataType: "json",
                    complete: function (data) { },
                    success: function (data) {
                        THIS.DTA = (data);                   
                        //THIS.DATA_0();
                        THIS.RUN(callback(THIS.DTA));
                        // console.log(data);
                        dta_Users = data;
                    },
                    error: function (e) {
                        console.log(e);
                        if (e.statusText == "Unauthorized") {
                            KillSession();
                        }
                    }
                });
            };
            this.UPDATE_PASS = function (callback,Id_Usuario,Contraseña) {
                var param = {Id_Usuario: Id_Usuario,Contraseña:Contraseña};

                $.ajax({
                    method: "PUT",
                    url: API + "/api/Contra/Update",
                    data: param,
                    contentType: "application/x-www-form-urlencoded",
                    dataType: "json",
                    complete: function (data) { },
                    success: function (data) {
                        THIS.DTA = (data);                   
                        //THIS.DATA_0();
                        THIS.RUN(callback(THIS.DTA));
                        // console.log(data);
                        dta_Users = data;
                    },
                    error: function (e) {
                        console.log(e);
                        if (e.statusText == "Unauthorized") {
                            KillSession();
                        }
                    }
                });
            };
            this.LOGIN = function (callback,_Usuario,Contraseña) {

                var param = { _Usuario:_Usuario, Contraseña:Contraseña };

                $.ajax({
                    method: "POST",
                    url: API + "/api/LogIn/LogIn",
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
        };

        var wsSucursales = new WS_SUCURSALES();
        var wsUsuarios= new WS_USUARIOS();

    wsSucursales.INIT_TABLE();

    var estado=0;
	$('#EDITAR_MISDATOS').on('click',function(){	
		if (estado == 0) {
			$(this).text('Guardar');
			$('#NAMES').removeAttr('disabled');
			$('#USERS').removeAttr('disabled');
			$('#SUC_PERFIL').removeAttr('disabled');
			$('#SUC_PERFIL').change();
			$('button[data-id="SUC_PERFIL"]').removeClass('disabled');
			$('#CANCEL').removeClass('elem_hide');
			estado = 1;
		}
		else if (estado == 1) {
			var Id_Usuario = UserData.Id_Usuario;
			var NombreCompleto = $('#NAMES').val();
			var Usuario = $('#USERS').val();
			var TipoUsuario = UserData.TipoUsuario;
			var Sucursal_Id = $('#SUC_PERFIL').val();
			var NombreSucursal = $( "#SUC_PERFIL option:selected" ).text();

			// GUARDAR
            if ( (NombreCompleto != '') && 
                (Usuario != '') && 
                (Sucursal_Id != 0) && 
                (NombreSucursal != '')) {

                wsUsuarios.UPDATE(function (data) {
    				$('#Modal_Save').modal('toggle');
                    $('.MSG_TITLE').html('¡Datos guardados! <i class="mdi mdi-check-circle" style="font-size:18pt;color: green;"></i>');
                    $('.MSG_BODY').html('<p>Tus datos han sido guardados.</p>');        
                    $('#Modal_Save').modal('toggle');
    				var user = new Usuariots();
       					user.Contraseña = UserData.Contraseña;
    					user.Estatus = UserData.Estatus;
    					user.FecIngreso = UserData.FecIngreso;
    					user.Id_Usuario = Id_Usuario;
    					user.NombreCompleto = NombreCompleto;
    					user.NombreSucursal = NombreSucursal;
    					user.Sucursal_Id = Sucursal_Id;
    					user.TipoUsuario = TipoUsuario;
    					user.Usuario = Usuario;

    				var miJson = JSON.stringify(user);
    				localStorage.setItem("usuario",miJson);
    			},Id_Usuario,NombreCompleto,Usuario,TipoUsuario,Sucursal_Id);

                $(this).text('Editar');
                $('#CANCEL').click();
                estado = 0;
            }
            else{
                $('#Modal_Save').modal('toggle');
                $('.MSG_TITLE').html('¡Espera!');
                $('.MSG_BODY').html('<p>Comprueba que esten todos los datos llenos, gracias.</p>');        
                $('#Modal_Save').modal('toggle');             
            }

			
		}
	});

	$('#CANCEL').on('click',function(){
		$('#NAMES').attr('disabled','true');
		$('#USERS').attr('disabled','true');
		$('#SUC_PERFIL').attr('disabled');
		$('#SUC_PERFIL').change();
		$('button[data-id="SUC_PERFIL"]').addClass('disabled');

		$('#EDITAR_MISDATOS').text('Editar');	
		$(this).addClass('elem_hide');	
		estado = 0;
	});

	$('#SAVENEWPAS').on('click',function(){
		var Id_Usuario = $(this).attr('idSave');
        var Contraseña = $('#NEWCONTRA').val();
        var Contraseña2 = $('#NEWCONTRA2').val();

        if (Contraseña != '' && Contraseña2 != '') {
            if (Contraseña == Contraseña2) {
                // console.log(Id_Usuario,Contraseña);   
                wsUsuarios.UPDATE_PASS(function (data) {       
                    $('#Modal_Save').modal('toggle');
                    $('.MSG_TITLE').html('Contraseña guardada <i class="mdi mdi-check-circle" style="font-size:18pt;color: green;"></i>');
                    $('.MSG_BODY').html('<p>La contraseña ha sido guardada con éxito.</p>');        
                    $('#Modal_Save').modal('toggle');              
                    $('input').val('');
                }, Id_Usuario,Contraseña);  
            }
            else{
                // console.log('contra NO iguales');
                $('.MSG_TITLE').html('¡Espera! <i class="mdi mdi-close-circle" style="font-size:18pt;color:red;"></i>');
                $('.MSG_BODY').html('<p>Las contraseñas no son iguales, por favor verificalas.</p>');        
                $('#Modal_Save').modal('toggle');           
            }
        }
        else{
            $('#Modal_Save').modal('toggle');
            $('.MSG_TITLE').html('¡Espera!');
            $('.MSG_BODY').html('<p>Comprueba que esten todos los datos llenos, gracias.</p>');        
            $('#Modal_Save').modal('toggle');             
        }

	})
	
});

