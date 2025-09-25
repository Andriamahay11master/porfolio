"use client"
import * as React from 'react';
import './project.scss';
import Project from './Project';
import { ProjectType } from '@/models/ProjectType';

interface ListProjectProps {
    list: ProjectType[]
}

export default function ListProject({list} : ListProjectProps) {
    return (
        <div className='listProject'>
            {list.map((item, index) => (
                <Project key={index} {...item} />
            ))}
        </div>
    )
  }