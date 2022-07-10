import { Dialog } from "../Dialog"
import { FC } from "react"

type DialogMobileiewPropTypes = {
  onClose: () => void
  title: string
}

const DialogMobileView: FC<DialogMobileiewPropTypes> = ({ onClose, title }) => {
  return (
    <>
      <Dialog guestRoomsString={""} onClose={onClose} title={title} />
    </>
  )
}

export default DialogMobileView
