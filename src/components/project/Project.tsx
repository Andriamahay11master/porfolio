"use client"
import * as React from 'react';
import Link from 'next/link';
import './project.scss';
import Image from 'next/image';

interface ProjectProps {
    $title: string;
    $desc: string;
    $btn: string;
    $linkBtn: string;
    $srcImage: string;
    $width: number;
    $height: number;
    $altImage: string;
}

export default function Project({$title, $desc, $btn, $linkBtn, $srcImage, $width, $height, $altImage} : ProjectProps) {
    return (
        <div className="project-content">
            <div className="project-col">
                <Image className="project-img" src={$srcImage} width={$width} height={$height} alt={$altImage} loading="lazy" title='project image'/>
            </div>
            <div className="project-col">
                <div className="project-info">
                    <h2 className="title-h2 project-title">{$title}</h2>
                    <p className='project-desc'>{$desc}</p>
                    <Link href={$linkBtn} className='btn btn-primary' title='Project link' target='_blank'>{$btn}</Link>
                </div>
            </div>
        </div>
    )
  }
  