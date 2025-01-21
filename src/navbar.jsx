import {useState} from "react";
const Navbar = ({setCategory}) => {

  const[search,setSearch]=useState("");

  const handlesearch = (e) => {
    e.preventDefault();
    if(search.trim()!=="")
    {
      setCategory(search);
    }

  };

    return (
        <nav class="navbar navbar-expand-lg bg-body-tertiary" data-bs-theme="dark">
  <div class="container-fluid">
    <a class="navbar-brand" href="#"><span className="badge bg-light text-dark fs-4">NewsMag</span></a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
       
        <li class="nav-item">
          <div class="nav-link" onClick={()=>setCategory("technology")}>Technology</div>
        </li>
        <li class="nav-item">
          <div class="nav-link" onClick={()=>setCategory("business")}>Business</div>
        </li>
        <li class="nav-item">
          <div class="nav-link" onClick={()=>setCategory("health")}>Health</div>
        </li>
        <li class="nav-item">
          <div class="nav-link" onClick={()=>setCategory("sports")}>Sports</div>
        </li>
        <li class="nav-item">
          <div class="nav-link" onClick={()=>setCategory("entertainment")}>Entertainment</div>
        </li>
       
        <li class="nav-item">
          <a class="nav-link disabled" aria-disabled="true">Disabled</a>
        </li>
      </ul>
      <form class="d-flex" role="search" onSubmit={handlesearch}>
        <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search" value={search} onChange={(e)=>setSearch(e.target.value)}/>
        <button class="btn btn-outline-success" type="submit" >Search</button>
      </form>
    </div>
  </div>
</nav>
    );
};

export default Navbar;