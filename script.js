// Global variables
let copiedAddress = null;
let submitted = false;

// Smooth scroll functions
function scrollToPricing() {
    document.getElementById('pricing').scrollIntoView({ behavior: 'smooth' });
}

function scrollToPayment() {
    document.getElementById('payment').scrollIntoView({ behavior: 'smooth' });
}

// Copy to clipboard function
async function copyToClipboard(address, type) {
    try {
        await navigator.clipboard.writeText(address);
        copiedAddress = type;
        
        // Update button text
        const button = document.getElementById(`copy-btn-${type}`);
        if (button) {
            button.textContent = 'Copied!';
        }
        
        // Reset after 2 seconds
        setTimeout(() => {
            copiedAddress = null;
            if (button) {
                button.textContent = 'Copy Address';
            }
        }, 2000);
    } catch (err) {
        console.error('Failed to copy: ', err);
        alert('Failed to copy address. Please copy manually.');
    }
}

// Form submission handler
function handleSubmit(event) {
    event.preventDefault();
    
    // Show thank you message
    document.getElementById('upload-form').classList.add('hidden');
    document.getElementById('thank-you').classList.remove('hidden');
    
    // Submit the form
    const form = event.target;
    
    // Create FormData from the form
    const formData = new FormData(form);
    
    // Submit to GetForm
    fetch(form.action, {
        method: 'POST',
        body: formData
    }).then(response => {
        console.log('Form submitted successfully');
    }).catch(error => {
        console.error('Form submission error:', error);
    });
    
    return false;
}

// Initialize page
document.addEventListener('DOMContentLoaded', function() {
    console.log('Cryptyc hosting page loaded');
});