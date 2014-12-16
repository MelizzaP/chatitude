$(document).ready(function (){
  $('.view_signup').on('click', function(e){
    $('.signup_form').show()
    $('.signin_form').hide()
    $('.chats').hide()
    $('.post_form').hide()
  })
  
})

$(".signup_form").on("submit", function(e) {
      e.preventDefault()
     $.ajax({
       type: 'POST',
       url: 'http://chat.api.mks.io/signup',
       data: {username: $("#username").val(), password: $("#password").val()}  
     })
     .success(function () {
       console.log("success")
     })
    })
  