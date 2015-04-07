function setEqualHeight(columns)  
{
   var tallestcolumn = 0;  
   columns.each
   (  
      function()  
      {  
         currentHeight = $(this).height();  
         if (currentHeight > tallestcolumn)  
         {  
            tallestcolumn  = currentHeight;  
         }  
      }  
   );  
   columns.height(tallestcolumn);  
}

function photobox()
{
   $('.sidetitle1').each
   (
      function()
      {
            var text = $(this).children('div').children('span').eq(0).text();
            var current = parseInt (text.split('/')[0]);
            var total = parseInt (text.split('/')[1]);
            var animate = parseInt ($(this).next().find('ul').css('margin-left'));
            if (!$(this).next().find('ul').is(':animated') && !$(this).parent().is(':hover'))
            {
               if (current == total)
               {
                  $(this).children('div').children('span').eq(0).text(1 + '/' + total);
                  $(this).next().find('ul').animate({marginLeft: 0}, 500);
               }
               else
               {
                  $(this).children('div').children('span').eq(0).text(current + 1 + '/' + total);
                  $(this).next().find('ul').animate({marginLeft: -244 * current}, 500);
               }
            }
      }
   );
}


$(document).ready(function()
   {
      
      $('.mediamenu div').click
      (
         function()
         {
            if (!$(this).hasClass('current'))
            {
               $('.mediamenu div').removeClass('current');
               $(this).addClass('current');
               $('#mediabox ul').hide();
               $('#mediabox ul').eq($(this).index()).slideDown('slow');
            }
            else
            {
               $('.mediamenu div').removeClass('current');
               $('#mediabox ul').slideUp('slow');
            }
         }
      );
      if ($('#topmenu li.current-menu-item').length)
      {
         if ($('#topmenu li.current-menu-item ul').length)
         {
            $('.topmenu_sub').remove();
            $('#topmenu li.current-menu-item ul').clone().insertAfter('#topmenu');
         }
         else
         {
             $('#topmenu').after('<ul class="topmenu_sub"></ul>');
         }
         $('#topmenu').next('ul.sub-menu').addClass('topmenu_sub');
      }
      $('#topmenu a').hover
      (
         function()
         {
            if (!$(this).parent('li').hasClass('current-menu-item'))
            {
               $('#topmenu li').removeClass('current-menu-item');
               $(this).parent('li').addClass('current-menu-item');
               $('.topmenu_sub').remove();
               if ($(this).next('ul').length)
               {
                  $(this).next('ul').clone().insertAfter('#topmenu');
               }
               else
               {
                  $('#topmenu').after('<ul class="topmenu_sub"></ul>');
               }
               $('#topmenu').next('ul.sub-menu').addClass('topmenu_sub');
            }
         }
      );
      if ($('.footmenu li.current-menu-item').length || $('.footmenu li.current-menu-parent').length)
      {
         $('.footmenu li.current-menu-item ul').clone().insertAfter('.footmenu');
         $('.footmenu').next('ul.sub-menu').addClass('footmenu_sub');
      }
      $('.footmenu a').hover
      (
         function()
         {
            if (!$(this).parent('li').hasClass('current-menu-item'))
            {
               $('.footmenu li').removeClass('current-menu-item');
               $(this).parent('li').addClass('current-menu-item');
               $('.footmenu_sub').remove();
               $(this).next('ul').clone().insertAfter('.footmenu');
               $('.footmenu').next('ul.sub-menu').addClass('footmenu_sub');
            }
         }
      );

      if ($('.sidetitle1').length)
      {
         $('.sidetitle1').each
         (
            function()
            {
               var count = $(this).next('div').find('li').length;
               /*$(this).children('div').after('<div><span>1/' + count + '</span><span title="Назад" class="st_left">Назад</span><span title="Вперед" class="st_right">Вперед</span></div>');*/
            }
         );
         var rotateSwitch = function() {play = setInterval(photobox, 6000)};
         rotateSwitch();
      }
      $('.sidetitle1 span.st_left, .sidetitle1 span.st_right').click
      (
         function()
         {
            var text = $(this).parent().children('span').eq(0).text();
            var current = parseInt (text.split('/')[0]);
            var total = parseInt (text.split('/')[1]);
            var animate = parseInt ($(this).parents('.sidetitle1').next().find('ul').css('margin-left'));
            if (!$(this).parents('.sidetitle1').next().find('ul').is(':animated'))
            {
               if ($(this).attr('class') == 'st_left')
               {
                  if (current != 1)
                  {
                     current = current - 1;
                     animate = animate + 244;
                  }
               }
               else if ($(this).attr('class') == 'st_right')
               {
                  if (current != total)
                  {
                     current = current + 1;
                     animate = animate - 244;
                  }
                }
               else
               {
                  return false;
               }
               $(this).parent().children('span').eq(0).text(current + '/' + total);
               $(this).parents('.sidetitle1').next().find('ul').animate({marginLeft: animate}, 500);
            }
            else
            {
               return false;
            }
         }
      );
      
      if ($('.singlestory .ss_tabs li').length && $('.singlestory .ss_item').length)
      {
         $('.singlestory .ss_tabs li:first-child').addClass('current');
         $('.singlestory .ss_item').not(':first').hide();
      }
      $('.singlestory .ss_tabs li').click
      (
         function()
         {
            if (!$(this).hasClass('current'))
            {
               $('.singlestory .ss_tabs li').removeClass('current');
               $(this).addClass('current');
               $('.singlestory .ss_item').hide();
               $('.singlestory .ss_item').eq($(this).index()).slideDown('slow');
            }
         }
      );
	  
      if ($('.jastbox').length)
      {
	     $('.jastbox').each
		 (
		    function()
			{
			   setEqualHeight($(this).children('li'));
			}
		 );
      }
      $('#intop').click
      (
         function()
         {
            $('html, body').animate({scrollTop: 0}, 500);
         }
      );
   }
);
$(window).bind
(
   'load scroll',
   function ()
   {
      $('#topline').css('left', - $(window).scrollLeft());
   }
);
$(window).bind
(
   'load resize scroll',
   function()
   {
      var element = $('#intop');
      var winWidth = $(window).width();
      var wrapWidth = 1080;
      var elemWidth = element.width();
      var winScroll = $(window).scrollTop();
      var valScroll = 150;
      if ((elemWidth > ((winWidth - wrapWidth) / 2)) || (winScroll < valScroll))
      {
         element.hide();
      }
      else
      {
         element.show();
      }
   }
);