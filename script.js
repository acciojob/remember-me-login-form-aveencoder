//your JS code here. If required.
   window.addEventListener('DOMContentLoaded', () => {
      const usernameInput = document.getElementById('username');
      const passwordInput = document.getElementById('password');
      const checkbox = document.getElementById('checkbox')
      const existingBtn = document.getElementById('existing');
	  const saved = localStorage.getItem('savedCredentials');
	  const submit = document.getElementById('submit');

	   if(saved){
		    existingBtn.style.removeProperty("display");
	   }

	
	  submit.addEventListener('click',()=>{
		  e.preventDefault();
	const username = usernameInput.value.trim();
    const password = passwordInput.value.trim();
		   if(!username || !password){
			alert('Please enter username and password!');
            return;
		   }
		  else{
			  alert("Logged in as <username>");
		  }
	  }) 
	   
	   
   })