import { Link } from "solid-app-router";
import { Component } from "solid-js";

const PageNotFound: Component = () =>  {
 return (
<div class="w-9/12 m-auto py-16 min-h-screen flex items-center justify-center">
    <div class="max-w-md">
       <div class="text-5xl font-dark font-bold text-[#7FB9E4]">404</div>
     <p
       class="text-2xl text-white md:text-3xl font-light leading-normal"
     >Page not found</p>
   <p class="mt-3 mb-8 text-white">But {"don't"} worry, you can find plenty of other things on the homepage :)</p>
   
      <Link href='/'>
          
          <button class="hover:underline hover:text-secondaryG  text-lg no-underline font-medium leading-5 text-white">back to homepage</button>
          
   </Link>
   
</div>
</div>
  )
}

export default PageNotFound