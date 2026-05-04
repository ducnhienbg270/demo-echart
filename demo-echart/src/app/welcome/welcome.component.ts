import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {
  showContent = false;

  constructor(private router: Router) { }

  ngOnInit(): void {
    // Fade in animation
    setTimeout(() => {
      this.showContent = true;
    }, 100);
  }

  enterApp(): void {
    this.router.navigate(['/dashboard']);
  }
}

// Made with Bob
