const tabs = function() {
    console.log('=== file tab portfolio ===');
    var portLink = document.querySelectorAll('.portfolio__link');
    var portTarget = document.querySelectorAll('.portfolio__target');   

    function showElem(index) {        
        portLink[index].classList.add('portfolio__link--active');
        portTarget[index].classList.add('portfolio__target--active');
    }
    function hiddenAll() {            
        for(let i = 0; i < portTarget.length; i++) {
            portLink[i].classList.remove('portfolio__link--active');
            portTarget[i].classList.remove('portfolio__target--active');            
        }
    } 
    function activeTab(e) {
        var getId = e.target.getAttribute('data-target');
        var target = document.getElementById(getId);        
        hiddenAll();                
        e.target.classList.add('portfolio__link--active');
        target.classList.add('portfolio__target--active');
    }
    function clickPortLink() {
        for(let i = 0; i < portLink.length; i++) {
            portLink[i].addEventListener('click', activeTab);
        }
    }
    showElem(0);    
    clickPortLink();
};

document.addEventListener('DOMContentLoaded', function() {    
    var tab = tabs();
});

