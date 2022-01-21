import { Component, Input, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { CeccoffButton } from './ceccoff-buttons.interface';

@Component({
  selector: 'ceccoff-buttons',
  templateUrl: './ceccoff-buttons.component.html',
  styleUrls: ['./ceccoff-buttons.component.css'],
})
export class CeccoffButtonsComponent {
  @Input() buttons: BehaviorSubject<CeccoffButton> =
    new BehaviorSubject<CeccoffButton>(null);
}
