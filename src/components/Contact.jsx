import React from 'react'
import styled from 'styled-components';
import { contact } from './common/Contact';

const Contact = () => {
    const openLinkHandler = ({name, link}) => {
        if (name === 'Email') return
        window.open(link, '_blank', 'noopener')
    }

  return (
    <ContactContainer>
        <h1>CONTACT</h1>
        <ContactTabel>
            {contact.map(({ name, link }) => (
                <tbody key={name}>
                    <tr>
                        <td>
                            {name}
                        </td>
                        <td onClick={name !== 'Email' ? () => openLinkHandler({ link }) : null}>
                            <ContactLink name={name} hover={{color: '#ffff00', fontweight: '700'}}>{link}</ContactLink>
                        </td>
                    </tr>
                </tbody>
            ))}
        </ContactTabel>
    </ContactContainer>
  )
}

export default Contact

const ContactContainer = styled.div`
    width: 100%;
    color: #ffffff;
    background-color: #16181b;
    /* border: solid 1px #ffffff; */
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    h1 {
        margin-bottom: 50px;
        font-size: 80px;
        font-weight: 800;
    }
`;

const ContactTabel = styled.table`
    /* border: solid 1px #ffffff; */
    width: 45%;
    font-size: 35px;

    tr {
        height: 100px;
        display: flex;
        align-items: center;
    }
    td:first-child {
        /* border: solid 1px #ffffff; */
        width: 200px;
        font-weight: 600;
    }
    td:last-child {
        /* border: solid 1px #ffffff; */
        width: 500px;
        cursor: pointer;
    }
`;

const ContactLink = styled.span`
    padding: 10px;
    cursor: ${(props) => props.name === 'Email' ? 'default' : 'pointer'};
    &:hover {
        color: ${(props) => props.hover.color};
        font-weight: ${(props) => props.hover.fontweight};
    }
`;