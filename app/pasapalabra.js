
var questions = [
{ letter: "a", answer: "alamierda", status: 0, question: ("CON LA A. Donde he mandado el pasapalabra?") },
{ letter: "b", answer: "bingo", status: 0, question: ("CON LA B. Juego que ha sacado de quicio a todos los 'Skylabers' en las sesiones de precurso") },
{ letter: "c", answer: "calma", status: 0, question: ("CON LA C. Lo que necesitas cuando estas nervioso") },
{ letter: "d", answer: "diarrea", status: 0, question: ("CON LA D. Anormalidad en la función del aparato digestivo caracterizada por frecuentes evacuaciones y su consistencia líquida") },
{ letter: "e", answer: "ectoplasma", status: 0, question: ("CON LA E. Gelatinoso y se encuentra debajo de la membrana plasmática. Los cazafantasmas medían su radiación") },
{ letter: "f", answer: "facil", status: 0, question: ("CON LA F. Que no requiere gran esfuerzo, capacidad o dificultad") },
{ letter: "g", answer: "galaxia", status: 0, question: ("CON LA G. Conjunto enorme de estrellas, polvo interestelar, gases y partículas") },
{ letter: "h", answer: "harakiri", status: 0, question: ("CON LA H. Suicidio ritual japonés por desentrañamiento") },
{ letter: "i", answer: "iglesia", status: 0, question: ("CON LA I. Templo cristiano") },
{ letter: "j", answer: "jabali", status: 0, question: ("CON LA J. Variedad salvaje del cerdo que sale en la película 'El Rey León', de nombre Pumba") },
{ letter: "k", answer: "kamikaze", status: 0, question: ("CON LA K. Persona que se juega la vida realizando una acción temeraria") },
{ letter: "l", answer: "licantropo", status: 0, question: ("CON LA L. Hombre lobo") },
{ letter: "m", answer: "misantropo", status: 0, question: ("CON LA M. Persona que huye del trato con otras personas o siente gran aversión hacia ellas") },
{ letter: "n", answer: "necedad", status: 0, question: ("CON LA N. Demostración de poca inteligencia") },
{ letter: "ñ", answer: "señal", status: 0, question: ("CONTIENE LA Ñ. Indicio que permite deducir algo de lo que no se tiene un conocimiento directo.") },
{ letter: "o", answer: "orco", status: 0, question: ("CON LA O. Humanoide fantástico de apariencia terrible y bestial, piel de color verde creada por el escritor Tolkien") },
{ letter: "p", answer: "protoss", status: 0, question: ("CON LA P. Raza ancestral tecnológicamente avanzada que se caracteriza por sus grandes poderes psíonicos del videojuego StarCraft") },
{ letter: "q", answer: "queso", status: 0, question: ("CON LA Q. Producto obtenido por la maduración de la cuajada de la leche") },
{ letter: "r", answer: "raton", status: 0, question: ("CON LA R. Roedor") },
{ letter: "s", answer: "stackoverflow", status: 0, question: ("CON LA S. Comunidad salvadora de todo desarrollador informático") },
{ letter: "t", answer: "terminator", status: 0, question: ("CON LA T. Película del director James Cameron que consolidó a Arnold Schwarzenegger como actor en 1984") },
{ letter: "u", answer: "unamuno", status: 0, question: ("CON LA U. Escritor y filósofo español de la generación del 98 autor del libro 'Niebla' en 1914") },
{ letter: "v", answer: "vikingos", status: 0, question: ("CON LA V. Nombre dado a los miembros de los pueblos nórdicos originarios de Escandinavia, famosos por sus incursiones y pillajes en Europa") },
{ letter: "w", answer: "sandwich", status: 0, question: ("CONTIENE LA W. Emparedado hecho con dos rebanadas de pan entre las cuales se coloca jamón y queso") },
{ letter: "x", answer: "botox", status: 0, question: ("CONTIENE LA X. Toxina bacteriana utilizada en cirujía estética") },
{ letter: "y", answer: "peyote", status: 0, question: ("CONTIENE LA Y. Pequeño cáctus conocido por sus alcaloides psicoactivos utilizado de forma ritual y medicinal por indígenas americanos") },
{ letter: "z", answer: "zen", status: 0, question: ("CON LA Z. Escuela de budismo que busca la experiencia de la sabiduría más allá del discurso racional") },
];


