import { Component, OnInit } from '@angular/core';
import { UserService,user } from 'app/SERVICE/user.service';
import { Router } from '@angular/router';
import Swal from 'sweetalert2/dist/sweetalert2.js';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css'],
  providers: [UserService]
})
export class AddComponent implements OnInit {

  person : user={
    id:0,
    firstName:'',
    lastName:'',
    email:''
  };

  constructor(private userService:UserService , private router:Router) { }

  ngOnInit() {
  }

  addUser(){
    delete this.person.id;
    this.userService.addUser(this.person).subscribe(
      res=>{
        //console.log(res);
        Swal.fire('Ok...', 'The user created successfully!', 'success');
        setTimeout(() => {
          this.router.navigate(['/inicio']);
        }, 3000);
      },err=>{
        Swal.fire('Error...', 'an unexpected error occurred!', 'error')
      }
    );


  }

}
