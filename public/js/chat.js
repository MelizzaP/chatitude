$(document).ready(function (){
  setInterval(chatUpdate, 50)
  var source   = $("#chat-template").html()
  var template = Handlebars.compile(source)
  var url = "http://chat.api.mks.io/chats"
  function chatUpdate() {
    
    $.get(url, function (chats) {
      $('.chats').children().remove();
      chats.forEach(function (chat) {
        var chatHtml = template(chat);
        
        $('.chats').append(chatHtml);
        
    })
  })
 }
})

$(document).ready(function (){
   $('.view_post').on('click', function(e){
     $('.post_form').show();
    })
  })
$('.post_form').on('submit', function(e){
  e.preventDefault();
  console.log('click');
  $.ajax({
    type: 'POST',
    url: 'http://chat.api.mks.io/chats',
    data: {
      apiToken: sessionStorage.getItem('apiToken'), 
      message: $('.message').val(), 
      username: sessionStorage.getItem('username')}
  }).success(function(){
    console.log('sucess')
  })
}) 