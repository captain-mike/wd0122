import { Component, Input, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-login-modal',
  templateUrl: './login-modal.component.html',
  styleUrls: ['./login-modal.component.scss']
})
export class LoginModalComponent implements OnInit {

  @Input() title!:string
  @Input() modal!:any

  constructor(private modalService: NgbModal) { }

  ngOnInit(): void {
  }

  close(){
    this.modal.close()
  }

}
