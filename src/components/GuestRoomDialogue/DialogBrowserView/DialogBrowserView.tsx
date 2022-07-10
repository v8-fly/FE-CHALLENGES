import { Dialog } from "../Dialog"
import { FC } from "react"

type DialogBrowserViewPropTypes = {
  onClose: () => void
  title: string
}

const DialogBrowserView: FC<DialogBrowserViewPropTypes> = ({
  onClose,
  title,
}) => {
  return (
    <>
      <Dialog guestRoomsString={""} onClose={onClose} title={title} />
    </>
  )
}

export default DialogBrowserView
