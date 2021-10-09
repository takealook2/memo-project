import React from 'react';
import './App.css';
import plus from './plus.png';
import Modal from './components/Modal';

class App extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      isModalOpen: false,
      memos: [
        {
          title : "첫 번째 메모",
          author : "서하",
          content : "멋사 4-6시",
        }
      ]
    }
  }

  openModal = () => {
    this.setState({ isModalOpen: true});
  }

  closeModal = () => {
    this.setState({ isModalOpen: false});
  }

  handleCreate = (new_memo) => {
    console.log(new_memo);
    let memos = this.state.memos;
    this.setState({memos: [...memos, new_memo]});
  }


  render() {
    return (
      <div className='container'>
      <div className='App'>
        <h1> 메모장 </h1><br/><br/>
        <table>
          <tbody>
            <tr className='trlist'>
            {this.state.memos.map ( (memo, index) =>
              <td className='cell' key={index}>
                  <div className='inner'>
                    <h2> {memo.title} </h2>
                    <h5> {memo.author} </h5><br/><br/>
                    <h4> {memo.content} </h4><br/>
                    </div>
                  </td>
              )}
              <td className='cell'>
                    <div className="inner" onClick={this.openModal}>
                      <img src={plus} className='picture' alt='logo' />
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
            <main className='App'>
              <Modal isOpen={this.state.isModalOpen} close={this.closeModal}
                    onCreate={this.handleCreate}/>
            </main>
          </div>
      </div>
    );
  }
}

export default App;