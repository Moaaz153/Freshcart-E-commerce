
export function checkPasswordStrength(password){
    let strength = 0;
    let fedeback = {text: "", background:"", width:""}

    if(password.length > 8) strength ++;
    if(password.length > 12) strength ++;
    if(/[a-z]/.test(password)) strength ++;
    if(/[A-Z]/.test(password)) strength ++;
    if(/[0-9]/.test(password)) strength ++;
    if(/[!@#$%^&*()?]/.test(password)) strength ++;


    switch(strength){
        case 1 :
            fedeback.text = "Very weak";
            fedeback.background = "bg-red-500";
            fedeback.width = "w-1/6"
        break;
        case 2 :
            fedeback.text = "Weak";
            fedeback.background = "bg-orange-500";
            fedeback.width = "w-2/6"
        break;
        case 3 :
            fedeback.text = "Fair";
            fedeback.background = "bg-yellow-500";
            fedeback.width = "w-3/6"
        break;
        case 4 :
            fedeback.text = "Good";
            fedeback.background = "bg-lime-500";
            fedeback.width = "w-4/6"
        break;
        case 5 :
            fedeback.text = "Strong";
            fedeback.background = "bg-primary-500";
            fedeback.width = "w-5/6"
        break;
        case 6 :
            fedeback.text = "Very strong";
            fedeback.background = "bg-primary-700";
            fedeback.width = "w-full"
        break;

    }

    return fedeback;

}