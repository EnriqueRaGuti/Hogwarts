import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from "@angular/common/http";
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-estudiantes',
  templateUrl: './estudiantes.component.html',
  styleUrls: ['./estudiantes.component.css']
})
export class EstudiantesComponent implements OnInit {
  estudiantes:any
  filterPost ='';

  // profileForm = new FormGroup({
  //   firstName: new FormControl(''),
  //   lastName: new FormControl(''),
  // });
  profileForm = new FormGroup({})

  solicitudes:any = []

  constructor(public router: Router, private http: HttpClient, private fb: FormBuilder) { 
  }

  ngOnInit(): void {
    this.getEstudiantes()
    this.validacion()
  }

  getEstudiantes(){
    this.http.get(`http://hp-api.herokuapp.com/api/characters/students`).subscribe(data => {
      this.estudiantes = data
      console.log(data);
    });
  }

  volver() {
    this.router.navigate(['/inicio'])
  }

  validacion() {
    this.profileForm = this.fb.group({
      name: [ '',
        [
          Validators.required
        ]
      ],
      patronus: [ '',
        [
          Validators.required
        ]
      ],
      age: [ '',
        [
          Validators.required
        ]
      ]
    })
  }

  onSubmit() {
    // TODO: Use EventEmitter with form value
    console.log(this.profileForm.value);
    this.solicitudes.push(this.profileForm.value);
    console.log("solicitudes",this.solicitudes);
    
  }

}
