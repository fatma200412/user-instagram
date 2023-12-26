import Avatar from "@mui/material/Avatar";
import CssBaseline from "@mui/material/CssBaseline";
import { Link } from "react-router-dom";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import InstagramIcon from "@mui/icons-material/Instagram";
import { Formik, Form, Field } from "formik";
import styled from "styled-components";
import axios from "axios";

const StyleField = styled.input`
  display: flex;
  flex-direction: column;
  color: #777;
  font-family: "Raleway", sans-serif;
  font-size: 0.8em;
  margin: normal;
  padding: 15px;
  position: relative;
  width: 100%;
`;

// TODO remove, this demo shouldn't need to reset the theme.
const defaultTheme = createTheme();
interface MyFormValues {
  username: string;
  surname: string;
  password: string;
  email: string;
}
function Register() {
  const initialValues: MyFormValues = {
    username: "",
    surname: "",
    password: "",
    email: "",
  };
  return (
    <>
      <ThemeProvider theme={defaultTheme}>
        <Grid container component="main" sx={{ height: "100vh" }}>
          <CssBaseline />
          <Grid
            item
            xs={false}
            sm={4}
            md={7}
            sx={{
              backgroundImage:
                "url(https://instasize.com/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fmunkee%2Fimage%2Fupload%2Fv1677712288%2Finstasize-website%2Flearn%2Flrm1ehuepxxgjntqr1hx.webp&w=3840&q=75)",
              backgroundRepeat: "no-repeat",
              backgroundColor: (t) =>
                t.palette.mode === "light"
                  ? t.palette.grey[50]
                  : t.palette.grey[900],
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          />
          <Grid
            item
            xs={12}
            sm={8}
            md={5}
            component={Paper}
            elevation={6}
            square
          >
            <Box
              sx={{
                my: 8,
                mx: 4,
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <Avatar
                sx={{
                  m: 1,
                  background:
                    " linear-gradient(351deg, rgba(56,85,112,1) 39%, rgba(33,110,163,1) 74%)",
                }}
              >
                <InstagramIcon />
              </Avatar>
              <Typography component="h1" variant="h5">
                Sign up
              </Typography>
              <Box sx={{ mt: 1 }}>
                <Formik
                  initialValues={initialValues}
                  onSubmit={(values, actions) => {
                    console.log(values);

                    axios
                      .post("http://localhost:9999/user/", values)
                      .then((res) => {
                        console.log(res);
                        alert(res.data.message);
                      });
                  }}
                >
                  <Form>
                    <Field
                      id="username"
                      name="username"
                      placeholder="User Name"
                      required
                    />
                    <br />
                    <Field
                      id="surname"
                      name="surname"
                      placeholder="surname"
                      required
                    />
                    <br />
                    <Field
                      id="password"
                      name="password"
                      placeholder="password"
                      required
                    />
                    <br />
                    <Field
                      id="email"
                      name="email"
                      placeholder="Email"
                      required
                    />
                    <br />
                    <button type="submit">Submit</button>
                  </Form>
                </Formik>

                <Grid container>
                  <Grid item xs></Grid>
                  <Grid item>
                    <Link to="/login">Do have an account? Sign in</Link>
                  </Grid>
                </Grid>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </ThemeProvider>
    </>
  );
}

export default Register;
