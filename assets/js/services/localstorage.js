var Usuariots = function(){
    this.Contraseña = "";
	this.Estatus = true;
	this.FecIngreso = "";
	this.Id_Usuario = 0;
	this.NombreCompleto = "";
	this.NombreSucursal = "";
	this.Sucursal_Id = 0;
	this.TipoUsuario = 0;
	this.Usuario = "";
}

function guardar_sess(usuario){
    var miJson = JSON.stringify(usuario[0]);
    localStorage.setItem("usuario",miJson);
    window.location.href = "solicitudes.html";
}

function leer_sess(){
	var miJson = localStorage.getItem("usuario");
	var miUsuario = JSON.parse(miJson);

	if(miJson != null){
	    return miUsuario;
	} 
	else{
		console.log('no hay usuario');
		window.location.href = "index.html";
	}             
}
function eliminar_sess(){
	localStorage.removeItem("usuario");
	window.location.href = "index.html";
}

$('.logOut').on('click',function (argument) {
	eliminar_sess();
	window.location.href = 'index.html';    
});