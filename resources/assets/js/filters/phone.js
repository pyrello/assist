export default function(number) {
    const number2 = (""+number).replace(/\D/g, '')
    const m = number2.match(/^(\d{0,3})(\d{0,3})(\d{0,4})$/)
    let output = ''
    if (m[1] !== '') {
        output = `(${m[1]})`

        if (m[2] !== '') {
            output += ` ${m[2]}`

            if (m[3] !== '') {
                output += `-${m[3]}`
            }
        }
    }
    return output
}