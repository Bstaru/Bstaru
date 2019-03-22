var MTDS = new METODOS(); 
var dta_Sucs;

function EditSucursal(attrID){
    var str = attrID.split("-");
    var ID = str[1];
    $.each(dta_Sucs, function (index, value) {
        // console.log(value);
        if (value.Id_Sucursal == ID) {
            $('#Namesucursal').text(value.Nombre);

            $('#REGION_EDIT').val(value.Region);
            $('#DISCODE_EDIT').val(value.DistrictCode);
            $('#NOSUC_EDIT').val(value.Sucursal);
            $('#PLAZA_EDIT').val(value.Plaza);
            $('#NOMBRE_EDIT').val(value.Nombre);

            $('#EDO_EDIT').val(get_idEdo(value.Estado));
            $('#EDO_EDIT').change();

            $('#MUNI_EDIT').val(value.Municipio);
            $('#DIREC_EDIT').val(value.Direccion);
            $('#COL_EDIT').val(value.Colonia);
            $('#CP_EDIT').val(value.CodPostal);
            $('#TEL_EDIT').val(value.Telefono);
            
            $('#GUARDAR_EDITSUC').attr('idSave',ID);
        }
        $('#Modal_EditSuc').modal('toggle');       
    });
}
function DeleteSuc(attrID){
    var str = attrID.split("-");
    var ID = str[1];
    $.each(dta_Sucs, function (index, value) {
        if (value.Id_Sucursal == ID) {
            $('#NomSucD').text(value.Nombre);
            $('#ELIMINAR_SUC').attr('idSave',ID);
        }
        $('#Modal_DeleteSuc').modal('toggle');       
    });
}

