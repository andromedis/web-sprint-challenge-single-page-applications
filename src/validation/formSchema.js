import * as yup from 'yup';

const schema = yup.object().shape({
    name: yup.string()
        .trim()
        .required('Name is required')
        .min(2, 'Name must be at least two characters'),
    size: yup.string()
        .oneOf(['Small - 8"', 'Medium - 12"', 'Large - 16"'], 'Size is required'),
    sauce: yup.string()
        .oneOf(['marinara', 'alfredo', 'bbq'], 'Sauce is required'),
    pepperoni: yup.boolean(),
    sausage: yup.boolean(),
    olives: yup.boolean(),
    onions: yup.boolean(),
    peppers: yup.boolean(),
    broccoli: yup.boolean(),
    special: yup.string(),
})

export default schema;