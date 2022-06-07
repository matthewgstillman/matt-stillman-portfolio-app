import React from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';
import emailjs from "@emailjs/browser";

const ContactFormComponent = () => {
    const toastifySuccess = () => {
    toast('Form sent!', {
        position: 'bottom-right',
        autoClose: 5000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,  
        draggable: false,
        className: 'submit-feedback success',
        toastId: 'notifyToast'
    });
    };

    const onSubmit = async (data) => {
        const { name, email, subject, message } = data;
        try {
          const templateParams = {
            name,
            email,
            subject,
            message
          };
          await emailjs.send(
            process.env.REACT_APP_SERVICE_ID,
            process.env.REACT_APP_TEMPLATE_ID,
            templateParams,
            process.env.REACT_APP_USER_ID
          );
          // reset();
        } catch (e) {
          console.log(e);
        }
      };

    return (
      <div className='ContactForm'>
        <div className='container'>
          <div className='row'>
            <div className='col-12 text-center'>
              <div className='contactForm'>
                <form id='contact-form' noValidate>
                  {/* Row 1 of form */}
                  <div className='row formRow'>
                    <div className='col-6'>
                      <input
                        type='text'
                        name='name'
                        className='form-control formInput'
                        placeholder='Name'
                      ></input>
                    </div>
                    <div className='col-6'>
                      <input
                        type='email'
                        name='email'
                        className='form-control formInput'
                        placeholder='Email address'
                      ></input>
                    </div>
                  </div>
                  {/* Row 2 of form */}
                  <div className='row formRow'>
                    <div className='col'>
                      <input
                        type='text'
                        name='subject'
                        className='form-control formInput'
                        placeholder='Subject'
                      ></input>
                    </div>
                  </div>
                  {/* Row 3 of form */}
                  <div className='row formRow'>
                    <div className='col'>
                      <textarea
                        rows={3}
                        name='message'
                        className='form-control formInput'
                        placeholder='Message'
                      ></textarea>
                    </div>
                  </div>
                  <button className='submit-btn' type='submit'>
                    Submit
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };
  
  export default ContactFormComponent;
