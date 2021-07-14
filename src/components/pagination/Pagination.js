import React, {useState} from 'react'

const Pagination = ({totalUsersCount, pageSize, portionSize, onPageChange }) => {
    let pageCount = Math.ceil(totalUsersCount / pageSize)
    let pages = []
    for (let i=1; i<= pageCount; i++){
            pages.push(i)
        }
    let portionCount = Math.ceil(pageCount / portionSize)
    let [portionNumber, setPortionNumber] = useState(1);
    let leftPortionPageNumber = (portionNumber-1)* portionSize + 1;
    let rightPortionPageNumber = portionNumber * portionSize;

    return (
        <div className="d-flex">
            
                        
                <ul className="pagination">
                    <li className="page-item">
                        {portionNumber > 1 && 
                        <a className="page-link" href="#" onClick={()=>{setPortionNumber(portionNumber - 1)}}>
                            <span aria-hidden="true">&laquo;</span>
                        </a>}
                    </li>
                    
                    {pages.filter(page => page >= leftPortionPageNumber && page <= rightPortionPageNumber)
                    .map( page => {
                       return  <li key={page} className="page-item">
                            <a onClick={(e) => {onPageChange(page)}} href='#' className="page-link">{page}</a>

                        </li>
                    })
                    }
                    <li className="page-item">
                        {portionCount > portionNumber && 
                        <a className="page-link" href="#" onClick={()=> {setPortionNumber(portionNumber +1)}}>
                            <span aria-hidden="true">&raquo;</span>
                        </a>}
                    </li>
                   
                </ul>
            
            

        </div>
        
    )
}

export default Pagination

