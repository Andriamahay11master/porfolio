"use client"
import * as React from 'react';
import './listskills.scss';

interface ListSkillsProps {
    $title: string;
    data: string[];
}

export default function ListSkills({$title, data} : ListSkillsProps) {
    return (
        <div className="list-skills">
            <h2 className="title-h2 list-skills-title">{$title}</h2>
            <div className="list-skills-block">
                {data.map((item, index) => (
                    <div key={index} className="list-skills-item">{item}</div>
                ))}
            </div>
        </div>
    )
  }
  