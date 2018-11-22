import React from 'react';
import '../css/styles.css';


 const NewsItem = ({item}) => {
     return (
         <div className="news_item">
             <h3>{item.title}</h3>
             <div>
                 <p>{item.feed}</p>
             </div>
         </div>
     )
 }

 export default NewsItem;