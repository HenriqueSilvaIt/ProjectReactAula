export function update(inputs: any, name: string, newValue: any) {
        return {...inputs, [name]:{...inputs[name], value: newValue}}; /*Estamos reaproveitando
        o que está no atributo name(que seria o nome do campo) e no value estamos passando um novo valor 
        dentreo desse  campo*/
}