const movieCards=[  

  {id:'1',
  imageLink:'https://m.media-amazon.com/images/I/81xDR+MB3qL._AC_UL480_FMwebp_QL65_.jpg',
  movieName:'Bhagavanth Kesari',
  monthlyRent:' ₹79 torent'
  },
  {id:'2',
  imageLink:'https://m.media-amazon.com/images/I/81dSebh5+aL._AC_UL480_QL65_.jpg',
  movieName:'Veeran',
  monthlyRent:'₹79 to rent'
  },
  {id:'3',
  imageLink:'https://m.media-amazon.com/images/I/71-RyteNj+L._AC_UL480_QL65_.jpg',
  movieName:'3 Idiots',
  monthlyRent:'₹0 with a Prime membership'
  },
  
  {id:'4', 
  imageLink:'https://m.media-amazon.com/images/I/81SzJn5m-sL._AC_UL480_QL65_.jpg',
  movieName:'Indian Police Force ',
  monthlyRent:'₹0 with a Prime membership'
  },
  {id:'5',
  imageLink:'https://m.media-amazon.com/images/I/91i2sELpNML._AC_UL480_FMwebp_QL65_.jpg',
  movieName:'The vilage',
  monthlyRent:'₹0 with a Prime membership'
  },
  
  {id:'6',
  imageLink:'https://m.media-amazon.com/images/I/917aTF-MopL._AC_UL480_QL65_.jpg',
  movieName:'Neeyat',
  monthlyRent:'₹99 to rent'
  },
  {id:'7',
  imageLink:'https://m.media-amazon.com/images/I/71OlHY5aPrL._AC_UL480_QL65_.jpg',
  movieName:'Darbar (Hindi)',
  monthlyRent:'₹0 with a Prime membership'
  },
  {id:'8',
  imageLink:'https://m.media-amazon.com/images/I/61+g5qFahyL._AC_UL480_QL65_.jpg',
  movieName:'A Nice Girl Like You',
  monthlyRent:'₹0 with a Prime membership'
  },
  
  {id:'9',
  imageLink:'https://m.media-amazon.com/images/I/91DZlIfF7BL._AC_UL480_QL65_.jpg',
  movieName:'Amsterdam',
  monthlyRent:'₹119 to rent'
  },
  
  {id:'10',
  imageLink:'https://m.media-amazon.com/images/I/91ayeIsntbL._AC_UL480_FMwebp_QL65_.jpg',
  movieName:'Thandatti',
  monthlyRent:'₹119 to rent'
  }
  
  ]

function App() {
  return (
    <div style={{
      display:'flex',
      flexWrap:'wrap'
    }}>
      {
        movieCards.map(e=>{
        return( <><img width='250px' height='250px' src={e['imageLink']} alt="img"/>

<h2>{e.movieName}</h2> </>
        )

        })
      }
    </div>
  );
}

export default App;
