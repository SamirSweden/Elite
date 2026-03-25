type OTPEntry = {
    code:string
    expires:number
}

const store = new Map<string ,OTPEntry>();


export function saveOTP(email: string , code: string){
    store.set(email , {
        code ,
        expires: Date.now() + 5 * 60 * 1000 ,
    })
}


export function verifyOTP(email:string , code:string){
    const entry = store.get(email)

    if (!entry) return false;
    if (Date.now() > entry.expires) return false;

    return entry.code === code
}


export function deleteOTP(email: string){
    store.delete(email)
}