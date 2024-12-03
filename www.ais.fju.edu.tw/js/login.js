var xmlHttp;

function createXMLHttpRequest() {
	if (window.ActiveXObject) { // IE
		xmlHttp = new ActiveXObject("Microsoft.XMLHTTP");
	} else if (window.XMLHttpRequest) { // Other browser
		xmlHttp = new XMLHttpRequest();
	}
}

function chkLogin() {
	var LDAP = document.getElementById("LDAP").value;
	var pwd = document.getElementById("pwd").value;
	var url = "loginServlet?LDAP=" + LDAP + "&pwd=" + pwd;
	
	createXMLHttpRequest();
	xmlHttp.onreadystatechange = callback3;
	xmlHttp.open("POST", url, true);

	xmlHttp.send(null);
}

function chkLoginIndex() {
	var LDAP = document.getElementById("LDAP").value;
	var pwd = document.getElementById("pwd").value;
	var url = "../../loginServlet?LDAP=" + LDAP + "&pwd=" + pwd;
	
	createXMLHttpRequest();
	xmlHttp.onreadystatechange = callback3;
	xmlHttp.open("POST", url, true);

	xmlHttp.send(null);
}

function callback3() {
		var xmldoc = xmlHttp.responseXML;
		var errorMsg = xmldoc.getElementsByTagName("errorMsg")[0].firstChild.data;
		var referer = xmldoc.getElementsByTagName("referer")[0].firstChild.data;
		var divMsg = document.getElementById("error");
		if (errorMsg == "1") {
			divMsg.innerHTML = "";
			window.location.href = referer;
		}
		if(errorMsg == "2"){
			divMsg.innerHTML = "<font color=red>'"+"輸入資料錯誤"+"'</font>";
		}
		// final
}
