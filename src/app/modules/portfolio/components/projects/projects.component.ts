import { Component, signal } from '@angular/core';
import { IProject } from '../../interface/ProjectInterface';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss'
})
export class ProjectsComponent {
  public arrayProjects = signal<IProject[]>([
    {
      src: 'assets/img/projects/vfull.png',
      alt: 'Projeto Vida FullStack',
      title: 'Vida FullStack',
      width: '100px',
      height: '51px',
      description: 'Lorem asdasdasdadsasdasdasdasdLorem asdasdasdadsasdasdasdasdLorem asdasdasdadsasdasdasdasdLorem asdasdasdadsasdasdasdasdLorem asdasdasdadsasdasdasdasdLorem asdasdasdadsasdasdasdasdLorem asdasdasdadsasdasdasdasd',
      links: [
        {
          name: 'Conheça o Blog',
          href: 'https://pomofocus.io/'
        }
      ]
    }
  ]);
}
