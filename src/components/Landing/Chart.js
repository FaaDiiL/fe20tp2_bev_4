import {useEffect, useState} from 'react';
import {Line} from 'react-chartjs-2';
import axios from 'axios';





const Chart = () => {

  const [chartData, setChartData] = useState([])

  const options = {
    method: 'GET',
    url: 'https://fixer-fixer-currency-v1.p.rapidapi.com/2013-12-24',
    params: {base: 'USD', symbols: 'USD,CAD,EUR'},
    headers: {
      'x-rapidapi-key': '125c7009c6mshbb789189dfc362bp1cee93jsn5a077262afba',
      'x-rapidapi-host': 'fixer-fixer-currency-v1.p.rapidapi.com'
    }
  };

  const API_URL = 'http://data.fixer.io/api/2004-08-10?access_key=d11513f2fab75e1e6957748307f9f943&format=1'

useEffect(() => {
  axios.request(API_URL)
  .then(response => console.log(response.data))
  .catch(error => console.error(error));
},[]);

// useEffect(() => {
//   console.log("från onurs fetch")
//   fetch("http://data.fixer.io/api/2013-12-24?access_key=fd4a8fdd5b24307002c1bea2c63f14f0&GBP")
//   .then(response => response.json())
//   .then(data => console.log(data))
// }, [])

  const rateData = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'June', 'July', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec'],
    datasets: [
      {
        label: 'SEK / EUR',
        backgroundColor: '#ecbcfd5b',
        borderColor: '#571d85',
        borderWidth: 2,
        data: [65, 59, 80, 81, 56, 59, 30, 50, 120, 23, 12, 80, 81, 56, 43,0]
      },
      {
        label: 'SEK / USD',
        backgroundColor: '#c229294b',
        borderColor: '#c22929',
        borderWidth: 2,
        data: [12, 63, 32, 23, 63, 43, 40, 59, 80, 81, 56, 43,30]
      }
    ]
  }
  
    return (
      <div>
        <Line
            data={rateData}
            width={600}
            height={400}
            
            options={{
                  title:{     
                        display:true,
                        text:'Fluctuations over time',
                        fontSize:14
                  },
                  legend:{
                        display:true,
                        position:'top',
                        
                  } 
                
          }}
        />
      </div>
    );
  }

export default Chart