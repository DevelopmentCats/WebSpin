import { useState } from 'react';
import styled from 'styled-components';
import Header from './components/Header';
import Wormhole from './animations/Wormhole';
import { checkHealth } from './services/api';
import { debounce } from './utils/helpers';
import './styles/global.css';

const AppContainer = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
`;

const MainContent = styled.main`
  flex: 1;
  padding: 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const InputContainer = styled.div`
  display: flex;
  gap: 1rem;
  margin-bottom: 2rem;
  width: 100%;
  max-width: 500px;
`;

const Input = styled.input`
  flex: 1;
  padding: 0.75rem;
  border-radius: 4px;
  border: 1px solid #ccc;
  font-size: 1rem;
`;

const Button = styled.button`
  background-color: var(--primary-color);
  color: white;
  border: none;
  padding: 0.75rem 1.5rem;
  border-radius: 4px;
  cursor: pointer;
  font-size: 1rem;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: var(--secondary-color);
  }
`;

const ResultsContainer = styled.div`
  width: 100%;
  max-width: 800px;
`;

function App() {
  const [searchTerm, setSearchTerm] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [showWormhole, setShowWormhole] = useState(false);

  const handleSearch = debounce(async () => {
    if (!searchTerm.trim()) return;
    
    setIsLoading(true);
    setShowWormhole(true);
    
    try {
      // This is just a placeholder for the actual API call
      // In a real implementation, we would call an API to get website results
      const healthStatus = await checkHealth();
      console.log('API Health Status:', healthStatus);
      
      // Simulate loading time
      setTimeout(() => {
        setIsLoading(false);
      }, 2000);
    } catch (error) {
      console.error('Error:', error);
      setIsLoading(false);
      setShowWormhole(false);
    }
  }, 300);

  return (
    <AppContainer>
      <Header />
      <MainContent>
        <h2>Enter a word to explore the web</h2>
        <InputContainer>
          <Input
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Enter a word..."
            disabled={isLoading}
          />
          <Button onClick={handleSearch} disabled={isLoading}>
            {isLoading ? 'Searching...' : 'Search'}
          </Button>
        </InputContainer>
        
        <Wormhole isActive={showWormhole} />
        
        <ResultsContainer>
          {/* Results will be displayed here */}
        </ResultsContainer>
      </MainContent>
    </AppContainer>
  );
}

export default App;