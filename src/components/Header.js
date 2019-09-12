import React from "react"
import { Link } from "gatsby"
import { css } from "@emotion/core"
import styled from "@emotion/styled"

const NavLink = styled(Link)`
  color: mediumorchid;
  padding: 0 10px;
  border-right: 1px solid mediumorchid;

  &.active-page {
    border-bottom: 2px solid mediumorchid;
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
      font-weight: bold;
    `}
  >
    {children}
  </div>
)
const Header = ({ siteTitle }) => (
  <header
    css={css`
      background-color: #eeeeee44;
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      width: 100%;
      z-index: 1000;
    `}
  >
    <InnerHeader>
      <NavLink to="/">
        <h1>&hearts;</h1>
      </NavLink>
      <nav>
        <NavLink to="/about/" activeClassName="active-page">
          About
        </NavLink>
        <NavLink to="/articles/" activeClassName="active-page">
          Articles
        </NavLink>
        <NavLink to="/contact/" activeClassName="active-page">
          Contact
        </NavLink>
      </nav>
    </InnerHeader>
  </header>
)

export default Header
