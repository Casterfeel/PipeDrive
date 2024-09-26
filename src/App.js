import { useState } from 'react';
import './App.css';
import Header from './components/header';
import Sidebar from './components/sidebar';
import Iframe from './components/iframe';
import SuccessModal from './components/successModal';

function App() {
  const [isFrameVisible, setIsFrameVisible] = useState(false);
  const [isSuccessModalVisible, setIsSuccessModalVisible] = useState(false);
  const [dealId, setDealId] = useState('https://mycompany19.pipedrive.com/deal');


  const handleOpenFrame = () => {
    setIsFrameVisible(true);
  }

  const handleCloseFrame = () => {
    setIsFrameVisible(false);
  }

  const handleSuccess = (id) => {
    setIsSuccessModalVisible(true);
    handleCloseFrame();
    setDealId(id)
  }

  const handleCloseSuccessModal = () => {
    setIsSuccessModalVisible(false);
  }

  return (
    <div className="App">
      <Header />
      <Sidebar onOpen = {handleOpenFrame}/>
      {isFrameVisible && <Iframe onClose = {handleCloseFrame} onSuccess = {handleSuccess}/>}
      {isSuccessModalVisible && <SuccessModal onClose={handleCloseSuccessModal} dealId={dealId}/>}
    </div>
  );
}

export default App;
