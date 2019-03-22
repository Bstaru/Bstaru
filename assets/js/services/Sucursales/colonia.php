<?php
/*
   $dbhost = '127.0.0.1';
   $dbuser = 'root';
   $dbpass = '';
   
   $conn = mysqli_connect($dbhost, $dbuser, $dbpass);
   
   if(! $conn ) {
      die('Could not connect: ' . mysqli_error());
   }
   
   $sql = 'SELECT `d_asenta` FROM `codigos`USE INDEX (IDX_CP) WHERE `d_codigo` = '.$_GET;
   mysqli_select_db('wac');
   $retval = mysqli_query( $sql, $conn );
   
   if(! $retval ) {
      die('Could not get data: ' . mysqli_error());
   }
   echo '[';
   while($row = mysqli_stmt_fetch($retval, MYSQL_ASSOC)) {
      echo '{nombre:'.$row['d_asenta'].'},';
   }
   echo ']';

   
   mysqli_close($conn);
*/
$link = mysqli_connect("db660096699.db.1and1.com", "dbo660096699", "2wR2AGbN$", "db660096699");
$colonias="";

/* comprobar la conexión */
if (mysqli_connect_errno()) {
    printf("Falló la conexión: %s\n", mysqli_connect_error());
    exit();
}

$consulta = 'SELECT `d_asenta`, D_mnpio, d_estado FROM `codigos`USE INDEX (IDX_CP) WHERE `d_codigo` = '.$_GET['cp'].' ORDER BY d_asenta ASC';


if ($sentencia = mysqli_prepare($link, $consulta)) {

    /* ejecutar la sentencia */
    mysqli_stmt_execute($sentencia);

    /* vincular las variables de resultados */
    mysqli_stmt_bind_result($sentencia, $colonia, $municipio, $estado);

    /* obtener los valores */
    echo '[';
    while (mysqli_stmt_fetch($sentencia)) {
        $colonias .= '{"nombre":"'.$colonia.'","mun":"'.$municipio.'","estado":"'.$estado.'"},';
    }
    echo substr($colonias,0,-1);
    echo ']';
    /* cerrar la sentencia */
    mysqli_stmt_close($sentencia);
}

/* cerrar la conexión */
mysqli_close($link);
?>