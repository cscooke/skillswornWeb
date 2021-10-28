import * as React from "react"
import { graphql } from "gatsby"


import "../styles/global.css"
import Layout from "../components/layout"
import logo from "../img/skillsworn-logo.svg"



export default function Home({ data }) {
  console.log(data)
  return (
    <Layout>
      <div className="bg-splash-image bg-no-repeat bg-center bg-cover h-screen flex justify-center items-center">
          <div className="space-y-4">
            <p className="text-white sm:text-5xl flex flex-col items-center font-display text-4xl">
              <span className="text-sm uppercase tracking-widest underline">A Realtime Adventure Game<br /></span>
              <img className="mb-8" src={ logo } />
              <span>Discover the wilds of Thera<br /></span>
              <span>and all its inhabitants.</span>
            </p>
            <p className="text-white text-xl flex flex-col items-center font-light font-body">Available for early access January 2022</p>

            <div className="flex flex-row items-center justify-center">
                <a href="https://store.steampowered.com/app/1565240/Skillsworn/" className="font-body items-center text-center transition duration-300 ease-in-out p-4 m-2 text-l w-1/2 bg-white hover:bg-gray-200 text-black">View on Steam</a>

            </div>
          </div>
      </div>
    </Layout>
  )
}

export const query = graphql`
  query SiteInfo {
    site {
      siteMetadata {
        author
        description
        siteUrl
        title
      }
    }
  }
`
