
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
    text=   document.querySelector('.num');


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


function counterUP( start,endNr) {
    var i = 0;

    setInterval(function() {
        if (i == endNr) 
        {
            clearInterval(interval);
        } else 
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

const links = document.querySelectorAll(".menu a");
 
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



    












