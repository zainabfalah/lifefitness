//رفل قاسم محمد -معلومات-صباحي

//Navegation Menu

let bar_icon = document.querySelector('.bar-icon');
let nav = document.querySelector('.nav');
let links = document.querySelector('.container-list');
let off_on = true;

bar_icon.addEventListener('click', function(){
   this.classList.toggle('active');

   if (off_on == true) {
   	  links.style.width = '100%';
   	  links.style.overflow = 'hidden';
   	  links.style.transition = '0.5s';

   	  nav.style.background = '#f1f4df';
   	  nav.style.transition = '0.5s';

   	  off_on = false;
   }else{
   	  off_on = true;

   	  links.style.width = '0%';
   	  links.style.overflow = 'hidden';
   	  links.style.transition = '0.5s';

   	  nav.style.background = 'transparent';
   	  nav.style.transition = '0.5s';
   }

});

