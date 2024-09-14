// Get references to the form and display area
var toggleSkillButton = document.getElementById('toggle-skill');
var skillsSection = document.getElementById('skills');
// Toggle skills visibility on button click
var skillsVisible = true; // Track visibility state
toggleSkillButton.addEventListener('click', function () {
    if (skillsVisible) {
        skillsSection.style.display = 'none'; // Hide skills section
        toggleSkillButton.innerHTML = '<b>Show Skills</b>'; // Change button text
    }
    else {
        skillsSection.style.display = 'block'; // Show skills section
        toggleSkillButton.innerHTML = '<b>Hide Skills</b>'; // Change button text
    }
    skillsVisible = !skillsVisible; // Toggle visibility state
});
