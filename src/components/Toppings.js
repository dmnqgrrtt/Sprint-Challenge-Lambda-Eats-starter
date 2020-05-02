import React from 'react';

export default function toppings ({ formState, onChange }) {
    return (
        <label>
                    <h4>Toppings</h4>
                    <label htmlFor='pepp'>
                        <input type='checkbox' name='pepp' id='pepp' checked={formState.pepp} onChange={onChange} data-cy="pepp" />
                        Pepperoni
                    </label>
                    <label htmlFor='sausage'>
                        <input type='checkbox' name='sausage' id='sausage' checked={formState.sausage} onChange={onChange} data-cy="sausage"/>
                        Sausage
                    </label>
                    <label htmlFor='xcheese'>
                        <input type='checkbox' name='xcheese' id='xcheese' checked={formState.xcheese} onChange={onChange} data-cy="xcheese"/>
                        Extra Cheese
                    </label>
                    <label htmlFor='pineapple'>
                        <input type='checkbox' name='pineapple' id='pineapple' checked={formState.pineapple} onChange={onChange} data-cy="pineapple"/>
                        Pineapple
                    </label>
                </label>
    );
}