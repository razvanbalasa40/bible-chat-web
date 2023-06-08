import { Component, OnInit, inject } from '@angular/core';
import {
  DocumentReference,
  Firestore,
  addDoc,
  collection,
} from '@angular/fire/firestore';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { AnimationOptions } from 'ngx-lottie';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
})
export class ContactComponent implements OnInit {
  private builder: FormBuilder = inject(FormBuilder);
  private firestore: Firestore = inject(Firestore);
  public contactForm: FormGroup;
  public sentMessage = false;
  public sending = false;
  public lottieSendingOptions: AnimationOptions = {
    path: 'assets/lottie/sending-message.json',
    loop: false,
  };

  ngOnInit() {
    this.contactForm = this.builder.group({
      Name: new FormControl('', [Validators.required]),
      Email: new FormControl('', [Validators.required, Validators.email]),
      Subject: new FormControl('', [Validators.required]),
      Message: new FormControl('', [Validators.required]),
    });
  }

  onSubmit() {
    this.sentMessage = true;
    this.sending = true;

    addDoc(collection(this.firestore, 'mails'), {
      to: 'hello@thebiblechat.app',
      from: this.contactForm.value.Email,
      replyTo: this.contactForm.value.Email,
      template: {
        name: 'bible-study-contact-mail',
        data: {
          username: this.contactForm.value.Name,
          originalSubject: this.contactForm.value.Subject,
          originalMessage: this.contactForm.value.Message,
        },
      },
    })
      .then((documentReference: DocumentReference) => {
        setTimeout(() => {
          this.sending = false;
        }, 2000);
      })
      .catch((error) => {
        console.log(error);
      });
  }
}
