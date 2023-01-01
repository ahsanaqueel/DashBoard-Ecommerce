import {NavLink} from 'react-router-dom';

export default ()=>{

  return(<>
        <div className="pageSwitcher">
         <NavLink
          to="/"
         
          className={(navData) => (navData.isActive ? "pageSwitcherItem-active" : 'pageSwitcherItem')}
        >
          Sign In
        </NavLink>
        <NavLink
          
          to="/SignUp"
          className={(navData) => (navData.isActive ? "pageSwitcherItem-active" : 'pageSwitcherItem')}
          // className="pageSwitcherItem"
        >
          Sign Up
        </NavLink>
      </div>

      <div className="formTitle">
        <NavLink
          to="/"
          // activeClassName="formTitleLinkActive"
          className={(navData) => (navData.isActive ? "formTitleLinkActive" : 'formTitleLink')}
   
        >
          Sign In
        </NavLink>{" "}
        or{" "}
        <NavLink
          to="/SignUp"
          className={(navData) => (navData.isActive ? "formTitleLinkActive" : 'formTitleLink')}
        >
          Sign Up
        </NavLink>
      </div>
      </>
  )
}