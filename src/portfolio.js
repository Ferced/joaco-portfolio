import emoji from 'react-easy-emoji';

import galiciaLogo from './assets/img/icons/common/galiciaLogo.png'
import cedeiraLogo from './assets/img/icons/common/cedeiraLogo.png'
import logoMSM from './assets/img/icons/common/logoMSM.png'
import logoMeli from './assets/img/icons/common/logoMeli.png'

export const greetings = {
    "name": "Joaquin Fernandez Cedeira",
    "title": "Hola, soy Joaco",
    "description": "Soy un Full Stack Developer y Mobile App Developer tengo experiencia construyendo aplicaciones web con JavaScript / Reactjs / Nodejs / Python / Flask y otras librerias y frameworks interesantes.",
    "resumeLink": "https://drive.google.com/file/d/1hYt6qmYB11wFXMTog31DwBSlUm3LI4XX/view?usp=sharing"
}

export const openSource = {
  githubUserName: 'ferced',
};

export const contact = {
  
}

export const socialLinks = {
    "instagram": "https://www.instagram.com/fcedeirajoaquin",
    "github": "https://github.com/ferced",
    "linkedin": "https://www.linkedin.com/in/joaquin-fernandez-cedeira-75949012b/"
}

export const skillsSection = {
    title: 'Que hago?',
    subTitle: 'Soy un developer que le encanta probar tecnologias nuevas',
    skills: [
      emoji(
        '⚡ Desarrollo aplicaciones FrontEnd, BackEnd y Mobile'
      ),
      emoji('⚡ Web Scraping '),
      emoji(
        '⚡ Integracion de servicios como Firebase '
      ),
    ],
    
    softwareSkills: [
      {
        skillName: 'html-5',
        fontAwesomeClassname: 'vscode-icons:file-type-html',
      },
      {
        skillName: 'css3',
        fontAwesomeClassname: 'vscode-icons:file-type-css',
      },
      {
        skillName: 'sass',
        fontAwesomeClassname: 'logos:sass',
      },
      {
        skillName: 'JavaScript',
        fontAwesomeClassname: 'logos:javascript',
      },
      {
        skillName: 'reactjs',
        fontAwesomeClassname: 'vscode-icons:file-type-reactjs',
      },
      {
        skillName: 'nodejs',
        fontAwesomeClassname: 'logos:nodejs-icon',
      },
      {
        skillName: 'flutter',
        fontAwesomeClassname: 'logos:flutter',
      },
      {
        skillName: 'dart',
        fontAwesomeClassname: 'logos:dart',
      },
      {
        skillName: 'npm',
        fontAwesomeClassname: 'vscode-icons:file-type-npm',
      },
      {
        skillName: 'sql-database',
        fontAwesomeClassname: 'vscode-icons:file-type-sql',
      },
      {
        skillName: 'firebase',
        fontAwesomeClassname: 'logos:firebase',
      },
      {
        skillName: 'python',
        fontAwesomeClassname: 'logos:python',
      },
      {
        skillName: 'go',
        fontAwesomeClassname: 'logos:go',
      },
      {
        skillName: 'git',
        fontAwesomeClassname: 'logos:git-icon',
      },
      {
        skillName: 'C-Sharp',
        fontAwesomeClassname: 'vscode-icons:file-type-csharp2',
      },
      // {
      //   skillName: 'docker',
      //   fontAwesomeClassname: 'logos:docker-icon',
      // },
    ],
}

export const LanguageSkillBars = [
  {
    Stack: 'Python', 
    progressPercentage: '95', 
  },
  {
    Stack: 'C#',
    progressPercentage: '90',
  },
  {
    Stack: 'Go',
    progressPercentage: '90',
  },
  {
    Stack: 'SQL',
    progressPercentage: '85',
  },
  {
    Stack: 'ReactJS',
    progressPercentage: '75',
  },
  {
    Stack: 'Flutter',
    progressPercentage: '60',
  },
  {
    Stack: 'Dart',
    progressPercentage: '60',
  },
  {
    Stack: 'Firebase',
    progressPercentage: '60',
  },


]

export const SkillBars = [
    {
      Stack: 'Backend', 
      progressPercentage: '90', 
    },
    {
      Stack: 'architecture',
      progressPercentage: '90',
    },
    {
      Stack: 'Frontend/Design',
      progressPercentage: '70',
    },
   
  ]

export const educationInfo = [
  
    {
      schoolName: 'UNGS - Universidad Nacional del General Sarmiento',
      subHeader: 'Licienciatura en sistemas (en progreso)',
      duration: 'Marzo 2016 - Octubre 2018',
    },
    {
      schoolName: 'PMI - Project Management Institute',
      subHeader: 'Metodología de Administración de Proyectos',
      duration: 'Septiembre 2017 - Diciembre 2017'
    },
    {
      schoolName: 'EducacionIT',
      subHeader: 'EducacionIT: Introducción a C#, Introducción al Paradigma de Objetos, Introducción a Base de datos, Web APIs, SQL y C# .NET',
      duration: 'SEPTIEMBRE 2018 - AGOSTO 2020',
    },
    {
      schoolName: 'Club Atlético San Miguel, San Miguel',
      subHeader: 'Bachiller en Ciencias Sociales',
      duration: 'MARZO 2004 - DICIEMBRE 2015'
    }
]

export const experience = [
  {
    role: 'Backend Developer',
    company: 'Mercado Libre',
    companylogo: logoMeli,
    date: 'Septiembre 2021 – Actualidad',
    descBullets: [
      'Fury team.',
    ],
  },
  {
    
    role: 'Full Stack Developer',
    company: 'Galicia',
    companylogo: galiciaLogo,
    date: 'Agosto 2018 – Septiembre 2021',
    desc:
      '',
    descBullets: [
      'Desarrollo de API Policy System',
      'Soporte y desarrollo del sistema Carga Centralizada de Tasas que se encarga de cambiar todas las tasas del banco.',
      'Desarrollo de nuevas funcionalidades para el Sistema de Transferencias MEP.',
     
    ],
  },
  {
    role: 'Front-End Developer',
    company: 'Cedeira Software Factory',
    companylogo: cedeiraLogo,
    date: 'Agosto 2018 – Septiembre 2021',
    descBullets: [
      'Responsable de la creacion frontend para la aplicacion Facturas Electronicas.',
    ],
  },
  {
    role: 'Full Stack Developer',
    company: 'Municipalidad de San Miguel',
    companylogo: logoMSM,
    date: 'Julio 2017 – Julio 2018',
    descBullets: [
      'Desarrollo de backend y frontend del sistema POS (Portal de obras Sociales) para hospitales publicos.',
      'Soporte y desarrollo del sistema GDP (Gestor De Proyectos) para la gestion de todos los proyectos del area.',
    ],
  },
 
]

export const projects = [
  {
    name: "Pagina web para influencer",
    desc: "Pagina de cursos web que proveen los influencers para sus seguidores.",
    link: {
      name: "Noelia Sandoval",
      url:"http://noeliasandoval.cursarweb.com/"
    }
  },
  {
    name: "Backtracking Knight's tour",
    desc: "Demostracion del algoritmo de Backtracking.",
    link: {
      name: "Github",
      url:"https://github.com/Ferced/Backtracking-Knight"
    }
  },
  {
    name: "Aplicacion Demo para NetSafe",
    desc: "Aplicacion demo para publicidad de NetSafe.",
    link: {
      name:"Github",
      url:"https://github.com/Ferced/app-Netsafe-demo"
    }
    }
]