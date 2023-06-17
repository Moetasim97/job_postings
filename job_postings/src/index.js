import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import AccountImg from "./account.svg"
import EyeImg from "./eyecam-co.svg"
import FaceImg from "./faceit.svg"
import InsureImg from "./insure.svg"
import LoopImg from "./loop-studios.svg"
import ManageImg from "./manage.svg"
import MyhomeImg from "./myhome.svg"
import PhotoImg from "./photosnap.svg"
import ShortlyImg from "./shortly.svg"
import AirImg from "./the-air-filter-company.svg"
import reportWebVitals from './reportWebVitals';
// Bootstrap CSS
import "bootstrap/dist/css/bootstrap.min.css";
// Bootstrap Bundle JS
import "bootstrap/dist/js/bootstrap.bundle.min";

const model=[{
  id: 1,
  Img: PhotoImg,
  company: 'Photosnap',
  post: 'NEW!',
  featured: 'FEATURED',
  jobtitle: 'Senior Frontend Developer',
  time: '1d ago',
  contract: 'Full Time',
  location: 'USA only',
  skill: ['Frontend', 'Senior', 'HTML', 'CSS', 'JavaScript'],
},
{
  id: 2,
  Img: ManageImg,
  company: 'Manage',
  post: 'NEW!',
  featured: 'FEATURED',
  jobtitle: 'Fullstack Developer',
  time: '1d ago',
  contract: 'Part Time',
  location: 'Remote',
  skill: ['Fullstack', 'Midweight', 'Python', 'React'],
},
{
  id: 3,
  Img: AccountImg,
  company: 'Account',
  post: 'NEW!',
  jobtitle: 'Junior Frontend Developer',
  time: '2d ago',
  contract: 'Part Time',
  location: 'USA only',
  skill: ['Frontend', 'Junior', 'React', 'Sass', 'JavaScript'],
},
{
  id: 4,
  Img: MyhomeImg,
  company: 'MyHome',
  jobtitle: 'Junior Frontend Developer',
  time: '5d ago',
  contract: 'Contract',
  location: 'USA only',
  skill: ['Frontend', 'Junior', 'CSS', 'Javascript'],
},
{
  id: 5,
  Img: LoopImg,
  company: 'Loop Studios',
  jobtitle: 'Software Engineer',
  time: '1w ago',
  contract: 'Full Time',
  location: 'Worldwide',
  skill: ['Fullstack', 'Midweight', 'Javascript', 'Sass', 'Ruby'],
},
{
  id: 6,
  Img: FaceImg,
  company: 'FaceIt',
  jobtitle: 'Junior Backend Developer',
  time: '2w ago',
  contract: 'Full Time',
  location: 'UK only',
  skill: ['Backend', 'Junior', 'Ruby', 'RoR'],
},
{
  id: 7,
  Img: ShortlyImg,
  company: 'Shortly',
  jobtitle: 'Junior Developer',
  time: '2w ago',
  contract: 'Full Time',
  location: 'Worldwide',
  skill: ['Frontend', 'Junior', 'HTML', 'Sass', 'JavaScript'],
},
{
  id: 8,
  Img: InsureImg,
  company: 'Insure',
  jobtitle: 'Junior Frontend Developer',
  time: '2w ago',
  contract: 'Full Time',
  location: 'USA only',
  skill: ['Frontend', 'Junior', 'Vue', 'JavaScript', 'Sass'],
},
{
  id: 9,
  Img: EyeImg,
  company: 'Eyecam Co.',
  jobtitle: 'Full Stack Engineer',
  time: '3w ago',
  contract: 'Full Time',
  location: 'Worldwide',
  skill: ['Fullstack', 'Midweight', 'Javascript', 'Django', 'Python'],
},
{
  id: 10,
  Img: AirImg,
  company: 'The Air Filter Company',
  jobtitle: 'Front-end Dev',
  time: '1mo ago',
  contract: 'Part Time',
  location: 'Worldwide',
  skill: ['Frontend', 'Junior', 'React', 'Sass', 'Javascript'],
}]

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App model={model} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
