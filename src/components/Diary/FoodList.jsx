import Form from "./DiaryForm";

const FoodList = (food) => {
    return (
    <>
    <ul>
      {food.map(() => {
        return (
          <li>
            <Form/>
          </li>
        );
      })}
    </ul>
    </>
 
)}

export default FoodList;