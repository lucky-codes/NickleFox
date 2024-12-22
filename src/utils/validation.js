export const handleError = ({ data, setValidation }) => {
  const error = {};
  const email_regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  const password_regex =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{8,})/;

  if (!data.firstName.trim()) {
    error.firstName = "First name field is required";
  }

  if (!data.email.trim()) {
    error.email = "Email field is required";
  } else if (!email_regex.test(data.email)) {
    error.email = "Invalid Email address";
  }

  if (!data.phone.trim()) {
    error.phone = "Phone number is required";
  } else if (isNaN(data.phone)) {
    error.phone = "Enter valid number";
  }

  if (!data.address.trim()) {
    error.address = "Address field is required";
  }

  if (!data.city.trim()) {
    error.city = "City field is required";
  }

  if (!data.state.trim()) {
    error.state = "State field is required";
  }

  if (!data.password.trim()) {
    error.password = "Password field is required";
  } else if (!password_regex.test(data.password)) {
    error.password = "Password is not strong enough";
  }

  if (!data.confirmPassword.trim()) {
    error.confirmPassword = "Confirm Password field is required";
  }

  if (Object.keys(error).length > 0) {
    setValidation(error);
  } else {
    setValidation(null);
  }
};
