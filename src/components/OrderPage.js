import React, { useState } from 'react';
import * as yup from 'yup';
import axios from 'axios';
import SpecialInstructions from './SpecialInstructions';
import Toppings from './Toppings';
import PizzaSize from './PizzaSize';
import Sauce from './Sauce';

function OrderPage ({ orders, setOrders }) {
    const initialForm = {
        name: '',
        size: '',
        sauce: '',
        pepp: '',
        sausage: '',
        xcheese: '',
        pineapple: '',
        instruct: '', 
    };

    const [formState, setFormState] = useState(initialForm);
    const [submitError, setSubmitError] = useState("");
    const [nameError, setNameError] = useState({
        name: ''
    });

    const nameSchema = yup.object().shape({
        name: yup.string().min(2, 'Name must be at least 2 letters').required()

    });

    const onChange = e => {
        const newForm = {
            ...formState, [e.target.name]: e.target.type === 'checkbox' ? e.target.checked : e.target.value
        }
        yup
            .reach(nameSchema, 'name')
            .validate(e.target.value)
            .then(valid => {
                setNameError({name: ''});
            })
            .catch(error => {
                setNameError({name: error.errors[0]});
            })

        setFormState(newForm);
    };

    const submitForm = e => {
        e.preventDefault();
        
        nameSchema.isValid(formState).then(valid => {
            console.log(valid);
            if(valid) {
                axios
                    .post("https://reqres.in/api/users", formState)
                    .then(response => {
                    console.log('response', response);
                    setOrders([...orders, response.data]);
                    setSubmitError("");
                     setFormState(initialForm);
                    })
            }else {
                setSubmitError("Please enter a valid name");
            }
        })

        
        
        
        
    };

    return (
        <div className='pizza-form'>
            <h3>Build Your Own Pizza</h3>
        
            <form onSubmit={submitForm}>
                <label htmlFor='name'>
                    <h4>Name</h4>
                    <input type='text' name='name' id='name' placeholder='Enter your name here' value={formState.name} onChange={onChange} data-cy="name"/>
                </label>
                {nameError.name.length > 0 ? <p>{nameError.name}</p> : null}
                <PizzaSize formState={formState} onChange={onChange} />
                <Sauce onChange={onChange} />
                <Toppings formState={formState} onChange={onChange} />
                <SpecialInstructions formState={formState} onChange={onChange} />
                <button type='submit'>Add to Order</button>
                {submitError.length > 0 ? <p>{submitError}</p> : null}
            </form>
        </div>
    );
};

export default OrderPage;