

function OtworzStrone()
{
	var ref = cordova.InAppBrowser.open('http://mcastronomia.blogspot.com', '_blank', 'location=yes');
	window.open = cordova.InAppBrowser.open;
}


function exitApp()
{

	navigator.app.exitApp();
	
}

var hasla = new Array(180);


hasla[0] = "William herschel";
hasla[1] = "gromada galaktyk w pannie";
hasla[2] = "Obłoki magellana";
hasla[3] = "strzelec";
hasla[4] = "teleskop";
hasla[5] = "słońce w znaku lwa";
hasla[6] = "Galaktyka Andromedy";
hasla[7] = "Obserwatorium";
hasla[8] = "Myśliwy Orion";
hasla[9] = "Herkules";
hasla[10] = "Gwiazdozbiór Kameleona";
hasla[11] = "Światło zodiakalne";
hasla[12] = "Efekt Dopplera";
hasla[13] = "Przesunięcie ku czerwieni";
hasla[14] = "Koziorożec";
hasla[15] = "Znaki zodiaku";
hasla[16] = "Zaćmienie słońca";
hasla[17] = "Astronomia";
hasla[18] = "Żyroskop";
hasla[19] = "Zanieczyszczenie światłem";
hasla[20] = "Rozgwieżdżone niebo";
hasla[21] = "Astrofotografia";
hasla[22] = "Skorpion";
hasla[23] = "Kometa Halleya";
hasla[24] = "Rozbłyski gamma";
hasla[25] = "Odległe światy";
hasla[26] = "La superba";
hasla[27] = "Betelgeza";
hasla[28] = "supernowa";
hasla[29] = "Błękitny nadolbrzym";
hasla[30] = "Konstelacja Strzelca";
hasla[31] = "Mgławica Oriona";
hasla[32] = "Rho Ophiuchi";
hasla[33] = "Neptun";
hasla[34] = "Jowisz";
hasla[35] = "Uran i Neptun";
hasla[36] = "Teleskop Keplera";
hasla[37] = "Egzoplaneta";
hasla[38] = "Kalejdoskop";
hasla[39] = "Wielka niedźwiedzica";
hasla[40] = "Mała niedźwiedzica";
hasla[41] = "Mikołaj Kopernik";
hasla[42] = "Skorpion";
hasla[43] = "Heliocentryzm";
hasla[44] = "kosmita";
hasla[45] = "Obłok molekularny";
hasla[46] = "fizyka kwantowa";
hasla[47] = "bozon higgsa";
hasla[48] = "cząstki elementarne";
hasla[49] = "Biały karzeł";
hasla[50] = "Konstelacja Kasjopei";
hasla[51] = "Gromada kulista";
hasla[52] = "gromada otwarta";
hasla[53] = "ptolemeusz";
hasla[54] = "mgławica kraba";
hasla[55] = "Wenus i mars";
hasla[56] = "centrum galaktyki";
hasla[57] = "droga mleczna";
hasla[58] = "pasy pyłowe";
hasla[59] = "globule boka";
hasla[60] = "gwiazdozbiory zodiakalne";
hasla[61] = "spójrz w niebo";
hasla[62] = "niezbadany ocean prawdy";
hasla[63] = "geocentryzm";
hasla[64] = "teleskop cassegraina";
hasla[65] = "zwrotnik raka";
hasla[66] = "fuzja jądrowa";
hasla[67] = "rozbłysk gamma";
hasla[68] = "zachmurzone niebo";
hasla[69] = "księżyc w pełni";
hasla[70] = "pełnia księżyca";
hasla[71] = "bezksiężycowe niebo";
hasla[72] = "tranzyt wenus na tle słońca";
hasla[73] = "ganimedes";
hasla[74] = "księżyce jowisza";
hasla[75] = "kometa lovejoy";
hasla[76] = "gwiazdozbiór byka";
hasla[77] = "niebo południowe";
hasla[78] = "niebo północne";
hasla[79] = "przesilenie letnie";
hasla[80] = "Wężownik";
hasla[81] = "Pas oriona";
hasla[82] = "supermasywna czarna dziura";
hasla[83] = "kosmonautyka";
hasla[84] = "ogólna teoria względności";
hasla[85] = "wielki zderzacz hadronów";
hasla[86] = "akcelerator cząstek";
hasla[87] = "kwazar";
hasla[88] = "pulsar milisekundowy";
hasla[89] = "Brązowy karzeł";
hasla[90] = "alfa centauri";
hasla[91] = "statek argonautów";
hasla[92] = "syriusz";
hasla[93] = "io";
hasla[94] = "srebrny glob";
hasla[95] = "bogactwo życia na ziemi";
hasla[96] = "czas i przestrzeń";
hasla[97] = "otchłań";
hasla[98] = "czerwony nadolbrzym";
hasla[99] = "uy scuti";
hasla[100] = "najjaśniejsza gwiazda na niebie";
hasla[101] = "zmierzch";
hasla[102] = "tuż nad ranem";
hasla[103] = "wybuch supernowej";
hasla[104] = "wszechświat";
hasla[105] = "ekspansja wszechświata";
hasla[106] = "magnetar";
hasla[107] = "gwiazda barnarda";
hasla[108] = "ruch własny gwiazd";
hasla[109] = "wschód słońca";
hasla[110] = "zorza polarna";
hasla[111] = "aurora borealis";
hasla[112] = "aurora australis";
hasla[113] = "biegun północny";
hasla[114] = "równonoc wiosenna";
hasla[115] = "równonoc jesienna";
hasla[116] = "rektascensja";
hasla[117] = "deklinacja";
hasla[118] = "ekliptyka";
hasla[119] = "mgławica dyfuzyjna";
hasla[120] = "protuberancje na słońcu";
hasla[121] = "plamy słoneczne";
hasla[122] = "promieniowanie elektromagnetyczne";
hasla[123] = "paradoks bliźniąt";
hasla[124] = "pory roku";
hasla[125] = "zwrotnik raka";
hasla[126] = "radioastronomia";
hasla[127] = "mikrokwazar";
hasla[128] = "Mgławica Carina";
hasla[129] = "oktant";
hasla[130] = "Trójkąt letni";
hasla[131] = "równik";
hasla[132] = "inklinacja";
hasla[133] = "nachylenie osi ziemi";
hasla[134] = "galileoskop";
hasla[135] = "galileusz";
hasla[136] = "jan heweliusz";
hasla[137] = "heliosfera";
hasla[138] = "pierścienie saturna";
hasla[139] = "gwiazda ciągu głównego";
hasla[140] = "naos";
hasla[141] = "alderamin";
hasla[142] = "galaktyka barnarda";
hasla[143] = "mgławica laguna";
hasla[144] = "gwiazdozbiór pegaza";
hasla[145] = "asteryzm wielkiego wozu";
hasla[146] = "wielki wóz";
hasla[147] = "wielki pies";
hasla[148] = "alpheratz";
hasla[149] = "mizar i alkor";
hasla[150] = "Trójkąt letni";
hasla[151] = "pasy zwrotnikowe";
hasla[152] = "rój perseidów";
hasla[153] = "tarcza sobieskiego";
hasla[154] = "chmura gwiazd strzelca";
hasla[155] = "buzz aldrin";
hasla[156] = "neil armstrong";
hasla[157] = "pas kuipera";
hasla[158] = "obłok oorta";
hasla[159] = "galaktyka spiralna";
hasla[160] = "galaktyka eliptyczna";
hasla[161] = "edmund halley";
hasla[162] = "jan heweliusz";
hasla[163] = "gwiazda poranna";
hasla[164] = "biała gwiazda ciągu głównego";
hasla[165] = "promieniowanie hawkinga";
hasla[166] = "czarna dziura";
hasla[167] = "ciemna materia";
hasla[168] = "kastor i pollux";
hasla[169] = "halo słoneczne";
hasla[170] = "ceres";
hasla[171] = "hygiea";
hasla[172] = "tryton";
hasla[173] = "plerion";
hasla[174] = "pozostałość po supernowej";
hasla[175] = "reliktowe promieniowanie tła";
hasla[176] = "obrót wokół własnej osi";
hasla[177] = "materia zdegenerowana";
hasla[178] = "żółty nadolbrzym";
hasla[179] = "siła coriolisa";


