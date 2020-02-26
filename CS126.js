function book () {
	var lname = document.getElementById("lname").value;
	var fname = document.getElementById("fname").value;
	var gender = document.getElementById("gender").value;
	var email = document.getElementById("email").value;
	var origin = document.getElementById("origin").value;
	var destination = document.getElementById("destination").value;
	var ddate = document.getElementById("ddate").value;
	var rdate = document.getElementById("rdate").value;

	if (lname.length == 0) {
		document.getElementById("blank1").innerHTML = "&nbsp;Last name is empty!";
	} else {document.getElementById("blank1").innerHTML = "";}

	if (fname.length == 0) {
		document.getElementById("blank2").innerHTML = "&nbsp;First name is empty!";
	} else {document.getElementById("blank2").innerHTML = "";}

	if (email.indexOf('@') || email.length ==0) {
		document.getElementById("blank4").innerHTML = "&nbsp;email is empty and/or observe proper format in email (with @)!";
	}

	if (origin.length == 0) {
		document.getElementById("blank5").innerHTML = "&nbsp;No origin submitted!";
	} else {document.getElementById("blank5").innerHTML = "";}

	if (destination.length == 0) {
		document.getElementById("blank6").innerHTML = "&nbsp;No destination submitted!";
	} else {document.getElementById("blank6").innerHTML = "";}

	if (ddate == 0) {
		document.getElementById("blank7").innerHTML = "No departure date!";
	} else {document.getElementById("blank7").innerHTML = "";}

	if (ddate == 0) {
		document.getElementById("blank8").innerHTML = "&nbsp;No return date!";
	} else if (rdate < ddate) {
		document.getElementById("blank8").innerHTML = "Return date is not later than destination date!";
	} else {document.getElementById("blank8").innerHTML = "";}

	
}