
import deleteImg from '../../../assets/delete.svg';
import editIm from '../../../assets/edit.svg';
import computerIm from '../../../assets/compute.png';
import './style.css';

export default function ProductListing() {

    return (
        <main>
            <section id="product-listing-section" className="dsc-container">
                <h2 className="dsc-section-title dsc-mb20">Cadastro de produtos</h2>
                <div className="dsc-btn-page-container dsc-mb20">
                    <div className="dsc-btn dsc-btn-white">
                        Novo
                    </div>
                </div>
                <form className="dsc-search-bar">
                    <button type="submit">🔎︎</button>
                    <input type="text" placeholder="Nome do produto" />
                    <button type="reset">🗙</button>
                </form>

                <table className="dsc-table dsc-mb20 dsc-mt20">
                    <thead>
                        <th className="dsc-tb576">Id</th>
                        <th></th>
                        <th className="dsc-tb768">Preço</th>
                        <th className="dsc-text-left">Nome</th>
                        <th></th>
                        <th></th>
                    </thead>
                    <tbody>
                        <tr>
                            <td className="dsc-tb576">341</td>
                            <td>
                                <img
                                    className="dsc-product-listing-image"
                                    src={computerIm}
                                    alt="comput"
                                />
                            </td>
                            <td className="dsc-tb768">R$ 5000,00</td>
                            <td className="dsc-text-left">Computador Gamer XT Plus Ultra</td>
                            <td>
                                <img
                                    className="dsc-product-listing-btn"
                                    src={editIm}
                                    alt="edi"
                                />
                            </td>
                            <td>
                                <img
                                    className="dsc-product-listing-btn"
                                    src={deleteImg}
                                    alt="delet"
                                />
                            </td>
                        </tr>
                        <tr>
                            <td className="dsc-tb576">341</td>
                            <td>
                                <img
                                    className="dsc-product-listing-image"
                                    src={computerIm}
                                    alt="comput"
                                />
                            </td>
                            <td className="dsc-tb768">R$ 5000,00</td>
                            <td className="dsc-text-left">Computador Gamer XT Plus Ultra</td>
                            <td>
                                <img
                                    className="dsc-product-listing-btn"
                                    src={editIm}
                                    alt="edi"
                                />
                            </td>
                            <td>
                                <img
                                    className="dsc-product-listing-btn"
                                    src={deleteImg}
                                    alt="delet"
                                />
                            </td>
                        </tr>
                        <tr>
                            <td className="dsc-tb576">341</td>
                            <td>
                                <img
                                    className="dsc-product-listing-image"
                                    src={computerIm}
                                    alt="comput"
                                />
                            </td>
                            <td className="dsc-tb768">R$ 5000,00</td>
                            <td className="dsc-text-left">Computador Gamer XT Plus Ultra</td>
                            <td>
                                <img
                                    className="dsc-product-listing-btn"
                                    src={editIm}
                                    alt="edi"
                                />
                            </td>
                            <td>
                                <img
                                    className="dsc-product-listing-btn"
                                    src={deleteImg}
                                    alt="delet"
                                />
                            </td>
                        </tr>
                 
                    <tr>
                        <td className="dsc-tb576">341</td>
                        <td>
                            <img
                                className="dsc-product-listing-image"
                                src={computerIm}
                                alt="comput"
                            />
                        </td>
                        <td className="dsc-tb768">R$ 5000,00</td>
                        <td className="dsc-text-left">Computador Gamer XT Plus Ultra</td>
                        <td>
                            <img
                                className="dsc-product-listing-btn"
                                src={editIm}
                                alt="edi"
                            />
                        </td>
                        <td>
                            <img
                                className="dsc-product-listing-btn"
                                src={deleteImg}
                                alt="delet"
                            />
                        </td>
                    </tr>
                    <tr>
                        <td className="dsc-tb576">341</td>
                        <td>
                            <img
                                className="dsc-product-listing-image"
                                src={computerIm}
                                alt="comput"
                            />
                        </td>
                        <td className="dsc-tb768">R$ 5000,00</td>
                        <td className="dsc-text-left">Computador Gamer XT Plus Ultra</td>
                        <td>
                            <img
                                className="dsc-product-listing-btn"
                                src={editIm}
                                alt="edi"
                            />
                        </td>
                        <td>
                            <img
                                className="dsc-product-listing-btn"
                                src={deleteImg}
                                alt="delet"
                            />
                        </td>
                    </tr>
                    <tr>
                        <td className="dsc-tb576">341</td>
                        <td>
                            <img
                                className="dsc-product-listing-image"
                                src={computerIm}
                                alt="comput"
                            />
                        </td>
                        <td className="dsc-tb768">R$ 5000,00</td>
                        <td className="dsc-text-left">Computador Gamer XT Plus Ultra</td>
                        <td>
                            <img
                                className="dsc-product-listing-btn"
                                src={editIm}
                                alt="edi"
                            />
                        </td>
                        <td>
                            <img
                                className="dsc-product-listing-btn"
                                src={deleteImg}
                                alt="delet"
                            />
                        </td>
                    </tr>
                    <tr>
                        <td className="dsc-tb576">341</td>
                        <td>
                            <img
                                className="dsc-product-listing-image"
                                src={computerIm}
                                alt="comput"
                            />
                        </td>
                        <td className="dsc-tb768">R$ 5000,00</td>
                        <td className="dsc-text-left">Computador Gamer XT Plus Ultra</td>
                        <td>
                            <img
                                className="dsc-product-listing-btn"
                                src={editIm}
                                alt="edi"
                            />
                        </td>
                        <td>
                            <img
                                className="dsc-product-listing-btn"
                                src={deleteImg}
                                alt="delet"
                            />
                        </td>
                    </tr>
                    <tr>
                        <td className="dsc-tb576">341</td>
                        <td>
                            <img
                                className="dsc-product-listing-image"
                                src={computerIm}
                                alt="comput"
                            />
                        </td>
                        <td className="dsc-tb768">R$ 5000,00</td>
                        <td className="dsc-text-left">Computador Gamer XT Plus Ultra</td>
                        <td>
                            <img
                                className="dsc-product-listing-btn"
                                src={editIm}
                                alt="edi"
                            />
                        </td>
                        <td>
                            <img
                                className="dsc-product-listing-btn"
                                src={deleteImg}
                                alt="delet"
                            />
                        </td>
                    </tr>
                    <tr>
                        <td className="dsc-tb576">341</td>
                        <td>
                            <img
                                className="dsc-product-listing-image"
                                src={computerIm}
                                alt="comput"
                            />
                        </td>
                        <td className="dsc-tb768">R$ 5000,00</td>
                        <td className="dsc-text-left">Computador Gamer XT Plus Ultra</td>
                        <td>
                            <img
                                className="dsc-product-listing-btn"
                                src={editIm}
                                alt="edi"
                            />
                        </td>
                        <td>
                            <img
                                className="dsc-product-listing-btn"
                                src={deleteImg}
                                alt="delet"
                            />
                        </td>
                    </tr>
                    <tr>
                        <td className="dsc-tb576">341</td>
                        <td>
                            <img
                                className="dsc-product-listing-image"
                                src={computerIm}
                                alt="comput"
                            />
                        </td>
                        <td className="dsc-tb768">R$ 5000,00</td>
                        <td className="dsc-text-left">Computador Gamer XT Plus Ultra</td>
                        <td>
                            <img
                                className="dsc-product-listing-btn"
                                src={editIm}
                                alt="edi"
                            />
                        </td>
                        <td>
                            <img
                                className="dsc-product-listing-btn"
                                src={deleteImg}
                                alt="delet"
                            />
                        </td>
                    </tr>
                    <tr>
                        <td className="dsc-tb576">341</td>
                        <td>
                            <img
                                className="dsc-product-listing-image"
                                src={computerIm}
                                alt="comput"
                            />
                        </td>
                        <td className="dsc-tb768">R$ 5000,00</td>
                        <td className="dsc-text-left">Computador Gamer XT Plus Ultra</td>
                        <td>
                            <img
                                className="dsc-product-listing-btn"
                                src={editIm}
                                alt="edi"
                            />
                        </td>
                        <td>
                            <img
                                className="dsc-product-listing-btn"
                                src={deleteImg}
                                alt="delet"
                            />
                        </td>
                    </tr>
                    <tr>
                        <td className="dsc-tb576">341</td>
                        <td>
                            <img
                                className="dsc-product-listing-image"
                                src={computerIm}
                                alt="comput"
                            />
                        </td>
                        <td className="dsc-tb768">R$ 5000,00</td>
                        <td className="dsc-text-left">Computador Gamer XT Plus Ultra</td>
                        <td>
                            <img
                                className="dsc-product-listing-btn"
                                src={editIm}
                                alt="edi"
                            />
                        </td>
                        <td>
                            <img
                                className="dsc-product-listing-btn"
                                src={deleteImg}
                                alt="delet"
                            />
                        </td>
                        
                    </tr>
                    </tbody>
                </table>
                <div className="dsc-btn-next-page">Carregar mais</div>
            </section>
        </main>
    );
} 