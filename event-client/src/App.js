import './App.css';
import CreateProposal from './components/Create Proposal/CreateProposal';
import { useState } from 'react';
import ProposalList from './components/proposal List/ProposalList';

function App() {
  const [modal, setModal ] = useState(false);
  return (
    <div className="App">      
      <ProposalList setModal={setModal}/>
      {modal && <CreateProposal setModal={setModal}/>}
    </div>
  );
}

export default App;
