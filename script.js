const sections = document.querySelectorAll(".section")
const sectBtns = document.querySelectorAll(".controls")
const sectBtn = document.querySelectorAll(".control")
const allSections = document.querySelector(".main-content")
const ctaBtn = document.querySelector(".cta-btn")
const ctaBtns = document.querySelectorAll(".cta-btn")
const contactSec = document.getElementById("contact")
const contactBtn = document.querySelector(".control-5")

// CHANGE PAGE TRANSITION -- CHANGE PAGE TRANSITION -- CHANGE PAGE TRANSITION
function PageTransitions() {
  //button click active class

  for (let i = 0; i < sectBtn.length; i++) {
    sectBtn[i].addEventListener("click", function () {
      let currentBtn = document.querySelectorAll(".active-btn")
      currentBtn[0].className = currentBtn[0].className.replace(
        "active-btn",
        ""
      )
      this.className += " active-btn"
    })
  }

  // Sections active class
  allSections.addEventListener("click", (e) => {
    const id = e.target.dataset.id
    if (id) {
      // remove selected from the other btns
      sectBtn.forEach((btn) => {
        btn.classList.remove("active")
      })
      // e.target.classList.add("active"); <--- might be useless
      // hide other sections
      sections.forEach((section) => {
        section.classList.remove("active")
      })

      const element = document.getElementById(id)
      element.classList.add("active")
    }
  })

  ctaBtns.forEach((button) => {
    button.addEventListener("click", (e) => {
      sections.forEach((section) => {
        section.classList.remove("active")
      })
      contactSec.classList.add("active")

      let currentBtn = document.querySelector(".active-btn")
      console.log(currentBtn)
      currentBtn.classList.remove("active-btn")
      contactBtn.classList.add("active-btn")
    })
  })

  // // Toggle theme
  // const themeBtn = document.querySelector(".theme-btn");
  // themeBtn.addEventListener("click", () => {
  //   let element = document.body;
  //   element.classList.toggle("light-mode");
  // });
}
PageTransitions()

// TYPEWRITER FEATURE --  TYPEWRITER FEATURE -- TYPEWRITER FEATURE

// Start of the typing animation within the header
const TypeWriter = function (txtElement, words, wait = 3000) {
  this.txtElement = txtElement //the span for the element holding the word
  this.words = words // The variable for the array of words
  this.txt = "" // variable for the animation of the typing
  this.wordIndex = 0 //starting with the first word at the index of 0
  this.wait = parseInt(wait, 10) //check it's an integer for the wait time
  this.type() //method of type that's associated with the typewriter
  this.isDeleting = false //represents the state if it's deleting or not
}

// a way we add a method to the typeWriter is by using prototypes
TypeWriter.prototype.type = function () {
  //current index of the word (counting down from 1)
  // use the modulus operator "%" to get the remainder of the division
  const currentWord = this.wordIndex % this.words.length

  //Get the full text of of the word
  const fullTxt = this.words[currentWord]

  //Check if the words are deleting
  // The substring() method extracts characters from start to end
  if (this.isDeleting) {
    //removing letters
    this.txt = fullTxt.substring(0, this.txt.length - 1)
  } else {
    //add letters
    this.txt = fullTxt.substring(0, this.txt.length + 1)
  }

  //insert txt into elements
  //use template leteral `${}` to interpolate variables
  this.txtElement.innerHTML = `<span class="txt">${this.txt}</span>`

  //type speed
  // type speed changes (stop, faster deleting, etc), so use let
  let typeSpeed = 200

  // if isDeleting is true, cut the speed by half
  if (this.isDeleting) {
    typeSpeed /= 2
  }

  // check to see if the words are complete
  if (!this.isDeleting && this.txt === fullTxt) {
    // this will make the animation pause at the end
    typeSpeed = this.wait

    // set isDeleting back to true
    this.isDeleting = true

    // this is the "if" once it's completes typing out the word
  } else if (this.isDeleting && this.txt === "") {
    this.isDeleting = false

    // move to the next word indrumenting by 1
    this.wordIndex++

    // pause before starting the next word
    typeSpeed = 300
  }

  // timer for each letter that is added or deleted
  setTimeout(() => this.type(), typeSpeed) // 2 words per second
}

// initializing on DOM load
document.addEventListener("DOMContentLoaded", initializeText)
function initializeText() {
  // getting the h2 element on the DOM
  const txtElement = document.querySelector(".txt-type")

  // getting the text attributes using "data-"
  // need to use JSON.parse() method to turn string into an array
  const words = JSON.parse(txtElement.getAttribute("data-words"))

  // getting the wait attribute using "data-"
  const wait = txtElement.getAttribute("data-wait")

  //initialize the typewriter function
  new TypeWriter(txtElement, words, wait)
}

// Homepage Image Tilt:
const homepageSection = document.querySelector(".sec1")
homepageSection.addEventListener("mousemove", (event) => {
  const clientX = event.clientX
  const clientY = event.clientY

  const homepageImage = document.querySelector(".homepageImage")
  homepageImage.style.transform = `perspective(1000px) rotateY(${
    clientX / 50
  }deg) rotateX(${clientY / 50}deg) scale3d(1, 1, 1)`
})

