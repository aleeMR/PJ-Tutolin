import Navbar from '../components/Navbar';

const LayoutClient = ({children}) => {
return (
    <>
        <Navbar/>
        {children}
    </>
)}

export default LayoutClient;