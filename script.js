console.log("Hello, World")

const imageTrack = document.getElementById("project-track");
const projectTech =  document.getElementById("project-tech");
const projectName =  document.getElementById("project-name");
const projectDesc =  document.getElementById("project-description");
const projectDate = document.getElementById("project-date");

var cubicBezier = 'cubic-bezier(0,.19,.39,1)';

defaultTranslation = 102;
translationVal = 0
function NextCarousel(){
    let direction = 1;
    translationVal += defaultTranslation;

    imageTrack.style.transform = `translate(-${translationVal}%, ${0}%)`;

    //TODO: use an array structure to edit the text based on index number
    projectTech.textContent = "Unity";

    AnimateProjectTech(direction);
    setTimeout(50);
    AnimateProjectName(direction);
    AnimateProjectDescription(direction);
    AnimateProjectDate(direction);
}

function PrevCarousel(){
    let direction = -1;
    translationVal -= defaultTranslation;

    if(translationVal < 0){
        translationVal = 0;
    }else{

    imageTrack.style.transform = `translate(-${translationVal}%, ${0}%)`;

    AnimateProjectTech(direction);
    AnimateProjectName(direction);
    AnimateProjectDescription(direction);
    AnimateProjectDate(direction);
    

    }
}

function AnimateProjectTech(direction){
    projectTech.animate({
        transform: `translate(-${0}%, ${100 * direction}%)`
    },{duration: 0, fill: "forwards"})
    
    projectTech.animate({
        transform: `translate(-${0}%, ${0}%)`
    },{duration: 300, fill: "forwards", easing: cubicBezier})
}
function AnimateProjectName(direction){
    projectName.animate({
        transform: `translate(-${0}%, ${100 * direction}%)`
    },{duration: 0, fill: "forwards"})
    
    projectName.animate({
        transform: `translate(-${0}%, ${0}%)`
    },{duration: 300, fill: "forwards", easing: cubicBezier})
}
function AnimateProjectDescription(direction){
    projectDesc.animate({
        transform: `translate(-${0}%, ${100 * direction}%)`
    },{duration: 0, fill: "forwards"})
    
    projectDesc.animate({
        transform: `translate(-${0}%, ${0}%)`
    },{duration: 300, fill: "forwards", easing: cubicBezier})
}
function AnimateProjectDate(direction){
    projectDate.animate({
        transform: `translate(-${0}%, ${100 * direction}%)`
    },{duration: 0, fill: "forwards"})
    
    projectDate.animate({
        transform: `translate(-${0}%, ${0}%)`
    },{duration: 300, fill: "forwards", easing: cubicBezier})
}

//Get in touch JS

const footerGIT = document.getElementById("get-in-touch");

window.addEventListener("mousemove", function(e){
    const x = e.clientX;

    
    const xPerc = x/this.window.innerWidth * 37;

    footerGIT.animate({
        transform: `translate(${xPerc}%, ${0})`
    },{duration: 3000, fill: "forwards"})
})

window.addEventListener("touchstart",function(e){
    footerGIT.animate({
        transform: `translate(${0}%, ${0})`
    },{duration: 3000, fill: "forwards"})
})


function Test(){
    console.log("test log ");
}

let footerLink = document.getElementById("f-link");

function AnimateFooterLinks(){

    footerLink.animate({
        transform: `translate(-${0}%, ${100}%)`
    },{duration: 0, fill: "forwards"})
    
    footerLink.animate({
        transform: `translate(-${0}%, ${0}%)`
    },{duration: 300, fill: "forwards", easing: cubicBezier})
}


//Mouse Trailer Logic goes here
const trailer = document.getElementById("trailer");

window.addEventListener("mousemove", function(e){
    const x = e.clientX-trailer.offsetWidth/2;
    const y = e.clientY-trailer.offsetHeight/2;

    trailer.animate({
        left: `${x}px`,
        top: `${y}px`
    },{duration: 1200, fill: "forwards"});
})
window.addEventListener("touchstart",function(e){
    trailer.style.opacity = 0;
})

var scrollbar = Scrollbar.init(document.querySelector('body'));

scrollbar.addListener(function(status) {
    var scrollY = status.offset.y;
    console.log(scrollY);

    trailer.animate({
        transform: `translate(0px, ${scrollY}px)`
    }, {duration: 800, fill: "forwards"})

});