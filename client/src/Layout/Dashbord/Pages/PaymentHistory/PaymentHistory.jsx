import { useQuery } from "@tanstack/react-query";
import SectionHeading from "../../../../Components/SectionHeading/SectionHeading"
import useAuth from "../../../../hooks/useAuth"
import useAxiosSecure from "../../../../hooks/useAxiosSecure";

const PaymentHistory = () => {
    const { user } = useAuth();
    const axiosSecure = useAxiosSecure();

    const { data: payments = [] } = useQuery({
        queryKey: ['payments', user?.email],
        queryFn: async () => {
            const res = await axiosSecure.get(`/payments/${user?.email}`)
            return res.data
        }
    });

    return (
        <div>
            <SectionHeading subHeading={'At a Glance!'} heading={'payment history'} />

            <div className="m-3 p-4 bg-white rounded-lg shadow border">
                {/* Heading */}
                <div className="flex justify-between flex-wrap">
                    <h1 className="text-2xl font-semibold">Total Payment: {payments?.length}</h1>
                </div>
                {/* Table */}
                <table className="w-full text-sm text-left rtl:text-right text-gray-500 my-5">
                    <thead className="text-white uppercase bg-[#D1A054]">
                        <tr>
                            <th class="p-4">
                                No
                            </th>
                            <th class="px-6 py-3">
                                Email
                            </th>
                            <th class="px-6 py-3">
                                Transaction Id
                            </th>
                            <th class="px-6 py-3">
                                Total Price
                            </th>
                            <th class="px-6 py-3">
                                Payment Date
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {payments.map((item, i) => <tr key={item._id} class="bg-white border-b  hover:bg-gray-50">
                            <td className="w-4 p-4">
                                <div className="flex items-center">
                                    {i + 1}
                                </div>
                            </td>
                            <th scope="row" className="flex items-center px-6 py-4 text-gray-900 whitespace-nowrap">
                                <p>{item?.email}</p>
                            </th>
                            <td className="px-6 py-4">
                                <h1>{item?.transactionId}</h1>
                            </td>
                            <td className="px-6 py-4">
                                <div class="flex items-center">
                                    <p>${item?.price}</p>
                                </div>
                            </td>
                            <td className="px-6 py-4">
                                <p>{item?.date}</p>
                            </td>
                        </tr>
                        )}
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default PaymentHistory