import { Link, useMatch, useResolvedPath } from "react-router-dom";

function CustomLink({ children, to, ...props }) {
  let resolved = useResolvedPath(to);
  let match = useMatch({ path: resolved.pathname, end: true });

  return (
    <div>
      <Link
        style={{
          color: match ? 'black' : 'gray',
          background: match &&  "rgb(236, 235, 235)",
          margin: "0px", borderBottom: match && '3px solid #208754' ,
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