import { Router } from '@angular/router';
import { IntroService } from './../../../services/intro.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.page.html',
  styleUrls: ['./welcome.page.scss'],
})
export class WelcomePage implements OnInit {

  constructor(private introService: IntroService, private router: Router) { }

  ngOnInit() {
  }
  async finishIntro() {
    await this.introService.setHasSeenIntro();
    this.router.navigate(['/welcome2']);
  }
}
