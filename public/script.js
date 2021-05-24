
//Písanie textu 
const TypeWriter = function(textElm, words, wait=3000){
    this.textElm = textElm;
    this.words = words;
    this.text= '';
    this.wordIndex = 0;
    this.wait = parseInt(wait,10);
    this.type();
    this.isDeleting = false;
}

//type methods
TypeWriter.prototype.type = function() {

    const current = this.wordIndex % this.words.length;

    const fulltext = this.words[current];
    
// sledovanie mazania textu
if(this.isDeleting){
    // remove char
 this.text = fulltext.substring(0, this.text.length - 1);
} else {
    // add char
 this.text = fulltext.substring(0, this.text.length + 1);
}

// vloženie textu do html
this.textElm.innerHTML = `<span class="text" >${this.text}</span>`;

// rychlosť písania
let typeSpeed  = 200;

if(this.isDeleting){
     typeSpeed /= 2; 
}

if(!this.isDeleting && this.text === fulltext){
     typeSpeed = this.wait;
     this.isDeleting = true;
}else if(this.isDeleting && this.text === '') {
 this.isDeleting = false;
 this.wordIndex++;
 typeSpeed = 500;
}

    setTimeout(() => this.type(), typeSpeed);
}

//init on load Dom
document.addEventListener('DOMContentLoaded', init);

//init app
function init(){
    const textElm = document.querySelector('.write-text');
    const words = JSON.parse(textElm.getAttribute('data-words'));
    const wait = textElm.getAttribute('data-wait');

// Init Typewriter
new TypeWriter(textElm, words, wait)    
}






// CIRCLE BAR 

var progressHtml = document.querySelector('.progress-html');
    progressCss = document.querySelector('.progress-css');
    progressPHP = document.querySelector('.progress-php');
    progressJs = document.querySelector('.progress-js');
    textHtml = document.querySelector('.num-html');
    textCss = document.querySelector('.num-css');
    textPhp = document.querySelector('.num-php');
    textJs = document.querySelector('.num-js');
    //progresses = document.querySelectorAll('.ul-progress li svg .svg-progress-circle');
    //progresses = Array.prototype.slice.call(progresses);
    //texts = document.querySelectorAll('.ul-progress li p');
    //texts = Array.prototype.slice.call(texts);


  


    //console.log(text)

circleBar = function(progress, per, text){

var pathLength = progress.getAttribute('r') * 2 * Math.PI;

    progress.style.strokeDasharray = pathLength + 'px';
    progress.style.strokeDashoffset = pathLength + 'px';

let counter = 1;
    time = setInterval(() => {

    if( counter === per) {
        clearInterval(time);
        } 
    else {
        counter += 1;
        text.textContent = counter + "%";
    }

    var newOffset = parseInt(progress.style.strokeDashoffset, 10 ) + (counter*3.84);
        progress.style.strokeDasharray = newOffset;

    }, 50);
};
        //  circleBar(progressHtml, 90, textHtml );
        //  circleBar(progressCss, 81, textCss );
        //  circleBar(progressPHP, 72, textPhp);
        //  circleBar(progressJs, 64, textJs);



// COUNTER UP

var workcount =  document.querySelector('.work'),
    learncount = document.querySelector('.learn'),
    coffeecount = document.querySelector('.coffee'),
    finishcount = document.querySelector('.finish');
    //counters = document.querySelectorAll('.counter-ul p');
    //counters = Array.prototype.slice.call(counters);
    //endNrs = [853,900,654,160];

   


function counterUP( start,endNr) {
    var i = 0;

   var interval = setInterval(function() {
                    if (i == endNr) 
                        {
                            clearInterval(interval);
                        } 
                    else 

                        {
                            start.innerHTML = i+1 + ' +';
                            i++;
                        }   
                    }, 10);
    }

// counterUp(workcount, 853);
// counterUp(learncount, 900);
// counterUp(coffeecount, 654);
// counterUp(finishcount, 160);

// scroll 

const links = document.querySelectorAll(".menu-container a");
 
    for (const link of links) {
        link.addEventListener("click", clickHandler);
        }   
 
    function clickHandler(e) {
        e.preventDefault();
        const href = this.getAttribute("href");
        const offsetTop = document.querySelector(href).offsetTop;

        scroll({
            top: offsetTop,
            behavior: "smooth"
        });
        };


