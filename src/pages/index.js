import * as React from "react"
import Seo from "../components/seo"

import "../styles/global.css"
import Layout from "../components/layout"
import logo from "../img/skillsworn-logo.svg"

const Index = () => (
    <Layout>
    <Seo title="Skillsworn" />
      <div className="bg-splash-image bg-no-repeat bg-center bg-cover h-screen flex justify-center items-center">
          <div className="space-y-4">
            <p className="text-white sm:text-5xl flex flex-col items-center font-display text-4xl">
              <span className="text-sm uppercase tracking-widest underline">A Turn-Based Adventure Game<br /></span>
              <img className="mb-8" src={ logo } alt="Skillsworn logo" />
              <span>Discover the wilds of Thera<br /></span>
              <span>and all its inhabitants.</span>
            </p>
            <p className="text-white text-xl flex flex-col items-center font-light font-body">Available for early access 2024</p>

            <div className="flex flex-row items-center justify-center">
                <a href="https://store.steampowered.com/app/1565240/Skillsworn/" className="font-body items-center text-center transition duration-300 ease-in-out p-4 m-2 text-l w-1/2 bg-white hover:bg-gray-200 text-black">View on Steam</a>

            </div>
          </div>
      </div>
    </Layout>
  )

export default Index
