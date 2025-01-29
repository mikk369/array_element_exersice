import { useState, useEffect } from "react";
import "./App.css";

// const events = [
//   { title: "Event 1", startDate: "2025-01-08", endDate: "2025-01-10" },
//   { title: "Event 2", startDate: "2025-01-13", endDate: "2025-01-16" },
// ];


// const adjustEventEnd = (endDate) => new Date(endDate).toISOString();

// const mapEvents = (events) => {
//   return events.map((event) => ({
//     ...event,
//     end: adjustEventEnd(event.endDate),
//   }));
// };

// const filterEventsWithDateRange = (events, selectedYear, monthIndex, day) => {
//   const mappedEvents = mapEvents(events);
  
//   return mappedEvents.filter((event) => {
//     const eventStart = new Date(event.startDate);
//     const eventEnd = new Date(event.endDate);
//     const currentDate = new Date(selectedYear, monthIndex, day);

//     eventStart.setHours(0, 0, 0, 0);
//     eventEnd.setHours(23, 59, 59, 999);
//     currentDate.setHours(0, 0, 0, 0);

//     return day && currentDate >= eventStart && currentDate <= eventEnd;
//   });
// };

// const filteredEvents = filterEventsWithDateRange(events, 2025, 0, 16);
// console.log(filteredEvents);

// const numbers = [1,2,3]

// const dougleNumbers = (numbers) => {
//  return numbers.map((number) => number * 2)
// }

// const asd = dougleNumbers(numbers)
// console.log(asd);

// const numbers = [1, 2, 3, 4, 5];

// const evenNumbers = (numbers) => {
//   return numbers.filter((number) => number % 2 == 0)
// }

// const filteredNumbers = evenNumbers(numbers)

// console.log(filteredNumbers);

// const numbers = [3, 7, 11, 2];

// const greaterThan = (numbers) => {
//   return numbers.some((number) => number > 10)
// }

// const greaterThanTen = greaterThan(numbers);
// console.log(greaterThanTen);

// const dates = [1672531199000, 1672617599000];

// const timeStamps = (datesAarr) => {
// return datesAarr.map((date) => {
//   const d = new Date(date)
//   const formattedDate = `${d.getMonth() + 1}.${d.getDate()}.${d.getFullYear()}`;
//   return formattedDate
// })
// }

// const changedDates = timeStamps(dates);
// console.log(changedDates);

// const dates = ['2025-01-15', '2025-01-23', '2025-02-10', '2025-02-14', '2025-03-15'] 

// const currDate = (arrDates) => {
//   const currentMonth = new Date().getMonth();
//   const currentYear = new Date().getFullYear();

//   return arrDates.filter((d) => {
//     const date = new Date(d)
//     return date.getMonth() === currentMonth && date.getFullYear() === currentYear;
//   })
// }

// const asd = currDate(dates);

// console.log(asd);

// const products = [
//   { id: 1, name: "Laptop", price: 1200 },
//   { id: 2, name: "Mouse", price: 20 },
//   { id: 3, name: "Keyboard", price: 50 },
//   { id: 4, name: "tool", price: 150 },
// ]

// function App() {

//   return (
//     <div>
//       {products.filter((product) => product.price >= 100).map((product) => {
//         console.log(product.name);
//         return (
//           <ul key={product.id}>
//             <li>{product.name} - {product.price}</li>
//           </ul>
//         )
//       })}
//     </div>
//   )
// }

const items = ["Item 1", "Item 2", "Item 3", "Item 4", "Item 5", "Item 6", "Item 7"];
const itemsPerPage = 2;

function App() {
  //track current page
  const [currentPage, setCurrentPage] = useState(0);

  const nextPage = () => {
    if((currentPage + 1) * itemsPerPage < items.length) {
      setCurrentPage(currentPage + 1);
    }
  }

  const prevPage = () => {
    if(currentPage > 0) {
      setCurrentPage(currentPage - 1);
    }
  }

  const startIndex = currentPage * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;

  const currentItems = items.slice(startIndex, endIndex);

  return (
    <div>
      <div>
      {currentItems.map((item, i) => {
        return(
          <ul key={i}>
              <li>{item}</li>
            </ul>
            )
          })}
      </div>
          <button onClick={prevPage} disabled={currentPage === 0}>Prev</button>
          <button onClick={nextPage} disabled={currentPage * itemsPerPage + itemsPerPage >= items.length}>Next</button>
      </div>
  )
}


export default App
