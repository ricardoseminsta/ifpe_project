export const isLogged = (user: string, password: string) => {
    if(user === 'ricar' && password === '1234') {
        return true;
    } else {
        return false;
    }
}