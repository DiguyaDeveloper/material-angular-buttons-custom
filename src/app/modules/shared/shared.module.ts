import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CeccoffButtonsComponent } from './components/ceccoff-buttons/ceccoff-buttons.component';
import { MaterialModule } from '../material/material.module';

@NgModule({
  imports: [CommonModule, MaterialModule],
  declarations: [CeccoffButtonsComponent],
  exports: [CeccoffButtonsComponent],
})
export class SharedModule {}
