import { Component, createSignal } from "solid-js";
import { Link } from "solid-app-router";
import solidLogo from '../logo.svg'

const Navbar: Component = () =>  {
    const [navbarOpen, setNavbarOpen] = createSignal(false);

    return (
      <div class="fixed top-0 w-full z-30 clearNav md:bg-opacity-90 transition duration-300 ease-in-out">
        <div class="flex flex-col max-w-6xl px-4 mx-auto md:items-center md:justify-between md:flex-row md:px-6 lg:px-8">
          <div class="flex flex-row items-center justify-between p-2">
           
              <img
               
                src={solidLogo}
                class={'rounded-full'}
                height={40}
                width={40}
                alt={'solid-logo'}
              />
            <Link href={'/'}> <p class="md:ml-2 text-white">SolidJS Scaffold</p></Link>
           
            <button
              class="text-[#308DF0] cursor-pointer leading-none px-3 py-1 md:hidden outline-none focus:outline-none "
              type="button"
              aria-label="button"
              onClick={() => setNavbarOpen(!navbarOpen())}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#7FB9E4"
                stroke-width="2"
                stroke-Linecap="round"
                stroke-Linejoin="round"
                class="feather feather-menu"
              >
                <line x1="3" y1="12" x2="21" y2="12"></line>
                <line x1="3" y1="6" x2="21" y2="6"></line>
                <line x1="3" y1="18" x2="21" y2="18"></line>
              </svg>
            </button>
          </div>
          <div
            class={
              "md:flex flex-grow items-center" +
              (navbarOpen() ? " flex" : " hidden")
            }
          >
            <nav class="flex-col flex-grow ">
              <ul class="flex flex-grow justify-end flex-wrap items-center">
               
                   
                    <li>
                  <a
                  onClick={() => setNavbarOpen(!navbarOpen())}
                    href="https://www.solidjs.com/"
                    class="font-medium text-[#7FB9E4] hover:underline px-5 py-3 flex items-center transition duration-150 ease-in-out"
                  >
                    SolidJS Docs
                  </a>
                </li>


                <li>
                  <a
                  onClick={() => setNavbarOpen(!navbarOpen())}
                    href="https://github.com/solidjs/solid"
                    class="font-medium text-[#7FB9E4] hover:underline px-5 py-3 flex items-center transition duration-150 ease-in-out"
                  >
                    SolidJS Github Repo
                  </a>
                </li>
              
                    
              </ul>
            </nav>
          </div>
        </div>
      </div>
    );
  }

export default Navbar