import { Formik } from "formik";
import * as Yup from "yup";

const RequestForm = () => {
  const validationSchema = Yup.object({
    name: Yup.string()
      .min(3, "name must be at least 3 characters")
      .required("name is required"),

    email: Yup.string().email("invalid email").required("email is required"),

    mobile: Yup.string()
      .matches(/^[0-9]{10}$/, "mobile number must be 10 digits")
      .required("mobile number is required"),

    department: Yup.string().required("department is required"),

    dateOfVisit: Yup.date().required("date of visit is required"),

    purpose: Yup.string()
      .min(10, "purpose must be at least 10 characters")
      .required("purpose of visit is required"),

    visitorType: Yup.string().required("visitor type is required"),

    parking: Yup.boolean(),

    terms: Yup.boolean().oneOf([true], "You must accept terms and conditions"),
  });

  return (
    <div>
      <h2>Request Form Component</h2>

      <Formik
        initialValues={{
          name: "",
          email: "",
          mobile: "",
          department: "",
          dateOfVisit: "",
          purpose: "",
          visitorType: "",
          parking: false,
          terms: false,
        }}
        validationSchema={validationSchema}
        onSubmit={(values, { resetForm }) => {
          console.log(values);
          alert("Form submitted successfully!");
          resetForm();
        }}
      >
        {({
          values,
          handleChange,
          handleSubmit,
          handleBlur,
          errors,
          touched,
        }) => (
          <form onSubmit={handleSubmit}>
            <div>
              <label>Name:</label>
              <input
                type="text"
                name="name"
                value={values.name}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              {touched.name && errors.name && <p>{errors.name}</p>}
            </div>

            <div>
              <label>Email:</label>
              <input
                type="email"
                name="email"
                value={values.email}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              {touched.email && errors.email && <p>{errors.email}</p>}
            </div>

            <div>
              <label htmlFor="mobile">Mobile Number:</label>
              <input
                type="text"
                id="mobile"
                name="mobile"
                value={values.mobile}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              {touched.mobile && errors.mobile && <p>{errors.mobile}</p>}
            </div>

            <div>
              <label>Department to Visit</label>
              <select
                name="department"
                value={values.department}
                onChange={handleChange}
                onBlur={handleBlur}
              >
                <option value="">Select Department</option>
                <option value="cardiology">Cardiology</option>
                <option value="neurology">Neurology</option>
                <option value="orthopedics">Orthopedics</option>
              </select>
              {touched.department && errors.department && (
                <p>{errors.department}</p>
              )}
            </div>

            <div>
              <label htmlFor="dateOfVisit">Date of Visit</label>
              <input
                type="date"
                id="dateOfVisit"
                name="dateOfVisit"
                value={values.dateOfVisit}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              {touched.dateOfVisit && errors.dateOfVisit && (
                <p>{errors.dateOfVisit}</p>
              )}
            </div>

            <div>
              <label>Purpose of Visit</label>
              <input
                type="text"
                name="purpose"
                value={values.purpose}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              {touched.purpose && errors.purpose && <p>{errors.purpose}</p>}
            </div>

            <div>
              <label>Visitor Type</label>

              <label>
                <input
                  type="radio"
                  name="visitorType"
                  value="Interview Candidate"
                  checked={values.visitorType === "Interview Candidate"}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                Interview Candidate
              </label>

              <label>
                <input
                  type="radio"
                  name="visitorType"
                  value="Vendor"
                  checked={values.visitorType === "Vendor"}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                Vendor
              </label>

              <label>
                <input
                  type="radio"
                  name="visitorType"
                  value="Guest"
                  checked={values.visitorType === "Guest"}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                Guest
              </label>

              {touched.visitorType && errors.visitorType && (
                <p>{errors.visitorType}</p>
              )}
            </div>

            <div>
              <label>
                <input
                  type="checkbox"
                  name="parking"
                  checked={values.parking}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                Need Parking?
              </label>
            </div>

            <div>
              <label>
                <input
                  type="checkbox"
                  name="terms"
                  checked={values.terms}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                Accept Terms and Conditions
              </label>
              {touched.terms && errors.terms && <p>{errors.terms}</p>}
            </div>

            <button type="submit">Submit Request</button>
          </form>
        )}
      </Formik>
    </div>
  );
};

export default RequestForm;
