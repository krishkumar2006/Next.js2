import Link from "next/link"
import header from './header.module.css'

const Header = () => {
  return (
    <header>
    
              {/* NAVBAR */}
              <div className={header.heading}> <h1>WELCOME TO MY  SECOND NEXT.JS ASSIGNMENT</h1>
       </div>

{/* PAGES */}
<ul className={header.page}>
    
    <li>< Link href={"http://localhost:3000/about"}>About</Link> </li>
    <li>< Link href={"http://localhost:3000/contact"}>Contact us</Link></li>
    <li>< Link href={"http://localhost:3000/products"}>products</Link></li>
</ul>
</header>
)
    
}

export default Header
