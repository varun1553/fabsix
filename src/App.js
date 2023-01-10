import './App.css';
import MSFT from './components/MSFT';
import XOM from './components/XOM';
import PFE from './components/PFE';

function App() {
  return (
    <>
    <div class="bg-light py-5">
        <div class="container m-auto">
            <div class="row">
                <div class="col-md-4">
                  <MSFT />
                    </div>
                <div class="col-md-4">
                    <XOM />
                </div>
                <div class="col-md-4">
                    <PFE />
                </div>
            </div>
        </div>
    </div>
    </>
  );
}

export default App;