function losuj()
{
	var liczba = Math.round(Math.random()*hasla.length);
	losowe_haslo = hasla[liczba];
	
}

losuj();




var haslo = losowe_haslo;



haslo = haslo.toUpperCase();

var dlugosc = haslo.length;
var ilosc_szans = 0;
var ilosc_dobrych = 0;
var ilosc_liter = 0;
var ilosc_spacji = 0;



var haslo1 = "";


for (i=0; i<dlugosc; i++)
{
	if (haslo.charAt(i)==" ")
	{
	haslo1 = haslo1 + " ";
	ilosc_spacji++;
	}
	else haslo1 = haslo1 + "-";
	
	
}



function wypisz_haslo()
{
	
	document.getElementById("plansza").innerHTML = haslo1;
	
}




var litery = new Array(35);

litery[0] = "A";
litery[1] = "Ą";
litery[2] = "B";
litery[3] = "C";
litery[4] = "Ć";
litery[5] = "D";
litery[6] = "E";
litery[7] = "Ę";
litery[8] = "F";
litery[9] = "G";
litery[10] = "H";
litery[11] = "I";
litery[12] = "J";
litery[13] = "K";
litery[14] = "L";
litery[15] = "Ł";
litery[16] = "M";
litery[17] = "N";
litery[18] = "Ń";
litery[19] = "O";
litery[20] = "Ó";
litery[21] = "P";
litery[22] = "Q";
litery[23] = "R";
litery[24] = "S";
litery[25] = "Ś";
litery[26] = "T";
litery[27] = "U";
litery[28] = "V";
litery[29] = "W";
litery[30] = "X";
litery[31] = "Y";
litery[32] = "Z";
litery[33] = "Ż";
litery[34] = "Ź";




