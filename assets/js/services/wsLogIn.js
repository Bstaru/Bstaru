$(document).ready(function(){        
    
    //-----SERVICIOS
        var WS_LOGIN = function () {
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

        var wsLogIn = new WS_LOGIN();

    var inputU = document.getElementById("USER");
    var inputP = document.getElementById("PASS");   

    inputP.addEventListener("keyup", function(event) {
      event.preventDefault();
      if (event.keyCode === 13) {
        document.getElementById("btnLogin").click();
      }
    });
    inputU.addEventListener("keyup", function(event) {
      event.preventDefault();
      if (event.keyCode === 13) {
        document.getElementById("btnLogin").click();
      }
    });

    $('#btnLogin').on('click',function(){

        var user = $('#USER').val();
        var pass = $('#PASS').val();

        wsLogIn.LOGIN(function (data) {

            if(data == undefined || data == [] || data == null || data == ''){
                $('#Modal_Alert').modal('toggle');          
                // console.log('Lo sentimos, el usuario no existe.');
                return;
            }
            
            else{                 
                console.log('Bienvenido '+ data[0].NombreCompleto);

                

                guardar_sess(data);
            }
           
        }, user,pass);


    });
});