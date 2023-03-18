const div_game = document.querySelector("#div_game");
szerokosc = 100;
wysokosc = 20;
var zmienna = 250;
var kierunek_x = 2;
var kierunek_y = 2;
var kula_x = 290;
var kula_y = 40;
var ruch;
var gra = 0;
var klocek; 
document.querySelector("#button_start").addEventListener("click",start);
function start(){
	document.querySelector("#span_wynik").innerHTML = 0;
	dodajklocek();
reset();
ruch = setInterval(ruch_kuli,20);
document.querySelector("#button_start").disabled = true;

}
function dodajklocek(){
	klocki = [
	new kloc(10,270),
	new kloc(120,270),
	new kloc(240,270),
	new kloc(360,270),
	new kloc(480, 270)
	]
	for(const e of document.querySelectorAll(".klocek")){
		e.remove();
	}

	for(let i = 0; i < klocki.length; i++){
	klocek = document.createElement("div");
	klocek.classList.add("klocek"); 
	klocek.style.left = klocki[i].bottomLeft[0] + 'px';
	klocek.style.bottom = klocki[i].bottomLeft[1] + 'px';
	div_game.appendChild(klocek);
}
}
class kloc {
	constructor(x,y){
		this.bottomLeft = [x,y]
		this.bottomRight = [x+szerokosc,y]
		this.topLeft = [x,y + wysokosc]
		this.topRight = [x + szerokosc, y + wysokosc]
	}
}
var klocki = [
	new kloc(10,270),
	new kloc(120,270),
	new kloc(240,270),
	new kloc(360,270),
	new kloc(480, 270)
	]

const gracz = document.createElement("div");
gracz.classList.add("gracz");
gracz.style.left = "250px";
gracz.style.bottom = "20px";
div_game.appendChild(gracz);

function ruch(e){
	if(e.key == "ArrowLeft"){
		ruchlewo();
		}
	if(e.key == "ArrowRight"){
		ruchprawo();
		}

}
function ruchlewo(){
	if(zmienna < 20){
		}else{
		zmienna = zmienna - 40;
		gracz.style.left = Number(zmienna) + "px";
	}
}
function ruchprawo(){
if(zmienna > 480){
		}else{
		zmienna = zmienna + 40;
		gracz.style.left = Number(zmienna) + "px";
	}
}

document.addEventListener("keydown", ruch);






const kula = document.createElement("div");

function ruch_kuli(){
	if(kula_y < 40 && kula_x > zmienna - 5 && kula_x < zmienna+105){
		kierunek_y = 2;
	}
	if(kula_x > 578){
		kierunek_x = -2;
	}
	if(kula_x < 0){
		kierunek_x = 2
	}
	if(kula_y > 278){
		kierunek_y = -2;
	}
	if(kula_y < 0){
		alert("Koniec Gry")
		clearInterval(ruch);
		div_game.removeChild(kula);
		document.querySelector("#button_start").disabled = false;
	}
	kula_x = kula_x + kierunek_x;
	kula.style.left = Number(kula_x)+"px";
	kula_y = kula_y + kierunek_y;
	kula.style.bottom = Number(kula_y)+"px";

	for(let i = 0; i < klocki.length; i++){
	if((kula_x > klocki[i].bottomLeft[0] - 5 && kula_x < klocki[i].bottomRight[0] + 5)&&
		(kula_y > klocki[i].bottomLeft[1] - 20 && kula_y < klocki[i].topRight[1] + 20)){
		const wszystkie_klocki = Array.from(document.querySelectorAll(".klocek"))
		wszystkie_klocki[i].classList.remove("klocek");
		klocki.splice(i,1);	
		kierunek_y = -2;
		document.querySelector("#span_wynik").innerHTML ++;
		if(document.querySelector("#span_wynik").innerHTML == 5){
			alert("Gratulacje Wygrałeś!")
					clearInterval(ruch);
		div_game.removeChild(kula);
		document.querySelector("#button_start").disabled = false;
		}
}

}
}

function reset(){
kula.classList.add("kula");
kula_x = 290;
kula_y = 40;
kierunek_x = 2;
kierunek_y = 2;
kula.style.left = kula_x;
kula.style.bottom = kula_y;
div_game.appendChild(kula);
gra = 1;

}