import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {Contact} from '../../models/contact';
import {Store} from '@ngrx/store';
import * as fromApplication from '../../store'
import * as fromContacts from '../../store/contacts-actions'
import {ApplicationState} from '../../store/';

@Component({
  selector: 'app-contact-edit',
  templateUrl: './contact-edit.component.html',
  styleUrls: ['./contact-edit.component.sass']
})
export class ContactEditComponent implements OnInit {

  contact$: Observable<Contact>;

  constructor(public store: Store<ApplicationState>) { }

  ngOnInit() {
    this.contact$ = this.store.select(fromApplication.getCurrentContact);
  }

  submitted(contact: Contact) {
    this.store.dispatch(new fromContacts.Update(contact));
  }

}
