import { Loader } from "lucide-react";

const App = () => {
  return (
    <div className="h-screen w-screen bg-purple-600 flex justify-center items-center">
      <div className=" h-3/6 w-[30%] flex justify-center items-center rounded-md shadow-2xl">
            <form action="" className="form flex flex-col w-[80%] h-[80%] gap-4 bg-white ">
              <input type="text" placeholder="Name" className="p-3 w-full font-bold outline-none active:outline-none focus:border-b-2 hover:border-purple-500"/>
              <input type="email" placeholder="Email " className="p-3  w-full font-bold outline-none active:outline-none focus:border-b-2 hover:border-purple-500"/>
              <input type="numbers" placeholder="Phone" className="p-3  w-full font-bold outline-none active:outline-none focus:border-b-2 hover:border-purple-500"/>
              <input type="password" placeholder="Password" className="p-3  w-full font-bold outline-none active:outline-none focus:border-b-2 hover:border-purple-500"/>
              <button className="p-3 bg-[#f8f8f8] w-full font-bold  outline-none active:outline-none focus:border-b-2  hover:border-purple-500">Register</button>
            </form>
      </div>
    </div>
  );
}
export default App;



// import { Loader } from "lucide-react";

// const App = () => {
//   return (
//     <>
//       <div className="h-screen w-screen flex justify-center items-center bg-purple-600">
//         <div className="h-3/6 w-[30%] flex justify-center items-center bg-white rounded-md shadow-2xl">
//           <form className="w-[80%] h-[80%] flex flex-col justify-center items-center gap-4">
//             <input type="text" name="" id="" placeholder="Name" className="p-3 bg-[#f8f8f8] w-full font-bold outline-none active:outline-none focus:border-b-2 hover:border-purple-500" />
//             <input type="text" name="" id="" placeholder="email" className="p-3 bg-[#f8f8f8] w-full font-bold outline-none active:outline-none focus:border-b-2 hover:border-purple-500" />
//             <input type="number" name="" id="" placeholder="phone" className="p-3 bg-[#f8f8f8] w-full font-bold outline-none active:outline-none focus:border-b-2 hover:border-purple-500" />
//             <input type="password" name="" id="" placeholder="password" className="p-3 bg-[#f8f8f8] w-full font-bold outline-none active:outline-none focus:border-b-2 hover:border-purple-500" />
//             <button type="submit" className="w-full bg-purple-600 text-white p-3"> <Loader  className="animate-spin"/>  Register</button>
//           </form>
//         </div>
//       </div>
//     </>
//   )
// }
// export default App;