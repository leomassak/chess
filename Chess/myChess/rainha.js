class Rainha extends Peca{
    constructor(tipo, posI, posJ, id){
        super(tipo, posI,posJ,id);
    }

    mover(tabuleiro, i, j){
    
    var movBispo = new Bispo(super.tipo, super.posI, super.posJ, super.id);
    var movTorre = new Torre(super.tipo, super.posI, super.posJ, super.id);

    if(movBispo.mover(tabuleiro, i, j)){
        super.mover(tabuleiro, i, j);
        return true;
    }

    else if(movTorre.mover(tabuleiro, i, j)){
        super.mover(tabuleiro, i, j);
        return true;
    }
    else{
        return false;
    }
}  

}