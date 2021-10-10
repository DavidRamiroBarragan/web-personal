import { GiHamburgerMenu } from "react-icons/all"
import Sidebar from "../../Sidebar/Sidebar"
import LinkContainer from "../Linkcontainer/LinkContainer"

function SideBarMenu({ openModal, openModalHandler, closeModalHandler }) {
  return (
    <>
      <GiHamburgerMenu
        size="1.65rem"
        onClick={openModalHandler}
        style={{
          cursor: "pointer",
        }}
      />
      <Sidebar openModal={openModal} onClickHandler={closeModalHandler}>
        <LinkContainer
          closeModalHandler={closeModalHandler}
          openModal={openModal}
        />
      </Sidebar>
    </>
  )
}

export default SideBarMenu
