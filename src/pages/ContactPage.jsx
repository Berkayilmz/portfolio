import React from 'react'
import ContactForm from '../components/ContactForm/ContactForm'

const ContactPage = () => {
    return (
        <box
            height="100vh"
            overflowY="auto"
            scrollSnapType="y mandatory"
            bg="transparent"
            color="white"
        >
            <ContactForm/>
        </box>
    )
}

export default ContactPage