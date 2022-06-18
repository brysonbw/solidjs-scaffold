import { Component } from "solid-js";
import logo from '../../logo.svg'

const Home: Component = () =>  {
 return (
<div>
<img src={logo} class="logo" alt="logo" />
<h1 class="text-2xl text-center text-white my-10">SolidJS Scaffold :)</h1>
</div>
  )
}

export default Home