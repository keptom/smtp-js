function send(subject,sendername,msg) {
  $.post("http://www.smtp-js.us/smtp-js.php",
  {
    sbj: subject,
    sender: sendername,
    message: msg
  },
  function(data, status){
    alert("Data: " + data + "\nStatus: " + status);
  });

}