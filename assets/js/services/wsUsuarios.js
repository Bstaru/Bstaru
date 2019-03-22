var MTDS = new METODOS(); 
var dta_Users;
var passchange;
            //passchange = value.Contraseña;

function EditUser(attrID){
    var str = attrID.split("-");
    var ID = str[1];
    $.each(dta_Users, function (index, value) {
        // console.log(value);
        if (value.Id_Usuario == ID) {
            $('#NomUser').text(value.NombreCompleto);
            $('#NOMBRE_ED').val(value.NombreCompleto);
            $('#USUARIO_ED').val(value.Usuario);
            $('#SUCURSALES_ED').val(value.Sucursal_Id);
            $('#SUCURSALES_ED').change();
            if (value.TipoUsuario == 1) {
                $('#ADMIN_ED').prop('checked',true);
            }
            else{
                $('#ADMIN_ED').prop('checked',false);
            }
            $('#GUARDAR_USER').attr('idSave',ID);
        }
        $('#Modal_Edit').modal('toggle');       
    });
}
function EditPass(attrID){
    var str = attrID.split("-");
    var ID = str[1];
    $.each(dta_Users, function (index, value) {
        if (value.Id_Usuario == ID) {
            $('#NomUserP').text(value.NombreCompleto);
            $('#GUARDAR_NEWPASS').attr('idSave',ID);
        }
        $('#Modal_EditPass').modal('toggle');       
    });
}
function DeleteUser(attrID){
    var str = attrID.split("-");
    var ID = str[1];
    $.each(dta_Users, function (index, value) {
        if (value.Id_Usuario == ID) {
            $('#NomUserPD').text(value.NombreCompleto);
            $('#ELIMINAR_USER').attr('idSave',ID);
        }
        $('#Modal_Delete').modal('toggle');       
    });
}

