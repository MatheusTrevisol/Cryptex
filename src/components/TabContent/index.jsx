import { Container } from './styles';

import { useState } from 'react';

import { Button } from '../Button';

import priceUp from '../../assets/chart-1.svg'
import priceDown from '../../assets/chart-2.svg'

import { AiOutlineStar } from 'react-icons/ai'

export function TabContent({ cryptoCoins }) {
  const [indexItem, setIndexItem] = useState(1);
  
  return (
    <Container>
      <thead>
        <tr className="table-row-heading">
          <th className="table-heading"></th>
          <th className="table-heading">#</th>
          <th className="table-heading">Name</th>
          <th className="table-heading">Current Price</th>
          <th className="table-heading">ATL</th>
          <th className="table-heading">Market Cap</th>
          <th className="table-heading">Last 24h</th>
          <th className="table-heading"></th>
        </tr>
      </thead>
      <tbody>
        {
          cryptoCoins &&
          cryptoCoins.map((item) => (
            <tr key={String(item.id)} className="table-row-data">
              <td className="table-data icon"><AiOutlineStar /></td>
              <td className="table-data">{item.market_cap_rank}</td>
              <td className="table-data">
                <div className="name-wrapper">
                  <img src={item.image} alt="" />
                  <h4>{item.name}<span>{item.symbol.toUpperCase()}</span></h4>
                </div>
              </td>
              <td className="table-data">$ {item.current_price.toLocaleString()}</td>
              <td className="table-data">$ {item.atl.toFixed(2)}</td>
              <td className="table-data">$ {item.market_cap.toLocaleString()}</td>
              <td className="table-data">
                <img src={item.price_change_percentage_24h > 0 ? priceUp : priceDown} alt="" />
              </td>
              <td className="table-data">
                <Button title="Trade" />
              </td>
            </tr>
          )
        )
      }       
      </tbody>
    </Container>
  );
};