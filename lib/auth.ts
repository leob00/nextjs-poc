export interface User {
    userName?: string
    name?: string
    email?: string
}

export const isBrowser = () => typeof window !== 'undefined'

export const getUser = (): User | null => {
    if (isBrowser()) {
        const data = window.localStorage.getItem('gatsbyUser')
        if (data) {
            return JSON.parse(data)
        }
    }
    return null
}

const setUser = (user: User): void => window.localStorage.setItem('gatsbyUser', JSON.stringify(user))

export const handleLogin = ({ username, password }: { username: string; password: string }): boolean => {
    if (username === 'john' && password === 'pass') {
        setUser({
            userName: 'john',
            name: 'Johnny B. Goode',
            email: 'johnny@example.org',
        })
        return true
    }
    return false
}

export const isLoggedIn = (): boolean => {
    const user = getUser()
    return !!user?.userName
}

export const logout = (): void => {
    setUser({})
}