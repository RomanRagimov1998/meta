
const swiper = new Swiper('.artists-slider', {
	loop: true,

	spaceBetween: 394,
	centeredSlides: true,
	slidesPerView: 'auto',
	breakpoints: {
		320: {
			spaceBetween: 60,
		},
		769: {
			spaceBetween: 180,
		},
		1000: {

		},
		1440: {
			spaceBetween: 394,
		},
	},
	freeMode: true,
	autoplay: {
		delay: 10,
		stopOnLastSlide: false,
		disableOnInteraction: false,
	},
	speed: 4000,
});

const slider = new Swiper('.partners-slider', {
	// Optional parameters
	slidesPerView: 'auto',
	slidesPerColumn: 2,
	spaceBetween: 80,
	freeMode: true,
	autoplay: {
		delay: 10,
		stopOnLastSlide: false,
		disableOnInteraction: false,
	},
	speed: 4000,
	loop: true,
});



$(document).ready(function () {
	$(document).click(function (e) {
		const target = e.target;
		if (target.classList.contains('question-faq__top-sector')) {
			const tabs = document.querySelectorAll('.question-faq__top-sector');
			let indexActive = undefined;
			for (let index = 0; index < tabs.length; index++) {
				document.querySelectorAll('.question-faq__bottom-sector')[index].id = `tab_${index}`;
				if (target == tabs[index]) {
					if (tabs[index].classList.contains('_tab-active')) {
						$(`#tab_${index}`).slideUp('slow');
						tabs[index].classList.remove('_tab-active');
					} else {
						$(`#tab_${index}`).slideDown('slow')
						tabs[index].classList.add('_tab-active');
					}
				}
			}
		}
		if (target.classList.contains('story-block__section')) {
			const sections = document.querySelectorAll('.story-block__section');
			const sectionContents = document.querySelectorAll('.section-content');
			let sectionIndexCurrent;
			let sectionIndexActive;
			console.log(sectionIndexActive)
			for (let index = 0; index < sections.length; index++) {
				const section = sections[index];
				if (section.classList.contains('_story-section-active')) {
					sectionIndexActive = index;
				}
				if (target == section) {
					sectionIndexCurrent = index;
				}
			}
			sections[sectionIndexActive].classList.remove('_story-section-active');
			sectionContents[sectionIndexActive].classList.remove('_section-content-active');
			sections[sectionIndexCurrent].classList.add('_story-section-active');
			sectionContents[sectionIndexCurrent].classList.add('_section-content-active');
		}
	})
})

