function send(subject,sendername,msg) {
   var post_url = "http://www.smtp-js.us/smtp-js.php"; //get form action url
    var request_method = "POST"; //get form GET/POST method
	var form_data = new FormData(this); //Creates new FormData object
    $.ajax({
        url : post_url,
        type: request_method,
        data : form_data,
		contentType: false,
		cache: false,
		processData:false
    }).done(function(response){ //
        $("#server-results").html(response);
    });

}