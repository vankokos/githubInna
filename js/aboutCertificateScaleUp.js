let certificate = document.querySelectorAll(".experience__inner-main-certificates-list-block")
let lightbox = document.querySelector("#lightbox")
let imageCertificate = document.querySelector(".imageCertificate")
let imageCertificateImg = document.querySelector(".imageCertificate img")

for (let i = 0; i < certificate.length; i++) {
    // console.log(certificate[i])

    certificate[i].addEventListener("click",(e)=> {
        let imgSrc = e.target.src

        if(lightbox.classList.contains("displayNone")) {
            lightbox.classList.remove("displayNone")
            lightbox.classList.add("displayBlock")
            imageCertificate.classList.remove("displayNone")
            imageCertificate.classList.add("displayBlock")

            imageCertificateImg.src = imgSrc
        } else {
            lightbox.classList.remove("displayBlock")
            lightbox.classList.add("displayNone")
            imageCertificate.classList.remove("displayBlock")
            imageCertificate.classList.add("displayNone")
        }
    })
}

lightbox.addEventListener("click",()=> {
    if(lightbox.classList.contains("displayNone")) {
        lightbox.classList.remove("displayNone")
        lightbox.classList.add("displayBlock")
        imageCertificate.classList.remove("displayNone")
        imageCertificate.classList.add("displayBlock")
    } else {
        lightbox.classList.remove("displayBlock")
        lightbox.classList.add("displayNone")
        imageCertificate.classList.remove("displayBlock")
        imageCertificate.classList.add("displayNone")
    }
})