import React from 'react'
import { PieChart , Pie, Tooltip, ResponsiveContainer} from 'recharts'
const AdminDashBoard = ({posts,users}) => {

    const data = [
        {
            name: 'users', value: users
        },
        {
            name: 'posts', value: posts
        }
    ]
    return (
        <div>
            
            
                <PieChart width={400} height={400}>
                    <Pie
                        dataKey="value"
                        isAnimationActive={false}
                        data={data}
                        cx="50%"
                        cy="40%"
                        outerRadius={120 }
                        fill="#8884d8"
                        label
                    />
                    <Tooltip />
                </PieChart>
           
        </div>
    )
}

export default AdminDashBoard