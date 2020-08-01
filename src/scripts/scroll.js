document.addEventListener('DOMContentLoaded', function(){
    console.log('=== file scroll topbar ===');
    // topbar //
    var secTopbar = document.querySelector('.section__topbar');   
    var header = document.querySelector('header');
    var heightHeader = header.offsetHeight;   
    // skill //    
    var skillProcess = document.querySelectorAll('.skills__process');
    // portfilio //
    var portItems = document.querySelectorAll('.portfolio__item');
    // experience // 
    var experTime = document.querySelectorAll('.experience__time');
    // var experInfo = document.querySelectorAll('.experience__info');
    // contact //
    var contact = document.querySelector('.contact');
        
    window.onscroll = function() {        
        // console.log(document.documentElement.scrollTop);
        if(document.documentElement.scrollTop >= heightHeader - 100) {
            secTopbar.classList.add('section__topbar--background');
        } else {
            secTopbar.classList.remove('section__topbar--background');
        }

        if(document.documentElement.scrollTop >= 550 ) {            
            skillProcess[0].classList.add('skills__process--html');
            skillProcess[1].classList.add('skills__process--css');
            skillProcess[2].classList.add('skills__process--javascript');
            skillProcess[3].classList.add('skills__process--bootstrap');
            skillProcess[4].classList.add('skills__process--webpack');
            skillProcess[5].classList.add('skills__process--sass');
            skillProcess[6].classList.add('skills__process--angular');
        } else {
            skillProcess[0].classList.remove('skills__process--html');
            skillProcess[1].classList.remove('skills__process--css');
            skillProcess[2].classList.remove('skills__process--javascript');
            skillProcess[3].classList.remove('skills__process--bootstrap');
            skillProcess[4].classList.remove('skills__process--webpack');
            skillProcess[5].classList.remove('skills__process--sass');
            skillProcess[6].classList.remove('skills__process--angular');
        }

        if(document.documentElement.scrollTop >= 1200) {            
            for(let i = 0; i < portItems.length; i++) {
                portItems[i].classList.add('portfolio__item--active');
            }
        } else {
            for(let i = 0; i < portItems.length; i++) {
                portItems[i].classList.remove('portfolio__item--active');
            }
        }    

        if(document.documentElement.scrollTop >= 2020) {    
            for(let i = 0; i < experTime.length; i++) {
                experTime[i].classList.add('experience__time--width');                    
            }                          
        } else {
            for(let i = 0; i < experTime.length; i++) {
                experTime[i].classList.remove('experience__time--width');                    
            }
        }

        if(document.documentElement.scrollTop >= 2681) {            
            contact.classList.add('contact__translate');
        } else {
            contact.classList.remove('contact__translate');
        }    
    };
});
