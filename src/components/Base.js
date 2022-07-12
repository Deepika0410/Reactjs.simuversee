
import Footer2 from './Footer/Footer2'
import Homebar from './Navbar/Navbar'

const Base = ({children}) => {
  return (
    <div>
        <Homebar/>
            {children}
        <Footer2/>

    </div>
  )
}

export default Base