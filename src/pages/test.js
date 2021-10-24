import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"


import Style from "../styles/global.css"
import Layout from "../components/layout"
import Seo from "../components/seo"
import logo from "../img/skillsworn-logo.svg"

const IndexPage = () => (

  <Layout>
    <div class="bg-splash-image bg-no-repeat bg-center bg-cover h-screen flex justify-center items-center">
        <div class="space-y-4">
          <p class="text-white sm:text-5xl flex flex-col items-center font-display text-4xl">
            <span class="text-sm uppercase tracking-widest underline">A Realtime Adventure Game<br /></span>
            <img class="mb-8" src={ logo } />
            <span>Discover the wilds of Thera<br /></span>
            <span>and all its inhabitants.</span>
          </p>
          <p class="text-white text-xl flex flex-col items-center font-light font-body">Available for early access January 2022</p>

          <div class="flex flex-row items-center justify-center">
              <a href="https://store.steampowered.com/app/1565240/Skillsworn/" class="font-body items-center text-center transition duration-300 ease-in-out p-4 m-2 text-l w-2/5 bg-white hover:bg-gray-200 text-black">View on Steam</a>
              <a href="#" class="font-body text-center items-center transition duration-300 ease-in-out p-4 m-2 text-l w-2/5 bg-white hover:bg-gray-200 text-black">Watch Trailer</a>
          </div>
        </div>
    </div>

  </Layout>
)

export default IndexPage
