// Get references to the form and display area
const toggleSkillButton = document.getElementById('toggle-skill') as HTMLButtonElement;
const skillsSection = document.getElementById('skills') as HTMLOptionElement;

// Toggle skills visibility on button click
let skillsVisible = true; // Track visibility state

toggleSkillButton.addEventListener('click', () => {
    if (skillsVisible) {
        skillsSection.style.display = 'none'; // Hide skills section
        toggleSkillButton.innerHTML = '<b>Show Skills</b>'; // Change button text
    } else {
        skillsSection.style.display = 'block'; // Show skills section
        toggleSkillButton.innerHTML = '<b>Hide Skills</b>'; // Change button text
    }
    skillsVisible = !skillsVisible; // Toggle visibility state
});

