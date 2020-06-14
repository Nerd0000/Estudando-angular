import { Course } from './course'
import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs'

// Permite a injecao de
// dependencia na root da aplicacao
@Injectable({
  providedIn: 'root'
})

export class CourseService {

  // Endpoint rest
  private coursesUrl: string = 'https://3100-a89ac21f-3653-4a3e-9a14-12e4437ba532.ws-us02.gitpod.io/api/courses'

  // Importa o modulo http
  constructor(private httpClient: HttpClient) { }

  // Declara uma funcao que retorna todos os cursos
  retrieveAll(): Observable<Course[]> {
    return this.httpClient.get<Course[]>(this.coursesUrl)
  }

  // Declara uma funcao que retorna o curso com o id digitado
  retrieveById(id: number): Observable<Course> {
    return this.httpClient.get<Course>(`${this.coursesUrl}/${id}`)
  }

  // Declara uma funcao que salva alteracoes em um curso
  save(course: Course): Observable<Course> {
    // Caso o id exista
    if (course.id) {
      return this.httpClient.put<Course>(`${this.coursesUrl}/${course.id}`, course)
    }
    // Caso o id nao exista
    else {
      return this.httpClient.post<Course>(`${this.coursesUrl}`, course)
    }
  }

  // Declara uma funcao que deleta o curso com o id digitado
  deleteById(id: number): Observable<any> {
    return this.httpClient.delete<any>(`${this.coursesUrl}/${id}`)
  }

}

