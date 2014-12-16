$(document).ready(function (){
  $('.view_signin').on('click', function(e){
    $('.signin_form').show()
    $('.signup_form').hide()
    $('.chats').hide()
    $('.post_form').hide()
  })
  
})

$(".signin_form").on("submit", function(e) {
  e.preventDefault()
 $.ajax({
   type: 'POST',
   url: 'http://chat.api.mks.io/signin',
   data: {username: $("#signin_username").val(), password: $("#signin_password").val()}
   
 })
 .success(function (token) {
  $('.logged_in').append('Signed in as ' + $('#signin_username').val())
  $('.signin_form').hide()
   console.log("success", token);
   sessionStorage.setItem('apiToken',token['apiToken']);
   sessionStorage.setItem('username', $('#signin_username').val());
 })
})