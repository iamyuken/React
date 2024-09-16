const App = ()=>{
    return (
        <>
        <div className="flex justify-center items-center h-screen w-screen bg-purple-800">
            <div className="w-[20%] h-1/3 bg-white">
                <form action="" className="flex flex-col gap-4">
                    <input type="text" placeholder="Name" className="p-3 w-full font-bold outline-none focus:border-b-2 active:border-none hover:border-purple-600"/>
                    <input type="Email" placeholder="Email" className="p-3 w-full font-bold outline-none focus:border-b-2 active:border-none hover:border-purple-600"/>
                    <input type="numbers" placeholder="Phone" className="p-3 w-full font-bold outline-none focus:border-b-2 active:border-none hover:border-purple-600"/>
                    <input type="Password" placeholder="Password" className="p-3 w-full font-bold outline-none focus:border-b-2 active:border-none hover:border-purple-600"/>
                    <button className="p-3 bg-[#beadec] w-full font-bold  outline-none active:outline-none focus:border-b-2  hover:border-purple-500">Register</button>
                </form>
            </div>
           </div> 
        </>
    );
}

export default App;