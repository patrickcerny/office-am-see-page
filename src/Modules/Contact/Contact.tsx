import emailjs from '@emailjs/browser';
import { useEffect, useRef, useState } from 'react';
import useWindowDimensions from '../../Hooks/useWindowDimensions';
import './Contact.scss';

export const Contact = () => {
  const { width } = useWindowDimensions();
  const [textareaWidth, setTextareaWidth] = useState(0);
  const emailRef = useRef(null as any);
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [buttonDisabled, setButtonDisabled] = useState(true);
  const dialogRef = useRef(null as any);
  const [modalText, setModalText] = useState({
    title: '',
    text: '',
  });

  useEffect(() => {
    setTextareaWidth(emailRef.current.offsetWidth);

    const isMailValid = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(
      email
    );

    setButtonDisabled(
      !isMailValid || !firstName || !lastName || !email || !message
    );
  }, [width, firstName, lastName, email, message]);

  const handleSubmit = async () => {
    if (buttonDisabled) return;
    console.log(firstName, lastName, email, message);

    const result = await emailjs.send(
      'service_ncli3zr',
      'template_pmdfp1g',
      {
        from_name: firstName + ' ' + lastName,
        message: message.replace(/<br\s?\/?>/g, '\n'),
        reply_to: email,
      },
      'user_espyhP6sdMnYV5wc6YOP8'
    );

    if (result.status === 200) {
      setModalText({
        title: 'Vielen Dank für Ihre Nachricht!',
        text: 'Wir werden uns so schnell wie möglich bei Ihnen melden.',
      });
    } else {
      setModalText({
        title: 'Etwas ist schief gelaufen!',
        text: 'Versuchen Sie es noch einmal.',
      });
    }
    dialogRef.current.showModal();
  };

  return (
    <section className='main-contact' id='contact'>
      <div className='main-contact__text-container'>
        <h2 className='main-contact__text-container__header'>SCHREIB UNS!</h2>
        <p>
          Haben Sie Fragen zur Buchhaltung oder möchten Sie Ihre Büroabläufe
          optimieren? Kontaktieren Sie uns über das Formular oder direkt per
          E-Mail. Auch telefonisch sind wir für Ihre Anliegen erreichbar.
        </p>
      </div>
      <div className='main-contact__contact-container'>
        <div className='main-contact__contact-container__contact'>
          <div
            className='main-contact__contact-container__contact__upper-input'
            style={width < 800 ? { marginRight: '0', width: '100%' } : {}}
          >
            <div className='main-contact__contact-container__contact__upper-input__name'>
              <input
                type='text'
                id='first-name'
                name='first-name'
                className='input-field'
                placeholder='Vorname'
                onChange={(e) => setFirstName(e.target.value)}
              />
              <input
                type='text'
                id='last-name'
                name='last-name'
                className='input-field'
                placeholder='Nachname'
                style={width < 800 ? { marginRight: '0' } : {}}
                onChange={(e) => setLastName(e.target.value)}
              />
            </div>
            <div className='main-contact__contact-container__contact__upper-input__email'>
              <input
                ref={emailRef}
                type='email'
                id='email'
                name='email'
                className='input-field'
                placeholder='Email'
                style={width < 800 ? { marginRight: '0' } : {}}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
          </div>
          <textarea
            style={{ width: textareaWidth - 20 + 'px' }}
            className='main-contact__contact-container__contact__textarea input-field'
            name='text'
            id='text'
            placeholder='Ihre Nachricht an uns...'
            onChange={(e) => setMessage(e.target.value)}
          ></textarea>
          <div className='main-contact__contact-container__contact__button-container'>
            <button
              style={{
                width: textareaWidth + 'px',
              }}
              onClick={handleSubmit}
              disabled={buttonDisabled}
              className='main-contact__contact-container__contact__button-container__button'
            >
              Let's Go!
            </button>
          </div>
        </div>
        {width > 800 ? (
          <div className='main-contact__contact-container__map-container'>
            <iframe
              title='map'
              style={{ border: 0 }}
              loading='lazy'
              allowFullScreen
              referrerPolicy='no-referrer-when-downgrade'
              src='https://www.google.com/maps/embed/v1/place?key=AIzaSyDJq2dWo_uGjQ6bzjzXw-nWbvKnWfnhgrA
    &q=Bregenz'
            ></iframe>
          </div>
        ) : null}
      </div>
      <dialog ref={dialogRef} id='modal-email'>
        <form method='dialog'>
          <h2>{modalText.title}</h2>
          <p>{modalText.text}</p>
          <button>OK</button>
        </form>
      </dialog>
    </section>
  );
};
