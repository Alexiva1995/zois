import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MenuController, ModalController } from '@ionic/angular';
import { ProfessorService } from 'src/app/services/professor.service';

@Component({
  selector: 'app-settle',
  templateUrl: './settle.page.html',
  styleUrls: ['./settle.page.scss'],
})
export class SettlePage implements OnInit {
  students: any[] = [];
  isLoading: boolean = false;
  error: string = '';

  constructor(
    private modalcontroller: ModalController,
    public router: Router,
    private menuCtrl: MenuController,
    private professorService: ProfessorService // Inyectamos el servicio
  ) {}

  ngOnInit() {
    this.loadStudents(); // Llamamos a la función al iniciar el componente
  }

  loadStudents() {
    const filters = {
      status: 'Active',
      limit: 10,
    };
    this.professorService.getProfessorDashboard(filters).subscribe({
      next: (data: any) => {
        this.students = data.latestStudents || [];
        this.isLoading = false;
      },
      error: (err: any) => {
        console.error(err);
        this.error = 'Error loading dashboard data.';
        this.isLoading = false;
      },
    });
  }

  close() {
    this.modalcontroller.dismiss();
    // this.router.navigate(['/tabs'])
  }

  openmenu() {
    this.menuCtrl.enable(true, 'main-Id');
    this.menuCtrl.open('main-Id');
  }
}
