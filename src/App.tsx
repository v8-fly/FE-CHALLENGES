import { useState } from "react"
import "./App.css"
import { css } from "@emotion/css"
import { Button } from "./components/Button"
import GuestRoomDialog from "./components/GuestRoomDialogue/GuestRoomDialog"

function App() {
  const [open, setOpen] = useState(false)
  const openDialog = () => setOpen(true)
  const closeDialog = () => setOpen(false)

  return (
    <div className="App">
      <div
        className={css`
          display: flex;
          justify-content: center;
          align-items: center;
          height: 100%;
          width: 100%;
          color: red;
          background-color: teal;
        `}
      >
        <Button onClick={openDialog}>MR BEAST</Button>
      </div>
      <GuestRoomDialog open={open} onClose={closeDialog} />
    </div>
  )
}

export default App
