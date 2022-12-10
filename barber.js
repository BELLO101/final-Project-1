//  const resultlist = document.getElementsByClassName('myForm')
// new URLSearchParams(window.location.search).forEach((value
//     ,name) => {
//     resultlist.append(`${name}:${value}`)
//     resultlist.append(document.createElement('br'))
// })
    
// function results() {
//     var name = document.getElementById('name')
//     var name = document.getElementById(' ')
//     var name = document.getElementById('name')
//     var name = document.getElementById('name')
//     var name = document.getElementById('name')
//     var name = document.getElementById('name')
//     var name = document.getElementById('name')
//     var name = document.getElementById('name')
//     var name = document.getElementById('name')
//     var name = document.getElementById('name')
// }

function processForm(){
    var name = document.getElementById('name').value;
    var gender = document.getElementById('gender').value;
    var email = document.getElementById('email').value;
    var number = document.getElementById('number').value;
    var date = document.getElementById('date').value;
    var time = document.getElementById('time').value;
    var file = document.getElementById('file').value;
    var style = document.getElementById('style').value;
    var stylist = document.getElementById('stylist').value;
     var data = {
        name,gender,email,number,date,time,file,style,stylist
     }

     localStorage.setItem("userdata", JSON.stringify(data) )

    //  JSON.parse(localStorage.getItem('userdata')),

     alert("thank you")
   

   /* window.location.href = 'results.html?name=' + name + '&gender=' + value + '&email='
     + email + '&number=' + number + '&date=' + date + '&time=' + time + '&file=' + file 
     + '&style=' + style + '&stylist=' + value  ;*/
}

