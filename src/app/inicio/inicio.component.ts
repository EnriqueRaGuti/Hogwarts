import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {

  casas = [
    {nombre: "slytherin"},
    {nombre: "gryffindor"},
    {nombre: "ravenclaw"},
    {nombre: "hufflepuff"},
  ]

constructor(public router: Router) { }

  ngOnInit(): void {
    this.cargarCasa()
  }

  cargarCasa() {
    console.log(this.casas);
    
  }
  irCasa(n:any) {
    this.router.navigate(['/personajes/' + n.split('/')[0]])
  }

  irEstudiantes() {
    this.router.navigate(['/estudiantes'])
  }

  irProfesores() {
    this.router.navigate(['/profesores'])
  }

}
