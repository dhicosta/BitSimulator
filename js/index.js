function IniciarPercusoDeInstrucoes() {
	intervalosDeChamandaDeFuncao = setInterval(game, VelocidadeDeChamadaDeFuncao);
}

function game() {
	ContadorDeEspacoPercorrido += 100;
	ObjectMov.setAttribute("cx", ContadorDeEspacoPercorrido);

	if (ContadorDeEspacoPercorrido == 1000) {
		clearInterval(intervalosDeChamandaDeFuncao);
		console.log("fim de jogo!!");
		ObjectMov.setAttribute("cx", 1200);
		ContadorDeEspacoPercorrido = 0;
	}
}

function AdicionarComandoNaMemoria() {}

function ExecutarPercursoEmAleatorio() {}
