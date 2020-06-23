var jugador1; 
var jugador2;

//* jugadaIF define la jugada hecha por el jugador 1 y el jugador 2
//* Implementando un IF
//*
//* Jugadas pueden ser 1: Piedra, 2: Papel, 3: Tijera
//* 1 vence a 3 
//* 2 vence a 1
//* 3 vence a 2
//*
//* resultado indica el ganador:
//*     -1 jugador1
//*     0 empate
//*     1 jugador2 
function jugadaIf( jugada1,jugada2){
    var resultado;
    if (jugada1===jugada2){
        resultado= 0;
    }else if ( jugada1 === 1 && jugada2===3 || 
                jugada1=== 2 && jugada2===1 ||
                jugada1== 3 && jugada2===2){
        resultado= -1;
    }else {
        resultado=1;
    }
    return resultado; 

}
//! Salida esperada: 1 (Jugador 2 gana)
jugadaIf(1,2);
//! Salida esperada: -1 (Jugador 1 gana)
jugadaIf(1,3);
//! Salida esperada 0 (Empate)
jugadaIf(1,1);


//* jugadaSw define la jugada hecha por el jugador 1 y el jugador 2
//* Implementando un switch
//*
//* Jugadas pueden ser 1: Piedra, 2: Papel, 3: Tijera
//* 1 vence a 3 
//* 2 vence a 1
//* 3 vence a 2
//*
//* resultado indica el ganador:
//*     -1 jugador1
//*     0 empate
//*     1 jugador2 
function jugadaSw( jugada1,jugada2){
    
    switch(true){
        case jugada1===jugada2:
            return 0;
        case jugada1 === 1 && jugada2===3:
        case jugada1=== 2 && jugada2===1:
        case jugada1== 3 && jugada2===2:
            return -1;
        default:
            return 1;
    }
    
}

//! Salida esperada: 1 (Jugador 2 gana)
jugadaSw(1,2);
//! Salida esperada: -1 (Jugador 1 gana)
jugadaSw(1,3);
//! Salida esperada 0 (Empate)
jugadaSw(1,1);