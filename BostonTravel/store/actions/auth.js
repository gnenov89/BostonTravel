
// action identifier
export const SIGNUP = 'SIGNUP';
export const LOGIN = 'LOGIN';
// action creator
export const signup = (email, password) => {
    return async dispatch => {
        const response = await fetch('https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyAIOK-xPc99bQu-vj60mVdyqrzBWZL3aRI'
        ,{
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                email: email,
                password: password,
                returnSecureToken: true
            })
        });

        if(!response.ok) {
            throw new Error('Something went wrong!')
        }
        const resData = await response.json();
        console.log(resData);
        dispatch({type: SIGNUP});
    }
}
// login action 
export const login = (email, password) => {
    return async dispatch => {
        const response = await fetch('https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyAIOK-xPc99bQu-vj60mVdyqrzBWZL3aRI'
        ,{
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                email: email,
                password: password,
                returnSecureToken: true
            })
        });

        if(!response.ok) {
            throw new Error('Something went wrong!')
        }
        const resData = await response.json();
        console.log(resData);
        dispatch({type: LOGIN});
    }
}