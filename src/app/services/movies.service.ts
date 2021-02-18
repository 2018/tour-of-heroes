import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../environments/environment';
import {Hero} from '../heroes/models';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {
  private readonly baseUrl: string;

  constructor(private http: HttpClient) {
    this.baseUrl = environment.appApi.baseUrl;
  }

  getAll() {
    return this.http.get(`${this.baseUrl}/movies`);
  }

  get(id: string) {
    return this.http.get(`${this.baseUrl}/movies/${id}`);
  }

  create(entity?: Hero) {
    return this.http.post(`${this.baseUrl}/movies`, entity);
  }

  update(id: string, entity?: Hero) {
    return this.http.put(`${this.baseUrl}/movies/${id}`, entity);
  }

  delete(id: string) {
    return this.http.delete(`${this.baseUrl}/movies/${id}`);
  }
}
