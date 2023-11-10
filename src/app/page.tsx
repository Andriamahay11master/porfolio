import Image from 'next/image'
import Banner from '@/components/banner/Banner'
import SectionTitle from '@/components/sectionTitle/SectionTitle'

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
    $title: 'ABOUT ME',
    $desc: 'Here you will find more information about me, what I do, and my current skills mostly in terms of programming and technology'
  }
  return (
    <main className='main-page'>
      <Banner {...dataBanner}/>
      <SectionTitle {...dataAbout}/>
    </main>
  )
}
