import React, {useState, useEffect} from 'react'
import axios from 'axios'

function Demo() {
  const [posts, setPosts] = useState([[]])
  const tempArray = []
  
  useEffect(()=> {
    axios.get('https://api.publicapis.org/entries')
    .then(res => {
      console.log(res)
      //alert(res.data.entries[0].Category);
      // for(var i=0; i<res.data.count; i++){
      //   tempArray.push(res.data.entries[i]);
      //   //tempArray[i][0] = res.data.entries[i].API
      //   //tempArray[i][1] = res.data.entries[i].Description
      // }
      alert(res.data)
      
      setPosts(res.data)
      
    })
    .catch(err => {
      console.log(err)
    })
  }, [])

  return (
    <div>
      {      
       <ul>
        {
              posts.map((rowdata) =>
                <li>
                    {rowdata}
                     <ul>
                        {
                           rowdata.map((sub) =>
                            <li>{sub.API}</li>
                           )
                        }
                    </ul>
                </li>
              )
          }
      </ul> 
      }
    </div>
  )
}

export default Demo