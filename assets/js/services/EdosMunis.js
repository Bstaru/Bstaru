
function get_estado(estado){
    var edo = "";
    switch(estado){
        case "Aguascalientes":   edo="AGS";   break;
        case "Colima":           edo="COL";   break;
        case "Baja California":  edo="BC";    break;
        case "Baja California":  edo="BCS" ;  break;
        case "Campeche":         edo="CAMP" ; break;
        case "Chiapas":          edo="CHIA";  break;
        case "Chihuahua":        edo="CHIH";  break;
        case "Coahuila":         edo="COAH";  break;
        case "Ciudad de México": edo="CDMX";  break;
        case "Durango":          edo="DGO";   break;
        case "Estado de México": edo="MEX";   break;
        case "Guanajuato":       edo="GTO";   break;
        case "Guerrero":         edo="GUER";  break;
        case "Hidalgo":          edo="HGO";   break;
        case "Jalisco":          edo="JAL";   break;
        case "Michoacán":        edo="MICH";  break;
        case "Morelos":          edo="MOR";   break;
        case "Nayarit":          edo="NAY";   break;
        case "Nuevo León":       edo="NL";    break;
        case "Oaxaca":           edo="OAX";   break;
        case "Puebla":           edo="PUB";   break;
        case "Querétaro":        edo="QRO";   break;
        case "Quintana Roo":     edo="QROO";  break;
        case "San Luis Potosí":  edo="SLP";   break;
        case "Sinaloa":          edo="SIN";   break;
        case "Sonora":           edo="SON";   break;
        case "Tabasco":          edo="TAB";   break;
        case "Tlaxcala":         edo="TLAX";  break;
        case "Tamaulipas":       edo="TAMP";  break;
        case "Veracruz":         edo="VER";   break;
        case "Yucatán":          edo="YUC";   break;
        case "Zacatecas":        edo="ZAC";   break;
    }
    return edo;
}
function get_nameEdo(EdoName){
    debugger
    var edo = '';
    switch(EdoName){
        case  1: edo="Aguascalientes";   break;
        case  6: edo="Colima";           break;
        case  2: edo="Baja California";  break;
        case  3: edo="Baja California";  break;
        case  4: edo="Campeche";         break;
        case  7: edo="Chiapas";          break;
        case  8: edo="Chihuahua";        break;
        case  5: edo="Coahuila";         break;
        case  9: edo="Ciudad de México"; break;
        case  10: edo="Durango";         break;
        case  15: edo="Estado de México";break;
        case  11: edo="Guanajuato";      break;
        case  12: edo="Guerrero";        break;
        case  13: edo="Hidalgo";         break;
        case  14: edo="Jalisco";         break;
        case  16: edo="Michoacán";       break;
        case  17: edo="Morelos";         break;
        case  18: edo="Nayarit";         break;
        case  19: edo="Nuevo León";      break;
        case  20: edo="Oaxaca";          break;
        case  21: edo="Puebla";          break;
        case  22: edo="Querétaro";       break;
        case  23: edo="Quintana Roo";    break;
        case  24: edo="San Luis Potosí"; break;
        case  25: edo="Sinaloa";         break;
        case  26: edo="Sonora";         break;
        case  27: edo="Tabasco";         break;
        case  29: edo="Tlaxcala";        break;
        case  28: edo="Tamaulipas";     break;
        case  30: edo="Veracruz";        break;
        case  31: edo="Yucatán";         break;
        case  32: edo="Zacatecas";       break;
    }
    return edo;
}


function get_idEdo(EdoName){
    var edo = 0;
    switch(EdoName){
        case "Aguascalientes":  edo= 1;  break;
        case "Colima":          edo= 6;  break;
        case "Baja California": edo= 2;  break;
        case "Baja California": edo= 3;  break;
        case "Campeche":        edo= 4;  break;
        case "Chiapas":         edo= 7;  break;
        case "Chihuahua":       edo= 8;  break;
        case "Coahuila":        edo= 5;  break;
        case "Ciudad de México":edo= 9;  break;
        case "Durango":         edo= 10;  break;
        case "Estado de México":edo= 15;  break;
        case "Guanajuato":      edo= 11;  break;
        case "Guerrero":        edo= 12;  break;
        case "Hidalgo":         edo= 13;  break;
        case "Jalisco":         edo= 14;  break;
        case "Michoacán":       edo= 16;  break;
        case "Morelos":         edo= 17;  break;
        case "Nayarit":         edo= 18;  break;
        case "Nuevo León":      edo= 19;  break;
        case "Oaxaca":          edo= 20;  break;
        case "Puebla":          edo= 21;  break;
        case "Querétaro":       edo= 22;  break;
        case "Quintana Roo":    edo= 23;  break;
        case "San Luis Potosí": edo= 24;  break;
        case "Sinaloa":         edo= 25;  break;
        case "Sonora":          edo= 26;  break;
        case "Tabasco":         edo= 27;  break;
        case "Tlaxcala":        edo= 29;  break;
        case "Tamaulipas":      edo= 28;  break;
        case "Veracruz":        edo= 30;  break;
        case "Yucatán":         edo= 31;  break;
        case "Zacatecas":       edo= 32;  break;
    }
    return edo;
}

