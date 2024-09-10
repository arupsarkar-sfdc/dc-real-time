<script>

let email = ""
  let phonenumber = ""
  let firstname = ""
  let lastname = ""
  let username = ""	
  let password = ""
  console.log("layout");
  // import BottomNav from '$lib/components/BottomNav.svelte';
  let showModal = false;

  function openModal() {
    showModal = true;
  }

  function closeModal() {
    showModal = false;
  }

  function saveForm() {
    window.email = email;
    window.phonenumber = phonenumber;
    window.firstname = firstname;
    window.lastname = lastname;
    window.username = username;	
    // Save logic here (you can handle form submission or validation)
    closeModal();
  }  

  let showLoginModal = false;

  function openLoginModal() {
    showLoginModal = true;
  }

  function closeLoginModal() {
    showLoginModal = false;
  }

  function saveLogin() {
	  window.username = document.getElementById("username").value;
    console.log("username", window.username);
    // window.username = username;
    // Logic to save login credentials (you can implement form submission or validation)
    closeLoginModal();
  } 
  let selectedOption = ''; // To store the selected option

  // Event handler for capturing the selected value
function handleConsentOptInButtonClick(event) {
  const selectedOption = event.target.id;
  const optInEvent = new CustomEvent('click', {
    detail: { OptIn: true }
    });  
  window.dispatchEvent(optInEvent);
  console.log('Selected:', selectedOption);
}
function handleConsentOptOutButtonClick(event) {
  const selectedOption = event.target.id;
  const optOutEvent = new CustomEvent('click', {
    detail: { OptOut: true }
    });  
  window.dispatchEvent(optOutEvent);
  console.log('Selected:', selectedOption);
}
</script>

<nav class="navigation">
  <ul class="nav-links">
    <a href="/">Home</a>
    <a href="/about">About</a>
    <a href="/contact">Contact</a>
    <a href="/blog">Blog</a>
  </ul>
    <!-- Dropdown for Opt-In/Opt-Out -->
  <!-- Opt-In and Opt-Out buttons -->
  <button id="opt-in" class="slds-button slds-button_neutral" on:click={handleConsentOptInButtonClick}>
    Opt-In
  </button>
  <button id="opt-out" class="slds-button slds-button_neutral" on:click={handleConsentOptOutButtonClick}>
    Opt-Out
  </button>
  <div class="opt-buttons">
    <button id="login" on:click={openLoginModal} >Login</button>
    <button on:click={openModal}>Register</button>
  </div>
</nav>

<!-- Modal -->
{#if showModal}
  <button class="modal-overlay" on:click={closeModal} aria-label="Close"></button>
  <div class="modal">
    <h2>Register</h2>
    <form>
      <label for="first-name">First Name:</label>
      <input id="first-name" type="text" bind:value={firstname}/>

      <label for="last-name">Last Name:</label>
      <input id="last-name" type="text" bind:value={lastname}/>

      <label for="phone">Phone:</label>
      <input id="phone" type="tel" bind:value={phonenumber}/>

      <label for="email">Email:</label>
      <input id="email" type="email" bind:value={email}/>

      <label for="username">Username:</label>
      <input id="username" type="email" bind:value={username}/>	  
      <!-- Buttons -->
      <div class="modal-buttons">
        <button id="register"  type="button" class="save-button" on:click={saveForm}>Save</button>
        <button type="button" class="cancel-button" on:click={closeModal}>Cancel</button>
      </div>
    </form>
  </div>
{/if}


<!-- Login Modal -->
{#if showLoginModal}
  <button class="modal-overlay" on:click={closeLoginModal} aria-label="Close"></button>
  <div class="modal">
    <h2>Login</h2>
    <form>
      <label for="username">Username:</label>
      <input id="username" type="text" bind:value={username}/>

      <label for="password">Password:</label>
      <input id="password" type="password" bind:value={password}/> <!-- Encrypted password input -->

      <!-- Buttons -->
      <div class="modal-buttons">
        <button id="login" type="button" class="save-button" on:click={saveLogin}>Save</button>
        <button type="button" class="cancel-button" on:click={closeLoginModal}>Cancel</button>
      </div>
    </form>
  </div>
{/if}
<slot></slot>

<!-- <BottomNav /> -->

<style>
  .navigation {
    display: flex;
    justify-content: space-between; /* Space between the nav-links and buttons */
    align-items: center; /* Vertically align the items */
    padding: 10px 20px;
    background-color: #e0e0e0; /* Example background color */
    border-radius: 8px; /* Rounded corners */
  }

  /* Styling for the left navigation links */
  .nav-links {
    display: flex;
    gap: 20px; /* Adds spacing between each link */
    list-style: none;
    padding: 0;
    margin: 0;
  }

  /* Links style */
  .nav-links li a {
    text-decoration: none;
    color: blue; /* Adjust link color */
  }

  /* Styling for the Opt-In and Opt-Out buttons */
  .opt-buttons {
    display: flex;
    gap: 10px; /* Space between buttons */
  }

  .opt-buttons button {
    background-color: #007bff;
    color: white;
    border: none;
    padding: 10px 20px;
    border-radius: 8px;
    cursor: pointer;
  }

  .opt-buttons button:hover {
    background-color: #0056b3;
  }

/* Modal Overlay */
.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  z-index: 999; /* Ensure it appears above other elements */
}

/* Modal Window */
.modal {
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: white;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  z-index: 1000; /* Ensure it appears above the overlay */
  width: 300px;
}

.modal h2 {
  text-align: center;
  margin-bottom: 20px;
}

.modal form {
  display: flex;
  flex-direction: column;
}

.modal label {
  margin-bottom: 5px;
}

.modal input {
  margin-bottom: 10px;
  padding: 10px;
  border-radius: 5px;
  border: 1px solid #ddd;
}

/* Buttons */
.modal-buttons {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 10px;
}

.save-button {
  background-color: #28a745; /* Green for Save */
  color: white;
  border: none;
  padding: 10px 20px;
  border-radius: 5px;
  cursor: pointer;
  margin-right: 20px;  
}

.save-button:hover {
  background-color: #218838;
}

.cancel-button {
  background-color: #dc3545; /* Red for Cancel */
  color: white;
  border: none;
  padding: 10px 20px;
  border-radius: 5px;
  cursor: pointer;
}

.cancel-button:hover {
  background-color: #c82333;
}

/* Modal Overlay */
.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  z-index: 999;
}
  /* Add any custom styles here if necessary */
</style>
