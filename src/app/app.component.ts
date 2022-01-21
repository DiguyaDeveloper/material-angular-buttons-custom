import { Component, OnInit, VERSION } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { CeccoffButton } from './modules/shared/components/ceccoff-buttons/ceccoff-buttons.interface';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  buttons: BehaviorSubject<CeccoffButton[]> = new BehaviorSubject<
    CeccoffButton[]
  >([]);

  name = 'Angular ' + VERSION.major;

  ngOnInit(): void {
    this.buttons.next([
      {
        label: 'CONTINUAR',
        ariaLabel: 'Botao continuar',
        color: 'primary',
        type: 'mat-raised-button',
      },
      {
        label: 'CONTINUAR',
        ariaLabel: 'Botao continuar',
        color: 'primary',
        type: 'mat-raised-button',
      },
      {
        label: 'CONTINUAR',
        ariaLabel: 'Botao continuar',
        color: 'primary',
        type: 'mat-raised-button',
      },
      {
        label: 'CANCELAR',
        ariaLabel: 'Botao cancelar',
        color: 'primary',
        type: 'mat-flat-button',
      },
      {
        label: 'DESISTIR',
        ariaLabel: 'Botao desistir',
        color: 'primary',
        type: 'mat-stroked-button',
      },
      {
        label: 'DESISTIR',
        ariaLabel: 'Botao desistir',
        color: '',
        type: 'mat-stroked-button',
      },
    ]);
  }
}
