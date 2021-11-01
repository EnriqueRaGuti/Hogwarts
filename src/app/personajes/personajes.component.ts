import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient } from "@angular/common/http";

@Component({
  selector: 'app-personajes',
  templateUrl: './personajes.component.html',
  styleUrls: ['./personajes.component.css']
})
export class PersonajesComponent implements OnInit {
  nombreCasa:any
  datos:any
  filterPost ='';

  constructor(public router: Router, private http: HttpClient, private route: ActivatedRoute) { 
    this.nombreCasa = this.route.snapshot.paramMap.get('nombre')
  }

  ngOnInit(): void {
    this.getPersonajes()
  }

  volver() {
    this.router.navigate(['/inicio'])
  }

  getPersonajes(){
    this.http.get(`http://hp-api.herokuapp.com/api/characters/house/${this.nombreCasa}`).subscribe(data => {
      this.datos = data
      console.log(data);
    });
  }

}
