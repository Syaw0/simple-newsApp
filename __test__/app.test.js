import React from "react";
import { render , fireEvent , waitFor ,cleanup } from "@testing-library/react";
import "@testing-library/jest-dom"
import App from "../src/App/App";
import fetching from "../src/App/store/fetching"
import {fakeData} from "./fakedata"
jest.mock("../src/App/store/fetching" , ()=>jest.fn(()=>Promise.resolve({
    articles:[
        {
            author:"foo" ,
            content:"foobar",
            publishedAt:"fooTime",
            description:"foobar foobar",
            title:"foo",
            source:{
                name:"foo"
            }
        }
    ]
})) )

afterEach(cleanup)

describe("Render First Time " , ()=>{
    test("App render correctly" , async()=>{
        let con 
        await waitFor(()=>con = render(<App/>))
        await waitFor (()=> expect(con.getByTestId("header")).toBeInTheDocument())
    })
    test("Intro render correctly" , async()=>{
        let con 
        await waitFor(()=>con = render(<App/>))
        await waitFor (()=> expect(con.getByTestId("intro")).toBeInTheDocument())
    })
    test("Other components does`n render" , async()=>{
        let con 
        await waitFor(()=>con = render(<App/>))
        await waitFor (()=> expect(con.container.querySelector("#main_con")).not.toBeInTheDocument())
    })
})


describe("when user click on the theme switch colors will swapped" , ()=>{
    test("first time theme is light and then when click on the theme swap theme will be dark" , async()=>{
        let con 
        await waitFor(()=>con = render(<App/>))
        await waitFor (()=> expect(con.container.querySelector("#wrapper").className).not.toBe("dark-theme"))
        fireEvent.click(con.container.querySelector("#switchTheme"))
        await waitFor (()=> expect(con.container.querySelector("#wrapper").className).toBe("dark-theme"))
    })
})

describe("Render Intro and then when user click on the GetStart button Render Main Component",()=>{
    test("first render intro correctly when user come in app",async()=>{
        let con 
        await waitFor(()=>con = render(<App/>))
        await waitFor (()=> expect(con.getByTestId("intro")).toBeInTheDocument())
    })

    test("click on the get start button and render main component and unmount intro",async()=>{
        let con 
        await waitFor(()=>con = render(<App/>))
        fireEvent.click(con.container.querySelector("#getStart_Btn"))
        await waitFor (()=> expect(con.container.querySelector("#main_con")).toBeInTheDocument())
        await waitFor (()=> expect(con.container.querySelector("#intro")).not.toBeInTheDocument())
    })


})




describe("when user come into main page  ",()=>{
    test("for first time render input only " , async()=>{
        let con 
        await waitFor(()=>con = render(<App/>))
        fireEvent.click(con.container.querySelector("#getStart_Btn"))
        await waitFor (()=> expect(con.container.querySelector("#main_con")).toBeInTheDocument())
        await waitFor (()=> expect(con.container.querySelector("#main_input ")).toBeInTheDocument())
        await waitFor (()=> expect(con.container.querySelector("#main_card_con").children.length).toBe(0))
    })
    
    describe("User write into input and click icon or key down Enter Key" , ()=>{
        test("first loading show up",async()=>{
            let con 
            await waitFor(()=>con = render(<App/>))
            fireEvent.click(con.container.querySelector("#getStart_Btn"))
            fireEvent.change(con.container.querySelector("#main_input ") , {target:{value:"NBA"}})
            fireEvent.keyDown(con.container.querySelector("#main_input ") , {key: 'Enter', code: 'Enter', charCode: 13})
            expect(con.container.querySelector("#loader_con ")).toBeInTheDocument()
            await waitFor (()=> expect(con.getByTestId("Card")).toBeInTheDocument())
        })

        test("api return data correctly and cards list show up",async()=>{
            let con 
            await waitFor(()=>con = render(<App/>))
            fireEvent.click(con.container.querySelector("#getStart_Btn"))
            fireEvent.change(con.container.querySelector("#main_input ") , {target:{value:"NBA"}})
            fireEvent.keyDown(con.container.querySelector("#main_input ") , {key: 'Enter', code: 'Enter', charCode: 13})
            await waitFor (()=> expect(con.getByTestId("Card")).toBeInTheDocument())
            
        })

        test("api return data in empty array and error show up with empty warning",async()=>{
            fetching.mockImplementationOnce(()=>Promise.resolve({articles:[]}))
            let con 
            await waitFor(()=>con = render(<App/>))
            fireEvent.click(con.container.querySelector("#getStart_Btn"))
            fireEvent.change(con.container.querySelector("#main_input ") , {target:{value:"NBA"}})
            fireEvent.keyDown(con.container.querySelector("#main_input ") , {key: 'Enter', code: 'Enter', charCode: 13})
            await waitFor (()=> expect(con.container.querySelector("#error_con")).toBeInTheDocument())
            await waitFor (()=> expect(con.getByText(/nothing found/i)).toBeInTheDocument())
            
        })

        test("api throw error and error show up with network warning",async()=>{
            fetching.mockImplementationOnce(()=>Promise.reject("Error happen"))
            let con 
            await waitFor(()=>con = render(<App/>))
            fireEvent.click(con.container.querySelector("#getStart_Btn"))
            fireEvent.change(con.container.querySelector("#main_input ") , {target:{value:"NBA"}})
            fireEvent.keyDown(con.container.querySelector("#main_input ") , {key: 'Enter', code: 'Enter', charCode: 13})
            await waitFor (()=> expect(con.container.querySelector("#error_con")).toBeInTheDocument())
            await waitFor (()=> expect(con.getByText(/Something/i)).toBeInTheDocument())
            
        })
    })

    describe("first time news return from api" , ()=>{
            test("render just 10 of fewer cards" , async()=>{
                fetching.mockImplementationOnce(()=>Promise.resolve({articles:fakeData}))
            let con 
            await waitFor(()=>con = render(<App/>))
            fireEvent.click(con.container.querySelector("#getStart_Btn"))
            fireEvent.change(con.container.querySelector("#main_input ") , {target:{value:"NBA"}})
            fireEvent.keyDown(con.container.querySelector("#main_input ") , {key: 'Enter', code: 'Enter', charCode: 13})
            await waitFor (()=> expect(con.getAllByTestId("Card").length).toBeLessThanOrEqual(10))
            })

            test("click on the see more news and render next 10 card and button became a end of the list " , async()=>{
                fetching.mockImplementationOnce(()=>Promise.resolve({articles:fakeData}))
            let con 
            await waitFor(()=>con = render(<App/>))
            fireEvent.click(con.container.querySelector("#getStart_Btn"))
            fireEvent.change(con.container.querySelector("#main_input ") , {target:{value:"NBA"}})
            fireEvent.keyDown(con.container.querySelector("#main_input ") , {key: 'Enter', code: 'Enter', charCode: 13})
            await waitFor (()=> expect(con.getAllByTestId("Card").length).toBeLessThanOrEqual(10))
            fireEvent.click(con.container.querySelector("#loadmore_btn"))
            await waitFor(()=>expect(con.getAllByTestId("Card").length).toBeLessThanOrEqual(20))
            await waitFor(()=>expect(con.getAllByTestId("Card").length).toBeGreaterThan(10))
            await waitFor(()=>expect(con.container.querySelector("#loadmore_btn").innerHTML).toBe("END OF LIST"))
            })
    })
})
