import React from 'react';

export default function sauce ({ onChange }) {
    return (
        <label>
                    <h4>Type of Sauce</h4>
                    <label htmlFor='tomato'>
                        <input type='radio' name='sauce' id='tomato' value='Tomato' onChange={onChange} data-cy="tomato"/>
                        Original Red Tomato
                    </label>
                    <label htmlFor='ranch'>
                        <input type='radio' name='sauce' id='ranch' value='Ranch' onChange={onChange}/>
                        Garlic Ranch
                    </label>
                    <label htmlFor='bbq'>
                        <input type='radio' name='sauce' id='bbq' value='BBQ' onChange={onChange}/>
                        BBQ
                    </label>
                    <label htmlFor='alfredo'>
                        <input type='radio' name='sauce' id='alfredo' value='Alfredo' onChange={onChange}/>
                        Creamy Alfredo
                    </label>
                    <label htmlFor='hot'>
                        <input type='radio' name='sauce' id='hot' value='Hot Sauce' onChange={onChange}/>
                        Hot Sauce
                    </label>
                </label>
    );
}