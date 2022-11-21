import React from 'react';
import PropTypes from 'prop-types';
import { Contact } from '../../../models/contact.class';


const ContactComponent = ({contact}) => {
    return (
        <div>
            <h2>
                Nombre: {contact.name}
            </h2>
            <h3>
                Apellido: {contact.lastname}
            </h3>
            <h2>
                Email: {contact.email}
            </h2>
            <h2>
                Estado: {contact.connected ? 'Contacto En Línea' : 'Contacto No Disponible'}
            </h2>
        </div>
    );
};


ContactComponent.propTypes = {
    contact: PropTypes.instanceOf(Contact)
};


export default ContactComponent;
