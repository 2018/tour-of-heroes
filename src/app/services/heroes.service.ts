import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../environments/environment';
import {Hero} from '../heroes/models';

@Injectable({
  providedIn: 'root'
})
export class HeroesService {
  private readonly baseUrl: string;

  constructor(private http: HttpClient) {
    this.baseUrl = environment.appApi.baseUrl;
  }

  getAll() {
    return this.http.get(`${this.baseUrl}/heroes`);
  }

  get(id: string) {
    return this.http.get(`${this.baseUrl}/heroes/${id}`);
  }

  create(entity?: Hero) {
    return this.http.post(`${this.baseUrl}/heroes`, entity);
  }

  update(id: string, entity?: Hero) {
    return this.http.put(`${this.baseUrl}/heroes/${id}`, entity);
  }

  delete(id: string) {
    return this.http.delete(`${this.baseUrl}/heroes/${id}`);
  }
}
