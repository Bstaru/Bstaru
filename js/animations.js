 

function resetNav(){
	$('#s').removeClass('here');
	$('#a').removeClass('here');
	$('#f').removeClass('here');
	$('#p').removeClass('here');
	$('#c').removeClass('here');
}

$(document).ready(function (){

	//----------------------CAROUSEL, INTERVALO---------------// 

		var t;

		var start = $('#carou_pts').find('.active').attr('data-interval');
		t = setTimeout("$('#carou_pts').carousel({interval: 1000});", start-1000);

		$('#carou_pts').on('slid.bs.carousel', function () {  
		     clearTimeout(t);  
		     var duration = $(this).find('.active').attr('data-interval');
		    
		     $('#carou_pts').carousel('pause');
		     t = setTimeout("$('#carou_pts').carousel();", duration-1000);
		})

		$('.carousel-control.right').on('click', function(){
		    clearTimeout(t);   
		});

		$('.carousel-control.left').on('click', function(){
		    clearTimeout(t);   
		});

	//----------------------TEXTOS EN ADN------------------//
		$('.txt_info_adn').hover(				
	       function () {
	        	$(this).addClass('fadeIn');
	       }, 		
	       function () {
	        	$(this).removeClass('fadeIn');
	       }
	    );
	
	//----------------------ANIMA EN FRACC-----------------//
		
		$('#SecPal').on('click',				
	       function () {
	       		$('#frac1').addClass('fadeOut').removeClass('fadeIn');

	        	setTimeout(function(){
	        		$('#frac1').addClass('elem-hide');

		        	$('#palmiras').removeClass('elem-hide').addClass('fadeIn').removeClass('fadeOut');
		        	$('#fr_mapas').removeClass('elem-hide').addClass('fadeIn').removeClass('fadeOut');
		        		$('#mp_1').addClass('pal_mp_1');
		        		$('#mp_2').addClass('pal_mp_2');
	        	},1000);
	       }
	    );
	    $('#SecBri').on('click',				
	       function () {
	       		$('#frac1').addClass('fadeOut').removeClass('fadeIn');

	        	setTimeout(function(){
	        		$('#frac1').addClass('elem-hide');
		        	$('#brisas').removeClass('elem-hide').addClass('fadeIn').removeClass('fadeOut');
		        	$('#fr_mapas').removeClass('elem-hide').addClass('fadeIn').removeClass('fadeOut');
		        		$('#mp_1').addClass('bri_mp_1');
		        		$('#mp_2').addClass('bri_mp_2');
	        	},1000);
	       }
	    );
	
	//----------------------MODALES------------------------//
		
		//palmiras 
			var palmiras_fachada;
			var palmiras_interior;
			var palmiras_mapa;

			$('.fr_img1.palimg').on('click',function(){
				palmiras_fachada.iziModal('open');
			});
			$('.fr_img2.palimg').on('click',function(){
				palmiras_interior.iziModal('open');
			});
			$('.fr_img3.palimg').on('click',function(){
				palmiras_mapa.iziModal('open');
			});
		//brisas
			var brisas_fachada;
			var brisas_interior;
			var brisas_mapa;

			$('.fr_img1.briimg').on('click',function(){
				brisas_fachada.iziModal('open');
			});
			$('.fr_img2.briimg').on('click',function(){
				brisas_interior.iziModal('open');
			});
			$('.fr_img3.briimg').on('click',function(){
				brisas_mapa.iziModal('open');
			});
		//fichas	
			var modelos1;
			var modelos2;
			var modelos3;
			var modelos4;
			var modelos5;
			var modelos6;

			$('.Fr').on('click',function(){
			 	modelos1.iziModal('open');
			});
			$('.Fr_m').on('click',function(){
			 	modelos1.iziModal('open');
			});
			$('.In').on('click',function(){
			 	modelos2.iziModal('open');
			});
			$('.In_m').on('click',function(){
			 	modelos2.iziModal('open');
			});
			$('.Ir').on('click',function(){
			 	modelos3.iziModal('open');
			});
			$('.Ir_m').on('click',function(){
			 	modelos3.iziModal('open');
			});
			$('.No').on('click',function(){
			 	modelos4.iziModal('open');
			});
			$('.No_m').on('click',function(){
			 	modelos4.iziModal('open');
			});
			$('.A1').on('click',function(){
			 	modelos5.iziModal('open');
			});
			$('.A1_m').on('click',function(){
			 	modelos5.iziModal('open');
			});
			$('.A2').on('click',function(){
			 	modelos6.iziModal('open');
			});
			$('.A2_m').on('click',function(){
			 	modelos6.iziModal('open');
			});
		//mapas
			var mapPal1 = $("#Modal_mapa_pal1").iziModal({
				top: '10vh',
			  radius: 5,
			  group: 'mapa_pal_1',
			  background: 'rgba(0,0,0,0.8)'
			});
			var mapPal2 = $("#Modal_mapa_pal2").iziModal({
				top: '10vh',
			  radius: 5,
			  group: 'mapa_pal_2',
			  background: 'rgba(0,0,0,0.8)'
			});
			$('#mapa_movPal1').on('click',function(){
				mapPal1.iziModal('open');
			});
			$('#mapa_movPal2').on('click',function(){
				mapPal2.iziModal('open');
			});
			var mapBri1 = $("#Modal_mapa_bri1").iziModal({
				top: '10vh',
			  radius: 5,
			  group: 'mapa_pbri_1',
			  background: 'rgba(0,0,0,0.8)'
			});
			var mapBri2 = $("#Modal_mapa_bri2").iziModal({
				top: '10vh',
			  radius: 5,
			  group: 'mapa_pbri_2',
			  background: 'rgba(0,0,0,0.8)'
			});
			$('#mapa_movBri1').on('click',function(){
				mapBri1.iziModal('open');
			});
			$('#mapa_movBri2').on('click',function(){
				mapBri2.iziModal('open');
			});
	
	//----------------------TEXTOS EN FRACC---------------//
		$('.Fr_texto').hover(				
	       function () {
	        	$(this).addClass('fadeIn');
	       }, 		
	       function () {
	        	$(this).removeClass('fadeIn');
	       }
	    );

    //----------------------RESPONSIVA-------------------//
	    var _window = $(window);

	    function checkWidth() {
	        var windowsize = _window.width();
	        if(windowsize > 1360 && windowsize < 1900){
	        	  //--MODL------------//					
					modelos1 = $("#Modal_modelos1").iziModal({
					  width: '45vw',
					  top: '12vh',
					  radius: 5,
					});
					modelos2 = $("#Modal_modelos2").iziModal({
					  width: '45vw',
					  top: '12vh',
					  radius: 5,
					});
					modelos3 = $("#Modal_modelos3").iziModal({
					  width: '45vw',
					  top: '12vh',
					  radius: 5,
					});
					modelos4 = $("#Modal_modelos4").iziModal({
					  width: '45vw',
					  top: '12vh',
					  radius: 5,
					});
					modelos5 = $("#Modal_modelos5").iziModal({
					  width: '45vw',
					  top: '12vh',
					  radius: 5,
					});
					modelos6 = $("#Modal_modelos6").iziModal({
					  width: '45vw',
					  top: '12vh',
					  radius: 5,
					});
	        }
	        else{
	        	//--MODL------------//        
					modelos1 = $("#Modal_modelos1").iziModal({
					  width: '30vw',
					  top: '12vh',
					  radius: 5,
					});
					modelos2 = $("#Modal_modelos2").iziModal({
					  width: '30vw',
					  top: '12vh',
					  radius: 5,
					});
					modelos3 = $("#Modal_modelos3").iziModal({
					  width: '30vw',
					  top: '12vh',
					  radius: 5,
					});
					modelos4 = $("#Modal_modelos4").iziModal({
					  width: '30vw',
					  top: '12vh',
					  radius: 5,
					});
					modelos5 = $("#Modal_modelos5").iziModal({
					  width: '30vw',
					  top: '12vh',
					  radius: 5,
					});
					modelos6 = $("#Modal_modelos6").iziModal({
					  width: '30vw',
					  top: '12vh',
					  radius: 5,
					});
	        }

	        if (windowsize < 992) {
	            //console.log('soy mas peque!');

	            //--INIC------------//
	            	// $('#imgSlider1').attr('src','img/imgSlider1_m.png');
	            	// $('#imgSlider2').attr('src','img/imgSlider2_m.png');

	            //--FRAC------------//
	            	$('a[href="#Frac"]').on('click',function(){
						$('#palmiras').addClass('fadeOut').removeClass('fadeIn');
						$('#brisas').addClass('fadeOut').removeClass('fadeIn');
						$('#fr_mapas').addClass('fadeOut').removeClass('fadeIn');
						setTimeout(function(){	        		
					        	$('#palmiras').addClass('elem-hide');
					        	$('#brisas').addClass('elem-hide');
					        	$('#fr_mapas').addClass('elem-hide');
									$('#mp_1').removeClass('pal_mp_1');
					        		$('#mp_2').removeClass('pal_mp_2');

					        	$('#frac1').removeClass('elem-hide').addClass('fadeIn').removeClass('fadeOut');

								$('#SecPal').css('display','block').removeClass('zoomOut').removeClass('zoomIn').addClass('bounceIn');
					        	$('#SecBri').css('display','block').removeClass('zoomOut').removeClass('zoomIn').addClass('bounceIn');
								$('#SecEst').css('display','block').removeClass('zoomOut').removeClass('zoomIn').addClass('bounceIn');
								setTimeout(function(){
									$('#SecBri').removeClass('bounceIn');
									$('#SecEst').removeClass('bounceIn');
									$('#SecPal').removeClass('bounceIn');
								},1000);
				        },1000);
					});

					$('#select_fr').on('change',function(){
						if ($(this).val() == 1) {
							// console.log('selecciono Escobedo');			
							$('#SecPal').addClass('bounceIn');	

							$('#SecBri').addClass('zoomOut').removeClass('zoomIn').removeClass('bounceIn');
							$('#SecEst').addClass('zoomOut').removeClass('zoomIn').removeClass('bounceIn');
							setTimeout(function(){
								$('#SecBri').css('display','none');
								$('#SecEst').css('display','none');

								$('#SecPal').css('display','block')
											.removeClass('zoomOut').removeClass('zoomIn');
							},00);
						}
						else if($(this).val() == 2) {
							// console.log('selecciono García');
							$('#SecBri').addClass('bounceIn');

							$('#SecPal').addClass('zoomOut').removeClass('zoomIn').removeClass('bounceIn');
							$('#SecEst').addClass('zoomOut').removeClass('zoomIn').removeClass('bounceIn');
							setTimeout(function(){
								$('#SecPal').css('display','none');
								$('#SecEst').css('display','none');

								$('#SecBri').css('display','block')
											.removeClass('zoomOut').removeClass('zoomIn');
							},00);

						}
						else if($(this).val() == 3 || $(this).val() == 4){
							$('#SecEst').addClass('bounceIn');
							$('#SecEst .est').addClass('blanco');
							$('#SecPal').addClass('zoomOut').removeClass('zoomIn').removeClass('bounceIn');
							$('#SecBri').addClass('zoomOut').removeClass('zoomIn').removeClass('bounceIn');
							setTimeout(function(){
								$('#SecPal').css('display','none');
								$('#SecBri').css('display','none');

								$('#SecEst').css('display','block')
											.removeClass('zoomOut').removeClass('zoomIn');
							},00);
						}
						else if($(this).val() == 5){
							// console.log('selecciono Pesqiería');
							$('#SecEst').addClass('bounceIn');

							$('#SecPal').addClass('zoomOut').removeClass('zoomIn').removeClass('bounceIn');
							$('#SecBri').addClass('zoomOut').removeClass('zoomIn').removeClass('bounceIn');
							setTimeout(function(){
								$('#SecPal').css('display','none');
								$('#SecBri').css('display','none');

								$('#SecEst').css('display','block')
											.removeClass('zoomOut').removeClass('zoomIn');
							},00);
						}
						else{
							console.log('selecciono otro');
						}
					});
					
	        }
	        else{
	        	//console.log('ia no soy pk');

	        	 //--INIC------------//
	            	// $('#imgSlider1').attr('src','img/imgSlider1.png');
	            	// $('#imgSlider2').attr('src','img/imgSlider2.png');
	        	
	        	//--FRAC------------//
		        	$('a[href="#Frac"]').on('click',function(){
						$('#palmiras').addClass('fadeOut').removeClass('fadeIn');
						$('#brisas').addClass('fadeOut').removeClass('fadeIn');
						$('#fr_mapas').addClass('fadeOut').removeClass('fadeIn');
						setTimeout(function(){	        		
					        	$('#palmiras').addClass('elem-hide');
					        	$('#brisas').addClass('elem-hide');
					        	$('#fr_mapas').addClass('elem-hide');
									$('#mp_1').removeClass('pal_mp_1');
					        		$('#mp_2').removeClass('pal_mp_2');

					        	$('#frac1').removeClass('elem-hide').addClass('fadeIn').removeClass('fadeOut');

								$('#SecPal').css('display','inline-block').removeClass('zoomOut').removeClass('zoomIn').addClass('bounceIn');
					        	$('#SecBri').css('display','inline-block').removeClass('zoomOut').removeClass('zoomIn').addClass('bounceIn');
								$('#SecEst').css('display','inline-block').removeClass('zoomOut').removeClass('zoomIn').addClass('bounceIn');
								setTimeout(function(){
									$('#SecBri').removeClass('bounceIn');
									$('#SecEst').removeClass('bounceIn');
									$('#SecPal').removeClass('bounceIn');
								},1000);
				        },1000);
					});

					$('#select_fr').on('change',function(){
						if ($(this).val() == 1) {
							// console.log('selecciono Escobedo');			
							$('#SecPal').addClass('bounceIn');
							$('#SecEst .est').removeClass('blanco');	

							$('#SecBri').addClass('zoomOut').removeClass('zoomIn').removeClass('bounceIn');
							$('#SecEst').addClass('zoomOut').removeClass('zoomIn').removeClass('bounceIn');
							setTimeout(function(){
								$('#SecBri').css('display','none');
								$('#SecEst').css('display','none');

								$('#SecPal').css('display','inline-block')
											.removeClass('zoomOut').removeClass('zoomIn');
							},00);
						}
						else if($(this).val() == 2) {
							// console.log('selecciono García');
							$('#SecBri').addClass('bounceIn');

							$('#SecPal').addClass('zoomOut').removeClass('zoomIn').removeClass('bounceIn');
							$('#SecEst').addClass('zoomOut').removeClass('zoomIn').removeClass('bounceIn');
							setTimeout(function(){
								$('#SecPal').css('display','none');
								$('#SecEst').css('display','none');

								$('#SecBri').css('display','inline-block')
											.removeClass('zoomOut').removeClass('zoomIn');
							},00);

						}
						else if($(this).val() == 3 || $(this).val() == 4){
							$('#SecEst').addClass('bounceIn');
							$('#SecEst .est').addClass('blanco');
							$('#SecPal').addClass('zoomOut').removeClass('zoomIn').removeClass('bounceIn');
							$('#SecBri').addClass('zoomOut').removeClass('zoomIn').removeClass('bounceIn');
							setTimeout(function(){
								$('#SecPal').css('display','none');
								$('#SecBri').css('display','none');

								$('#SecEst').css('display','inline-block')
											.removeClass('zoomOut').removeClass('zoomIn');
							},00);
						}
						else if($(this).val() == 5){
							// console.log('selecciono Pesqiería');
							$('#SecEst').addClass('bounceIn');
							$('#SecEst .est').removeClass('blanco');	

							$('#SecPal').addClass('zoomOut').removeClass('zoomIn').removeClass('bounceIn');
							$('#SecBri').addClass('zoomOut').removeClass('zoomIn').removeClass('bounceIn');
							setTimeout(function(){
								$('#SecPal').css('display','none');
								$('#SecBri').css('display','none');

								$('#SecEst').css('display','inline-block')
											.removeClass('zoomOut').removeClass('zoomIn');
							},00);
						}
						else{
							console.log('selecciono otro');
						}
					});
	        		
	        }

	        if(windowsize < 768){
	            //console.log('soy mas peque!');
	        	//--PORQ------------//
	            	$('#secEsc1').addClass('elem-hide');
	            	$('.imgPC').addClass('elem-hide');
	            	$('.imgOcul').removeClass('elem-hide');
	            //--MODL------------//					

	            	palmiras_fachada = $(".pl_fachada").iziModal({
					  width: 300,
					  radius: 5,
					  group: 'palmiras1',
					  loop: true
					});
					palmiras_interior = $(".pl_interior").iziModal({
					  width: 300,
					  radius: 5,
					  group: 'palmiras2',
					  loop: true
					});
					palmiras_mapa = $(".pl_mapa").iziModal({
					  width: 300,
					  radius: 5,
					  group: 'palmiras3',
					  loop: true
					});
					
					brisas_fachada = $(".br_fachada").iziModal({
					  width: 300,
					  radius: 5,
					  group: 'brisas1',
					  loop: true
					});
					brisas_interior = $(".br_interior").iziModal({
					  width: 300,
					  radius: 5,
					  group: 'brisas2',
					  loop: true
					});
					brisas_mapa = $(".br_mapa").iziModal({
					  width: 500,
					  radius: 5,
					  group: 'brisas3',
					  loop: true
					});

					modelos1 = $("#Modal_modelos1").iziModal({
					  // width: '30vw',
					  top: '12vh',
					  radius: 5,
					});
					modelos2 = $("#Modal_modelos2").iziModal({
					  // width: '30vw',
					  top: '12vh',
					  radius: 5,
					});
					modelos3 = $("#Modal_modelos3").iziModal({
					  // width: '30vw',
					  top: '12vh',
					  radius: 5,
					});
					modelos4 = $("#Modal_modelos4").iziModal({
					  // width: '30vw',
					  top: '12vh',
					  radius: 5,
					});
					modelos5 = $("#Modal_modelos5").iziModal({
					  // width: '30vw',
					  top: '12vh',
					  radius: 5,
					});
					modelos6 = $("#Modal_modelos6").iziModal({
					  // width: '30vw',
					  top: '12vh',
					  radius: 5,
					});
	            //--FRACC------------//	
	            	$('#SecPal').on('click',function(){
	            		$('.mp_1_bri_m').addClass('elem-hide');
				        $('.mp_2_bri_m').addClass('elem-hide');
						setTimeout(function(){
				        	$('#mp_1').removeClass('pal_mp_1');
				        	$('#mp_2').removeClass('pal_mp_2');
				        	$('.mp_1_pal_m').removeClass('elem-hide');
				        	$('.mp_2_pal_m').removeClass('elem-hide');
			        	},1000);
				    });
				    $('#SecBri').on('click',	function(){
				    	$('.mp_1_pal_m').addClass('elem-hide');
				        $('.mp_2_pal_m').addClass('elem-hide');
				    	setTimeout(function(){
				    		$('#mp_1').removeClass('bri_mp_1');
				        	$('#mp_2').removeClass('bri_mp_2');
				    		$('.mp_1_bri_m').removeClass('elem-hide');
				        	$('.mp_2_bri_m').removeClass('elem-hide');
				        },1000);
				    });
	        }
	        else{
	        	//console.log('ia no soy pk');
	        	//--PORQ------------//
	        		$('#secEsc1').removeClass('elem-hide');
	        		$('.imgPC').removeClass('elem-hide');
	        		$('.imgOcul').addClass('elem-hide');
    			//--MODL------------//        		

	        		palmiras_fachada = $(".pl_fachada").iziModal({
					  width: 900,
					  radius: 5,
					  group: 'palmiras1',
					  loop: true
					});
					palmiras_interior = $(".pl_interior").iziModal({
					  width: 900,
					  radius: 5,
					  group: 'palmiras2',
					  loop: true
					});
					palmiras_mapa = $(".pl_mapa").iziModal({
					  width: 900,
					  radius: 5,
					  group: 'palmiras3',
					  loop: true
					});

					brisas_fachada = $(".br_fachada").iziModal({
					  width: 700,
					  radius: 5,
					  group: 'brisas1',
					  loop: true
					});
					brisas_interior = $(".br_interior").iziModal({
					  width: 700,
					  radius: 5,
					  group: 'brisas2',
					  loop: true
					});
					brisas_mapa = $(".br_mapa").iziModal({
					  width: 700,
					  radius: 5,
					  group: 'brisas3',
					  loop: true
					});
					
					modelos1 = $("#Modal_modelos1").iziModal({
					  width: '30vw',
					  top: '12vh',
					  radius: 5,
					});
					modelos2 = $("#Modal_modelos2").iziModal({
					  width: '30vw',
					  top: '12vh',
					  radius: 5,
					});
					modelos3 = $("#Modal_modelos3").iziModal({
					  width: '30vw',
					  top: '12vh',
					  radius: 5,
					});
					modelos4 = $("#Modal_modelos4").iziModal({
					  width: '30vw',
					  top: '12vh',
					  radius: 5,
					});
					modelos5 = $("#Modal_modelos5").iziModal({
					  width: '30vw',
					  top: '12vh',
					  radius: 5,
					});
					modelos6 = $("#Modal_modelos6").iziModal({
					  width: '30vw',
					  top: '12vh',
					  radius: 5,
					});
    			//--FRACC------------//	
			        	$('.mp_1_pal_m').addClass('elem-hide');
			        	$('.mp_2_pal_m').addClass('elem-hide');
			        	$('.mp_1_bri_m').addClass('elem-hide');
				        $('.mp_2_bri_m').addClass('elem-hide');
	        }
	    }   
	    checkWidth();    
	    $(window).resize(checkWidth);

      //------------------------------------------------//
});

