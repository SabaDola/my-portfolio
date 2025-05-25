import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { trigger, transition, style, animate, query, stagger } from '@angular/animations';

interface Project {
  id: number;
  title: string;
  description: string;
  technologies: string[];
  imageUrl: string;
  liveUrl?: string;
  githubUrl?: string;
}

interface Skill {
  name: string;
  level: number;
  category: string;
}

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [
    trigger('fadeInUp', [
      transition(':enter', [
        style({ opacity: 0, transform: 'translateY(30px)' }),
        animate('0.6s ease-out', style({ opacity: 1, transform: 'translateY(0)' }))
      ])
    ]),
    trigger('slideInLeft', [
      transition(':enter', [
        style({ opacity: 0, transform: 'translateX(-30px)' }),
        animate('0.5s ease-out', style({ opacity: 1, transform: 'translateX(0)' }))
      ])
    ])
  ]
})
export class AppComponent implements OnInit {
  
  // პერსონალური ინფორმაცია - ადვილად რედაქტირებადი
  personalInfo = {
    name: 'საბა',
    title: 'Frontend Developer',
    description: 'მე ვარ ასე თუ ისე გამოცდილი FrontEnd დეველოპერი, რომელიც ქმნის თანამედროვე ვებ აპლიკაციებს.',
    aboutMe: 'მე ვარ გატაცებული FrontEnd დეველოპერი, რომელსაც უყვარს ახალი ტექნოლოგიების შესწავლა და ინოვაციური პროექტების შექმნა. ჩემი გამოცდილება მოიცავს frontend დეველოპმენტს, სადაც ვმუშაობდი სხვადასხვა პროექტებზე, რომლებიც მოიცავს Angular-ის გამოყენებას. მე მჯერა, რომ ტექნოლოგიები უნდა იყოს ხელმისაწვდომი და მარტივი გამოსაყენებელი ყველასთვის.',
    email: 'sabadolidze123@yahoo.com',
    phone: '+995 599 35 03 61',
    location: 'ოზურგეთი, საქართველო',
    experience: '3',
    profileImage: 'https://i.postimg.cc/jSx1vChC/download.jpg',
    socialLinks: [
      { platform: 'github', url: 'https://github.com/SabaDola' },
      { platform: 'linkedin', url: 'https://www.linkedin.com/in/saba-dolidze-251421366/' },
    ]
  };

  // უნარები - ადვილად რედაქტირებადი
  skills: Skill[] = [
    { name: 'Angular', level: 90, category: 'Frontend' },
    { name: 'TypeScript', level: 90, category: 'Frontend' },
    { name: 'JavaScript', level: 95, category: 'Frontend' },
    { name: 'HTML/CSS', level: 100, category: 'Frontend' },
    { name: 'Git', level: 30, category: 'Tools' },
  ];

  // პროექტები - ადვილად რედაქტირებადი
  projects: Project[] = [
    {
      id: 1,
      title: 'Hotel Booking ',
      description: 'სრულყოფილი e-commerce პლატფორმა Angular და Node.js-ით.',
      technologies: ['Angular', ],
      imageUrl: 'https://i.postimg.cc/htckw2KD/Screenshot-2025-05-24-120134.png',
      liveUrl: 'https://angproect.netlify.app/home',
      githubUrl: 'https://github.com/SabaDola/AngProect'
    },
    {
      id: 2,
      title: 'Hotel Booking ',
      description: 'ინტერაქტიული ტასკების მენეჯმენტის აპლიკაცია.',
      technologies: ['Html', 'CSS', 'JavaScript'],
      imageUrl: 'https://i.postimg.cc/255Pj3qg/Screenshot-2025-05-24-122034.png',
      liveUrl: 'https://jsprojectstep.netlify.app/',
      githubUrl: 'https://github.com/SabaDola/hotel-booking'
    },
    {
      id: 3,
      title: 'Calculator',
      description: 'მარტივი კალკულატორი JavaScript-ით.',
      technologies: ['Html', 'CSS', 'JavaScript'],
      imageUrl: 'https://i.postimg.cc/SxdBpcKW/Screenshot-2025-05-24-122048.png ',
      liveUrl: 'https://stepcalc.netlify.app/',
    },
   
  ];

  ngOnInit() {
    this.setupScrollEffects();
  }

  // სკროლის ფუნქცია
  scrollTo(elementId: string) {
    const element = document.getElementById(elementId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }

  // უნარების კატეგორიების მიღება
  getSkillCategories(): string[] {
    return [...new Set(this.skills.map(skill => skill.category))];
  }

  // კატეგორიის მიხედვით უნარების მიღება
  getSkillsByCategory(category: string): Skill[] {
    return this.skills.filter(skill => skill.category === category);
  }

  // ახალი პროექტის დამატება
  addNewProject() {
    const newProject: Project = {
      id: this.projects.length + 1,
      title: 'ახალი პროექტი',
      description: 'აღწერე შენი ახალი პროექტი აქ...',
      technologies: ['Technology1', 'Technology2'],
      imageUrl: 'https://via.placeholder.com/400x300?text=New+Project'
    };
    this.projects.push(newProject);
  }

  private setupScrollEffects() {
    // სკროლის ეფექტები navbar-სთვის
    window.addEventListener('scroll', () => {
      const navbar = document.querySelector('.navbar');
      if (window.scrollY > 100) {
        navbar?.classList.add('scrolled');
      } else {
        navbar?.classList.remove('scrolled');
      }
    });
  }
}