$(document).ready(function(){
	$('.modal').modal();
	$('input#input_text, textarea#textarea1').characterCounter();
	$('select').material_select();
	$('.collapsible').collapsible();
	$('.tooltipped').tooltip({delay: 50});

	

	var $numInt = $('<span>Insira um número inteiro e positivo</span>');
	var $numPositivo = $('<span>Insira um número positivo</span>');
	var $campoVazio = $('<span>Campo vazio! Insira um número</span>');
	var $divisao = $('<span>Não é possível dividir por zero!</span>');
	var $conversao = $('<span>O valor da cotação não pode ser 0</span>');
	var $numInteiro = $('<span>Insira um número inteiro</span>')

	//Verificar se o input está vazio.
	function verificaCampoTela1(id) {
		var boolean = true;
		var valorX = $(id).val();
		if (valorX === "") {
			Materialize.toast($campoVazio, 4000);
			boolean = false;
		}
		return boolean;
	}

	//Verificar se o input está vazio.
	function verificaCampoTela2(id, id2) {
		var boolean = true;
		var valorX = $(id).val();
		var valorX2 = $(id2).val();
		if (valorX === "" || valorX2 === "") {
			Materialize.toast($campoVazio, 4000);
			boolean = false;
		}
		return boolean;
	}

	//Verificar se o número é do tipo inteiro.
	function verificaInt(x) {
		var boolean = false;
		if(x < 0) {
			boolean = false;
		} else if(x % 1 === 0) {
			boolean = true;
		}
		return boolean;
	}

	//Verificar se o número é do tipo inteiro.
	function verificaNum(x) {
		var boolean = false;
		if(x % 1 === 0) {
			boolean = true;
		}
		return boolean;
	}

	//Verificar se o número é do tipo decimal.
	function verificaDec(x) {
		var boolean = false;
		if(x % 1 === 1) {
			boolean = true;
		} else {
			boolean = false;
		}
		return boolean;
	}

	//Verifica se o número é positivo.s
	function verificaPositivo(x) {
		var boolean = true;
		if(x < 0) {
			boolean = false;
		} 
		return boolean;
	}

	//Chama a função de acordo com o input raio selecionado.
	$('input:radio[name="group1"]').change(function() {
		if ($("input[name='group1']:checked").val() === "fat") {
			fatorial();
		} else if ($("input[name='group1']:checked").val() === "xQuadrado") {
			quadrado();
		} else if ($("input[name='group1']:checked").val() === "xCubo") {
			cubo();
		} else if ($("input[name='group1']:checked").val() === "xRaizQuadrada") {
			raizQuadrada();
		} else if ($("input[name='group1']:checked").val() === "seno") {
			seno();
		} else if ($("input[name='group1']:checked").val() === "1") {
			divisaoPorx();
		} else if ($("input[name='group1']:checked").val() === "rsForDolar") {
			realDolar();
		} else if ($("input[name='group1']:checked").val() === "rsForEuro") {
			realEuro();
		} else if ($("input[name='group1']:checked").val() === "dolarForRs") {
			dolarReal();
		} else if ($("input[name='group1']:checked").val() === "euroForReal") {
			euroReal();
		} else if ($("input[name='group1']:checked").val() === "dec") {
			decBin();
		} else if ($("input[name='group1']:checked").val() === "hex") {
			decHex();
		} else if ($("input[name='group1']:checked").val() === "bin") {
			binDec();
		} else if ($("input[name='group1']:checked").val() === "hexDec") {
			hexDec();
		} 

	});

	//Chama a função de acordo com option selecionado.
	$("#operacoes").change(function() {
		if($("#operacoes option:selected").val() === "0") {
			soma();
		} else if($("#operacoes option:selected").val() === "1") {
			adicao();
		} else if($("#operacoes option:selected").val() === "2") {
			mutiplicacao();
		} else if($("#operacoes option:selected").val() === "3") {
			divisao();
		} else if($("#operacoes option:selected").val() === "4") {
			mod();
		} 
	});

	//Início das funções
	function fatorial() {
		var valorX = $('#valorX').val();
		var boolean = verificaInt(valorX)
		var result;

		if (verificaCampoTela1("#valorX") === false) {
		} else {
			if (boolean === true) {
				var factorial = function(n) {
					if(n == 0) {
						return 1
					} else {
						return n * factorial(n - 1);
					}
				}
				$('#resultado1').val(factorial(valorX));	
			} else {
				Materialize.toast($numInt, 4000);
			}
		}
	}

	function quadrado() {
		var valorX = $('#valorX').val();
		
		if (verificaCampoTela1('#valorX') === false) {
		} else {
			$('#resultado1').val(Math.pow(valorX, 2));	
		}
	}

	function cubo() {
		var valorX = $('#valorX').val();
		if (verificaCampoTela1() === false) {
		} else {
			$('#resultado1').val(Math.pow(valorX, 3));
		}
	}

	function raizQuadrada() {
		var valorX = $('#valorX').val();

		if (verificaCampoTela1('#valorX') === false) {
		} else {
			var boolean = verificaPositivo(valorX);
			if (boolean === true) {
				$('#resultado1').val(Math.sqrt(valorX))	;
			} else {
				Materialize.toast($numPositivo, 3000);
			}
		}
	}

	function seno() {
		var valorX = $('#valorX').val();
		if (verificaCampoTela1('#valorX') === false) {
		} else {
			$('#resultado1').val(Math.sin(valorX))
		}
	}

	function divisaoPorx() {
		var valorX = $('#valorX').val();
		if (verificaCampo('#valorX') === false) {
		} else {
			$('#resultado1').val(1/valorX);
		}
	}

	function soma() {
		var valorX1 = $('#valorX1').val();
		var valorX2 = $('#valorX2').val();
		if(verificaCampoTela2('#valorX1', '#valorX2') === false) {
		} else {
			$('#resultado2').val(parseFloat(valorX1) + parseFloat(valorX2));
		}
	}

	function adicao() {
		var valorX1 = $('#valorX1').val();
		var valorX2 = $('#valorX2').val();
		if(verificaCampoTela2('#valorX1', '#valorX2') === false) {
		} else {
			$('#resultado2').val(parseFloat(valorX1) - parseFloat(valorX2));
		}
	}

	function mutiplicacao() {
		var valorX1 = $('#valorX1').val();
		var valorX2 = $('#valorX2').val();
		var result;
		if(verificaCampoTela2('#valorX1', '#valorX2') === false) {
		} else {
			if (valorX1 == 0 || valorX2 == 0) {
				result = 0;
			} else {
				result = parseFloat(valorX1) * parseFloat(valorX2);
			}
			$('#resultado2').val(result);
		}
	}

	function divisao() {
		var valorX1 = $('#valorX1').val();
		var valorX2 = $('#valorX2').val();
		
		if(verificaCampoTela2('#valorX1', '#valorX2') === false) {
		} else {
			if(valorX2 == 0){
				Materialize.toast($divisao, 4000);
			} else {
				$('#resultado2').val(parseFloat(valorX1) / parseFloat(valorX2));
			}	
		}
	}

	function mod() {
		var valorX1 = $('#valorX1').val();
		var valorX2 = $('#valorX2').val();
		
		if(verificaCampoTela2('#valorX1', '#valorX2') === false) {
		} else {
			if(valorX2 == 0){
				Materialize.toast($divisao, 4000);
			} else {
				$('#resultado2').val(parseFloat(valorX1) % parseFloat(valorX2));
			}	
		}
	}

	function realDolar() {
		var valorX3 = $('#valorX3').val();
		var valorX4 = $('#valorX4').val();

		if(verificaCampoTela2('#valorX3', '#valorX4') === false) {
		} else {
			if(valorX4 == 0){
				Materialize.toast($conversao, 4000);
			} else {
				$('#resultado3').val(parseFloat(valorX3) / parseFloat(valorX4));
			}	
		}
	}

	function realEuro() {
		var valorX3 = $('#valorX3').val();
		var valorX5 = $('#valorX5').val();

		if(verificaCampoTela2('#valorX3', '#valorX5') === false) {
		} else {
			if(valorX5 == 0){
				Materialize.toast($conversao, 4000);
			} else {
				$('#resultado3').val(parseFloat(valorX3) / parseFloat(valorX5));
			}	
		}
	}

	function dolarReal() {
		var valorX3 = $('#valorX3').val();
		var valorX4 = $('#valorX4').val();
		var result;
		if(verificaCampoTela2('#valorX3', '#valorX4') === false) {
		} else {
			if (valorX3 == 0 || valorX4 == 0) {
				result = 0;
			} else {
				result = parseFloat(valorX3) * parseFloat(valorX4);
			}
			$('#resultado3').val(result);
		}
	}

	function euroReal() {
		var valorX3 = $('#valorX3').val();
		var valorX5 = $('#valorX5').val();
		var result;
		if(verificaCampoTela2('#valorX3', '#valorX5') === false) {
		} else {
			if (valorX3 == 0 || valorX5 == 0) {
				result = 0;
			} else {
				result = parseFloat(valorX3) * parseFloat(valorX5);
			}
			$('#resultado3').val(result);
		}
	}

	function decBin() {
		var binary = $('#valorConversor').val();
		var boolean = verificaNum(binary);

		if(verificaCampoTela1('#valorConversor') === false) {
		} else {
			if (boolean === true) {
				var result = parseInt(binary);
				$('#resultado4').val(result >= 0 ? result.toString(2) : (~result).toString(2));	
			} else {
				Materialize.toast($numInteiro, 4000);
			}
			
		}
	}

	function decHex() {
		var hex = $('#valorConversor').val();
		var boolean = verificaNum(hex);
		if(verificaCampoTela1('#valorConversor') === false) {
		} else {
			if (boolean === true) {
				var result = parseInt(hex);
				$('#resultado4').val(result.toString(16).toUpperCase());
			}
			else {
				Materialize.toast($numInteiro, 4000);
			}
		}
	}

	function binDec() {
		var bin = $('#valorConversor').val();
		var boolean = verificaNum(bin);
		if(verificaCampoTela1('#valorConversor') === false) {
		} else {
			if(boolean === true) {
				var result = parseInt(bin, 2);
				$('#resultado4').val(result);
			} else {
				Materialize.toast($numInteiro, 4000);
			}
		}
	}

	function hexDec() {
		var hex = $('#valorConversor').val();
		var boolean = verificaNum(hex);
		if(verificaCampoTela1('#valorConversor') === false) {
		} else {
				var result = parseInt(hex, 16);
				$('#resultado4').val(result);
		}
	}
	//Fim das funções
});

