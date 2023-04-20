import { Component,OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit{
  form: FormGroup = new FormGroup({});

  constructor(private fb: FormBuilder) { }
  
  ngOnInit(): void {
    this.form = this.fb.group({
      username: [null, [Validators.required,Validators.minLength(8),Validators.maxLength(20)]],
      password: [null, [Validators.required,Validators.minLength(8),Validators.maxLength(32),Validators.pattern(/(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[@$!%*#?&^_-]).{8,32}/),]
    ],
    });
  }
  
  formSubmit(form:any) {
    alert('User exitoso\n'+JSON.stringify(form.value,null,4));
  }
  
  formCancel() {
    alert('User Cancelada');
  }
}
