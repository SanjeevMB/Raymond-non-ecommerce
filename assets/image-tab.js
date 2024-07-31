document.addEventListener("DOMContentLoaded", function() {
    document.querySelectorAll(".tab-text").forEach(tabTextContainer => {
      tabTextContainer.addEventListener("click", function() {
        const tabNumber = this.dataset.tab;
        const tabContainer = this.closest(".tab-container");
  
        // Remove active class from all tab-text-containers within the same tab-container
        tabContainer.querySelectorAll(".tab-text").forEach(tab => {
          tab.classList.remove("active");
        });
  
        // Add active class to the clicked tab-text-container
        this.classList.add("active");
  
        // Remove active class from all tab-image-containers within the same tab-container
        tabContainer.querySelectorAll(".tab-image-container").forEach(tab => {
          tab.classList.remove("active");
        });
  
        // Add active class to the corresponding tab-image-container
        tabContainer.querySelector(`.tab-image-container[data-tab="${tabNumber}"]`).classList.add("active");
      });
    });
  });
  