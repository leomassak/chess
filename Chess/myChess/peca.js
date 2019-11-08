class Peca{
    constructor(tipo, posI, posJ, id){
        this._tipo = tipo;
        this._posI = posI;
        this._posJ = posJ;
        this._id = id;
        this._movPosiveis = [];
    }

    mover(tabuleiro, i, j){
        var representacao = tabuleiro.getRepresentacao();
        representacao[this._posI][this._posJ] = 0;
		representacao[i][j] = this;
		this.posI = i;
        this.posJ = j;
        
        return true;
    }

    get tipo(){
        return this._tipo;
    }

    set tipo(tipo){
        this._tipo = tipo;
    }

    get posI(){
        return this._posI;
    }

    set posI(pos){
        this._posI = pos;
    }

    get posJ(){
        return this._posJ;
    }

    set posJ(pos){
        this._posJ = pos;
    }

    get id(){
        return this._id;
    }

    set id(id){
        this._id = id;
    }
}