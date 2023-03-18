import styled from "styled-components";

export const ProfileContactsCircleDots = styled.button`
  width: 7.12px;
  height: 7.12px;
  left: 392.9px;
  top: 497.86px;
  background: #c4d600;
  mix-blend-mode: normal;
  opacity: 0.5;
  border-radius: 3.56066px;
  border: none;
  margin-right: 14.28px;

  :hover {
    opacity: 50%;
  }
`;

export const ProfileContactsCircleButtons = styled.button`
  width: 28.49px;
  height: 28.49px;
  border: none;
  background: #c4d600;
  opacity: 0.4;
  border-radius: 50%;
  transform: matrix(-1, 0, 0, 1, 0, 0);

  :hover {
    opacity: 50%;
  }
`;
export const ProfileContactsCircle = styled.div`
  position: absolute;
  right: 14.28px;
  left: 21.25px;
  display: flex;
  justify-content: space-between;
`;