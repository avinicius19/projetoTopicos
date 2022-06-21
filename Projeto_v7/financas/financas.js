const dadosArmazenados = localStorage;

class Financeiro {
	constructor() {
		this.renderizarNomeFinanceiro();
		this.renderizarTurmas();
        this.renderizarDisciplinas();
    
	}

	getUsuarioLogado() {
		var params = (new URL(document.location)).searchParams;
		return params.get('usuarioLogado');

	}

	renderizarNomeFinanceiro() {
		$('#PessoaLogada').html("Bem vindo(a) "+this.getUsuarioLogado());
	}

  renderizarTurmas() {
		var turmas = JSON.parse(localStorage.getItem('turma'))['Turmas'];
		$.map(Object.keys(turmas), function (turma) {
			
			$('#turmas, #turmas2,').append(`<option value="${turma}">${turma}</option>`);
		});
	}
  renderizarDisciplinas() {
		var disciplinas = JSON.parse(localStorage.getItem('pessoas'))['pessoas'].diciplina;
		$.map(Object.keys(disciplinas), function (disciplina) {
			
			$('#disciplinas, #disciplinas2,').append(`<option value="${disciplina}">${disciplina}</option>`);
		});
	}
  

}
financeiro = new Financeiro();