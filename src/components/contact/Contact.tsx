"use client"
import * as React from 'react';
import { useState } from 'react';
import './contact.scss';
import { z, ZodError } from 'zod';

interface ContactProps{
    name: string,
    email: string,
    message: string,
    valBtn: string
}

export default function Contact({name, email, message, valBtn} : ContactProps) {

    const contactSchema = z.object({
        name: z.string().min(3, {message: "Name must be at least 3 characters"}),
        email: z.string().email('Invalid email address'),
        message: z.string().min(10, {message: "Message must be at least 10 characters"}),
    })

    
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: '',
    });

    const [formErrors, setFormErrors] = useState<ZodError | null>(null);

    const handleChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({ ...formData, [event.target.name]: event.target.value });
    }

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        setFormErrors(null);
        try {
            contactSchema.parse(formData);
            console.log('Form submitted successfully', formData);
        } catch (error) {
            if (error instanceof ZodError) {
                setFormErrors(error);
            }
        }
    }
   
    return (
        <div className="form-block">
            <div className="container">
                <form className="form-content" onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="name">{name}</label>
                        <input className="form-control" type="text" name="name" id="name"  value={formData.name} onChange={handleChange}/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="email">{email}</label>
                        <input className="form-control" type="email" name="email" id="email" value={formData.email} onChange={handleChange}/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="message">{message}</label>
                        <textarea className="form-control textarea-control" name="message" id="message" cols={30} rows={10} value={formData.message} onChange={handleChange}/>
                    </div>
                    <div className="form-group form-group-btn">
                        <button type="submit" className='btn btn-primary btn-send' aria-label='submit form'>{valBtn}</button>
                    </div>

                    {formErrors && (
                        <div style={{ color: 'red' }}>
                        <p>Erreur(s) de validation:</p>
                        <ul>
                            {formErrors.errors.map((error, index) => (
                            <li key={index}>{error.message}</li>
                            ))}
                        </ul>
                        </div>
                    )}
                </form>
            </div>
        </div>
        
    )
  }
  