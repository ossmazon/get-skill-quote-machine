
import './App.css';
import React from 'react';

function App() {

  const [quotes, setQuotes] = React.useState([]);
  const [randomQuote, setRandomQuote] = React.useState("");
  const [color, setColor]=React.useState("#2c3e50");

  React.useEffect(() => {
    async function fetchData() {
      const response = await fetch("https://type.fit/api/quotes")
      const data = await response.json();

      setQuotes(data);
      let randIndex = Math.floor(Math.random() * data.length);
      setRandomQuote(data[randIndex]);

    }
    fetchData();
  }, [])

  const getNewQuote = () => {

    
      const colors = [
        '#16a085',
        '#27ae60',
        '#2c3e50',
        '#f39c12',
        '#e74c3c',
        '#9b59b6',
        '#FB6964',
        '#342224',
        '#472E32',
        '#BDBB99',
        '#77B1A9',
        '#73A857'
      ];

      let randIndex = Math.floor(Math.random() * quotes.length);
      let ranColordIndex = Math.floor(Math.random() * colors.length);
      setRandomQuote(quotes[randIndex]);
      setColor(colors[ranColordIndex]);

  }

  return (
    <div style={{backgroundColor:color, minHeight:"100vh"}}  > 
    <div className="container-fluid p-5">
      <div class="row justify-content-center ">

        <div class="card col-sm-8 col-md-6 col-lg-4" id="quote-box">

          <div class="card-body " style={{color: color}}>
            {randomQuote ? (
              <>
                <p class="card-text text-center" id="text">&quot;{randomQuote.text}&quot;</p>
                <div class="card-title text-end" id="author">-{randomQuote.author || "no author"}</div>

              </>
            ) : (
              <h2>Loading</h2>
            )}
            <div class="row">
              <div class="col text-start" >
                <a id="tweet-quote" href={'https://twitter.com/intent/tweet?hashtags=quotesGenerator&related=freecodecamp&text=' +
                  encodeURIComponent(
                    '"' +randomQuote.text + '"'+' '+'-'+ randomQuote.author
                  )
                }
                target="_blank" class="btn btn-sm" style={{background:color, color:'white'}}  >
                  <i class="icon-twitter"></i>
                </a>


              </div>
              <div class="col text-end">
                <button  id="new-quote"  onClick={getNewQuote} class="btn btn-sm text-white" type="button" style={{background:color}}>New Quote</button>
              </div>

            </div>

          </div>
        </div>

      </div>
      <div class="row justify-content-center">
        <div class="col-6 text-center">
          <p class="text-white">by <a href={'https://github.com/ossmazon'}target="_blank" class="text-decoration-none text-reset">ossmazon</a></p>
        
        </div>
      </div>
    </div>
    </div>
  );
}

export default App;
