import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';

import { EmpresaService } from '../../services/empresa.service';
import type { Empresa } from '../../models/empresa.model';

@Component({
  selector: 'app-empresas-page',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './empresas-page.component.html',
})
export class EmpresasPageComponent implements OnInit {
  private readonly fb = inject(FormBuilder);
  private readonly empresaService = inject(EmpresaService);

  empresas: Empresa[] = [];

  form = this.fb.group({
    nombre: [''],
    nit: [''],
    ciudad: [''],
    sector: [''],
  });

  ngOnInit() {
    this.load();
  }

  load() {
    this.empresaService.getAll().subscribe((list) => {
      this.empresas = list;
    });
  }

  submit() {
    this.empresaService.create(this.form.value as Empresa).subscribe(() => {
      this.form.reset();
      this.load();
    });
  }
}
