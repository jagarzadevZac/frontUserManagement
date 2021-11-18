import { Component, OnInit } from '@angular/core';
import { UserService,user } from 'app/SERVICE/user.service';
import { Router } from '@angular/router';
import Swal from 'sweetalert2/dist/sweetalert2.js';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css'],
  providers: [UserService]
})
export class InicioComponent implements OnInit {

  UserList: user[];

  constructor(private userService:UserService , private router:Router) { }

  ngOnInit() {
    this.userlist();
  }

  userlist(){
    this.userService.getUser().subscribe(
      res=>{
        console.log(res.json());
        this.UserList=<any>res.json();
      },
      err=> console.log(err)
    );
  }

  deleteUser(id:number){
    this.userService.deleteUser(id).subscribe(
      res=>{
       /*  console.log(res);
        console.log("delete user ok"); */
        Swal.fire('Ok...', 'The user deleted successfully!', 'success');
        this.userlist();
      },
      err=>Swal.fire('Error...', 'an unexpected error occurred!', 'error')
    );
  }

  editUser(id:number){

    this.router.navigate(['/edit/'+id])

  }

}
