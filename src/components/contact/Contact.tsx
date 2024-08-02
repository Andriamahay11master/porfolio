"use client"
import * as React from 'react';
import { useState } from 'react';
import './contact.scss';
import { z, ZodError } from 'zod';
import Popup from '../popup/Popup';
import Loader from '../loader/Loader';
import emailjs from '@emailjs/browser';

interface ContactProps{
    name: string,
    email: string,
    message: string,
    valBtn: string,
    valText: string,
    valTxtBtn: string,
    placeholderName: string,
    placeholderEmail: string,
    placeholderMessage: string
}

export default function Contact({name, email, message, valBtn, valText, valTxtBtn, placeholderName, placeholderEmail, placeholderMessage} : ContactProps) {

    const [showPopup, setShowPopup] = useState(false);
    const [loading, setLoading] = useState(false);
    const form = React.useRef<HTMLFormElement>(null);

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
        // Clear error class for the current input field
        setFormErrors((prevErrors) => {
            if (!prevErrors) return null;
    
            const updatedIssues = prevErrors.issues.filter((issue) => issue.path[0] !== event.target.name);
            const updatedErrors = new ZodError(updatedIssues);
            return updatedErrors.issues.length === 0 ? null : updatedErrors;
        });
    }

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        setFormErrors(null);
        contactSchema.parse(formData);
            
        // Envoyer les données au backend
        if(form.current){
            emailjs
            .send('service_sqvkqf3', 'template_lejiuq3', formData, 'exV4X3eZrgvZ7atEu')
            // .sendForm('service_sqvkqf3', 'template_lejiuq3', form.current, {publicKey: 'exV4X3eZrgvZ7atEu'})
            .then(
                () => {
                console.log('SUCCESS!');
                // Afficher le loader
                setLoading(true);

                setTimeout(() => {
                    setLoading(false);
                    setShowPopup(true);
                }, 1500);
        
                setFormData({
                    name: '',
                    email: '',
                    message: ''
                });

                },
                (err) => {
                if (err instanceof ZodError) {
                    setFormErrors(err);
                } else {
                    console.error('Error sending email: ', err);
                }
                // Masquer le loader en cas d'erreur
                setLoading(false);  
                },
            );
        } 
    };
    

    const handleClosePopup = () => {
        setShowPopup(false);
      };

    return (
        <>
            <div className="form-block">
                <div className="container">
                    <form ref={form} className="form-content" onSubmit={handleSubmit} id='formContact'>
                        <div className="form-group-content">
                            <div className="form-group">
                                <label htmlFor="name">{name}</label>
                                <input
                                className={`form-control ${formErrors?.issues.find((issue) => issue.path[0] === 'name') ? 'error' : ''}`}
                                type="text"
                                name="name"
                                id="name"
                                value={formData.name}
                                onChange={handleChange}
                                placeholder={placeholderName}
                                />
                                {formErrors?.issues.map((issue) => issue.path[0] === 'name' && <p className="error-message" key={issue.message}>{issue.message}</p>)}
                            </div>
                            <div className="form-group">
                                <label htmlFor="email">{email}</label>
                                <input
                                className={`form-control ${formErrors?.issues.find((issue) => issue.path[0] === 'email') ? 'error' : ''}`}
                                type="email"
                                name="email"
                                id="email"
                                value={formData.email}
                                onChange={handleChange}
                                placeholder={placeholderEmail}
                                />
                                {formErrors?.issues.map((issue) => issue.path[0] === 'email' && <p className="error-message" key={issue.message}>{issue.message}</p>)}
                            </div>
                        </div>
                        <div className="form-group">
                            <label htmlFor="message">{message}</label>
                            <textarea
                            className={`form-control textarea-control ${formErrors?.issues.find((issue) => issue.path[0] === 'message') ? 'error' : ''}`}
                            name="message"
                            id="message"
                            cols={30}
                            rows={10}
                            value={formData.message}
                            onChange={handleChange}
                            placeholder={placeholderMessage}
                            />
                            {formErrors?.issues.map((issue) => issue.path[0] === 'message' && <p className="error-message" key={issue.message}>{issue.message}</p>)}
                        </div>
                        <div className="form-group form-group-btn">
                            <button type="submit" className="btn btn-primary btn-send" aria-label="submit form">
                            {valBtn}
                            </button>
                        </div>
                    </form>
                </div>
            </div>

            {loading && <Loader/>}
            {showPopup && <Popup icon="icon-checkmark" val={valText} valTxtBtn={valTxtBtn} icnBTn="btn-close" onClose={handleClosePopup} />}
        </>
         
    )
  }
  