$(document).ready(function(){   

     var UserData =  leer_sess();

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
                        dta_Sucs = data;
                    },
                    error: function (e) {
                        console.log(e);
                        if (e.statusText == "Unauthorized") {
                            KillSession();
                        }
                    }
                });
            };
            this.UPDATE = function (callback,Id_Sucursal,Region,DistrictCode,_Sucursal,Plaza,Nombre,Direccion,Colonia,Municipio,EstadoAbrev,Estado,CodPostal,Telefono) {
                var param = {Id_Sucursal:Id_Sucursal,
                            Region: Region,
                            DistrictCode: DistrictCode,
                            _Sucursal: _Sucursal,
                            Plaza: Plaza,
                            Nombre: Nombre,
                            Direccion: Direccion,
                            Colonia: Colonia,
                            Municipio: Municipio,
                            EstadoAbrev: EstadoAbrev,
                            Estado: Estado,
                            CodPostal: CodPostal,
                            Telefono: Telefono};

                $.ajax({
                    method: "PUT",
                    url: API + "/api/Sucursales/Update",
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
            this.INSERT = function (callback,Region,DistrictCode,_Sucursal,Plaza,Nombre,Direccion,Colonia,Municipio,EstadoAbrev,Estado,CodPostal,Telefono) {
                var param = {Region: Region,
                            DistrictCode: DistrictCode,
                            _Sucursal: _Sucursal,
                            Plaza: Plaza,
                            Nombre: Nombre,
                            Direccion: Direccion,
                            Colonia: Colonia,
                            Municipio: Municipio,
                            EstadoAbrev: EstadoAbrev,
                            Estado: Estado,
                            CodPostal: CodPostal,
                            Telefono: Telefono};
                $.ajax({
                    method: "POST",
                    url: API + "/api/Sucursales/Insert",
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
            this.DELETE = function (callback,Id_Sucursal) {
                var param = {Id_Sucursal: Id_Sucursal};

                $.ajax({
                    method: "DELETE",
                    url: API + "/api/Sucursales/Delete",
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
                if(UserData.TipoUsuario != 1){
                    $('.AddClassUserTypeAdmin').addClass('OnlySeeAdmin');
                    THIS.SELECT(function (data) {
                        $('#table_sucursales').DataTable({
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
                                { data: 'Region' },
                                { data: 'DistrictCode' },
                                { data: 'Sucursal' },
                                { data: 'Plaza' },
                                { data: 'Nombre' },
                                { data: 'Direccion' },
                                { data: 'Colonia' },
                                { data: 'Municipio' },
                                { data: 'Estado' },
                                { data: 'CodPostal' },
                                { data: 'Telefono' }
                            ]
                        });
                    });
                }
                else{
                    $('.AddClassUserTypeUser').addClass('OnlySeeAdmin');
                    THIS.SELECT(function (data) {
                        $('#table_sucursalesAdmin').DataTable({
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
                                { data: 'Region' },
                                { data: 'DistrictCode' },
                                { data: 'Sucursal' },
                                { data: 'Plaza' },
                                { data: 'Nombre' },
                                { data: 'Direccion' },
                                { data: 'Colonia' },
                                { data: 'Municipio' },
                                { data: 'Estado' },
                                { data: 'CodPostal' },
                                { data: 'Telefono' },
                                {
                                    "mData": null,
                                    "bSortable": false,
                                    "mRender": function(o) {                                     
                                        return '<button class="btn-edit "  id="IdEdit-'+o.Id_Sucursal
                                            +'" onClick="EditSucursal($(this).attr(\'id\'));" ><i class="mdi mdi-pencil"></i></button>' 
                                            + '<button class="btn-delete "  id="IdEditD-'+o.Id_Sucursal
                                            +'" onClick="DeleteSuc($(this).attr(\'id\'));" ><i class="mdi mdi-delete"></i></button>'; 
                                    }
                                }
                            ]
                        });
                    });
                }               
            };
        };
        var wsSucursales = new WS_SUCURSALES();

    wsSucursales.INIT_TABLE();
    
    function CallTable(){
        if(UserData.TipoUsuario != 1){
            $('.AddClassUserTypeAdmin').addClass('OnlySeeAdmin');
            wsSucursales.SELECT(function (data) {
                $('#table_sucursales').DataTable({
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
                        { data: 'Region' },
                        { data: 'DistrictCode' },
                        { data: 'Sucursal' },
                        { data: 'Plaza' },
                        { data: 'Nombre' },
                        { data: 'Direccion' },
                        { data: 'Colonia' },
                        { data: 'Municipio' },
                        { data: 'Estado' },
                        { data: 'CodPostal' },
                        { data: 'Telefono' }
                    ]
                });
            });
        }
        else{
            $('.AddClassUserTypeUser').addClass('OnlySeeAdmin');
            wsSucursales.SELECT(function (data) {
                $('#table_sucursalesAdmin').DataTable({
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
                        { data: 'Region' },
                        { data: 'DistrictCode' },
                        { data: 'Sucursal' },
                        { data: 'Plaza' },
                        { data: 'Nombre' },
                        { data: 'Direccion' },
                        { data: 'Colonia' },
                        { data: 'Municipio' },
                        { data: 'Estado' },
                        { data: 'CodPostal' },
                        { data: 'Telefono' },
                        {
                            "mData": null,
                            "bSortable": false,
                            "mRender": function(o) {                                     
                                return '<button class="btn-edit "  id="IdEdit-'+o.Id_Sucursal
                                    +'" onClick="EditSucursal($(this).attr(\'id\'));" ><i class="mdi mdi-pencil"></i></button>' 
                                    + '<button class="btn-delete "  id="IdEditD-'+o.Id_Sucursal
                                    +'" onClick="DeleteSuc($(this).attr(\'id\'));" ><i class="mdi mdi-delete"></i></button>'; 
                            }
                        }
                    ]
                });
            });
        }
    }

    $('#REG_SUC').on('click',function(){

        var Region = $('#REGION').val().toUpperCase();
        var DistrictCode = $('#DISCODE').val().toUpperCase();
        var _Sucursal = $('#NOSUC').val();
        var Plaza = $('#PLAZA').val().toUpperCase();
        var Nombre = $('#NOMBRE').val();
        var Direccion = $('#DIREC').val();
        var Colonia = $('#COL').val();
        var Municipio = $('#MUNI').val();
        var CodPostal = $('#CP').val();
        var Telefono = $('#TEL').val();
        var Estado = $( "#EDO option:selected" ).text();
        var EstadoAbrev = get_estado(Estado);

        if ((Region != '') &&
            (DistrictCode != '') &&
            (_Sucursal != '') &&
            (Plaza != '') &&
            (Nombre != '') &&
            (Direccion != '') &&
            (Colonia != '') &&
            (Municipio != '') &&
            (CodPostal != '') &&
            (Telefono != '') &&
            (Estado != '') &&
            (EstadoAbrev != '')
            ) {
            wsSucursales.INSERT(function (data) {;
                $('#Modal_Save').modal('toggle');
                $('.MSG_TITLE').html('Sucursal Guardada <i class="mdi mdi-check-circle" style="font-size:18pt;color: green;"></i>');
                $('.MSG_BODY').html('<p>La sucursal se registró con éxito.</p>');        
                $('#Modal_Save').modal('toggle');              
                $('input').val('');
                CallTable();
            },Region,DistrictCode,_Sucursal,Plaza,Nombre,Direccion,Colonia,Municipio,EstadoAbrev,Estado,CodPostal,Telefono);
        }
        else{
            $('#Modal_Save').modal('toggle');
            $('.MSG_TITLE').html('¡Espera!');
            $('.MSG_BODY').html('<p>Comprueba que esten todos los datos llenos, gracias.</p>');        
            $('#Modal_Save').modal('toggle');             
        }

        

        // console.log(Region,DistrictCode,_Sucursal,Plaza,Nombre,Direccion,Colonia,Municipio,EstadoAbrev,Estado,CodPostal,Telefono);
    });

    $('#GUARDAR_EDITSUC').on('click',function(){

        var Id_Sucursal = $('#GUARDAR_EDITSUC').attr('idSave');
        var Region = $('#REGION_EDIT').val();
        var DistrictCode = $('#DISCODE_EDIT').val();
        var _Sucursal = $('#NOSUC_EDIT').val();
        var Plaza = $('#PLAZA_EDIT').val();
        var Nombre = $('#NOMBRE_EDIT').val();
        var Direccion = $('#DIREC_EDIT').val();
        var Colonia = $('#COL_EDIT').val();
        var Municipio = $('#MUNI_EDIT').val();
        var CodPostal = $('#CP_EDIT').val();
        var Telefono = $('#TEL_EDIT').val();
        var Estado = $( "#EDO_EDIT option:selected" ).text();
        var EstadoAbrev = get_estado(Estado);

        if ((Id_Sucursal != 0) &&
            (Region != '') &&
            (DistrictCode != '') &&
            (_Sucursal != '') &&
            (Plaza != '') &&
            (Nombre != '') &&
            (Direccion != '') &&
            (Colonia != '') &&
            (Municipio != '') &&
            (CodPostal != '') &&
            (Telefono != '') &&
            (Estado != '') &&
            (EstadoAbrev != '')
            ) {
            wsSucursales.UPDATE(function (data) {
                $('#Modal_EditSuc').modal('hide'); 
                $('.MSG_TITLE').html('Sucursal Guardada <i class="mdi mdi-check-circle" style="font-size:18pt;color: green;"></i>');
                $('.MSG_BODY').html('<p>La sucursal se actualizó con éxito.</p>');        
                $('#Modal_Save').modal('toggle');              
                $('input').val('');
                CallTable();
            },Id_Sucursal,Region,DistrictCode,_Sucursal,Plaza,Nombre,Direccion,Colonia,Municipio,EstadoAbrev,Estado,CodPostal,Telefono);
        }
        else{
            $('#Modal_Save').modal('toggle');
            $('.MSG_TITLE').html('¡Espera!');
            $('.MSG_BODY').html('<p>Comprueba que esten todos los datos llenos, gracias.</p>');        
            $('#Modal_Save').modal('toggle');             
        }    
    });

    $('#ELIMINAR_SUC').on('click',function(){        

        var Id_Sucursal = $('#ELIMINAR_SUC').attr('idSave');

        wsSucursales.DELETE(function (data) {
            $('#Modal_DeleteSuc').modal('hide');           
            $('#Modal_Save').modal('toggle');
            $('.MSG_TITLE').html('Sucursal eliminada <i class="mdi mdi-check-circle" style="font-size:18pt;color: green;"></i>');
            $('.MSG_BODY').html('<p>La sucursal ha sido eliminada.</p>');        
            $('#Modal_Save').modal('toggle');              
            CallTable();
        }, Id_Sucursal);  
    });

});