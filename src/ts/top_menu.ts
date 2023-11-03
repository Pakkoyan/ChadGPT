
// Функция изменяет каждую секунду картинку, с чадами
document.addEventListener('DOMContentLoaded', () => {
   let icon = document.querySelector('.top-menu-icon') as HTMLImageElement || null;
   let i = 2;
   setInterval(() => {
       icon.src = `src/assets/gigachad-${i}.png`;
       i++;
       if (i === 4) {
           i = 1;
       }

   }, 1200);
});