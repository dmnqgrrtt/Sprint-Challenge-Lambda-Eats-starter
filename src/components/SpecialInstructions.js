import React from 'react';

export default function instructions ({ formState, onChange }) {
    return (
        <label>
            <h4>Special instructions</h4>
            <textarea  name='instruct' placeholder='Tell us any special instructions for your order' value={formState.instruct} onChange={onChange}/>
        </label>
    );
}