function send(subject,sendername,msg) {
  $.post("demo_test_post.asp",
  {
    sbj: subject,
    sender: sendername,
    message: msg
  },
  function(data, status){
    alert("Data: " + data + "\nStatus: " + status);
  });

}