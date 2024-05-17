"use client"
import * as React from 'react';
import { useState } from 'react';
import './contact.scss';
import { z, ZodError } from 'zod';
import Popup from '../popup/Popup';
import { db } from '../../app/firebase';
import { collection, addDoc, query, orderBy, limit, getDocs } from 'firebase/firestore';
import Loader from '../loader/Loader';

interface ContactProps{
    name: string,
    email: string,
    message: string,
    valBtn: string,
    valText: string,
    valTxtBtn: string
}

export default function Contact({name, email, message, valBtn, valText, valTxtBtn} : ContactProps) {

    const [showPopup, setShowPopup] = useState(false);
    const [idcontact, setIdcontact] = useState(0);
    const [loading, setLoading] = useState(false);

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
    
      //get last ID inserted in document contacts
    const fetchLastId = async () => {
        try {
            const q = query(collection(db, "contacts"), orderBy("id", "desc"), limit(1)); // Limit to 1 document
            const querySnapshot = await getDocs(q);
            if (!querySnapshot.empty) {
                const lastId = querySnapshot.docs[0].data().id;
                setIdcontact(lastId + 1); // Set the new ID as the last ID + 1
            } else {
                setIdcontact(1); // If no documents found, set ID to 1
            }
        } catch (error) {
            console.error("Error fetching last ID: ", error);
        }
    }

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
        try {
            contactSchema.parse(formData);
            await addDoc(collection(db, 'contacts'), 
            {
                id: idcontact,
                name: formData.name,
                email: formData.email,
                message: formData.message
            });
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
        } catch (err) {
            if (err instanceof ZodError) {
                setFormErrors(err);
            }
            else{
                console.error('Error adding document: ', err);
            }
        }
      };

    const handleClosePopup = () => {
        setShowPopup(false);
      };

      React.useEffect(() => {
        fetchLastId();
      }, []);

    return (
        <>
            <div className="form-block">
                <div className="container">
                    <form className="form-content" onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="name">{name}</label>
                        <input
                        className={`form-control ${formErrors?.issues.find((issue) => issue.path[0] === 'name') ? 'error' : ''}`}
                        type="text"
                        name="name"
                        id="name"
                        value={formData.name}
                        onChange={handleChange}
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
                        />
                        {formErrors?.issues.map((issue) => issue.path[0] === 'email' && <p className="error-message" key={issue.message}>{issue.message}</p>)}
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
  