import React from 'react';

export default function toppings ({ formState, onChange }) {
    return (
        <label>
                    <h4>Toppings</h4>
                    <label htmlFor='pepp'>
                        <input type='checkbox' name='pepp' id='pepp' checked={formState.pepp} onChange={onChange}/>
                        Pepperoni
                    </label>
                    <label htmlFor='sausage'>
                        <input type='checkbox' name='sausage' id='sausage' checked={formState.sausage} onChange={onChange}/>
                        Sausage
                    </label>
                    <label htmlFor='xcheese'>
                        <input type='checkbox' name='xcheese' id='xcheese' checked={formState.xcheese} onChange={onChange}/>
                        Extra Cheese
                    </label>
                    <label htmlFor='pineapple'>
                        <input type='checkbox' name='pineapple' id='pineapple' checked={formState.pineapple} onChange={onChange}/>
                        Pineapple
                    </label>
                </label>
    );
}