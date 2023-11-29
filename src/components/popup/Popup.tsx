"use client"
import * as React from 'react';
import './popup.scss';

interface PopupProps {
    icon: string
    val: string
    valTxtBtn: string
    icnBTn: string
    onClose: () => void
}

export default function Popup({icon, val, valTxtBtn, icnBTn, onClose} : PopupProps) {
    return (
        <div className="popup">
            <div className="popup-content">
                <i className={`popup-icon ` + icon}></i>
                <p className='popup-text'>{val}</p>
                <button className={`btn btn-primary `+icnBTn} onClick={onClose}>{valTxtBtn}</button>
            </div>
        </div>
    )
  }
  