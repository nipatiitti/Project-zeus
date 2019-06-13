let codes = {}

export const addCode = (code, user) => {
    console.log(code, user)
    codes[code] = user
}

export const checkCode = (code, userId) => {
    if (codes[code] && codes[code].id == userId) {
        return true
    }

    return false
}

export const getId = code => {
    if (codes[code]) {
        return codes[code].id
    }

    return false
}

export const removeCode = code => {
    delete codes[code]
}

export const allCodes = () => {
    const users = []

    for (const code in codes) {
        if (codes.hasOwnProperty(code)) {
            const user = codes[code]
            users.push(`${user.username}#${user.discriminator}`)
        }
    }

    return users
}
