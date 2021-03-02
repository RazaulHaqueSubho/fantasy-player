import React from 'react';

const Summary = (props) => {
const summary = props.summary;
let totalSpend = 0;
for (let i = 0; i < summary.length; i++) {
    const player = summary[i];
    totalSpend = totalSpend + player.price;
    
}
    return (
        <div>
            
            <div>
            <h4>Total Player Selected : {summary.length}</h4>
            <h4>Total Spending : ${totalSpend}</h4>
            </div>

            <div>
            <h4>Players Selected  </h4>
            <ul>
                 {
                summary.map(playername => <li>{playername.name}, Price : ${playername.price} </li>)
                }
               
            </ul>
            
            </div>

        </div>
        
    );
};

export default Summary;