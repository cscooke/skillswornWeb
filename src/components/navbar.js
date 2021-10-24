import * as React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import Style from "../styles/global.css"
import logo from "../img/skillsworn-logo.svg"

const Navbar = ({ siteTitle }) => (
    <nav class="sticky top-0 flex bg-black bg-opacity-70 border-b border-white border-opacity-20 p-6 justify-center sm:justify-start">
      <div class="flex text-white">
        <img class="h-5 mx-auto" src={ logo } />
      </div>
      <div class="hidden">
        <div class="block lg:hidden">
          <button class="flex items-center px-3 py-2 border rounded hover:text-white hover:border-white">
            <svg class="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"/></svg>
          </button>
        </div>
        <div class="w-full block justify-end mr-6 lg:flex lg:items-center lg:w-auto">
          <div class="font-display uppercase text-sm tracking-widest lg:flex-grow">
            <a href="#responsive-header" class="block mt-4 lg:inline-block lg:mt-0 hover:text-yellow-500 hover:underline mr-4">
              Overview
            </a>
            <a href="#responsive-header" class="block mt-4 lg:inline-block lg:mt-0 hover:text-yellow-500 mr-4">
              Skills
            </a>
            <a href="#responsive-header" class="block mt-4 lg:inline-block lg:mt-0 hover:text-yellow-500">
              Companions
            </a>
          </div>
        </div>
      </div>
    </nav>
)

export default Navbar
