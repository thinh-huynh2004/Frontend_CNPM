import './history_pay.css'
import React, { useState } from 'react';
import BillCompleted from './bill_completed';
import BillInProcess from './bill_inprocess';
import { paymentData } from './data';

function BoxContainHistoryPay() {
    const [selectedItem, setSelectedItem] = useState(null);

    const toggleBill = (item) => {
        setSelectedItem(item);
    };

    const closeBill = () => {
        setSelectedItem(null);
    };

    const renderHistoryRows = () => {
        return paymentData.map((item, index) => (
            <tr className='history_pay__table_row' key={index}>
                <td className='history_pay__table_column1'>
                    <p>{item.amount}_{item.createDate}_{item.time}_{item.paymentGateway}</p>
                </td>
                <td className='history_pay__table_column2'>
                    <p>{item.status}</p>
                </td>
                <td className="history_pay__table_column3">
                    <p onClick={() => toggleBill(item)}>{item.detail}</p>
                </td>
            </tr>
        ));
    };

    const renderBillModal = () => {
        if (!selectedItem) return null;
        return selectedItem.status === 'Đã hoàn thành' ? (
            <BillCompleted onClose={closeBill} item={selectedItem} />
        ) : (
            <BillInProcess onClose={closeBill} item={selectedItem} />
        );
    };

    return (
        <div className="full_box_history_pay">
            <table className="history_pay__table">
                <thead>
                    <tr className='history_pay__table_row'>
                        <th className='history_pay__table_column1'>
                            Lịch sử thanh toán
                        </th>
                        <th className='history_pay__table_column2'>
                            Trạng thái
                        </th>
                        <th className='history_pay__table_column3'>
                            Hóa đơn
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {renderHistoryRows()}
                </tbody>
            </table>
            <div className={`modal ${selectedItem ? 'modal--visible' : 'modal--hidden'}`}>
                {renderBillModal()}
            </div>
        </div>
    );
}

export default BoxContainHistoryPay