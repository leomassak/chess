class Rei extends Peca{
    constructor(tipo, posI, posJ, id){
        super(tipo, posI,posJ,id);
    }

    mover(tabuleiro, i, j){
        var representacao = tabuleiro.getRepresentacao();

        var casasI = i - this._posI;
        var casasJ = j - this.posJ;

        var auxI = this._posI;
        var auxJ = this._posJ;

        if((casasI >= -1 && casasI <= 1) && (casasJ >= -1 && casasJ <= 1)){
                if(this.tipo === representacao[auxI + casasI][auxJ + casasJ].tipo){
                    return false;
            }
            else{
                if (this.tipo !== representacao[auxI + casasI][auxJ + casasJ].tipo && representacao[auxI + casasI][auxJ + casasJ].tipo !== undefined) {
                    tabuleiro.rmPeca(representacao[auxI + casasI][auxJ + casasJ]);
                }
                super.mover(tabuleiro, i, j);
                return true;
            }
        }
    }

}