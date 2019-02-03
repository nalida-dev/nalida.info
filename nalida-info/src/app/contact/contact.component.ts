import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
  contactForm = new FormGroup({
    name: new FormControl(''),
    email: new FormControl(''),
    category: new FormControl(''),
    priority: new FormControl(''),
    copy: new FormControl(false),
    human: new FormControl(false),
    message: new FormControl(''),
  });

  constructor() { }

  ngOnInit() {
  }

  // TODO: form validation

  isValid({name, email, category, priority, copy, human, message }) {
    if (category === '') {
      return false;
    }
    if (!human) {
      return false;
    }
    if (!message.length) {
      return false;
    }
    if (!email.length) {
      return false;
    }
    return true;
  }

  onSubmit() {
    const formAnswer = this.contactForm.value;
    if (this.isValid(formAnswer)) {
      {}
    }
  }

}
