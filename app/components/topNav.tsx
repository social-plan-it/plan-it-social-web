import { useState } from "react";
import { Link } from "@remix-run/react";

export default function TopNav() {
  const [navbar, setNavbar] = useState(false);
  
  return (
    <nav className="bg-gray-800">
      <div style={{backgroundColor: "black", minHeight: "40px", display:"flex", color:"white", alignItems:"center", padding:"8px", justifyContent:'space-between', flexWrap:'wrap'}} className="navbar-container">
      <div>Logo</div>
      <div style={{display:"flex", flexWrap:'wrap'}} className="link-container">
        <div style={{margin:"0 16px",}}  >Home</div>
        <div style={{margin:"0 16px",}}  >About</div>
        <div style={{margin:"0 16px",}}  >Login</div>
      </div>
      </div>
      

    </nav>
  );
}
