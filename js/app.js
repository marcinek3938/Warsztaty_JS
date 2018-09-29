'use strict';

document.addEventListener('DOMContentLoaded', function() {
    var menuButton = document.querySelector('.for-dropdown');
    var subMenu = document.querySelector('.dropdown');

    menuButton.addEventListener('mouseover', function() {
        subMenu.style.display = 'block';
    });
    menuButton.addEventListener('mouseout', function() {
        subMenu.style.display = 'none';
    });

    var buttons = document.querySelectorAll('.read-more');

    function showHide() {
  
      var textArea = this.previousElementSibling;
     
      if (textArea.style.display === 'none' || textArea.style.display === '') {
        textArea.style.display = 'block';
        this.innerHTML = 'MNIEJ <span class="glyphicon glyphicon-chevron-up"></span>';
      } else {
        textArea.style.display = 'none';
        this.innerHTML = 'WIĘCEJ <span class="glyphicon glyphicon-chevron-down"></span>';
      }
    }
  
    for (var i = 0; i < buttons.length; i++) {
      buttons[i].addEventListener('click', showHide);
    }

var menu = document.querySelector('.navbar');

    window.addEventListener('scroll', function() {
        menu.style.borderBottom = '1px solid #7f7f7f';
         
    });

var gora = document.querySelector('.dogory');
  
    gora.addEventListener('click', function() {
    window.scroll (0,0);
    });

var items = document.querySelectorAll('.org');
var dots = document.querySelectorAll('.dot');
var indexClicked;

    for (var i = 0; i < dots.length; i++) {
        dots[i].addEventListener('click', function() {
            for (var i = 0; i < items.length; i++) {
                dots[i].classList.remove('active');
                items[i].classList.remove('visible')       
            }
    
    this.classList.add('active');        

    for (var i = 0; i < dots.length; i++) {
        indexClicked = i;
        break;
    }
        
        
        
        });
      }

    });
