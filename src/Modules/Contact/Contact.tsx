import { useEffect, useRef, useState } from 'react';
import useWindowDimensions from '../../Hooks/useWindowDimensions';
import './Contact.scss';
import Mountain from '../../Assets/mountain.png';

export const Contact = () => {
  const { width } = useWindowDimensions();
  const [textareaWidth, setTextareaWidth] = useState(0);
  const emailRef = useRef(null as any);

  useEffect(() => {
    setTextareaWidth(emailRef.current.offsetWidth);
  }, [width]);
  return (
    <section className='main-contact' id='contact'>
      <div className='main-contact__text-container'>
        <h2 className='main-contact__text-container__header'>SCHREIB UNS!</h2>
        <p>
          Gerne können Sie uns via Kontaktformular oder direkt per Email
          kontaktieren. Wir sind aber auch telefonisch für Ihre Fragen und
          Anliegen erreichbar.
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
              />
              <input
                type='text'
                id='last-name'
                name='last-name'
                className='input-field'
                placeholder='Nachname'
                style={width < 800 ? { marginRight: '0' } : {}}
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
              />
            </div>
          </div>
          <textarea
            style={{ width: textareaWidth - 20 + 'px' }}
            className='main-contact__contact-container__contact__textarea input-field'
            name='text'
            id='text'
            placeholder='Deine Nachricht an uns...'
          ></textarea>
          <div className='main-contact__contact-container__contact__button-container'>
            <button
              style={{
                width: textareaWidth + 'px',
              }}
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
    </section>
  );
};
