import {useState} from 'react';

function EventComponent() {


  let [name, setName] = useState('');
  let [topic, setTopic] = useState('');

    //이벤트함수의 첫번째 매개변수에는 event객체가 전달됨
    const handleChange = (e) => { 
        setName(e.target.value); //state 체인지
    }


    return (
        <>  
            현재state : {name} <br/>
            이름:<input type="text" name="name" onChange={handleChange} value={name} /><br/>
            메모:<input type="text" name="topic" onChange={e => setTopic(e.target.value)} value={topic}/><br/>

            <button type="button">클릭</button>
        </>
    )
}

export default EventComponent;