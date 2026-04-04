import Pagination from "react-bootstrap/Pagination";

function PaginacionAvanzada({ current, total, onChange }) {
     let items = [];

     // Mostrar páginas cercanas a la actual
     for (let number = Math.max(1, current - 2); number <= Math.min(total, current + 1); number++) {
          items.push(
               <Pagination.Item key={number} active={number === current} onClick={() => onChange(number)}>
                    {number}
               </Pagination.Item>
          );
     }

     return (
          <Pagination>
               <Pagination.First onClick={() => onChange(1)} disabled={current === 1}/>
               <Pagination.Prev onClick={() => onChange(current - 1)} disabled={current === 1} />
                    {current > 3 && <Pagination.Ellipsis disabled />}
                    {items}
                    {current < total - 2 && <Pagination.Ellipsis disabled/>}
               <Pagination.Next onClick={() => onChange(current + 1)} disabled={current === total}/>
               <Pagination.Last onClick={() => onChange(total)} disabled={current === total}/>
          </Pagination>
     )
}

export default PaginacionAvanzada;