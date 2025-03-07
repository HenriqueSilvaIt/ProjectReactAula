import './style.css';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import FormInput from '../../../components/FormInput';
import * as forms from '../../../utils/form';
import * as productService from '../../../services/product-services';
import * as categoryService from '../../../services/category-service';
import FormTextArea from '../../../components/FormTextArea';
import Select from 'react-select';
/*o import é só import Select from 'react-select';, se você importa automatico vai trazer errado
 tem que fica igual no import da documentação ficial*/
import { CategoryDTO } from '../../../models/category';
import FormSelect from '../../../components/FormSelect';
import { selectStyles } from '../../../utils/select';


export default function ProductForm() {

    const params = useParams(); /* para colocara rota ul */
             
    const navigate = useNavigate();

    const isEditing = params.productId !== 'create'; /* se a rota for dirente de create significa que estou editando um
    produto e não criando um novo, se for create está editando  */

    const [formData, setFormData] = useState<any>({ /* any é para o type script
        n reclemar dos valores, para objeto ser um objeto livre e ter qualquer atributo dentro dele
        de qualquer tipo */
        /* os objetoa abaixo, vai ser igual o objeto do product by id do postman*/
        name: {
            value: "",
            id: "name",
            name: "name",
            type: "text",
            placeholder: "Nome",
            validation: function (value: string) {
                return /^.{3,80}$/.test(value);
            },
            message: "Favor informar um nome de 3 a 80 caracteres"
        },
        price: {
            value: "",
            id: "price",
            name: "price",
            type: "number", /* para aceitar somente númeroes*/
            placeholder: "Preço",
            validation: function (value: any) {
                return Number(value)/*v convertido para Number*/ > 0;
            },
            /*messagem de erro caso essa função de falso*/
            message: "Favor informar um valor positivo"
        },
        imgUrl: {
            value: "",
            id: "imgUrl",
            name: "imgUrl",
            type: "text",
            placeholder: "Imagem",
        },
        description: {

            value: "",
            id: "description",
            name: "description",
            type: "text",
            placeholder: "Descrição",
            validation: function (value: string) {
                return /^.{10,}$/.test(value); /* expressão regez que pega o mínimo 10 caractere */
            },
            message: "Favor informar um nome de 3 a 80 caracteres"

        },
        categories: {
            value: [], /* valor inicial lista vazia, e depois o usuário 
            vai escolher uma ou mais categoria*/
            id: "categories",
            name: "categories",
            /*type n precisa porque já é um select do react*/
            placeholder: "Categorias",
            validation: function(value: CategoryDTO[] /* do tipo lista de categoria */) {
                return value.length > 0;   /* tem que ter pelo menos uma categoria*/
            },
            message: "Escolha ao menos uma categoria",
        }
    });


    /*useEffect para carregar as categoria*/

    useEffect(() => {
        categoryService.findAllRequest() /* para buscar a lita de categoria do bakcend*/
            .then(response => {
                setCategories(response.data) /* colocando as categorias
                no useStat*/
            })
    }, []);


    useEffect(() => {

        if (isEditing)/* se for verdade o iediting quer
        dizer que a rota n é create, é de edição de produto */ {
            productService.findById(Number(params.productId)) /*number para converter para número
            se n vai reclamara*/
                .then(response => {
                    console.log(response.data); /* vai retornar o produto(objeto)
                    ou seja se for uma rota diferente de create, ele vai trazer o formulário
                    já com os dados do produto preenchido porque é editação*/
                    const newFormData = forms.updateAll(formData, response.data)
                    setFormData(newFormData); /*deixando os campos fo formulário já preenchido -  gerando
                    um novo objeto e no campo value vai colocar o valor que estava no banco de dados */
                })
        }
    }, [])




    function handleInputChange(event: any) {


        /* chamando função para atualizar oque o usuário ta escrevendo no input

           const dataUpdate = forms.update(formData/*objeto já com as informações do input , event.target.name/*campo da cainha
            do input que estou mexendo, event.target.value/*valor que
            digitar); /* destruturamos
        o formData para aproveitar o que tinha nele e onde tem o cmapo com o nome name
        vamos colocar o novo valor value que  está digitado 
        
        Agora novo formulário temos que preservar todo objeto, então vamos pegar tudo que já tinha no objeto, porém no campo
   value, vamos colocar o value criado na função event.target.valu*/


        /*chamando função que valida se o campo foi preenchido corretamente*/

        ; /* 1º argumento
             oque nós digitamos no campo, 2º argumento o nome do campo (exemplo price, name et)*/

        setFormData(forms.updateAndValidate(formData, event.target.name, event.target.value)); /* recebe oque tá sendo  digitado no input
            que é q primeira função dataUpdate e valdia se for executado corretamente
            que é e a segunda função dataValited  (dataUpdate já está dentro da dataValited),
            por que aqui só colocamos  dataValited*/
    }

    function handleTurnDirty(name: string) {
        setFormData(forms.dirtAndValidate(formData, name)); /* agora 
            com função dirty and validate, ele fica vermelho */
    } 

    const [categories, setCategories] = useState<CategoryDTO>();

    const options = [
        {value: 'chocolate', label: 'Chocolate' },
        {value: 'strawberry', label: 'Strawberry' },
        {value: 'vanilla', label: 'Vanilla' }
        ]

    /*salvar produto  editado ou craido no formulário */
    function handleSubmit(event: any) {
       
        event.preventDefault();

        const formDataValidated = forms.dirtyAndValidateAll(formData);
        if (forms.hasAnyInvalid(formDataValidated)) { /* se tiver algum invalido
            deppois de validar o preenchimento de todos os campos*/
            setFormData(formDataValidated);
           
            return; /* esse return vai corta e não vai deixa salvar*/
      
        }
       
        const requestBody = forms.toValues(formData);
        if (isEditing) {
            requestBody.id = params.productId; /* vamos setar o Id
            porque estamos editando o produto, caso n tiver editando n
            colocamos o id porque ele pega automatico do banco */
        }

        const request = isEditing
         ?   productService.updateRequest(requestBody) /*editar produto */
         :   productService.insertRequest(requestBody) /* salvar novo produto */

         request 
         .then(() => {
            navigate("/admin/products");
        })


    
       /* console.log(forms.toValues(formData)); to values 
        converte todo objeto  do formData somente para os dados do formulário 
        para enviarmos para nosso backend */

    }

    return (
        <main>
            <section id="product-form-section" className="dsc-container">
                <div className="dsc-product-form-container">
                    <form className="dsc-card dsc-form" onSubmit={handleSubmit}>
                        <h2>Dados do produto</h2>
                        <div className="dsc-form-controls-container">
                            <div>
                                <FormInput {...formData.name}
                                    className="dsc-form-control"
                                    onTurnDirty={handleTurnDirty}
                                    onChange={handleInputChange}
                                />
                                <div className="dsc-form-error">{formData.name.message}</div>
                            </div>
                            <div>
                                <FormInput {...formData.price}
                                    className="dsc-form-control"
                                    onChange={handleInputChange}
                                    onTurnDirty={handleTurnDirty}
                                />
                                <div className="dsc-form-error">{formData.price.message}</div>
                            </div>
                            <div>
                                <FormInput {...formData.imgUrl}
                                    className="dsc-form-control"
                                    onChange={handleInputChange}
                                    onTurnDirty={handleTurnDirty}
                                />
                            </div>
                            <div>
                                <FormSelect /*Select, porém customizado em um componente ta sendo chamado lá*/ 
                                {...formData.categories} /* vamos pegar tudo que tinha já
                                no formData do categories, exceto o validate que estamos
                                desistruturando excluindo lá no Componente FormSelect*/
                                styles={selectStyles} /* pegando do utl select style*/
                                className="dsc-form-control dsc-form-select-container"
                                options={categories} /* passando a lista de categorias do backendo usando o usaState categorie  */
                                onChange={(obj :any) => {
                                    const newFormData = forms.updateAndValidate(formData, "categories", obj); /* atualizar
                                    o formulário colocando obj(que é a lista do  id e categoria selecionada) */
                                    setFormData(newFormData); /* vai colocar
                                    o valor que selecionarmos no formulário no value do categories*/
                                }}
                                onTurnDirty={handleTurnDirty} /*turn dirty é para
                                ficar vermelho caso o usuário n termine de escrever o que tem que ser preenchido
                                e clique no próximo campo */
                                isMulti
                                getOptionLabel={(obj: any) => obj.name} /* o rótulo(labl) vai ser o nome */
                                getOptionValue={(obj: any) => obj.id} /* e o valor vai ser o id  da categoria*//>
                                      <div className="dsc-form-error">{formData.categories.message}</div>
                            </div>
                      
                            <div>
                                <FormTextArea {...formData.description}
                                    className="dsc-form-control dsc-textarea"
                                    onTurnDirty={handleTurnDirty}
                                    onChange={handleInputChange}
                                />
                                <div className="dsc-form-error">{formData.description.message}</div>
                            </div>
                        </div>

                        <div className="dsc-product-form-buttons">
                            <Link to="/admin/products">
                                <button type="reset" className="dsc-btn dsc-btn-white">Cancelar</button>
                            </Link>
                            <button type="submit" className="dsc-btn dsc-btn-blue">Salvar</button>
                        </div>
                    </form>
                </div>
            </section>
        </main>


    )
} 