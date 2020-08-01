const infoPersonal = function() {
    console.log('=== file info personal ===');
    var age = document.getElementById('age');
    var email = document.getElementById('email');
    var phone = document.getElementById('phone');
    var address = document.getElementById('address');
    var language = document.getElementById('language');
    var d = new Date();    
    const dataPersonal = {
       age: d.getFullYear() - 1999,
       email: 'tvantam1475369@gmail.com',
       phone: '0916104500',
       address: '45 Tân Trụ, F15, Q.Tân Bình',
       language: 'Vietnamese'
    };
    age.innerHTML = dataPersonal.age;
    email.innerHTML = dataPersonal.email;
    phone.innerHTML = dataPersonal.phone;
    address.innerHTML = dataPersonal.address;
    language.innerHTML = dataPersonal.language;
};
document.addEventListener('DOMContentLoaded', function() {
    var infoPer = infoPersonal();
});