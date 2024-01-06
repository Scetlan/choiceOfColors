const links = document.querySelectorAll("li");
const items = document.querySelectorAll('.link');

links.forEach(link => {
   switch (link.textContent) {
      case 'A':
         link.style.background = 'aqua';
         break;
      case 'S':
         link.style.background = 'chartreuse';
         break;
      case 'G':
         link.style.background = 'cornflowerblue';
         break;
      case 'O':
         link.style.background = 'darkcyan';
         break;
      case 'X':
         link.style.background = 'gold';
         break;

      default:
         break;
   }
})

links.forEach(btn => {
   btn.addEventListener('click', () => {
      const text = btn.textContent;

      items.forEach(item => {
         if (item.textContent === text) {
            item.classList.remove('opacity');
         } else {
            item.classList.add('opacity');
         }
      });
   });
});
