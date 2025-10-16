import { Routes } from '@angular/router';
import { HomePage } from './home-page/home-page';
import { ResumePage } from './resume-page/resume-page';

const resumePage = {
  path: 'resume',
  component: ResumePage,
  title: 'Resume',
};
const homePage = {
  path: '',
  component: HomePage,
  title: 'Home',
};

export const routes: Routes = [homePage, resumePage];
