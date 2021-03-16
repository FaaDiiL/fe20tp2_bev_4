import axios from 'axios';
import { useEffect, useState } from 'react';
import { Line } from 'react-chartjs-2';

const Chart = () => {

  const [chartData, setChartData] = useState([])
  const [apiBase, setApiBase] = useState("&base=EUR")
  const [sekChart, setSekChart] = useState([])
  const [newData, setNewData] = useState([])
  

  const options = {
    method: 'GET',
    url: 'https://fixer-fixer-currency-v1.p.rapidapi.com/2013-12-24',
    params: {base: 'USD', symbols: 'USD,CAD,EUR'},
    headers: {
      'x-rapidapi-key': '125c7009c6mshbb789189dfc362bp1cee93jsn5a077262afba',
      'x-rapidapi-host': 'fixer-fixer-currency-v1.p.rapidapi.com'
    }
  };

  const API_URL = 'https://api.exchangerate.host/timeseries?symbols=USD&start_date=2020-01-01&end_date=2020-07-01'

  useEffect(() => {
    axios.request(API_URL+apiBase)
    .then(response => setChartData([response.data.rates]))
    .catch(error => console.error(error));
  },[]);
  
  useEffect(()=>{
    setNewData(chartData.reduce((prev, next)=>{
      // console.log(Object.keys(next[0]).length)
      // let dates = Object.entries(next).filter(dates=>dates[8]==0 && dates[9]==1)
      let dates = Object.entries(next).filter(data=>data[0][8].includes('0') && data[0][9].includes('1') )
      // let rates = Object.values(next)
      console.log(dates)
      setSekChart(dates)
      // console.log(rates)
      // if(dates[8] == 0 && dates[9] == 1){

      // }
      // prev[dates] = rates
      return prev[next]
    },{}))

  },[chartData])


  // chartData.map(data =>{ return data.rates }).map(data=>{ return data })
    
    // console.log()

  const rateData = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'June', 'July', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec'],
    datasets: [
      {
        label: 'SEK / USD',
        backgroundColor: '#c229294b',
        borderColor: '#c22929',
        borderWidth: 2,
        // data: [12, 63, 32, 23, 63, 43, 40, 59, 80, 81, 56, 43,30]
        data: sekChart.length>0?sekChart:[12, 63, 32, 23, 63, 43, 40, 59, 80, 81, 56, 43,30]
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