// === sidebar menu mobile === //
const menuMobile = function() {
    console.log('=== file responsive ===');
    var bars = document.querySelector('.bars');
    var barsCross = document.querySelector('.bars__cross');
    var siderbar = document.querySelector('.sidebar');
    var secTopbar = document.querySelector('.section__topbar');
    var topbar = document.querySelector('.topbar');
    var brand = document.querySelector('.topbar__brand');

    function activeBars() {
        bars.classList.add('active__bars');
        barsCross.classList.add('active__bars--cross');
    }   
    function removeActiveBar() {
        bars.classList.remove('active__bars');
        barsCross.classList.remove('active__bars--cross');
    }
    function activeLayoutSiderbar() {
        siderbar.style.transform = 'translate(0)';
        siderbar.style.transition = 'all .3s';
        secTopbar.classList.add('active__secTopbar--width');     
        brand.style.display = "none";  
        topbar.style.justifyContent = "flex-end";
    }
    function removeActiveLayoutSiderbar() {
        siderbar.style.transform = 'translate(300px)';
        siderbar.style.transition = 'all .3s';
        secTopbar.classList.remove('active__secTopbar--width');
        brand.style.display = "block";        
        topbar.style.justifyContent = "space-between";
    }
    bars.addEventListener('click', function() {
        if(!bars.classList.contains('active__bars')) {
            activeBars();
            activeLayoutSiderbar();
        } else {
            removeActiveBar();
            removeActiveLayoutSiderbar();
        }        
    });
};
document.addEventListener('DOMContentLoaded', function() {
    var menuMob = menuMobile();
});
