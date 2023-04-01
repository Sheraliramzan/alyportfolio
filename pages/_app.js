import '../styles/globals.css'
import "../styles/typewriter.css";
import "../styles/back.css";
import Navbar from '../components/Navbar';
import Back from '../components/Back';


export default function App({ Component, pageProps }) {
  return<>
     <div className="z-[-1] fixed h-screen pointer-events-none">
        <Back />
      </div>
    <Navbar/>
    <Component {...pageProps} />
  </> 
}
