// Simulated API response for demonstration
const rivers = [
    { name: "River 1", distance: 1000, details: "Details about River 1" },
    { name: "River 2", distance: 1500, details: "Details about River 2" },
    // Add up to 20 rivers here
];

// Function to create the accordion list of rivers
function createAccordion(rivers) {
    const riverListContainer = document.getElementById('river-list');
    rivers.forEach((river, index) => {
        const accordionItem = document.createElement('div');
        accordionItem.className = 'accordion-item';
        accordionItem.innerHTML = river.name;
        
        // Create the hidden content for each river
        const accordionContent = document.createElement('div');
        accordionContent.className = 'accordion-content';
        accordionContent.innerHTML = `
          <p><b>Distance:</b> ${river.distance} meters</p>
          <p><b>Details:</b> ${river.details}</p>
        `;
        
        // Toggle visibility of the content on click
        accordionItem.addEventListener('click', () => {
            const currentlyVisible = accordionContent.style.display === 'block';
            document.querySelectorAll('.accordion-content').forEach(content => content.style.display = 'none');
            accordionContent.style.display = currentlyVisible ? 'none' : 'block';
        });

        // Append the content to the list
        accordionItem.appendChild(accordionContent);
        riverListContainer.appendChild(accordionItem);
    });
}

// Call the function to create the accordion
createAccordion(rivers);
