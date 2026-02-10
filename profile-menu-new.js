// Enhanced Profile Menu Functionality

let profileMenuOpen = false;

/**
 * Display the profile features dropdown menu
 */
function displayProfileFeatures() {
  const profileFeatures = document.getElementById('profileFeatures');
  const chevron = document.getElementById('chevronDown');
  
  if (profileFeatures) {
    profileFeatures.style.display = 'block';
    profileMenuOpen = true;
    
    if (chevron) {
      chevron.style.rotate = '180deg';
    }
    
    // Add click outside listener
    document.addEventListener('click', closeProfileOnClickOutside);
  }
}

/**
 * Hide the profile features dropdown menu
 */
function hideProfileFeatures() {
  const profileFeatures = document.getElementById('profileFeatures');
  const chevron = document.getElementById('chevronDown');
  
  if (profileFeatures) {
    profileFeatures.style.display = 'none';
    profileMenuOpen = false;
    
    if (chevron) {
      chevron.style.rotate = '0deg';
    }
    
    // Remove click outside listener
    document.removeEventListener('click', closeProfileOnClickOutside);
  }
}

/**
 * Toggle profile menu visibility
 */
function toggleProfileMenu() {
  if (profileMenuOpen) {
    hideProfileFeatures();
  } else {
    displayProfileFeatures();
  }
}

/**
 * Close profile menu when clicking outside
 */
function closeProfileOnClickOutside(event) {
  const profileFeatures = document.getElementById('profileFeatures');
  const userProfile = document.querySelector('.user-profile');
  
  if (profileFeatures && userProfile && profileMenuOpen) {
    // Check if click is outside the profile menu and trigger
    if (!userProfile.contains(event.target)) {
      hideProfileFeatures();
    }
  }
}

/**
 * Setup profile menu events
 */
function setupProfileMenu() {
  // Get all possible trigger elements
  const profileTrigger = document.querySelector('.profile-trigger');
  const profileH2 = document.querySelector('.user-profile h2');
  const message = document.getElementById('message');
  
  // Setup click handlers for profile trigger
  if (profileTrigger) {
    profileTrigger.addEventListener('click', function(e) {
      e.stopPropagation();
      toggleProfileMenu();
    });
  }
  
  if (profileH2) {
    profileH2.addEventListener('click', function(e) {
      e.stopPropagation();
      toggleProfileMenu();
    });
  }
  
  if (message) {
    message.addEventListener('click', function(e) {
      e.stopPropagation();
      toggleProfileMenu();
    });
  }
  
  // Setup menu item click handlers
  const profileMenuItems = document.querySelectorAll('.profile-menu-item');
  profileMenuItems.forEach(item => {
    item.addEventListener('click', function(e) {
      // Allow normal link navigation
      setTimeout(() => {
        hideProfileFeatures();
      }, 100);
    });
  });
  
  // Setup close button
  const closeButton = document.querySelector('.profile-features button.closebutton');
  if (closeButton) {
    closeButton.addEventListener('click', function(e) {
      e.preventDefault();
      e.stopPropagation();
      hideProfileFeatures();
    });
  }
  
  // Setup logout button
  const logoutBtn = document.getElementById('signOutBtn');
  if (logoutBtn) {
    logoutBtn.addEventListener('click', function(e) {
      e.preventDefault();
      e.stopPropagation();
      handleLogout();
    });
  }
}

/**
 * Update user profile display name
 * @param {string} userName - The name to display
 */
function updateProfileUserName(userName) {
  const displayNameElements = document.querySelectorAll('.display-userName');
  displayNameElements.forEach(element => {
    element.textContent = userName || 'Guest';
  });
}

/**
 * Handle logout functionality
 */
function handleLogout() {
  hideProfileFeatures();
  // Logout logic will be handled by Firebase
  // Example: auth.signOut();
}

/**
 * Initialize profile menu when document is ready
 */
function initProfileMenu() {
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', setupProfileMenu);
  } else {
    setupProfileMenu();
  }
}

// Export functions for use in other scripts
if (typeof module !== 'undefined' && module.exports) {
  module.exports = {
    displayProfileFeatures,
    hideProfileFeatures,
    toggleProfileMenu,
    updateProfileUserName,
    handleLogout,
    initProfileMenu
  };
}

// Initialize when script loads
initProfileMenu();
