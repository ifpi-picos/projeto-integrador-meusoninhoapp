document.addEventListener("DOMContentLoaded", function() {
    const toggles = document.querySelectorAll('.card .toggle');
  
    
    toggles.forEach(function(toggle) {
      toggle.addEventListener('click', function() {
        
        toggle.classList.toggle('active');
      });
    });
  });
  
  
  document.addEventListener("DOMContentLoaded", function() {
    const switches = document.querySelectorAll('.card .toggle');
  
    
    switches.forEach(switchElement => {
      switchElement.addEventListener('click', function() {
        
        switchElement.classList.add('pulse');
        
      
        setTimeout(() => {
          switchElement.classList.remove('pulse');
        }, 500);
      });
    });
  });
  
  
  document.addEventListener("DOMContentLoaded", function() {
    const addAlarmButton = document.querySelector('.add-alarm');
  
    
    addAlarmButton.addEventListener('click', function() {
    
      addAlarmButton.classList.add('pulse');
      
      
      setTimeout(() => {
        addAlarmButton.classList.remove('pulse');
      }, 500);
    });
  });
  