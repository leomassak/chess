class Torre extends Peca{
    constructor(tipo, posI, posJ, id){
        super(tipo, posI,posJ,id);
    }

    mover(tabuleiro, i, j){
    var representacao = tabuleiro.getRepresentacao();

    var auxI = this._posI;
    var auxJ = this._posJ;

    //Vertical    
    if (this._posJ === j) {
        while(auxI !== i){
            if(this._posI < i){
                if(this.tipo === representacao[auxI + 1][j].tipo || (this.tipo !== representacao[auxI + 1][j].tipo && representacao[auxI + 1][j].tipo !== undefined && representacao[auxI + 1][j] !== representacao[i][j])){
                    return false;
                }
                else{
                    if(representacao[auxI + 1][j].tipo !== undefined){
                        tabuleiro.rmPeca(representacao[auxI + 1][j]);
                    }
                    auxI++;
                }
            }
            else if(this._posI > i){
                if(this.tipo === representacao[auxI - 1][j].tipo || (this.tipo !== representacao[auxI - 1][j].tipo && representacao[auxI - 1][j].tipo !== undefined && representacao[auxI - 1][j] !== representacao[i][j])){
                    return false;
                }
                else{
                    if(representacao[auxI - 1][j].tipo !== undefined){
                        tabuleiro.rmPeca(representacao[auxI - 1][j]);
                    }
                    auxI--;
                }
            }  

        }
        super.mover(tabuleiro, i, j);
        return true;
    } 
    //Horizontal  
    else if(this._posI === i){
       while(auxJ !== j){
           if (this._posJ < j) {
            if(this.tipo === representacao[i][auxJ + 1].tipo || (this.tipo !== representacao[i][auxJ + 1].tipo && representacao[i][auxJ + 1].tipo !== undefined && representacao[i][auxJ + 1] !== representacao[i][j])){
                return false;
            }
            else{
                if(representacao[i][auxJ + 1].tipo !== undefined){
                    tabuleiro.rmPeca(representacao[i][auxJ + 1]);
                }
                auxJ++;
            }
           }
           else if(this._posJ > j){
            if(this.tipo === representacao[i][auxJ - 1].tipo || (this.tipo !== representacao[i][auxJ - 1].tipo && representacao[i][auxJ - 1].tipo !== undefined && representacao[i][auxJ - 1] !== representacao[i][j])){
                return false;
            }
            else{
                if(representacao[i][auxJ - 1].tipo !== undefined){
                    tabuleiro.rmPeca(representacao[i][auxJ - 1]);
                }
                auxJ--;
            }
           }    
        }
        super.mover(tabuleiro,i,j);
        return true;
    }
    else{
        return false;
    }
  }
}