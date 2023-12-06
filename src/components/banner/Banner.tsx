"use client"
import * as React from 'react';
import Link from 'next/link';
import './banner.scss';
import Image from 'next/image';

interface BannerProps {
    $title: string;
    $desc: string;
    $btn: string;
    $linkBtn: string;
    $srcImage: string;
    $width: number;
    $height: number;
    $altImage: string;
}

export default function Banner({$title, $desc, $btn, $linkBtn, $srcImage, $width, $height, $altImage} : BannerProps) {
    return (
        <div className="banner">
            <Image className="banner-img" src={$srcImage} width={$width} height={$height} alt={$altImage} loading="lazy" title='banner image'/>
            <div className="banner-content">
                <h1 className="banner-title">{$title}</h1>
                <p className='banner-desc'>{$desc}</p>
                <Link href={$linkBtn} className='btn btn-primary' title='Banner link'>{$btn}</Link>
            </div>
            <div className="mouse">
                <div className="scroll"></div>
            </div>
        </div>
    )
  }
  