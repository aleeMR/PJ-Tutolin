import Footer from '../components/Footer';
import Navbar from '../components/Navbar';

const LayoutClient = ({children}) => {
return (
    <>
        <Navbar/>
        {children}
        <Footer/>
    </>
)}

export default LayoutClient;