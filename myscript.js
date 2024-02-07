 

 $('.my-item').isotope({
     // options
     itemSelector: '.item',
     layoutMode: 'fitRows'
   });
     $('.my-menu ul li').click(function(){
         $('.my-menu ul li').removeClass('active');
         $(this).addClass('active');

         var selector = $(this).attr('data-filter');
         $('.my-item').isotope({
             filter:selector
         });
         return false;
     });

menu = document.querySelector('.menu')
member = document.querySelector('.member')
gallery = document.querySelector('#gallery')


member.addEventListener('click',()=>{
   Selection.show('member')
})