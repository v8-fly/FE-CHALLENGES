import { FC } from "react"
import { css, keyframes } from "@emotion/css"
import { GuestRoomsProvider } from "../../../GuestRooms/contexts/GuestRoomsContext"

const dialogFade = keyframes`
  from {
    top: 100%;
  }
  to {
    top: 0;
  }
`

const modelStyle = css`
  display: flex;
  flex-direction: column;
  height: unset;
  background-color: white;
  position: fixed;
  inset: 0px;
  box-shadow: rgb(42 51 61 / 16%) 0px 4px 10px 0px,
    rgb(42 51 61 / 11%) 0px 1px 4px 0px, rgb(42 51 61 / 14%) 0px 0px 1px 0px;

  animation-name: ${dialogFade};
  animation-duration: 0.3s;
`

type DialogPropTypes = {
  guestRoomsString?: string
  onClose?: () => void
  title: string
}

export const Dialog: FC<DialogPropTypes> = ({
  guestRoomsString,
  onClose,
  title,
}) => (
  <GuestRoomsProvider guestRoomsString={guestRoomsString}>
    <div className={modelStyle}>
      <h1>
        {title === "Mobile View" ? <h2>Hey WOWW</h2> : "BROWSER"}
        <button onClick={onClose}>Close</button>
      </h1>
    </div>
  </GuestRoomsProvider>
)
