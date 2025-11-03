//your JS code here. If required.
   window.addEventListener('DOMContentLoaded', () => {
      const usernameInput = document.getElementById('username');
      const passwordInput = document.getElementById('password');
      const checkbox = document.getElementById('checkbox')
      const existingBtn = document.getElementById('existing');
	  const saved = localStorage.getItem('savedCredentials');

	   if(saved){
		    existingBtn.style.removeProperty( "display");
	   }
	   
   })