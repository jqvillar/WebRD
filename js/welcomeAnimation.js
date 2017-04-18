/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

$(function(){
    //cache DOM
    var $welcomeBG = $('#welcome-bg');
    var $nav = $('.flex-nav');
    var $intro = $('.intro-container');
    var $socialIcons = $('.social-icons');
    
    $welcomeBG.add($nav).add($intro).add($socialIcons).toggle();
    
    $welcomeBG.add($intro).fadeIn(2000);
    $nav.add($socialIcons).fadeIn(2500);
    
});