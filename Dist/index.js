var deve = document.getElementById("Development");
var uni = document.getElementById("uni");
var details = document.getElementById("details");

deve.addEventListener("click", function (e) {
    e.preventDefault();
  details.innerText =
    "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Facilis numquam fugit id error, soluta similique aliquam aperiam possimus quod tenetur sed quaerat sit commodi vitae accusamus recusandae tempora repudiandae, praesentium libero, obcaecati exercitationem iste assumenda. Nisi quam ipsa aut quisquam exercitationem, officia perspiciatis soluta quis id, explicabo expedita aliquid temporibus?";
});
var img1=document.getElementById('img1');
uni.addEventListener("click", function (e) {
    e.preventDefault();
  details.innerText =
    "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Facilis numquam fugit id error, soluta similique aliquam aperiam possimus quod tenetur sed quaerat sit commodi vitae accusamus recusandae tempora repudiandae, praesentium libero, obcaecati exercitationem iste assumenda. Nisi quam ipsa aut quisquam exercitationem, officia perspiciatis soluta quis id, explicabo expedita aliquid temporibus?";
    uni.style.backgroundColor='gray';
 
});
var body=document.getElementById('body');
var dark=document.getElementById('dark');
dark.addEventListener("click", function(){
  body.style.backgroundColor='black';
  body.style.Color='white';

});



// Set the date we're counting down to
var countDownDate = new Date("Jan 5, 2024 15:37:25").getTime();

// Update the count down every 1 second
var x = setInterval(function() {

  // Get today's date and time
  var now = new Date().getTime();
    
  // Find the distance between now and the count down date
  var distance = countDownDate - now;
    
  // Time calculations for days, hours, minutes and seconds
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);
    
  // Output the result in an element with id="demo"
  document.getElementById("demo").innerHTML = days + "d " + hours + "h "
  + minutes + "m " + seconds + "s ";
    
  // If the count down is over, write some text 
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("demo").innerHTML = "EXPIRED";
  }
}, 1000);
