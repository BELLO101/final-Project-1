var urlParams = new URLSearchParams(window.location.search);


document.getElementById('name').innerHTML = urlParams.get('name');
document.getElementById('gender').innerHTML = urlParams.get('gender');
document.getElementById('email').innerHTML = urlParams.get('email');
document.getElementById('number').innerHTML = urlParams.get('number');
document.getElementById('date').innerHTML = urlParams.get('date');
document.getElementById('time').innerHTML = urlParams.get('time');
document.getElementById('style').innerHTML = urlParams.get('style');
document.getElementById('file').innerHTML = urlParams.get('file');
document.getElementById('stylist').innerHTML = urlParams.get('stylist');