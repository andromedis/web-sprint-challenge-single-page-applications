import React, { useState } from 'react';
import Route from 'react-router-dom';
import * as yup from 'yup';

import schema from '../validation/formSchema';

const initialFormValues = {
  name: '',
  size: '',
  sauce: '',
  pepperoni: false,
  sausage: false,
  olives: false,
  onions: false,
  peppers: false,
  broccoli: false,
  special: '',
}

const initialFormErrors = {
  name: '',
  size: '',
  sauce: '',
  pepperoni: '',
  sausage: '',
  olives: '',
  onions: '',
  peppers: '',
  broccoli: '',
  special: '',
}

function PizzaForm(props) {
  const [values, setValues] = useState(initialFormValues);
  const [errors, setErrors] = useState(initialFormErrors);

  const onChange = evt => {
    const { type, name, value, checked } = evt.target;
    const valueToUse = ( type === 'checkbox' ) ? checked : value;
    yup.reach(schema, name)
      .validate(valueToUse)
      .then(() => {
        setErrors({...errors, [name]: ''});
      })
      .catch(err => {
        setErrors({...errors, [name]: err.errors[0]})
      });
    setValues({...values, [name]: valueToUse});
  }

  const onSubmit = evt => {

  }

  return (
    <form onSubmit={onSubmit}>
      <h2>Build Your Own Pizza</h2>

      <div className='input'>
        <div className='input-header'>
          <h3><label htmlFor='customer-name' >Name</label></h3>
          <p>Required</p>
        </div>
        <div className='input-options'>
          <input 
            id='customer-name'
            type='text'
            name='name'
            value={values.name}
            onChange={onChange}
          />
        </div>
      </div>

      <div className='input'>
        <div className='input-header'>
          <h3><label htmlFor='size' >Choice of Size</label></h3>
          <p>Required</p>
        </div>
        <div className='input-options'>
          <select 
            id='size'
            name='size'
            value={values.size}
            onChange={onChange}
          >
            <option value=''>-- Select an option --</option>
            <option value='Small - 8"'>Small - 8"</option>
            <option value='Medium - 12"'>Medium - 12"</option>
            <option value='Large - 16"'>Large - 16"</option>
          </select>
        </div>
      </div>

      <div className='input'>
        <div className='input-header'>
          <h3>Choice of Sauce</h3>
          <p>Required</p>
        </div>
        <div className='input-options'>

          <input id='marinara'
            type='radio'
            name='sauce'
            value='marinara'
            onChange={onChange}
            checked={values.sauce === 'marinara'}
          />
          <label htmlFor='marinara'>Original Marinara</label>

          <input id='alfredo'
            type='radio'
            name='sauce'
            value='alfredo'
            onChange={onChange}
            checked={values.sauce === 'alfredo'}
          />
          <label htmlFor='alfredo'>Garlic Alfredo</label>

          <input id='bbq'
            type='radio'
            name='sauce'
            value='bbq'
            onChange={onChange}
            checked={values.sauce === 'bbq'}
          />
          <label htmlFor='bbq'>BBQ Sauce</label>

        </div>
      </div>

      <div className='input'>
        <div className='input-header'>
          <h3>Add Toppings</h3>
          <p>Choose up to 10</p>
        </div>
        <div className='input-options'>
          
          <input id='pepperoni'
            type='checkbox'
            name='pepperoni'
            onChange={onChange}
            checked={values.pepperoni}
          />
          <label htmlFor='pepperoni'>Pepperoni</label>

          <input id='sausage'
            type='checkbox'
            name='sausage'
            onChange={onChange}
            checked={values.sausage}
          />
          <label htmlFor='sausage'>Sausage</label>

          <input id='olives'
            type='checkbox'
            name='olives'
            onChange={onChange}
            checked={values.olives}
          />
          <label htmlFor='olives'>Olives</label>

          <input id='onions'
            type='checkbox'
            name='onions'
            onChange={onChange}
            checked={values.onions}
          />
          <label htmlFor='onions'>Onions</label>

          <input id='peppers'
            type='checkbox'
            name='peppers'
            onChange={onChange}
            checked={values.peppers}
          />
          <label htmlFor='peppers'>Peppers</label>

          <input id='broccoli'
            type='checkbox'
            name='broccoli'
            onChange={onChange}
            checked={values.broccoli}
          />
          <label htmlFor='broccoli'>Broccoli</label>
        </div>
      </div>

      <div className='input'>
        <div className='input-header'>
          <h3><label htmlFor='' >Special Instructions</label></h3>
          <p></p>
        </div>
        <div className='input-options'>
          <input id=''
            type='text'
            name='special'
            value={values.special}
            onChange={onChange}
          />
        </div>
      </div>

      <button>Add to Order</button>

    </form>
  );
}

export default PizzaForm;