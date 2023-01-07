import { useFormik } from "formik";
import * as yup from "yup";

const formValidationSchema = yup.object({
    email: yup
        .string()
        .min(12, "Need a longer email")
        .required("Why not filled this email?"),

    password: yup
        .string()
        .min(8, "Need a longer password")
        .max(12, "Need a shorter password")
        .required('Why not filled this password?'),
})

export function BasicForm() {
    const {handleBlur,handleChange,handleSubmit,errors,values,touched} = useFormik({
        initialValues: {
            email: '',
            password: '',
        },
        validationSchema: formValidationSchema,
        onSubmit: (values) => {
            console.log(values)
        }
    })
    return (
        <form className='basic-form' onSubmit={handleSubmit}>

            <input
                value={values.email}
                onChange={handleChange}
                onBlur={handleBlur}
                type="email"
                placeholder='email'
                name="email" />
            {touched.email && errors.email ? errors.email : null}
            <input
                value={values.password}
                onChange={handleChange}
                onBlur={handleBlur}
                type="text"
                placeholder='password'
                name="password" />
            {touched.password && errors.password ? errors.password : null}
            <button type="submit">submit</button>

        </form>
    );
}
