 const textElement = document.getElementById("switch-text");
  const texts = ["English Learning", "Mr / Mina Samir"];
  let index = 0;

  setInterval(() => {
    // Fade out
    textElement.classList.add("fade-out");
    setTimeout(() => {
      // Change text
      index = (index + 1) % texts.length;
      textElement.textContent = texts[index];

      // Fade in
      textElement.classList.remove("fade-out");
      textElement.classList.add("fade-in");

      // Remove fade-in after animation
      setTimeout(() => {
        textElement.classList.remove("fade-in");
      }, 500);
    }, 500);
  }, 4000);




  document.getElementById("whatsappLink").addEventListener("click", function (e) {
    e.preventDefault();

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();

    if (!name || !email || !message) {
      alert("Please fill in all fields.");
      return;
    }

    const phoneNumber = "201002005610"; // ← غيره لرقمك بدون "+" أو "00"
    const fullMessage = `Name: ${name}%0AEmail: ${email}%0AMessage: ${message}`;
    const whatsappURL = `https://wa.me/${phoneNumber}?text=${fullMessage}`;

    window.open(whatsappURL, "_blank");
  });


  const sliders = document.querySelectorAll(".slider img")
const imgId = document.querySelector(".img-id")
const prevBtn = document.querySelector(".prev-btn")
const nextBtn = document.querySelector(".next-btn")
const galleryContainer = document.querySelector(".gallery-container")
let startSlide = 0

disabledAllControls()

function goToSlide(n){
    // هنمسح اكتف اولا 
    sliders[startSlide].classList.remove("active")

    startSlide = (n + sliders.length) % sliders.length
    // هنضف اكتف جدبد و معنى اصح بعد كدا
    sliders[startSlide].classList.add("active")

    // لعمل فاينكشن بعد ما خلصت 
    disabledAllControls()
    // لعمل اكتف عل صورة من تحت
    updateCopyActive(startSlide)
}

// addeventlistner prev button
prevBtn.addEventListener ("click", () => {
    goToSlide(startSlide - 1)
})

// addeventlistner next button
nextBtn.addEventListener ("click", () => {
    goToSlide(startSlide + 1)
})


// disabled all button
function disabledAllControls(){
    prevBtn.disabled = startSlide === 0;
    nextBtn.disabled = startSlide === sliders.length - 1;
    // لاظهار كلام الصورة اصل 1 من 7
    imgId.innerHTML = `Image ${startSlide + 1} of ${sliders.length}`;
}


// لاظهار الصور تحت المربع الكبير
sliders.forEach((img, index)=>{
    const copy = img.cloneNode()
    copy.addEventListener("click", () => {
        goToSlide(index)
    })
    galleryContainer.appendChild(copy)
})

// لجعل الصور متناسق جمب بعضيهم 
galleryContainer.style.gridTemplateColumns = `repeat(${sliders.length}, 1fr)`;


function updateCopyActive(index){
    galleryContainer.querySelectorAll("img").forEach((img, i) => {
        img.classList.toggle("active", i===index)
    })
}

