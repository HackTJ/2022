// import { NavLink as ReactRouterNavLink, useHref } from "react-router-dom";
// import type { NavLinkProps as ReactRouterNavLinkProps } from "react-router-dom";
import { NavLink as ReactstrapNavLink } from "reactstrap";

type ReactstrapNavLinkProps = ReactstrapNavLink["props"];
// type NavLinkProps = Omit<ReactstrapNavLinkProps & ReactRouterNavLinkProps, "to">;

const NavLink = (props: ReactstrapNavLinkProps) => {
  // let href = useHref(props.href);
  return <ReactstrapNavLink {...props} />;
  // let href = useHref(props.href);
  // return (
  //     <ReactstrapNavLink
  //         tag={ReactRouterNavLink}
  //         to={href}
  //         {...props}
  //     ></ReactstrapNavLink>
  // );
};
export default NavLink;
