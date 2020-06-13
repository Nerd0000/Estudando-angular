import { Component, OnInit } from '@angular/core';
import { Course } from './course';
import { CourseService } from './course.service';

@Component({
  templateUrl: './course-list.component.html'
})

export class CourseListComponent implements OnInit {

  _courses: Course[] = [];
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

  // Puxa o CourseService de course.service.ts
  constructor(private courseService: CourseService) { }

  // Executa a funcao que retorna todos os cursos
  ngOnInit(): void {
    this._courses = this.courseService.retrieveAll()
    this.filteredCourses = this._courses
  }

}
