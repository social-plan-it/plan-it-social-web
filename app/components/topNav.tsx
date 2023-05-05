
export default function TopNav() {

  return (
    <nav>
      <div style={{backgroundColor: "#1F2937", minHeight: "40px", display:"flex", color:"white", alignItems:"center", padding:"8px", justifyContent:'space-between', flexWrap:'wrap'}} className="navbar-container">
      <img style={{height:"32px", width:"200px", cursor:"pointer",}} src="https://res.cloudinary.com/dxctpvd8v/image/upload/v1683267003/SocialPlanIt/SocialPlan-it-logo-Horizontal_xwm3xt.png" />
      <div style={{display:"flex", flexWrap:'wrap',}} className="link-container">
        <div style={{margin:"16px", cursor:"pointer",}}  >Home</div>
        <div style={{margin:"16px",cursor:"pointer",}}  >About</div>
        <div style={{margin:"16px",cursor:"pointer",}}  >Login</div>
      </div>
      </div>
      

    </nav>
  );
}
