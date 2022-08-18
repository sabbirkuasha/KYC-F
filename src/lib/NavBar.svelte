<script>



  export let Menu1 = "Data Input"
  export let Menu1url = "/"
  export let Menu2 = "Match NID"
  export let Menu2url = "/"


</script>

<div class="navbar bg-slate-900">
    
    <!-- Navbar Start -->
    <div class="navbar-start" >
        <!-- Mobile Menu only -->
        <div class="dropdown md:hidden">
            <label for="some" tabindex="0" class="btn btn-ghost btn-circle">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h7" /></svg>
            </label>
            <ul tabindex="0" class="menu menu-compact dropdown-content mt-3 p-2 shadow bg-slate-900 rounded-box w-52">
                <li><a href={Menu1url}>{Menu1}</a></li>
                <li><a href={Menu2url}>{Menu2}</a></li>
            </ul>
        </div>

        <!-- Desktop Menu only -->
        <div class="hidden md:inline-block align-middle w-full">
            <ul tabindex="0" class="flex space-x-3 p-2 shadow rounded-box w-auto">
                <li class="">
                    <a class="py-4 px-3 rounded-2xl hover:bg-slate-800 focus:ring focus:bg-slate-600" 
                      href={Menu1url}>{Menu1}
                    </a>
                </li>
                <li class="">
                    <a class="py-4 px-3 rounded-2xl hover:bg-slate-800 focus:ring focus:bg-slate-600" 
                      href={Menu2url}>{Menu2}
                    </a>
                </li>
            </ul>
        </div>
    </div>

    <!-- Middle Navbar -->
    <div class="navbar-center">
      <a href="/" class="btn btn-ghost normal-case text-xl">Alt-KYC</a>
    </div>

    <!-- Navbar End -->
    <div class="navbar-end">
        <!-- search -->
      <button class="btn btn-ghost btn-circle">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
      </button>
      <!-- notification -->
      <button class="btn btn-ghost btn-circle mr-1 hidden">
        <div class="indicator">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" /></svg>
          <span class="badge badge-xs badge-primary indicator-item"></span>
        </div>
      </button>
      <!-- Profile -->
      <div class="dropdown dropdown-end bg-slate-900">
            <label for="some" tabindex="0" class="btn btn-ghost btn-circle avatar">
            <div class="w-10 rounded-full">
                    <img src="https://placeimg.com/80/80/people" alt="profile" />
            </div>
            </label>
            <ul tabindex="0" class="menu menu-compact dropdown-content mt-3 p-2 shadow bg-slate-900 rounded-box w-52">
              <li>
                  <a class="justify-between" 
                    href="/"> Profile
                  </a>
              </li>
              <li><a href="/">Settings</a></li>
              <li><a href="/">Logout</a></li>
            </ul>
      </div>
    </div>
  </div>

  