import { UserService } from 'src/app/core/services/user.service';
import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { ProfessorService } from 'src/app/services/professor.service';

@Component({
  selector: 'app-candles',
  templateUrl: './candles.page.html',
  styleUrls: ['./candles.page.scss'],
})
export class CandlesPage implements OnInit {
  signals: any[] = [];
  professors: any[] = [];
  isLoading = true;
  error: string | null = null;
  professor: any;
  students: any[] = [];
  userRole: any;
  user: any;

  constructor(
    private professorService: ProfessorService,
    private menuCtrl: MenuController,
    private userService: UserService
  ) {}

  ngOnInit() {
    this.getUserName();
    this.loadDashboardData();
    this.userService.currentUser.subscribe((user) => {
      if (user) {
        this.user = user;
        this.userRole = user.role;
      }
    });
  }

  ionViewWillEnter() {
    this.getUserName();
    this.loadDashboardData();
    this.userService.currentUser.subscribe((user) => {
      if (user) {
        this.user = user;
        this.userRole = user.role;
      }
    });
  }

  loadDashboardData(filters?: any) {
    this.isLoading = true;

    this.professorService.getProfessorDashboard(filters).subscribe({
      next: (data: any) => {
        this.professor = data.professor || null;
        this.students = data.latestStudents || [];
        this.signals = data.latestSignals || [];
        this.isLoading = false;
      },
      error: (err: any) => {
        console.error(err);
        this.error = 'Error loading dashboard data.';
        this.isLoading = false;
      },
    });
  }

  openmenu() {
    this.menuCtrl.enable(true, 'main-Id');
    this.menuCtrl.open('main-Id');
  }

  getUserName() {
    this.user = localStorage.getItem('user');
  }
}
