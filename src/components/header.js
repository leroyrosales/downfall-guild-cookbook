/**
 * Bio component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import { useStaticQuery, graphql } from "gatsby"

import { Link } from "gatsby"

import { rhythm } from "../utils/typography"

const Header = () => {
  const data = useStaticQuery(graphql`
    query HeaderQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  const { title } = data.site.siteMetadata
  
  return (
    <header className="py-4 mb-4">
        <Link to="/">
            <h1 className="text-6xl font-black hover:opacity-75">{ title }</h1>
        </Link>
    </header>
  )
}

export default Header