var person = '';
var id = 0;
var correct = 0;
var incorrect = 0;
var users = [];


function newPlayerTest(){

	person = '';
	id = 0;
	correct = 0;
	incorrect = 0;

//cuando le damos al boton de NewPlayer reinicio los nodos de LI ya que si no en el ranking se repiten los resultados
var test = document.getElementById("rankingBox2");
while (test.hasChildNodes()) {   
	test.removeChild(test.firstChild);
}

document.getElementById("rectangleRanking").classList.add("changeScreen");
document.getElementById("thanks").classList.add("changeScreen");
document.getElementById("rankingBox2").classList.add("changeScreen");
document.getElementById("nameNewPlayer").classList.remove("changeScreen");
document.getElementById("nameNewPlayer").innerHTML = 'Intrduce el nombre del nuevo jugador';
document.getElementById("rankingBox").classList.add("changeScreen");
document.getElementById("lettersContainer").classList.remove("changeDisplay");
document.getElementById("lettersContainer").classList.add("changeScreen");
document.getElementById("validate").classList.add("changeScreen");
document.getElementById("answer").classList.add("changeScreen");
document.getElementById("buttonsFS").classList.remove("changeScreen");
document.getElementById("usersControls1").classList.add("changeScreen");
document.getElementById("Username").value = "";
document.getElementById("newPlayer").classList.add("changeScreen");


	//how to remove all class from list of DOM nodes
	var elements =  [].slice.call(document.getElementsByClassName('redondas'));
	for(var i = 0; i < elements.length; i++){
		elements[i].classList.remove('colorGreen');
		elements[i].classList.remove('colorRed');
		elements[i].classList.remove('colorPasapalabra');
		elements[i].classList.remove('parpadea');
	}

	questions.forEach(function(obj){
		if(obj.status !== 0){
			obj.status = 0;

		}

	});


//return newPlayer();

// var a = pedirNombre();
// var 

// return pedirNombre()

}

function pedirNombre(){ 
	document.getElementById("welcomeUser").classList.remove("changeScreen");
	document.getElementById("nameNewPlayer").classList.add("changeScreen");
	person = document.getElementById("Username").value;
	document.getElementById("welcomeUser").innerHTML = 'Bienvenid@ ' + person;
	document.getElementById("buttonsFS").classList.add("changeScreen");
	document.getElementById("usersControls").classList.remove("changeScreen");
	document.getElementById("usersControls1").classList.remove("changeScreen");
	document.getElementById("rectangleQuestion").classList.remove("changeScreen");
	document.getElementById("rectangleQuestion").classList.add("rectangle");
	document.getElementById("lettersContainer").classList.remove("changeScreen");
//document.getElementById("questionsBox").classList.remove("changeScreen")

//document.getElementById("questionBox").innerHTML = 'Bienvenido ' + person 

} 

function showLetters(){

	questions.forEach(function(elem, index){
		// if(index === parseInt(questions.length/2)+1){
		// 	var salto = document.createElement('br')
		// 	var salto1 = document.createElement('br')
		// 	var salto2 = document.createElement('br')
		// 	document.getElementById('lettersContainer').appendChild(salto)
		// 	document.getElementById('lettersContainer').appendChild(salto1)
		// 	document.getElementById('lettersContainer').appendChild(salto2)
		// }
		//creamos un elemento nodo h1
		var btn = document.createElement("H1");
		//añadimos clase
		btn.classList.add("redondas"); 
		//creamos el texto
		var t = document.createTextNode(elem.letter);
		// añadimos el texto al nodo h1
		btn.appendChild(t);
		//añadimos al final del id redondas y seteamos como atributo el id => 0,1,2,3....
		document.getElementById('lettersContainer').appendChild(btn).setAttribute("id", index);
	});
	document.getElementById("newPlayer").classList.add("changeScreen");
}


