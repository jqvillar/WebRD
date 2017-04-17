/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


$(function() {
  //chache DOM Elements
  var $overlayNav = $('.flex-overlay');
  var $nav = $('.flex-nav');
  var $hamburger = $('#hamburger');
  var $cover = $('#cover');

  var $panels = $('#home, #about, #projects, #contact');
  var $panelTitles = $('#home .titles, #about .titles, #projects .titles, #contact .titles');
  var $hiddenDescription = $('.hidden-description');

  /*Hide overlay on load*/
  $overlayNav.add($panels).add($panelTitles).add($hiddenDescription).toggle();

  function panelHover() {
    $('#home').hover(function() {
      $(this).find('.hidden-description').fadeToggle();
    });
    $('#about').hover(function() {
      $(this).find('.hidden-description').fadeToggle();
    });
    $('#projects').hover(function() {
      $(this).find('.hidden-description').fadeToggle();
    });
    $('#contact').hover(function() {
      $(this).find('.hidden-description').fadeToggle();
    });
  }

  function hamburgerClicked() {
    //hide original nav and show overlay
    $nav.add($cover).toggle();
    $overlayNav.toggle();
    //flip each column panel and then show text
    $panels.toggle().addClass('animated flipInY');
    $panelTitles.delay(4000).toggle().addClass('animated fadeInDown');
    /* IMPORTANT NOTE:
    Find a better way to get hidden description to slide in on panel hover and take out the repetition in code*/
    panelHover();
  }
  
  $hamburger.click(function() {
    hamburgerClicked();
  });

});