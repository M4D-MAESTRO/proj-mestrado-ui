import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { CadastrarAlunoComponent } from '../cadastrar-aluno/cadastrar-aluno.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

  items: MenuItem[];
  opcao: number;

  ngOnInit() {
    this.items = [
      {
        label: 'Alunos',
        icon: 'pi pi-fw pi-id-card',
        items: [{
          label: 'Cadastrar',
          icon: 'pi pi-fw pi-plus',
          items: [
            {
              label: 'Aluno',
              icon: 'pi pi-fw pi-user-plus',
              command: () => {
                this.opcao = 1
                this.changeMenu()
              }
            },
            {
              label: 'Projeto',
              icon: 'pi pi-fw pi-file-o'
            }]
        },
        {
          label: 'Meus Alunos',
          icon: 'pi pi-fw pi-users'
        },
        {
          label: 'Sair',
          icon: 'pi pi-fw pi-sign-out'
        }]
      },
      {
        label: 'Perfil',
        icon: 'pi pi-fw pi-pencil',
        items: [
          {
            label: 'Meu perfil',
            icon: 'pi pi-fw pi-user-edit'
          }
        ]
      }];
  }

  changeMenu() {
    
  }
}
