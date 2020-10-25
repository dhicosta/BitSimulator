var Regist = [];
var IsRegistradorContar = 0;
function IniciarPercusoDeInstrucoes() {
	///intervalosDeChamandaDeFuncao = setInterval(game, VelocidadeDeChamadaDeFuncao);
}
function AdicionarComando() {
	var valorDeInput = document.getElementById("EntradaDeInstrucao").value;
	var InstrucaoDecomposta = valorDeInput.split(" ");
	var contadorDeCond = 0;

	for (var contador = 0; contador < Instrucoes.length; contador++) {
		contadorDeCond += 1;
		if (3 <= InstrucaoDecomposta.length <= 4) {
			if (InstrucaoDecomposta[0] == Instrucoes[contador]) {
				if (
					InstrucaoDecomposta.length == 4 &&
					(InstrucaoDecomposta[0] == "ADD" ||
						InstrucaoDecomposta[0] == "SUB" ||
						InstrucaoDecomposta[0] == "DIV")
				) {
					Regist.push(InstrucaoDecomposta[1]);
					Regist.push(InstrucaoDecomposta[2]);
					Regist.push(InstrucaoDecomposta[3]);

					for (var contador = 0; contador < Registradores.length; contador++) {
						for (
							var contadorRegistrador = 0;
							contadorRegistrador < Regist.length;
							contadorRegistrador++
						) {
							if (Registradores[contador] == Regist[contadorRegistrador]) {
								IsRegistradorContar += 1;
							}
						}
					}
					if (IsRegistradorContar == Regist.length) {
						var AlertErrorColor = document.getElementById("EntradaDeInstrucao");
						AlertErrorColor.style = "border:2px solid green;";
						InstrucoesDeEntrada.push(valorDeInput);
						console.log(InstrucoesDeEntrada);
						//implementar função para adicionar commando
						IsRegistradorContar = 0;
						contadorDeCond = 0;
						break;
					} else {
						IsRegistradorContar = 0;
					}
				} else {
					if (
						InstrucaoDecomposta.length == 3 &&
						(InstrucaoDecomposta[0] == "LOAD" ||
							InstrucaoDecomposta[0] == "STO")
					) {
						Regist = [];

						Regist.push(InstrucaoDecomposta[1]);
						Regist.push(InstrucaoDecomposta[2]);

						for (
							var contador = 0;
							contador < Registradores.length;
							contador++
						) {
							for (
								var contadorRegistrador = 0;
								contadorRegistrador < Regist.length;
								contadorRegistrador++
							) {
								if (Registradores[contador] == Regist[contadorRegistrador]) {
									IsRegistradorContar += 1;
								}
							}
						}
						if (IsRegistradorContar == Regist.length) {
							var AlertErrorColor = document.getElementById(
								"EntradaDeInstrucao"
							);
							AlertErrorColor.style = "border:2px solid green;";
							InstrucoesDeEntrada.push(valorDeInput);
							console.log(InstrucoesDeEntrada);
							//implementar função para adicionar commando
							IsRegistradorContar = 0;
							contadorDeCond = 0;
							break;
						} else {
							var AlertErrorColor = document.getElementById(
								"EntradaDeInstrucao"
							);
							AlertErrorColor.style = "border:2px solid red;";
							alert(
								"Ouve um erro na sua entrada, por favor revise o seu dado/instrução e adicione novamente!!"
							);
							contadorDeCond = 0;
							IsRegistradorContar = 0;
						}
					} else {
						var AlertErrorColor = document.getElementById("EntradaDeInstrucao");
						AlertErrorColor.style = "border:2px solid red;";
						alert(
							"Ouve um erro na sua entrada, por favor revise o seu dado/instrução e adicione novamente!!"
						);
						contadorDeCond = 0;
						IsRegistradorContar = 0;
						break;
					}
				}
			}
		}
	}
	if (contadorDeCond == Instrucoes.length) {
		console.log(typeof InstrucaoDecomposta[0]);
		if (
			parseInt(InstrucaoDecomposta[0]) == parseInt(InstrucaoDecomposta[0]) &&
			parseInt(InstrucaoDecomposta[0]) != NaN
		) {
			//adicionar e criar tag de dado
			var AlertErrorColor = document.getElementById("EntradaDeInstrucao");
			AlertErrorColor.style = "border:2px solid green;";
			console.log("feito");
			DadosDeEntrada.push(valorDeInput);
			console.log(DadosDeEntrada);
			contadorDeCond = 0;
		} else {
			var AlertErrorColor = document.getElementById("EntradaDeInstrucao");
			AlertErrorColor.style = "border:2px solid red;";
			alert(
				"Ouve um erro na sua entrada, por favor revise o seu dado/instrução e adicione novamente!!"
			);
			contadorDeCond = 0;
		}
	}
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

// Contador de espaço na memoria
let i = 1;
function AdicionarComandoNaMemoria() {
	let ValorDeCadaTabela = document.getElementById("td" + i).innerText;
	if (ValorDeCadaTabela == "") {
		ValorDeCadaTabela = document.getElementById("entrada").value;
		document.getElementById("td" + i).innerText = ValorDeCadaTabela;
		i++;
	}
}

function ExecutarPercursoEmAleatorio() {}
