import { Component } from '@angular/core';
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})

export class HomePage {
  isLoading: boolean = false;
  funcionarios: any;

  constructor(){
    this.getFuncionarios()
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
			  method: 'POST',
			  headers: {
			    'Content-Type': 'application/json',
			  },
			  body: JSON.stringify({ CodFun: CodFun, Acao: 'remover'})
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

  atualizar(CodFun: any){
    this.isLoading = true;
    fetch('http://localhost/exercicio/funcionario/atualizar_funcionario.php',
			{
			  method: 'POST',
			  headers: {
			    'Content-Type': 'application/json',
			  },
			  body: JSON.stringify({ CodFun: CodFun, Acao: 'atualizar'})
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

  
  // inserir(CodFun: any){
  //   this.isLoading = true;
  //   fetch('http://localhost/exercicio/funcionario/inserir_funcionario.php',
	// 		{
	// 		  method: 'POST',
	// 		  headers: {
	// 		    'Content-Type': 'application/json',
	// 		  },
	// 		  body: JSON.stringify({ CodFun: CodFun, Acao: 'inserir'})
	// 		}
	// 	)
  //   .then(response => response.json())
  //   .then(response => {
  //     console.log(response);
  //   })
  //   .catch(erro => {
  //     console.log(erro);
  //   })
  //   .finally(()=>{
  //     this.isLoading = false;
  //   })  
  // }

}
