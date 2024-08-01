"use client"
import Banner from '@/components/banner/Banner'
import SectionTitle from '@/components/sectionTitle/SectionTitle'
import BlockInfo from '@/components/blockInfo/BlockInfo'
import ListSkills from '@/components/listSkills/ListSkills'
import ListProject from '@/components/project/ListProject'
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
    $srcImage: '/images/banner/Programming-background.jpg',
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
    $title: `${t('aboutProjects.title')}`,
    $desc: `${t('aboutProjects.desc')}`,
  }

  //Data Section Title Contact
  const dataContact = {
    $id:'contact',
    $title: `${t('contact.title')}`,
    $desc: `${t('contact.desc')}`,
  }

  //Data Block Info
  const dataBlockInfo = {
    title: `${t('blockInfo.title')}`,
    desc: `${t('blockInfo.desc')}`,
    linkBtn: '/#projects',
    valBtn: `${t('blockInfo.valBtn')}`,
    image:'/images/Mahay-profil.jpg',
    altImage: 'andriamahay-irimanana-image'
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
      'Typescript',
      'React JS',
      'Next JS',
      'Figma',
      'Git',
      'SQL',
      'PostGreSQL',
      'Firebase',
      'Office 365',
    ]
  }

  //All Project
  const dataProject1 = {
    $title: `${t('projet.1.title')}`,
    $desc: `${t('projet.1.desc')}`,
    $btn: `${t('projet.1.valBtn')}`,
    $linkBtn: 'https://www.firstimmo.mg/',
    $srcImage: '/images/project/fimmo.jpg',
    $width: 1600,
    $height: 941,
    $altImage: `${t('projet.1.altImage')}`
  }

  const dataProject2 = {
    $title: `${t('projet.2.title')}`,
    $desc: `${t('projet.2.desc')}`,
    $btn: `${t('projet.2.valBtn')}`,
    $linkBtn: 'https://www.sanko-africa.com/',
    $srcImage: '/images/project/sanko.jpg',
    $width: 1600,
    $height: 941,
    $altImage: `${t('projet.2.altImage')}`
  }

  const dataProject3 = {
    $title: `${t('projet.3.title')}`,
    $desc: `${t('projet.3.desc')}`,
    $btn: `${t('projet.3.valBtn')}`,
    $linkBtn: 'https://towercoofafrica.com/',
    $srcImage: '/images/project/toa.jpg',
    $width: 1600,
    $height: 941,
    $altImage: `${t('projet.3.altImage')}`
  }

  const dataProject4 = {
    $title: `${t('projet.4.title')}`,
    $desc: `${t('projet.4.desc')}`,
    $btn: `${t('projet.4.valBtn')}`,
    $linkBtn: 'https://money-mind-flax.vercel.app/',
    $srcImage: '/images/project/mindmoney.jpg',
    $width: 1600,
    $height: 941,
    $altImage: `${t('projet.4.altImage')}`
  }

  const dataProject5 = {
    $title: `${t('projet.5.title')}`,
    $desc: `${t('projet.5.desc')}`,
    $btn: `${t('projet.5.valBtn')}`,
    $linkBtn: 'https://taskmanager-eight-sigma.vercel.app/',
    $srcImage: '/images/project/taskmanager.jpg',
    $width: 1600,
    $height: 941,
    $altImage: `${t('projet.5.altImage')}`
  }

  const dataProject6 = {
    $title: `${t('projet.6.title')}`,
    $desc: `${t('projet.6.desc')}`,
    $btn: `${t('projet.6.valBtn')}`,
    $linkBtn: 'https://greengascar.pulse.mg/',
    $srcImage: '/images/project/carbone.jpg',
    $width: 1600,
    $height: 941,
    $altImage: `${t('projet.6.altImage')}`
  }

  const dataProject7 = {
    $title: `${t('projet.7.title')}`,
    $desc: `${t('projet.7.desc')}`,
    $btn: `${t('projet.7.valBtn')}`,
    $linkBtn: 'https://greengascar.pulse.mg/',
    $srcImage: '/images/project/travelian.jpg',
    $width: 1600,
    $height: 941,
    $altImage: `${t('projet.7.altImage')}`
  }

  const dataProjectList = [
    dataProject1,
    dataProject2,
    dataProject3,
    dataProject4,
    dataProject5,
    dataProject6,
    dataProject7
  ]

  //Data page form
  const dataForm = {
    name: `${t('form.name')}`,
    email: `${t('form.email')}`,
    message: `${t('form.message')}`,
    valBtn: `${t('form.valBtn')}`,
    valText: `${t('form.popupVal')}`,
    valTxtBtn: `${t('form.valTxtBtn')}`,
  }

  //data footer
  const dataFooter = {
    title: `${t('footer.title')}`,
    desc: `${t('footer.desc')}`,
    copyright: `${t('footer.copyright')}`,
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
              <ListProject list={dataProjectList} />
            </div>
          </div>
        </div>
        <SectionTitle {...dataContact}/>
        <Contact {...dataForm} />
      </main>
      <Footer {...dataFooter}/>
    </>
  )
}
