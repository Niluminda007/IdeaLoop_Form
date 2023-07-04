import Grid from "@mui/material/Grid";
import Header from "./components/Header";
import FormArea from "./components/FormArea";
import Footer from "./components/Footer";

const App = () => {
  return (
    <Grid container sx={{ bgcolor: "#fff", minHeight: "100vh" }}>
      <Grid item xs={12}>
        <Header />
      </Grid>
      <Grid item xs={12}>
        <FormArea />
      </Grid>
      <Grid item xs={12}>
        <Footer />
      </Grid>
    </Grid>
  );
};

export default App;
