"use client"
import Banner from '@/components/banner/Banner'
import SectionTitle from '@/components/sectionTitle/SectionTitle'
import BlockInfo from '@/components/blockInfo/BlockInfo'
import ListSkills from '@/components/listSkills/ListSkills'
import Project from '@/components/project/Project'
import Contact from '@/components/contact/Contact'
import Header from '@/components/header/Header'
import Footer from '@/components/footer/Footer'
import '@/app/i18n'
import { useTranslation } from 'next-i18next';

export default function Home() {

  const { t } = useTranslation('translation');

  //Data Nav
  const dataNav = [
    {
        name: `${t('menu.home')}`,
        href: '/#home'   
    },  
    {
        name: `${t('menu.about')}`,
        href: '/#about'
    } ,
    {
        name: `${t('menu.projects')}`,
        href: '/#projects'
    },
    {
        name: `${t('menu.contact')}`,
        href: '/#contact'
    }
];


  //Data Banner
  const dataBanner = {
    $title: `${t('banner.title')}`,
    $desc: `${t('banner.description')}`,
    $btn: `${t('banner.textButton')}`,
    $linkBtn: '/#projects',
    $srcImage: '/images/banner/banner.jpg',
    $width: 1200,
    $height: 600,
    $altImage: `${t('banner.altImage')}`
  }

  //Data Section Title About
  const dataAbout = {
    $id: 'about',
    $title: `${t('aboutTitle.title')}`,
    $desc: `${t('aboutTitle.desc')}`,
  }

  //Data Section Title Project
  const dataProject = {
    $id:'projects',
    $title: 'Projects',
    $desc: 'Here you will find more information about me, what I do, and my current skills mostly in terms of programming and technology'
  }

  //Data Section Title Contact
  const dataContact = {
    $id:'contact',
    $title: 'Contact',
    $desc: 'Feel free to Contact me by submitting the form below and I will get back to you as soon as possible'
  }

  //Data Block Info
  const dataBlockInfo = {
    $title: `${t('blockInfo.title')}`,
    $desc: `${t('blockInfo.desc')}`,
    $linkBtn: '/#projects',
    $valBtn: `${t('blockInfo.valBtn')}`
  }

  //Data list skills
  const dataListSkills = {
    $title: `${t('skillsTitle')}`,
    data: [
      'HTML',
      'CSS',
      'SCSS',
      'Responsive Design',
      'SEO',
      'JavaScript',
      'Tailwind',
      'Bootstrap',
      'Jquery',
      'React',
      'NextJS',
      'VueJS',
      'Figma',
      'Git',
      'SQL',
      'Office 365',
    ]
  }

  //All Project
  const dataProject1 = {
    $title: "Wilsonport",
    $desc: 'Wilsonport is a multiservice logistics and transport company and I created their website from scratch using the frontend tools I know.',
    $btn: 'See project',
    $linkBtn: '/#projects',
    $srcImage: '/images/project/project1.jpg',
    $width: 1600,
    $height: 941,
    $altImage: 'Project image'
  }

  const dataProject2 = {
    $title: "Boreal Coffee Clone",
    $desc: "I re-created the frontend of Boreal Coffee's official web app because I got attracted to their beautiful UI. It was a great experience for me to build the entire frontend.",
    $btn: 'See project',
    $linkBtn: '/#projects',
    $srcImage: '/images/project/project2.jpg',
    $width: 1600,
    $height: 941,
    $altImage: 'Project image'
  }

  const dataProject3 = {
    $title: "Crown Template",
    $desc: 'Crown is a web template that I created targeting the restaurant and food industry which anyone can use to present their business online.',
    $btn: 'See project',
    $linkBtn: '/#projects',
    $srcImage: '/images/project/project3.jpg',
    $width: 1600,
    $height: 941,
    $altImage: 'Project image'
  }

  return (
    <>
    <Header linkMenu={dataNav}/>
      <main className='main-page'>
        <Banner {...dataBanner}/>
        <SectionTitle {...dataAbout}/>
        <div className="main-section about-section">
          <div className="container">
            <div className="about-block">
              <BlockInfo {...dataBlockInfo}/>
              <ListSkills $title={dataListSkills.$title} data={dataListSkills.data}/>
            </div>
          </div>
        </div>
        <SectionTitle {...dataProject}/>
        <div className="main-section project-section">
          <div className="container">
            <div className="project-block">
              <Project {...dataProject1}/>
              <Project {...dataProject2}/>
              <Project {...dataProject3}/>
            </div>
          </div>
        </div>
        <SectionTitle {...dataContact}/>
        <Contact/>
      </main>
      <Footer/>
    </>
  )
}
