  function seend(subject,sendername,msg){

    $.ajax({
      type: "POST",
      url: "http://www.smtp-js.us/smtp-js.php",
      crossDomain: true,
      data: 'sbj='+subject+'&sender='+sendername+'&message='+msg,
      success: function (data) {
  alert("success")    },
      error: function (err) {
          alert(err)
      }
  });
  }
  
