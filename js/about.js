/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

$(function(){
    
    function calculateAboutBGHeight(){
        $('#about-bg').css("height", $whoHeight);
    }
    
    /*need to do this everytime window is resized*/
    var $whoHeight = $('.flex-nav').outerHeight(true)  + $('.flex-main-item#who-text').outerHeight(true);
    calculateAboutBGHeight();
    
    
});

