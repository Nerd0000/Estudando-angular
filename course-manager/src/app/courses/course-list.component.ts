import { Component, OnInit } from '@angular/core';
import { Course } from './course';
import { CourseService } from './course.service';

@Component({
  templateUrl: './course-list.component.html'
})

export class CourseListComponent implements OnInit {

  _courses: Course[] = []
  _filterBy: string
  filteredCourses: Course[] = []

  set filter(value: string) {
    this._filterBy = value
    this.filteredCourses = this._courses
      .filter((course: Course) => course.name
        .toLocaleLowerCase()
          .indexOf(this._filterBy
            .toLocaleLowerCase()) > -1)
  }
  get filter() {
    return this._filterBy
  }

  // Importa o CourseService de course.service.ts
  constructor(private courseService: CourseService) { }

  // Executa a funcao que retorna todos os cursos
  ngOnInit(): void {
    this.retrieveAll()
  }

  // Faz a busca pelos cursos na api
  retrieveAll(): void {
    this.courseService.retrieveAll().subscribe({
      // Em caso de sucesso
      next: courses => {
        this._courses = courses
        this.filteredCourses = this._courses
      },
      // Em caso de erro
      error: err => console.log("Error: ", err)
    })
  }

  // Deleta o curso com id informado
  deleteById(courseId: number): void {
    this.courseService.deleteById(courseId).subscribe({
      // Em caso de sucesso
      next: () => {
        console.log("Deleted with success")
        this.retrieveAll()
      },
      // Em caso de erro
      error: err => console.log("Error: ", err)
    })
  }

}
