
// // change nav bar
// window.addEventListener('scroll', () =>{
//     document.querySelector('nav').classList.toggle('window-scroll', window.scrollY > 10)
// })

// Carousel
function changeBg(bg, title){
    const banner = document.querySelector('.banner');
	const content = document.querySelectorAll('.content');
	banner.style.background = `url("../assets/img/${bg}")`;
	banner.style.backgroundSize = 'cover';
	banner.style.backgroundPosition = 'center';

	content.forEach(content => {
		content.classList.remove('active');
		if(content.classList.contains(title)) {
			content.classList.add('active');
		}
	});
}