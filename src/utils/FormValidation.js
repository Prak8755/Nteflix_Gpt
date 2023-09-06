

const FormValidation = (name,email,password) => {

        const nameValid=/^\b([A-ZÀ-ÿ][-,a-z. ']+[ ]*)+/.test(name);
        const isEmailValid=/^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/.test(email);
      const isPassValid=/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password);

      if(!nameValid)return 'Username is not valid';
      if(!isEmailValid) return 'Email is not valid';
      if(!isPassValid) return 'Password is not valid';
    
      return null;



}


 

export default FormValidation