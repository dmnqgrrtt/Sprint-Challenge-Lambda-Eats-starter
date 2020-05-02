import React from 'react';

export default function size ({ formState, onChange }) {
    return (
        <label htmlFor='size'>
                    <h4>Choose the size</h4>

                    <select id="size" name="size" value={formState.size} onChange={onChange} data-cy="size">
                        <option value="">--Select--</option>
                        <option value="Small">Small (feeds 2)</option>
                        <option value="Medium">Medium (feeds 4)</option>

                        <option value="Large">Large (feeds 8)</option>

                        <option value="Sheet">Sheet (feeds 16)</option>
                    </select>
        </label>
    );
}