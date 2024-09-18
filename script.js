function displayTime() {

	let dt = new Date();
	let hr = (dt.getHours())%12;
	let mn = dt.getMinutes();
	let sc = dt.getSeconds();
	let tm = document.getElementById("tm");
	tm.innerHTML = (hr+":"+mn+":"+sc);
}
setInterval(displayTime, 1000);

 function displayDate() {
        var currentDate = new Date();
        var day = currentDate.getDate();
        var month = currentDate.getMonth() + 1; // Month is zero-based, so we add 1
        var year = currentDate.getFullYear();
        var dateString = day + "/" + month + "/" + year;
        document.getElementById("date").textContent = dateString;
    }
    window.onload = displayDate;