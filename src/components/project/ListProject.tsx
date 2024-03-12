"use client"
import * as React from 'react';
import Link from 'next/link';
import './project.scss';
import Image from 'next/image';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import Project from './Project';
import { ProjectType } from '@/models/ProjectType';

interface ListProjectProps {
    list: ProjectType[]
}

export default function ListProject({list} : ListProjectProps) {
    return (
        <Carousel className="project-list" 
        showStatus={false} showThumbs={false} infiniteLoop={true} 
        autoPlay={true} stopOnHover={true} interval={4000} dynamicHeight={false} showArrows={false} transitionTime={1500}>
            {list.map((item, index) => (
                <Project key={index} {...item} />
            ))}
        </Carousel>
    )
  }