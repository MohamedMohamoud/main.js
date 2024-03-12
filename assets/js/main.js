const navMenu = document.getElementById("nav--menu"),
      navToggle =document.getElementById("nav-toggle"),
      navClose = document.getElementById("nav-close")


      if (navToggle){
        navToggle.addEventListener('click', () =>{
            navMenu.classList.add ('show-menu')
        })
      }


      if (navClose){
        navClose.addEventListener('click', () =>{
            navMenu.classList.remove ('show-menu')
        })
      }



      let swiperProjects = new Swiper(".projects__container", {
       loop:true,
       spaceBetween:24,

        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
        pagination: {
          el: ".swiper-pagination",
        },
        breakpoints: {
          1200: {
            slidesPerView: 2,
            spaceBetween: -56,
          },
        },
      });





  const contactForm = document.getElementById("contact-form"),   
        contactName = document.getElementById("contact-name"),
        contactEmail = document.getElementById("contact-email"),
        contactProject = document.getElementById("contact-project"),
        contactMessage = document.getElementById("contact__message")
  const sendEmail = (e) =>{
    e.preventDefault()
    if(contactName.value === "" || contactEmail.value ==="" || contactProject.value === ""){
      contactMessage.classList.remove('color-blue')
      contactMessage.classList.add('color-red')



      // showmessage////

      contactMessage.textContent = "write all input fields ✉"
    }else{
      emailjs.sendForm('service_7tvu9r5','template_omjbsp','#contact-form','s-l-KVo7Gq08SAkTV')
      .then(() =>{
        contactMessage.classList.add("color-blue")
        contactMessage.textContent = "Message sent ✔" 
        setTimeout(() =>{
          contactMessage.textContent =''
        }, 5000 )
      } ,(error)=>{
        alert('opps! SOMETIMES HAS FAILD....',error)
      }
      )
    }
    contactName.value =''
    contactEmail.value =''
    contactProject.value =''

  }
  contactForm.addEventListener("submit",sendEmail)
          







// const sections =document.querySelector('section[id]')
// const scrollActive = () =>{
//   const scrollY = Window.pageYOffset

//   sections.forEach(current=>{
//     const sectionHeight = current.offsetHeight,
//           sectionTop = current.offsetTop - 58,
//           sectionId = current.getAttribute('id'),
//           sectionClass = document.querySelector('.nav--menu a[href*=' + sectionId)

//     if(scrollY> sectionTop && scrollY <= sectionTop + sectionHeight){
//       sectionClass.classList.add ('active-link')
//     }else{
//       sectionClass.classList.remove('active-link')
//     }
//   })
// }
// window.addEventListener('scroll,scrollActive')

// =====================show scroll up=========================//
const scrollUp = () =>{
  const scrollUp = document.getElementById('scroll-up')
  this.scrollY >= 350 ? scrollUp.classList.add('show-scroll')
                      : scrollUp.classList.remove('show-scroll')
}
window.addEventListener('scroll', scrollUp)





  /*=============== DARK LIGHT THEME ===============*/ 
  const icon = document.getElementById("icon");
  icon.addEventListener("click", () => {
      document.body.classList.toggle("dark-theme");
      if(document.body.classList.contains("dark-theme")){
        icon.src = "assets/img/sun.png";
      } else {
        icon.src = "assets/img/moon.png";
      }
  });



  // ==========================loader///==================
  window.addEventListener("load",() =>{
    const loader = document.querySelector(".loader")
    loader.classList.add("loader-hidden")
    loader.addEventListener("transitionend",() =>{
      document.body.removeChild("loader")
    })
  })