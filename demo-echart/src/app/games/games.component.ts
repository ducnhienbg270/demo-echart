import { Component } from '@angular/core';

@Component({
  selector: 'app-games',
  templateUrl: './games.component.html',
  styleUrls: ['./games.component.css']
})
export class GamesComponent {
  games = [
    {
      title: "Don't Click the Red Button",
      description: "A simple game... or is it? Try not to click the red button!",
      route: '/games/red-button',
      icon: '🔴',
      difficulty: 'Easy'
    },
    {
      title: 'Coming Soon',
      description: 'More games will be added here!',
      route: '#',
      icon: '🎮',
      difficulty: 'TBA'
    }
  ];
}

// Made with Bob
