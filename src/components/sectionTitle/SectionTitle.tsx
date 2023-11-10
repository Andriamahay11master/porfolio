"use client"
import * as React from 'react';
import './sectionTitle.scss';

interface SectionTitleProps {
    $title: string;
    $desc: string;
}

export default function SectionTitle({$title, $desc} : SectionTitleProps) {
    return (
        <div className="section-title-block">
            <h2 className="section-title">{$title}</h2>
            <p>{$desc}</p>
        </div>
    )
  }
  