function get_municipios(edo,idcont){    
    switch(edo){
        case "Aguascalientes":
            var mun=["Aguascalientes","Asientos","Calvillo","Cosío","El Llano","Jesús María","Pabellón de Arteaga","Rincón de Romos","San Francisco de los Romo","San José de Gracia","Tepezalá"]
            municipio_select_content(mun,idcont);
        break;
        case "Baja California":
            var mun=["Ensenada","Mexicali","Playas de Rosarito","Tecate","Tijuana"]
            municipio_select_content(mun,idcont);
        break;
        case "Campeche":
            var mun=["Calakmul","Calkiní","Campeche","Candelaria","Carmen","Champotón","Escárcega","Hecelchakán","Hopelchén","Palizada","Tenabo"]
            municipio_select_content(mun,idcont);
        break;
        case "Chiapas":
            var mun=["Acacoyagua",
                "Acala",
                "Acapetahua",
                "Aldama",
                "Altamirano",
                "Amatán",
                "Amatenango de la Frontera",
                "Amatenango del Valle",
                "Angel Albino Corzo",
                "Arriaga",
                "Bejucal de Ocampo",
                "Bella Vista",
                "Benemérito de las Américas",
                "Berriozábal",
                "Bochil",
                "Cacahoatán",
                "Catazajá",
                "Chalchihuitán",
                "Chamula",
                "Chanal",
                "Chapultenango",
                "Chenalhó",
                "Chiapa de Corzo",
                "Chiapilla",
                "Chicoasén",
                "Chicomuselo",
                "Chilón",
                "Cintalapa",
                "Coapilla",
                "Comitán de Domínguez",
                "Copainalá",
                "El Bosque",
                "El Porvenir",
                "Escuintla",
                "Francisco León",
                "Frontera Comalapa",
                "Frontera Hidalgo",
                "Huehuetán",
                "Huitiupán",
                "Huixtán",
                "Huixtla",
                "Ixhuatán",
                "Ixtacomitán",
                "Ixtapa",
                "Ixtapangajoya",
                "Jiquipilas",
                "Jitotol",
                "Juárez",
                "La Concordia",
                "La Grandeza",
                "La Independencia",
                "La Libertad",
                "La Trinitaria",
                "Larráinzar",
                "Las Margaritas",
                "Las Rosas",
                "Mapastepec",
                "Maravilla Tenejapa",
                "Marqués de Comillas",
                "Mazapa de Madero",
                "Mazatán",
                "Metapa",
                "Mitontic",
                "Montecristo de Guerrero",
                "Motozintla",
                "Nicolás Ruíz",
                "Ocosingo",
                "Ocotepec",
                "Ocozocoautla de Espinosa",
                "Ostuacán",
                "Osumacinta",
                "Oxchuc",
                "Palenque",
                "Pantelhó",
                "Pantepec",
                "Pichucalco",
                "Pijijiapan",
                "Pueblo Nuevo Solistahuacán",
                "Rayón",
                "Reforma",
                "Sabanilla",
                "Salto de Agua",
                "San Andrés Duraznal",
                "San Cristóbal de las Casas",
                "San Fernando",
                "San Juan Cancuc",
                "San Lucas",
                "Santiago el Pinar",
                "Siltepec",
                "Simojovel",
                "Sitalá",
                "Socoltenango",
                "Solosuchiapa",
                "Soyaló",
                "Suchiapa",
                "Suchiate",
                "Sunuapa",
                "Tapachula",
                "Tapalapa",
                "Tapilula",
                "Tecpatán",
                "Tenejapa",
                "Teopisca",
                "Tila",
                "Tonalá",
                "Totolapa",
                "Tumbalá",
                "Tuxtla Chico",
                "Tuxtla Gutiérrez",
                "Tuzantán",
                "Tzimol",
                "Unión Juárez",
                "Venustiano Carranza",
                "Villa Comaltitlán",
                "Villa Corzo",
                "Villaflores",
                "Yajalón",
                "Zinacantán"]
            municipio_select_content(mun,idcont);
        break;
        case "Chihuahua":
            var mun=["Ahumada",
                "Aldama",
                "Allende",
                "Aquiles Serdán",
                "Ascensión",
                "Bachíniva",
                "Balleza",
                "Batopilas",
                "Bocoyna",
                "Buenaventura",
                "Camargo",
                "Carichí",
                "Casas Grandes",
                "Chihuahua",
                "Chínipas",
                "Coronado",
                "Coyame del Sotol",
                "Cuauhtémoc",
                "Cusihuiriachi",
                "Delicias",
                "Dr. Belisario Domínguez",
                "El Tule",
                "Galeana",
                "Gómez Farías",
                "Gran Morelos",
                "Guachochi",
                "Guadalupe",
                "Guadalupe y Calvo",
                "Guazapares",
                "Guerrero",
                "Hidalgo del Parral",
                "Huejotitán",
                "Ignacio Zaragoza",
                "Janos",
                "Jiménez",
                "Juárez",
                "Julimes",
                "La Cruz",
                "López",
                "Madera",
                "Maguarichi",
                "Manuel Benavides",
                "Matachí",
                "Matamoros",
                "Meoqui",
                "Morelos",
                "Moris",
                "Namiquipa",
                "Nonoava",
                "Nuevo Casas Grandes",
                "Ocampo",
                "Ojinaga",
                "Praxedis G. Guerrero",
                "Riva Palacio",
                "Rosales",
                "Rosario",
                "San Francisco de Borja",
                "San Francisco de Conchos",
                "San Francisco del Oro",
                "Santa Bárbara",
                "Santa Isabel",
                "Satevó",
                "Saucillo",
                "Temósachi",
                "Urique",
                "Uruachi",
                "Valle de Zaragoza"]
            municipio_select_content(mun,idcont);
        break;
        case "Coahuila":
            var mun=["Abasolo",
                "Acuña",
                "Allende",
                "Arteaga",
                "Candela",
                "Castaños",
                "Cuatrociénegas",
                "Escobedo",
                "Francisco I. Madero",
                "Frontera",
                "General Cepeda",
                "Guerrero",
                "Hidalgo",
                "Jiménez",
                "Juárez",
                "Lamadrid",
                "Matamoros",
                "Monclova",
                "Morelos",
                "Múzquiz",
                "Nadadores",
                "Nava",
                "Ocampo",
                "Parras",
                "Piedras Negras",
                "Progreso",
                "Ramos Arizpe",
                "Sabinas",
                "Sacramento",
                "Saltillo",
                "San Buenaventura",
                "San Juan de Sabinas",
                "San Pedro",
                "Sierra Mojada",
                "Torreón",
                "Viesca",
                "Villa Unión",
                "Zaragoza"]
            municipio_select_content(mun,idcont);
        break;
        case "Durango":
            var mun=["Canatlán","Canelas"," Coneto de Comonfort","Cuencamé","Durango","General Simón Bolívar","Gómez Palacio","Guadalupe Victoria","Guanaceví","Hidalgo","Indé","Lerdo","Mapimí","Mezquital","Nazas","Nombre de Dios","Ocampo","El Oro","Otáez","Pánuco de Coronado","Peñón Blanco","Poanas","Pueblo Nuevo","Rodeo","San Bernardo","San Dimas","San Juan de Guadalupe","San Juan del Río"," San Luis del Cordero","San Pedro del Gallo","Santa Clara","Santiago Papasquiaro","Súchil","Tamazula","Tepehuanes"," Tlahualilo","Topia","Vicente Guerrero","Nuevo Ideal"]
            municipio_select_content(mun,idcont);
        break;
        case "Estado de México":
            var mun=["Acambay",
                "Acolman",
                "Aculco",
                "Almoloya de Alquisiras",
                "Almoloya de Juárez",
                "Almoloya del Río",
                "Amanalco",
                "Amatepec",
                "Amecameca",
                "Apaxco",
                "Atenco",
                "Atizapán",
                "Atizapán de Zaragoza",
                "Atlacomulco",
                "Atlautla",
                "Axapusco",
                "Ayapango",
                "Calimaya",
                "Capulhuac",
                "Chalco",
                "Chapa de Mota",
                "Chapultepec",
                "Chiautla",
                "Chicoloapan",
                "Chiconcuac",
                "Chimalhuacán",
                "Coacalco de Berriozábal",
                "Coatepec Harinas",
                "Cocotitlán",
                "Coyotepec",
                "Cuautitlán",
                "Cuautitlán Izcalli",
                "Donato Guerra",
                "Ecatepec de Morelos",
                "Ecatzingo",
                "El Oro",
                "Huehuetoca",
                "Hueypoxtla",
                "Huixquilucan",
                "Isidro Fabela",
                "Ixtapaluca",
                "Ixtapan de la Sal",
                "Ixtapan del Oro",
                "Ixtlahuaca",
                "Jaltenco",
                "Jilotepec",
                "Jilotzingo",
                "Jiquipilco",
                "Jocotitlán",
                "Joquicingo",
                "Juchitepec",
                "La Paz",
                "Lerma",
                "Luvianos",
                "Malinalco",
                "Melchor Ocampo",
                "Metepec",
                "Mexicaltzingo",
                "Morelos",
                "Naucalpan de Juárez",
                "Nextlalpan",
                "Nezahualcóyotl",
                "Nicolás Romero",
                "Nopaltepec",
                "Ocoyoacac",
                "Ocuilan",
                "Otumba",
                "Otzoloapan",
                "Otzolotepec",
                "Ozumba",
                "Papalotla",
                "Polotitlán",
                "Rayón",
                "San Antonio la Isla",
                "San Felipe del Progreso",
                "San José del Rincón",
                "San Martín de las Pirámides",
                "San Mateo Atenco",
                "San Simón de Guerrero",
                "Santo Tomás",
                "Soyaniquilpan de Juárez",
                "Sultepec",
                "Tecámac",
                "Tejupilco",
                "Temamatla",
                "Temascalapa",
                "Temascalcingo",
                "Temascaltepec",
                "Temoaya",
                "Tenancingo",
                "Tenango del Aire",
                "Tenango del Valle",
                "Teoloyucán",
                "Teotihuacán",
                "Tepetlaoxtoc",
                "Tepetlixpa",
                "Tepotzotlán",
                "Tequixquiac",
                "Texcaltitlán",
                "Texcalyacac",
                "Texcoco",
                "Tezoyuca",
                "Tianguistenco",
                "Timilpan",
                "Tlalmanalco",
                "Tlalnepantla de Baz",
                "Tlatlaya",
                "Toluca",
                "Tonanitla",
                "Tonatico",
                "Tultepec",
                "Tultitlán",
                "Valle de Bravo",
                "Valle de Chalco Solidaridad",
                "Villa de Allende",
                "Villa del Carbón",
                "Villa Guerrero",
                "Villa Victoria",
                "Xalatlaco",
                "Xonacatlán",
                "Zacazonapan",
                "Zacualpan",
                "Zinacantepec",
                "Zumpahuacán",
                "Zumpango"]
            municipio_select_content(mun,idcont);
        break;
        case "Guanajuato":
            var mun=["Abasolo",
                "Acámbaro",
                "Allende",
                "Apaseo el Alto",
                "Apaseo el Grande",
                "Atarjea",
                "Celaya",
                "Comonfort",
                "Coroneo",
                "Cortazar",
                "Cuerámaro",
                "Doctor Mora",
                "Dolores Hidalgo",
                "Guanajuato",
                "Huanímaro",
                "Irapuato",
                "Jaral del Progreso",
                "Jerécuaro",
                "León",
                "Manuel Doblado",
                "Moroleón",
                "Ocampo",
                "Pénjamo",
                "Pueblo Nuevo",
                "Purísima del Rincón",
                "Romita",
                "Salamanca",
                "Salvatierra",
                "San Diego de la Unión",
                "San Felipe",
                "San Francisco del Rincón",
                "San José Iturbide",
                "San Luis de la Paz",
                "Santa Catarina",
                "Santa Cruz de Juventino Rosas",
                "Santiago Maravatío",
                "Silao",
                "Tarandacuao",
                "Tarimoro",
                "Tierra Blanca",
                "Uriangato",
                "Valle de Santiago",
                "Victoria",
                "Villagrán",
                "Xichú",
                "Yuriria"]
            municipio_select_content(mun,idcont);
        break;
        case "Hidalgo":
            var mun=[
                "Acatlán",
                "Acaxochitlán",
                "Actopan",
                "Agua Blanca de Iturbide",
                "Ajacuba",
                "Alfajayucan",
                "Almoloya",
                "Apan",
                "Atitalaquia",
                "Atlapexco",
                "Atotonilco de Tula",
                "Atotonilco el Grande",
                "Calnali",
                "Cardonal",
                "Chapantongo",
                "Chapulhuacán",
                "Chilcuautla",
                "Cuautepec de Hinojosa",
                "El Arenal",
                "Eloxochitlán",
                "Emiliano Zapata",
                "Epazoyucan",
                "Francisco I. Madero",
                "Huasca de Ocampo",
                "Huautla",
                "Huazalingo",
                "Huehuetla",
                "Huejutla de Reyes",
                "Huichapan",
                "Ixmiquilpan",
                "Jacala de Ledezma",
                "Jaltocán",
                "Juárez Hidalgo",
                "La Misión",
                "Lolotla",
                "Metepec",
                "Metztitlán",
                "Mineral de la Reforma",
                "Mineral del Chico",
                "Mineral del Monte",
                "Mixquiahuala de Juárez",
                "Molango de Escamilla",
                "Nicolás Flores",
                "Nopala de Villagrán",
                "Omitlán de Juárez",
                "Pachuca de Soto",
                "Pacula",
                "Pisaflores",
                "Progreso de Obregón",
                "San Agustín Metzquititlán",
                "San Agustín Tlaxiaca",
                "San Bartolo Tutotepec",
                "San Felipe Orizatlán",
                "San Salvador",
                "Santiago de Anaya",
                "Santiago Tulantepec de Lugo Guerre",
                "Singuilucan",
                "Tasquillo",
                "Tecozautla",
                "Tenango de Doria",
                "Tepeapulco",
                "Tepehuacán de Guerrero",
                "Tepeji del Río de Ocampo",
                "Tepetitlán",
                "Tetepango",
                "Tezontepec de Aldama",
                "Tianguistengo",
                "Tizayuca",
                "Tlahuelilpan",
                "Tlahuiltepa",
                "Tlanalapa",
                "Tlanchinol",
                "Tlaxcoapan",
                "Tolcayuca",
                "Tula de Allende",
                "Tulancingo de Bravo",
                "Villa de Tezontepec",
                "Xochiatipan",
                "Xochicoatlán",
                "Yahualica",
                "Zacualtipán de ?ngeles",
                "Zapotlán de Juárez",
                "Zempoala",
                "Zimapán"]
            municipio_select_content(mun,idcont);
        break;
        case "Jalisco":
            var mun=["Acatic",
                "Acatlán de Juárez",
                "Ahualulco de Mercado",
                "Amacueca",
                "Amatitán",
                "Ameca",
                "Arandas",
                "Atemajac de Brizuela",
                "Atengo",
                "Atenguillo",
                "Atotonilco el Alto",
                "Atoyac",
                "Autlán de Navarro",
                "Ayotlán",
                "Ayutla",
                "Bolaños",
                "Cabo Corrientes",
                "Cañadas de Obregón",
                "Casimiro Castillo",
                "Chapala",
                "Chimaltitán",
                "Chiquilistlán",
                "Cihuatlán",
                "Cocula",
                "Colotlán",
                "Concepción de Buenos Aires",
                "Cuautitlán de García Barragán",
                "Cuautla",
                "Cuquío",
                "Degollado",
                "Ejutla",
                "EL Arenal",
                "El Grullo",
                "El Limón",
                "El Salto",
                "Encarnación de Díaz",
                "Etzatlán",
                "Gómez Farías",
                "Guachinango",
                "Guadalajara",
                "Hostotipaquillo",
                "Huejúcar",
                "Huejuquilla el Alto",
                "Ixtlahuacán de los Membrillos",
                "Ixtlahuacán del Río",
                "Jalostotitlán",
                "Jamay",
                "Jesús María",
                "Jilotlán de los Dolores",
                "Jocotepec",
                "Juanacatlán",
                "Juchitlán",
                "La Barca",
                "La Huerta",
                "La Manzanilla de la Paz",
                "Lagos de Moreno",
                "Magdalena",
                "Mascota",
                "Mazamitla",
                "Mexticacán",
                "Mezquitic",
                "Mixtlán",
                "Ocotlán",
                "Ojuelos de Jalisco",
                "Pihuamo",
                "Poncitlán",
                "Puerto Vallarta",
                "Quitupan",
                "San Cristóbal de la Barranca",
                "San Diego de Alejandría",
                "San Gabriel",
                "San Juan de los Lagos",
                "San Juanito de Escobedo",
                "San Julián",
                "San Marcos",
                "San Martín de Bolaños",
                "San Martín Hidalgo",
                "San Miguel el Alto",
                "San Sebastián del Oeste",
                "Santa María de los ?ngeles",
                "Santa María del Oro",
                "Sayula",
                "Tala",
                "Talpa de Allende",
                "Tamazula de Gordiano",
                "Tapalpa",
                "Tecalitlán",
                "Techaluta de Montenegro",
                "Tecolotlán",
                "Tenamaxtlán",
                "Teocaltiche",
                "Teocuitatlán de Corona",
                "Tepatitlán de Morelos",
                "Tequila",
                "Teuchitlán",
                "Tizapán el Alto",
                "Tlajomulco de Zúñiga",
                "Tlaquepaque",
                "Tolimán",
                "Tomatlán",
                "Tonalá",
                "Tonaya",
                "Tonila",
                "Totatiche",
                "Tototlán",
                "Tuxcacuesco",
                "Tuxcueca",
                "Tuxpan",
                "Unión de San Antonio",
                "Unión de Tula",
                "Valle de Guadalupe",
                "Valle de Juárez",
                "Villa Corona",
                "Villa Guerrero",
                "Villa Hidalgo",
                "Villa Purificación",
                "Yahualica de González Gallo",
                "Zacoalco de Torres",
                "Zapopan",
                "Zapotiltic",
                "Zapotitlán de Vadillo",
                "Zapotlán del Rey",
                "Zapotlán el Grande",
                "Zapotlanejo"]
            municipio_select_content(mun,idcont);
        break;
        case "Nuevo León":
            var mun=["Abasolo",
                "Agualeguas",
                "Allende",
                "Anáhuac",
                "Apodaca",
                "Aramberri",
                "Bustamante",
                "Cadereyta Jiménez",
                "Carmen",
                "Cerralvo",
                "China",
                "Ciénega de Flores",
                "Dr. Coss",
                "Dr. Arroyo",
                "Dr. González",
                "Galeana",
                "García",
                "Gral. Escobedo",
                "Gral. Terán",
                "Gral. Treviño",
                "Gral. Zaragoza",
                "Gral. Zuazua",
                "Gral. Bravo",
                "Guadalupe",
                "Hidalgo",
                "Higueras",
                "Hualahuises",
                "Iturbide",
                "Juárez",
                "Lampazos de Naranjo",
                "Linares",
                "Los Aldamas",
                "Los Herreras",
                "Los Ramones",
                "Marín",
                "Melchor Ocampo",
                "Mier y Noriega",
                "Mina",
                "Montemorelos",
                "Monterrey",
                "Parás",
                "Pesquería",
                "Rayones",
                "Sabinas Hidalgo",
                "Salinas Victoria",
                "San Nicolás de los Garza",
                "San Pedro Garza García",
                "Santa Catarina",
                "Santiago",
                "Vallecillo",
                "Villaldama"]
            municipio_select_content(mun,idcont);
        break;
        case "Querétaro":
            var mun=["Amealco de Bonfil",
                "Arroyo Seco",
                "Cadereyta de Montes",
                "Colón",
                "Corregidora",
                "El Marqués",
                "Ezequiel Montes",
                "Huimilpan",
                "Jalpan de Serra",
                "Landa de Matamoros",
                "Pedro Escobedo",
                "Peñamiller",
                "Pinal de Amoles",
                "Querétaro",
                "San Joaquín",
                "San Juan del Río",
                "Tequisquiapan",
                "Tolimán"]
            municipio_select_content(mun,idcont);
        break;
        case "Quintana Roo":
            var mun=["Benito Juárez",
                "Cozumel",
                "Felipe Carrillo Puerto",
                "Isla Mujeres",
                "José María Morelos",
                "Lázaro Cárdenas",
                "Othón P. Blanco",
                "Solidaridad"]
            municipio_select_content(mun,idcont);
        break;
        case "San Luis Potosí":
            var mun=["Ahualulco",
                "Alaquines",
                "Aquismón",
                "Armadillo de los Infante",
                "Axtla de Terrazas",
                "Cárdenas",
                "Catorce",
                "Cedral",
                "Cerritos",
                "Cerro de San Pedro",
                "Charcas",
                "Ciudad del Maíz",
                "Ciudad Fernández",
                "Ciudad Valles",
                "Coxcatlán",
                "Ebano",
                "El Naranjo",
                "Guadalcázar",
                "Huehuetlán",
                "Lagunillas",
                "Matehuala",
                "Matlapa",
                "Mexquitic de Carmona",
                "Moctezuma",
                "Rayón",
                "Rioverde",
                "Salinas",
                "San Antonio",
                "San Ciro de Acosta",
                "San Luis Potosí",
                "San Martín Chalchicuautla",
                "San Nicolás Tolentino",
                "San Vicente Tancuayalab",
                "Santa Catarina",
                "Santa María del Río",
                "Santo Domingo",
                "Soledad de Graciano Sánchez",
                "Tamasopo",
                "Tamazunchale",
                "Tampacán",
                "Tampamolón Corona",
                "Tamuín",
                "Tancanhuitz",
                "Tanlajás",
                "Tanquián de Escobedo",
                "Tierra Nueva",
                "Vanegas",
                "Venado",
                "Villa de Arista",
                "Villa de Arriaga",
                "Villa de Guadalupe",
                "Villa de la Paz",
                "Villa de Ramos",
                "Villa de Reyes",
                "Villa Hidalgo",
                "Villa Juárez",
                "Xilitla",
                "Zaragoza"]
            municipio_select_content(mun,idcont);
        break;
        case "Sinaloa":
            var mun=["Ahome",
                "Angostura",
                "Badiraguato",
                "Choix",
                "Concordia",
                "Cosalá",
                "Culiacán",
                "El Fuerte",
                "Elota",
                "Escuinapa",
                "Guasave",
                "Mazatlán",
                "Mocorito",
                "Navolato",
                "Rosario",
                "Salvador Alvarado",
                "San Ignacio",
                "Sinaloa"]
            municipio_select_content(mun,idcont);
        break;
        case "Sonora":
            var mun=["Aconchi",
                "Agua Prieta",
                "Alamos",
                "Altar",
                "Arivechi",
                "Arizpe",
                "Atil",
                "Bacadéhuachi",
                "Bacanora",
                "Bacerac",
                "Bacoachi",
                "Bácum",
                "Banámichi",
                "Baviácora",
                "Bavispe",
                "Benito Juárez",
                "Benjamín Hill",
                "Caborca",
                "Cajeme",
                "Cananea",
                "Carbó",
                "Cucurpe",
                "Cumpas",
                "Divisaderos",
                "Empalme",
                "Etchojoa",
                "Fronteras",
                "General Plutarco Elías Calles",
                "Granados",
                "Guaymas",
                "Hermosillo",
                "Heroica Nogales",
                "Huachinera",
                "Huásabas",
                "Huatabampo",
                "Huépac",
                "Imuris",
                "La Colorada",
                "Magdalena",
                "Mazatán",
                "Moctezuma",
                "Naco",
                "Nácori Chico",
                "Nacozari de García",
                "Navojoa",
                "Onavas",
                "Opodepe",
                "Oquitoa",
                "Pitiquito",
                "Puerto Peñasco",
                "Quiriego",
                "Rayón",
                "Rosario",
                "Sahuaripa",
                "San Felipe de Jesús",
                "San Ignacio Río Muerto",
                "San Javier",
                "San Luis Río Colorado",
                "San Miguel de Horcasitas",
                "San Pedro de la Cueva",
                "Santa Ana",
                "Santa Cruz",
                "Sáric",
                "Soyopa",
                "Suaqui Grande",
                "Tepache",
                "Trincheras",
                "Tubutama",
                "Ures",
                "Villa Hidalgo",
                "Villa Pesqueira",
                "Yécora"]
            municipio_select_content(mun,idcont);
        break;
        case "Tamaulipas":
            var mun=["Abasolo",
                "Aldama",
                "Altamira",
                "Antiguo Morelos",
                "Burgos",
                "Bustamante",
                "Camargo",
                "Casas",
                "Ciudad Madero",
                "Cruillas",
                "El Mante",
                "G?émez",
                "Gómez Farías",
                "González",
                "Guerrero",
                "Gustavo Díaz Ordaz",
                "Hidalgo",
                "Jaumave",
                "Jiménez",
                "Llera",
                "Mainero",
                "Matamoros",
                "Méndez",
                "Mier",
                "Miguel Alemán",
                "Miquihuana",
                "Nuevo Laredo",
                "Nuevo Morelos",
                "Ocampo",
                "Padilla",
                "Palmillas",
                "Reynosa",
                "Río Bravo",
                "San Carlos",
                "San Fernando",
                "San Nicolás",
                "Soto la Marina",
                "Tampico",
                "Tula",
                "Valle Hermoso",
                "Victoria",
                "Villagrán",
                "Xicoténcatl"]
            municipio_select_content(mun,idcont);
        break;
        case "Yucatán":
            var mun=["Abalá",
                "Acanceh",
                "Akil",
                "Baca",
                "Bokobá",
                "Buctzotz",
                "Cacalchén",
                "Calotmul",
                "Cansahcab",
                "Cantamayec",
                "Celestún",
                "Cenotillo",
                "Chacsinkín",
                "Chankom",
                "Chapab",
                "Chemax",
                "Chichimilá",
                "Chicxulub Pueblo",
                "Chikindzonot",
                "Chocholá",
                "Chumayel",
                "Conkal",
                "Cuncunul",
                "Cuzamá",
                "Dzán",
                "Dzemul",
                "Dzidzantún",
                "Dzilam de Bravo",
                "Dzilam González",
                "Dzitás",
                "Dzoncauich",
                "Espita",
                "Halachó",
                "Hocabá",
                "Hoctún",
                "Homún",
                "Huhí",
                "Hunucmá",
                "Ixil",
                "Izamal",
                "Kanasín",
                "Kantunil",
                "Kaua",
                "Kinchil",
                "Kopomá",
                "Mama",
                "Maní",
                "Maxcanú",
                "Mayapán",
                "Mérida",
                "Mocochá",
                "Motul",
                "Muna",
                "Muxupip",
                "Opichén",
                "Oxkutzcab",
                "Panabá",
                "Peto",
                "Progreso",
                "Quintana Roo",
                "Río Lagartos",
                "Sacalum",
                "Samahil",
                "San Felipe",
                "Sanahcat",
                "Santa Elena",
                "Seyé",
                "Sinanché",
                "Sotuta",
                "Sucilá",
                "Sudzal",
                "Suma",
                "Tahdziú",
                "Tahmek",
                "Teabo",
                "Tecoh",
                "Tekal de Venegas",
                "Tekantó",
                "Tekax",
                "Tekit",
                "Tekom",
                "Telchac Pueblo",
                "Telchac Puerto",
                "Temax",
                "Temozón",
                "Tepakán",
                "Tetiz",
                "Teya",
                "Ticul",
                "Timucuy",
                "Tinum",
                "Tixcacalcupul",
                "Tixkokob",
                "Tixmehuac",
                "Tixpéhual",
                "Tizimín",
                "Tunkás",
                "Tzucacab",
                "Uayma",
                "Ucú",
                "Umán",
                "Valladolid",
                "Xocchel",
                "Yaxcabá",
                "Yaxkukul",
                "Yobaín"]
            municipio_select_content(mun,idcont);
        break;
        default:
            var mun=["Sin sucursales."]
            municipio_select_content(mun,idcont);
        break;
    }
}

function get_sucursales(edo,idcont,callback){
    var edoSelected = get_estado(edo);
    var dta_Sucs;
    var param = { EstadoAbrev: edoSelected};

    $.ajax({
        method: "GET",
        url: API + "/api/Sucursales/Select",
        data: param,
        contentType: "application/x-www-form-urlencoded",
        dataType: "json",
        complete: function (data) { },
        success: function (data) {  

            $(idcont).empty();
            $.each(data, function(key,value) {
                $(idcont).append('<option value="'+value.Id_Sucursal+'">'+value.Nombre+'</option>');
                $(idcont).change();
                $(idcont).selectpicker('refresh');
            });   
            try {
                callback();
            }
            catch (ex) {
                //console.log('NO CALLBACK');
            }

        },
        error: function (e) {
            console.log(e);
            if (e.statusText == "Unauthorized") {
                KillSession();
            }
        }
    });
    // return dta_Sucs;
}

function municipio_select_content(mun,idcont){
    // console.log('municipios:')
    var $el = $(idcont);
    $(idcont+' option:gt(0)').remove();
    $.each(mun, function(key,value) {
        $el.append($("<option></option>").attr("value", value).text(value));
        // console.log(value);
    });
    $el.change();
    $el.selectpicker('refresh');

}
