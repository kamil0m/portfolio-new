export default function validateFormInput(input: string, type: string): string {
    
    let errorMessage: string = '';

    if (input.length === 0) {
        errorMessage = 'This field is required';
    }
    
    if (type === 'email') {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(input)) {
            errorMessage = 'Please enter a valid email address';
        }
    }

    return errorMessage;


}