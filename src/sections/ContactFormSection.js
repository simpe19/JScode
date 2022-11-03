import React, { useState } from 'react'

const validate = (event) => {
    switch(event.type) {
        case 'keyup':
            validateElement(event.target)
            break;
    }
}
const validateElement = (event) => {
    
}

const ContactFormSection = () => {
    const [contactForm, setContactForm] = useState({name: '', email: '', comment: ''})
    const [formErrors, setFormErrors] = useState({})
    const [canSubmit, setCanSubmit] = useState(false)

    const validate = (values) => {
        const errors = {}
        const regex_email = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

        if(!values.name)
            errors.name = "You must enter a name"

        if(!values.email)
            errors.email = "You must enter an email"
        else if(!regex_email.test(values.email))
            errors.email = "You must enter an valid email (eg. name@domain.com)"

        if(!values.comment)
            errors.comment = "You must enter a comment"
        else if(values.comment.length < 5)
            errors.comment = "You must enter a minimum of five characters"

        if(Object.keys(errors).length === 0)
            setCanSubmit(true)
        else
            setCanSubmit(false)

        return errors;
    }

    const handleChange = (e) => {
        const {id, value} = e.target
        setContactForm({...contactForm, [id]:value})
    }
    const handleSubmit = (e) => {
        e.preventDefault()
        setFormErrors(validate(contactForm))
    }

  return (
    <section className='contact-form'>
        <div className='container'>
            {
                canSubmit ? (<div className='d-flex justify-content-center align-items-center'>
                    <div>Thank you for your comment</div>
                </div>)
                :
                (
                    <>
            <h2>Come in contact with us</h2>
            <form onSubmit={handleSubmit} noValidate>
                <div>
                    <input id='name' type='text' placeholder='Your Name' onkeyup="validate(event)" value={contactForm.name} onChange={handleChange}/>
                    <div className='errorMessage'>{formErrors.name}</div>
                </div>
                <div>
                    <input id='email' type='email' placeholder='Your Mail' onkeyup="validate(event)" value={contactForm.email} onChange={handleChange}/>
                    <div className='errorMessage'>{formErrors.email}</div>
                </div>
                <div className='textarea'>
                    <textarea id='comment' placeholder='comments' onkeyup="validate(event)" value={contactForm.comment} onChange={handleChange}></textarea>
                    <div className='errorMessage'>{formErrors.comment}</div>
                </div>
                <div className='form-btn'>
                    <button type='submit' className='_btn-theme'>Post Comment</button>
                </div>
            </form>
                    </>
                )
            }
        </div>
    </section>
  )
}

export default ContactFormSection