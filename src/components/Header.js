import React from "react"
import { Link } from "gatsby"
import { css } from "@emotion/core"
import styled from "@emotion/styled"
import LeafIcon from "./LeafIcon"

const NavLink = styled(Link)`
  color: #ffffff;
  padding: 0 10px;
  font-weight: bold;

  &:hover {
    border-bottom: 2px solid #ffffff;
  }

  &.active-page {
    border-bottom: 2px solid #ffffff;
  }
`
const InnerHeader = ({ children }) => (
  <div
    css={css`
      margin: 0 auto;
      width: 900px;
      max-width: 90vw;
      height: 70px;
      display: flex;
      align-items: center;
      justify-content: space-between;
    `}
  >
    {children}
  </div>
)
const Header = ({ siteTitle }) => (
  <header
    css={css`
      background-color: #27495a;
    `}
  >
    <InnerHeader>
      <Link to="/">
        <LeafIcon />
      </Link>
      <nav>
        <NavLink to="/about/" activeClassName="active-page">
          About
        </NavLink>
        |
        <NavLink to="/articles/" activeClassName="active-page">
          Articles
        </NavLink>
        |
        <NavLink to="/contact/" activeClassName="active-page">
          Contact
        </NavLink>
      </nav>
    </InnerHeader>
  </header>
)

export default Header
