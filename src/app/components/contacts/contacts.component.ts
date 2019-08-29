import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/api.service';
import { ActivatedRoute, Router } from '@angular/router'

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.css']
})
export class ContactsComponent implements OnInit {
  model: any = {};
  requests: any = [];
  contactList: any  = [];
  keyword = '';
  noResult = false;
  constructor(private apiService: ApiService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
    this.apiService.getContactInfo().subscribe(
      (response: any) => {
        console.log("response", response.Items);

        this.requests = response.Items;


      },
      error => {
        console.log("error", error);
      }
    );
  }
  onSubmit() {
    //   console.log("heee");
    //  console.log(this.model);
    // let userId = localStorage.getItem("userId");
    let contactinfos = {
      name: this.model.name,
      email: this.model.email,
      mobileNo: this.model.mobileNo

    }
    console.log(contactinfos);
    this.apiService.sendContact(contactinfos).subscribe(res => {
      console.log(res);
    })
  }
  searchContacts() {
    this.apiService.searchContacts(this.keyword).subscribe(res => {
   console.log("res",res);
   
      this.contactList = res;
      if (this.contactList.length === 0) {
        this.noResult = true;
      }
    }, error => {
      
      // this.toastr.showErrorToastr('Failed to fetch details');
      console.error('Error loading the Testimonial list', error);
    });
  }

}
