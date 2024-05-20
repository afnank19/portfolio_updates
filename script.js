const imageTrack = document.getElementById("project-track");
const projectTech =  document.getElementById("project-tech");
const projectName =  document.getElementById("project-name");
const projectDesc =  document.getElementById("project-description");
const projectDate = document.getElementById("project-date");

var cubicBezier = 'cubic-bezier(0,.19,.39,1)';

const projectDetails = [ {
        date: "2023", 
        name: "filmSorted!", 
        desc: "Track what you watch.",
        tech: "ReactJS" 
    } , {
        date: "2024", 
        name: "BrainFlow", 
        desc: "Pomodoro timer app for productivity",
        tech: "ElectronJS" 
    } , {
        date: "2024", 
        name: "Banished", 
        desc: "Arcade roguelike dungeon crawler",
        tech: "Unity" 
    }]

defaultTranslation = 102;
translationVal = 0;
idx = 0;
function NextCarousel(){
    let direction = 1;
    
    //TODO: use an array structure to edit the text based on index number
    idx++;
    if(idx > projectDetails.length - 1){
        idx--;
    } else {
        translationVal += defaultTranslation;
        imageTrack.style.transform = `translate(-${translationVal}%, ${0}%)`;

        projectName.textContent = projectDetails[idx].name;
        projectDesc.textContent = projectDetails[idx].desc;
        projectTech.textContent = projectDetails[idx].tech;
        projectDate.textContent = projectDetails[idx].date;
    

        AnimateProjectTech(direction);
        setTimeout(50);
        AnimateProjectName(direction);
        AnimateProjectDescription(direction);
        AnimateProjectDate(direction);
    }
    
}

function PrevCarousel(){
    let direction = -1;
    translationVal -= defaultTranslation;

    idx--;

    if(translationVal < 0 || idx < 0){
        translationVal = 0;
        idx = 0;
    }else{
        imageTrack.style.transform = `translate(-${translationVal}%, ${0}%)`;

        projectName.textContent = projectDetails[idx].name;
        projectDesc.textContent = projectDetails[idx].desc;
        projectTech.textContent = projectDetails[idx].tech;
        projectDate.textContent = projectDetails[idx].date;

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

    trailer.animate({
        transform: `translate(0px, ${scrollY}px)`
    }, {duration: 800, fill: "forwards"})

});


//user time
const timezone = Intl.DateTimeFormat().resolvedOptions().timeZone;

function getLocalTime() {
    var date = new Date();
    
    var hours = date.getHours().toString().padStart(2, '0');
    var minutes = date.getMinutes().toString().padStart(2, '0');
    
    var timezoneOffset = date.getTimezoneOffset();
    var timezoneHours = Math.abs(Math.floor(timezoneOffset / 60)).toString().padStart(2, '0');
    var timezoneMinutes = Math.abs(timezoneOffset % 60).toString().padStart(2, '0');
    var timezoneSign = timezoneOffset < 0 ? '+' : '-';
    
    var timezone = 'UTC' + timezoneSign + timezoneHours + ':' + timezoneMinutes;
    
    return hours + ':' + minutes;
}
var localTime = getLocalTime();
document.getElementById("localtime").innerText = localTime + " | " + timezone;
setInterval(() => {
    localTime = getLocalTime();
    document.getElementById("localtime").innerText = localTime + " | " + timezone;
}, 1000)
