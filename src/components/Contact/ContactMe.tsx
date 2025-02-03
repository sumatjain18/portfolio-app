import { useRef, useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import emailjs from "@emailjs/browser";
import { Alert, Snackbar } from "@mui/material";
import Confetti from "react-confetti";

const ContactMe = () => {
  const form = useRef<HTMLFormElement>(null);

  // Validation schema using Yup
  const validationSchema = Yup.object().shape({
    user_name: Yup.string().required("Name is required"),
    user_email: Yup.string().email("Invalid email").required("Email is required"),
    user_contactNumber: Yup.string()
      .matches(/^[0-9]{10}$/, "Must be a valid 10-digit number")
      .max(10, "Must be exactly 10 digits")
      .required("Contact Number is required"),
    message: Yup.string().required("Message is required"),
  });

  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState("");
  const [snackbarSeverity, setSnackbarSeverity] = useState<"success" | "error">("success");
  const [confettiActive, setConfettiActive] = useState(false);

  const handleSnackbarClose = () => {
    setSnackbarOpen(false);
  };

  const handleSubmit = (values: any) => {
    console.log("Form values:", values);

    if (!form.current) return;
    console.log("Form.current", form.current);

    // emailjs.sendForm("service_eeygubh", "template_j9hpkqj", form.current, "iRnXQ-s3OuMP2VWbn").then(
    //   () => {
    //     setSnackbarMessage("Message sent successfully to Sumat!");
    //     setSnackbarSeverity("success");
    //     setSnackbarOpen(true);
    //     console.log("SUCCESS!");
    //   },
    //   (error) => {
    //     setSnackbarMessage(`Failed to send message to Sumat: ${error.text}`);
    //     setSnackbarSeverity("error");
    //     setSnackbarOpen(true);
    //     console.error("FAILED...", error.text);
    //   }
    // );

    // emailjs.sendForm("service_eeygubh", "template_nem1kdc", form.current, "iRnXQ-s3OuMP2VWbn").then(
    //   () => {
    //     console.log("SUCCESS!");
    //   },
    //   (error) => {
    //     console.error("FAILED...", error.text);
    //   }
    // );
    setConfettiActive(true);
    setTimeout(() => {
      setConfettiActive(false);
    }, 7000);
  };

  return (
    <section className="min-h-screen bg-slate-800 py-16 px-4">
      <div className="flex justify-center items-center mb-12">
        <h2
          className="text-4xl md:text-4xl lg:text-4xl px-2 font-bold text-transparent bg-clip-text text-center"
          style={{
            backgroundImage: "linear-gradient(to right, #ff7eb3, #ff758c, #ff7a50)",
          }}
        >
          CONTACT ME
        </h2>
      </div>

      <div className="relative max-w-md mx-auto bg-white shadow-md rounded-lg p-8">
        <Formik
          initialValues={{
            user_name: "",
            user_email: "",
            user_contactNumber: "",
            message: "",
          }}
          enableReinitialize
          // initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={(values, { setSubmitting, resetForm }) => {
            handleSubmit(values);
            setSubmitting(false);
            resetForm();
          }}
          // Assign the form ref here
        >
          {({ errors, touched }) => (
            <Form ref={form} className="space-y-4">
              {/* Name Field */}
              <div>
                <label htmlFor="name" className="block text-gray-700 font-medium">
                  Name
                </label>
                <Field type="text" id="name" name="user_name" className={`w-full px-4 py-2 border rounded-lg ${errors.user_name && touched.user_name ? "border-red-500" : "border-gray-300"}`} />
                <ErrorMessage name="user_name" component="div" className="text-red-500 text-sm mt-1" />
              </div>

              {/* Email Field */}
              <div>
                <label htmlFor="email" className="block text-gray-700 font-medium">
                  Email
                </label>
                <Field type="email" id="email" name="user_email" className={`w-full px-4 py-2 border rounded-lg ${errors.user_email && touched.user_email ? "border-red-500" : "border-gray-300"}`} />
                <ErrorMessage name="user_email" component="div" className="text-red-500 text-sm mt-1" />
              </div>

              {/* Contact Number Field */}
              <div>
                <label htmlFor="contactNumber" className="block text-gray-700 font-medium">
                  Contact Number
                </label>
                <Field
                  type="text"
                  id="contactNumber"
                  name="user_contactNumber"
                  onInput={(e) => {
                    const input = e.target;
                    input.value = input.value.replace(/\D/g, ""); // Remove non-numeric characters
                    if (input.value.length > 10) {
                      input.value = input.value.slice(0, 10); // Limit to 10 digits
                    }
                  }}
                  className={`w-full px-4 py-2 border rounded-lg ${errors.user_contactNumber && touched.user_contactNumber ? "border-red-500" : "border-gray-300"}`}
                />
                <ErrorMessage name="user_contactNumber" component="div" className="text-red-500 text-sm mt-1" />
              </div>

              {/* Message Box */}
              <div>
                <label htmlFor="message" className="block text-gray-700 font-medium">
                  Message
                </label>
                <Field
                  as="textarea"
                  id="message"
                  name="message"
                  rows="4"
                  className={`w-full px-4 py-2 border rounded-lg ${errors.message && touched.message ? "border-red-500" : "border-gray-300"}`}
                />
                <ErrorMessage name="message" component="div" className="text-red-500 text-sm mt-1" />
              </div>

              {/* Submit Button */}
              <div className="flex justify-center">
                <button
                  type="submit"
                  className="flex items-center gap-2 px-10 py-2 bg-gradient-to-r from-amber-400 to-pink-400 text-white rounded-full hover:from-pink-400 hover:to-amber-400 hover:scale-90 transition-all duration-300 text-lg font-medium"
                >
                  SUBMIT
                </button>
              </div>
            </Form>
          )}
        </Formik>

        <Snackbar open={snackbarOpen} autoHideDuration={3000} onClose={handleSnackbarClose} anchorOrigin={{ vertical: "bottom", horizontal: "center" }}>
          <Alert onClose={handleSnackbarClose} severity={snackbarSeverity} sx={{ width: "100%" }}>
            {snackbarMessage}
          </Alert>
        </Snackbar>
        {confettiActive ? <Confetti width={400} recycle={false} style={{ margin: "auto" }} /> : null}
      </div>
    </section>
  );
};

export default ContactMe;
