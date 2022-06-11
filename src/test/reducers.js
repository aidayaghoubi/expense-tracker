let lastid = 0;

// function reducers(state = [], action) {
//   switch (action.type) {
//     case "ADD":
//       return [
//         ...state,
//         {
//           name: action.desc,
//           id: lastid++,
//           done: false,
//         },
//       ]
//     case "DONE":
//         return state.map(el => el.id !== action.id ? el  :{...el , done:true}  );

//     case "REMOVE":
//       return state.filter((item) => item.id !== action.id);

//     default:
//       return state;
//   }
// }

function reducers(state ={
  wholeAmount : 0,
  expense:0,
  income:0,
  history:[]
}, action) {
  switch (action.type) {
    case "EXPENSE":
     
      return {
        ...state,
        history:[...state.history , { values : action.payLoad , action:"expense"} , ],
        expense:parseInt(state.expense , 10) + parseInt(action.payLoad?.value?.amount , 10),
        wholeAmount:parseInt(state.wholeAmount,10) - parseInt(action.payLoad.value.amount ,10)
      }

    case "INCOME":
   
        return {
          ...state,
          history:[...state.history ,{ values : action.payLoad , action:"income"} ],
          income:parseInt(state.income ,10) + parseInt(action.payLoad.value.amount ,10),
          wholeAmount:parseInt(state.wholeAmount ,10) + parseInt(action.payLoad.value.amount ,10) 
        }

    // case "BALLANCE":
     
    //   return  {
    //     ...state,
    //     income:state.action+ action.desc.amount,
    //     wholeAmount:state.wholeAmount + action.desc.amount
    //   }

    default:
      return state;
  }
}

export default reducers;
