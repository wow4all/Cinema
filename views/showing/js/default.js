function checkDate(){
	var today = new Date();
	var date = new Date();
	var start_date = document.forms["show_form1"]["start_date"].value;
	var n = start_date.split("-");
	date.setFullYear(n[0], n[1]-1, n[2]);
	if( date == null || date <= today){
		alert("Trzeba wybrać datę conajmniej dzisiejszą");
		return false;
	}else{
		var movie = document.forms["show_form1"]["movie"].value;
		document.getElementById("form").innerHTML = "<form class ='form' id='show_form2' method='POST' action='../showing/save_show'>" +
		"<label>Sala: </label><select class='sala'><option id='5'>Kasznka</option></select><br/>" +
		"<input type='hidden' name='movie' value='"+movie+"'>" +
		"<input type='hidden' name='start_date' value='"+start_date+"'>" +
		"<input type='submit' value='Dodaj seans'/></form>";
		return false;
		
	}
}

