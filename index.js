// Contact Me

document.querySelector('#contact').addEventListener('click', enviarCorreo);

function enviarCorreo() {
  window.open('mailto:raulochoa3005@gmail.com?subject=Propuesta laboral');
}


// SkILLS TABS

const tabs = document.querySelectorAll('[data-target]'),
      tabContent = document.querySelectorAll('[data-content]')

      tabs.forEach(tab => {
        tab.addEventListener("click", () => {
          const target= document.querySelector(tab.dataset.target)

          tabContent.forEach(tabContents => {
            tabContents.classList.remove('skills__active')
          })

          target.classList.add('skills__active')

          tabs.forEach(tab => {
            tab.classList.remove('skills__active')
          })

          tab.classList.add('skills__active')
        })
      })

/* Work Popup */

document.addEventListener("click", (e) => {
  if(e.target.classList.contains("work__button")) {
    togglePortfolioPopup();
    portfolioItemDetails(e.target.parentElement);
  }
})

function togglePortfolioPopup() {
  document.querySelector(".portfolio__popup").classList.toggle("open");
}

document.querySelector(".portfolio__popup-close").addEventListener("click", togglePortfolioPopup);

function portfolioItemDetails(portfolioItem) {
  document.querySelector(".pp__thumbnail img").src = portfolioItem.querySelector(".work__img").src;
  document.querySelector(".portfolio__popuo-subtitle span").innerHTML = portfolioItem.querySelector(".work__title").innerHTML;
  document.querySelecotr(".portfolio__popup-body").innetHTML = portfolioItem.querySelector(".portfolio__item-details").innerHTML;
}

/* Scroll Sections active */

const sections = document.querySelectorAll('section[id]')

window.addEventListener("scroll", navHighlighter)


function navHighlighter() {
// get current scroll position
  let scrollY = window.pageYOffset;
// how we long througt section to get height, top and ID values for each
  sections.forEach(current => {
    const sectionHeight = current.offsetHeight;
    const sectionTop = current.offsetTop - 50,
    sectionId = current.getAttribute("id");

    if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight)
    {
      document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.add('active-link')
    }
    else
    {
      document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.remove('active-link')
    }

  })
}