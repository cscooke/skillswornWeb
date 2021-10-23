import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Style from "../styles/global.css"
import Layout from "../components/layout"
import Seo from "../components/seo"

const IndexPage = () => (

  <Layout>
    <div class="bg-splash-image bg-no-repeat bg-center bg-cover h-screen flex justify-center items-center">
        <div class="space-y-4">

          <p class="text-white text-5xl flex flex-col items-center font-display">
            <span class="text-sm uppercase tracking-wide-1">A Realtime Adventure Game<br /></span>
            <span>Discover the wilds of Thera<br /></span>
            <span>and all its inhabitants.</span>
          </p>
          <p class="text-white text-xl flex flex-col items-center font-light font-body">Available for early access January 2022</p>

          <div class="flex flex-row items-center justify-center">
              <button class="font-body items-center transition duration-300 ease-in-out p-4 m-2 text-l w-2/5 bg-white hover:bg-gray-200 text-black">View on Steam</button>
              <button class="font-body items-center transition duration-300 ease-in-out p-4 m-2 text-l w-2/5 bg-white hover:bg-gray-200 text-black">Watch Trailer</button>
          </div>
        </div>
    </div>
    <div class="container bg-red">
      <h1>section two</h1>
    </div>
  </Layout>
)

export default IndexPage
