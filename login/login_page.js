function check_form()
{
	var email=document.getElementById("email").value;
	var password=document.getElementById("password").value;
	var emailpattern=/^[\\w-_\.]*[\\w-_\.]\@[\\w]\.+[\\w]+[\\w]$/;
	var passwordpattern = /^[\w|\!|\@|\#|\$|\%|\^|\&|\*|\?]{6,20}$/;
	var regex= new RegExp(emailpattern);
	var regex_password = new RegExp(passwordpattern);
	
	var password_validation = regex_password.test(password);
	var email_validation = regex.test(email);
	alert("Email " + email_validation + " Password " + password_validation);


}