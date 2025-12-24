import React from 'react'
import Table from 'react-bootstrap/Table';

const ActivityStatement = () => {
    return (
        <div className='activity-statement p-40'>
            <div className='container'>
                <div className='bg-white p-4'>
                    <div className='mb-3'>
                        <div className='d-md-flex'>
                            <div className='me-auto'>
                                <div className="title font-24"><strong>LMS Punters Club</strong></div>
                                <div className="subtitle">NT Licensed Sports Bookmaker</div>
                            </div>
                            <div className='ms-auto'>
                                <div className='d-flex gap-2'>
                                    <button className='btn-theme btn-yellow p-1 px-2 font-16'>Download PDF</button>
                                </div>

                            </div>
                        </div>
                    </div>
                    <div className='card-activity-statement'>
                        <h4>ACTIVITY STATEMENT</h4>
                        <Table responsive bordered hover size="sm">
                            <tbody>
                                <tr>
                                    <td className='bg-color'>Customer:</td>
                                    <td>Kelly Sample</td>
                                </tr>
                                <tr>
                                    <td className='bg-color'>Account ID:</td>
                                    <td>LMS123456</td>
                                </tr>
                                <tr>
                                    <td className='bg-color'>Statement Period:</td>
                                    <td>1–31 March 2026</td>
                                </tr>
                                <tr>
                                    <td className='bg-color'>Generated:</td>
                                    <td>7 April 2026</td>
                                </tr>
                                <tr>
                                    <td className='bg-color'>Statement Type:</td>
                                    <td>Monthly Activity Statement</td>
                                </tr>
                            </tbody>
                        </Table>
                        <h4>ACCOUNT SUMMARY</h4>
                        <Table responsive bordered size="sm" className="mb-4">
                            <tbody>
                                <tr>
                                    <th className='bg-color'>Total Deposits</th>
                                    <th className='bg-color text-end' >$1,000.00</th>
                                </tr>
                                <tr>
                                    <td>Total Withdrawals</td>
                                    <td className='text-end'>$0.00</td>
                                </tr>
                                <tr>
                                    <td>Total Entry Fees</td>
                                    <td className='text-end' >$1,000.00</td>
                                </tr>
                                <tr>
                                    <td>Total Winnings</td>
                                    <td className='text-end' >$2,500.00</td>
                                </tr>
                                <tr>
                                    <td className="fw-bold">Net Win / Loss</td>
                                    <td className="fw-bold text-end">
                                        +$1,390.00
                                    </td>
                                </tr>
                            </tbody>
                        </Table>
                        <h4>TRANSACTION DETAILS</h4>
                        <Table responsive bordered hover size="sm">
                            <thead>
                                <tr>
                                    <th className='bg-color'>Date</th>
                                    <th className='bg-color'>Time</th>
                                    <th className='bg-color'>Description</th>
                                    <th className='bg-color text-end'>Amount</th>
                                    <th className='bg-color text-end'>Balance</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>05/03/26</td>
                                    <td>14:22</td>
                                    <td>Deposit</td>
                                    <td className="text-end">+$1,000.00</td>
                                    <td className="text-end">$1,000.00</td>
                                </tr>
                                <tr>
                                    <td>05/03/26</td>
                                    <td>14:23</td>
                                    <td>Entry Fee – NRL LMS Comp</td>
                                    <td className="text-end text-danger">-$1,000.00</td>
                                    <td className="text-end">$0.00</td>
                                </tr>
                                <tr>
                                    <td>05/03/26</td>
                                    <td>14:23</td>
                                    <td>Service Fee (10%)</td>
                                    <td className="text-end text-danger">-$100.00</td>
                                    <td className="text-end">-$100.00</td>
                                </tr>
                                <tr>
                                    <td>05/03/26</td>
                                    <td>14:23</td>
                                    <td>GST on Service Fee (10%)</td>
                                    <td className="text-end text-danger">-$10.00</td>
                                    <td className="text-end">-$110.00</td>
                                </tr>
                                <tr>
                                    <td>20/03/26</td>
                                    <td>09:10</td>
                                    <td>Prize Winnings</td>
                                    <td className="text-end">+$2,500.00</td>
                                    <td className="text-end">$2,390.00</td>
                                </tr>
                            </tbody>
                        </Table>
                        <p> Activity statements are provided in accordance with Northern Territory wagering
          requirements. Entry fees are held in a segregated customer funds account.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ActivityStatement
