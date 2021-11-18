import { Component, OnInit } from '@angular/core';
import { UserService,user } from 'app/SERVICE/user.service';
import { Router ,ActivatedRoute} from '@angular/router';
import Swal from 'sweetalert2/dist/sweetalert2.js';

@Component({
  selector: 'app-modified',
  templateUrl: './modified.component.html',
  styleUrls: ['./modified.component.css'],
  providers: [UserService]
})
export class ModifiedComponent implements OnInit {

  person : user={
    id:0,
    firstName:'',
    lastName:'',
    email:''
  };

  constructor(private userService:UserService , private router:Router, private activatedRouter:ActivatedRoute) { }

  ngOnInit() {
    const id_route_user = this.activatedRouter.snapshot.params.id;
    //console.log("id user"+id_route_user);

    if(id_route_user){
      this.userService.getOneByid(id_route_user).subscribe(
        res=>{
          //console.log(res);
          this.person= res.json();
          //console.log("person->",this.person);
        },err=>console.log("error->",err)
      );
    }
  }

  updateUser(){

    this.userService.modifiedUser(this.person.id,this.person).subscribe(
      res=>{
        //console.log("res update user->",res);
        Swal.fire('Ok...', 'The user updated successfully!', 'success');
        this.router.navigate(['/inicio']);
      },err=>{
        //console.log("err->",err)
        Swal.fire('Error...', 'an unexpected error occurred!', 'error'+err)
      }
    );
  }

}
