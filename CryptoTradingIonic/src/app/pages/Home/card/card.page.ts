import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-card',
  templateUrl: './card.page.html',
  styleUrls: ['./card.page.scss'],
})
export class CardPage implements OnInit {
  searchTerm: string = '';
  professors = [
    { name: 'John Doe', photo: 'https://via.placeholder.com/40', isFollowing: false, role: 'Trader Profesional' },
    { name: 'Jane Smith', photo: 'https://via.placeholder.com/40', isFollowing: true, role: 'Coach de Inversiones' },
    { name: 'Albert Johnson', photo: 'https://via.placeholder.com/40', isFollowing: false, role: 'Analista Financiero' },
    { name: 'Emily Davis', photo: 'https://via.placeholder.com/40', isFollowing: true, role: 'Experta en Trading' },
    { name: 'Michael Brown', photo: 'https://via.placeholder.com/40', isFollowing: false, role: 'Estratega de Mercados' },
    { name: 'Sarah Wilson', photo: 'https://via.placeholder.com/40', isFollowing: true, role: 'Instructora de Finanzas' },
    { name: 'David Lee', photo: 'https://via.placeholder.com/40', isFollowing: false, role: 'Trader Avanzado' },
    { name: 'Anna Kim', photo: 'https://via.placeholder.com/40', isFollowing: true, role: 'Mentora Financiera' },
    { name: 'James Taylor', photo: 'https://via.placeholder.com/40', isFollowing: false, role: 'Coach de Inversiones' },
    { name: 'Maria Garcia', photo: 'https://via.placeholder.com/40', isFollowing: true, role: 'Educadora en Trading' },
    { name: 'Linda Martinez', photo: 'https://via.placeholder.com/40', isFollowing: false, role: 'Asesora Financiera' },
    { name: 'Robert Clark', photo: 'https://via.placeholder.com/40', isFollowing: true, role: 'Trader Profesional' },
    { name: 'Patricia Rodriguez', photo: 'https://via.placeholder.com/40', isFollowing: false, role: 'Experta en Inversiones' },
    { name: 'Charles Walker', photo: 'https://via.placeholder.com/40', isFollowing: true, role: 'Coach de Trading' },
    { name: 'Joshua Hall', photo: 'https://via.placeholder.com/40', isFollowing: false, role: 'Trader' },
    { name: 'Olivia Allen', photo: 'https://via.placeholder.com/40', isFollowing: true, role: 'Mentora en Finanzas' },
    { name: 'Sophia Young', photo: 'https://via.placeholder.com/40', isFollowing: false, role: 'Analista de Mercados' },
    { name: 'Benjamin King', photo: 'https://via.placeholder.com/40', isFollowing: true, role: 'Estratega de Trading' },
    { name: 'Megan Scott', photo: 'https://via.placeholder.com/40', isFollowing: false, role: 'Coach de Finanzas' },
    { name: 'William Adams', photo: 'https://via.placeholder.com/40', isFollowing: true, role: 'Trader' },
    { name: 'Natalie Nelson', photo: 'https://via.placeholder.com/40', isFollowing: false, role: 'Mentora en Trading' },
    { name: 'Ethan Carter', photo: 'https://via.placeholder.com/40', isFollowing: true, role: 'Instructor de Finanzas' },
    { name: 'Abigail Mitchell', photo: 'https://via.placeholder.com/40', isFollowing: false, role: 'Estratega Financiero' },
    { name: 'Christopher Perez', photo: 'https://via.placeholder.com/40', isFollowing: true, role: 'Consultor de Trading' },
    { name: 'Isabella Roberts', photo: 'https://via.placeholder.com/40', isFollowing: false, role: 'Trader Avanzado' },
    { name: 'Liam Wilson', photo: 'https://via.placeholder.com/40', isFollowing: true, role: 'Instructor de Trading' },
    { name: 'Lucas Harris', photo: 'https://via.placeholder.com/40', isFollowing: false, role: 'Consultor Financiero' },
    { name: 'Harper Murphy', photo: 'https://via.placeholder.com/40', isFollowing: true, role: 'Coach Financiero' },
    { name: 'Ella Reed', photo: 'https://via.placeholder.com/40', isFollowing: false, role: 'Analista de Mercados' },
    { name: 'Jack Collins', photo: 'https://via.placeholder.com/40', isFollowing: true, role: 'Experto en Trading' },
    { name: 'Avery Sanchez', photo: 'https://via.placeholder.com/40', isFollowing: false, role: 'Mentora en Finanzas' },
    { name: 'Samantha Perez', photo: 'https://via.placeholder.com/40', isFollowing: true, role: 'Coach de Trading' },
    { name: 'Henry Simmons', photo: 'https://via.placeholder.com/40', isFollowing: false, role: 'Consultor de Inversiones' },
    { name: 'Aria Foster', photo: 'https://via.placeholder.com/40', isFollowing: true, role: 'Mentora de Finanzas' },
    { name: 'Carter Gonzalez', photo: 'https://via.placeholder.com/40', isFollowing: false, role: 'Instrucción Financiera' },
    { name: 'Lily Ramirez', photo: 'https://via.placeholder.com/40', isFollowing: true, role: 'Consultora Financiera' },
    { name: 'Daniel Rogers', photo: 'https://via.placeholder.com/40', isFollowing: false, role: 'Instructor en Trading' },
    { name: 'Grace Martinez', photo: 'https://via.placeholder.com/40', isFollowing: true, role: 'Coach de Inversiones' },
    { name: 'Zachary Perez', photo: 'https://via.placeholder.com/40', isFollowing: false, role: 'Estratega Financiero' },
    { name: 'Mia Cooper', photo: 'https://via.placeholder.com/40', isFollowing: true, role: 'Consultora de Trading' },
    { name: 'Harper Nguyen', photo: 'https://via.placeholder.com/40', isFollowing: false, role: 'Analista Financiero' },
    { name: 'Joshua Scott', photo: 'https://via.placeholder.com/40', isFollowing: true, role: 'Mentora de Trading' },
    { name: 'Chloe Stewart', photo: 'https://via.placeholder.com/40', isFollowing: false, role: 'Coach de Finanzas' },
    { name: 'Matthew Morris', photo: 'https://via.placeholder.com/40', isFollowing: true, role: 'Trader Profesional' },
    { name: 'Jacklyn Murphy', photo: 'https://via.placeholder.com/40', isFollowing: false, role: 'Instructora de Trading' },
    { name: 'Zoe Bailey', photo: 'https://via.placeholder.com/40', isFollowing: true, role: 'Consultora en Finanzas' },
    { name: 'Mason Barnes', photo: 'https://via.placeholder.com/40', isFollowing: false, role: 'Trader' },
    { name: 'Sebastian Allen', photo: 'https://via.placeholder.com/40', isFollowing: true, role: 'Mentor Financiero' },
    { name: 'Madeline Bryant', photo: 'https://via.placeholder.com/40', isFollowing: false, role: 'Asesor Financiero' },
    { name: 'Isaac Cooper', photo: 'https://via.placeholder.com/40', isFollowing: true, role: 'Trader de Opciones' },
    { name: 'Eleanor Powell', photo: 'https://via.placeholder.com/40', isFollowing: false, role: 'Consultor de Finanzas' },
    { name: 'Levi King', photo: 'https://via.placeholder.com/40', isFollowing: true, role: 'Mentor de Inversiones' },
    { name: 'Mackenzie Diaz', photo: 'https://via.placeholder.com/40', isFollowing: false, role: 'Instructora Financiera' },
    { name: 'Charlotte Carter', photo: 'https://via.placeholder.com/40', isFollowing: true, role: 'Coach Financiero' },
    { name: 'Jackson Richardson', photo: 'https://via.placeholder.com/40', isFollowing: false, role: 'Mentor en Trading' },
    { name: 'Amelia Wood', photo: 'https://via.placeholder.com/40', isFollowing: true, role: 'Consultora en Trading' },
    { name: 'Evan Morgan', photo: 'https://via.placeholder.com/40', isFollowing: false, role: 'Asesor Financiero' },
    { name: 'Sophia Harris', photo: 'https://via.placeholder.com/40', isFollowing: true, role: 'Mentora Financiera' },
  ];
  
  filteredProfessors = [...this.professors];

  constructor(private menuCtrl: MenuController) {}

  ngOnInit() {}

  openmenu() {
    this.menuCtrl.enable(true, 'main-Id');
    this.menuCtrl.open('main-Id');
  }

  filterProfessors() {
    this.filteredProfessors = this.professors.filter((professor) =>
      professor.name.toLowerCase().includes(this.searchTerm.toLowerCase())
    );
  }

  // Alterna entre seguir y dejar de seguir al profesor
  toggleFollow(professor: any) {
    professor.isFollowing = !professor.isFollowing;
  }
}
