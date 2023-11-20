"use client"
import * as React from 'react';
import './contact.scss';


export default function Contact() {
    return (
        <div className="form-block">
            <div className="container">
                <form className="form-content">
                    <div className="form-group">
                        <label htmlFor="name">Name</label>
                        <input className="form-control" type="text" name="name" id="name" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="email">Email</label>
                        <input className="form-control" type="email" name="email" id="email" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="message">Email</label>
                        <textarea className="form-control textarea-control" name="message" id="message" cols={30} rows={10}></textarea>
                    </div>
                    <div className="form-group form-group-btn">
                        <button type="submit" className='btn btn-primary btn-send' aria-label='submit form'>submit</button>
                    </div>
                </form>
            </div>
        </div>
        
    )
  }
  