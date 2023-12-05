"use client"
import * as React from 'react';
import './blockinfo.scss';
import Link from 'next/link';

interface BlockInfoProps {
    $title: string;
    $desc: string;
    $linkBtn: string;
    $valBtn: string;
}

export default function BlockInfo({$title, $desc, $linkBtn, $valBtn} : BlockInfoProps) {
    return (
        <div className="block-info">
            <h2 className="title-h2 block-info-title">{$title}</h2>
            <p className='block-info-desc' dangerouslySetInnerHTML={{__html: $desc}} />
            <Link href={$linkBtn} className='btn btn-primary' title='Info link'>{$valBtn}</Link>
        </div>
    )
  }
  