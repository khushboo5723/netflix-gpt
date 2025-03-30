export const validateEmailAndPassword = (email , password) =>{
    const isEmailValid = /^\S+@\S+\.\S+$/.test(email);
    const isPasswordValid = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password);

    if(!isEmailValid) return 'Email is not valid';
    if(!isPasswordValid) return 'Password is not valid';

    return null;

}
