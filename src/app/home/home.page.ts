import { Component } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})

export class HomePage {
  isLoading: boolean = false;
  funcionarios: any;

  
  constructor(private modalController: ModalController){
    this.getFuncionarios()
  }

  fecharModal() {
    this.modalController.dismiss();
  }


  getFuncionarios(){
    this.isLoading = true;
    fetch('http://localhost/exercicio/funcionario/listar_funcionario.php')
    .then(response => response.json())
    .then(response => {
      this.funcionarios = response['funcionarios']
    })
    .catch(erro => {
      console.log(erro);
    })
    .finally(()=>{
      this.isLoading = false;
    })
  }



  remover(CodFun: any){
    this.isLoading = true;
    fetch('http://localhost/exercicio/funcionario/remover_funcionario.php',
			{
			  method: 'DELETE',
			  headers: {
			    'Content-Type': 'application/json',
			  },
			  body: JSON.stringify({ CodFun: CodFun, Acao: 'remover'})
			}
		)
    .then(response => response.json())
    .then(response => {
      console.log(response['mensagem']);
      this.getFuncionarios()
    })
    .catch(erro => {
      console.log(erro);
    })
    .finally(()=>{
      this.isLoading = false;
    })  
  }

  atualizar(CodFun: any, Dados: any){
    this.isLoading = true;

    fetch('http://localhost/exercicio/funcionario/atualizar_funcionario.php',
			{
			  method: 'PUT',
			  headers: {
			    'Content-Type': 'application/json',
			  },
			  body: JSON.stringify({
          CodFun: CodFun,
          Nome: Dados.nome,
          Sobrenome: Dados.sobrenome,
          Cargo: Dados.cargo,
          Salario: Dados.salario,
          DataNasc: Dados.dataNasc,
          Pais: Dados.pais,
          Cidade: Dados.cidade,
          CEP: Dados.cep,
          Endereco: Dados.endereco,
          Fone: Dados.fone
        })
			}
		)
    .then(response => response.json())
    .then(response => {
      console.log(response);
    })
    .catch(erro => {
      console.log(erro);
    })
    .finally(()=>{
      this.isLoading = false;
    })  
  }

  inserirDados(Dados: any){
    this.isLoading = true;
    fetch('http://localhost/exercicio/funcionario/inserir_funcionario.php',
			{
			  method: 'POST',
			  headers: {
			    'Content-Type': 'application/json',
			  },
			  body: JSON.stringify(
          { 
            Nome: Dados.nome,
            Sobrenome: Dados.sobrenome,
            Cargo: Dados.cargo,
            Salario: Dados.salario,
            DataNasc: Dados.dataNasc,
            Pais: Dados.pais,
            Cidade: Dados.cidade,
            CEP: Dados.cep,
            Endereco: Dados.endereco,
            Fone: Dados.fone
          })
			}
		)
    .then(response => response.json())
    .then(response => {
      // this.funcionarios = response['funcionarios'];
      response = this.getFuncionarios();
    })
    .catch(erro => {
      console.log(erro);
    })
    .finally(()=>{
      this.isLoading = false;
    })  
  }

  pesquisar(Dados: any){
    this.isLoading = true;
    fetch('http://localhost/exercicio/funcionario/consultar_funcionario_por_filtro.php',
			{
			  method: 'POST',
			  headers: {
			    'Content-Type': 'application/json',
			  },
			  body: JSON.stringify(
          { 
            search: Dados.search,
            filtro : Dados.filtro
          })
			}
		)
    .then(response => response.json())
    .then(response => {
      this.funcionarios = response['funcionarios'];
    })
    .catch(erro => {
      console.log(erro);
    })
    .finally(()=>{
      this.isLoading = false;
    })

  }
}