var script = document.createElement('script'); 
document.head.appendChild(script);    
script.type = 'text/javascript';
script.src = "//ajax.googleapis.com/ajax/libs/jquery/3.1.0/jquery.min.js";
await script.onload;
function seend(subject,sendername,msg) {
  $.post("http://www.smtp-js.us/smtp-js.php",
  {
    sbj: subject,
    sender: sendername,
    message: msg
  },
  function(data, status){
    alert("Data: " + data + "\nStatus: " + status);
  });
  

};