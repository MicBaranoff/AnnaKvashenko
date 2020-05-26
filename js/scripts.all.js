(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
var title;
var in_process = false;
    
    $('.site-wrapper header nav a').click(function (e) {
        e.preventDefault();
        let link  = $(this).attr('href');
        if (!in_process) {
            in_process = true;
            $('body').css('opacity', '0');
            setTimeout(function () {
                console.log('GOOOO');
                in_process = false;
                window.location = link;
                }, 500);
            
        }  
    });
    $('.menu').click(function () {
        $('header nav').toggleClass('active');
    });
$(document).ready(function(){
    
    title = $('title').text();
    console.log(title);
    $('.site-wrapper header nav > ul > li > a').removeClass('active');
    $('.site-wrapper header nav > ul > li > a[data-name="'+ title +'"]').addClass('active');

    $('[data-fancybox="gallery"]').fancybox({
        toolbar: true,
        buttons: [
            
            "close"
          ],
        btnTpl: {
            zoom: false,
            close:
            '<button data-fancybox-close class="fancybox-button fancybox-button--close" title="{{CLOSE}}">' +
            '<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20">' +
                '<g fill="none" fill-rule="evenodd">' +
                    '<path fill="#D8D8D8" fill-opacity="0" d="M0 0H20V20H0z"/>' +
                    '<path fill="#000" fill-rule="nonzero" d="M11.625 9.987l6.994-6.993c.455-.455.455-1.19 0-1.645-.455-.455-1.19-.455-1.645 0L9.98 8.342 2.987 1.35c-.455-.455-1.19-.455-1.646 0-.455.454-.455 1.19 0 1.645l6.994 6.993-6.994 6.994c-.455.455-.455 1.19 0 1.645.227.227.525.341.823.341.298 0 .596-.114.823-.34l6.993-6.994 6.994 6.993c.226.227.524.341.822.341.298 0 .596-.114.823-.34.455-.456.455-1.191 0-1.646l-6.994-6.994z"/>' +
                '</g>' +
            '</svg>'
            +
            "</button>",


          arrowLeft: '<button data-fancybox-prev class="fancybox-button fancybox-button--arrow_left prev" title="{{PREV}}">' +
            '<svg style="transform: rotate(180deg)" xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 26 26">' +
    '<g  fill="none" fill-rule="evenodd">' +
        '<path fill="#D8D8D8" fill-opacity="0" d="M0 0H26V26H0z"/>' +
        '<path fill="#000" fill-rule="nonzero" d="M20.698 12.271L9.719 1.293c-.39-.39-1.02-.39-1.41 0-.391.39-.391 1.02 0 1.41L18.58 12.978 8.308 23.25c-.39.39-.39 1.02 0 1.411.195.195.45.292.706.292.255 0 .51-.097.705-.292l10.979-10.979c.39-.39.39-1.02 0-1.41z"/>' +
    '</g>' +
'</svg>' +
            "</button>",
      
          arrowRight: '<button data-fancybox-next class="fancybox-button fancybox-button--arrow_right next" title="{{NEXT}}">' +
          '<svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 26 26">' +
          '<g  fill="none" fill-rule="evenodd">' +
              '<path fill="#D8D8D8" fill-opacity="0" d="M0 0H26V26H0z"/>' +
              '<path fill="#000" fill-rule="nonzero" d="M20.698 12.271L9.719 1.293c-.39-.39-1.02-.39-1.41 0-.391.39-.391 1.02 0 1.41L18.58 12.978 8.308 23.25c-.39.39-.39 1.02 0 1.411.195.195.45.292.706.292.255 0 .51-.097.705-.292l10.979-10.979c.39-.39.39-1.02 0-1.41z"/>' +
          '</g>' +
      '</svg>' +
            "</button>"
      
        }
      
      });

   
});
},{}]},{},[1]);
