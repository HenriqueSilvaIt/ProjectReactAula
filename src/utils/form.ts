export function update(inputs: any, name: string, newValue: any) {
        return {...inputs, [name]/* no atributo que chama name*/:{/*novo valor desse name vai ser*/...inputs[name]
            /*oque já tinha nele */, value: newValue}/*porém o value vai ser ese novo que passarmos
            na função*/}; /*Estamos reaproveitando
        o que está no atributo name(que seria o nome do campo) e no value estamos passando um novo valor 
        dentreo desse  campo*/
}
/*a ideia dessa função é juntar o objeto price e description, criando um novo objeto pegando apenas o campo value, dess form:
*/
export function toValues(inputs: any) { 

    const data: any = {};/* any para n reclamar amis*/

    for(var name in inputs) /*percorre os atributos do objeto inputs
    dando o apelido de cada apelido de name*/ {
        data[name] = inputs[name].value; /*pegando só o campo value dos objetos do input*/
    }

    return data;

}