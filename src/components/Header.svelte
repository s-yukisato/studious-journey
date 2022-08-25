<script lang="ts">
  export let title
</script>


<div class="drawer">
  <input id="drawer_bibi" type="checkbox" class="drawer-toggle" /> 
  <div class="drawer-content flex flex-col">

    <div class="navbar bg-base-100 fixed">
      <div class="navbar-start">
        <div class="flex-none lg:hidden">
          <label for="drawer_bibi" class="btn btn-ghost btn-circle">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h7" /></svg>
          </label>
        </div>
      </div>
      <div class="navbar-center">
        <a 
          href="/"
          class="btn btn-ghost normal-case text-xl"
        >
          {title}
        </a>
      </div>
      <div class="navbar-end">
        <label for="my-modal-4" class="btn modal-button btn-ghost btn-circle">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
        </label>

        <input type="checkbox" id="my-modal-4" class="modal-toggle" />
        <label for="my-modal-4" class="modal cursor-pointer">
          <label class="modal-box absolute top-10 w-full flex justify-between" for="">
            <input type="text" placeholder="Search..." class="input input-bordered input-primary w-full max-w-xs" />
            <button class="btn btn-outline btn-info">Search</button>
          </label>
        </label>
        
        <label for="my-modal-6" class="btn modal-button btn-ghost btn-circle">
          <div class="indicator">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" /></svg>
            <span class="badge badge-xs badge-primary indicator-item"></span>
          </div>
        </label>

        <input type="checkbox" id="my-modal-6" class="modal-toggle" />
        <div class="modal modal-bottom sm:modal-middle">
          <div class="modal-box">
            <h3 class="font-bold text-lg">Congratulations random Internet user!</h3>
            <p class="py-4">You've been selected for a chance to get one year of subscription to use Wikipedia for free!</p>
            <div class="modal-action">
              <label for="my-modal-6" class="btn">Yay!</label>
            </div>
          </div>
        </div>
      </div>
    </div>
    
  </div> 
  <div class="drawer-side">
    <label for="drawer_bibi" class="drawer-overlay"></label> 
    <ul class="menu p-4 overflow-y-auto w-80 bg-base-100">
      <li><a href="/">Home</a></li>
      <li><a href="/user">MyPage</a></li>
    </ul>
    
  </div>
</div>