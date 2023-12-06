import { useRef, useState } from "react";
import "./contact.scss";
import {motion , useInView} from "framer-motion";
import emailjs from '@emailjs/browser';

const variants = {
  initial:{
    y:500,
    opacity:0
  },
  animate:{
    y:0,
    opacity:1,
    transition:{
      duration:0.5,
      staggerChildren:0.1,
    },
  },
};
const Contact = () => {
  const ref = useRef();
  const formRef = useRef();

  const [error,setError] = useState(false);
  const [success,setSuccess] = useState(false);
  const isInView = useInView(ref, {margin:"-100px"});

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_h8wd9da', 'template_kvar5ht', formRef.current, '9J9AIhuwh6qQrRUVB')
      .then((result) => {
         setSuccess(true)
        
      }, (result) => {
        setError(true)
       
      });
  };


  return (
    <motion.div 
    ref={ref}
    className="contact" variants={variants} initial="initial" whileInView="animate">
      <motion.div className="textContainer" variants={variants}>
        <motion.h1 variants={variants}>Let&apos;s work together</motion.h1>
        <motion.div className="item" variants={variants}>
          <h2>Mail</h2>
          <span>hello@react.dev</span>
        </motion.div>
      

      <motion.div className="item" variants={variants}>
          <h2>Address</h2>
          <span>Galle</span>
        </motion.div>

        <motion.div className="item" variants={variants}>
          <h2>Phone</h2>
          <span>0781584021</span>
        </motion.div>
        </motion.div>

      <div className="formContainer">
        <motion.div className="phoneSvg"
        initial={{opacity:1}}
        whileInView={{opacity:0}}
        transition={{delay:3,duration:1}}
        >
        <svg width="450px" height="450px" viewBox="0 0 64 64">
          <motion.path strokeWidth={0.5}
          fill="none"
         
          initial={{pathLength:0}}
          animate={isInView && {pathLength:1}}
          transition={{duration:3}}
          d="M50.4 49.3c1.1.8 2.9 1.8 2.6 4.2S49.1 62 41.5 62s-17-6-25.2-14.2S2 30.2 2 22.5 8.8 11.3 10.5 11s3.4 1.5 4.2 2.6l5.8 8.8a4.1 4.1 0 0 1-1.1 5.6c-2.5 2-6.6 4.5 2.8 13.8S34 47.1 36 44.6a4.1 4.1 0 0 1 5.6-1.1z
          M30 2a32 32 0 0 1 32 32M30 12a22 22 0 0 1 22 22M30 23a11 11 0 0 1 11 11"/>
        </svg></motion.div>

        <motion.form ref = {formRef}
onSubmit={sendEmail}
        initial={{opacity:0}}
        whileInView={{opacity:1}}
        transition={{delay:4,duration:1}}
        >
          <input type="text" required placeholder="Name" name="name"/>
          <input type="email" required placeholder="Email" name="email" />
          <textarea rows={8} placeholder="Message" name="message"/>
          <button>Submit</button>

{error && "Error"}
{success && "Success"}
        </motion.form>
      </div>
    </motion.div>
  );
};

export default Contact;


 
