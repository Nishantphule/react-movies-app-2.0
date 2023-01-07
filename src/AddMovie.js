import { useNavigate } from 'react-router-dom';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import { useFormik } from "formik";
import * as yup from "yup";

const movieValidationSchema = yup.object({
  pic: yup
    .string()
    .min(4)
    .required("Add the poster for the Movie!"),
  title: yup
    .string()
    .required("Add the title for the Movie!"),
  rating: yup
    .number()
    .min(0)
    .max(10)
    .required("Add the rating for the Movie!"),
  description: yup
    .string()
    .min(20)
    .required("Add the description for the Movie!"),
  url: yup
    .string()
    .min(4)
    .required("Add the url for the Movie Trailer!")
})

export function AddMovie() {

  const API = "https://6288bebc7af826e39e64a149.mockapi.io";

  const navigate = useNavigate();

  const { handleBlur, handleChange, handleSubmit, errors, values, touched } = useFormik({
    initialValues: {
      pic: '',
      title: '',
      rating: "",
      description: "",
      url: ""
    },
    validationSchema: movieValidationSchema,
    onSubmit: (values) => {
      newMovie(values)
    }
  })
  const newMovie = (add) => {
    fetch(`${API}/movies`, {
      method: "POST",
      body: JSON.stringify(add),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then(() => navigate("/movies"));
  };

  return (
    <form onSubmit={handleSubmit} className='add-movie'>
      <TextField
        label="Enter poster url"
        variant="outlined"
        className="inputField"
        value={values.pic}
        onChange={handleChange}
        onBlur={handleBlur}
        name="pic" 
        error={touched.pic && errors.pic}
        helperText={touched.pic && errors.pic ? errors.pic : null}/>

      <TextField
        label="Enter movie Title"
        variant="outlined"
        className="inputField"
        value={values.title}
        onChange={handleChange}
        onBlur={handleBlur}
        name="title" 
        error={touched.title && errors.title}
        helperText={touched.title && errors.title ? errors.title : null}/>
      

      <TextField label="Enter movie Rating"
        variant="outlined"
        className="inputField"
        value={values.rating}
        onChange={handleChange}
        onBlur={handleBlur}
        name="rating" 
        error={touched.rating && errors.rating}
        helperText={touched.rating && errors.rating ? errors.rating : null}/>
      

      <TextField
        label="Enter movie Description"
        variant="outlined"
        className="inputField"
        value={values.description}
        onChange={handleChange}
        onBlur={handleBlur}
        name="description" 
        error={touched.description && errors.description}
        helperText={touched.description && errors.description ? errors.description : null}/>
      

      <TextField
        label="Trailer"
        variant="outlined"
        className="inputField"
        value={values.url}
        onChange={handleChange}
        onBlur={handleBlur}
        name="url" 
        error={touched.url && errors.url}
        helperText={touched.url && errors.url ? errors.url : null}/>
      

      <Button sx={{ margin: "auto" }} style={{ width: "50%" }} className="addMovie-btn" type='submit' variant="contained">Add Movie</Button>
    </form>
  );
}
