import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { Offcanvas } from "react-bootstrap";
import styled from "styled-components";
import ChevronLeft from "mdi-react/ChevronLeftIcon";
import { colorBackground, colorHover } from "@/utils/palette";
import {
  hideFormPanel,
  showFormPanel,
} from "../../redux/actions/FormTypeActions/formType";
// import { hideFormPanel } from "../../redux/actions/FormTypeActions/formType";

const OffCanvas = ({ isopen, children }) => {
  const dispatch = useDispatch();
  const [show, setShow] = useState(isopen ? isopen : false);

  useEffect(() => {
    if (isopen) {
      setShow(isopen);
    } else {
      console.log("isOpen");
      setShow(isopen);
    }
  }, [isopen]);

  const handleClose = () => {
    setShow(false);
    dispatch(hideFormPanel());
  };
  const handleShow = () => {
    setShow(true);
    dispatch(
      showFormPanel({ formType: 2, showForm: true, moduleId: 2, tab: 1 })
    );
  };

  return (
    <>
      <CustomContainer>
        <CustomizerButton type="button" onClick={handleShow}>
          <ChevronLeft />
        </CustomizerButton>
      </CustomContainer>
      <OffCanvasWrap
        show={show}
        onHide={handleClose}
        backdrop={false}
        placement="end"
      >
        <Offcanvas.Header closeButton style={{ paddingLeft: "10px" }}>
          <Offcanvas.Title>Device Configurations</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body style={{ padding: 0 }}>{children}</Offcanvas.Body>
      </OffCanvasWrap>
    </>
  );
};

export default OffCanvas;

const OffCanvasWrap = styled(Offcanvas)`
  box-shadow: 0 1px 30px 1px rgba(0, 0, 0, 0.11)
  top: 60px;
  margin-top: 60px;
  background: rgba(153, 153, 153, 0.4);
  backdrop-filter: blur(20px);
  border: 0;
`;

const CustomContainer = styled.div`
  width: 50px;
  height: 100vh;
  position: fixed;
  top: 60px;
  border: none;
  border-radius: 3px 0 0 3px;
  box-shadow: 0 1px 30px 1px rgba(0, 0, 0, 0.11);
  right: 0;
  background: ${colorBackground};
`;

const CustomizerButton = styled.button`
  width: 50px;
  height: 50px;
  border: none;
  position: fixed;
  top: 80px;
  border-radius: 3px 0 0 3px;
  cursor: pointer;
  right: 0;
  color: #b1c3c8;
  background-color: ${colorBackground};
  z-index: 101;

  &:hover {
    background-color: ${colorHover};
  }
`;
