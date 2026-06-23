import { Formik } from "formik";

const Form = () => {
  return (
    <div>
      <h2>Form Component</h2>
      <Formik
        initialValues={{ name: "", email: "", password: "" }}
        validate={(values) => {
          const errors = {};
          if (!values.name) {
            errors.name = "name is required";
          }
          if (!values.email) {
            errors.email = "email is required";
          }
          if (!values.password) {
            errors.password = "password is required";
          }
          return errors;
        }}
        onSubmit={(values, { resetForm }) => {
          console.log(values);
          resetForm();
        }}
      >
        {({ values, handleChange, handleSubmit, errors }) => (
          <form onSubmit={handleSubmit}>
            <div>
              <label>Name:</label>
              <input
                type="text"
                name="name"
                value={values.name}
                onChange={handleChange}
              />
              {errors.name && <p>{errors.name}</p>}
            </div>
            <div>
              <label>Email:</label>
              <input
                type="email"
                name="email"
                value={values.email}
                onChange={handleChange}
              />
              {errors.email && <p>{errors.email}</p>}
            </div>
            <div>
              <label htmlFor="password">Password:</label>
              <input
                type="password"
                id="password"
                name="password"
                value={values.password}
                onChange={handleChange}
              />
            </div>
            {errors.password && <p>{errors.password}</p>}
            <button type="submit">Submit</button>
          </form>
        )}
      </Formik>
    </div>
  );
};

export default Form;