function validateAnswer(){
	console.log('Esta es la var ID ' + id);
	var answer = document.getElementById("answer").value;
	answer = answer.toLowerCase();
	document.getElementById(id).classList.remove('parpadea');
	if(answer === questions[id].answer){
		console.log('correcto');
		document.getElementById(id).classList.add("colorGreen");
		document.getElementById(id).classList.remove("colorPasapalabra");
		correct++;
		questions[id].status = 1;
		id++;
	} else if (answer === "pasapalabra"){
		document.getElementById(id).classList.add("colorPasapalabra");
		console.log('pasapalabra');
		id++;
	} else if (answer !== questions[id].answer){
		console.log('incorrecto');
		document.getElementById(id).classList.add("colorRed");
		document.getElementById(id).classList.remove("colorPasapalabra");
		incorrect++;
		questions[id].status = 1;
		id++;
	}

	var result = correct + incorrect;

	if(result === questions.length){
		console.log(person + ' - ' + correct + ' aciertos');
		return endGame();
	}
	document.getElementById('answer').value = "";
	return printQuestion();
}

function printQuestion(){
	
	document.getElementById("nameNewPlayer").classList.add("changeScreen");
	document.getElementById("questionsBox").classList.remove("changeScreen");
	document.getElementById('answer').value = "";
	document.getElementById("rankingBox").classList.remove("changeScreen");
	document.getElementById("validate").classList.remove("changeScreen");
	document.getElementById("answer").classList.remove("changeScreen");
	document.getElementById("usersControls").classList.add("changeScreen");
	document.getElementById("welcomeUser").classList.add("changeScreen");
	document.getElementById("rankingBox").innerHTML = correct;

	//document.getElementById(id).classList.add("parpadea")

	if(id === questions.length){
		id = 0;
	}
	if (questions[id].status !== 0){
		id++;
		return printQuestion();
	} else if (questions[id].status === 0) { 
		console.log('calling....');
		document.getElementById("questionsBox").innerHTML = questions[id].question;
		document.getElementById(id).classList.add("parpadea");
	}
}

function endGame(){
	document.getElementById("usersControls").classList.add("changeScreen");
	document.getElementById("welcomeUser").classList.add("changeScreen");
	document.getElementById("rankingBox").classList.add("changeScreen");
	document.getElementById("questionsBox").classList.add("changeScreen");
	document.getElementById("thanks").classList.remove("changeScreen");
	document.getElementById("thanks").innerHTML = 'Gracias por jugar!';
	document.getElementById("rankingBox").innerHTML = correct;
	document.getElementById("lettersContainer").classList.remove("changeDisplay");
	document.getElementById("lettersContainer").classList.add("changeScreen");
	document.getElementById("validate").classList.add("changeScreen");
	document.getElementById("answer").classList.add("changeScreen");
	document.getElementById("usersControls1").classList.add("changeScreen");
	document.getElementById("newPlayer").classList.remove("changeScreen");
	document.getElementById('Username').value = "";
	return showRanking();
}

function showRanking(){
	//document.getElementById("rankingBox").innerHTML = person + ' your correct answer => ' + correct
	function user(username, puntuacion){
		this.username = username;
		this.puntuacion = puntuacion;
	}

	var newUser = new user(person, correct);
	users.push(newUser);

	var ranking = users.sort(function(a,b){
		return b.puntuacion-a.puntuacion;
	});
	//return user();
	ranking.forEach(function(user){
		var li =document.createElement('li');
		var text = document.createTextNode(user.username + ' - ' + user.puntuacion + ' points');
		li.appendChild(text);
		document.getElementById("rankingBox2").value = '';
		return document.getElementById("rankingBox2").appendChild(li);

	});

	document.getElementById("rectangleRanking").classList.remove("changeScreen");
	document.getElementById("rankingBox2").classList.remove("changeScreen");

}
// pasapalabra

showLetters();