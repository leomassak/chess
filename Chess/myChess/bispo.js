class Bispo extends Peca{
    constructor(tipo, posI, posJ, id){
        super(tipo, posI,posJ,id);
    }

    mover(tabuleiro, i, j){
           var representacao = tabuleiro.getRepresentacao();

           var casasI = i - this._posI;
           var casasJ = j - this._posJ;

           var auxI = this._posI;
           var auxJ = this._posJ;

            if(casasI === casasJ){ //diagonal pra baixo direita
               while(auxI !== i && auxJ !== j) {
                   if(this._posI < i && this._posJ < j){
                       if (this.tipo === representacao[auxI + 1][auxJ + 1].tipo || (this.tipo !== representacao[auxI + 1][auxJ + 1].tipo && representacao[auxI + 1][auxJ + 1].tipo !== undefined && representacao[auxI + 1][auxJ + 1] !== representacao[i][j])) {
                           return false;
                       }
                       else{
                           if (representacao[auxI + 1][auxJ + 1].tipo !== undefined) {
                               tabuleiro.rmPeca(representacao[auxI + 1][auxJ + 1]);
                           }
                           auxI++;
                           auxJ++;
                       }
                   }
                   else if(this._posI > i && this._posJ > j){
                    if (this.tipo === representacao[auxI - 1][auxJ - 1].tipo || (this.tipo !== representacao[auxI - 1][auxJ - 1].tipo && representacao[auxI - 1][auxJ - 1].tipo !== undefined && representacao[auxI - 1][auxJ - 1] !== representacao[i][j])) {
                        return false;
                    }
                    else{
                        if (representacao[auxI - 1][auxJ - 1].tipo !== undefined) {
                            tabuleiro.rmPeca(representacao[auxI - 1][auxJ - 1]);
                        }
                        auxI--;
                        auxJ--;
                    }
                   }
               }
                super.mover(tabuleiro, i,j);
                return true;
            }
            else if(casasI === (casasJ * -1)){
                while(auxI !== i && auxJ !== j){
                    if(this._posI < i && this._posJ > j){
                        if(this.tipo === representacao[auxI + 1][auxJ - 1].tipo || (this.tipo !== representacao[auxI + 1][auxJ - 1].tipo && representacao[auxI + 1][auxJ - 1].tipo !== undefined && representacao[auxI + 1][auxJ - 1] !== representacao[i][j])){
                            return false;
                        }
                        else{
                            if (representacao[auxI + 1][auxJ - 1].tipo !== undefined) {
                                tabuleiro.rmPeca(representacao[auxI + 1][auxJ - 1]);
                            }
                            auxI++;
                            auxJ--;
                        }
                    }
                    else if(this._posI > i && this._posJ < j){
                        if(this.tipo === representacao[auxI - 1][auxJ + 1].tipo || (this.tipo !== representacao[auxI - 1][auxJ + 1].tipo && representacao[auxI - 1][auxJ + 1].tipo !== undefined && representacao[auxI - 1][auxJ + 1] !== representacao[i][j])){
                            return false;
                        }
                        else{
                            if (representacao[auxI - 1][auxJ + 1].tipo !== undefined) {
                                tabuleiro.rmPeca(representacao[auxI - 1][auxJ + 1]);
                            }
                            auxI--;
                            auxJ++;
                        }
                    }
                }
                super.mover(tabuleiro, i, j);
                return true;
            }
            else{
                return false;
            }
    }
}