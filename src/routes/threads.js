import { useEffect, useState } from 'react';
import {Link } from 'react-router-dom';

function Threads() {
  const [threads, setThreads] = useState([]);
  const [addThread, setAddThread] = useState('')

  useEffect(() => {
    const fetchThreads = async () => {
      const res = await fetch('https://2y6i6tqn41.execute-api.ap-northeast-1.amazonaws.com/threads');
      const data = await res.json();
      setThreads(data);
    };
    fetchThreads();
  },[]);
  
  const reDisplay =() => {
    fetch('https://2y6i6tqn41.execute-api.ap-northeast-1.amazonaws.com/threads')
    .then(res => res.json())
    .then(data => {
      setThreads(data);
      console.log(data);
    })
    .catch(error => {
      console.log(error)
    })
  }
  const addThreadTitle = () => {
    const data = {title : addThread};
    fetch('https://2y6i6tqn41.execute-api.ap-northeast-1.amazonaws.com/threads',{
      method: 'POST',
      headers:{
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    })
    .then(res => {
      res.json()
      reDisplay()
    })
    .then(data => {
      console.log('Succes:',data)
    })
    .catch(error => {
      console.log('Error', error)
    })
  }
  const handleChange = function(e){
    setAddThread(e.target.value)
  }
  

  return(
    <div>
      <ul>
        {threads.map((threads)=> (
          <li key={threads.id}>
            <Link to={`/threadindex/${threads.id}`}>
              {threads.title}
            </Link>
          </li>
        ))}
      </ul>
      <h4>新規追加</h4>
      <input onChange={handleChange} type="text" />
      <button onClick={addThreadTitle}>送信</button>
    </div>
    
  )
}

export default Threads;