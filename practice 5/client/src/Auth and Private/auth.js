export const useAuth=()=>{
    const auth=localStorage.getItem("login")
    return auth
}