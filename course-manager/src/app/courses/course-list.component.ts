import { Component, OnInit } from '@angular/core';
import { Course } from './course';


@Component({
  selector: 'app-course-list',
  templateUrl: './course-list.component.html'
})

export class CourseListComponent implements OnInit {

  courses: Course[] = [];

  ngOnInit(): void {
    this.courses = [
      {
        id: 1,
        name: 'Angular: Forms',
        imageUrl: '/assets/images/forms.png',
        price: 99.99,
        code: 'XRL-8',
        duration: 120,
        rating: 2.7,
        releaseDate: 'December, 2, 2019'
      },
      {
        id: 2,
        name: 'Angular: HTTP',
        imageUrl: '/assets/images/http.png',
        price: 42.99,
        code: 'ib-37',
        duration: 80,
        rating: 4,
        releaseDate: 'Setember, 13, 2012'
      }
    ]
  }

}
