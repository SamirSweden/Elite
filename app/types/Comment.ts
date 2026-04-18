export interface Comment {
    id: string 
    body: string 
    likes:number
    user: {
        username: string 
        fullName:string
    }
} 


export interface Todo {
    id: number 
    todo: string
}


//dto 