import './style.css';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { OrderDTO } from '../../../models/order';
import * as ordeService from '../../../services/order-service'
import { formatDate } from '../../../services/product-services';
import moment from 'moment'; // Importe moment.js
import { formatDateToFilter } from '../../../services/product-services';

type QueryParams = {
    page: number
}





export default function OrderHistory() {

    const navigate = useNavigate();



    const [order, setOrder] = useState<OrderDTO[]>([]);
    const [filterDate, setFilterDate] = useState<string>('');

    useEffect(() => {
        ordeService.findAll().then((response: any) => {
            const sortedOrders = response.data.sort((a: OrderDTO, b: OrderDTO) => {
                return moment(b.moment).valueOf() - moment(a.moment).valueOf(); // Ordena com base no valor da data
            });
            setOrder(sortedOrders);
        });
    }, []);


    useEffect(() => {
        ordeService.findAll()
            .then((response: any) => {
                let filteredOrders = response.data;

        
        
                if (filterDate) {
                    filteredOrders = filteredOrders.filter((order: OrderDTO) => {
                        return formatDateToFilter(order.moment) === filterDate;
                    });
                }
    
                const sortedOrders = filteredOrders.sort((a: OrderDTO, b: OrderDTO) => {
                    return moment(b.moment).valueOf() - moment(a.moment).valueOf();
                });
                setOrder(sortedOrders);
            });
        }, [filterDate]);

    function handleFilterDateChange (event: any)  {
        event.preventDefault();
        setFilterDate(event.target.value);
    };

    function handleCleanFilter (event:any) {
        event.preventDefault();
        setFilterDate('');
    }

    return (
        <main>
            <section id="product-listing-section" className="dsc-container">

                <h2 className="dsc-section-title dsc-mb20">Histórico de vendas</h2>
                <div className="dsc-btn-page-container dsc-mb20">
                    <input type="date" value={filterDate} onChange={handleFilterDateChange} />
                    <button onClick={handleCleanFilter}>Limpar Filtro</button>

                </div>
                <table className="dsc-table dsc-mb20 dsc-mt20">
                    <thead>
                        <tr>
                            <th className="dsc-tb576">Número da venda</th>
                            <th>Nome da Produto</th>
                            <th className="dsc-tb768">Data</th>
                            <th className="dsc-tb768">Quantidade de produtos</th>
                            <th className="dsc-tb768">SubTotal</th>
                            <th className="dsc-text-right">Total</th>

                        </tr>
                    </thead>
                    <tbody>
                        {order.map((order) =>
                            order.items.map((item) => (
                                <tr key={`${order.id}-${item.productId}`}>
                                    <td className="dsc-tb576">{order.id}</td>
                                    <td className="dsc-tb768">{item.name}</td>
                                    <td className="dsc-tb768">{moment(order.moment).format('DD/MM/YYYY')}</td>
                                    <td className="dsc-tb768">{item.quantity}</td>
                                    <td className="dsc-tb768">R$ {item.subTotal.toFixed(2)}</td>
                                    <td className="dsc-tb768">R$ {order.total.toFixed(2)}</td>
                                </tr>))
                        )}
                    </tbody>
                </table>
                {

                }
            </section>




        </main>
    );
} 