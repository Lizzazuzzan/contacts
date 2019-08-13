import { Component, OnInit } from '@angular/core';
import {ApiService} from '../../services/api.service';
import {ActivatedRoute, Router} from '@angular/router'

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.css']
})
export class ContactsComponent implements OnInit {
  model: any = {};
  constructor(private apiService:ApiService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
  }
  // onSubmit() {
  //   //   console.log("heee");
  //   //  console.log(this.model);
  //   let userId = localStorage.getItem("userId");
  //     let businessinfos = {
  //       businessLocation: this.model.businessLocation,
  //       businessType:this.model.businessType,
  //       experience: this.model.experience,
  //       businessEntityType:this.model.businessEntityType,
  //       budget: this.model.budget,
  //       havePartners:this.model.havePartners,
  //       bizRegistered:this.model.bizRegistered,
  //       lookingInvestors:this.model.lookingInvestors,
  //       email:this.model.email,
       
  
        
  //     }
  //     console.log(businessinfos);
  //    this.apiService.sendContact(businessinfos).subscribe(res=>{
  //       console.log(res);
  //   })
  //   }

}
