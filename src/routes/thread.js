import {useEffect, useState} from 'react';
import { json, useParams } from 'react-router-dom';

function Thread(){
  const { threadId } = useParams();
  const [thread, setThread] = useState([]);
  const [addThread, setAddThread] = useState('')

  useEffect(() => {
    const fetchThread = async() => {
      const res = await fetch(`https://2y6i6tqn41.execute-api.ap-northeast-1.amazonaws.com/threads/${threadId}/posts`);
      const data = await res.json();
      //console.log(data)
      console.log(res)
      console.log(data)
      !data.posts ? setThread([]) : setThread(data.posts);
    };
    fetchThread();
  },[threadId]);

  const interThread = thread.map((value) => {
    return (
      <li key={value.id}>{value.post}</li>
    )
  })
  
  const reDisplay =() => {
    fetch(`https://2y6i6tqn41.execute-api.ap-northeast-1.amazonaws.com/threads/${threadId}/posts`)
    .then(res => res.json())
    .then(data => {
      setThread(data.posts);
      console.log(data);
    })
    .catch(error => {
      console.log(error)
    })
  }
  const addThreadTitle = () => {
    const data = {post : addThread};
    fetch(`https://2y6i6tqn41.execute-api.ap-northeast-1.amazonaws.com/threads/${threadId}/posts`,{
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

  return (
    <div>
      <input onChange={handleChange} type="text" />
      <button onClick={addThreadTitle}>送信</button>  
      <h2>スレッド内</h2>
      <ul>
        {interThread}
      </ul>
    </div>
  )
}

export default Thread;