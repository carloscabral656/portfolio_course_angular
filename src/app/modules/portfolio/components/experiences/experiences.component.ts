import { Component, signal } from '@angular/core';
import { IExperience } from '../../interface/ExperienceInterface';

@Component({
  selector: 'app-experiences',
  standalone: true,
  imports: [],
  templateUrl: './experiences.component.html',
  styleUrl: './experiences.component.scss'
})
export class ExperiencesComponent {
  public arrayExperiences = signal<IExperience[]>([
    {
      summary: {
        strong: "Teste teste teste",
        p: "Emporesa | Set 2020 - Present"
      },
      text: "Lorem"
    },

    {
      summary: {
        strong: "Teste teste teste",
        p: "Emporesa | Set 2020 - Present"
      },
      text: "Lorem"
    },

    {
      summary: {
        strong: "Teste teste teste",
        p: "Emporesa | Set 2020 - Present"
      },
      text: "Lorem"
    },

    {
      summary: {
        strong: "Teste teste teste",
        p: "Emporesa | Set 2020 - Present"
      },
      text: "Lorem"
    },

    {
      summary: {
        strong: "Teste teste teste",
        p: "Emporesa | Set 2020 - Present"
      },
      text: "Lorem"
    },

    {
      summary: {
        strong: "Teste teste teste",
        p: "Emporesa | Set 2020 - Present"
      },
      text: "Lorem"
    },

    {
      summary: {
        strong: "Teste teste teste",
        p: "Emporesa | Set 2020 - Present"
      },
      text: "Lorem"
    },
  ]);
}