// parralax effect on main page titles
// will be adding a slight parallax effect on Intersection Observer > getBoundingClientRect.
const mainSectionTitles = document.querySelectorAll(".section-title-main")
const mainSectionTitleOptions = {
  rootMargin: "0px",
  threshold: 0,
}
const mainSectionTitleobserver = new IntersectionObserver(function (
  entries,
  mainSectionTitleobserver
) {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      function parallaxEffect() {
        let clientRect = entry.target.getBoundingClientRect()
        let fromTop = clientRect.y / 10
        entry.target.style.transform = `translateY(${fromTop}px)`
      }
      document.addEventListener("scroll", parallaxEffect)
    }
  })
},
mainSectionTitleOptions)
mainSectionTitles.forEach((title) => {
  mainSectionTitleobserver.observe(title)
})

// About Us headshot Animation
document.addEventListener("scroll", () => {
  // for the first headshot
  const headshotImgOne = document.querySelector(".headshotImgOne")
  let headShotOneBoundClientRect = headshotImgOne.getBoundingClientRect()
  let headshotOneFromTop = headShotOneBoundClientRect.y - 30
  headshotImgOne.style.transform = `perspective(1000px) rotateY(${
    headshotOneFromTop / 10
  }deg) scale3d(1, 1, 1)`

  // for the second headshot
  const headshotImageTwo = document.querySelector(".headshotImgTwo")
  let headShotTwoBoundClientRect = headshotImageTwo.getBoundingClientRect()
  let headshotTwoFromTop = (headShotTwoBoundClientRect.y - 30) * -1
  headshotImageTwo.style.transform = `perspective(1000px) rotateY(${
    headshotTwoFromTop / 10
  }deg) scale3d(1, 1, 1)`

  // for bottom text section
  const aboutUsTextContainer = document.querySelector(
    ".about-section-3-text-container"
  )
  let aboutUsTextContainerClientRect =
    aboutUsTextContainer.getBoundingClientRect()
  const aboutUsTextContainerY = aboutUsTextContainerClientRect.y
  const maxBoxShadowSize = 20
  let boxShadowValue = maxBoxShadowSize - aboutUsTextContainerY / 35
  if (boxShadowValue < 0) {
    return
  } else if (boxShadowValue > 0 && boxShadowValue < 30) {
    aboutUsTextContainer.style.boxShadow = `${boxShadowValue}px -${boxShadowValue}px 0px 0px #e63946, -${boxShadowValue}px ${boxShadowValue}px 0px 0px #e63946`
  } else {
    aboutUsTextContainer.style.boxShadow = `10px -10px 0px 0px #e63946, -10px 10px 0px 0px #e63946`
  }
})

// Our services section phone parallax effect
const servicesPageObserverOption = {
  rootMargin: "0px",
  threshold: 0,
}
const servicesPagePhone = document.querySelector(".servicesPage-phone")
function moveServicePagePhone() {
  const servicesPagePhoneObserver = new IntersectionObserver(function (
    entries,
    servicesPagePhone
  ) {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const windowHeight = window.innerHeight
        let boundingClient = entry.target.getBoundingClientRect()
        let boundingClientY = boundingClient.y
        let scrollFromTop = windowHeight - boundingClientY
        let moveAmount = scrollFromTop / 20 - 50
        entry.target.style.transform = `translateY(${moveAmount}px)`
      }
    })
  },
  servicesPageObserverOption)
  servicesPagePhoneObserver.observe(servicesPagePhone)
}
window.addEventListener("scroll", moveServicePagePhone)

// Form script
const formSubmit = document.getElementById("form-submit")

function sendMail() {
  let params = {
    name: document.getElementById("name").value,
    email: document.getElementById("email").value,
    phone: document.getElementById("phone").value,
    message: document.getElementById("message").value,
  }

  const serviceID = "service_cz2czxg"
  const templateID = "template_g39s1td"

  emailjs
    .send(serviceID, templateID, params)
    .then((res) => {
      document.getElementById("name").value = ""
      document.getElementById("email").value = ""
      document.getElementById("phone").value = ""
      document.getElementById("message").value = ""
      console.log(res)
      alert("Thank you, your message has been successfully submitted")
    })
    .catch((error) => console.log(error))
}

formSubmit.addEventListener("click", function (event) {
  event.preventDefault()
  sendMail()
})

// Intersection observer
const observer = new IntersectionObserver((entries, observer) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("visible")
    } else {
      entry.target.classList.remove("visible")
    }
  })
})
// Portfolio section

const galleryItems = document.querySelectorAll(".gallery-item")
galleryItems.forEach((item) => {
  observer.observe(item)
})

// contact section
const inputs = document.querySelectorAll("input")
const textarea = document.querySelector("textarea")
const contactForm = document.getElementById("contact-form")
const contactText = document.querySelector(".contact-text")
const triangle = document.querySelector(".triangle")
const dots = document.querySelector(".dots")

const contactEls = [textarea, contactForm, contactText, triangle, dots]

contactEls.forEach((el) => {
  observer.observe(el)
})

inputs.forEach((input) => {
  observer.observe(input)
})
