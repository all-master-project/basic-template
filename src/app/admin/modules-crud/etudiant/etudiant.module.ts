import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EtudiantRoutingModule } from './etudiant-routing.module';
import { EtudiantListComponent } from './components/etudiant-list/etudiant-list.component';
import { EtudiantFormComponent } from './components/etudiant-form/etudiant-form.component';

@NgModule({
  declarations: [EtudiantListComponent, EtudiantFormComponent],
  imports: [CommonModule, EtudiantRoutingModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class EtudiantModule {}
