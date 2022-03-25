$(document).ready(function() {
   $("#game1").click(function() {
    $(this).show('slow', function() {
      $("#gameOne").css('display', 'block');
    });
  });
//Recupérer les images pour les mettre dans un tableau
  $('.game__figurine').map(function() {
    return $(this.images).val();
    
  })
  .get().join(",");

  console.log(this.images);
  //Récupére un HTMLCollection
  //Faire une boucle pour lire le tableau et afficher les cartes avec un click
  $('.game__figurine').each(function(){ 
     $(this).click(function() {
       let index = $(this);
       $( index).show();
     })
       
  
    })
 /*  
  $('#case1').click(function() {
    $('.img1').show(500);
  })
  $('#case2').click(function() {
    $('.img2').show();
  })
  $('#case3').click(function() {
    $('.img3').show();                                                                                                                                                                                                                     
  })
  $('#case4').click(function() {
    $('.img4').show();
  })
  $('#case5').click(function() {
    $('.img5').show();
  })
  $('#case6').click(function() {
    $('.img6').show();
  })
  $('#case7').click(function() {
    $('.img7').show();
  })
  $('#case8').click(function() {
    $('.img8').show();
  })
  $('#case9').click(function() {
    $('.img9').show();
  })
  $('#case10').click(function() {
    $('.img10').show();
  })
  $('#case11').click(function() {
    $('.img11').show();
  })
  $('#case12').click(function() {
    $('.img12').show();
  })
  $('#case13').click(function() {
    $('.img13').show();
  })
  $('#case14').click(function() {
    $('.img14').show();
  })
  $('#case15').click(function() {
    $('.img15').show();
  })
  $('#case16').click(function() {
    $('.img16').show();
  }) */
})