class Tabuleiro{
    constructor(){
        this._representacao = new Array(8);
	    for(let i = 0; i < 8; i++) {
		    this._representacao[i] = new Array(8);
		    for(let j = 0; j < 8; j++)
                this._representacao[i][j] = 0; // ID_1 = 0
                
            this._pecasComidas = [];    
	    }
    }

    addPeca(peca){
        this._representacao[peca.posI][peca.posJ] = peca;
    }

    rmPeca(peca){
        this._pecasComidas.push(peca);
    }

    getPecasComidas(){
        return this._pecasComidas;
    }

    getPeca(i,j){
        return this._representacao[i][j];
    }

    getRepresentacao(){
        return this._representacao;
    }

    zerarTabuleiro(){
        this._representacao = new Array(8);
	    for(let i = 0; i < 8; i++) {
		    this._representacao[i] = new Array(8);
		    for(let j = 0; j < 8; j++)
                this._representacao[i][j] = 0; // ID_1 = 0
                
                this._pecasComidas.length = 0;
	    }
    }
}