import { useState } from 'react';
// write your custom hook here to control your checkout form
const useForm = (initialValues) => {
    const [showSuccessMessage, setShowSuccessMessage] = useState(false);
    const [values, setValues] = useState(initialValues);

    const handleChanges = e => {
        setValues({
            ...values,
            [e.target.name]: e.target.value
        });
    };
    const handleSubmit = e => {
        e.preventDefault();
        setShowSuccessMessage(true);
    };
    return ([showSuccessMessage, values, handleChanges, handleSubmit])
}
export default useForm;