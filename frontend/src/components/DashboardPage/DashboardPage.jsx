import Cup from '../../images/Cup.png'
import { useAuth } from '../../context/useAuth';
import DashboardRow from './RowComponent';
const OrderTable = () => {
    return (
    <div className='h-screen flex items-center justify-center mt-80'>

        <div className='bg-white w-[1200px] py-8  mx-auto- flex justify-center drop-shadow-2xl rounded-md'>
            <div className="flex flex-col flex-wrap gap-10 items-center justify-center">
                <h1 className='text-black text-3xl self-start'>Zamówienia</h1>
                <table className="rounded-md bg-white text-black drop-shadow-lg overflow-hidden">
                    {/* head */}
                    <thead className=''>
                        <tr>
                            <th className='bg-yellow border text-left px-8 py-4'>
                                <span className='text-black text-md self-start'>#2137</span>
                            </th>
                            <th className='bg-yellow border text-left px-8 py-4'>Ilość</th>
                            <th className='bg-yellow border text-left px-8 py-4'>Nazwa</th>
                            <th className='bg-yellow border text-left px-8 py-4'>Opis</th>
                            <th className='bg-yellow border text-left px-8 py-4'>Cena</th>
                        </tr>
                    </thead>
                    <tbody>
                        <DashboardRow/>
                        <DashboardRow/>
                        <DashboardRow/>
                        <DashboardRow/>
                    </tbody>
                </table>
                <table className="rounded-md bg-white text-black drop-shadow-lg overflow-hidden">
                    {/* head */}
                    <thead className=''>
                        <tr>
                        <th className='bg-yellow border text-left px-8 py-4'>
                                <span className='text-black text-md self-start'>#2137</span>
                            </th>
                            <th className='bg-yellow border text-left px-8 py-4'>Ilość</th>
                            <th className='bg-yellow border text-left px-8 py-4'>Nazwa</th>
                            <th className='bg-yellow border text-left px-8 py-4'>Opis</th>
                            <th className='bg-yellow border text-left px-8 py-4'>Cena</th>
                        </tr>
                    </thead>
                    <tbody>
                        <DashboardRow/>
                        <DashboardRow/>
                        <DashboardRow/>
                        <DashboardRow/>
                    </tbody>
                </table>
            <div className="join rounded-md overflow-hidden">
                <button className="join-item btn text-beaver px-2">1</button>
                <button className="join-item btn text-beaver px-2 ">2</button>
                <button className="join-item btn text-beaver px-2 btn-disabled">...</button>
                <button className="join-item btn text-beaver px-2 ">99</button>
                <button className="join-item btn text-beaver px-2">100</button>
            </div>
            </div>
        </div>
    </div>
    )
}
export default OrderTable;
