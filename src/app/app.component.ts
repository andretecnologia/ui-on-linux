import { OnInit } from '@angular/core';
import { Component } from '@angular/core';
import { ClientesService } from './clientes.service';
import { Cliente } from './clientes';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  clientes: Cliente[] = [];
  constructor(private service: ClientesService){}
  ngOnInit(): void{
    this.service.getAll().subscribe(data=>{this.clientes=data})
  }
}
