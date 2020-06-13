import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Course } from './course';
import { CourseService } from './course.service';

@Component({
  templateUrl: './course-info.component.html'
})

export class CourseInfoComponent implements OnInit {

  // Recebe os cursos
  course: Course;

  // Consome as rotas e o courseService
  constructor(private activatedRoute: ActivatedRoute, private courseService: CourseService) { }

  // Retorna as informacoes de um curso
  ngOnInit(): void {
    this.course = this.courseService
      .retrieveById(+this.activatedRoute.snapshot.paramMap
        .get('id'))
  }

  // Altera as informacoes de um curso
  save(): void {
    this.courseService.save(this.course);
  }

}
