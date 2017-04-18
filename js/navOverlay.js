/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


$(function() {
  //chache DOM Elements
  var $overlayNav = $('.flex-overlay');
  var $hamburger = $('#hamburger');

  var $panels = $('#home, #about, #projects, #contact');
  var $panelTitles = $('#home .titles, #about .titles, #projects .titles, #contact .titles');
  var $hiddenDescription = $('.hidden-description');
  var $hiddenDestination = $('.hidden-destination');
  
  /* Hide overlay on load */
  $overlayNav.add($panels).add($panelTitles).add($hiddenDescription).add($hiddenDestination).toggle();
  
  /* Functions */
  function panelHover() {
    $('.panel').hover(function() {
      $(this).find('.hidden-description').fadeToggle();
    });
  }
  
  function panelClicked(){
    $('.panel').click(function() { 
      //flip out each panel that is NOT the chosen one  
      $('.panel').not(this).each(function(){
        $(this).addClass('animated flipOutY');
      });
      //go to destination but delay to let animations go
      var $destination = $(this).find('.hidden-destination').text();
      setTimeout(function(){window.location = $destination;},1500);
  
    });
  }

  function hamburgerClicked() {
    //clear BG image  
    $('body').css('background','none');  
    //hide original nav and show overlay
    $overlayNav.toggle().siblings().toggle();
    //flip each column panel and then show text
    $panels.toggle().addClass('animated flipInY');
    $panelTitles.delay(4000).toggle().addClass('animated fadeInDown');
  }
  
  $hamburger.click(function() {
    hamburgerClicked();
  });
  
 /* panel actions and behaviours */
 panelHover();
 panelClicked();

});