$(window).scroll(function (event) {
    var scroll = $(window).scrollTop();

    var Top_INICIO = $('#inicio').position().top;
    var Top_SOMOS = $('#Somos').position().top;

    var Top_ADN = ($('#ADN').position().top) - 20;
    var Top_FRAC = ($('#FracIMG').position().top)- 20;
    var Top_PORQ = ($('#PorQ').position().top)- 20;
    var Top_ECOT = ($('#EcoT').position().top)- 20;
    var Top_PTSV = ($('#PtsV').position().top)- 20;

    var Bot_PTSV = $('#PtsV').position().top + $('#PtsV').height();
    var Top_CONT = $('#Cont').position().top;


    if (scroll <= Top_SOMOS) {
    	resetNav();
    	$('#s').addClass('here');
    }
    else if (scroll <= Top_ADN) {
    	// console.log('SOMOS');
    	resetNav();
    	$('#s').addClass('here');
    }
    else if (scroll <= Top_FRAC) {
    	// console.log('ADN');
    	resetNav();
    	$('#a').addClass('here');
    }
    else if (scroll <= Top_PORQ) {
    	// console.log('FRACCIONAMIENTOS');
    	resetNav();
    	$('#f').addClass('here');
    }
    else if (scroll <= Top_ECOT) {
    	// console.log('POR QUE');
    	resetNav();
    	$('#p').addClass('here');
    }
    else if (scroll <= Top_PTSV) {
    	// console.log('CONT');
    	resetNav();
    	$('#c').addClass('here');
    }

});
