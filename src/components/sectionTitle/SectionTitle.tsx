"use client"
import * as React from 'react';
import './sectionTitle.scss';

interface SectionTitleProps {
    $id: string;
    $title: string;
    $desc: string;
}

export default function SectionTitle({$id, $title, $desc} : SectionTitleProps) {
    return (
        <div className="section-title-block" id={$id}>
            <div className="container">
                <h2 className="section-title">{$title}</h2>
                <p>{$desc}</p>
            </div>
        </div>
    )
  }
  