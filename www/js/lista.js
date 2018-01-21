
var listy = new Array(2);





function sprawdz_czy_jest_nazwa()
{
	
	var nazwa_listy = $('#text_input');

	if (nazwa_listy.val().length < 1)
	{
		alert("Proszę podać nazwę listy!");
	}
	else
	{
		
		var length = localStorage.length;
		localStorage.setItem(length+1, nazwa_listy.val());
			
			
			
			
		
		window.location.href = 'plan.html';
		
	}
	
}

function wypisz()
{
	
	var divy = "";
	var a=0;
	
	for (var i=1;i<=localStorage.length;i++) 
	{
		
		var a=a+1;
		var elementy = "list" + i;
		var elementy_usun = "usun" + i;
		var nazwa = localStorage.getItem(i);
		
		divy = divy + '<tr><td><a href="aktualna_lista.html"><button id="' + elementy + '" style="background-color: #100; border: 3px solid #a00; border-radius: 8px; text-align: center; padding: 4px; width: 70%; font-size: 20px; font-family: Trebuchet MS; color: red; ">' + nazwa +'</button></td></a><td><button id="' + elementy_usun + '" onclick="usun();" style="background-color: #100; border: 3px solid #a00; color: red; border-radius: 8px; padding: 4px; font-size: 20px; font-family: Trebuchet MS;"> DEL </button></td></tr>';
		
		lista_list.innerHTML = divy;
		
		
		
	function wypisz_obiekty()
	{
	
	$("#list"+a);
		
	}
	
	}
}

/*
function usun()

{
	var id1 = $('#id1');
	var nazwa = localStorage.removeItem("1");
	var nazwa = "";
	
	lista_list.innerHTML = 'Pusto';
	

	
	window.location.href = 'plan.html';
	
	
	
}

*/


function exitApp()
{

	navigator.app.exitApp();
	
}
