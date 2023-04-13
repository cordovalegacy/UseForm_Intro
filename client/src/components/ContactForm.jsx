import React from "react";
import { useForm } from "react-hook-form";
import * as yup from "yup";

const schema = yup.object().shape({
    firstName: yup.string().required(),
    lastName: yup.string().required(),
    email: yup.string().email().required(),
});

const ContactForm = ({ methods }) => {
    const { register, handleSubmit, errors } = useForm({
        ...methods,
        validationSchema: schema,
    });

    const onSubmit = (e, data) => {
        console.log(e)
        e.preventDefault()
        console.log(data);
    };

    return (
        <form onSubmit={() => onSubmit(e)}>
            <div>
                <label htmlFor="firstName">First Name:</label>
                <input type="text" name="firstName" />
            </div>
            <div>
                <label htmlFor="lastName">Last Name:</label>
                <input type="text" name="lastName"  />
            </div>
            <div>
                <label htmlFor="email">Email:</label>
                <input type="email" name="email"  />
            </div>
            <button type="submit">Submit</button>
        </form>
    );
};

export default ContactForm;