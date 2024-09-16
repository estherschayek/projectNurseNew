import { Component} from '@angular/core';
import {CommonModule} from '@angular/common'
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ReactiveFormsModule, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { NursesService } from '../../Services/nurses.service';
import { Router, ActivatedRoute} from '@angular/router';
import { SweetAlertService } from '../../Services/sweet-alert.service';
import{ButtonsStyleDirective} from '../../Directives/buttons-style.directive'
import{InputsStyleDirective} from '../../Directives/inputs-style.directive'

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule,ButtonsStyleDirective,InputsStyleDirective],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  userId=''
  formdata1:FormGroup=new FormGroup({})
  formdata2:FormGroup=new FormGroup({})
  constructor(private fb: FormBuilder,private nurseService:NursesService, private modalService: NgbModal, private route:ActivatedRoute, private router:Router, private sweet:SweetAlertService) { 
    this.route.params.subscribe(params=>
      this.userId=params['userId'])
     
  }

  ngOnInit(): void {
    this.formdata1=this.fb.group({
    userA:new FormControl("",[Validators.required]),
    password:new FormControl("",[Validators.required])
    });

    this.formdata2=this.fb.group({
      userN: new FormControl("",[Validators.required]),
      id: new FormControl("",[Validators.required])
      });
}

public open(modal: any): void {
  this.modalService.open(modal);
}

checkValid1(e:Event) {
  e.preventDefault()
  console.log(this.formdata1.get('userA'))
  console.log(this.formdata1.get('password'))
 console.log(this.formdata1.valid)
if(this.formdata1.valid)
  { console.log("you enter the function")
    if(this.nurseService.loginAdmin(this.formdata1.value.userA,this.formdata1.value.password))
      {
        this.router.navigate(['/adminGen'])
        this.sweet.showSuccessAlert("Dear Administrator," ,"Welcome!")
      }
      else{
        this.sweet.showErrorAlert("You are not the administrator!")
      }
  }
}

checkValid2(e:Event) {
  e.preventDefault()
if(this.formdata2.valid)
 {
  this.userId=this.formdata2.get('id')?.value;
   if(this.nurseService.loginNurse(this.formdata2.value.id,this.formdata2.value.userN))
   {
    this.router.navigate(['/nurseGen/',this.userId])
    this.sweet.showSuccessAlert(this.formdata2.value.userN,"Welcome to your personnal area!")
    this.nurseService.currentNurse=this.nurseService.getOneNurseDetails(this.userId? this.userId:'')
  }
   else{
    this.sweet.showErrorAlert("Their might be some errors...")
   }

 }
}
}
