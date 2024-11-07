
const menuIcon = document.getElementById("menu");
const navLinks = document.querySelector(".links");
const contactButtons = document.querySelectorAll(".btn-box .btn, nav .btn");

menuIcon.addEventListener("click", () => {
    navLinks.classList.toggle("active");
});


document.querySelectorAll("nav a").forEach(link => {
    link.addEventListener("click", function(e) {
        e.preventDefault();
        const targetId = this.getAttribute("href").substring(1);
        document.getElementById(targetId).scrollIntoView({
            behavior: "smooth"
        });
    });
});


contactButtons.forEach(button => {
    button.addEventListener("click", () => {
        document.getElementById("contact").scrollIntoView({
            behavior: "smooth"
        });
    });
});


const contactFormButton = document.querySelector("#contact .btn");
contactFormButton.addEventListener("click", () => {
    const name = document.querySelector("input[placeholder='Enter Your Full Name']").value.trim();
    const email = document.querySelector("input[placeholder='Enter Your Email']").value.trim();
    const message = document.querySelector("input[placeholder='Enter Your Message']").value.trim();

    if (name && email && message) {
        alert("Thank you for reaching out, " + name + "! We will get back to you soon.");
    } else {
        alert("Please fill out all fields.");
    }
});




const projectImages = document.querySelectorAll("#projects .box1 a img, #projects .box a img");
const projectLinks = [
    "file:///C:/Users/saurabh%20kumar%20gupta/Desktop/social/index.html", 
   "https://tanned.netlify.app/",
];

projectImages.forEach((img, index) => {
    img.addEventListener("click", () => {
        window.open(projectLinks[index], "_blank");
    });
});















const socialIcons = document.querySelectorAll(".social-icons span");
socialIcons.forEach((icon, index) => {
    icon.addEventListener("click", () => {
        let url;
        switch (index) {
            case 0:
                url = "https://www.facebook.com/saurabhkumar.gupta.370"; 
                break;
            case 1:
                url = "https://www.instagram.com/kumar_saurabh516";
            case 2:
                url = "https://www.linkedin.com/in/saurabh-gupta-378a09143"; 
                break;
            case 3:
                url = "https://github.com/SAURABH78782"; 
                break;
            default:
                url = "#";
        }
        window.open(url, "_blank");
    });
});
