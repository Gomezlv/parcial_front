import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import type { Empresa } from '../models/empresa.model';

@Injectable({ providedIn: 'root' })
export class EmpresaService {
  private readonly http = inject(HttpClient);
  private readonly baseUrl = '/api/empresas';

  getAll() {
    return this.http.get<Empresa[]>(this.baseUrl);
  }

  create(data: Empresa) {
    return this.http.post<Empresa>(this.baseUrl, data);
  }
}
