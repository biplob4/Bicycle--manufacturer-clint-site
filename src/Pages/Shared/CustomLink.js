import { Link, useMatch, useResolvedPath } from "react-router-dom";

function CustomLink({ children, to, ...props }) {
  let resolved = useResolvedPath(to);
  let match = useMatch({ path: resolved.pathname, end: true });

  return (
    <div>
      <Link
        style={{
          color: match ? 'black' : 'gray',
          margin: "0px", borderBottom: match && '3px solid #0277BD' ,
          borderRadius:'2px'
        }}
        className={match ? "underline" : "none"}
        to={to}
        {...props}
      >
        {children}
      </Link>
    </div>
  );
}

export default CustomLink;