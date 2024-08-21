import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import SelectedPost from "../../components/SelectedPost/SelectedPost";

function SelectedPage() {
    return ( 
    <>
    <Header></Header>
    <SelectedPost style='background-light'></SelectedPost>
    <Footer></Footer>
    </>
    );
}

export default SelectedPage;