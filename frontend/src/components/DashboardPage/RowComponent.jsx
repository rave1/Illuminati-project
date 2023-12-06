import Cup from '../../images/Cup.png'
export const DashboardRow = (props) => {
    return (
        <tr>
            <th className='text-center px-8 py-4'>
                <label>
                    <input type="checkbox" className="checkbox" />
                </label>
            </th>
            <td className='px-8 py-4'>2137</td>
            <td className='px-8 py-4'>
                <div className="flex items-center gap-3">
                    <div className="avatar">
                        <div className="mask mask-squircle w-12 h-12">
                            <img src={Cup} alt="Avatar Tailwind CSS Component" />
                        </div>
                    </div>
                    <div>
                        <div className="font-bold">Kawa</div>
                        <div className="text-sm opacity-50">lorem</div>
                    </div>
                </div>
            </td>
            <td className='px-8 py-4'>
                Pyszna kawa
                <br />
                {/* <span className="badge badge-ghost badge-sm">Desktop Support Technician</span> */}
            </td>
            <td className='px-8 py-4'>99,99zł</td>
        </tr>
    )
}
export default DashboardRow;
