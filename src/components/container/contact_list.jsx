import React from 'react';
import { Contact } from '../../models/contact.class';
import ContactComponent from '../pure/forms/contact';


const ContactListComponent = () => {
    const defaultContact = new Contact('Jorge', 'Jaramillo', 'jorge@gmail.co' , false);

    return (
        <div>
            <div>
                <h1>Tus Contactos:</h1>
            </div>
            {/* Aplicar un For/map para renderizar una lista */}
            <ContactComponent contact={defaultContact}></ContactComponent>
        </div>
    );
};


export default ContactListComponent;