function start()

{
	var divy ="";
	
	for (i=0; i<=7; i++)
	{
		var elementy = "lit" + i;
		divy = divy + '<div class="litera" style="background-color: #000; border-color: #600;" onclick="sprawdz('+i+')" id="'+elementy+'"><font color="#900" id="czcionka">'+litery[i]+'</font></div>';
		if((i+1) % 5 == 0) 
			{	
				divy = divy + '<div style="clear:both;"></div>';
			}
	}
	
	for (i=8; i<=15; i++)
	{
		var elementy = "lit" + i;
		divy = divy + '<div class="litera" style="background-color: #000; border-color: #600;" onclick="sprawdz('+i+')" id="'+elementy+'"><font color="#900" id="czcionka">'+litery[i]+'</font></div>';
		if((i+1) % 5 == 0) 
			{	
				divy = divy + '<div style="clear:both;"></div>';
			}
	}
	
	for (i=16; i<=27; i++)
	{
		var elementy = "lit" + i;
		divy = divy + '<div class="litera" style="background-color: #000; border-color: #600;" onclick="sprawdz('+i+')" id="'+elementy+'"><font color="#900" id="czcionka">'+litery[i]+'</font></div>';
		if((i+1) % 5 == 0) 
			{	
				divy = divy + '<div style="clear:both;"></div>';
			}
	}
	for (i=28; i<=34; i++)
	{
		var elementy = "lit" + i;
		divy = divy + '<div class="litera" style="background-color: #000; border-color: #600;" onclick="sprawdz('+i+')" id="'+elementy+'"><font color="#900" id="czcionka">'+litery[i]+'</font></div>';
		if((i+1) % 5 == 0) 
			{	
				divy = divy + '<div style="clear:both;"></div>';
			}
	}
	
	
	
	document.getElementById("alfabet").innerHTML = divy;
	
	wypisz_haslo();
}

String.prototype.ustawZnak = function(miejsce, znak)
{
	if (miejsce > this.length-1) return this.toString();
	
	else return this.substr(0, miejsce) + znak + this.substr(miejsce+1);
	
}

function sprawdz(nr)
{
	var wynik = false;
	
	for (i=0; i<dlugosc; i++)
	{
		if (haslo.charAt(i)== litery[nr])
		{
			haslo1 = haslo1.ustawZnak(i,litery[nr]);
			wynik = true;
			ilosc_liter++;
		}
		
	}
	
	if(wynik == true)
	{
		var element = "lit" + nr;
		document.getElementById(element).style.background = "#003300";
		document.getElementById(element).style.color = "#fff";
		document.getElementById(element).style.cursor = "default";
		document.getElementById(element).setAttribute("onclick",";");
		ilosc_dobrych++;
			
			if (ilosc_liter == haslo1.length-ilosc_spacji)
			{
				
				
				setTimeout(function(){ location.reload(); }, 1000);
			}
	}
	else
	{
		var element = "lit" + nr;
		document.getElementById(element).style.background = "#440000";
		document.getElementById(element).style.color = "#fff";
		document.getElementById(element).style.cursor = "default";
		document.getElementById(element).setAttribute("onclick",";");
	
		ilosc_szans++;
		
		var obrazki = "img/A" +ilosc_szans+ ".jpg";
		document.getElementById("szubienica").innerHTML = '<img src="'+obrazki+'" alt="" />';
		
		
		
		if (ilosc_szans == 9) 
		{
			
			
			setTimeout(function(){ location.reload(); }, 1000);
		}
		
	}
	
	wypisz_haslo();

}


