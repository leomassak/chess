var tabuleiro = new Tabuleiro();
var peca;

function JogoXadrez() {
	// Identificador de cada peça!
	const W_KING   = 1;  // "&#9812" ♔
	const W_QUEEN  = 2;  // "&#9813" ♕
	const W_ROOK   = 3;  // "&#9814" ♖
	const W_BISHOP = 4;  // "&#9815" ♗
	const W_KNIGHT = 5;  // "&#9816" ♘
	const W_PAWN   = 6;  // "&#9817" ♙
	const B_KING   = 7;  // "&#9818" ♚
	const B_QUEEN  = 8;  // "&#9819" ♛
	const B_ROOK   = 9;  // "&#9820" ♜
	const B_BISHOP = 10; // "&#9821" ♝
	const B_KNIGHT = 11; // "&#9822" ♞
	const B_PAWN   = 12; // "&#9823" ♟

	this.iniciarTabuleiro = function(){
		for (let i = 0; i < 8 ; i++) {
			for (let j = 0 ; j < 8 ; j++) {
				if(i === 1){
					peca = new Peao('w', i, j, W_PAWN);
				}
				else if(i === 6){
					peca = new Peao('b', i, j, 	B_PAWN);
				}
	
				else if(i === 0){
					if(j === 0 || j === 7){
						peca = new Torre('w', i, j, W_ROOK);
					}
	
					else if(j === 1 || j === 6){
						peca = new Cavalo('w', i, j, W_KNIGHT);
					}
	
					else if(j === 2 || j === 5){
						peca = new Bispo('w', i, j, W_BISHOP);
					}
	
					else if(j === 3){
						peca = new Rei('w', i, j, W_KING);
					}
	
					else if(j === 4){
						peca = new Rainha('w', i, j, W_QUEEN);
					}
				}
				else if(i === 7){
					if(j === 0 || j === 7){
						peca = new Torre('b', i, j, B_ROOK);
					}
	
					else if(j === 1 || j === 6){
						peca = new Cavalo('b', i, j, B_KNIGHT);
					}
	
					else if(j === 2 || j === 5){
						peca = new Bispo('b', i, j, B_BISHOP);
					}
	
					else if(j === 3){
						peca = new Rei('b', i, j, B_KING);
					}
	
					else if(j === 4){
						peca = new Rainha('b', i, j, B_QUEEN);
					}
				}
	
				tabuleiro.addPeca(peca);
			}
		}
	
	};
	
	// Esse método retorna um array 8x8 contendo o estado do tabuleiro.
	this.getTabuleiro = function() {
		return tabuleiro.getRepresentacao();
	};

	// Esse método reinicia o jogo.
	this.reiniciar = function() {
		tabuleiro.zerarTabuleiro();
		this.iniciarTabuleiro();
	};

	// Esse método retorna uma referência para o objeto peça que está na posição i,j do tabuleiro.
	this.getPeca = function(i, j) {
		var escolhida = tabuleiro.getPeca(i,j);

		if (i == escolhida.posI && j == escolhida.posJ){
			return escolhida;
		}
		else{
			return null;
		}	
	};

	// Esse método move a peça para a posição i, j do tabuleiro.
	this.moverPeca = function(pecaMov, i, j) {
		// Não pode mover uma peça para fora do tabuleiro.
		if (i > 7 || i < 0 || j > 7 || j < 0)
			return false;

		// Não pode mover uma peça para o mesmo lugar.
		if (pecaMov.posI == i && pecaMov.posJ == j)
			return false;

		if(pecaMov.mover(tabuleiro, i, j)){
			this.verificaVitoria();
			return true;
		}
		else{
			return false;
		}	
	};

	this.verificaVitoria = function(){
		var pecas = tabuleiro.getPecasComidas();

		for (let i = 0; i < pecas.length; i++) {
			if(pecas[i].id === 7 || pecas[i].id === 1){
				return true;
			}
		}
		return false;
	};
}
