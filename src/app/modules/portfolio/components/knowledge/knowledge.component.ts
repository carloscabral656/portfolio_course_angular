import { Component, WritableSignal, signal } from '@angular/core';
import { Iknowledge } from '../../interface/knowledgeInterface';

@Component({
  selector: 'app-knowledge',
  standalone: true,
  imports: [],
  templateUrl: './knowledge.component.html',
  styleUrl: './knowledge.component.scss'
})
export class KnowledgeComponent {
  public arrayKnowledge: WritableSignal<Iknowledge[]> = signal([
    {
      src: 'assets/icons/knowledge/html5.svg',
      alt: 'Ícone de conhecimento de html5.'
    },
    {
      src: 'assets/icons/knowledge/cc3.svg',
      alt: 'Ícone de conhecimento de CSS3.'
    },
    {
      src: 'assets/icons/knowledge/javascript.svg',
      alt: 'Ícone de conhecimento de JavaScript.'
    },
    {
      src: 'assets/icons/knowledge/angular.svg',
      alt: 'Ícone de conhecimento de Angular.'
    },
    {
      src: 'assets/icons/knowledge/node.svg',
      alt: 'Ícone de conhecimento de NodeJS.'
    }
  ]);
}