// ON SCROLL - START PROGRESS BAR AND START COUNTERUP

var globProgress = 0; 

window.addEventListener('scroll',() => {

    if(globProgress == 0){ 
        
        var progress= document.getElementById('progress'),
            progressPosition = progress.getBoundingClientRect().top,
            screenPosition = window.innerHeight/1.2;


         if(progressPosition < screenPosition){
              circleBar(progressHtml, 90, textHtml );
              circleBar(progressCss, 81, textCss );
              circleBar(progressPHP, 72, textPhp);
              circleBar(progressJs, 64, textJs);
              globProgress++; 
             };
        }
});


var  globCounter = 0;

  window.addEventListener('scroll',() => {
   
      if(globCounter == 0){ 
        
          var counterUp = document.getElementById('counterUp'),
              counterPosition = counterUp.getBoundingClientRect().top,
              screenPosition = window.innerHeight/1.2;
        
                        
    
                   if(counterPosition < screenPosition){
                       counterUP(workcount, 853);
                       counterUP(learncount, 900);
                       counterUP(coffeecount, 654);
                       counterUP(finishcount, 160);
                     globCounter++; 
                   }; 
          }
  });

  // SCROLL MENU

         window.addEventListener("scroll", function () {
             var header = document.querySelector(".header-full");

                 header.classList.toggle("menu-scroll",window.scrollY > 0)
              });

// MENU BAR 

 const mainMenu = document.querySelector('.main-menu');
 const closeMenu = document.querySelector('.times-close');
 const openMenu = document.querySelector('.open-menu');
 const  linksLi = document.querySelectorAll('.main-menu a'),
        linksLiA = Array.prototype.slice.call( linksLi );

linksLiA.forEach(function(link){

     link.addEventListener('click',close);
    
});

 openMenu.addEventListener('click',show);
 closeMenu.addEventListener('click',close);


 function show(){
     mainMenu.style.display = 'flex';
     mainMenu.style.top = '0';
 }
 function close(){
     mainMenu.style.top = '-100%';
 }

 
document.addEventListener("keyup",function(eve){
    if(eve.key === 'Escape'){
        close();
    }

})


 // PORTFOLIO GALLERY
// filter
const  filterUl = document.querySelectorAll('.menu-ul .btn-li'),
       filterImg = document.querySelectorAll('.image'),
       filters = Array.prototype.slice.call(filterUl);
        

window.addEventListener('load', function() {        

    filters.forEach(function(Btn){

        Btn.addEventListener('click',function(selectedBtn){

            selectedBtn.preventDefault();

            const active = document.querySelector('.active');

            if(active){
                   active.classList.remove('active');
              }

              selectedBtn.currentTarget.classList.add('active');

            let filterName = this.getAttribute('data-name');

                filterImg.forEach(function(image){
                    let filterImages = image.getAttribute("data-name");
                        
                    if((filterImages == filterName ) || filterName == "all" ) {
                        image.classList.remove("img-hide");
                        image.classList.add("img-show");
                    }else {
                        image.classList.add("img-hide");
                        image.classList.remove("img-show");
                    }

                })    

        })

    })

    for(let i=0; i<filterImg.length; i++ ){
        filterImg[i].setAttribute("onclick","lightbox(this)")
    }

});  

// Lightbox

const lightBox = document.querySelector(".light-box"),
      lightImg = document.querySelector(".light-img"),
      lightName = document.querySelector(".title-lightbox span"),
      shadow = document.querySelector(".shadow"),
      closeX = document.querySelector(".icon-x ");

function lightbox(el){

    document.querySelector("body").style.overflow = "hidden";

    let selectImg = el.querySelector("img").src,
        selectedName = el.getAttribute("data-info");

    lightImg.src = selectImg;
    lightName.textContent = selectedName;

    lightBox.classList.add("lightbox-show");
    shadow.classList.add("lightbox-show");

    closeX.addEventListener("click", function() {
            lightBox.classList.remove("lightbox-show");
            shadow.classList.remove("lightbox-show");
            document.querySelector("body").style.overflow = "scroll";
        });

       
};

document.addEventListener("keyup",function(eve){
    if(eve.key === 'Escape'){
        lightBox.classList.remove("lightbox-show");
        shadow.classList.remove("lightbox-show");
        document.querySelector("body").style.overflow = "scroll";
    }

})














