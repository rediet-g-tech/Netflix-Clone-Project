import Banner from "../../Components/Banner/Banner";
import Footer from "../../Components/Footer/Footer"
import Header from "../../Components/Header/Header"
import Row_list from "../../Components/Rows/Row_list/Row_list";

function Home() {
  return (
    <>
      <Header />
      <Banner/>
      <Row_list/>
      <Footer />
    </>
  );
}

export default Home