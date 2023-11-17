import Image from 'next/image'
import Banner from '@/components/banner/Banner'
import SectionTitle from '@/components/sectionTitle/SectionTitle'
import BlockInfo from '@/components/blockInfo/BlockInfo'
import ListSkills from '@/components/listSkills/ListSkills'
import Project from '@/components/project/Project'

export default function Home() {
  //Data Banner
  const dataBanner = {
    $title: "Hey, I'm MAHAY",
    $desc: 'A Frontend focused Web Developer building the Frontend of Websites and Web Applications that leads to the success of the overall product',
    $btn: 'Projects',
    $linkBtn: '/#projects',
    $srcImage: '/images/banner/banner.jpg',
    $width: 1200,
    $height: 600,
    $altImage: 'Banner front'
  }

  //Data Section Title About
  const dataAbout = {
    $title: 'About me',
    $desc: 'Here you will find more information about me, what I do, and my current skills mostly in terms of programming and technology'
  }

  //Data Section Title Project
  const dataProject = {
    $title: 'Projects',
    $desc: 'Here you will find more information about me, what I do, and my current skills mostly in terms of programming and technology'
  }

  //Data Block Info
  const dataBlockInfo = {
    $title: 'Front developer',
    $desc: `👋 Hello World! I'm Mahay, a passionate front-end developer with a knack for transforming ideas into captivating digital experiences. 💻✨ <br/><br/>
            🚀 Armed with a creative mindset and a love for clean, efficient code, I thrive on the challenges of bringing user interfaces to life. From crafting seamless user journeys to ensuring pixel-perfect design implementation, I am dedicated to delivering web solutions that not only meet but exceed expectations. <br/><br/>
            🎨 My toolkit includes the latest front-end technologies such as HTML5, CSS3, and JavaScript, and I'm always eager to stay ahead of the curve with emerging trends like React.js and Vue.js. I believe in the power of responsive design, ensuring that the user experience remains flawless across devices. <br/><br/>
            🛠️ Whether it's optimizing website performance, enhancing interactivity, or collaborating with cross-functional teams, I'm committed to creating web applications that resonate with users and leave a lasting impression.  <br/><br/> 
            💡 Let's build something extraordinary together – where design meets functionality, and user satisfaction takes center stage. Feel free to reach out for collaborations, ideas, or just a good coding chat! 🚀🌐`,
    $linkBtn: '/#projects',
    $valBtn: 'Projects'
  }

  //Data list skills
  const dataListSkills = {
    $title: 'My skills',
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

  //Project1
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
    <main className='main-page'>
      <Banner {...dataBanner}/>
      <SectionTitle {...dataAbout}/>
      <div className="main-section about-section" id="about">
        <div className="container">
          <div className="about-block">
            <BlockInfo {...dataBlockInfo}/>
            <ListSkills $title={dataListSkills.$title} data={dataListSkills.data}/>
          </div>
        </div>
      </div>
      <SectionTitle {...dataProject}/>
      <div className="main-section project-section"  id="projects">
        <div className="container">
          <div className="project-block">
            <Project {...dataProject1}/>
            <Project {...dataProject2}/>
            <Project {...dataProject3}/>
          </div>
        </div>
      </div>
    </main>
  )
}
