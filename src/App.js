import logo from './logo.svg';
import './App.css';
import Card from './Card';
import List from './List';
import { useState } from 'react';

function App() {
  let handleAddToCart = (object) => {
    // alert("king is here ")
    setCardList([...cardList, object])
    setTotal(total + object.button)

  }
  let handleRemoveCart = (object) => {
    // alert(object.id)
    let removedItem = cardList.filter(obj => obj.id !== object.id)
    setCardList([...removedItem])
    setTotal(total - object.button)
  }
  const [cardModel, setCardModel] = useState([
    {
      id: 1,
      title: "VIVO",
      button: 1200,
      content: "very useful things"
    },
    {
      id: 2,
      title: "REDMI",
      button: 4500,
      content: "best product"
    },
    {
      id: 3,
      title: "REALME",
      button: 2000,
      content: "smart product"
    }
  ])


  const [cardList, setCardList] = useState([])
  const [total, setTotal] = useState(0)

  return (
    <div className='container'>
      <div className='row'>
        <div className='col-lg-8'>
          <div className='row'>


            {
              cardModel.map((model) => {
                return (
                  <Card handleAddToCart={handleAddToCart} object={model}></Card>
                )
              })
            }


            <div className='col-lg-4'>

            </div>
          </div>
        </div>
        <div className='col-lg-4 mt-3'>
          <ol class="list-group list-group-numbered">
            <h4>List</h4>

            {
              cardList.map((item) => {
                return <List handleRemoveCart={handleRemoveCart} data={item} ></List>

              })

            }


            <h3>total-{total}</h3>
          </ol>
        </div>
      </div>
    </div>
  );
}

export default App;
