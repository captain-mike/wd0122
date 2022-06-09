import { Component } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { LoginModalComponent } from './login-modal/login-modal.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  isCollapsed = false;

  constructor(private modalService: NgbModal) {}

  open(){
    const riferimentoModal = this.modalService.open(LoginModalComponent)
    riferimentoModal.componentInstance.title = 'Accedi';
    riferimentoModal.componentInstance.modal = riferimentoModal;
  }
}
