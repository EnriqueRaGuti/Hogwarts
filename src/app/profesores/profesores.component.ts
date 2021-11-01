import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from "@angular/common/http";

@Component({
  selector: 'app-profesores',
  templateUrl: './profesores.component.html',
  styleUrls: ['./profesores.component.css']
})
export class ProfesoresComponent implements OnInit {
  profesores:any
  filterPost ='';

  constructor(public router: Router, private http: HttpClient) { 
  }

  ngOnInit(): void {
    this.getProfesores()
  }

  getProfesores(){
    this.http.get(`http://hp-api.herokuapp.com/api/characters/staff`).subscribe(data => {
      this.profesores = data
      console.log(data);
    });
  }

  volver() {
    this.router.navigate(['/inicio'])
  }

}
