var jogo = new JogoXadrez();
var rodada;

function init() {
	gerar_tabuleiro();
	colocarPecas();
	atualizar_jogo();
}

function select(i,j) {
	var tabuleiro = document.getElementById('tabuleiro');
	var obj = tabuleiro.rows[i].cells[j];
	var tenta;
	
	if (select.obj_clicado === undefined || select.obj_clicado === null){
		var peca = jogo.getPeca(i, j);
		tenta = peca.tipo;

		if (peca == null /*&& tenta == undefined*/)
			return;

		if(rodada == undefined){
			rodada = tenta;
		}	

		if(tenta === rodada){
		select.obj_clicado = obj;
		select.obj_bgcolor = obj.style.backgroundColor;
		select.peca = peca;
		obj.style.backgroundColor = "green";
		}	
	} 
	
	else if (jogo.moverPeca(select.peca, i, j)) {
		select.obj_clicado.style.backgroundColor = select.obj_bgcolor;
		select.obj_clicado = null;

			if(select.peca.tipo === 'w'){
				rodada = 'b';
			}
			else if(select.peca.tipo === 'b'){
				rodada = 'w';
			}		
			atualizar_jogo();
			vitoria();
	} 
	else if(obj === select.obj_clicado){
		select.obj_clicado.style.backgroundColor = select.obj_bgcolor;
		select.obj_clicado = null;
	}
	else {
		alert("Movimento invalido!");
	}
}

function atualizar_jogo() {
	const pecas = ["", "♔", "♕", "♖", "♗", "♘", "♙", "♚", "♛", "♜", "♝", "♞", "♟"];
	let tabuleiro = document.getElementById('tabuleiro');
	let tabData = jogo.getTabuleiro();

	for (var i = 0, n = tabuleiro.rows.length; i < n; i++) {
		for (var j = 0, m = tabuleiro.rows[i].cells.length; j < m; j++) {
		
			obj = tabuleiro.rows[i].cells[j];
			id = pecas[tabData[i][j].id];
			if (id === undefined) {
				obj.innerHTML = "";
			}
			else{
				obj.innerHTML = pecas[tabData[i][j].id];
			}	
		}
	}
}

function reiniciar_jogo() {
	jogo.reiniciar();
	atualizar_jogo();
	rodada = undefined;
}

function gerar_tabuleiro() {
	var table = "<table id=\"tabuleiro\">";
	var container = "<div class=\"container\">";
	var color = false;

	for (let i = 0; i < 8; i++) {
		container += "<div class=\"flex-item\">" + i + "</div>";
	}
	container += "</div>";

	for (var i = 0; i < 8; i++) {
		table += "<tr>";
		for (var j = 0; j < 8; j++) {
			if (color) {
				table += "<td id=\"i" + i + "j" + j + "\" bgcolor=\"#b5915f\" onclick=\"select(" + i + "," + j + ");\"></td>";
			} else {
				table += "<td id=\"i" + i + "j" + j + "\" bgcolor=\"#5e3a26\" onclick=\"select(" + i + "," + j + ");\"></td>";
			}

			color = !color;
		}
		table += "</tr>";
		color = !color;
	}
	table += "</table>";
	document.write(container);
	document.write(table);
}

function vitoria(){
	if(jogo.verificaVitoria()){
		alert("Check Mate!");
		reiniciar_jogo();
	}
}

function colocarPecas(){
	jogo.iniciarTabuleiro();
}

init();
