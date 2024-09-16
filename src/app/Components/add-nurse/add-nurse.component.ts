import { Component } from '@angular/core';
import {CommonModule} from '@angular/common'
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ReactiveFormsModule, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { NursesService } from '../../Services/nurses.service';
import { Router, ActivatedRoute} from '@angular/router';
import { SweetAlertService } from '../../Services/sweet-alert.service';
import{ButtonsStyleDirective} from '../../Directives/buttons-style.directive'
import{InputsStyleDirective} from '../../Directives/inputs-style.directive'

@Component({
  selector: 'app-add-nurse',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule,ButtonsStyleDirective,InputsStyleDirective],
  templateUrl: './add-nurse.component.html',
  styleUrl: './add-nurse.component.css'
})
export class AddNurseComponent {
  formdata:FormGroup=new FormGroup({})

  constructor(private fb: FormBuilder,
    private nurseService:NursesService, 
    private modalService: NgbModal, 
    private route:ActivatedRoute, 
    private router:Router,
    private sweet:SweetAlertService){}

    ngOnInit(): void {
    this.formdata=this.fb.group({
    firstN:new FormControl("",[Validators.required,Validators.pattern(/^[\u0590-\u05FF\u0600-\u06FFa-zA-Z\s]+$/)]),
    lastN:new FormControl("",[Validators.required,Validators.pattern(/^[\u0590-\u05FF\u0600-\u06FFa-zA-Z\s]+$/)]),
    id:new FormControl("",[Validators.required,Validators.minLength(9),Validators.pattern(/^[0-9]{9}$/)]),
    phoneN:new FormControl("",[Validators.required,Validators.pattern(/^(05[0-9]-?(\d{7}|\d{6}-\d{1})|0[1-9]-?\d{7})$/)]),
    statu:new FormControl("",[Validators.required]),
    vetek:new FormControl("",[Validators.required,Validators.pattern(/^(?!-)\d+$/)]),

    });
  }

  public open(modal: any): void {
    this.modalService.open(modal);
  }
  
  checkValid1(e:Event) {
    e.preventDefault()

  if(this.formdata.valid)
  {
    console.log(this.nurseService.isNurseExiste(this.formdata.value.id))
    if(this.nurseService.isNurseExiste(this.formdata.value.id))
      { console.log("you enter the function")
        this.nurseService.addOneNurse(this.formdata.value.id,this.formdata.value.firstN,this.formdata.value.lastN,this.formdata.value.phoneN,this.formdata.value.statu,this.formdata.value.vetek)
        
          this.router.navigate(['/adminGen'])
          this.sweet.showSuccessAlert(this.formdata.value.firstN ,"was added succesfuly!")
      }
    else {
      this.sweet.showErrorAlert("This nurse is already inscript")
    }
    
  }
   
  else{
          this.sweet.showErrorAlert("Some errors occured")
      }
    }
  
}
