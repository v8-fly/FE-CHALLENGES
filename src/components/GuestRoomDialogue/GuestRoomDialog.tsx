import React from "react"
import { FC } from "react"
import { MobileView, BrowserView } from "react-device-detect"
import DialogBrowserView from "./DialogBrowserView/DialogBrowserView"
import DialogMobileView from "./DialogMobileView/DialogMobileView"

type GuestRoomDialogPropTypes = {
  guestRoomsString?: string
  open?: boolean
  onClose: () => void
}

export const GuestRoomDialog: FC<GuestRoomDialogPropTypes> = ({
  open = false,
  onClose,
}) => {
  return (
    <>
      {open && (
        <>
          <BrowserView>
            <DialogBrowserView onClose={onClose} title="Browser View" />
          </BrowserView>
          <MobileView>
            <DialogMobileView onClose={onClose} title="Mobile View" />
          </MobileView>
        </>
      )}
    </>
  )
}

export default GuestRoomDialog
