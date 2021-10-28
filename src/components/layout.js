/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import * as React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"


import Navbar from "./navbar"
import "../styles/global.css"
import cfLogo from "../img/cfLogo.svg"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      <Navbar siteTitle={data.site.siteMetadata?.title || `Title`} />
      <div
        style={{
          margin: `0 auto`,
          padding: `0`,
        }}
      >
        <main>{children}</main>
        <footer className="space-y-4 font-body text-xs bg-black h-60 p-8 flex flex-col justify-center items-center uppercase tracking-widest"
          style={{
            color: `#3d3d3d`,
          }}
        >
          <div>
            <a href="#"><img className="h-5 mx-auto opacity-20 hover:opacity-30" src={ cfLogo } /></a>
          </div>
          <div>
            © {new Date().getFullYear()},
            {` `}
            Confer Studios
          </div>
        </footer>
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
