class Peao extends Peca{
    constructor(tipo, posI, posJ, id){
        super(tipo, posI,posJ,id);
        this._jogada = 0;
    }

    mover(tabuleiro, i, j){

        var casas = i - this._posI;
        var representacao = tabuleiro.getRepresentacao();
        
        if (this.posJ === j && this.colisao(representacao, casas) === false) {
           
            if (this._jogada === 0) {
                if (this.tipo === 'w' && (casas > 0 && casas <= 2)) {
                        super.mover(tabuleiro, i, j);
                        this._jogada++;
                        return true;
                } 
                else if(this.tipo === 'b' && (casas >= -2 && casas < 0)){
                        super.mover(tabuleiro, i, j);
                        this._jogada++;
                        return true;
                } 
            }
            else{
                if(this.tipo === 'w' && casas === 1){
                        super.mover(tabuleiro, i, j);
                        this._jogada++;
                        return true;
                }
                else if(this.tipo === 'b' && casas === -1){
                        super.mover(tabuleiro, i, j);
                        this._jogada++;
                        return true;
                    }          
            }  
                
        }
        else if(this.comer(tabuleiro, i, j)){
            super.mover(tabuleiro, i, j);
            this._jogada++;
            return true;
        }
        else{
            return false;
        }
    }
    comer(tabuleiro, i , j){
        var tab_comer = tabuleiro.getRepresentacao();
        var peca_comida;

        var casasI = i - this._posI;
        var casasJ = j - this._posJ;

        if(this._tipo === 'w' && (casasI + casasJ === 2 || casasI + casasJ === 0) && (casasI < 2 && casasJ < 2)){
            if(tab_comer[this._posI + casasI][this._posJ + casasJ].tipo === 'b'){
               tabuleiro.rmPeca(tab_comer[this._posI + casasI][this._posJ + casasJ]);
                return true;
            }
            else{
                return false;
            }
        }
        else if(this._tipo === 'b' && (casasI + casasJ === -2 || casasI + casasJ === 0) && (casasI > -2 && casasJ >-2)){
            if(tab_comer[this._posI + casasI][this._posJ + casasJ].tipo === 'w'){
                peca_comida = tab_comer[this._posI + casasI][this._posJ + casasJ];
                tabuleiro.rmPeca(peca_comida);
                return true;
            }
            else{
                return false;
            }
        }
        else{
            return false;
        }
    }

    colisao(tabuleiro, casas){
        if(this.tipo === tabuleiro[this._posI + casas][this._posJ].tipo || (this.tipo !== tabuleiro[this._posI + casas][this._posJ].tipo && tabuleiro[this._posI + casas][this._posJ].tipo !== undefined)){
            return true;
        }
        else{
            return false;
        }
    }
}