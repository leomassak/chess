class Cavalo extends Peca{
    constructor(tipo, posI, posJ, id){
        super(tipo, posI,posJ,id);
    }

    mover(tabuleiro, i, j){
        var representacao = tabuleiro.getRepresentacao();

        var casas_i = i - this._posI;
        var casas_j = j - this._posJ;

        if (representacao[i][j].tipo === undefined) {
            if((casas_i === 2 || casas_i === -2) && (casas_j === 1 || casas_j === -1)){
                super.mover(tabuleiro, i,j);
                return true;
            }
            else if((casas_i === 1 || casas_i === -1) && (casas_j === -2 || casas_j === 2)){
            super.mover(tabuleiro, i, j);
                return true;
            }
        }
        else if (representacao[i][j].tipo !== undefined && this._tipo !== representacao[i][j].tipo) {
            super.mover(tabuleiro, i, j);
            tabuleiro.rmPeca(representacao[i][j]);
            return true;
        }       
        else{
            return false;
        }
    }
}