$(document).ready(function(){    

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
                    MTDS.FULLER_COMBO_NX('SUCURSALES', THIS.DTA, 'Id_Sucursal', 'Nombre', [0, 'Selecciona una sucursal']);
                    MTDS.FULLER_COMBO_NX('SUCURSALES_ED', THIS.DTA, 'Id_Sucursal', 'Nombre', [0, 'Selecciona una sucursal']);
                },0
                );
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
                    // method: "POST",
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
            this.INSERT = function (callback,NombreCompleto,_Usuario,Contraseña,TipoUsuario,Sucursal_Id) {
                var param = {NombreCompleto: NombreCompleto,
                            _Usuario:_Usuario,
                            Contraseña:Contraseña,
                            TipoUsuario:TipoUsuario,
                            Sucursal_Id:Sucursal_Id};
                $.ajax({
                    method: "POST",
                    url: API + "/api/Usuarios/Insert",
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
            this.DELETE = function (callback,Id_Usuario) {
                var param = {Id_Usuario: Id_Usuario};

                $.ajax({
                    method: "DELETE",
                    // method: "POST",
                    url: API + "/api/Usuarios/Delete",
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
                    $('#table_users').DataTable({
                        language: spanish,
                        searching: true,
                        destroy: true,
                        info: false,
                        pageLength: 10,
                        paging: true,
                        // scrollX: true,
                        LengthChange: true,
                        data: data,
                        columns: [
                            { data: 'NombreCompleto' },
                            { data: 'Usuario' },
                            { data: 'NombreSucursal' },
                            {
                                "mData": null,
                                "bSortable": false,
                                "mRender": function (o) { 
                                    // console.log(o.TipoUsuario);
                                    if (o.TipoUsuario == 1) {
                                        return '<i class="mdi mdi-check-circle" style="font-size:23pt;"></i>';
                                    }
                                    else{
                                        return '<i class="mdi mdi-close-circle" style="font-size:23pt;"></i>';
                                    }
                                }
                            },
                            {
                                "mData": null,
                                "bSortable": false,
                                "mRender": function (o) { 
                                    return '<button class="btn-edit"  id="IdEdit-'+o.Id_Usuario+'" onClick="EditUser($(this).attr(\'id\'));" ><i class="mdi mdi-pencil"></i></button>' 
                                         + '<button class="btn-editP" id="IdEditP-'+o.Id_Usuario+'" onClick="EditPass($(this).attr(\'id\'));" ><i class="mdi mdi-textbox-password"></i></button>' 
                                         + '<button class="btn-delete" id="IdEditD-'+o.Id_Usuario+'" onClick="DeleteUser($(this).attr(\'id\'));" ><i class="mdi mdi-delete"></i></button>'; 
                                }
                            }
                        ]
                    } );
                },);
            };
        };

        var wsSucursales = new WS_SUCURSALES();
        var wsUsuarios= new WS_USUARIOS();

    wsSucursales.INIT_TABLE();
    wsUsuarios.INIT_TABLE();

    function ClearData(){
        $('input').val('');
        $('#ADMIN').prop('checked',false);
        $('#ADMIN_ED').prop('checked',false);
        $('#SUCURSALES').val(0);
        $('#SUCURSALES').change();
        $('#SUCURSALES_ED').val(0);
        $('#SUCURSALES_ED').change();

         $('#NomUser').text('');
         $('#NomUserP').text('');
    }
    function CallTable(){
        wsUsuarios.SELECT(function (data) {
            $('#table_users').DataTable({
                language: spanish,
                searching: true,
                destroy: true,
                info: false,
                pageLength: 10,
                paging: true,
                // scrollX: true,
                LengthChange: true,
                data: data,
                columns: [
                    { data: 'NombreCompleto' },
                    { data: 'Usuario' },
                    { data: 'NombreSucursal' },
                    {
                        "mData": null,
                        "bSortable": false,
                        "mRender": function (o) { 
                            // console.log(o.TipoUsuario);
                            if (o.TipoUsuario == 1) {
                                return '<i class="mdi mdi-check-circle" style="font-size:23pt;"></i>';
                            }
                            else{
                                return '<i class="mdi mdi-close-circle" style="font-size:23pt;"></i>';
                            }
                        }
                    },
                    {
                        "mData": null,
                        "bSortable": false,
                        "mRender": function (o) { 
                            return '<button class="btn-edit"  id="IdEdit-'+o.Id_Usuario+'" onClick="EditUser($(this).attr(\'id\'));" ><i class="mdi mdi-pencil"></i></button>' 
                                 + '<button class="btn-editP" id="IdEditP-'+o.Id_Usuario+'" onClick="EditPass($(this).attr(\'id\'));" ><i class="mdi mdi-textbox-password"></i></button>' 
                                 + '<button class="btn-delete" id="IdEditD-'+o.Id_Usuario+'" onClick="DeleteUser($(this).attr(\'id\'));" ><i class="mdi mdi-delete"></i></button>'; 
                        }
                    }
                ]
            } );
        },);
    }

    $('#REGISTRAR').on('click',function(){

        var NombreCompleto = $('#NOMBRE').val();
        var Usuario = $('#USUARIO').val();
        var Contraseña = $('#CONTRA').val();
        var Sucursal_Id = $('#SUCURSALES').val();
        var Tipo = $('#ADMIN').prop('checked');
        var TipoUsuario;
        if (Tipo == true) { TipoUsuario = 1; }
        else{ TipoUsuario = 0;  }

        if((NombreCompleto != '') &&
            (Usuario != '') &&
            (Contraseña != '') &&
            (Sucursal_Id != 0) ){

            wsUsuarios.INSERT(function (data) {
                $('.MSG_TITLE').html('Usuario registrado <i class="mdi mdi-check-circle" style="font-size:18pt;color: green;"></i>');
                $('.MSG_BODY').html('<p>El usuario ha sido registrado con éxito.</p>');
                $('#Modal_Save').modal('toggle');           
                CallTable();
                ClearData();
            }, NombreCompleto,Usuario,Contraseña,TipoUsuario,Sucursal_Id);

        }
        else{
            $('#Modal_Save').modal('toggle');
            $('.MSG_TITLE').html('¡Espera!');
            $('.MSG_BODY').html('<p>Comprueba que esten todos los datos llenos, gracias.</p>');        
            $('#Modal_Save').modal('toggle');             
        }
        
    });    
    $('#GUARDAR_USER').on('click',function(){

        var Id_Usuario = $('#GUARDAR_USER').attr('idSave');
        var NombreCompleto = $('#NOMBRE_ED').val();
        var Usuario = $('#USUARIO_ED').val();  
        var Sucursal_Id = $('#SUCURSALES_ED').val();
        var Tipo = $('#ADMIN_ED').prop('checked');
        var TipoUsuario;
        if (Tipo == true) { TipoUsuario = 1; }
        else{ TipoUsuario = 0;}

        if( (Id_Usuario != 0) &&
            (NombreCompleto != '') &&
            (Usuario != '') &&
            (Sucursal_Id != 0) ){

            wsUsuarios.UPDATE(function (data) {
                $('#Modal_Edit').modal('hide');   
                $('.MSG_TITLE').html('Datos Guardados <i class="mdi mdi-check-circle" style="font-size:18pt;color: green;"></i>');
                $('.MSG_BODY').html('<p>El usuario se ha modificado.</p>');        
                $('#Modal_Save').modal('toggle');           
                CallTable();
                ClearData();
            }, Id_Usuario,NombreCompleto,Usuario,TipoUsuario,Sucursal_Id);

        }
        else{
            $('#Modal_Save').modal('toggle');
            $('.MSG_TITLE').html('¡Espera!');
            $('.MSG_BODY').html('<p>Comprueba que esten todos los datos llenos, gracias.</p>');        
            $('#Modal_Save').modal('toggle');             
        }
    });
    $('#GUARDAR_NEWPASS').on('click',function(){        

        var Id_Usuario = $('#GUARDAR_NEWPASS').attr('idSave');
        var Contraseña = $('#CONTRA_ED').val();
        var Contraseña2 = $('#CONTRA_ED2').val();

        if (Contraseña != '' && Contraseña2 != '') {
            if (Contraseña == Contraseña2) {
                // console.log(Id_Usuario,Contraseña);   
                wsUsuarios.UPDATE_PASS(function (data) {
                    $('#Modal_EditPass').modal('hide');           
                    $('#Modal_Save').modal('toggle');
                    $('.MSG_TITLE').html('Contraseña guardada <i class="mdi mdi-check-circle" style="font-size:18pt;color: green;"></i>');
                    $('.MSG_BODY').html('<p>La contraseña ha sido guardada con éxito.</p>');        
                    $('#Modal_Save').modal('toggle');              
                    CallTable();
                    ClearData();
                }, Id_Usuario,Contraseña);  
            }
            else{
                console.log('contra NO iguales');
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
    });
    $('#ELIMINAR_USER').on('click',function(){        

        var Id_Usuario = $('#ELIMINAR_USER').attr('idSave');

        wsUsuarios.DELETE(function (data) {
            $('#Modal_Delete').modal('hide');           
            $('#Modal_Save').modal('toggle');
            $('.MSG_TITLE').html('Usuario eliminado <i class="mdi mdi-check-circle" style="font-size:18pt;color: green;"></i>');
            $('.MSG_BODY').html('<p>El usaurio ha sido eliminado.</p>');        
            $('#Modal_Save').modal('toggle');              
            CallTable();
        }, Id_Usuario);  
    });


});