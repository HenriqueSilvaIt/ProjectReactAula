export function update(inputs: any, name: string, newValue: any) {
    return {
        ...inputs, [name]/* no atributo que chama name*/: {/*novo valor desse name vai ser*/...inputs[name]
            /*oque já tinha nele */, value: newValue
        }/*porém o value vai ser ese novo que passarmos
            na função*/}; /*Estamos reaproveitando
        o que está no atributo name(que seria o nome do campo) e no value estamos passando um novo valor 
        dentreo desse  campo*/
}
/*a ideia dessa função é juntar o objeto price e description, criando um novo objeto pegando apenas o campo value, dess form:
*/
export function toValues(inputs: any) {

    const data: any = {};/* any para n reclamar amis*/

    for (var name in inputs) /*percorre os atributos do objeto inputs
    dando o apelido de cada apelido de name*/ {
        data[name] = inputs[name].value; /*pegando só o campo value dos objetos do input*/
    }

    return data;

}

export function updateAll(inputs: any, newValues: any) {
    const newInputs: any = {};
    for (var name in inputs) { /* para cada nome de atributo
        estamos colocando no input, tudo que tava no input + o newValu que  vai ser
        o valor que colocarmos no input*/
            newInputs[name]/*newInputs atributo name vai conter:*/ = { ...inputs[name] /*tudo que tinha nele
                no inputs*/
                , value: newValues[name]/* porém o campo value, vai ser o newValues
                que é o novo valor que vamos coloca no input*/};
    }

    return newInputs;
}

export function validate(inputs: any, name: string) {


    if(!inputs[name].validation === true) /* valida se existe a função validation
    no objeto do input em determinado campo, exmplo price,name etc
    porque essa função validade só funciona se tiver a função validation
    que tem o parâmetro de validação no objeto */ {
        return inputs;
    }

    const isInvalid = !inputs[name].validation(inputs[name].value); /*estamos aplicando
    a função de validation no própio value do input, para saber se o valor que o usuário 
    está digitando invalido*/

    return { ...inputs, [name]: { ...inputs[name], invalid: isInvalid.toString()}}; /*acrescentando um
    campo invalid dentro do input que a função validade vai fazer o check se o value ta ok
    usamos o toString no final, porque no objeto n queremos salvar na forma de booleano o  valo do
    isValid e sim na forma de texto*/



}

export function toDirty(inputs: any, name: string) {

    return {...inputs, [name]: {...inputs[name], dirty: "true"}} /* acrestando atributo dirty*/
}


export function updateAndValidate(inputs: any, name: string, newValue:any) {

    const dataUpdated = update(inputs, name, newValue);
    return  validate(dataUpdated, name);

}

export function dirtAndValidate(inputs: any, name: string) {
    const dataDirty = toDirty(inputs, name);
    return  validate(dataDirty, name);

}