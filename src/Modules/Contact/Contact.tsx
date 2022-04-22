import { useEffect, useRef, useState } from 'react';
import useWindowDimensions from '../../Hooks/useWindowDimensions';
import './Contact.scss';

export const Contact = () => {
  const { width } = useWindowDimensions();
  const [textareaWidth, setTextareaWidth] = useState(0);
  const emailRef = useRef(null as any);

  useEffect(() => {
    setTextareaWidth(emailRef.current.offsetWidth);
  }, [width]);
  return (
    <section className='main-contact'>
      <div className='main-contact__text-container'>
        <h2 className='main-contact__text-container__header'>Contact us!</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Labore
          facilis voluptates repellendus architecto cum fugit exercitationem
          consectetur nostrum deserunt corrupti fugiat sed dolore, consequatur
          dolorum veniam blanditiis qui quia tempora?
        </p>
      </div>
      <div className='main-contact__contact-container'>
        <div className='main-contact__contact-container__contact'>
          <div className='main-contact__contact-container__contact__upper-input'>
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
          <div className='main-contact__contact-container__image-container'>
            <img
              src='https://images.unsplash.com/photo-1588025490822-a70d29baf93c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTZ8fGNvZmZlZSUyMHBob3RvZ3JhcGh5fGVufDB8fDB8fA%3D%3D&w=1000&q=80'
              alt='coffe and a camera'
            />
          </div>
        ) : null}
      </div>
    </section>
  );
};
