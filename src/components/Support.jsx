import React from "react";
import Joi from "joi-browser";
import useForm from "../hooks/useForm";
import { Form } from "react-bootstrap";
import {toast} from 'react-toastify';

function Support(props) {
  const formData = { message: "" };

  const formSchema = {
    message: Joi.string().trim().required().max(1024).label("Message"),
  };

  const doSubmit = () => {
    console.log(data);
    toast.success('Message sent');
    props.history.push("/");
  };

  const { data, renderTextarea, renderButton, handleSubmit } = useForm(
    formData,
    formSchema,
    doSubmit
  );

  return (
    <div className="mt-5 support">
      <h5>We are right here...</h5>
      <Form onSubmit={handleSubmit}>
        {renderTextarea("message", "message")}
        {renderButton("SEND")}
      </Form>
        OR <br/>     
        Reach us directly through; <br />
        Phone: +256 774 159 449
     
    </div>
  );
}

export default Support;