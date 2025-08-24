const video1=document.getElementById('projectVideo1');
const video2=document.getElementById('projectVideo2');
const video3=document.getElementById('projectVideo3');
const hoverSign=document.querySelector(".hover-sign");

const videoList=[video1,video2,video3];
videoList.forEach(function(video){
    video.addEventListener('mouseover',function(){
        video.play();
        hoverSign.classList.add("active");
    })
    video.addEventListener('mouseout',function(){
        video.pause();
         hoverSign.classList.remove("active");
         

    })
})

// Set your social profile links here
document.getElementById("github-link").href = "https://github.com/Diksha1494";
document.getElementById("linkedin-link").href = "https://www.linkedin.com/in/diksha-rai-a89731293/overlay/contact-info/";
document.getElementById("instagram-link").href = "https://www.instagram.com/rai_diksha0914?igsh=MW5yd3VkaGRtNm0zNA==";
// document.getElementById("fb-link").href = "https://www.facebook.com/diksha.rai.9400"; // Use your country code
// document.getElementById("call-link").href = "tel:+916290738063";
document.getElementById("whatsapp-link").href =
  "https://wa.me/916290738063?text=Hi%20Diksha%2C%20I%20visited%20your%20portfolio%20and%20would%20like%20to%20connect!";


 

const menuIcon = document.querySelector('.menu-icon');
const sidebar = document.querySelector('.sidebar');
const closeIcon = document.querySelector('.close-icon');

// open sidebar
menuIcon.addEventListener('click', () => {
  sidebar.classList.add('active');
});

// close sidebar
closeIcon.addEventListener('click', () => {
  sidebar.classList.remove('active');
});

// close sidebar when clicking a link
document.querySelectorAll('.sidebar ul li a').forEach(link => {
  link.addEventListener('click', () => {
    sidebar.classList.remove('active');
  });
});





